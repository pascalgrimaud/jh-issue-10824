import { element, by, ElementFinder } from 'protractor';

export default class EntityWithPaginationAndDTOUpdatePage {
  pageTitle: ElementFinder = element(by.id('travisNg2App.entityWithPaginationAndDTO.home.createOrEditLabel'));
  saveButton: ElementFinder = element(by.id('save-entity'));
  cancelButton: ElementFinder = element(by.id('cancel-save'));
  leaInput: ElementFinder = element(by.css('input#entity-with-pagination-and-dto-lea'));

  getPageTitle() {
    return this.pageTitle;
  }

  async setLeaInput(lea) {
    await this.leaInput.sendKeys(lea);
  }

  async getLeaInput() {
    return this.leaInput.getAttribute('value');
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
