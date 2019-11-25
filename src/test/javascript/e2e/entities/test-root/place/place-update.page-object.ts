import { element, by, ElementFinder } from 'protractor';

export default class PlaceUpdatePage {
  pageTitle: ElementFinder = element(by.id('travisNg2App.testRootPlace.home.createOrEditLabel'));
  saveButton: ElementFinder = element(by.id('save-entity'));
  cancelButton: ElementFinder = element(by.id('cancel-save'));
  nameInput: ElementFinder = element(by.css('input#place-name'));
  numberOfSeatsInput: ElementFinder = element(by.css('input#place-numberOfSeats'));
  shortNameInput: ElementFinder = element(by.css('input#place-shortName'));
  colorBackgroundInput: ElementFinder = element(by.css('input#place-colorBackground'));
  colorTextInput: ElementFinder = element(by.css('input#place-colorText'));
  descriptionInput: ElementFinder = element(by.css('textarea#place-description'));
  preferredDivisionSelect: ElementFinder = element(by.css('select#place-preferredDivision'));
  ownerSelect: ElementFinder = element(by.css('select#place-owner'));

  getPageTitle() {
    return this.pageTitle;
  }

  async setNameInput(name) {
    await this.nameInput.sendKeys(name);
  }

  async getNameInput() {
    return this.nameInput.getAttribute('value');
  }

  async setNumberOfSeatsInput(numberOfSeats) {
    await this.numberOfSeatsInput.sendKeys(numberOfSeats);
  }

  async getNumberOfSeatsInput() {
    return this.numberOfSeatsInput.getAttribute('value');
  }

  async setShortNameInput(shortName) {
    await this.shortNameInput.sendKeys(shortName);
  }

  async getShortNameInput() {
    return this.shortNameInput.getAttribute('value');
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

  async setDescriptionInput(description) {
    await this.descriptionInput.sendKeys(description);
  }

  async getDescriptionInput() {
    return this.descriptionInput.getAttribute('value');
  }

  async preferredDivisionSelectLastOption() {
    await this.preferredDivisionSelect
      .all(by.tagName('option'))
      .last()
      .click();
  }

  async preferredDivisionSelectOption(option) {
    await this.preferredDivisionSelect.sendKeys(option);
  }

  getPreferredDivisionSelect() {
    return this.preferredDivisionSelect;
  }

  async getPreferredDivisionSelectedOption() {
    return this.preferredDivisionSelect.element(by.css('option:checked')).getText();
  }

  async ownerSelectLastOption() {
    await this.ownerSelect
      .all(by.tagName('option'))
      .last()
      .click();
  }

  async ownerSelectOption(option) {
    await this.ownerSelect.sendKeys(option);
  }

  getOwnerSelect() {
    return this.ownerSelect;
  }

  async getOwnerSelectedOption() {
    return this.ownerSelect.element(by.css('option:checked')).getText();
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
