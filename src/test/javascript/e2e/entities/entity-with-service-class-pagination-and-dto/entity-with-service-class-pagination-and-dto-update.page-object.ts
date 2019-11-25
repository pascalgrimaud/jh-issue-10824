import { element, by, ElementFinder } from 'protractor';

export default class EntityWithServiceClassPaginationAndDTOUpdatePage {
  pageTitle: ElementFinder = element(by.id('travisNg2App.entityWithServiceClassPaginationAndDTO.home.createOrEditLabel'));
  saveButton: ElementFinder = element(by.id('save-entity'));
  cancelButton: ElementFinder = element(by.id('cancel-save'));
  lenaInput: ElementFinder = element(by.css('input#entity-with-service-class-pagination-and-dto-lena'));

  getPageTitle() {
    return this.pageTitle;
  }

  async setLenaInput(lena) {
    await this.lenaInput.sendKeys(lena);
  }

  async getLenaInput() {
    return this.lenaInput.getAttribute('value');
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
