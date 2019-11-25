import { element, by, ElementFinder } from 'protractor';

export default class TestEntityUpdatePage {
  pageTitle: ElementFinder = element(by.id('travisNg2App.testEntity.home.createOrEditLabel'));
  saveButton: ElementFinder = element(by.id('save-entity'));
  cancelButton: ElementFinder = element(by.id('cancel-save'));
  userOneToManySelect: ElementFinder = element(by.css('select#test-entity-my-suffix-alt-userOneToMany'));
  userManyToManySelect: ElementFinder = element(by.css('select#test-entity-my-suffix-alt-userManyToMany'));
  userOneToOneSelect: ElementFinder = element(by.css('select#test-entity-my-suffix-alt-userOneToOne'));

  getPageTitle() {
    return this.pageTitle;
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
