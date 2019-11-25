import { browser, element, by } from 'protractor';

import NavBarPage from './../../page-objects/navbar-page';
import SignInPage from './../../page-objects/signin-page';
import MapsIdParentEntityWithoutDTOComponentsPage, {
  MapsIdParentEntityWithoutDTODeleteDialog
} from './maps-id-parent-entity-without-dto.page-object';
import MapsIdParentEntityWithoutDTOUpdatePage from './maps-id-parent-entity-without-dto-update.page-object';
import { waitUntilDisplayed, waitUntilHidden } from '../../util/utils';

const expect = chai.expect;

describe('MapsIdParentEntityWithoutDTO e2e test', () => {
  let navBarPage: NavBarPage;
  let signInPage: SignInPage;
  let mapsIdParentEntityWithoutDTOComponentsPage: MapsIdParentEntityWithoutDTOComponentsPage;
  let mapsIdParentEntityWithoutDTOUpdatePage: MapsIdParentEntityWithoutDTOUpdatePage;
  let mapsIdParentEntityWithoutDTODeleteDialog: MapsIdParentEntityWithoutDTODeleteDialog;

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

  it('should load MapsIdParentEntityWithoutDTOS', async () => {
    await navBarPage.getEntityPage('maps-id-parent-entity-without-dto');
    mapsIdParentEntityWithoutDTOComponentsPage = new MapsIdParentEntityWithoutDTOComponentsPage();
    expect(await mapsIdParentEntityWithoutDTOComponentsPage.getTitle().getText()).to.match(/Maps Id Parent Entity Without DTOS/);
  });

  it('should load create MapsIdParentEntityWithoutDTO page', async () => {
    await mapsIdParentEntityWithoutDTOComponentsPage.clickOnCreateButton();
    mapsIdParentEntityWithoutDTOUpdatePage = new MapsIdParentEntityWithoutDTOUpdatePage();
    expect(await mapsIdParentEntityWithoutDTOUpdatePage.getPageTitle().getAttribute('id')).to.match(
      /travisNg2App.mapsIdParentEntityWithoutDTO.home.createOrEditLabel/
    );
    await mapsIdParentEntityWithoutDTOUpdatePage.cancel();
  });

  it('should create and save MapsIdParentEntityWithoutDTOS', async () => {
    async function createMapsIdParentEntityWithoutDTO() {
      await mapsIdParentEntityWithoutDTOComponentsPage.clickOnCreateButton();
      await mapsIdParentEntityWithoutDTOUpdatePage.setNameInput('name');
      expect(await mapsIdParentEntityWithoutDTOUpdatePage.getNameInput()).to.match(/name/);
      await waitUntilDisplayed(mapsIdParentEntityWithoutDTOUpdatePage.getSaveButton());
      await mapsIdParentEntityWithoutDTOUpdatePage.save();
      await waitUntilHidden(mapsIdParentEntityWithoutDTOUpdatePage.getSaveButton());
      expect(await mapsIdParentEntityWithoutDTOUpdatePage.getSaveButton().isPresent()).to.be.false;
    }

    await createMapsIdParentEntityWithoutDTO();
    await mapsIdParentEntityWithoutDTOComponentsPage.waitUntilLoaded();
    const nbButtonsBeforeCreate = await mapsIdParentEntityWithoutDTOComponentsPage.countDeleteButtons();
    await createMapsIdParentEntityWithoutDTO();

    await mapsIdParentEntityWithoutDTOComponentsPage.waitUntilDeleteButtonsLength(nbButtonsBeforeCreate + 1);
    expect(await mapsIdParentEntityWithoutDTOComponentsPage.countDeleteButtons()).to.eq(nbButtonsBeforeCreate + 1);
  });

  it('should delete last MapsIdParentEntityWithoutDTO', async () => {
    await mapsIdParentEntityWithoutDTOComponentsPage.waitUntilLoaded();
    const nbButtonsBeforeDelete = await mapsIdParentEntityWithoutDTOComponentsPage.countDeleteButtons();
    await mapsIdParentEntityWithoutDTOComponentsPage.clickOnLastDeleteButton();

    const deleteModal = element(by.className('modal'));
    await waitUntilDisplayed(deleteModal);

    mapsIdParentEntityWithoutDTODeleteDialog = new MapsIdParentEntityWithoutDTODeleteDialog();
    expect(await mapsIdParentEntityWithoutDTODeleteDialog.getDialogTitle().getAttribute('id')).to.match(
      /travisNg2App.mapsIdParentEntityWithoutDTO.delete.question/
    );
    await mapsIdParentEntityWithoutDTODeleteDialog.clickOnConfirmButton();

    await mapsIdParentEntityWithoutDTOComponentsPage.waitUntilDeleteButtonsLength(nbButtonsBeforeDelete - 1);
    expect(await mapsIdParentEntityWithoutDTOComponentsPage.countDeleteButtons()).to.eq(nbButtonsBeforeDelete - 1);
  });

  after(async () => {
    await navBarPage.autoSignOut();
  });
});
