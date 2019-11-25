import { browser, element, by } from 'protractor';

import NavBarPage from './../../page-objects/navbar-page';
import SignInPage from './../../page-objects/signin-page';
import TestServiceClassComponentsPage, { TestServiceClassDeleteDialog } from './test-service-class.page-object';
import TestServiceClassUpdatePage from './test-service-class-update.page-object';
import { waitUntilDisplayed, waitUntilHidden } from '../../util/utils';

const expect = chai.expect;

describe('TestServiceClass e2e test', () => {
  let navBarPage: NavBarPage;
  let signInPage: SignInPage;
  let testServiceClassComponentsPage: TestServiceClassComponentsPage;
  let testServiceClassUpdatePage: TestServiceClassUpdatePage;
  let testServiceClassDeleteDialog: TestServiceClassDeleteDialog;

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

  it('should load TestServiceClasses', async () => {
    await navBarPage.getEntityPage('test-service-class');
    testServiceClassComponentsPage = new TestServiceClassComponentsPage();
    expect(await testServiceClassComponentsPage.getTitle().getText()).to.match(/Test Service Classes/);
  });

  it('should load create TestServiceClass page', async () => {
    await testServiceClassComponentsPage.clickOnCreateButton();
    testServiceClassUpdatePage = new TestServiceClassUpdatePage();
    expect(await testServiceClassUpdatePage.getPageTitle().getAttribute('id')).to.match(
      /travisNg2App.testServiceClass.home.createOrEditLabel/
    );
    await testServiceClassUpdatePage.cancel();
  });

  it('should create and save TestServiceClasses', async () => {
    async function createTestServiceClass() {
      await testServiceClassComponentsPage.clickOnCreateButton();
      await testServiceClassUpdatePage.userOneToManySelectLastOption();
      // testServiceClassUpdatePage.userManyToManySelectLastOption();
      await testServiceClassUpdatePage.userOneToOneSelectLastOption();
      await waitUntilDisplayed(testServiceClassUpdatePage.getSaveButton());
      await testServiceClassUpdatePage.save();
      await waitUntilHidden(testServiceClassUpdatePage.getSaveButton());
      expect(await testServiceClassUpdatePage.getSaveButton().isPresent()).to.be.false;
    }

    await createTestServiceClass();
    await testServiceClassComponentsPage.waitUntilLoaded();
    const nbButtonsBeforeCreate = await testServiceClassComponentsPage.countDeleteButtons();
    await createTestServiceClass();

    await testServiceClassComponentsPage.waitUntilDeleteButtonsLength(nbButtonsBeforeCreate + 1);
    expect(await testServiceClassComponentsPage.countDeleteButtons()).to.eq(nbButtonsBeforeCreate + 1);
  });

  it('should delete last TestServiceClass', async () => {
    await testServiceClassComponentsPage.waitUntilLoaded();
    const nbButtonsBeforeDelete = await testServiceClassComponentsPage.countDeleteButtons();
    await testServiceClassComponentsPage.clickOnLastDeleteButton();

    const deleteModal = element(by.className('modal'));
    await waitUntilDisplayed(deleteModal);

    testServiceClassDeleteDialog = new TestServiceClassDeleteDialog();
    expect(await testServiceClassDeleteDialog.getDialogTitle().getAttribute('id')).to.match(
      /travisNg2App.testServiceClass.delete.question/
    );
    await testServiceClassDeleteDialog.clickOnConfirmButton();

    await testServiceClassComponentsPage.waitUntilDeleteButtonsLength(nbButtonsBeforeDelete - 1);
    expect(await testServiceClassComponentsPage.countDeleteButtons()).to.eq(nbButtonsBeforeDelete - 1);
  });

  after(async () => {
    await navBarPage.autoSignOut();
  });
});
