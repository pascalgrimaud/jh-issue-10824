import { element, by, ElementFinder } from 'protractor';

export default class EntityWithServiceClassAndDTOUpdatePage {
  pageTitle: ElementFinder = element(by.id('travisNg2App.entityWithServiceClassAndDTO.home.createOrEditLabel'));
  saveButton: ElementFinder = element(by.id('save-entity'));
  cancelButton: ElementFinder = element(by.id('cancel-save'));
  lucasInput: ElementFinder = element(by.css('input#entity-with-service-class-and-dto-lucas'));

  getPageTitle() {
    return this.pageTitle;
  }

  async setLucasInput(lucas) {
    await this.lucasInput.sendKeys(lucas);
  }

  async getLucasInput() {
    return this.lucasInput.getAttribute('value');
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
