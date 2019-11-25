import { element, by, ElementFinder } from 'protractor';

export default class MapsIdChildEntityWithoutDTOUpdatePage {
  pageTitle: ElementFinder = element(by.id('travisNg2App.mapsIdChildEntityWithoutDTO.home.createOrEditLabel'));
  saveButton: ElementFinder = element(by.id('save-entity'));
  cancelButton: ElementFinder = element(by.id('cancel-save'));
  dateInput: ElementFinder = element(by.css('input#maps-id-child-entity-without-dto-date'));
  mapsIdParentEntityWithoutDTOSelect: ElementFinder = element(
    by.css('select#maps-id-child-entity-without-dto-mapsIdParentEntityWithoutDTO')
  );

  getPageTitle() {
    return this.pageTitle;
  }

  async setDateInput(date) {
    await this.dateInput.sendKeys(date);
  }

  async getDateInput() {
    return this.dateInput.getAttribute('value');
  }

  async mapsIdParentEntityWithoutDTOSelectLastOption() {
    await this.mapsIdParentEntityWithoutDTOSelect
      .all(by.tagName('option'))
      .last()
      .click();
  }

  async mapsIdParentEntityWithoutDTOSelectOption(option) {
    await this.mapsIdParentEntityWithoutDTOSelect.sendKeys(option);
  }

  getMapsIdParentEntityWithoutDTOSelect() {
    return this.mapsIdParentEntityWithoutDTOSelect;
  }

  async getMapsIdParentEntityWithoutDTOSelectedOption() {
    return this.mapsIdParentEntityWithoutDTOSelect.element(by.css('option:checked')).getText();
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
