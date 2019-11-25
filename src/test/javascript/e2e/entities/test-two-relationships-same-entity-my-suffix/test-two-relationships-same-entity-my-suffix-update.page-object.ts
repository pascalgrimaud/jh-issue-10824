import { element, by, ElementFinder } from 'protractor';

export default class TestTwoRelationshipsSameEntityUpdatePage {
  pageTitle: ElementFinder = element(by.id('travisNg2App.testTwoRelationshipsSameEntity.home.createOrEditLabel'));
  saveButton: ElementFinder = element(by.id('save-entity'));
  cancelButton: ElementFinder = element(by.id('cancel-save'));
  firstRelationshipSelect: ElementFinder = element(by.css('select#test-two-relationships-same-entity-my-suffix-firstRelationship'));
  secondRelationshipSelect: ElementFinder = element(by.css('select#test-two-relationships-same-entity-my-suffix-secondRelationship'));
  userOneSelect: ElementFinder = element(by.css('select#test-two-relationships-same-entity-my-suffix-userOne'));
  userTwoSelect: ElementFinder = element(by.css('select#test-two-relationships-same-entity-my-suffix-userTwo'));
  firstUniqueRequiredRelationSelect: ElementFinder = element(
    by.css('select#test-two-relationships-same-entity-my-suffix-firstUniqueRequiredRelation')
  );
  secondUniqueRequiredRelationSelect: ElementFinder = element(
    by.css('select#test-two-relationships-same-entity-my-suffix-secondUniqueRequiredRelation')
  );

  getPageTitle() {
    return this.pageTitle;
  }

  async firstRelationshipSelectLastOption() {
    await this.firstRelationshipSelect
      .all(by.tagName('option'))
      .last()
      .click();
  }

  async firstRelationshipSelectOption(option) {
    await this.firstRelationshipSelect.sendKeys(option);
  }

  getFirstRelationshipSelect() {
    return this.firstRelationshipSelect;
  }

  async getFirstRelationshipSelectedOption() {
    return this.firstRelationshipSelect.element(by.css('option:checked')).getText();
  }

  async secondRelationshipSelectLastOption() {
    await this.secondRelationshipSelect
      .all(by.tagName('option'))
      .last()
      .click();
  }

  async secondRelationshipSelectOption(option) {
    await this.secondRelationshipSelect.sendKeys(option);
  }

  getSecondRelationshipSelect() {
    return this.secondRelationshipSelect;
  }

  async getSecondRelationshipSelectedOption() {
    return this.secondRelationshipSelect.element(by.css('option:checked')).getText();
  }

  async userOneSelectLastOption() {
    await this.userOneSelect
      .all(by.tagName('option'))
      .last()
      .click();
  }

  async userOneSelectOption(option) {
    await this.userOneSelect.sendKeys(option);
  }

  getUserOneSelect() {
    return this.userOneSelect;
  }

  async getUserOneSelectedOption() {
    return this.userOneSelect.element(by.css('option:checked')).getText();
  }

  async userTwoSelectLastOption() {
    await this.userTwoSelect
      .all(by.tagName('option'))
      .last()
      .click();
  }

  async userTwoSelectOption(option) {
    await this.userTwoSelect.sendKeys(option);
  }

  getUserTwoSelect() {
    return this.userTwoSelect;
  }

  async getUserTwoSelectedOption() {
    return this.userTwoSelect.element(by.css('option:checked')).getText();
  }

  async firstUniqueRequiredRelationSelectLastOption() {
    await this.firstUniqueRequiredRelationSelect
      .all(by.tagName('option'))
      .last()
      .click();
  }

  async firstUniqueRequiredRelationSelectOption(option) {
    await this.firstUniqueRequiredRelationSelect.sendKeys(option);
  }

  getFirstUniqueRequiredRelationSelect() {
    return this.firstUniqueRequiredRelationSelect;
  }

  async getFirstUniqueRequiredRelationSelectedOption() {
    return this.firstUniqueRequiredRelationSelect.element(by.css('option:checked')).getText();
  }

  async secondUniqueRequiredRelationSelectLastOption() {
    await this.secondUniqueRequiredRelationSelect
      .all(by.tagName('option'))
      .last()
      .click();
  }

  async secondUniqueRequiredRelationSelectOption(option) {
    await this.secondUniqueRequiredRelationSelect.sendKeys(option);
  }

  getSecondUniqueRequiredRelationSelect() {
    return this.secondUniqueRequiredRelationSelect;
  }

  async getSecondUniqueRequiredRelationSelectedOption() {
    return this.secondUniqueRequiredRelationSelect.element(by.css('option:checked')).getText();
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
