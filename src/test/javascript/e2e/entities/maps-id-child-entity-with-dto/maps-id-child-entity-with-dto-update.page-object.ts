import { element, by, ElementFinder } from 'protractor';

export default class MapsIdChildEntityWithDTOUpdatePage {
  pageTitle: ElementFinder = element(by.id('travisNg2App.mapsIdChildEntityWithDTO.home.createOrEditLabel'));
  saveButton: ElementFinder = element(by.id('save-entity'));
  cancelButton: ElementFinder = element(by.id('cancel-save'));
  dateInput: ElementFinder = element(by.css('input#maps-id-child-entity-with-dto-date'));
  mapsIdParentEntityWithDTOSelect: ElementFinder = element(by.css('select#maps-id-child-entity-with-dto-mapsIdParentEntityWithDTO'));

  getPageTitle() {
    return this.pageTitle;
  }

  async setDateInput(date) {
    await this.dateInput.sendKeys(date);
  }

  async getDateInput() {
    return this.dateInput.getAttribute('value');
  }

  async mapsIdParentEntityWithDTOSelectLastOption() {
    await this.mapsIdParentEntityWithDTOSelect
      .all(by.tagName('option'))
      .last()
      .click();
  }

  async mapsIdParentEntityWithDTOSelectOption(option) {
    await this.mapsIdParentEntityWithDTOSelect.sendKeys(option);
  }

  getMapsIdParentEntityWithDTOSelect() {
    return this.mapsIdParentEntityWithDTOSelect;
  }

  async getMapsIdParentEntityWithDTOSelectedOption() {
    return this.mapsIdParentEntityWithDTOSelect.element(by.css('option:checked')).getText();
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
