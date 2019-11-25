import { browser, element, by } from 'protractor';

import NavBarPage from './../../../page-objects/navbar-page';
import SignInPage from './../../../page-objects/signin-page';
import PlaceComponentsPage, { PlaceDeleteDialog } from './place.page-object';
import PlaceUpdatePage from './place-update.page-object';
import { waitUntilDisplayed, waitUntilHidden } from '../../../util/utils';

const expect = chai.expect;

describe('Place e2e test', () => {
  let navBarPage: NavBarPage;
  let signInPage: SignInPage;
  let placeComponentsPage: PlaceComponentsPage;
  let placeUpdatePage: PlaceUpdatePage;
  let placeDeleteDialog: PlaceDeleteDialog;

  before(async () => {
    await browser.get('/');
    navBarPage = new NavBarPage();
    signInPage = await navBarPage.getSignInPage();
    await signInPage.waitUntilDisplayed();

    await signInPage.username.sendKeys('admin');
    await signInPage.password.sendKeys('admin');
    await signInPage.loginButton.click();
    await signInPage.waitUntilHidden();
    await waitUntilDisplayed(navBarPage.entityMenu);
    await waitUntilDisplayed(navBarPage.adminMenu);
    await waitUntilDisplayed(navBarPage.accountMenu);
  });

  it('should load Places', async () => {
    await navBarPage.getEntityPage('place');
    placeComponentsPage = new PlaceComponentsPage();
    expect(await placeComponentsPage.getTitle().getText()).to.match(/Places/);
  });

  it('should load create Place page', async () => {
    await placeComponentsPage.clickOnCreateButton();
    placeUpdatePage = new PlaceUpdatePage();
    expect(await placeUpdatePage.getPageTitle().getAttribute('id')).to.match(/travisNg2App.testRootPlace.home.createOrEditLabel/);
    await placeUpdatePage.cancel();
  });

  it('should create and save Places', async () => {
    async function createPlace() {
      await placeComponentsPage.clickOnCreateButton();
      await placeUpdatePage.setNameInput('name');
      expect(await placeUpdatePage.getNameInput()).to.match(/name/);
      await placeUpdatePage.setNumberOfSeatsInput('5');
      expect(await placeUpdatePage.getNumberOfSeatsInput()).to.eq('5');
      await placeUpdatePage.setShortNameInput('shortName');
      expect(await placeUpdatePage.getShortNameInput()).to.match(/shortName/);
      await placeUpdatePage.setColorBackgroundInput('colorBackground');
      expect(await placeUpdatePage.getColorBackgroundInput()).to.match(/colorBackground/);
      await placeUpdatePage.setColorTextInput('colorText');
      expect(await placeUpdatePage.getColorTextInput()).to.match(/colorText/);
      await placeUpdatePage.setDescriptionInput('description');
      expect(await placeUpdatePage.getDescriptionInput()).to.match(/description/);
      // placeUpdatePage.preferredDivisionSelectLastOption();
      await placeUpdatePage.ownerSelectLastOption();
      await waitUntilDisplayed(placeUpdatePage.getSaveButton());
      await placeUpdatePage.save();
      await waitUntilHidden(placeUpdatePage.getSaveButton());
      expect(await placeUpdatePage.getSaveButton().isPresent()).to.be.false;
    }

    await createPlace();
    await placeComponentsPage.waitUntilLoaded();
    const nbButtonsBeforeCreate = await placeComponentsPage.countDeleteButtons();
    await createPlace();

    await placeComponentsPage.waitUntilDeleteButtonsLength(nbButtonsBeforeCreate + 1);
    expect(await placeComponentsPage.countDeleteButtons()).to.eq(nbButtonsBeforeCreate + 1);
  });

  it('should delete last Place', async () => {
    await placeComponentsPage.waitUntilLoaded();
    const nbButtonsBeforeDelete = await placeComponentsPage.countDeleteButtons();
    await placeComponentsPage.clickOnLastDeleteButton();

    const deleteModal = element(by.className('modal'));
    await waitUntilDisplayed(deleteModal);

    placeDeleteDialog = new PlaceDeleteDialog();
    expect(await placeDeleteDialog.getDialogTitle().getAttribute('id')).to.match(/travisNg2App.testRootPlace.delete.question/);
    await placeDeleteDialog.clickOnConfirmButton();

    await placeComponentsPage.waitUntilDeleteButtonsLength(nbButtonsBeforeDelete - 1);
    expect(await placeComponentsPage.countDeleteButtons()).to.eq(nbButtonsBeforeDelete - 1);
  });

  after(async () => {
    await navBarPage.autoSignOut();
  });
});
