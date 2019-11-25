import { element, by, ElementFinder } from 'protractor';

export default class FieldTestEntityUpdatePage {
  pageTitle: ElementFinder = element(by.id('travisNg2App.fieldTestEntity.home.createOrEditLabel'));
  saveButton: ElementFinder = element(by.id('save-entity'));
  cancelButton: ElementFinder = element(by.id('cancel-save'));
  stringTomInput: ElementFinder = element(by.css('input#field-test-entity-stringTom'));
  stringRequiredTomInput: ElementFinder = element(by.css('input#field-test-entity-stringRequiredTom'));
  stringMinlengthTomInput: ElementFinder = element(by.css('input#field-test-entity-stringMinlengthTom'));
  stringMaxlengthTomInput: ElementFinder = element(by.css('input#field-test-entity-stringMaxlengthTom'));
  stringPatternTomInput: ElementFinder = element(by.css('input#field-test-entity-stringPatternTom'));
  integerTomInput: ElementFinder = element(by.css('input#field-test-entity-integerTom'));
  integerRequiredTomInput: ElementFinder = element(by.css('input#field-test-entity-integerRequiredTom'));
  integerMinTomInput: ElementFinder = element(by.css('input#field-test-entity-integerMinTom'));
  integerMaxTomInput: ElementFinder = element(by.css('input#field-test-entity-integerMaxTom'));
  longTomInput: ElementFinder = element(by.css('input#field-test-entity-longTom'));
  longRequiredTomInput: ElementFinder = element(by.css('input#field-test-entity-longRequiredTom'));
  longMinTomInput: ElementFinder = element(by.css('input#field-test-entity-longMinTom'));
  longMaxTomInput: ElementFinder = element(by.css('input#field-test-entity-longMaxTom'));
  floatTomInput: ElementFinder = element(by.css('input#field-test-entity-floatTom'));
  floatRequiredTomInput: ElementFinder = element(by.css('input#field-test-entity-floatRequiredTom'));
  floatMinTomInput: ElementFinder = element(by.css('input#field-test-entity-floatMinTom'));
  floatMaxTomInput: ElementFinder = element(by.css('input#field-test-entity-floatMaxTom'));
  doubleRequiredTomInput: ElementFinder = element(by.css('input#field-test-entity-doubleRequiredTom'));
  doubleMinTomInput: ElementFinder = element(by.css('input#field-test-entity-doubleMinTom'));
  doubleMaxTomInput: ElementFinder = element(by.css('input#field-test-entity-doubleMaxTom'));
  bigDecimalRequiredTomInput: ElementFinder = element(by.css('input#field-test-entity-bigDecimalRequiredTom'));
  bigDecimalMinTomInput: ElementFinder = element(by.css('input#field-test-entity-bigDecimalMinTom'));
  bigDecimalMaxTomInput: ElementFinder = element(by.css('input#field-test-entity-bigDecimalMaxTom'));
  localDateTomInput: ElementFinder = element(by.css('input#field-test-entity-localDateTom'));
  localDateRequiredTomInput: ElementFinder = element(by.css('input#field-test-entity-localDateRequiredTom'));
  instantTomInput: ElementFinder = element(by.css('input#field-test-entity-instantTom'));
  instantRequiredTomInput: ElementFinder = element(by.css('input#field-test-entity-instantRequiredTom'));
  zonedDateTimeTomInput: ElementFinder = element(by.css('input#field-test-entity-zonedDateTimeTom'));
  zonedDateTimeRequiredTomInput: ElementFinder = element(by.css('input#field-test-entity-zonedDateTimeRequiredTom'));
  durationTomInput: ElementFinder = element(by.css('input#field-test-entity-durationTom'));
  durationRequiredTomInput: ElementFinder = element(by.css('input#field-test-entity-durationRequiredTom'));
  booleanTomInput: ElementFinder = element(by.css('input#field-test-entity-booleanTom'));
  booleanRequiredTomInput: ElementFinder = element(by.css('input#field-test-entity-booleanRequiredTom'));
  enumTomSelect: ElementFinder = element(by.css('select#field-test-entity-enumTom'));
  enumRequiredTomSelect: ElementFinder = element(by.css('select#field-test-entity-enumRequiredTom'));
  uuidTomInput: ElementFinder = element(by.css('input#field-test-entity-uuidTom'));
  uuidRequiredTomInput: ElementFinder = element(by.css('input#field-test-entity-uuidRequiredTom'));
  byteImageTomInput: ElementFinder = element(by.css('input#file_byteImageTom'));
  byteImageRequiredTomInput: ElementFinder = element(by.css('input#file_byteImageRequiredTom'));
  byteImageMinbytesTomInput: ElementFinder = element(by.css('input#file_byteImageMinbytesTom'));
  byteImageMaxbytesTomInput: ElementFinder = element(by.css('input#file_byteImageMaxbytesTom'));
  byteAnyTomInput: ElementFinder = element(by.css('input#file_byteAnyTom'));
  byteAnyRequiredTomInput: ElementFinder = element(by.css('input#file_byteAnyRequiredTom'));
  byteAnyMinbytesTomInput: ElementFinder = element(by.css('input#file_byteAnyMinbytesTom'));
  byteAnyMaxbytesTomInput: ElementFinder = element(by.css('input#file_byteAnyMaxbytesTom'));
  byteTextTomInput: ElementFinder = element(by.css('textarea#field-test-entity-byteTextTom'));
  byteTextRequiredTomInput: ElementFinder = element(by.css('textarea#field-test-entity-byteTextRequiredTom'));

