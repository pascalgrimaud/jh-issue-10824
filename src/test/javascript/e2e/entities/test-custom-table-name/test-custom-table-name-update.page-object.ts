import { element, by, ElementFinder } from 'protractor';

export default class TestCustomTableNameUpdatePage {
  pageTitle: ElementFinder = element(by.id('travisNg2App.testCustomTableName.home.createOrEditLabel'));
  saveButton: ElementFinder = element(by.id('save-entity'));
  cancelButton: ElementFinder = element(by.id('cancel-save'));
  testEntitySelect: ElementFinder = element(by.css('select#test-custom-table-name-testEntity'));
  userOneToManySelect: ElementFinder = element(by.css('select#test-custom-table-name-userOneToMany'));
  userManyToManySelect: ElementFinder = element(by.css('select#test-custom-table-name-userManyToMany'));
  userOneToOneSelect: ElementFinder = element(by.css('select#test-custom-table-name-userOneToOne'));
  superMegaLargeTestEntitySelect: ElementFinder = element(by.css('select#test-custom-table-name-superMegaLargeTestEntity'));

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

  async userOneToManySelectLastOption() {
    await this.userOneToManySelect
      .all(by.tagName('option'))
      .last()
      .click();
  }

  async userOneToManySelectOption(option) {
    await this.userOneToManySelect.sendKeys(option);
  }

  getUserOneToManySelect() {
    return this.userOneToManySelect;
  }

  async getUserOneToManySelectedOption() {
    return this.userOneToManySelect.element(by.css('option:checked')).getText();
  }

  async userManyToManySelectLastOption() {
    await this.userManyToManySelect
      .all(by.tagName('option'))
      .last()
      .click();
  }

  async userManyToManySelectOption(option) {
    await this.userManyToManySelect.sendKeys(option);
  }

  getUserManyToManySelect() {
    return this.userManyToManySelect;
  }

  async getUserManyToManySelectedOption() {
    return this.userManyToManySelect.element(by.css('option:checked')).getText();
  }

  async userOneToOneSelectLastOption() {
    await this.userOneToOneSelect
      .all(by.tagName('option'))
      .last()
      .click();
  }

  async userOneToOneSelectOption(option) {
    await this.userOneToOneSelect.sendKeys(option);
  }

  getUserOneToOneSelect() {
    return this.userOneToOneSelect;
  }

  async getUserOneToOneSelectedOption() {
    return this.userOneToOneSelect.element(by.css('option:checked')).getText();
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
