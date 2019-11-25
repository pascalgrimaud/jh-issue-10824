import { element, by, ElementFinder } from 'protractor';

export default class BankAccountUpdatePage {
  pageTitle: ElementFinder = element(by.id('travisNg2App.testRootBankAccount.home.createOrEditLabel'));
  saveButton: ElementFinder = element(by.id('save-entity'));
  cancelButton: ElementFinder = element(by.id('cancel-save'));
  nameInput: ElementFinder = element(by.css('input#bank-account-my-suffix-name'));
  guidInput: ElementFinder = element(by.css('input#bank-account-my-suffix-guid'));
  bankNumberInput: ElementFinder = element(by.css('input#bank-account-my-suffix-bankNumber'));
  agencyNumberInput: ElementFinder = element(by.css('input#bank-account-my-suffix-agencyNumber'));
  lastOperationDurationInput: ElementFinder = element(by.css('input#bank-account-my-suffix-lastOperationDuration'));
  meanOperationDurationInput: ElementFinder = element(by.css('input#bank-account-my-suffix-meanOperationDuration'));
  meanQueueDurationInput: ElementFinder = element(by.css('input#bank-account-my-suffix-meanQueueDuration'));
  balanceInput: ElementFinder = element(by.css('input#bank-account-my-suffix-balance'));
  openingDayInput: ElementFinder = element(by.css('input#bank-account-my-suffix-openingDay'));
  lastOperationDateInput: ElementFinder = element(by.css('input#bank-account-my-suffix-lastOperationDate'));
  activeInput: ElementFinder = element(by.css('input#bank-account-my-suffix-active'));
  accountTypeSelect: ElementFinder = element(by.css('select#bank-account-my-suffix-accountType'));
  attachmentInput: ElementFinder = element(by.css('input#file_attachment'));
  descriptionInput: ElementFinder = element(by.css('textarea#bank-account-my-suffix-description'));
  userSelect: ElementFinder = element(by.css('select#bank-account-my-suffix-user'));

  getPageTitle() {
    return this.pageTitle;
  }

  async setNameInput(name) {
    await this.nameInput.sendKeys(name);
  }

  async getNameInput() {
    return this.nameInput.getAttribute('value');
  }

  async setGuidInput(guid) {
    await this.guidInput.sendKeys(guid);
  }

  async getGuidInput() {
    return this.guidInput.getAttribute('value');
  }

  async setBankNumberInput(bankNumber) {
    await this.bankNumberInput.sendKeys(bankNumber);
  }

  async getBankNumberInput() {
    return this.bankNumberInput.getAttribute('value');
  }

  async setAgencyNumberInput(agencyNumber) {
    await this.agencyNumberInput.sendKeys(agencyNumber);
  }

  async getAgencyNumberInput() {
    return this.agencyNumberInput.getAttribute('value');
  }

  async setLastOperationDurationInput(lastOperationDuration) {
    await this.lastOperationDurationInput.sendKeys(lastOperationDuration);
  }

  async getLastOperationDurationInput() {
    return this.lastOperationDurationInput.getAttribute('value');
  }

  async setMeanOperationDurationInput(meanOperationDuration) {
    await this.meanOperationDurationInput.sendKeys(meanOperationDuration);
  }

  async getMeanOperationDurationInput() {
    return this.meanOperationDurationInput.getAttribute('value');
  }

  async setMeanQueueDurationInput(meanQueueDuration) {
    await this.meanQueueDurationInput.sendKeys(meanQueueDuration);
  }

  async getMeanQueueDurationInput() {
    return this.meanQueueDurationInput.getAttribute('value');
  }

  async setBalanceInput(balance) {
    await this.balanceInput.sendKeys(balance);
  }

  async getBalanceInput() {
    return this.balanceInput.getAttribute('value');
  }

  async setOpeningDayInput(openingDay) {
    await this.openingDayInput.sendKeys(openingDay);
  }

  async getOpeningDayInput() {
    return this.openingDayInput.getAttribute('value');
  }

  async setLastOperationDateInput(lastOperationDate) {
    await this.lastOperationDateInput.sendKeys(lastOperationDate);
  }

  async getLastOperationDateInput() {
    return this.lastOperationDateInput.getAttribute('value');
  }

  getActiveInput() {
    return this.activeInput;
  }
  async setAccountTypeSelect(accountType) {
    await this.accountTypeSelect.sendKeys(accountType);
  }

  async getAccountTypeSelect() {
    return this.accountTypeSelect.element(by.css('option:checked')).getText();
  }

  async accountTypeSelectLastOption() {
    await this.accountTypeSelect
      .all(by.tagName('option'))
      .last()
      .click();
  }
  async setAttachmentInput(attachment) {
    await this.attachmentInput.sendKeys(attachment);
  }

  async getAttachmentInput() {
    return this.attachmentInput.getAttribute('value');
  }

  async setDescriptionInput(description) {
    await this.descriptionInput.sendKeys(description);
  }

  async getDescriptionInput() {
    return this.descriptionInput.getAttribute('value');
  }

  async userSelectLastOption() {
    await this.userSelect
      .all(by.tagName('option'))
      .last()
      .click();
  }

  async userSelectOption(option) {
    await this.userSelect.sendKeys(option);
  }

  getUserSelect() {
    return this.userSelect;
  }

  async getUserSelectedOption() {
    return this.userSelect.element(by.css('option:checked')).getText();
  }

  async save() {
    await this.saveButton.click();
  }

  async cancel() {
    await this.cancelButton.click();
  }

  getSaveButton() {
    return this.saveButton;
  }
}
