import { browser, element, by } from 'protractor';

import NavBarPage from './../../page-objects/navbar-page';
import SignInPage from './../../page-objects/signin-page';
import EntityWithServiceClassPaginationAndDTOComponentsPage, {
  EntityWithServiceClassPaginationAndDTODeleteDialog
} from './entity-with-service-class-pagination-and-dto.page-object';
import EntityWithServiceClassPaginationAndDTOUpdatePage from './entity-with-service-class-pagination-and-dto-update.page-object';
import { waitUntilDisplayed, waitUntilHidden } from '../../util/utils';

const expect = chai.expect;

describe('EntityWithServiceClassPaginationAndDTO e2e test', () => {
  let navBarPage: NavBarPage;
  let signInPage: SignInPage;
  let entityWithServiceClassPaginationAndDTOComponentsPage: EntityWithServiceClassPaginationAndDTOComponentsPage;
  let entityWithServiceClassPaginationAndDTOUpdatePage: EntityWithServiceClassPaginationAndDTOUpdatePage;
  let entityWithServiceClassPaginationAndDTODeleteDialog: EntityWithServiceClassPaginationAndDTODeleteDialog;

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

  it('should load EntityWithServiceClassPaginationAndDTOS', async () => {
    await navBarPage.getEntityPage('entity-with-service-class-pagination-and-dto');
    entityWithServiceClassPaginationAndDTOComponentsPage = new EntityWithServiceClassPaginationAndDTOComponentsPage();
    expect(await entityWithServiceClassPaginationAndDTOComponentsPage.getTitle().getText()).to.match(
      /Entity With Service Class Pagination And DTOS/
    );
  });

  it('should load create EntityWithServiceClassPaginationAndDTO page', async () => {
    await entityWithServiceClassPaginationAndDTOComponentsPage.clickOnCreateButton();
    entityWithServiceClassPaginationAndDTOUpdatePage = new EntityWithServiceClassPaginationAndDTOUpdatePage();
    expect(await entityWithServiceClassPaginationAndDTOUpdatePage.getPageTitle().getAttribute('id')).to.match(
      /travisNg2App.entityWithServiceClassPaginationAndDTO.home.createOrEditLabel/
    );
    await entityWithServiceClassPaginationAndDTOUpdatePage.cancel();
  });

  it('should create and save EntityWithServiceClassPaginationAndDTOS', async () => {
    async function createEntityWithServiceClassPaginationAndDTO() {
      await entityWithServiceClassPaginationAndDTOComponentsPage.clickOnCreateButton();
      await entityWithServiceClassPaginationAndDTOUpdatePage.setLenaInput('lena');
      expect(await entityWithServiceClassPaginationAndDTOUpdatePage.getLenaInput()).to.match(/lena/);
      await waitUntilDisplayed(entityWithServiceClassPaginationAndDTOUpdatePage.getSaveButton());
      await entityWithServiceClassPaginationAndDTOUpdatePage.save();
      await waitUntilHidden(entityWithServiceClassPaginationAndDTOUpdatePage.getSaveButton());
      expect(await entityWithServiceClassPaginationAndDTOUpdatePage.getSaveButton().isPresent()).to.be.false;
    }

    await createEntityWithServiceClassPaginationAndDTO();
    await entityWithServiceClassPaginationAndDTOComponentsPage.waitUntilLoaded();
    const nbButtonsBeforeCreate = await entityWithServiceClassPaginationAndDTOComponentsPage.countDeleteButtons();
    await createEntityWithServiceClassPaginationAndDTO();

    await entityWithServiceClassPaginationAndDTOComponentsPage.waitUntilDeleteButtonsLength(nbButtonsBeforeCreate + 1);
    expect(await entityWithServiceClassPaginationAndDTOComponentsPage.countDeleteButtons()).to.eq(nbButtonsBeforeCreate + 1);
  });

  it('should delete last EntityWithServiceClassPaginationAndDTO', async () => {
    await entityWithServiceClassPaginationAndDTOComponentsPage.waitUntilLoaded();
    const nbButtonsBeforeDelete = await entityWithServiceClassPaginationAndDTOComponentsPage.countDeleteButtons();
    await entityWithServiceClassPaginationAndDTOComponentsPage.clickOnLastDeleteButton();

    const deleteModal = element(by.className('modal'));
    await waitUntilDisplayed(deleteModal);

    entityWithServiceClassPaginationAndDTODeleteDialog = new EntityWithServiceClassPaginationAndDTODeleteDialog();
    expect(await entityWithServiceClassPaginationAndDTODeleteDialog.getDialogTitle().getAttribute('id')).to.match(
      /travisNg2App.entityWithServiceClassPaginationAndDTO.delete.question/
    );
    await entityWithServiceClassPaginationAndDTODeleteDialog.clickOnConfirmButton();

    await entityWithServiceClassPaginationAndDTOComponentsPage.waitUntilDeleteButtonsLength(nbButtonsBeforeDelete - 1);
    expect(await entityWithServiceClassPaginationAndDTOComponentsPage.countDeleteButtons()).to.eq(nbButtonsBeforeDelete - 1);
  });

  after(async () => {
    await navBarPage.autoSignOut();
  });
});
