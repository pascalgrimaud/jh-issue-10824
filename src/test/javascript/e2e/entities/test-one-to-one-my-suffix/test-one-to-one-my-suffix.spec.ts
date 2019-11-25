import { browser, element, by } from 'protractor';

import NavBarPage from './../../page-objects/navbar-page';
import SignInPage from './../../page-objects/signin-page';
import TestOneToOneComponentsPage, { TestOneToOneDeleteDialog } from './test-one-to-one-my-suffix.page-object';
import TestOneToOneUpdatePage from './test-one-to-one-my-suffix-update.page-object';
import { waitUntilDisplayed, waitUntilHidden } from '../../util/utils';

const expect = chai.expect;

describe('TestOneToOne e2e test', () => {
  let navBarPage: NavBarPage;
  let signInPage: SignInPage;
  let testOneToOneComponentsPage: TestOneToOneComponentsPage;
  let testOneToOneUpdatePage: TestOneToOneUpdatePage;
  let testOneToOneDeleteDialog: TestOneToOneDeleteDialog;

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

  it('should load TestOneToOnes', async () => {
    await navBarPage.getEntityPage('test-one-to-one-my-suffix');
    testOneToOneComponentsPage = new TestOneToOneComponentsPage();
    expect(await testOneToOneComponentsPage.getTitle().getText()).to.match(/Test One To Ones/);
  });

  it('should load create TestOneToOne page', async () => {
    await testOneToOneComponentsPage.clickOnCreateButton();
    testOneToOneUpdatePage = new TestOneToOneUpdatePage();
    expect(await testOneToOneUpdatePage.getPageTitle().getAttribute('id')).to.match(/travisNg2App.testOneToOne.home.createOrEditLabel/);
    await testOneToOneUpdatePage.cancel();
  });

  it('should create and save TestOneToOnes', async () => {
    async function createTestOneToOne() {
      await testOneToOneComponentsPage.clickOnCreateButton();
      await testOneToOneUpdatePage.testEntitySelectLastOption();
      await testOneToOneUpdatePage.testMapstructSelectLastOption();
      await testOneToOneUpdatePage.testServiceClassSelectLastOption();
      await testOneToOneUpdatePage.testServiceImplSelectLastOption();
      await testOneToOneUpdatePage.testInfiniteScrollSelectLastOption();
      await testOneToOneUpdatePage.testPaginationSelectLastOption();
      await testOneToOneUpdatePage.testCustomTableNameSelectLastOption();
      await testOneToOneUpdatePage.superMegaLargeTestEntitySelectLastOption();
      await waitUntilDisplayed(testOneToOneUpdatePage.getSaveButton());
      await testOneToOneUpdatePage.save();
      await waitUntilHidden(testOneToOneUpdatePage.getSaveButton());
      expect(await testOneToOneUpdatePage.getSaveButton().isPresent()).to.be.false;
    }

    await createTestOneToOne();
    await testOneToOneComponentsPage.waitUntilLoaded();
    const nbButtonsBeforeCreate = await testOneToOneComponentsPage.countDeleteButtons();
    await createTestOneToOne();

    await testOneToOneComponentsPage.waitUntilDeleteButtonsLength(nbButtonsBeforeCreate + 1);
    expect(await testOneToOneComponentsPage.countDeleteButtons()).to.eq(nbButtonsBeforeCreate + 1);
  });

  it('should delete last TestOneToOne', async () => {
    await testOneToOneComponentsPage.waitUntilLoaded();
    const nbButtonsBeforeDelete = await testOneToOneComponentsPage.countDeleteButtons();
    await testOneToOneComponentsPage.clickOnLastDeleteButton();

    const deleteModal = element(by.className('modal'));
    await waitUntilDisplayed(deleteModal);

    testOneToOneDeleteDialog = new TestOneToOneDeleteDialog();
    expect(await testOneToOneDeleteDialog.getDialogTitle().getAttribute('id')).to.match(/travisNg2App.testOneToOne.delete.question/);
    await testOneToOneDeleteDialog.clickOnConfirmButton();

    await testOneToOneComponentsPage.waitUntilDeleteButtonsLength(nbButtonsBeforeDelete - 1);
    expect(await testOneToOneComponentsPage.countDeleteButtons()).to.eq(nbButtonsBeforeDelete - 1);
  });

  after(async () => {
    await navBarPage.autoSignOut();
  });
});
