import { browser, element, by, protractor } from 'protractor';

import NavBarPage from './../../page-objects/navbar-page';
import SignInPage from './../../page-objects/signin-page';
import MapsIdChildEntityWithoutDTOComponentsPage, {
  MapsIdChildEntityWithoutDTODeleteDialog
} from './maps-id-child-entity-without-dto.page-object';
import MapsIdChildEntityWithoutDTOUpdatePage from './maps-id-child-entity-without-dto-update.page-object';
import { waitUntilDisplayed, waitUntilHidden } from '../../util/utils';

const expect = chai.expect;

describe('MapsIdChildEntityWithoutDTO e2e test', () => {
  let navBarPage: NavBarPage;
  let signInPage: SignInPage;
  let mapsIdChildEntityWithoutDTOComponentsPage: MapsIdChildEntityWithoutDTOComponentsPage;
  let mapsIdChildEntityWithoutDTOUpdatePage: MapsIdChildEntityWithoutDTOUpdatePage;
  /* let mapsIdChildEntityWithoutDTODeleteDialog: MapsIdChildEntityWithoutDTODeleteDialog; */

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

  it('should load MapsIdChildEntityWithoutDTOS', async () => {
    await navBarPage.getEntityPage('maps-id-child-entity-without-dto');
    mapsIdChildEntityWithoutDTOComponentsPage = new MapsIdChildEntityWithoutDTOComponentsPage();
    expect(await mapsIdChildEntityWithoutDTOComponentsPage.getTitle().getText()).to.match(/Maps Id Child Entity Without DTOS/);
  });

  it('should load create MapsIdChildEntityWithoutDTO page', async () => {
    await mapsIdChildEntityWithoutDTOComponentsPage.clickOnCreateButton();
    mapsIdChildEntityWithoutDTOUpdatePage = new MapsIdChildEntityWithoutDTOUpdatePage();
    expect(await mapsIdChildEntityWithoutDTOUpdatePage.getPageTitle().getAttribute('id')).to.match(
      /travisNg2App.mapsIdChildEntityWithoutDTO.home.createOrEditLabel/
    );
    await mapsIdChildEntityWithoutDTOUpdatePage.cancel();
  });

  /*  it('should create and save MapsIdChildEntityWithoutDTOS', async () => {
        async function createMapsIdChildEntityWithoutDTO() {
            await mapsIdChildEntityWithoutDTOComponentsPage.clickOnCreateButton();
            await mapsIdChildEntityWithoutDTOUpdatePage.setDateInput('01/01/2001' + protractor.Key.TAB + '02:30AM');
            expect(await mapsIdChildEntityWithoutDTOUpdatePage.getDateInput()).to.contain('2001-01-01T02:30');
            await mapsIdChildEntityWithoutDTOUpdatePage.mapsIdParentEntityWithoutDTOSelectLastOption();
            await waitUntilDisplayed(mapsIdChildEntityWithoutDTOUpdatePage.getSaveButton());
            await mapsIdChildEntityWithoutDTOUpdatePage.save();
            await waitUntilHidden(mapsIdChildEntityWithoutDTOUpdatePage.getSaveButton());
            expect(await mapsIdChildEntityWithoutDTOUpdatePage.getSaveButton().isPresent()).to.be.false;
        }

        await createMapsIdChildEntityWithoutDTO();
        await mapsIdChildEntityWithoutDTOComponentsPage.waitUntilLoaded();
        const nbButtonsBeforeCreate = await mapsIdChildEntityWithoutDTOComponentsPage.countDeleteButtons();
        await createMapsIdChildEntityWithoutDTO();

        await mapsIdChildEntityWithoutDTOComponentsPage.waitUntilDeleteButtonsLength(nbButtonsBeforeCreate + 1);
        expect(await mapsIdChildEntityWithoutDTOComponentsPage.countDeleteButtons()).to.eq(nbButtonsBeforeCreate + 1);
    }); */

  /*  it('should delete last MapsIdChildEntityWithoutDTO', async () => {
        await mapsIdChildEntityWithoutDTOComponentsPage.waitUntilLoaded();
        const nbButtonsBeforeDelete = await mapsIdChildEntityWithoutDTOComponentsPage.countDeleteButtons();
        await mapsIdChildEntityWithoutDTOComponentsPage.clickOnLastDeleteButton();

        const deleteModal = element(by.className('modal'));
        await waitUntilDisplayed(deleteModal);

        mapsIdChildEntityWithoutDTODeleteDialog = new MapsIdChildEntityWithoutDTODeleteDialog();
        expect(await mapsIdChildEntityWithoutDTODeleteDialog.getDialogTitle().getAttribute('id')).to.match(/travisNg2App.mapsIdChildEntityWithoutDTO.delete.question/);
        await mapsIdChildEntityWithoutDTODeleteDialog.clickOnConfirmButton();

        await mapsIdChildEntityWithoutDTOComponentsPage.waitUntilDeleteButtonsLength(nbButtonsBeforeDelete - 1);
        expect(await mapsIdChildEntityWithoutDTOComponentsPage.countDeleteButtons()).to.eq(nbButtonsBeforeDelete - 1);
    }); */

  after(async () => {
    await navBarPage.autoSignOut();
  });
});
