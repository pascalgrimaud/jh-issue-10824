import { element, by, ElementFinder } from 'protractor';

export default class MapsIdUserProfileWithDTOUpdatePage {
  pageTitle: ElementFinder = element(by.id('travisNg2App.mapsIdUserProfileWithDTO.home.createOrEditLabel'));
  saveButton: ElementFinder = element(by.id('save-entity'));
  cancelButton: ElementFinder = element(by.id('cancel-save'));
  dateOfBirthInput: ElementFinder = element(by.css('input#maps-id-user-profile-with-dto-dateOfBirth'));
  userSelect: ElementFinder = element(by.css('select#maps-id-user-profile-with-dto-user'));

  getPageTitle() {
    return this.pageTitle;
  }

  async setDateOfBirthInput(dateOfBirth) {
    await this.dateOfBirthInput.sendKeys(dateOfBirth);
  }

  async getDateOfBirthInput() {
    return this.dateOfBirthInput.getAttribute('value');
  }

  async userSelectLastOption() {
    await this.userSelect
      .all(by.tagName('option'))
      .last()
      .click();
  }

  async userSelectOption(option) {
    await this.userSelect.sendKeys(option);
  }

  getUserSelect() {
    return this.userSelect;
  }

  async getUserSelectedOption() {
    return this.userSelect.element(by.css('option:checked')).getText();
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
