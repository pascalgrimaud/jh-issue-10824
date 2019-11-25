import { browser, element, by } from 'protractor';

import NavBarPage from './../../page-objects/navbar-page';
import SignInPage from './../../page-objects/signin-page';
import TestMapstructComponentsPage, { TestMapstructDeleteDialog } from './test-mapstruct.page-object';
import TestMapstructUpdatePage from './test-mapstruct-update.page-object';
import { waitUntilDisplayed, waitUntilHidden } from '../../util/utils';

const expect = chai.expect;

describe('TestMapstruct e2e test', () => {
  let navBarPage: NavBarPage;
  let signInPage: SignInPage;
  let testMapstructComponentsPage: TestMapstructComponentsPage;
  let testMapstructUpdatePage: TestMapstructUpdatePage;
  let testMapstructDeleteDialog: TestMapstructDeleteDialog;

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

  it('should load TestMapstructs', async () => {
    await navBarPage.getEntityPage('test-mapstruct');
    testMapstructComponentsPage = new TestMapstructComponentsPage();
    expect(await testMapstructComponentsPage.getTitle().getText()).to.match(/Test Mapstructs/);
  });

  it('should load create TestMapstruct page', async () => {
    await testMapstructComponentsPage.clickOnCreateButton();
    testMapstructUpdatePage = new TestMapstructUpdatePage();
    expect(await testMapstructUpdatePage.getPageTitle().getAttribute('id')).to.match(/travisNg2App.testMapstruct.home.createOrEditLabel/);
    await testMapstructUpdatePage.cancel();
  });

  it('should create and save TestMapstructs', async () => {
    async function createTestMapstruct() {
      await testMapstructComponentsPage.clickOnCreateButton();
      await testMapstructUpdatePage.userOneToManySelectLastOption();
      // testMapstructUpdatePage.userManyToManySelectLastOption();
      await testMapstructUpdatePage.userOneToOneSelectLastOption();
      await waitUntilDisplayed(testMapstructUpdatePage.getSaveButton());
      await testMapstructUpdatePage.save();
      await waitUntilHidden(testMapstructUpdatePage.getSaveButton());
      expect(await testMapstructUpdatePage.getSaveButton().isPresent()).to.be.false;
    }

    await createTestMapstruct();
    await testMapstructComponentsPage.waitUntilLoaded();
    const nbButtonsBeforeCreate = await testMapstructComponentsPage.countDeleteButtons();
    await createTestMapstruct();

    await testMapstructComponentsPage.waitUntilDeleteButtonsLength(nbButtonsBeforeCreate + 1);
    expect(await testMapstructComponentsPage.countDeleteButtons()).to.eq(nbButtonsBeforeCreate + 1);
  });

  it('should delete last TestMapstruct', async () => {
    await testMapstructComponentsPage.waitUntilLoaded();
    const nbButtonsBeforeDelete = await testMapstructComponentsPage.countDeleteButtons();
    await testMapstructComponentsPage.clickOnLastDeleteButton();

    const deleteModal = element(by.className('modal'));
    await waitUntilDisplayed(deleteModal);

    testMapstructDeleteDialog = new TestMapstructDeleteDialog();
    expect(await testMapstructDeleteDialog.getDialogTitle().getAttribute('id')).to.match(/travisNg2App.testMapstruct.delete.question/);
    await testMapstructDeleteDialog.clickOnConfirmButton();

    await testMapstructComponentsPage.waitUntilDeleteButtonsLength(nbButtonsBeforeDelete - 1);
    expect(await testMapstructComponentsPage.countDeleteButtons()).to.eq(nbButtonsBeforeDelete - 1);
  });

  after(async () => {
    await navBarPage.autoSignOut();
  });
});
