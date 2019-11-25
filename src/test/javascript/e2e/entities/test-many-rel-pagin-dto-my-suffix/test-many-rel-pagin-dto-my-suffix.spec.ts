import { browser, element, by } from 'protractor';

import NavBarPage from './../../page-objects/navbar-page';
import SignInPage from './../../page-objects/signin-page';
import TestManyRelPaginDTOComponentsPage, { TestManyRelPaginDTODeleteDialog } from './test-many-rel-pagin-dto-my-suffix.page-object';
import TestManyRelPaginDTOUpdatePage from './test-many-rel-pagin-dto-my-suffix-update.page-object';
import { waitUntilDisplayed, waitUntilHidden } from '../../util/utils';

const expect = chai.expect;

describe('TestManyRelPaginDTO e2e test', () => {
  let navBarPage: NavBarPage;
  let signInPage: SignInPage;
  let testManyRelPaginDTOComponentsPage: TestManyRelPaginDTOComponentsPage;
  let testManyRelPaginDTOUpdatePage: TestManyRelPaginDTOUpdatePage;
  let testManyRelPaginDTODeleteDialog: TestManyRelPaginDTODeleteDialog;

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

  it('should load TestManyRelPaginDTOS', async () => {
    await navBarPage.getEntityPage('test-many-rel-pagin-dto-my-suffix');
    testManyRelPaginDTOComponentsPage = new TestManyRelPaginDTOComponentsPage();
    expect(await testManyRelPaginDTOComponentsPage.getTitle().getText()).to.match(/Test Many Rel Pagin DTOS/);
  });

  it('should load create TestManyRelPaginDTO page', async () => {
    await testManyRelPaginDTOComponentsPage.clickOnCreateButton();
    testManyRelPaginDTOUpdatePage = new TestManyRelPaginDTOUpdatePage();
    expect(await testManyRelPaginDTOUpdatePage.getPageTitle().getAttribute('id')).to.match(
      /travisNg2App.testManyRelPaginDTO.home.createOrEditLabel/
    );
    await testManyRelPaginDTOUpdatePage.cancel();
  });

  it('should create and save TestManyRelPaginDTOS', async () => {
    async function createTestManyRelPaginDTO() {
      await testManyRelPaginDTOComponentsPage.clickOnCreateButton();
      // testManyRelPaginDTOUpdatePage.testMapstructSelectLastOption();
      await waitUntilDisplayed(testManyRelPaginDTOUpdatePage.getSaveButton());
      await testManyRelPaginDTOUpdatePage.save();
      await waitUntilHidden(testManyRelPaginDTOUpdatePage.getSaveButton());
      expect(await testManyRelPaginDTOUpdatePage.getSaveButton().isPresent()).to.be.false;
    }

    await createTestManyRelPaginDTO();
    await testManyRelPaginDTOComponentsPage.waitUntilLoaded();
    const nbButtonsBeforeCreate = await testManyRelPaginDTOComponentsPage.countDeleteButtons();
    await createTestManyRelPaginDTO();

    await testManyRelPaginDTOComponentsPage.waitUntilDeleteButtonsLength(nbButtonsBeforeCreate + 1);
    expect(await testManyRelPaginDTOComponentsPage.countDeleteButtons()).to.eq(nbButtonsBeforeCreate + 1);
  });

  it('should delete last TestManyRelPaginDTO', async () => {
    await testManyRelPaginDTOComponentsPage.waitUntilLoaded();
    const nbButtonsBeforeDelete = await testManyRelPaginDTOComponentsPage.countDeleteButtons();
    await testManyRelPaginDTOComponentsPage.clickOnLastDeleteButton();

    const deleteModal = element(by.className('modal'));
    await waitUntilDisplayed(deleteModal);

    testManyRelPaginDTODeleteDialog = new TestManyRelPaginDTODeleteDialog();
    expect(await testManyRelPaginDTODeleteDialog.getDialogTitle().getAttribute('id')).to.match(
      /travisNg2App.testManyRelPaginDTO.delete.question/
    );
    await testManyRelPaginDTODeleteDialog.clickOnConfirmButton();

    await testManyRelPaginDTOComponentsPage.waitUntilDeleteButtonsLength(nbButtonsBeforeDelete - 1);
    expect(await testManyRelPaginDTOComponentsPage.countDeleteButtons()).to.eq(nbButtonsBeforeDelete - 1);
  });

  after(async () => {
    await navBarPage.autoSignOut();
  });
});
