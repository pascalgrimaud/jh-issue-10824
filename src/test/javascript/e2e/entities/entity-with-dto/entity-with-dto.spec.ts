import { browser, element, by } from 'protractor';

import NavBarPage from './../../page-objects/navbar-page';
import SignInPage from './../../page-objects/signin-page';
import EntityWithDTOComponentsPage, { EntityWithDTODeleteDialog } from './entity-with-dto.page-object';
import EntityWithDTOUpdatePage from './entity-with-dto-update.page-object';
import { waitUntilDisplayed, waitUntilHidden } from '../../util/utils';

const expect = chai.expect;

describe('EntityWithDTO e2e test', () => {
  let navBarPage: NavBarPage;
  let signInPage: SignInPage;
  let entityWithDTOComponentsPage: EntityWithDTOComponentsPage;
  let entityWithDTOUpdatePage: EntityWithDTOUpdatePage;
  let entityWithDTODeleteDialog: EntityWithDTODeleteDialog;

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

  it('should load EntityWithDTOS', async () => {
    await navBarPage.getEntityPage('entity-with-dto');
    entityWithDTOComponentsPage = new EntityWithDTOComponentsPage();
    expect(await entityWithDTOComponentsPage.getTitle().getText()).to.match(/Entity With DTOS/);
  });

  it('should load create EntityWithDTO page', async () => {
    await entityWithDTOComponentsPage.clickOnCreateButton();
    entityWithDTOUpdatePage = new EntityWithDTOUpdatePage();
    expect(await entityWithDTOUpdatePage.getPageTitle().getAttribute('id')).to.match(/travisNg2App.entityWithDTO.home.createOrEditLabel/);
    await entityWithDTOUpdatePage.cancel();
  });

  it('should create and save EntityWithDTOS', async () => {
    async function createEntityWithDTO() {
      await entityWithDTOComponentsPage.clickOnCreateButton();
      await entityWithDTOUpdatePage.setEmmaInput('emma');
      expect(await entityWithDTOUpdatePage.getEmmaInput()).to.match(/emma/);
      await waitUntilDisplayed(entityWithDTOUpdatePage.getSaveButton());
      await entityWithDTOUpdatePage.save();
      await waitUntilHidden(entityWithDTOUpdatePage.getSaveButton());
      expect(await entityWithDTOUpdatePage.getSaveButton().isPresent()).to.be.false;
    }

    await createEntityWithDTO();
    await entityWithDTOComponentsPage.waitUntilLoaded();
    const nbButtonsBeforeCreate = await entityWithDTOComponentsPage.countDeleteButtons();
    await createEntityWithDTO();

    await entityWithDTOComponentsPage.waitUntilDeleteButtonsLength(nbButtonsBeforeCreate + 1);
    expect(await entityWithDTOComponentsPage.countDeleteButtons()).to.eq(nbButtonsBeforeCreate + 1);
  });

  it('should delete last EntityWithDTO', async () => {
    await entityWithDTOComponentsPage.waitUntilLoaded();
    const nbButtonsBeforeDelete = await entityWithDTOComponentsPage.countDeleteButtons();
    await entityWithDTOComponentsPage.clickOnLastDeleteButton();

    const deleteModal = element(by.className('modal'));
    await waitUntilDisplayed(deleteModal);

    entityWithDTODeleteDialog = new EntityWithDTODeleteDialog();
    expect(await entityWithDTODeleteDialog.getDialogTitle().getAttribute('id')).to.match(/travisNg2App.entityWithDTO.delete.question/);
    await entityWithDTODeleteDialog.clickOnConfirmButton();

    await entityWithDTOComponentsPage.waitUntilDeleteButtonsLength(nbButtonsBeforeDelete - 1);
    expect(await entityWithDTOComponentsPage.countDeleteButtons()).to.eq(nbButtonsBeforeDelete - 1);
  });

  after(async () => {
    await navBarPage.autoSignOut();
  });
});
