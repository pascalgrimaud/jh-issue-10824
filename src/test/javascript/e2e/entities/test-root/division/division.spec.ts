import { browser, element, by } from 'protractor';

import NavBarPage from './../../../page-objects/navbar-page';
import SignInPage from './../../../page-objects/signin-page';
import DivisionComponentsPage, { DivisionDeleteDialog } from './division.page-object';
import DivisionUpdatePage from './division-update.page-object';
import { waitUntilDisplayed, waitUntilHidden } from '../../../util/utils';

const expect = chai.expect;

describe('Division e2e test', () => {
  let navBarPage: NavBarPage;
  let signInPage: SignInPage;
  let divisionComponentsPage: DivisionComponentsPage;
  let divisionUpdatePage: DivisionUpdatePage;
  let divisionDeleteDialog: DivisionDeleteDialog;

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

  it('should load Divisions', async () => {
    await navBarPage.getEntityPage('division');
    divisionComponentsPage = new DivisionComponentsPage();
    expect(await divisionComponentsPage.getTitle().getText()).to.match(/Divisions/);
  });

  it('should load create Division page', async () => {
    await divisionComponentsPage.clickOnCreateButton();
    divisionUpdatePage = new DivisionUpdatePage();
    expect(await divisionUpdatePage.getPageTitle().getAttribute('id')).to.match(/travisNg2App.testRootDivision.home.createOrEditLabel/);
    await divisionUpdatePage.cancel();
  });

  it('should create and save Divisions', async () => {
    async function createDivision() {
      await divisionComponentsPage.clickOnCreateButton();
      await divisionUpdatePage.setNameInput('name');
      expect(await divisionUpdatePage.getNameInput()).to.match(/name/);
      await divisionUpdatePage.setShortNameInput('shortName');
      expect(await divisionUpdatePage.getShortNameInput()).to.match(/shortName/);
      await divisionUpdatePage.setNumberOfPeopleInput('5');
      expect(await divisionUpdatePage.getNumberOfPeopleInput()).to.eq('5');
      await divisionUpdatePage.divisionTypeSelectLastOption();
      await divisionUpdatePage.setColorBackgroundInput('colorBackground');
      expect(await divisionUpdatePage.getColorBackgroundInput()).to.match(/colorBackground/);
      await divisionUpdatePage.setColorTextInput('colorText');
      expect(await divisionUpdatePage.getColorTextInput()).to.match(/colorText/);
      await waitUntilDisplayed(divisionUpdatePage.getSaveButton());
      await divisionUpdatePage.save();
      await waitUntilHidden(divisionUpdatePage.getSaveButton());
      expect(await divisionUpdatePage.getSaveButton().isPresent()).to.be.false;
    }

    await createDivision();
    await divisionComponentsPage.waitUntilLoaded();
    const nbButtonsBeforeCreate = await divisionComponentsPage.countDeleteButtons();
    await createDivision();

    await divisionComponentsPage.waitUntilDeleteButtonsLength(nbButtonsBeforeCreate + 1);
    expect(await divisionComponentsPage.countDeleteButtons()).to.eq(nbButtonsBeforeCreate + 1);
  });

  it('should delete last Division', async () => {
    await divisionComponentsPage.waitUntilLoaded();
    const nbButtonsBeforeDelete = await divisionComponentsPage.countDeleteButtons();
    await divisionComponentsPage.clickOnLastDeleteButton();

    const deleteModal = element(by.className('modal'));
    await waitUntilDisplayed(deleteModal);

    divisionDeleteDialog = new DivisionDeleteDialog();
    expect(await divisionDeleteDialog.getDialogTitle().getAttribute('id')).to.match(/travisNg2App.testRootDivision.delete.question/);
    await divisionDeleteDialog.clickOnConfirmButton();

    await divisionComponentsPage.waitUntilDeleteButtonsLength(nbButtonsBeforeDelete - 1);
    expect(await divisionComponentsPage.countDeleteButtons()).to.eq(nbButtonsBeforeDelete - 1);
  });

  after(async () => {
    await navBarPage.autoSignOut();
  });
});
