import { browser, element, by, protractor } from 'protractor';

import NavBarPage from './../../page-objects/navbar-page';
import SignInPage from './../../page-objects/signin-page';
import MapsIdChildEntityWithDTOComponentsPage, { MapsIdChildEntityWithDTODeleteDialog } from './maps-id-child-entity-with-dto.page-object';
import MapsIdChildEntityWithDTOUpdatePage from './maps-id-child-entity-with-dto-update.page-object';
import { waitUntilDisplayed, waitUntilHidden } from '../../util/utils';

const expect = chai.expect;

describe('MapsIdChildEntityWithDTO e2e test', () => {
  let navBarPage: NavBarPage;
  let signInPage: SignInPage;
  let mapsIdChildEntityWithDTOComponentsPage: MapsIdChildEntityWithDTOComponentsPage;
  let mapsIdChildEntityWithDTOUpdatePage: MapsIdChildEntityWithDTOUpdatePage;
  /* let mapsIdChildEntityWithDTODeleteDialog: MapsIdChildEntityWithDTODeleteDialog; */

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

  it('should load MapsIdChildEntityWithDTOS', async () => {
    await navBarPage.getEntityPage('maps-id-child-entity-with-dto');
    mapsIdChildEntityWithDTOComponentsPage = new MapsIdChildEntityWithDTOComponentsPage();
    expect(await mapsIdChildEntityWithDTOComponentsPage.getTitle().getText()).to.match(/Maps Id Child Entity With DTOS/);
  });

  it('should load create MapsIdChildEntityWithDTO page', async () => {
    await mapsIdChildEntityWithDTOComponentsPage.clickOnCreateButton();
    mapsIdChildEntityWithDTOUpdatePage = new MapsIdChildEntityWithDTOUpdatePage();
    expect(await mapsIdChildEntityWithDTOUpdatePage.getPageTitle().getAttribute('id')).to.match(
      /travisNg2App.mapsIdChildEntityWithDTO.home.createOrEditLabel/
    );
    await mapsIdChildEntityWithDTOUpdatePage.cancel();
  });

  /*  it('should create and save MapsIdChildEntityWithDTOS', async () => {
        async function createMapsIdChildEntityWithDTO() {
            await mapsIdChildEntityWithDTOComponentsPage.clickOnCreateButton();
            await mapsIdChildEntityWithDTOUpdatePage.setDateInput('01/01/2001' + protractor.Key.TAB + '02:30AM');
            expect(await mapsIdChildEntityWithDTOUpdatePage.getDateInput()).to.contain('2001-01-01T02:30');
            await mapsIdChildEntityWithDTOUpdatePage.mapsIdParentEntityWithDTOSelectLastOption();
            await waitUntilDisplayed(mapsIdChildEntityWithDTOUpdatePage.getSaveButton());
            await mapsIdChildEntityWithDTOUpdatePage.save();
            await waitUntilHidden(mapsIdChildEntityWithDTOUpdatePage.getSaveButton());
            expect(await mapsIdChildEntityWithDTOUpdatePage.getSaveButton().isPresent()).to.be.false;
        }

        await createMapsIdChildEntityWithDTO();
        await mapsIdChildEntityWithDTOComponentsPage.waitUntilLoaded();
        const nbButtonsBeforeCreate = await mapsIdChildEntityWithDTOComponentsPage.countDeleteButtons();
        await createMapsIdChildEntityWithDTO();

        await mapsIdChildEntityWithDTOComponentsPage.waitUntilDeleteButtonsLength(nbButtonsBeforeCreate + 1);
        expect(await mapsIdChildEntityWithDTOComponentsPage.countDeleteButtons()).to.eq(nbButtonsBeforeCreate + 1);
    }); */

  /*  it('should delete last MapsIdChildEntityWithDTO', async () => {
        await mapsIdChildEntityWithDTOComponentsPage.waitUntilLoaded();
        const nbButtonsBeforeDelete = await mapsIdChildEntityWithDTOComponentsPage.countDeleteButtons();
        await mapsIdChildEntityWithDTOComponentsPage.clickOnLastDeleteButton();

        const deleteModal = element(by.className('modal'));
        await waitUntilDisplayed(deleteModal);

        mapsIdChildEntityWithDTODeleteDialog = new MapsIdChildEntityWithDTODeleteDialog();
        expect(await mapsIdChildEntityWithDTODeleteDialog.getDialogTitle().getAttribute('id')).to.match(/travisNg2App.mapsIdChildEntityWithDTO.delete.question/);
        await mapsIdChildEntityWithDTODeleteDialog.clickOnConfirmButton();

        await mapsIdChildEntityWithDTOComponentsPage.waitUntilDeleteButtonsLength(nbButtonsBeforeDelete - 1);
        expect(await mapsIdChildEntityWithDTOComponentsPage.countDeleteButtons()).to.eq(nbButtonsBeforeDelete - 1);
    }); */

  after(async () => {
    await navBarPage.autoSignOut();
  });
});
