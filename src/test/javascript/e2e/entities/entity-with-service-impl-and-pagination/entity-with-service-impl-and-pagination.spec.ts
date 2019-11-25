import { browser, element, by } from 'protractor';

import NavBarPage from './../../page-objects/navbar-page';
import SignInPage from './../../page-objects/signin-page';
import EntityWithServiceImplAndPaginationComponentsPage, {
  EntityWithServiceImplAndPaginationDeleteDialog
} from './entity-with-service-impl-and-pagination.page-object';
import EntityWithServiceImplAndPaginationUpdatePage from './entity-with-service-impl-and-pagination-update.page-object';
import { waitUntilDisplayed, waitUntilHidden } from '../../util/utils';

const expect = chai.expect;

describe('EntityWithServiceImplAndPagination e2e test', () => {
  let navBarPage: NavBarPage;
  let signInPage: SignInPage;
  let entityWithServiceImplAndPaginationComponentsPage: EntityWithServiceImplAndPaginationComponentsPage;
  let entityWithServiceImplAndPaginationUpdatePage: EntityWithServiceImplAndPaginationUpdatePage;
  let entityWithServiceImplAndPaginationDeleteDialog: EntityWithServiceImplAndPaginationDeleteDialog;

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

  it('should load EntityWithServiceImplAndPaginations', async () => {
    await navBarPage.getEntityPage('entity-with-service-impl-and-pagination');
    entityWithServiceImplAndPaginationComponentsPage = new EntityWithServiceImplAndPaginationComponentsPage();
    expect(await entityWithServiceImplAndPaginationComponentsPage.getTitle().getText()).to.match(
      /Entity With Service Impl And Paginations/
    );
  });

  it('should load create EntityWithServiceImplAndPagination page', async () => {
    await entityWithServiceImplAndPaginationComponentsPage.clickOnCreateButton();
    entityWithServiceImplAndPaginationUpdatePage = new EntityWithServiceImplAndPaginationUpdatePage();
    expect(await entityWithServiceImplAndPaginationUpdatePage.getPageTitle().getAttribute('id')).to.match(
      /travisNg2App.entityWithServiceImplAndPagination.home.createOrEditLabel/
    );
    await entityWithServiceImplAndPaginationUpdatePage.cancel();
  });

  it('should create and save EntityWithServiceImplAndPaginations', async () => {
    async function createEntityWithServiceImplAndPagination() {
      await entityWithServiceImplAndPaginationComponentsPage.clickOnCreateButton();
      await entityWithServiceImplAndPaginationUpdatePage.setHugoInput('hugo');
      expect(await entityWithServiceImplAndPaginationUpdatePage.getHugoInput()).to.match(/hugo/);
      await waitUntilDisplayed(entityWithServiceImplAndPaginationUpdatePage.getSaveButton());
      await entityWithServiceImplAndPaginationUpdatePage.save();
      await waitUntilHidden(entityWithServiceImplAndPaginationUpdatePage.getSaveButton());
      expect(await entityWithServiceImplAndPaginationUpdatePage.getSaveButton().isPresent()).to.be.false;
    }

    await createEntityWithServiceImplAndPagination();
    await entityWithServiceImplAndPaginationComponentsPage.waitUntilLoaded();
    const nbButtonsBeforeCreate = await entityWithServiceImplAndPaginationComponentsPage.countDeleteButtons();
    await createEntityWithServiceImplAndPagination();

    await entityWithServiceImplAndPaginationComponentsPage.waitUntilDeleteButtonsLength(nbButtonsBeforeCreate + 1);
    expect(await entityWithServiceImplAndPaginationComponentsPage.countDeleteButtons()).to.eq(nbButtonsBeforeCreate + 1);
  });

  it('should delete last EntityWithServiceImplAndPagination', async () => {
    await entityWithServiceImplAndPaginationComponentsPage.waitUntilLoaded();
    const nbButtonsBeforeDelete = await entityWithServiceImplAndPaginationComponentsPage.countDeleteButtons();
    await entityWithServiceImplAndPaginationComponentsPage.clickOnLastDeleteButton();

    const deleteModal = element(by.className('modal'));
    await waitUntilDisplayed(deleteModal);

    entityWithServiceImplAndPaginationDeleteDialog = new EntityWithServiceImplAndPaginationDeleteDialog();
    expect(await entityWithServiceImplAndPaginationDeleteDialog.getDialogTitle().getAttribute('id')).to.match(
      /travisNg2App.entityWithServiceImplAndPagination.delete.question/
    );
    await entityWithServiceImplAndPaginationDeleteDialog.clickOnConfirmButton();

    await entityWithServiceImplAndPaginationComponentsPage.waitUntilDeleteButtonsLength(nbButtonsBeforeDelete - 1);
    expect(await entityWithServiceImplAndPaginationComponentsPage.countDeleteButtons()).to.eq(nbButtonsBeforeDelete - 1);
  });

  after(async () => {
    await navBarPage.autoSignOut();
  });
});
