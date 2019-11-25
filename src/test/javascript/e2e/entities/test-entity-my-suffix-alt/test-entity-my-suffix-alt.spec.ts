import { browser, element, by } from 'protractor';

import NavBarPage from './../../page-objects/navbar-page';
import SignInPage from './../../page-objects/signin-page';
import TestEntityComponentsPage, { TestEntityDeleteDialog } from './test-entity-my-suffix-alt.page-object';
import TestEntityUpdatePage from './test-entity-my-suffix-alt-update.page-object';
import { waitUntilDisplayed, waitUntilHidden } from '../../util/utils';

const expect = chai.expect;

describe('TestEntity e2e test', () => {
  let navBarPage: NavBarPage;
  let signInPage: SignInPage;
  let testEntityComponentsPage: TestEntityComponentsPage;
  let testEntityUpdatePage: TestEntityUpdatePage;
  /* let testEntityDeleteDialog: TestEntityDeleteDialog; */

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

  it('should load TestEntities', async () => {
    await navBarPage.getEntityPage('test-entity-my-suffix-alt');
    testEntityComponentsPage = new TestEntityComponentsPage();
    expect(await testEntityComponentsPage.getTitle().getText()).to.match(/Test Entities/);
  });

  it('should load create TestEntity page', async () => {
    await testEntityComponentsPage.clickOnCreateButton();
    testEntityUpdatePage = new TestEntityUpdatePage();
    expect(await testEntityUpdatePage.getPageTitle().getAttribute('id')).to.match(/travisNg2App.testEntity.home.createOrEditLabel/);
    await testEntityUpdatePage.cancel();
  });

  /*  it('should create and save TestEntities', async () => {
        async function createTestEntity() {
            await testEntityComponentsPage.clickOnCreateButton();
            await testEntityUpdatePage.userOneToManySelectLastOption();
            // testEntityUpdatePage.userManyToManySelectLastOption();
            await testEntityUpdatePage.userOneToOneSelectLastOption();
            await waitUntilDisplayed(testEntityUpdatePage.getSaveButton());
            await testEntityUpdatePage.save();
            await waitUntilHidden(testEntityUpdatePage.getSaveButton());
            expect(await testEntityUpdatePage.getSaveButton().isPresent()).to.be.false;
        }

        await createTestEntity();
        await testEntityComponentsPage.waitUntilLoaded();
        const nbButtonsBeforeCreate = await testEntityComponentsPage.countDeleteButtons();
        await createTestEntity();

        await testEntityComponentsPage.waitUntilDeleteButtonsLength(nbButtonsBeforeCreate + 1);
        expect(await testEntityComponentsPage.countDeleteButtons()).to.eq(nbButtonsBeforeCreate + 1);
    }); */

  /*  it('should delete last TestEntity', async () => {
        await testEntityComponentsPage.waitUntilLoaded();
        const nbButtonsBeforeDelete = await testEntityComponentsPage.countDeleteButtons();
        await testEntityComponentsPage.clickOnLastDeleteButton();

        const deleteModal = element(by.className('modal'));
        await waitUntilDisplayed(deleteModal);

        testEntityDeleteDialog = new TestEntityDeleteDialog();
        expect(await testEntityDeleteDialog.getDialogTitle().getAttribute('id')).to.match(/travisNg2App.testEntity.delete.question/);
        await testEntityDeleteDialog.clickOnConfirmButton();

        await testEntityComponentsPage.waitUntilDeleteButtonsLength(nbButtonsBeforeDelete - 1);
        expect(await testEntityComponentsPage.countDeleteButtons()).to.eq(nbButtonsBeforeDelete - 1);
    }); */

  after(async () => {
    await navBarPage.autoSignOut();
  });
});
