import { browser, element, by, protractor } from 'protractor';

import NavBarPage from './../../../page-objects/navbar-page';
import SignInPage from './../../../page-objects/signin-page';
import BankAccountComponentsPage, { BankAccountDeleteDialog } from './bank-account-my-suffix.page-object';
import BankAccountUpdatePage from './bank-account-my-suffix-update.page-object';
import { waitUntilDisplayed, waitUntilHidden } from '../../../util/utils';
import path from 'path';

const expect = chai.expect;

describe('BankAccount e2e test', () => {
  let navBarPage: NavBarPage;
  let signInPage: SignInPage;
  let bankAccountComponentsPage: BankAccountComponentsPage;
  let bankAccountUpdatePage: BankAccountUpdatePage;
  let bankAccountDeleteDialog: BankAccountDeleteDialog;
  const fileToUpload = '../../../../../../../src/main/webapp/content/images/logo-jhipster.png';
  const absolutePath = path.resolve(__dirname, fileToUpload);

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

  it('should load BankAccounts', async () => {
    await navBarPage.getEntityPage('bank-account-my-suffix');
    bankAccountComponentsPage = new BankAccountComponentsPage();
    expect(await bankAccountComponentsPage.getTitle().getText()).to.match(/Bank Accounts/);
  });

  it('should load create BankAccount page', async () => {
    await bankAccountComponentsPage.clickOnCreateButton();
    bankAccountUpdatePage = new BankAccountUpdatePage();
    expect(await bankAccountUpdatePage.getPageTitle().getAttribute('id')).to.match(
      /travisNg2App.testRootBankAccount.home.createOrEditLabel/
    );
    await bankAccountUpdatePage.cancel();
  });

  it('should create and save BankAccounts', async () => {
    async function createBankAccount() {
      await bankAccountComponentsPage.clickOnCreateButton();
      await bankAccountUpdatePage.setNameInput('name');
      expect(await bankAccountUpdatePage.getNameInput()).to.match(/name/);
      await bankAccountUpdatePage.setGuidInput('64c99148-3908-465d-8c4a-e510e3ade974');
      expect(await bankAccountUpdatePage.getGuidInput()).to.match(/64c99148-3908-465d-8c4a-e510e3ade974/);
      await bankAccountUpdatePage.setBankNumberInput('5');
      expect(await bankAccountUpdatePage.getBankNumberInput()).to.eq('5');
      await bankAccountUpdatePage.setAgencyNumberInput('5');
      expect(await bankAccountUpdatePage.getAgencyNumberInput()).to.eq('5');
      await bankAccountUpdatePage.setLastOperationDurationInput('5');
      expect(await bankAccountUpdatePage.getLastOperationDurationInput()).to.eq('5');
      await bankAccountUpdatePage.setMeanOperationDurationInput('5');
      expect(await bankAccountUpdatePage.getMeanOperationDurationInput()).to.eq('5');
      await bankAccountUpdatePage.setMeanQueueDurationInput('PT12S');
      expect(await bankAccountUpdatePage.getMeanQueueDurationInput()).to.contain('12');
      await bankAccountUpdatePage.setBalanceInput('5');
      expect(await bankAccountUpdatePage.getBalanceInput()).to.eq('5');
      await bankAccountUpdatePage.setOpeningDayInput('01-01-2001');
      expect(await bankAccountUpdatePage.getOpeningDayInput()).to.eq('2001-01-01');
      await bankAccountUpdatePage.setLastOperationDateInput('01/01/2001' + protractor.Key.TAB + '02:30AM');
      expect(await bankAccountUpdatePage.getLastOperationDateInput()).to.contain('2001-01-01T02:30');
      const selectedActive = await bankAccountUpdatePage.getActiveInput().isSelected();
      if (selectedActive) {
        await bankAccountUpdatePage.getActiveInput().click();
        expect(await bankAccountUpdatePage.getActiveInput().isSelected()).to.be.false;
      } else {
        await bankAccountUpdatePage.getActiveInput().click();
        expect(await bankAccountUpdatePage.getActiveInput().isSelected()).to.be.true;
      }
      await bankAccountUpdatePage.accountTypeSelectLastOption();
      await bankAccountUpdatePage.setAttachmentInput(absolutePath);
      await bankAccountUpdatePage.setDescriptionInput('description');
      expect(await bankAccountUpdatePage.getDescriptionInput()).to.match(/description/);
      await bankAccountUpdatePage.userSelectLastOption();
      await waitUntilDisplayed(bankAccountUpdatePage.getSaveButton());
      await bankAccountUpdatePage.save();
      await waitUntilHidden(bankAccountUpdatePage.getSaveButton());
      expect(await bankAccountUpdatePage.getSaveButton().isPresent()).to.be.false;
    }

    await createBankAccount();
    await bankAccountComponentsPage.waitUntilLoaded();
    const nbButtonsBeforeCreate = await bankAccountComponentsPage.countDeleteButtons();
    await createBankAccount();

    await bankAccountComponentsPage.waitUntilDeleteButtonsLength(nbButtonsBeforeCreate + 1);
    expect(await bankAccountComponentsPage.countDeleteButtons()).to.eq(nbButtonsBeforeCreate + 1);
  });

  it('should delete last BankAccount', async () => {
    await bankAccountComponentsPage.waitUntilLoaded();
    const nbButtonsBeforeDelete = await bankAccountComponentsPage.countDeleteButtons();
    await bankAccountComponentsPage.clickOnLastDeleteButton();

    const deleteModal = element(by.className('modal'));
    await waitUntilDisplayed(deleteModal);

    bankAccountDeleteDialog = new BankAccountDeleteDialog();
    expect(await bankAccountDeleteDialog.getDialogTitle().getAttribute('id')).to.match(/travisNg2App.testRootBankAccount.delete.question/);
    await bankAccountDeleteDialog.clickOnConfirmButton();

    await bankAccountComponentsPage.waitUntilDeleteButtonsLength(nbButtonsBeforeDelete - 1);
    expect(await bankAccountComponentsPage.countDeleteButtons()).to.eq(nbButtonsBeforeDelete - 1);
  });

  after(async () => {
    await navBarPage.autoSignOut();
  });
});
