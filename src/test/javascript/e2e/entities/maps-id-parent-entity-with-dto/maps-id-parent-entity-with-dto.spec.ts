import { browser, element, by } from 'protractor';

import NavBarPage from './../../page-objects/navbar-page';
import SignInPage from './../../page-objects/signin-page';
import MapsIdParentEntityWithDTOComponentsPage, {
  MapsIdParentEntityWithDTODeleteDialog
} from './maps-id-parent-entity-with-dto.page-object';
import MapsIdParentEntityWithDTOUpdatePage from './maps-id-parent-entity-with-dto-update.page-object';
import { waitUntilDisplayed, waitUntilHidden } from '../../util/utils';

const expect = chai.expect;

describe('MapsIdParentEntityWithDTO e2e test', () => {
  let navBarPage: NavBarPage;
  let signInPage: SignInPage;
  let mapsIdParentEntityWithDTOComponentsPage: MapsIdParentEntityWithDTOComponentsPage;
  let mapsIdParentEntityWithDTOUpdatePage: MapsIdParentEntityWithDTOUpdatePage;
  let mapsIdParentEntityWithDTODeleteDialog: MapsIdParentEntityWithDTODeleteDialog;

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

  it('should load MapsIdParentEntityWithDTOS', async () => {
    await navBarPage.getEntityPage('maps-id-parent-entity-with-dto');
    mapsIdParentEntityWithDTOComponentsPage = new MapsIdParentEntityWithDTOComponentsPage();
    expect(await mapsIdParentEntityWithDTOComponentsPage.getTitle().getText()).to.match(/Maps Id Parent Entity With DTOS/);
  });

  it('should load create MapsIdParentEntityWithDTO page', async () => {
    await mapsIdParentEntityWithDTOComponentsPage.clickOnCreateButton();
    mapsIdParentEntityWithDTOUpdatePage = new MapsIdParentEntityWithDTOUpdatePage();
    expect(await mapsIdParentEntityWithDTOUpdatePage.getPageTitle().getAttribute('id')).to.match(
      /travisNg2App.mapsIdParentEntityWithDTO.home.createOrEditLabel/
    );
    await mapsIdParentEntityWithDTOUpdatePage.cancel();
  });

  it('should create and save MapsIdParentEntityWithDTOS', async () => {
    async function createMapsIdParentEntityWithDTO() {
      await mapsIdParentEntityWithDTOComponentsPage.clickOnCreateButton();
      await mapsIdParentEntityWithDTOUpdatePage.setNameInput('name');
      expect(await mapsIdParentEntityWithDTOUpdatePage.getNameInput()).to.match(/name/);
      await waitUntilDisplayed(mapsIdParentEntityWithDTOUpdatePage.getSaveButton());
      await mapsIdParentEntityWithDTOUpdatePage.save();
      await waitUntilHidden(mapsIdParentEntityWithDTOUpdatePage.getSaveButton());
      expect(await mapsIdParentEntityWithDTOUpdatePage.getSaveButton().isPresent()).to.be.false;
    }

    await createMapsIdParentEntityWithDTO();
    await mapsIdParentEntityWithDTOComponentsPage.waitUntilLoaded();
    const nbButtonsBeforeCreate = await mapsIdParentEntityWithDTOComponentsPage.countDeleteButtons();
    await createMapsIdParentEntityWithDTO();

    await mapsIdParentEntityWithDTOComponentsPage.waitUntilDeleteButtonsLength(nbButtonsBeforeCreate + 1);
    expect(await mapsIdParentEntityWithDTOComponentsPage.countDeleteButtons()).to.eq(nbButtonsBeforeCreate + 1);
  });

  it('should delete last MapsIdParentEntityWithDTO', async () => {
    await mapsIdParentEntityWithDTOComponentsPage.waitUntilLoaded();
    const nbButtonsBeforeDelete = await mapsIdParentEntityWithDTOComponentsPage.countDeleteButtons();
    await mapsIdParentEntityWithDTOComponentsPage.clickOnLastDeleteButton();

    const deleteModal = element(by.className('modal'));
    await waitUntilDisplayed(deleteModal);

    mapsIdParentEntityWithDTODeleteDialog = new MapsIdParentEntityWithDTODeleteDialog();
    expect(await mapsIdParentEntityWithDTODeleteDialog.getDialogTitle().getAttribute('id')).to.match(
      /travisNg2App.mapsIdParentEntityWithDTO.delete.question/
    );
    await mapsIdParentEntityWithDTODeleteDialog.clickOnConfirmButton();

    await mapsIdParentEntityWithDTOComponentsPage.waitUntilDeleteButtonsLength(nbButtonsBeforeDelete - 1);
    expect(await mapsIdParentEntityWithDTOComponentsPage.countDeleteButtons()).to.eq(nbButtonsBeforeDelete - 1);
  });

  after(async () => {
    await navBarPage.autoSignOut();
  });
});