  getPageTitle() {
    return this.pageTitle;
  }

  async setStringTomInput(stringTom) {
    await this.stringTomInput.sendKeys(stringTom);
  }

  async getStringTomInput() {
    return this.stringTomInput.getAttribute('value');
  }

  async setStringRequiredTomInput(stringRequiredTom) {
    await this.stringRequiredTomInput.sendKeys(stringRequiredTom);
  }

  async getStringRequiredTomInput() {
    return this.stringRequiredTomInput.getAttribute('value');
  }

  async setStringMinlengthTomInput(stringMinlengthTom) {
    await this.stringMinlengthTomInput.sendKeys(stringMinlengthTom);
  }

  async getStringMinlengthTomInput() {
    return this.stringMinlengthTomInput.getAttribute('value');
  }

  async setStringMaxlengthTomInput(stringMaxlengthTom) {
    await this.stringMaxlengthTomInput.sendKeys(stringMaxlengthTom);
  }

  async getStringMaxlengthTomInput() {
    return this.stringMaxlengthTomInput.getAttribute('value');
  }

  async setStringPatternTomInput(stringPatternTom) {
    await this.stringPatternTomInput.sendKeys(stringPatternTom);
  }

  async getStringPatternTomInput() {
    return this.stringPatternTomInput.getAttribute('value');
  }

  async setIntegerTomInput(integerTom) {
    await this.integerTomInput.sendKeys(integerTom);
  }

  async getIntegerTomInput() {
    return this.integerTomInput.getAttribute('value');
  }

  async setIntegerRequiredTomInput(integerRequiredTom) {
    await this.integerRequiredTomInput.sendKeys(integerRequiredTom);
  }

  async getIntegerRequiredTomInput() {
    return this.integerRequiredTomInput.getAttribute('value');
  }

  async setIntegerMinTomInput(integerMinTom) {
    await this.integerMinTomInput.sendKeys(integerMinTom);
  }

  async getIntegerMinTomInput() {
    return this.integerMinTomInput.getAttribute('value');
  }

  async setIntegerMaxTomInput(integerMaxTom) {
    await this.integerMaxTomInput.sendKeys(integerMaxTom);
  }

  async getIntegerMaxTomInput() {
    return this.integerMaxTomInput.getAttribute('value');
  }

  async setLongTomInput(longTom) {
    await this.longTomInput.sendKeys(longTom);
  }

  async getLongTomInput() {
    return this.longTomInput.getAttribute('value');
  }

  async setLongRequiredTomInput(longRequiredTom) {
    await this.longRequiredTomInput.sendKeys(longRequiredTom);
  }

  async getLongRequiredTomInput() {
    return this.longRequiredTomInput.getAttribute('value');
  }

  async setLongMinTomInput(longMinTom) {
    await this.longMinTomInput.sendKeys(longMinTom);
  }

  async getLongMinTomInput() {
    return this.longMinTomInput.getAttribute('value');
  }

  async setLongMaxTomInput(longMaxTom) {
    await this.longMaxTomInput.sendKeys(longMaxTom);
  }

  async getLongMaxTomInput() {
    return this.longMaxTomInput.getAttribute('value');
  }

  async setFloatTomInput(floatTom) {
    await this.floatTomInput.sendKeys(floatTom);
  }

