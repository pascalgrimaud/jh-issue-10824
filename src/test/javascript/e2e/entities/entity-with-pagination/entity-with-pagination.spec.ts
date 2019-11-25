import { browser, element, by } from 'protractor';

import NavBarPage from './../../page-objects/navbar-page';
import SignInPage from './../../page-objects/signin-page';
import EntityWithPaginationComponentsPage, { EntityWithPaginationDeleteDialog } from './entity-with-pagination.page-object';
import EntityWithPaginationUpdatePage from './entity-with-pagination-update.page-object';
import { waitUntilDisplayed, waitUntilHidden } from '../../util/utils';

const expect = chai.expect;

describe('EntityWithPagination e2e test', () => {
  let navBarPage: NavBarPage;
  let signInPage: SignInPage;
  let entityWithPaginationComponentsPage: EntityWithPaginationComponentsPage;
  let entityWithPaginationUpdatePage: EntityWithPaginationUpdatePage;
  let entityWithPaginationDeleteDialog: EntityWithPaginationDeleteDialog;

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

  it('should load EntityWithPaginations', async () => {
    await navBarPage.getEntityPage('entity-with-pagination');
    entityWithPaginationComponentsPage = new EntityWithPaginationComponentsPage();
    expect(await entityWithPaginationComponentsPage.getTitle().getText()).to.match(/Entity With Paginations/);
  });

  it('should load create EntityWithPagination page', async () => {
    await entityWithPaginationComponentsPage.clickOnCreateButton();
    entityWithPaginationUpdatePage = new EntityWithPaginationUpdatePage();
    expect(await entityWithPaginationUpdatePage.getPageTitle().getAttribute('id')).to.match(
      /travisNg2App.entityWithPagination.home.createOrEditLabel/
    );
    await entityWithPaginationUpdatePage.cancel();
  });

  it('should create and save EntityWithPaginations', async () => {
    async function createEntityWithPagination() {
      await entityWithPaginationComponentsPage.clickOnCreateButton();
      await entityWithPaginationUpdatePage.setNathanInput('nathan');
      expect(await entityWithPaginationUpdatePage.getNathanInput()).to.match(/nathan/);
      await waitUntilDisplayed(entityWithPaginationUpdatePage.getSaveButton());
      await entityWithPaginationUpdatePage.save();
      await waitUntilHidden(entityWithPaginationUpdatePage.getSaveButton());
      expect(await entityWithPaginationUpdatePage.getSaveButton().isPresent()).to.be.false;
    }

    await createEntityWithPagination();
    await entityWithPaginationComponentsPage.waitUntilLoaded();
    const nbButtonsBeforeCreate = await entityWithPaginationComponentsPage.countDeleteButtons();
    await createEntityWithPagination();

    await entityWithPaginationComponentsPage.waitUntilDeleteButtonsLength(nbButtonsBeforeCreate + 1);
    expect(await entityWithPaginationComponentsPage.countDeleteButtons()).to.eq(nbButtonsBeforeCreate + 1);
  });

  it('should delete last EntityWithPagination', async () => {
    await entityWithPaginationComponentsPage.waitUntilLoaded();
    const nbButtonsBeforeDelete = await entityWithPaginationComponentsPage.countDeleteButtons();
    await entityWithPaginationComponentsPage.clickOnLastDeleteButton();

    const deleteModal = element(by.className('modal'));
    await waitUntilDisplayed(deleteModal);

    entityWithPaginationDeleteDialog = new EntityWithPaginationDeleteDialog();
    expect(await entityWithPaginationDeleteDialog.getDialogTitle().getAttribute('id')).to.match(
      /travisNg2App.entityWithPagination.delete.question/
    );
    await entityWithPaginationDeleteDialog.clickOnConfirmButton();

    await entityWithPaginationComponentsPage.waitUntilDeleteButtonsLength(nbButtonsBeforeDelete - 1);
    expect(await entityWithPaginationComponentsPage.countDeleteButtons()).to.eq(nbButtonsBeforeDelete - 1);
  });

  after(async () => {
    await navBarPage.autoSignOut();
  });
});
