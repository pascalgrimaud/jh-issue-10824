import { browser, element, by } from 'protractor';

import NavBarPage from './../../page-objects/navbar-page';
import SignInPage from './../../page-objects/signin-page';
import TestServiceImplComponentsPage, { TestServiceImplDeleteDialog } from './test-service-impl.page-object';
import TestServiceImplUpdatePage from './test-service-impl-update.page-object';
import { waitUntilDisplayed, waitUntilHidden } from '../../util/utils';

const expect = chai.expect;

describe('TestServiceImpl e2e test', () => {
  let navBarPage: NavBarPage;
  let signInPage: SignInPage;
  let testServiceImplComponentsPage: TestServiceImplComponentsPage;
  let testServiceImplUpdatePage: TestServiceImplUpdatePage;
  let testServiceImplDeleteDialog: TestServiceImplDeleteDialog;

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

  it('should load TestServiceImpls', async () => {
    await navBarPage.getEntityPage('test-service-impl');
    testServiceImplComponentsPage = new TestServiceImplComponentsPage();
    expect(await testServiceImplComponentsPage.getTitle().getText()).to.match(/Test Service Impls/);
  });

  it('should load create TestServiceImpl page', async () => {
    await testServiceImplComponentsPage.clickOnCreateButton();
    testServiceImplUpdatePage = new TestServiceImplUpdatePage();
    expect(await testServiceImplUpdatePage.getPageTitle().getAttribute('id')).to.match(
      /travisNg2App.testServiceImpl.home.createOrEditLabel/
    );
    await testServiceImplUpdatePage.cancel();
  });

  it('should create and save TestServiceImpls', async () => {
    async function createTestServiceImpl() {
      await testServiceImplComponentsPage.clickOnCreateButton();
      await testServiceImplUpdatePage.userOneToManySelectLastOption();
      // testServiceImplUpdatePage.userManyToManySelectLastOption();
      await testServiceImplUpdatePage.userOneToOneSelectLastOption();
      await waitUntilDisplayed(testServiceImplUpdatePage.getSaveButton());
      await testServiceImplUpdatePage.save();
      await waitUntilHidden(testServiceImplUpdatePage.getSaveButton());
      expect(await testServiceImplUpdatePage.getSaveButton().isPresent()).to.be.false;
    }

    await createTestServiceImpl();
    await testServiceImplComponentsPage.waitUntilLoaded();
    const nbButtonsBeforeCreate = await testServiceImplComponentsPage.countDeleteButtons();
    await createTestServiceImpl();

    await testServiceImplComponentsPage.waitUntilDeleteButtonsLength(nbButtonsBeforeCreate + 1);
    expect(await testServiceImplComponentsPage.countDeleteButtons()).to.eq(nbButtonsBeforeCreate + 1);
  });

  it('should delete last TestServiceImpl', async () => {
    await testServiceImplComponentsPage.waitUntilLoaded();
    const nbButtonsBeforeDelete = await testServiceImplComponentsPage.countDeleteButtons();
    await testServiceImplComponentsPage.clickOnLastDeleteButton();

    const deleteModal = element(by.className('modal'));
    await waitUntilDisplayed(deleteModal);

    testServiceImplDeleteDialog = new TestServiceImplDeleteDialog();
    expect(await testServiceImplDeleteDialog.getDialogTitle().getAttribute('id')).to.match(/travisNg2App.testServiceImpl.delete.question/);
    await testServiceImplDeleteDialog.clickOnConfirmButton();

    await testServiceImplComponentsPage.waitUntilDeleteButtonsLength(nbButtonsBeforeDelete - 1);
    expect(await testServiceImplComponentsPage.countDeleteButtons()).to.eq(nbButtonsBeforeDelete - 1);
  });

  after(async () => {
    await navBarPage.autoSignOut();
  });
});