  async getFloatTomInput() {
    return this.floatTomInput.getAttribute('value');
  }

  async setFloatRequiredTomInput(floatRequiredTom) {
    await this.floatRequiredTomInput.sendKeys(floatRequiredTom);
  }

  async getFloatRequiredTomInput() {
    return this.floatRequiredTomInput.getAttribute('value');
  }

  async setFloatMinTomInput(floatMinTom) {
    await this.floatMinTomInput.sendKeys(floatMinTom);
  }

  async getFloatMinTomInput() {
    return this.floatMinTomInput.getAttribute('value');
  }

  async setFloatMaxTomInput(floatMaxTom) {
    await this.floatMaxTomInput.sendKeys(floatMaxTom);
  }

  async getFloatMaxTomInput() {
    return this.floatMaxTomInput.getAttribute('value');
  }

  async setDoubleRequiredTomInput(doubleRequiredTom) {
    await this.doubleRequiredTomInput.sendKeys(doubleRequiredTom);
  }

  async getDoubleRequiredTomInput() {
    return this.doubleRequiredTomInput.getAttribute('value');
  }

  async setDoubleMinTomInput(doubleMinTom) {
    await this.doubleMinTomInput.sendKeys(doubleMinTom);
  }

  async getDoubleMinTomInput() {
    return this.doubleMinTomInput.getAttribute('value');
  }

  async setDoubleMaxTomInput(doubleMaxTom) {
    await this.doubleMaxTomInput.sendKeys(doubleMaxTom);
  }

  async getDoubleMaxTomInput() {
    return this.doubleMaxTomInput.getAttribute('value');
  }

  async setBigDecimalRequiredTomInput(bigDecimalRequiredTom) {
    await this.bigDecimalRequiredTomInput.sendKeys(bigDecimalRequiredTom);
  }

  async getBigDecimalRequiredTomInput() {
    return this.bigDecimalRequiredTomInput.getAttribute('value');
  }

  async setBigDecimalMinTomInput(bigDecimalMinTom) {
    await this.bigDecimalMinTomInput.sendKeys(bigDecimalMinTom);
  }

  async getBigDecimalMinTomInput() {
    return this.bigDecimalMinTomInput.getAttribute('value');
  }

  async setBigDecimalMaxTomInput(bigDecimalMaxTom) {
    await this.bigDecimalMaxTomInput.sendKeys(bigDecimalMaxTom);
  }

  async getBigDecimalMaxTomInput() {
    return this.bigDecimalMaxTomInput.getAttribute('value');
  }

  async setLocalDateTomInput(localDateTom) {
    await this.localDateTomInput.sendKeys(localDateTom);
  }

  async getLocalDateTomInput() {
    return this.localDateTomInput.getAttribute('value');
  }

  async setLocalDateRequiredTomInput(localDateRequiredTom) {
    await this.localDateRequiredTomInput.sendKeys(localDateRequiredTom);
  }

  async getLocalDateRequiredTomInput() {
    return this.localDateRequiredTomInput.getAttribute('value');
  }

  async setInstantTomInput(instantTom) {
    await this.instantTomInput.sendKeys(instantTom);
  }

  async getInstantTomInput() {
    return this.instantTomInput.getAttribute('value');
  }

  async setInstantRequiredTomInput(instantRequiredTom) {
    await this.instantRequiredTomInput.sendKeys(instantRequiredTom);
  }

  async getInstantRequiredTomInput() {
    return this.instantRequiredTomInput.getAttribute('value');
  }

  async setZonedDateTimeTomInput(zonedDateTimeTom) {
    await this.zonedDateTimeTomInput.sendKeys(zonedDateTimeTom);
  }

  async getZonedDateTimeTomInput() {
    return this.zonedDateTimeTomInput.getAttribute('value');
  }

  async setZonedDateTimeRequiredTomInput(zonedDateTimeRequiredTom) {
    await this.zonedDateTimeRequiredTomInput.sendKeys(zonedDateTimeRequiredTom);
  }

  async getZonedDateTimeRequiredTomInput() {
    return this.zonedDateTimeRequiredTomInput.getAttribute('value');
  }

  async setDurationTomInput(durationTom) {
    await this.durationTomInput.sendKeys(durationTom);
  }

  async getDurationTomInput() {
    return this.durationTomInput.getAttribute('value');
  }

  async setDurationRequiredTomInput(durationRequiredTom) {
    await this.durationRequiredTomInput.sendKeys(durationRequiredTom);
  }

