import { element, by, ElementFinder } from 'protractor';

export default class EntityWithServiceImplPaginationAndDTOUpdatePage {
  pageTitle: ElementFinder = element(by.id('travisNg2App.entityWithServiceImplPaginationAndDTO.home.createOrEditLabel'));
  saveButton: ElementFinder = element(by.id('save-entity'));
  cancelButton: ElementFinder = element(by.id('cancel-save'));
  theoInput: ElementFinder = element(by.css('input#entity-with-service-impl-pagination-and-dto-theo'));

  getPageTitle() {
    return this.pageTitle;
  }

  async setTheoInput(theo) {
    await this.theoInput.sendKeys(theo);
  }

  async getTheoInput() {
    return this.theoInput.getAttribute('value');
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
