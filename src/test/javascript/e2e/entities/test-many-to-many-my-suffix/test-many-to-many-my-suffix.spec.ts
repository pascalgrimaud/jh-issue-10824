import { browser, element, by } from 'protractor';

import NavBarPage from './../../page-objects/navbar-page';
import SignInPage from './../../page-objects/signin-page';
import TestManyToManyComponentsPage, { TestManyToManyDeleteDialog } from './test-many-to-many-my-suffix.page-object';
import TestManyToManyUpdatePage from './test-many-to-many-my-suffix-update.page-object';
import { waitUntilDisplayed, waitUntilHidden } from '../../util/utils';

const expect = chai.expect;

describe('TestManyToMany e2e test', () => {
  let navBarPage: NavBarPage;
  let signInPage: SignInPage;
  let testManyToManyComponentsPage: TestManyToManyComponentsPage;
  let testManyToManyUpdatePage: TestManyToManyUpdatePage;
  let testManyToManyDeleteDialog: TestManyToManyDeleteDialog;

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

  it('should load TestManyToManies', async () => {
    await navBarPage.getEntityPage('test-many-to-many-my-suffix');
    testManyToManyComponentsPage = new TestManyToManyComponentsPage();
    expect(await testManyToManyComponentsPage.getTitle().getText()).to.match(/Test Many To Manies/);
  });

  it('should load create TestManyToMany page', async () => {
    await testManyToManyComponentsPage.clickOnCreateButton();
    testManyToManyUpdatePage = new TestManyToManyUpdatePage();
    expect(await testManyToManyUpdatePage.getPageTitle().getAttribute('id')).to.match(/travisNg2App.testManyToMany.home.createOrEditLabel/);
    await testManyToManyUpdatePage.cancel();
  });

  it('should create and save TestManyToManies', async () => {
    async function createTestManyToMany() {
      await testManyToManyComponentsPage.clickOnCreateButton();
      // testManyToManyUpdatePage.testEntitySelectLastOption();
      // testManyToManyUpdatePage.testMapstructSelectLastOption();
      // testManyToManyUpdatePage.testServiceClassSelectLastOption();
      // testManyToManyUpdatePage.testServiceImplSelectLastOption();
      // testManyToManyUpdatePage.testInfiniteScrollSelectLastOption();
      // testManyToManyUpdatePage.testPaginationSelectLastOption();
      // testManyToManyUpdatePage.testCustomTableNameSelectLastOption();
      // testManyToManyUpdatePage.superMegaLargeTestEntitySelectLastOption();
      await waitUntilDisplayed(testManyToManyUpdatePage.getSaveButton());
      await testManyToManyUpdatePage.save();
      await waitUntilHidden(testManyToManyUpdatePage.getSaveButton());
      expect(await testManyToManyUpdatePage.getSaveButton().isPresent()).to.be.false;
    }

    await createTestManyToMany();
    await testManyToManyComponentsPage.waitUntilLoaded();
    const nbButtonsBeforeCreate = await testManyToManyComponentsPage.countDeleteButtons();
    await createTestManyToMany();

    await testManyToManyComponentsPage.waitUntilDeleteButtonsLength(nbButtonsBeforeCreate + 1);
    expect(await testManyToManyComponentsPage.countDeleteButtons()).to.eq(nbButtonsBeforeCreate + 1);
  });

  it('should delete last TestManyToMany', async () => {
    await testManyToManyComponentsPage.waitUntilLoaded();
    const nbButtonsBeforeDelete = await testManyToManyComponentsPage.countDeleteButtons();
    await testManyToManyComponentsPage.clickOnLastDeleteButton();

    const deleteModal = element(by.className('modal'));
    await waitUntilDisplayed(deleteModal);

    testManyToManyDeleteDialog = new TestManyToManyDeleteDialog();
    expect(await testManyToManyDeleteDialog.getDialogTitle().getAttribute('id')).to.match(/travisNg2App.testManyToMany.delete.question/);
    await testManyToManyDeleteDialog.clickOnConfirmButton();

    await testManyToManyComponentsPage.waitUntilDeleteButtonsLength(nbButtonsBeforeDelete - 1);
    expect(await testManyToManyComponentsPage.countDeleteButtons()).to.eq(nbButtonsBeforeDelete - 1);
  });

  after(async () => {
    await navBarPage.autoSignOut();
  });
});
