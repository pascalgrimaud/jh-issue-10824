import { browser, element, by } from 'protractor';

import NavBarPage from './../../page-objects/navbar-page';
import SignInPage from './../../page-objects/signin-page';
import EntityWithServiceImplComponentsPage, { EntityWithServiceImplDeleteDialog } from './entity-with-service-impl.page-object';
import EntityWithServiceImplUpdatePage from './entity-with-service-impl-update.page-object';
import { waitUntilDisplayed, waitUntilHidden } from '../../util/utils';

const expect = chai.expect;

describe('EntityWithServiceImpl e2e test', () => {
  let navBarPage: NavBarPage;
  let signInPage: SignInPage;
  let entityWithServiceImplComponentsPage: EntityWithServiceImplComponentsPage;
  let entityWithServiceImplUpdatePage: EntityWithServiceImplUpdatePage;
  let entityWithServiceImplDeleteDialog: EntityWithServiceImplDeleteDialog;

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

  it('should load EntityWithServiceImpls', async () => {
    await navBarPage.getEntityPage('entity-with-service-impl');
    entityWithServiceImplComponentsPage = new EntityWithServiceImplComponentsPage();
    expect(await entityWithServiceImplComponentsPage.getTitle().getText()).to.match(/Entity With Service Impls/);
  });

  it('should load create EntityWithServiceImpl page', async () => {
    await entityWithServiceImplComponentsPage.clickOnCreateButton();
    entityWithServiceImplUpdatePage = new EntityWithServiceImplUpdatePage();
    expect(await entityWithServiceImplUpdatePage.getPageTitle().getAttribute('id')).to.match(
      /travisNg2App.entityWithServiceImpl.home.createOrEditLabel/
    );
    await entityWithServiceImplUpdatePage.cancel();
  });

  it('should create and save EntityWithServiceImpls', async () => {
    async function createEntityWithServiceImpl() {
      await entityWithServiceImplComponentsPage.clickOnCreateButton();
      await entityWithServiceImplUpdatePage.setClaraInput('clara');
      expect(await entityWithServiceImplUpdatePage.getClaraInput()).to.match(/clara/);
      await waitUntilDisplayed(entityWithServiceImplUpdatePage.getSaveButton());
      await entityWithServiceImplUpdatePage.save();
      await waitUntilHidden(entityWithServiceImplUpdatePage.getSaveButton());
      expect(await entityWithServiceImplUpdatePage.getSaveButton().isPresent()).to.be.false;
    }

    await createEntityWithServiceImpl();
    await entityWithServiceImplComponentsPage.waitUntilLoaded();
    const nbButtonsBeforeCreate = await entityWithServiceImplComponentsPage.countDeleteButtons();
    await createEntityWithServiceImpl();

    await entityWithServiceImplComponentsPage.waitUntilDeleteButtonsLength(nbButtonsBeforeCreate + 1);
    expect(await entityWithServiceImplComponentsPage.countDeleteButtons()).to.eq(nbButtonsBeforeCreate + 1);
  });

  it('should delete last EntityWithServiceImpl', async () => {
    await entityWithServiceImplComponentsPage.waitUntilLoaded();
    const nbButtonsBeforeDelete = await entityWithServiceImplComponentsPage.countDeleteButtons();
    await entityWithServiceImplComponentsPage.clickOnLastDeleteButton();

    const deleteModal = element(by.className('modal'));
    await waitUntilDisplayed(deleteModal);

    entityWithServiceImplDeleteDialog = new EntityWithServiceImplDeleteDialog();
    expect(await entityWithServiceImplDeleteDialog.getDialogTitle().getAttribute('id')).to.match(
      /travisNg2App.entityWithServiceImpl.delete.question/
    );
    await entityWithServiceImplDeleteDialog.clickOnConfirmButton();

    await entityWithServiceImplComponentsPage.waitUntilDeleteButtonsLength(nbButtonsBeforeDelete - 1);
    expect(await entityWithServiceImplComponentsPage.countDeleteButtons()).to.eq(nbButtonsBeforeDelete - 1);
  });

  after(async () => {
    await navBarPage.autoSignOut();
  });
});
