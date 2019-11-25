import { browser, element, by } from 'protractor';

import NavBarPage from './../../page-objects/navbar-page';
import SignInPage from './../../page-objects/signin-page';
import SuperMegaLargeTestEntityComponentsPage, {
  SuperMegaLargeTestEntityDeleteDialog
} from './super-mega-large-test-entity-my-suffix-alt.page-object';
import SuperMegaLargeTestEntityUpdatePage from './super-mega-large-test-entity-my-suffix-alt-update.page-object';
import { waitUntilDisplayed, waitUntilHidden } from '../../util/utils';

const expect = chai.expect;

describe('SuperMegaLargeTestEntity e2e test', () => {
  let navBarPage: NavBarPage;
  let signInPage: SignInPage;
  let superMegaLargeTestEntityComponentsPage: SuperMegaLargeTestEntityComponentsPage;
  let superMegaLargeTestEntityUpdatePage: SuperMegaLargeTestEntityUpdatePage;
  /* let superMegaLargeTestEntityDeleteDialog: SuperMegaLargeTestEntityDeleteDialog; */

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

  it('should load SuperMegaLargeTestEntities', async () => {
    await navBarPage.getEntityPage('super-mega-large-test-entity-my-suffix-alt');
    superMegaLargeTestEntityComponentsPage = new SuperMegaLargeTestEntityComponentsPage();
    expect(await superMegaLargeTestEntityComponentsPage.getTitle().getText()).to.match(/Super Mega Large Test Entities/);
  });

  it('should load create SuperMegaLargeTestEntity page', async () => {
    await superMegaLargeTestEntityComponentsPage.clickOnCreateButton();
    superMegaLargeTestEntityUpdatePage = new SuperMegaLargeTestEntityUpdatePage();
    expect(await superMegaLargeTestEntityUpdatePage.getPageTitle().getAttribute('id')).to.match(
      /travisNg2App.superMegaLargeTestEntity.home.createOrEditLabel/
    );
    await superMegaLargeTestEntityUpdatePage.cancel();
  });

  /*  it('should create and save SuperMegaLargeTestEntities', async () => {
        async function createSuperMegaLargeTestEntity() {
            await superMegaLargeTestEntityComponentsPage.clickOnCreateButton();
            await superMegaLargeTestEntityUpdatePage.superMegaLargeUserOneToManySelectLastOption();
            // superMegaLargeTestEntityUpdatePage.superMegaLargeUserManyToManySelectLastOption();
            await superMegaLargeTestEntityUpdatePage.superMegaLargeUserOneToOneSelectLastOption();
            await waitUntilDisplayed(superMegaLargeTestEntityUpdatePage.getSaveButton());
            await superMegaLargeTestEntityUpdatePage.save();
            await waitUntilHidden(superMegaLargeTestEntityUpdatePage.getSaveButton());
            expect(await superMegaLargeTestEntityUpdatePage.getSaveButton().isPresent()).to.be.false;
        }

        await createSuperMegaLargeTestEntity();
        await superMegaLargeTestEntityComponentsPage.waitUntilLoaded();
        const nbButtonsBeforeCreate = await superMegaLargeTestEntityComponentsPage.countDeleteButtons();
        await createSuperMegaLargeTestEntity();

        await superMegaLargeTestEntityComponentsPage.waitUntilDeleteButtonsLength(nbButtonsBeforeCreate + 1);
        expect(await superMegaLargeTestEntityComponentsPage.countDeleteButtons()).to.eq(nbButtonsBeforeCreate + 1);
    }); */

  /*  it('should delete last SuperMegaLargeTestEntity', async () => {
        await superMegaLargeTestEntityComponentsPage.waitUntilLoaded();
        const nbButtonsBeforeDelete = await superMegaLargeTestEntityComponentsPage.countDeleteButtons();
        await superMegaLargeTestEntityComponentsPage.clickOnLastDeleteButton();

        const deleteModal = element(by.className('modal'));
        await waitUntilDisplayed(deleteModal);

        superMegaLargeTestEntityDeleteDialog = new SuperMegaLargeTestEntityDeleteDialog();
        expect(await superMegaLargeTestEntityDeleteDialog.getDialogTitle().getAttribute('id')).to.match(/travisNg2App.superMegaLargeTestEntity.delete.question/);
        await superMegaLargeTestEntityDeleteDialog.clickOnConfirmButton();

        await superMegaLargeTestEntityComponentsPage.waitUntilDeleteButtonsLength(nbButtonsBeforeDelete - 1);
        expect(await superMegaLargeTestEntityComponentsPage.countDeleteButtons()).to.eq(nbButtonsBeforeDelete - 1);
    }); */

  after(async () => {
    await navBarPage.autoSignOut();
  });
});
