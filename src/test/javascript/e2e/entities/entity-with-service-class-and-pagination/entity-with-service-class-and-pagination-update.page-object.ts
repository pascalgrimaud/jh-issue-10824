import { element, by, ElementFinder } from 'protractor';

export default class EntityWithServiceClassAndPaginationUpdatePage {
  pageTitle: ElementFinder = element(by.id('travisNg2App.entityWithServiceClassAndPagination.home.createOrEditLabel'));
  saveButton: ElementFinder = element(by.id('save-entity'));
  cancelButton: ElementFinder = element(by.id('cancel-save'));
  enzoInput: ElementFinder = element(by.css('input#entity-with-service-class-and-pagination-enzo'));

  getPageTitle() {
    return this.pageTitle;
  }

  async setEnzoInput(enzo) {
    await this.enzoInput.sendKeys(enzo);
  }

  async getEnzoInput() {
    return this.enzoInput.getAttribute('value');
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
