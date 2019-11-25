import { element, by, ElementFinder } from 'protractor';

export default class TestManyRelPaginDTOUpdatePage {
  pageTitle: ElementFinder = element(by.id('travisNg2App.testManyRelPaginDTO.home.createOrEditLabel'));
  saveButton: ElementFinder = element(by.id('save-entity'));
  cancelButton: ElementFinder = element(by.id('cancel-save'));
  testMapstructSelect: ElementFinder = element(by.css('select#test-many-rel-pagin-dto-my-suffix-testMapstruct'));

  getPageTitle() {
    return this.pageTitle;
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
