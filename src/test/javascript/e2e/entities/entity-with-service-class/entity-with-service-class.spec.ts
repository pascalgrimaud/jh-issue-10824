import { browser, element, by } from 'protractor';

import NavBarPage from './../../page-objects/navbar-page';
import SignInPage from './../../page-objects/signin-page';
import EntityWithServiceClassComponentsPage, { EntityWithServiceClassDeleteDialog } from './entity-with-service-class.page-object';
import EntityWithServiceClassUpdatePage from './entity-with-service-class-update.page-object';
import { waitUntilDisplayed, waitUntilHidden } from '../../util/utils';

const expect = chai.expect;

describe('EntityWithServiceClass e2e test', () => {
  let navBarPage: NavBarPage;
  let signInPage: SignInPage;
  let entityWithServiceClassComponentsPage: EntityWithServiceClassComponentsPage;
  let entityWithServiceClassUpdatePage: EntityWithServiceClassUpdatePage;
  let entityWithServiceClassDeleteDialog: EntityWithServiceClassDeleteDialog;

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

  it('should load EntityWithServiceClasses', async () => {
    await navBarPage.getEntityPage('entity-with-service-class');
    entityWithServiceClassComponentsPage = new EntityWithServiceClassComponentsPage();
    expect(await entityWithServiceClassComponentsPage.getTitle().getText()).to.match(/Entity With Service Classes/);
  });

  it('should load create EntityWithServiceClass page', async () => {
    await entityWithServiceClassComponentsPage.clickOnCreateButton();
    entityWithServiceClassUpdatePage = new EntityWithServiceClassUpdatePage();
    expect(await entityWithServiceClassUpdatePage.getPageTitle().getAttribute('id')).to.match(
      /travisNg2App.entityWithServiceClass.home.createOrEditLabel/
    );
    await entityWithServiceClassUpdatePage.cancel();
  });

  it('should create and save EntityWithServiceClasses', async () => {
    async function createEntityWithServiceClass() {
      await entityWithServiceClassComponentsPage.clickOnCreateButton();
      await entityWithServiceClassUpdatePage.setZoeInput('zoe');
      expect(await entityWithServiceClassUpdatePage.getZoeInput()).to.match(/zoe/);
      await waitUntilDisplayed(entityWithServiceClassUpdatePage.getSaveButton());
      await entityWithServiceClassUpdatePage.save();
      await waitUntilHidden(entityWithServiceClassUpdatePage.getSaveButton());
      expect(await entityWithServiceClassUpdatePage.getSaveButton().isPresent()).to.be.false;
    }

    await createEntityWithServiceClass();
    await entityWithServiceClassComponentsPage.waitUntilLoaded();
    const nbButtonsBeforeCreate = await entityWithServiceClassComponentsPage.countDeleteButtons();
    await createEntityWithServiceClass();

    await entityWithServiceClassComponentsPage.waitUntilDeleteButtonsLength(nbButtonsBeforeCreate + 1);
    expect(await entityWithServiceClassComponentsPage.countDeleteButtons()).to.eq(nbButtonsBeforeCreate + 1);
  });

  it('should delete last EntityWithServiceClass', async () => {
    await entityWithServiceClassComponentsPage.waitUntilLoaded();
    const nbButtonsBeforeDelete = await entityWithServiceClassComponentsPage.countDeleteButtons();
    await entityWithServiceClassComponentsPage.clickOnLastDeleteButton();

    const deleteModal = element(by.className('modal'));
    await waitUntilDisplayed(deleteModal);

    entityWithServiceClassDeleteDialog = new EntityWithServiceClassDeleteDialog();
    expect(await entityWithServiceClassDeleteDialog.getDialogTitle().getAttribute('id')).to.match(
      /travisNg2App.entityWithServiceClass.delete.question/
    );
    await entityWithServiceClassDeleteDialog.clickOnConfirmButton();

    await entityWithServiceClassComponentsPage.waitUntilDeleteButtonsLength(nbButtonsBeforeDelete - 1);
    expect(await entityWithServiceClassComponentsPage.countDeleteButtons()).to.eq(nbButtonsBeforeDelete - 1);
  });

  after(async () => {
    await navBarPage.autoSignOut();
  });
});
