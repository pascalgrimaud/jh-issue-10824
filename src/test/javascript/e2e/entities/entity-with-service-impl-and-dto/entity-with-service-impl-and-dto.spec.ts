import { browser, element, by } from 'protractor';

import NavBarPage from './../../page-objects/navbar-page';
import SignInPage from './../../page-objects/signin-page';
import EntityWithServiceImplAndDTOComponentsPage, {
  EntityWithServiceImplAndDTODeleteDialog
} from './entity-with-service-impl-and-dto.page-object';
import EntityWithServiceImplAndDTOUpdatePage from './entity-with-service-impl-and-dto-update.page-object';
import { waitUntilDisplayed, waitUntilHidden } from '../../util/utils';

const expect = chai.expect;

describe('EntityWithServiceImplAndDTO e2e test', () => {
  let navBarPage: NavBarPage;
  let signInPage: SignInPage;
  let entityWithServiceImplAndDTOComponentsPage: EntityWithServiceImplAndDTOComponentsPage;
  let entityWithServiceImplAndDTOUpdatePage: EntityWithServiceImplAndDTOUpdatePage;
  let entityWithServiceImplAndDTODeleteDialog: EntityWithServiceImplAndDTODeleteDialog;

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

  it('should load EntityWithServiceImplAndDTOS', async () => {
    await navBarPage.getEntityPage('entity-with-service-impl-and-dto');
    entityWithServiceImplAndDTOComponentsPage = new EntityWithServiceImplAndDTOComponentsPage();
    expect(await entityWithServiceImplAndDTOComponentsPage.getTitle().getText()).to.match(/Entity With Service Impl And DTOS/);
  });

  it('should load create EntityWithServiceImplAndDTO page', async () => {
    await entityWithServiceImplAndDTOComponentsPage.clickOnCreateButton();
    entityWithServiceImplAndDTOUpdatePage = new EntityWithServiceImplAndDTOUpdatePage();
    expect(await entityWithServiceImplAndDTOUpdatePage.getPageTitle().getAttribute('id')).to.match(
      /travisNg2App.entityWithServiceImplAndDTO.home.createOrEditLabel/
    );
    await entityWithServiceImplAndDTOUpdatePage.cancel();
  });

  it('should create and save EntityWithServiceImplAndDTOS', async () => {
    async function createEntityWithServiceImplAndDTO() {
      await entityWithServiceImplAndDTOComponentsPage.clickOnCreateButton();
      await entityWithServiceImplAndDTOUpdatePage.setLouisInput('louis');
      expect(await entityWithServiceImplAndDTOUpdatePage.getLouisInput()).to.match(/louis/);
      await waitUntilDisplayed(entityWithServiceImplAndDTOUpdatePage.getSaveButton());
      await entityWithServiceImplAndDTOUpdatePage.save();
      await waitUntilHidden(entityWithServiceImplAndDTOUpdatePage.getSaveButton());
      expect(await entityWithServiceImplAndDTOUpdatePage.getSaveButton().isPresent()).to.be.false;
    }

    await createEntityWithServiceImplAndDTO();
    await entityWithServiceImplAndDTOComponentsPage.waitUntilLoaded();
    const nbButtonsBeforeCreate = await entityWithServiceImplAndDTOComponentsPage.countDeleteButtons();
    await createEntityWithServiceImplAndDTO();

    await entityWithServiceImplAndDTOComponentsPage.waitUntilDeleteButtonsLength(nbButtonsBeforeCreate + 1);
    expect(await entityWithServiceImplAndDTOComponentsPage.countDeleteButtons()).to.eq(nbButtonsBeforeCreate + 1);
  });

  it('should delete last EntityWithServiceImplAndDTO', async () => {
    await entityWithServiceImplAndDTOComponentsPage.waitUntilLoaded();
    const nbButtonsBeforeDelete = await entityWithServiceImplAndDTOComponentsPage.countDeleteButtons();
    await entityWithServiceImplAndDTOComponentsPage.clickOnLastDeleteButton();

    const deleteModal = element(by.className('modal'));
    await waitUntilDisplayed(deleteModal);

    entityWithServiceImplAndDTODeleteDialog = new EntityWithServiceImplAndDTODeleteDialog();
    expect(await entityWithServiceImplAndDTODeleteDialog.getDialogTitle().getAttribute('id')).to.match(
      /travisNg2App.entityWithServiceImplAndDTO.delete.question/
    );
    await entityWithServiceImplAndDTODeleteDialog.clickOnConfirmButton();

    await entityWithServiceImplAndDTOComponentsPage.waitUntilDeleteButtonsLength(nbButtonsBeforeDelete - 1);
    expect(await entityWithServiceImplAndDTOComponentsPage.countDeleteButtons()).to.eq(nbButtonsBeforeDelete - 1);
  });

  after(async () => {
    await navBarPage.autoSignOut();
  });
});
