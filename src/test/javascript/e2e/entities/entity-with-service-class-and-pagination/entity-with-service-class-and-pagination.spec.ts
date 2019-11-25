import { browser, element, by } from 'protractor';

import NavBarPage from './../../page-objects/navbar-page';
import SignInPage from './../../page-objects/signin-page';
import EntityWithServiceClassAndPaginationComponentsPage, {
  EntityWithServiceClassAndPaginationDeleteDialog
} from './entity-with-service-class-and-pagination.page-object';
import EntityWithServiceClassAndPaginationUpdatePage from './entity-with-service-class-and-pagination-update.page-object';
import { waitUntilDisplayed, waitUntilHidden } from '../../util/utils';

const expect = chai.expect;

describe('EntityWithServiceClassAndPagination e2e test', () => {
  let navBarPage: NavBarPage;
  let signInPage: SignInPage;
  let entityWithServiceClassAndPaginationComponentsPage: EntityWithServiceClassAndPaginationComponentsPage;
  let entityWithServiceClassAndPaginationUpdatePage: EntityWithServiceClassAndPaginationUpdatePage;
  let entityWithServiceClassAndPaginationDeleteDialog: EntityWithServiceClassAndPaginationDeleteDialog;

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

  it('should load EntityWithServiceClassAndPaginations', async () => {
    await navBarPage.getEntityPage('entity-with-service-class-and-pagination');
    entityWithServiceClassAndPaginationComponentsPage = new EntityWithServiceClassAndPaginationComponentsPage();
    expect(await entityWithServiceClassAndPaginationComponentsPage.getTitle().getText()).to.match(
      /Entity With Service Class And Paginations/
    );
  });

  it('should load create EntityWithServiceClassAndPagination page', async () => {
    await entityWithServiceClassAndPaginationComponentsPage.clickOnCreateButton();
    entityWithServiceClassAndPaginationUpdatePage = new EntityWithServiceClassAndPaginationUpdatePage();
    expect(await entityWithServiceClassAndPaginationUpdatePage.getPageTitle().getAttribute('id')).to.match(
      /travisNg2App.entityWithServiceClassAndPagination.home.createOrEditLabel/
    );
    await entityWithServiceClassAndPaginationUpdatePage.cancel();
  });

  it('should create and save EntityWithServiceClassAndPaginations', async () => {
    async function createEntityWithServiceClassAndPagination() {
      await entityWithServiceClassAndPaginationComponentsPage.clickOnCreateButton();
      await entityWithServiceClassAndPaginationUpdatePage.setEnzoInput('enzo');
      expect(await entityWithServiceClassAndPaginationUpdatePage.getEnzoInput()).to.match(/enzo/);
      await waitUntilDisplayed(entityWithServiceClassAndPaginationUpdatePage.getSaveButton());
      await entityWithServiceClassAndPaginationUpdatePage.save();
      await waitUntilHidden(entityWithServiceClassAndPaginationUpdatePage.getSaveButton());
      expect(await entityWithServiceClassAndPaginationUpdatePage.getSaveButton().isPresent()).to.be.false;
    }

    await createEntityWithServiceClassAndPagination();
    await entityWithServiceClassAndPaginationComponentsPage.waitUntilLoaded();
    const nbButtonsBeforeCreate = await entityWithServiceClassAndPaginationComponentsPage.countDeleteButtons();
    await createEntityWithServiceClassAndPagination();

    await entityWithServiceClassAndPaginationComponentsPage.waitUntilDeleteButtonsLength(nbButtonsBeforeCreate + 1);
    expect(await entityWithServiceClassAndPaginationComponentsPage.countDeleteButtons()).to.eq(nbButtonsBeforeCreate + 1);
  });

  it('should delete last EntityWithServiceClassAndPagination', async () => {
    await entityWithServiceClassAndPaginationComponentsPage.waitUntilLoaded();
    const nbButtonsBeforeDelete = await entityWithServiceClassAndPaginationComponentsPage.countDeleteButtons();
    await entityWithServiceClassAndPaginationComponentsPage.clickOnLastDeleteButton();

    const deleteModal = element(by.className('modal'));
    await waitUntilDisplayed(deleteModal);

    entityWithServiceClassAndPaginationDeleteDialog = new EntityWithServiceClassAndPaginationDeleteDialog();
    expect(await entityWithServiceClassAndPaginationDeleteDialog.getDialogTitle().getAttribute('id')).to.match(
      /travisNg2App.entityWithServiceClassAndPagination.delete.question/
    );
    await entityWithServiceClassAndPaginationDeleteDialog.clickOnConfirmButton();

    await entityWithServiceClassAndPaginationComponentsPage.waitUntilDeleteButtonsLength(nbButtonsBeforeDelete - 1);
    expect(await entityWithServiceClassAndPaginationComponentsPage.countDeleteButtons()).to.eq(nbButtonsBeforeDelete - 1);
  });

  after(async () => {
    await navBarPage.autoSignOut();
  });
});
