import { browser, element, by } from 'protractor';

import NavBarPage from './../../page-objects/navbar-page';
import SignInPage from './../../page-objects/signin-page';
import TestInfiniteScrollComponentsPage, { TestInfiniteScrollDeleteDialog } from './test-infinite-scroll.page-object';
import TestInfiniteScrollUpdatePage from './test-infinite-scroll-update.page-object';
import { waitUntilDisplayed, waitUntilHidden } from '../../util/utils';

const expect = chai.expect;

describe('TestInfiniteScroll e2e test', () => {
  let navBarPage: NavBarPage;
  let signInPage: SignInPage;
  let testInfiniteScrollComponentsPage: TestInfiniteScrollComponentsPage;
  let testInfiniteScrollUpdatePage: TestInfiniteScrollUpdatePage;
  let testInfiniteScrollDeleteDialog: TestInfiniteScrollDeleteDialog;

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

  it('should load TestInfiniteScrolls', async () => {
    await navBarPage.getEntityPage('test-infinite-scroll');
    testInfiniteScrollComponentsPage = new TestInfiniteScrollComponentsPage();
    expect(await testInfiniteScrollComponentsPage.getTitle().getText()).to.match(/Test Infinite Scrolls/);
  });

  it('should load create TestInfiniteScroll page', async () => {
    await testInfiniteScrollComponentsPage.clickOnCreateButton();
    testInfiniteScrollUpdatePage = new TestInfiniteScrollUpdatePage();
    expect(await testInfiniteScrollUpdatePage.getPageTitle().getAttribute('id')).to.match(
      /travisNg2App.testInfiniteScroll.home.createOrEditLabel/
    );
    await testInfiniteScrollUpdatePage.cancel();
  });

  it('should create and save TestInfiniteScrolls', async () => {
    async function createTestInfiniteScroll() {
      await testInfiniteScrollComponentsPage.clickOnCreateButton();
      await testInfiniteScrollUpdatePage.userOneToManySelectLastOption();
      // testInfiniteScrollUpdatePage.userManyToManySelectLastOption();
      await testInfiniteScrollUpdatePage.userOneToOneSelectLastOption();
      await waitUntilDisplayed(testInfiniteScrollUpdatePage.getSaveButton());
      await testInfiniteScrollUpdatePage.save();
      await waitUntilHidden(testInfiniteScrollUpdatePage.getSaveButton());
      expect(await testInfiniteScrollUpdatePage.getSaveButton().isPresent()).to.be.false;
    }

    await createTestInfiniteScroll();
    await testInfiniteScrollComponentsPage.waitUntilLoaded();
    const nbButtonsBeforeCreate = await testInfiniteScrollComponentsPage.countDeleteButtons();
    await createTestInfiniteScroll();

    await testInfiniteScrollComponentsPage.waitUntilDeleteButtonsLength(nbButtonsBeforeCreate + 1);
    expect(await testInfiniteScrollComponentsPage.countDeleteButtons()).to.eq(nbButtonsBeforeCreate + 1);
  });

  it('should delete last TestInfiniteScroll', async () => {
    await testInfiniteScrollComponentsPage.waitUntilLoaded();
    const nbButtonsBeforeDelete = await testInfiniteScrollComponentsPage.countDeleteButtons();
    await testInfiniteScrollComponentsPage.clickOnLastDeleteButton();

    const deleteModal = element(by.className('modal'));
    await waitUntilDisplayed(deleteModal);

    testInfiniteScrollDeleteDialog = new TestInfiniteScrollDeleteDialog();
    expect(await testInfiniteScrollDeleteDialog.getDialogTitle().getAttribute('id')).to.match(
      /travisNg2App.testInfiniteScroll.delete.question/
    );
    await testInfiniteScrollDeleteDialog.clickOnConfirmButton();

    await testInfiniteScrollComponentsPage.waitUntilDeleteButtonsLength(nbButtonsBeforeDelete - 1);
    expect(await testInfiniteScrollComponentsPage.countDeleteButtons()).to.eq(nbButtonsBeforeDelete - 1);
  });

  after(async () => {
    await navBarPage.autoSignOut();
  });
});
