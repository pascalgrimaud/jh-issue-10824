import { browser, element, by } from 'protractor';

import NavBarPage from './../../page-objects/navbar-page';
import SignInPage from './../../page-objects/signin-page';
import EntityWithServiceClassAndDTOComponentsPage, {
  EntityWithServiceClassAndDTODeleteDialog
} from './entity-with-service-class-and-dto.page-object';
import EntityWithServiceClassAndDTOUpdatePage from './entity-with-service-class-and-dto-update.page-object';
import { waitUntilDisplayed, waitUntilHidden } from '../../util/utils';

const expect = chai.expect;

describe('EntityWithServiceClassAndDTO e2e test', () => {
  let navBarPage: NavBarPage;
  let signInPage: SignInPage;
  let entityWithServiceClassAndDTOComponentsPage: EntityWithServiceClassAndDTOComponentsPage;
  let entityWithServiceClassAndDTOUpdatePage: EntityWithServiceClassAndDTOUpdatePage;
  let entityWithServiceClassAndDTODeleteDialog: EntityWithServiceClassAndDTODeleteDialog;

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

  it('should load EntityWithServiceClassAndDTOS', async () => {
    await navBarPage.getEntityPage('entity-with-service-class-and-dto');
    entityWithServiceClassAndDTOComponentsPage = new EntityWithServiceClassAndDTOComponentsPage();
    expect(await entityWithServiceClassAndDTOComponentsPage.getTitle().getText()).to.match(/Entity With Service Class And DTOS/);
  });

  it('should load create EntityWithServiceClassAndDTO page', async () => {
    await entityWithServiceClassAndDTOComponentsPage.clickOnCreateButton();
    entityWithServiceClassAndDTOUpdatePage = new EntityWithServiceClassAndDTOUpdatePage();
    expect(await entityWithServiceClassAndDTOUpdatePage.getPageTitle().getAttribute('id')).to.match(
      /travisNg2App.entityWithServiceClassAndDTO.home.createOrEditLabel/
    );
    await entityWithServiceClassAndDTOUpdatePage.cancel();
  });

  it('should create and save EntityWithServiceClassAndDTOS', async () => {
    async function createEntityWithServiceClassAndDTO() {
      await entityWithServiceClassAndDTOComponentsPage.clickOnCreateButton();
      await entityWithServiceClassAndDTOUpdatePage.setLucasInput('lucas');
      expect(await entityWithServiceClassAndDTOUpdatePage.getLucasInput()).to.match(/lucas/);
      await waitUntilDisplayed(entityWithServiceClassAndDTOUpdatePage.getSaveButton());
      await entityWithServiceClassAndDTOUpdatePage.save();
      await waitUntilHidden(entityWithServiceClassAndDTOUpdatePage.getSaveButton());
      expect(await entityWithServiceClassAndDTOUpdatePage.getSaveButton().isPresent()).to.be.false;
    }

    await createEntityWithServiceClassAndDTO();
    await entityWithServiceClassAndDTOComponentsPage.waitUntilLoaded();
    const nbButtonsBeforeCreate = await entityWithServiceClassAndDTOComponentsPage.countDeleteButtons();
    await createEntityWithServiceClassAndDTO();

    await entityWithServiceClassAndDTOComponentsPage.waitUntilDeleteButtonsLength(nbButtonsBeforeCreate + 1);
    expect(await entityWithServiceClassAndDTOComponentsPage.countDeleteButtons()).to.eq(nbButtonsBeforeCreate + 1);
  });

  it('should delete last EntityWithServiceClassAndDTO', async () => {
    await entityWithServiceClassAndDTOComponentsPage.waitUntilLoaded();
    const nbButtonsBeforeDelete = await entityWithServiceClassAndDTOComponentsPage.countDeleteButtons();
    await entityWithServiceClassAndDTOComponentsPage.clickOnLastDeleteButton();

    const deleteModal = element(by.className('modal'));
    await waitUntilDisplayed(deleteModal);

    entityWithServiceClassAndDTODeleteDialog = new EntityWithServiceClassAndDTODeleteDialog();
    expect(await entityWithServiceClassAndDTODeleteDialog.getDialogTitle().getAttribute('id')).to.match(
      /travisNg2App.entityWithServiceClassAndDTO.delete.question/
    );
    await entityWithServiceClassAndDTODeleteDialog.clickOnConfirmButton();

    await entityWithServiceClassAndDTOComponentsPage.waitUntilDeleteButtonsLength(nbButtonsBeforeDelete - 1);
    expect(await entityWithServiceClassAndDTOComponentsPage.countDeleteButtons()).to.eq(nbButtonsBeforeDelete - 1);
  });

  after(async () => {
    await navBarPage.autoSignOut();
  });
});
