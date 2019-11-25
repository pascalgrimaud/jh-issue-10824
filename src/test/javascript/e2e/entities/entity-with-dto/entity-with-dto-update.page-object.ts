import { element, by, ElementFinder } from 'protractor';

export default class EntityWithDTOUpdatePage {
  pageTitle: ElementFinder = element(by.id('travisNg2App.entityWithDTO.home.createOrEditLabel'));
  saveButton: ElementFinder = element(by.id('save-entity'));
  cancelButton: ElementFinder = element(by.id('cancel-save'));
  emmaInput: ElementFinder = element(by.css('input#entity-with-dto-emma'));

  getPageTitle() {
    return this.pageTitle;
  }

  async setEmmaInput(emma) {
    await this.emmaInput.sendKeys(emma);
  }

  async getEmmaInput() {
    return this.emmaInput.getAttribute('value');
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
