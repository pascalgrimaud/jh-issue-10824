import { browser, element, by } from 'protractor';

import NavBarPage from './../../page-objects/navbar-page';
import SignInPage from './../../page-objects/signin-page';
import EntityWithServiceImplPaginationAndDTOComponentsPage, {
  EntityWithServiceImplPaginationAndDTODeleteDialog
} from './entity-with-service-impl-pagination-and-dto.page-object';
import EntityWithServiceImplPaginationAndDTOUpdatePage from './entity-with-service-impl-pagination-and-dto-update.page-object';
import { waitUntilDisplayed, waitUntilHidden } from '../../util/utils';

const expect = chai.expect;

describe('EntityWithServiceImplPaginationAndDTO e2e test', () => {
  let navBarPage: NavBarPage;
  let signInPage: SignInPage;
  let entityWithServiceImplPaginationAndDTOComponentsPage: EntityWithServiceImplPaginationAndDTOComponentsPage;
  let entityWithServiceImplPaginationAndDTOUpdatePage: EntityWithServiceImplPaginationAndDTOUpdatePage;
  let entityWithServiceImplPaginationAndDTODeleteDialog: EntityWithServiceImplPaginationAndDTODeleteDialog;

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

  it('should load EntityWithServiceImplPaginationAndDTOS', async () => {
    await navBarPage.getEntityPage('entity-with-service-impl-pagination-and-dto');
    entityWithServiceImplPaginationAndDTOComponentsPage = new EntityWithServiceImplPaginationAndDTOComponentsPage();
    expect(await entityWithServiceImplPaginationAndDTOComponentsPage.getTitle().getText()).to.match(
      /Entity With Service Impl Pagination And DTOS/
    );
  });

  it('should load create EntityWithServiceImplPaginationAndDTO page', async () => {
    await entityWithServiceImplPaginationAndDTOComponentsPage.clickOnCreateButton();
    entityWithServiceImplPaginationAndDTOUpdatePage = new EntityWithServiceImplPaginationAndDTOUpdatePage();
    expect(await entityWithServiceImplPaginationAndDTOUpdatePage.getPageTitle().getAttribute('id')).to.match(
      /travisNg2App.entityWithServiceImplPaginationAndDTO.home.createOrEditLabel/
    );
    await entityWithServiceImplPaginationAndDTOUpdatePage.cancel();
  });

  it('should create and save EntityWithServiceImplPaginationAndDTOS', async () => {
    async function createEntityWithServiceImplPaginationAndDTO() {
      await entityWithServiceImplPaginationAndDTOComponentsPage.clickOnCreateButton();
      await entityWithServiceImplPaginationAndDTOUpdatePage.setTheoInput('theo');
      expect(await entityWithServiceImplPaginationAndDTOUpdatePage.getTheoInput()).to.match(/theo/);
      await waitUntilDisplayed(entityWithServiceImplPaginationAndDTOUpdatePage.getSaveButton());
      await entityWithServiceImplPaginationAndDTOUpdatePage.save();
      await waitUntilHidden(entityWithServiceImplPaginationAndDTOUpdatePage.getSaveButton());
      expect(await entityWithServiceImplPaginationAndDTOUpdatePage.getSaveButton().isPresent()).to.be.false;
    }

    await createEntityWithServiceImplPaginationAndDTO();
    await entityWithServiceImplPaginationAndDTOComponentsPage.waitUntilLoaded();
    const nbButtonsBeforeCreate = await entityWithServiceImplPaginationAndDTOComponentsPage.countDeleteButtons();
    await createEntityWithServiceImplPaginationAndDTO();

    await entityWithServiceImplPaginationAndDTOComponentsPage.waitUntilDeleteButtonsLength(nbButtonsBeforeCreate + 1);
    expect(await entityWithServiceImplPaginationAndDTOComponentsPage.countDeleteButtons()).to.eq(nbButtonsBeforeCreate + 1);
  });

  it('should delete last EntityWithServiceImplPaginationAndDTO', async () => {
    await entityWithServiceImplPaginationAndDTOComponentsPage.waitUntilLoaded();
    const nbButtonsBeforeDelete = await entityWithServiceImplPaginationAndDTOComponentsPage.countDeleteButtons();
    await entityWithServiceImplPaginationAndDTOComponentsPage.clickOnLastDeleteButton();

    const deleteModal = element(by.className('modal'));
    await waitUntilDisplayed(deleteModal);

    entityWithServiceImplPaginationAndDTODeleteDialog = new EntityWithServiceImplPaginationAndDTODeleteDialog();
    expect(await entityWithServiceImplPaginationAndDTODeleteDialog.getDialogTitle().getAttribute('id')).to.match(
      /travisNg2App.entityWithServiceImplPaginationAndDTO.delete.question/
    );
    await entityWithServiceImplPaginationAndDTODeleteDialog.clickOnConfirmButton();

    await entityWithServiceImplPaginationAndDTOComponentsPage.waitUntilDeleteButtonsLength(nbButtonsBeforeDelete - 1);
    expect(await entityWithServiceImplPaginationAndDTOComponentsPage.countDeleteButtons()).to.eq(nbButtonsBeforeDelete - 1);
  });

  after(async () => {
    await navBarPage.autoSignOut();
  });
});
