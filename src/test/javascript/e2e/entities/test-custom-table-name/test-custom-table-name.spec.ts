import { browser, element, by } from 'protractor';

import NavBarPage from './../../page-objects/navbar-page';
import SignInPage from './../../page-objects/signin-page';
import TestCustomTableNameComponentsPage, { TestCustomTableNameDeleteDialog } from './test-custom-table-name.page-object';
import TestCustomTableNameUpdatePage from './test-custom-table-name-update.page-object';
import { waitUntilDisplayed, waitUntilHidden } from '../../util/utils';

const expect = chai.expect;

describe('TestCustomTableName e2e test', () => {
  let navBarPage: NavBarPage;
  let signInPage: SignInPage;
  let testCustomTableNameComponentsPage: TestCustomTableNameComponentsPage;
  let testCustomTableNameUpdatePage: TestCustomTableNameUpdatePage;
  /* let testCustomTableNameDeleteDialog: TestCustomTableNameDeleteDialog; */

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

  it('should load TestCustomTableNames', async () => {
    await navBarPage.getEntityPage('test-custom-table-name');
    testCustomTableNameComponentsPage = new TestCustomTableNameComponentsPage();
    expect(await testCustomTableNameComponentsPage.getTitle().getText()).to.match(/Test Custom Table Names/);
  });

  it('should load create TestCustomTableName page', async () => {
    await testCustomTableNameComponentsPage.clickOnCreateButton();
    testCustomTableNameUpdatePage = new TestCustomTableNameUpdatePage();
    expect(await testCustomTableNameUpdatePage.getPageTitle().getAttribute('id')).to.match(
      /travisNg2App.testCustomTableName.home.createOrEditLabel/
    );
    await testCustomTableNameUpdatePage.cancel();
  });

  /*  it('should create and save TestCustomTableNames', async () => {
        async function createTestCustomTableName() {
            await testCustomTableNameComponentsPage.clickOnCreateButton();
            await testCustomTableNameUpdatePage.testEntitySelectLastOption();
            await testCustomTableNameUpdatePage.userOneToManySelectLastOption();
            // testCustomTableNameUpdatePage.userManyToManySelectLastOption();
            await testCustomTableNameUpdatePage.userOneToOneSelectLastOption();
            await testCustomTableNameUpdatePage.superMegaLargeTestEntitySelectLastOption();
            await waitUntilDisplayed(testCustomTableNameUpdatePage.getSaveButton());
            await testCustomTableNameUpdatePage.save();
            await waitUntilHidden(testCustomTableNameUpdatePage.getSaveButton());
            expect(await testCustomTableNameUpdatePage.getSaveButton().isPresent()).to.be.false;
        }

        await createTestCustomTableName();
        await testCustomTableNameComponentsPage.waitUntilLoaded();
        const nbButtonsBeforeCreate = await testCustomTableNameComponentsPage.countDeleteButtons();
        await createTestCustomTableName();

        await testCustomTableNameComponentsPage.waitUntilDeleteButtonsLength(nbButtonsBeforeCreate + 1);
        expect(await testCustomTableNameComponentsPage.countDeleteButtons()).to.eq(nbButtonsBeforeCreate + 1);
    }); */

  /*  it('should delete last TestCustomTableName', async () => {
        await testCustomTableNameComponentsPage.waitUntilLoaded();
        const nbButtonsBeforeDelete = await testCustomTableNameComponentsPage.countDeleteButtons();
        await testCustomTableNameComponentsPage.clickOnLastDeleteButton();

        const deleteModal = element(by.className('modal'));
        await waitUntilDisplayed(deleteModal);

        testCustomTableNameDeleteDialog = new TestCustomTableNameDeleteDialog();
        expect(await testCustomTableNameDeleteDialog.getDialogTitle().getAttribute('id')).to.match(/travisNg2App.testCustomTableName.delete.question/);
        await testCustomTableNameDeleteDialog.clickOnConfirmButton();

        await testCustomTableNameComponentsPage.waitUntilDeleteButtonsLength(nbButtonsBeforeDelete - 1);
        expect(await testCustomTableNameComponentsPage.countDeleteButtons()).to.eq(nbButtonsBeforeDelete - 1);
    }); */

  after(async () => {
    await navBarPage.autoSignOut();
  });
});
