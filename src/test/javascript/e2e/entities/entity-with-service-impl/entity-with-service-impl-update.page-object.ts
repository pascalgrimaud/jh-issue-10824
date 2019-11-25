import { element, by, ElementFinder } from 'protractor';

export default class EntityWithServiceImplUpdatePage {
  pageTitle: ElementFinder = element(by.id('travisNg2App.entityWithServiceImpl.home.createOrEditLabel'));
  saveButton: ElementFinder = element(by.id('save-entity'));
  cancelButton: ElementFinder = element(by.id('cancel-save'));
  claraInput: ElementFinder = element(by.css('input#entity-with-service-impl-clara'));

  getPageTitle() {
    return this.pageTitle;
  }

  async setClaraInput(clara) {
    await this.claraInput.sendKeys(clara);
  }

  async getClaraInput() {
    return this.claraInput.getAttribute('value');
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
