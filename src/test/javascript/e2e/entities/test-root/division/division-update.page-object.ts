import { element, by, ElementFinder } from 'protractor';

export default class DivisionUpdatePage {
  pageTitle: ElementFinder = element(by.id('travisNg2App.testRootDivision.home.createOrEditLabel'));
  saveButton: ElementFinder = element(by.id('save-entity'));
  cancelButton: ElementFinder = element(by.id('cancel-save'));
  nameInput: ElementFinder = element(by.css('input#division-name'));
  shortNameInput: ElementFinder = element(by.css('input#division-shortName'));
  numberOfPeopleInput: ElementFinder = element(by.css('input#division-numberOfPeople'));
  divisionTypeSelect: ElementFinder = element(by.css('select#division-divisionType'));
  colorBackgroundInput: ElementFinder = element(by.css('input#division-colorBackground'));
  colorTextInput: ElementFinder = element(by.css('input#division-colorText'));

  getPageTitle() {
    return this.pageTitle;
  }

  async setNameInput(name) {
    await this.nameInput.sendKeys(name);
  }

  async getNameInput() {
    return this.nameInput.getAttribute('value');
  }

  async setShortNameInput(shortName) {
    await this.shortNameInput.sendKeys(shortName);
  }

  async getShortNameInput() {
    return this.shortNameInput.getAttribute('value');
  }

  async setNumberOfPeopleInput(numberOfPeople) {
    await this.numberOfPeopleInput.sendKeys(numberOfPeople);
  }

  async getNumberOfPeopleInput() {
    return this.numberOfPeopleInput.getAttribute('value');
  }

  async setDivisionTypeSelect(divisionType) {
    await this.divisionTypeSelect.sendKeys(divisionType);
  }

  async getDivisionTypeSelect() {
    return this.divisionTypeSelect.element(by.css('option:checked')).getText();
  }

  async divisionTypeSelectLastOption() {
    await this.divisionTypeSelect
      .all(by.tagName('option'))
      .last()
      .click();
  }
  async setColorBackgroundInput(colorBackground) {
    await this.colorBackgroundInput.sendKeys(colorBackground);
  }

  async getColorBackgroundInput() {
    return this.colorBackgroundInput.getAttribute('value');
  }

  async setColorTextInput(colorText) {
    await this.colorTextInput.sendKeys(colorText);
  }

  async getColorTextInput() {
    return this.colorTextInput.getAttribute('value');
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
