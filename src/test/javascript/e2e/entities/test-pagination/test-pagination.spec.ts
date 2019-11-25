import { browser, element, by } from 'protractor';

import NavBarPage from './../../page-objects/navbar-page';
import SignInPage from './../../page-objects/signin-page';
import TestPaginationComponentsPage, { TestPaginationDeleteDialog } from './test-pagination.page-object';
import TestPaginationUpdatePage from './test-pagination-update.page-object';
import { waitUntilDisplayed, waitUntilHidden } from '../../util/utils';

const expect = chai.expect;

describe('TestPagination e2e test', () => {
  let navBarPage: NavBarPage;
  let signInPage: SignInPage;
  let testPaginationComponentsPage: TestPaginationComponentsPage;
  let testPaginationUpdatePage: TestPaginationUpdatePage;
  let testPaginationDeleteDialog: TestPaginationDeleteDialog;

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

  it('should load TestPaginations', async () => {
    await navBarPage.getEntityPage('test-pagination');
    testPaginationComponentsPage = new TestPaginationComponentsPage();
    expect(await testPaginationComponentsPage.getTitle().getText()).to.match(/Test Paginations/);
  });

  it('should load create TestPagination page', async () => {
    await testPaginationComponentsPage.clickOnCreateButton();
    testPaginationUpdatePage = new TestPaginationUpdatePage();
    expect(await testPaginationUpdatePage.getPageTitle().getAttribute('id')).to.match(/travisNg2App.testPagination.home.createOrEditLabel/);
    await testPaginationUpdatePage.cancel();
  });

  it('should create and save TestPaginations', async () => {
    async function createTestPagination() {
      await testPaginationComponentsPage.clickOnCreateButton();
      await testPaginationUpdatePage.userOneToManySelectLastOption();
      // testPaginationUpdatePage.userManyToManySelectLastOption();
      await testPaginationUpdatePage.userOneToOneSelectLastOption();
      await waitUntilDisplayed(testPaginationUpdatePage.getSaveButton());
      await testPaginationUpdatePage.save();
      await waitUntilHidden(testPaginationUpdatePage.getSaveButton());
      expect(await testPaginationUpdatePage.getSaveButton().isPresent()).to.be.false;
    }

    await createTestPagination();
    await testPaginationComponentsPage.waitUntilLoaded();
    const nbButtonsBeforeCreate = await testPaginationComponentsPage.countDeleteButtons();
    await createTestPagination();

    await testPaginationComponentsPage.waitUntilDeleteButtonsLength(nbButtonsBeforeCreate + 1);
    expect(await testPaginationComponentsPage.countDeleteButtons()).to.eq(nbButtonsBeforeCreate + 1);
  });

  it('should delete last TestPagination', async () => {
    await testPaginationComponentsPage.waitUntilLoaded();
    const nbButtonsBeforeDelete = await testPaginationComponentsPage.countDeleteButtons();
    await testPaginationComponentsPage.clickOnLastDeleteButton();

    const deleteModal = element(by.className('modal'));
    await waitUntilDisplayed(deleteModal);

    testPaginationDeleteDialog = new TestPaginationDeleteDialog();
    expect(await testPaginationDeleteDialog.getDialogTitle().getAttribute('id')).to.match(/travisNg2App.testPagination.delete.question/);
    await testPaginationDeleteDialog.clickOnConfirmButton();

    await testPaginationComponentsPage.waitUntilDeleteButtonsLength(nbButtonsBeforeDelete - 1);
    expect(await testPaginationComponentsPage.countDeleteButtons()).to.eq(nbButtonsBeforeDelete - 1);
  });

  after(async () => {
    await navBarPage.autoSignOut();
  });
});
