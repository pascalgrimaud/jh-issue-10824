import { element, by, ElementFinder } from 'protractor';

export default class EntityWithServiceImplAndPaginationUpdatePage {
  pageTitle: ElementFinder = element(by.id('travisNg2App.entityWithServiceImplAndPagination.home.createOrEditLabel'));
  saveButton: ElementFinder = element(by.id('save-entity'));
  cancelButton: ElementFinder = element(by.id('cancel-save'));
  hugoInput: ElementFinder = element(by.css('input#entity-with-service-impl-and-pagination-hugo'));

  getPageTitle() {
    return this.pageTitle;
  }

  async setHugoInput(hugo) {
    await this.hugoInput.sendKeys(hugo);
  }

  async getHugoInput() {
    return this.hugoInput.getAttribute('value');
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
