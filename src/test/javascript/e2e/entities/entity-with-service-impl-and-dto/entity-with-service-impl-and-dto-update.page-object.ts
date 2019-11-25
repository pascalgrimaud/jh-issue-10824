import { element, by, ElementFinder } from 'protractor';

export default class EntityWithServiceImplAndDTOUpdatePage {
  pageTitle: ElementFinder = element(by.id('travisNg2App.entityWithServiceImplAndDTO.home.createOrEditLabel'));
  saveButton: ElementFinder = element(by.id('save-entity'));
  cancelButton: ElementFinder = element(by.id('cancel-save'));
  louisInput: ElementFinder = element(by.css('input#entity-with-service-impl-and-dto-louis'));

  getPageTitle() {
    return this.pageTitle;
  }

  async setLouisInput(louis) {
    await this.louisInput.sendKeys(louis);
  }

  async getLouisInput() {
    return this.louisInput.getAttribute('value');
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
