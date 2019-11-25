import { element, by, ElementFinder } from 'protractor';

export default class TestOneToOneUpdatePage {
  pageTitle: ElementFinder = element(by.id('travisNg2App.testOneToOne.home.createOrEditLabel'));
  saveButton: ElementFinder = element(by.id('save-entity'));
  cancelButton: ElementFinder = element(by.id('cancel-save'));
  testEntitySelect: ElementFinder = element(by.css('select#test-one-to-one-my-suffix-testEntity'));
  testMapstructSelect: ElementFinder = element(by.css('select#test-one-to-one-my-suffix-testMapstruct'));
  testServiceClassSelect: ElementFinder = element(by.css('select#test-one-to-one-my-suffix-testServiceClass'));
  testServiceImplSelect: ElementFinder = element(by.css('select#test-one-to-one-my-suffix-testServiceImpl'));
  testInfiniteScrollSelect: ElementFinder = element(by.css('select#test-one-to-one-my-suffix-testInfiniteScroll'));
  testPaginationSelect: ElementFinder = element(by.css('select#test-one-to-one-my-suffix-testPagination'));
  testCustomTableNameSelect: ElementFinder = element(by.css('select#test-one-to-one-my-suffix-testCustomTableName'));
  superMegaLargeTestEntitySelect: ElementFinder = element(by.css('select#test-one-to-one-my-suffix-superMegaLargeTestEntity'));

  getPageTitle() {
    return this.pageTitle;
  }

  async testEntitySelectLastOption() {
    await this.testEntitySelect
      .all(by.tagName('option'))
      .last()
      .click();
  }

  async testEntitySelectOption(option) {
    await this.testEntitySelect.sendKeys(option);
  }

  getTestEntitySelect() {
    return this.testEntitySelect;
  }

  async getTestEntitySelectedOption() {
    return this.testEntitySelect.element(by.css('option:checked')).getText();
  }

  async testMapstructSelectLastOption() {
    await this.testMapstructSelect
      .all(by.tagName('option'))
      .last()
      .click();
  }

  async testMapstructSelectOption(option) {
    await this.testMapstructSelect.sendKeys(option);
  }

  getTestMapstructSelect() {
    return this.testMapstructSelect;
  }

  async getTestMapstructSelectedOption() {
    return this.testMapstructSelect.element(by.css('option:checked')).getText();
  }

  async testServiceClassSelectLastOption() {
    await this.testServiceClassSelect
      .all(by.tagName('option'))
      .last()
      .click();
  }

  async testServiceClassSelectOption(option) {
    await this.testServiceClassSelect.sendKeys(option);
  }

  getTestServiceClassSelect() {
    return this.testServiceClassSelect;
  }

  async getTestServiceClassSelectedOption() {
    return this.testServiceClassSelect.element(by.css('option:checked')).getText();
  }

  async testServiceImplSelectLastOption() {
    await this.testServiceImplSelect
      .all(by.tagName('option'))
      .last()
      .click();
  }

  async testServiceImplSelectOption(option) {
    await this.testServiceImplSelect.sendKeys(option);
  }

  getTestServiceImplSelect() {
    return this.testServiceImplSelect;
  }

  async getTestServiceImplSelectedOption() {
    return this.testServiceImplSelect.element(by.css('option:checked')).getText();
  }

  async testInfiniteScrollSelectLastOption() {
    await this.testInfiniteScrollSelect
      .all(by.tagName('option'))
      .last()
      .click();
  }

  async testInfiniteScrollSelectOption(option) {
    await this.testInfiniteScrollSelect.sendKeys(option);
  }

  getTestInfiniteScrollSelect() {
    return this.testInfiniteScrollSelect;
  }

  async getTestInfiniteScrollSelectedOption() {
    return this.testInfiniteScrollSelect.element(by.css('option:checked')).getText();
  }

  async testPaginationSelectLastOption() {
    await this.testPaginationSelect
      .all(by.tagName('option'))
      .last()
      .click();
  }

  async testPaginationSelectOption(option) {
    await this.testPaginationSelect.sendKeys(option);
  }

  getTestPaginationSelect() {
    return this.testPaginationSelect;
  }

  async getTestPaginationSelectedOption() {
    return this.testPaginationSelect.element(by.css('option:checked')).getText();
  }

  async testCustomTableNameSelectLastOption() {
    await this.testCustomTableNameSelect
      .all(by.tagName('option'))
      .last()
      .click();
  }

  async testCustomTableNameSelectOption(option) {
    await this.testCustomTableNameSelect.sendKeys(option);
  }

  getTestCustomTableNameSelect() {
    return this.testCustomTableNameSelect;
  }

  async getTestCustomTableNameSelectedOption() {
    return this.testCustomTableNameSelect.element(by.css('option:checked')).getText();
  }

  async superMegaLargeTestEntitySelectLastOption() {
    await this.superMegaLargeTestEntitySelect
      .all(by.tagName('option'))
      .last()
      .click();
  }

  async superMegaLargeTestEntitySelectOption(option) {
    await this.superMegaLargeTestEntitySelect.sendKeys(option);
  }

  getSuperMegaLargeTestEntitySelect() {
    return this.superMegaLargeTestEntitySelect;
  }

  async getSuperMegaLargeTestEntitySelectedOption() {
    return this.superMegaLargeTestEntitySelect.element(by.css('option:checked')).getText();
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
