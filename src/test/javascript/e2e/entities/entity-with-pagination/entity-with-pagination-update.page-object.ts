import { element, by, ElementFinder } from 'protractor';

export default class EntityWithPaginationUpdatePage {
  pageTitle: ElementFinder = element(by.id('travisNg2App.entityWithPagination.home.createOrEditLabel'));
  saveButton: ElementFinder = element(by.id('save-entity'));
  cancelButton: ElementFinder = element(by.id('cancel-save'));
  nathanInput: ElementFinder = element(by.css('input#entity-with-pagination-nathan'));

  getPageTitle() {
    return this.pageTitle;
  }

  async setNathanInput(nathan) {
    await this.nathanInput.sendKeys(nathan);
  }

  async getNathanInput() {
    return this.nathanInput.getAttribute('value');
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
