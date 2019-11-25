import { browser, element, by } from 'protractor';

import NavBarPage from './../../page-objects/navbar-page';
import SignInPage from './../../page-objects/signin-page';
import EntityWithPaginationAndDTOComponentsPage, {
  EntityWithPaginationAndDTODeleteDialog
} from './entity-with-pagination-and-dto.page-object';
import EntityWithPaginationAndDTOUpdatePage from './entity-with-pagination-and-dto-update.page-object';
import { waitUntilDisplayed, waitUntilHidden } from '../../util/utils';

const expect = chai.expect;

describe('EntityWithPaginationAndDTO e2e test', () => {
  let navBarPage: NavBarPage;
  let signInPage: SignInPage;
  let entityWithPaginationAndDTOComponentsPage: EntityWithPaginationAndDTOComponentsPage;
  let entityWithPaginationAndDTOUpdatePage: EntityWithPaginationAndDTOUpdatePage;
  let entityWithPaginationAndDTODeleteDialog: EntityWithPaginationAndDTODeleteDialog;

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

  it('should load EntityWithPaginationAndDTOS', async () => {
    await navBarPage.getEntityPage('entity-with-pagination-and-dto');
    entityWithPaginationAndDTOComponentsPage = new EntityWithPaginationAndDTOComponentsPage();
    expect(await entityWithPaginationAndDTOComponentsPage.getTitle().getText()).to.match(/Entity With Pagination And DTOS/);
  });

  it('should load create EntityWithPaginationAndDTO page', async () => {
    await entityWithPaginationAndDTOComponentsPage.clickOnCreateButton();
    entityWithPaginationAndDTOUpdatePage = new EntityWithPaginationAndDTOUpdatePage();
    expect(await entityWithPaginationAndDTOUpdatePage.getPageTitle().getAttribute('id')).to.match(
      /travisNg2App.entityWithPaginationAndDTO.home.createOrEditLabel/
    );
    await entityWithPaginationAndDTOUpdatePage.cancel();
  });

  it('should create and save EntityWithPaginationAndDTOS', async () => {
    async function createEntityWithPaginationAndDTO() {
      await entityWithPaginationAndDTOComponentsPage.clickOnCreateButton();
      await entityWithPaginationAndDTOUpdatePage.setLeaInput('lea');
      expect(await entityWithPaginationAndDTOUpdatePage.getLeaInput()).to.match(/lea/);
      await waitUntilDisplayed(entityWithPaginationAndDTOUpdatePage.getSaveButton());
      await entityWithPaginationAndDTOUpdatePage.save();
      await waitUntilHidden(entityWithPaginationAndDTOUpdatePage.getSaveButton());
      expect(await entityWithPaginationAndDTOUpdatePage.getSaveButton().isPresent()).to.be.false;
    }

    await createEntityWithPaginationAndDTO();
    await entityWithPaginationAndDTOComponentsPage.waitUntilLoaded();
    const nbButtonsBeforeCreate = await entityWithPaginationAndDTOComponentsPage.countDeleteButtons();
    await createEntityWithPaginationAndDTO();

    await entityWithPaginationAndDTOComponentsPage.waitUntilDeleteButtonsLength(nbButtonsBeforeCreate + 1);
    expect(await entityWithPaginationAndDTOComponentsPage.countDeleteButtons()).to.eq(nbButtonsBeforeCreate + 1);
  });

  it('should delete last EntityWithPaginationAndDTO', async () => {
    await entityWithPaginationAndDTOComponentsPage.waitUntilLoaded();
    const nbButtonsBeforeDelete = await entityWithPaginationAndDTOComponentsPage.countDeleteButtons();
    await entityWithPaginationAndDTOComponentsPage.clickOnLastDeleteButton();

    const deleteModal = element(by.className('modal'));
    await waitUntilDisplayed(deleteModal);

    entityWithPaginationAndDTODeleteDialog = new EntityWithPaginationAndDTODeleteDialog();
    expect(await entityWithPaginationAndDTODeleteDialog.getDialogTitle().getAttribute('id')).to.match(
      /travisNg2App.entityWithPaginationAndDTO.delete.question/
    );
    await entityWithPaginationAndDTODeleteDialog.clickOnConfirmButton();

    await entityWithPaginationAndDTOComponentsPage.waitUntilDeleteButtonsLength(nbButtonsBeforeDelete - 1);
    expect(await entityWithPaginationAndDTOComponentsPage.countDeleteButtons()).to.eq(nbButtonsBeforeDelete - 1);
  });

  after(async () => {
    await navBarPage.autoSignOut();
  });
});
