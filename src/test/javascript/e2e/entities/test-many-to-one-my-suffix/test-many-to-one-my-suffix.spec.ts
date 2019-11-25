import { browser, element, by } from 'protractor';

import NavBarPage from './../../page-objects/navbar-page';
import SignInPage from './../../page-objects/signin-page';
import TestManyToOneComponentsPage, { TestManyToOneDeleteDialog } from './test-many-to-one-my-suffix.page-object';
import TestManyToOneUpdatePage from './test-many-to-one-my-suffix-update.page-object';
import { waitUntilDisplayed, waitUntilHidden } from '../../util/utils';

const expect = chai.expect;

describe('TestManyToOne e2e test', () => {
  let navBarPage: NavBarPage;
  let signInPage: SignInPage;
  let testManyToOneComponentsPage: TestManyToOneComponentsPage;
  let testManyToOneUpdatePage: TestManyToOneUpdatePage;
  let testManyToOneDeleteDialog: TestManyToOneDeleteDialog;

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

  it('should load TestManyToOnes', async () => {
    await navBarPage.getEntityPage('test-many-to-one-my-suffix');
    testManyToOneComponentsPage = new TestManyToOneComponentsPage();
    expect(await testManyToOneComponentsPage.getTitle().getText()).to.match(/Test Many To Ones/);
  });

  it('should load create TestManyToOne page', async () => {
    await testManyToOneComponentsPage.clickOnCreateButton();
    testManyToOneUpdatePage = new TestManyToOneUpdatePage();
    expect(await testManyToOneUpdatePage.getPageTitle().getAttribute('id')).to.match(/travisNg2App.testManyToOne.home.createOrEditLabel/);
    await testManyToOneUpdatePage.cancel();
  });

  it('should create and save TestManyToOnes', async () => {
    async function createTestManyToOne() {
      await testManyToOneComponentsPage.clickOnCreateButton();
      await testManyToOneUpdatePage.testEntitySelectLastOption();
      await testManyToOneUpdatePage.testMapstructSelectLastOption();
      await testManyToOneUpdatePage.testServiceClassSelectLastOption();
      await testManyToOneUpdatePage.testServiceImplSelectLastOption();
      await testManyToOneUpdatePage.testInfiniteScrollSelectLastOption();
      await testManyToOneUpdatePage.testPaginationSelectLastOption();
      await testManyToOneUpdatePage.testCustomTableNameSelectLastOption();
      await testManyToOneUpdatePage.superMegaLargeTestEntitySelectLastOption();
      await waitUntilDisplayed(testManyToOneUpdatePage.getSaveButton());
      await testManyToOneUpdatePage.save();
      await waitUntilHidden(testManyToOneUpdatePage.getSaveButton());
      expect(await testManyToOneUpdatePage.getSaveButton().isPresent()).to.be.false;
    }

    await createTestManyToOne();
    await testManyToOneComponentsPage.waitUntilLoaded();
    const nbButtonsBeforeCreate = await testManyToOneComponentsPage.countDeleteButtons();
    await createTestManyToOne();

    await testManyToOneComponentsPage.waitUntilDeleteButtonsLength(nbButtonsBeforeCreate + 1);
    expect(await testManyToOneComponentsPage.countDeleteButtons()).to.eq(nbButtonsBeforeCreate + 1);
  });

  it('should delete last TestManyToOne', async () => {
    await testManyToOneComponentsPage.waitUntilLoaded();
    const nbButtonsBeforeDelete = await testManyToOneComponentsPage.countDeleteButtons();
    await testManyToOneComponentsPage.clickOnLastDeleteButton();

    const deleteModal = element(by.className('modal'));
    await waitUntilDisplayed(deleteModal);

    testManyToOneDeleteDialog = new TestManyToOneDeleteDialog();
    expect(await testManyToOneDeleteDialog.getDialogTitle().getAttribute('id')).to.match(/travisNg2App.testManyToOne.delete.question/);
    await testManyToOneDeleteDialog.clickOnConfirmButton();

    await testManyToOneComponentsPage.waitUntilDeleteButtonsLength(nbButtonsBeforeDelete - 1);
    expect(await testManyToOneComponentsPage.countDeleteButtons()).to.eq(nbButtonsBeforeDelete - 1);
  });

  after(async () => {
    await navBarPage.autoSignOut();
  });
});
