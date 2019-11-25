import { element, by, ElementFinder } from 'protractor';

export default class EntityWithServiceClassUpdatePage {
  pageTitle: ElementFinder = element(by.id('travisNg2App.entityWithServiceClass.home.createOrEditLabel'));
  saveButton: ElementFinder = element(by.id('save-entity'));
  cancelButton: ElementFinder = element(by.id('cancel-save'));
  zoeInput: ElementFinder = element(by.css('input#entity-with-service-class-zoe'));

  getPageTitle() {
    return this.pageTitle;
  }

  async setZoeInput(zoe) {
    await this.zoeInput.sendKeys(zoe);
  }

  async getZoeInput() {
    return this.zoeInput.getAttribute('value');
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