  async getDurationRequiredTomInput() {
    return this.durationRequiredTomInput.getAttribute('value');
  }

  getBooleanTomInput() {
    return this.booleanTomInput;
  }
  getBooleanRequiredTomInput() {
    return this.booleanRequiredTomInput;
  }
  async setEnumTomSelect(enumTom) {
    await this.enumTomSelect.sendKeys(enumTom);
  }

  async getEnumTomSelect() {
    return this.enumTomSelect.element(by.css('option:checked')).getText();
  }

  async enumTomSelectLastOption() {
    await this.enumTomSelect
      .all(by.tagName('option'))
      .last()
      .click();
  }
  async setEnumRequiredTomSelect(enumRequiredTom) {
    await this.enumRequiredTomSelect.sendKeys(enumRequiredTom);
  }

  async getEnumRequiredTomSelect() {
    return this.enumRequiredTomSelect.element(by.css('option:checked')).getText();
  }

  async enumRequiredTomSelectLastOption() {
    await this.enumRequiredTomSelect
      .all(by.tagName('option'))
      .last()
      .click();
  }
  async setUuidTomInput(uuidTom) {
    await this.uuidTomInput.sendKeys(uuidTom);
  }

  async getUuidTomInput() {
    return this.uuidTomInput.getAttribute('value');
  }

  async setUuidRequiredTomInput(uuidRequiredTom) {
    await this.uuidRequiredTomInput.sendKeys(uuidRequiredTom);
  }

  async getUuidRequiredTomInput() {
    return this.uuidRequiredTomInput.getAttribute('value');
  }

  async setByteImageTomInput(byteImageTom) {
    await this.byteImageTomInput.sendKeys(byteImageTom);
  }

  async getByteImageTomInput() {
    return this.byteImageTomInput.getAttribute('value');
  }

  async setByteImageRequiredTomInput(byteImageRequiredTom) {
    await this.byteImageRequiredTomInput.sendKeys(byteImageRequiredTom);
  }

  async getByteImageRequiredTomInput() {
    return this.byteImageRequiredTomInput.getAttribute('value');
  }

  async setByteImageMinbytesTomInput(byteImageMinbytesTom) {
    await this.byteImageMinbytesTomInput.sendKeys(byteImageMinbytesTom);
  }

  async getByteImageMinbytesTomInput() {
    return this.byteImageMinbytesTomInput.getAttribute('value');
  }

  async setByteImageMaxbytesTomInput(byteImageMaxbytesTom) {
    await this.byteImageMaxbytesTomInput.sendKeys(byteImageMaxbytesTom);
  }

  async getByteImageMaxbytesTomInput() {
    return this.byteImageMaxbytesTomInput.getAttribute('value');
  }

  async setByteAnyTomInput(byteAnyTom) {
    await this.byteAnyTomInput.sendKeys(byteAnyTom);
  }

  async getByteAnyTomInput() {
    return this.byteAnyTomInput.getAttribute('value');
  }

  async setByteAnyRequiredTomInput(byteAnyRequiredTom) {
    await this.byteAnyRequiredTomInput.sendKeys(byteAnyRequiredTom);
  }

  async getByteAnyRequiredTomInput() {
    return this.byteAnyRequiredTomInput.getAttribute('value');
  }

  async setByteAnyMinbytesTomInput(byteAnyMinbytesTom) {
    await this.byteAnyMinbytesTomInput.sendKeys(byteAnyMinbytesTom);
  }

  async getByteAnyMinbytesTomInput() {
    return this.byteAnyMinbytesTomInput.getAttribute('value');
  }

  async setByteAnyMaxbytesTomInput(byteAnyMaxbytesTom) {
    await this.byteAnyMaxbytesTomInput.sendKeys(byteAnyMaxbytesTom);
  }

  async getByteAnyMaxbytesTomInput() {
    return this.byteAnyMaxbytesTomInput.getAttribute('value');
  }

  async setByteTextTomInput(byteTextTom) {
    await this.byteTextTomInput.sendKeys(byteTextTom);
  }

  async getByteTextTomInput() {
    return this.byteTextTomInput.getAttribute('value');
  }

  async setByteTextRequiredTomInput(byteTextRequiredTom) {
    await this.byteTextRequiredTomInput.sendKeys(byteTextRequiredTom);
  }

  async getByteTextRequiredTomInput() {
    return this.byteTextRequiredTomInput.getAttribute('value');
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
