import { browser, element, by, protractor } from 'protractor';

import NavBarPage from './../../page-objects/navbar-page';
import SignInPage from './../../page-objects/signin-page';
import MapsIdUserProfileWithDTOComponentsPage, { MapsIdUserProfileWithDTODeleteDialog } from './maps-id-user-profile-with-dto.page-object';
import MapsIdUserProfileWithDTOUpdatePage from './maps-id-user-profile-with-dto-update.page-object';
import { waitUntilDisplayed, waitUntilHidden } from '../../util/utils';

const expect = chai.expect;

describe('MapsIdUserProfileWithDTO e2e test', () => {
  let navBarPage: NavBarPage;
  let signInPage: SignInPage;
  let mapsIdUserProfileWithDTOComponentsPage: MapsIdUserProfileWithDTOComponentsPage;
  let mapsIdUserProfileWithDTOUpdatePage: MapsIdUserProfileWithDTOUpdatePage;
  /* let mapsIdUserProfileWithDTODeleteDialog: MapsIdUserProfileWithDTODeleteDialog; */

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

  it('should load MapsIdUserProfileWithDTOS', async () => {
    await navBarPage.getEntityPage('maps-id-user-profile-with-dto');
    mapsIdUserProfileWithDTOComponentsPage = new MapsIdUserProfileWithDTOComponentsPage();
    expect(await mapsIdUserProfileWithDTOComponentsPage.getTitle().getText()).to.match(/Maps Id User Profile With DTOS/);
  });

  it('should load create MapsIdUserProfileWithDTO page', async () => {
    await mapsIdUserProfileWithDTOComponentsPage.clickOnCreateButton();
    mapsIdUserProfileWithDTOUpdatePage = new MapsIdUserProfileWithDTOUpdatePage();
    expect(await mapsIdUserProfileWithDTOUpdatePage.getPageTitle().getAttribute('id')).to.match(
      /travisNg2App.mapsIdUserProfileWithDTO.home.createOrEditLabel/
    );
    await mapsIdUserProfileWithDTOUpdatePage.cancel();
  });

  /*  it('should create and save MapsIdUserProfileWithDTOS', async () => {
        async function createMapsIdUserProfileWithDTO() {
            await mapsIdUserProfileWithDTOComponentsPage.clickOnCreateButton();
            await mapsIdUserProfileWithDTOUpdatePage.setDateOfBirthInput('01/01/2001' + protractor.Key.TAB + '02:30AM');
            expect(await mapsIdUserProfileWithDTOUpdatePage.getDateOfBirthInput()).to.contain('2001-01-01T02:30');
            await mapsIdUserProfileWithDTOUpdatePage.userSelectLastOption();
            await waitUntilDisplayed(mapsIdUserProfileWithDTOUpdatePage.getSaveButton());
            await mapsIdUserProfileWithDTOUpdatePage.save();
            await waitUntilHidden(mapsIdUserProfileWithDTOUpdatePage.getSaveButton());
            expect(await mapsIdUserProfileWithDTOUpdatePage.getSaveButton().isPresent()).to.be.false;
        }

        await createMapsIdUserProfileWithDTO();
        await mapsIdUserProfileWithDTOComponentsPage.waitUntilLoaded();
        const nbButtonsBeforeCreate = await mapsIdUserProfileWithDTOComponentsPage.countDeleteButtons();
        await createMapsIdUserProfileWithDTO();

        await mapsIdUserProfileWithDTOComponentsPage.waitUntilDeleteButtonsLength(nbButtonsBeforeCreate + 1);
        expect(await mapsIdUserProfileWithDTOComponentsPage.countDeleteButtons()).to.eq(nbButtonsBeforeCreate + 1);
    }); */

  /*  it('should delete last MapsIdUserProfileWithDTO', async () => {
        await mapsIdUserProfileWithDTOComponentsPage.waitUntilLoaded();
        const nbButtonsBeforeDelete = await mapsIdUserProfileWithDTOComponentsPage.countDeleteButtons();
        await mapsIdUserProfileWithDTOComponentsPage.clickOnLastDeleteButton();

        const deleteModal = element(by.className('modal'));
        await waitUntilDisplayed(deleteModal);

        mapsIdUserProfileWithDTODeleteDialog = new MapsIdUserProfileWithDTODeleteDialog();
        expect(await mapsIdUserProfileWithDTODeleteDialog.getDialogTitle().getAttribute('id')).to.match(/travisNg2App.mapsIdUserProfileWithDTO.delete.question/);
        await mapsIdUserProfileWithDTODeleteDialog.clickOnConfirmButton();

        await mapsIdUserProfileWithDTOComponentsPage.waitUntilDeleteButtonsLength(nbButtonsBeforeDelete - 1);
        expect(await mapsIdUserProfileWithDTOComponentsPage.countDeleteButtons()).to.eq(nbButtonsBeforeDelete - 1);
    }); */

  after(async () => {
    await navBarPage.autoSignOut();
  });
});
