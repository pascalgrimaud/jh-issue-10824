import { element, by, ElementFinder } from 'protractor';

export default class FieldTestMapstructEntityUpdatePage {
  pageTitle: ElementFinder = element(by.id('travisNg2App.fieldTestMapstructEntity.home.createOrEditLabel'));
  saveButton: ElementFinder = element(by.id('save-entity'));
  cancelButton: ElementFinder = element(by.id('cancel-save'));
  stringEvaInput: ElementFinder = element(by.css('input#field-test-mapstruct-entity-stringEva'));
  stringRequiredEvaInput: ElementFinder = element(by.css('input#field-test-mapstruct-entity-stringRequiredEva'));
  stringMinlengthEvaInput: ElementFinder = element(by.css('input#field-test-mapstruct-entity-stringMinlengthEva'));
  stringMaxlengthEvaInput: ElementFinder = element(by.css('input#field-test-mapstruct-entity-stringMaxlengthEva'));
  stringPatternEvaInput: ElementFinder = element(by.css('input#field-test-mapstruct-entity-stringPatternEva'));
  integerEvaInput: ElementFinder = element(by.css('input#field-test-mapstruct-entity-integerEva'));
  integerRequiredEvaInput: ElementFinder = element(by.css('input#field-test-mapstruct-entity-integerRequiredEva'));
  integerMinEvaInput: ElementFinder = element(by.css('input#field-test-mapstruct-entity-integerMinEva'));
  integerMaxEvaInput: ElementFinder = element(by.css('input#field-test-mapstruct-entity-integerMaxEva'));
  longEvaInput: ElementFinder = element(by.css('input#field-test-mapstruct-entity-longEva'));
  longRequiredEvaInput: ElementFinder = element(by.css('input#field-test-mapstruct-entity-longRequiredEva'));
  longMinEvaInput: ElementFinder = element(by.css('input#field-test-mapstruct-entity-longMinEva'));
  longMaxEvaInput: ElementFinder = element(by.css('input#field-test-mapstruct-entity-longMaxEva'));
  floatEvaInput: ElementFinder = element(by.css('input#field-test-mapstruct-entity-floatEva'));
  floatRequiredEvaInput: ElementFinder = element(by.css('input#field-test-mapstruct-entity-floatRequiredEva'));
  floatMinEvaInput: ElementFinder = element(by.css('input#field-test-mapstruct-entity-floatMinEva'));
  floatMaxEvaInput: ElementFinder = element(by.css('input#field-test-mapstruct-entity-floatMaxEva'));
  doubleRequiredEvaInput: ElementFinder = element(by.css('input#field-test-mapstruct-entity-doubleRequiredEva'));
  doubleMinEvaInput: ElementFinder = element(by.css('input#field-test-mapstruct-entity-doubleMinEva'));
  doubleMaxEvaInput: ElementFinder = element(by.css('input#field-test-mapstruct-entity-doubleMaxEva'));
  bigDecimalRequiredEvaInput: ElementFinder = element(by.css('input#field-test-mapstruct-entity-bigDecimalRequiredEva'));
  bigDecimalMinEvaInput: ElementFinder = element(by.css('input#field-test-mapstruct-entity-bigDecimalMinEva'));
  bigDecimalMaxEvaInput: ElementFinder = element(by.css('input#field-test-mapstruct-entity-bigDecimalMaxEva'));
  localDateEvaInput: ElementFinder = element(by.css('input#field-test-mapstruct-entity-localDateEva'));
  localDateRequiredEvaInput: ElementFinder = element(by.css('input#field-test-mapstruct-entity-localDateRequiredEva'));
  instantEvaInput: ElementFinder = element(by.css('input#field-test-mapstruct-entity-instantEva'));
  instanteRequiredEvaInput: ElementFinder = element(by.css('input#field-test-mapstruct-entity-instanteRequiredEva'));
  zonedDateTimeEvaInput: ElementFinder = element(by.css('input#field-test-mapstruct-entity-zonedDateTimeEva'));
  zonedDateTimeRequiredEvaInput: ElementFinder = element(by.css('input#field-test-mapstruct-entity-zonedDateTimeRequiredEva'));
  durationEvaInput: ElementFinder = element(by.css('input#field-test-mapstruct-entity-durationEva'));
  durationRequiredEvaInput: ElementFinder = element(by.css('input#field-test-mapstruct-entity-durationRequiredEva'));
  booleanEvaInput: ElementFinder = element(by.css('input#field-test-mapstruct-entity-booleanEva'));
  booleanRequiredEvaInput: ElementFinder = element(by.css('input#field-test-mapstruct-entity-booleanRequiredEva'));
  enumEvaSelect: ElementFinder = element(by.css('select#field-test-mapstruct-entity-enumEva'));
  enumRequiredEvaSelect: ElementFinder = element(by.css('select#field-test-mapstruct-entity-enumRequiredEva'));
  uuidEvaInput: ElementFinder = element(by.css('input#field-test-mapstruct-entity-uuidEva'));
  uuidRequiredEvaInput: ElementFinder = element(by.css('input#field-test-mapstruct-entity-uuidRequiredEva'));
  byteImageEvaInput: ElementFinder = element(by.css('input#file_byteImageEva'));
  byteImageRequiredEvaInput: ElementFinder = element(by.css('input#file_byteImageRequiredEva'));
  byteImageMinbytesEvaInput: ElementFinder = element(by.css('input#file_byteImageMinbytesEva'));
  byteImageMaxbytesEvaInput: ElementFinder = element(by.css('input#file_byteImageMaxbytesEva'));
  byteAnyEvaInput: ElementFinder = element(by.css('input#file_byteAnyEva'));
  byteAnyRequiredEvaInput: ElementFinder = element(by.css('input#file_byteAnyRequiredEva'));
  byteAnyMinbytesEvaInput: ElementFinder = element(by.css('input#file_byteAnyMinbytesEva'));
  byteAnyMaxbytesEvaInput: ElementFinder = element(by.css('input#file_byteAnyMaxbytesEva'));
  byteTextEvaInput: ElementFinder = element(by.css('textarea#field-test-mapstruct-entity-byteTextEva'));
  byteTextRequiredEvaInput: ElementFinder = element(by.css('textarea#field-test-mapstruct-entity-byteTextRequiredEva'));

  getPageTitle() {
    return this.pageTitle;
  }

  async setStringEvaInput(stringEva) {
    await this.stringEvaInput.sendKeys(stringEva);
  }

  async getStringEvaInput() {
    return this.stringEvaInput.getAttribute('value');
  }

  async setStringRequiredEvaInput(stringRequiredEva) {
    await this.stringRequiredEvaInput.sendKeys(stringRequiredEva);
  }

  async getStringRequiredEvaInput() {
    return this.stringRequiredEvaInput.getAttribute('value');
  }

  async setStringMinlengthEvaInput(stringMinlengthEva) {
    await this.stringMinlengthEvaInput.sendKeys(stringMinlengthEva);
  }

  async getStringMinlengthEvaInput() {
    return this.stringMinlengthEvaInput.getAttribute('value');
  }

  async setStringMaxlengthEvaInput(stringMaxlengthEva) {
    await this.stringMaxlengthEvaInput.sendKeys(stringMaxlengthEva);
  }

  async getStringMaxlengthEvaInput() {
    return this.stringMaxlengthEvaInput.getAttribute('value');
  }

  async setStringPatternEvaInput(stringPatternEva) {
    await this.stringPatternEvaInput.sendKeys(stringPatternEva);
  }

  async getStringPatternEvaInput() {
    return this.stringPatternEvaInput.getAttribute('value');
  }

  async setIntegerEvaInput(integerEva) {
    await this.integerEvaInput.sendKeys(integerEva);
  }

  async getIntegerEvaInput() {
    return this.integerEvaInput.getAttribute('value');
  }

  async setIntegerRequiredEvaInput(integerRequiredEva) {
    await this.integerRequiredEvaInput.sendKeys(integerRequiredEva);
  }

  async getIntegerRequiredEvaInput() {
    return this.integerRequiredEvaInput.getAttribute('value');
  }

  async setIntegerMinEvaInput(integerMinEva) {
    await this.integerMinEvaInput.sendKeys(integerMinEva);
  }

  async getIntegerMinEvaInput() {
    return this.integerMinEvaInput.getAttribute('value');
  }

  async setIntegerMaxEvaInput(integerMaxEva) {
    await this.integerMaxEvaInput.sendKeys(integerMaxEva);
  }

  async getIntegerMaxEvaInput() {
    return this.integerMaxEvaInput.getAttribute('value');
  }

  async setLongEvaInput(longEva) {
    await this.longEvaInput.sendKeys(longEva);
  }

  async getLongEvaInput() {
    return this.longEvaInput.getAttribute('value');
  }

  async setLongRequiredEvaInput(longRequiredEva) {
    await this.longRequiredEvaInput.sendKeys(longRequiredEva);
  }

  async getLongRequiredEvaInput() {
    return this.longRequiredEvaInput.getAttribute('value');
  }

  async setLongMinEvaInput(longMinEva) {
    await this.longMinEvaInput.sendKeys(longMinEva);
  }

  async getLongMinEvaInput() {
    return this.longMinEvaInput.getAttribute('value');
  }

  async setLongMaxEvaInput(longMaxEva) {
    await this.longMaxEvaInput.sendKeys(longMaxEva);
  }

  async getLongMaxEvaInput() {
    return this.longMaxEvaInput.getAttribute('value');
  }

  async setFloatEvaInput(floatEva) {
    await this.floatEvaInput.sendKeys(floatEva);
  }

  async getFloatEvaInput() {
    return this.floatEvaInput.getAttribute('value');
  }

  async setFloatRequiredEvaInput(floatRequiredEva) {
    await this.floatRequiredEvaInput.sendKeys(floatRequiredEva);
  }

  async getFloatRequiredEvaInput() {
    return this.floatRequiredEvaInput.getAttribute('value');
  }

  async setFloatMinEvaInput(floatMinEva) {
    await this.floatMinEvaInput.sendKeys(floatMinEva);
  }

  async getFloatMinEvaInput() {
    return this.floatMinEvaInput.getAttribute('value');
  }

  async setFloatMaxEvaInput(floatMaxEva) {
    await this.floatMaxEvaInput.sendKeys(floatMaxEva);
  }

  async getFloatMaxEvaInput() {
    return this.floatMaxEvaInput.getAttribute('value');
  }

  async setDoubleRequiredEvaInput(doubleRequiredEva) {
    await this.doubleRequiredEvaInput.sendKeys(doubleRequiredEva);
  }

  async getDoubleRequiredEvaInput() {
    return this.doubleRequiredEvaInput.getAttribute('value');
  }

  async setDoubleMinEvaInput(doubleMinEva) {
    await this.doubleMinEvaInput.sendKeys(doubleMinEva);
  }

  async getDoubleMinEvaInput() {
    return this.doubleMinEvaInput.getAttribute('value');
  }

  async setDoubleMaxEvaInput(doubleMaxEva) {
    await this.doubleMaxEvaInput.sendKeys(doubleMaxEva);
  }

  async getDoubleMaxEvaInput() {
    return this.doubleMaxEvaInput.getAttribute('value');
  }

  async setBigDecimalRequiredEvaInput(bigDecimalRequiredEva) {
    await this.bigDecimalRequiredEvaInput.sendKeys(bigDecimalRequiredEva);
  }

  async getBigDecimalRequiredEvaInput() {
    return this.bigDecimalRequiredEvaInput.getAttribute('value');
  }

  async setBigDecimalMinEvaInput(bigDecimalMinEva) {
    await this.bigDecimalMinEvaInput.sendKeys(bigDecimalMinEva);
  }

  async getBigDecimalMinEvaInput() {
    return this.bigDecimalMinEvaInput.getAttribute('value');
  }

  async setBigDecimalMaxEvaInput(bigDecimalMaxEva) {
    await this.bigDecimalMaxEvaInput.sendKeys(bigDecimalMaxEva);
  }

  async getBigDecimalMaxEvaInput() {
    return this.bigDecimalMaxEvaInput.getAttribute('value');
  }

  async setLocalDateEvaInput(localDateEva) {
    await this.localDateEvaInput.sendKeys(localDateEva);
  }

  async getLocalDateEvaInput() {
    return this.localDateEvaInput.getAttribute('value');
  }

  async setLocalDateRequiredEvaInput(localDateRequiredEva) {
    await this.localDateRequiredEvaInput.sendKeys(localDateRequiredEva);
  }

  async getLocalDateRequiredEvaInput() {
    return this.localDateRequiredEvaInput.getAttribute('value');
  }

  async setInstantEvaInput(instantEva) {
    await this.instantEvaInput.sendKeys(instantEva);
  }

  async getInstantEvaInput() {
    return this.instantEvaInput.getAttribute('value');
  }

  async setInstanteRequiredEvaInput(instanteRequiredEva) {
    await this.instanteRequiredEvaInput.sendKeys(instanteRequiredEva);
  }

  async getInstanteRequiredEvaInput() {
    return this.instanteRequiredEvaInput.getAttribute('value');
  }

  async setZonedDateTimeEvaInput(zonedDateTimeEva) {
    await this.zonedDateTimeEvaInput.sendKeys(zonedDateTimeEva);
  }

  async getZonedDateTimeEvaInput() {
    return this.zonedDateTimeEvaInput.getAttribute('value');
  }

  async setZonedDateTimeRequiredEvaInput(zonedDateTimeRequiredEva) {
    await this.zonedDateTimeRequiredEvaInput.sendKeys(zonedDateTimeRequiredEva);
  }

  async getZonedDateTimeRequiredEvaInput() {
    return this.zonedDateTimeRequiredEvaInput.getAttribute('value');
  }

  async setDurationEvaInput(durationEva) {
    await this.durationEvaInput.sendKeys(durationEva);
  }

  async getDurationEvaInput() {
    return this.durationEvaInput.getAttribute('value');
  }

  async setDurationRequiredEvaInput(durationRequiredEva) {
    await this.durationRequiredEvaInput.sendKeys(durationRequiredEva);
  }

  async getDurationRequiredEvaInput() {
    return this.durationRequiredEvaInput.getAttribute('value');
  }

  getBooleanEvaInput() {
    return this.booleanEvaInput;
  }
  getBooleanRequiredEvaInput() {
    return this.booleanRequiredEvaInput;
  }
  async setEnumEvaSelect(enumEva) {
    await this.enumEvaSelect.sendKeys(enumEva);
  }

  async getEnumEvaSelect() {
    return this.enumEvaSelect.element(by.css('option:checked')).getText();
  }

  async enumEvaSelectLastOption() {
    await this.enumEvaSelect
      .all(by.tagName('option'))
      .last()
      .click();
  }
  async setEnumRequiredEvaSelect(enumRequiredEva) {
    await this.enumRequiredEvaSelect.sendKeys(enumRequiredEva);
  }

  async getEnumRequiredEvaSelect() {
    return this.enumRequiredEvaSelect.element(by.css('option:checked')).getText();
  }

  async enumRequiredEvaSelectLastOption() {
    await this.enumRequiredEvaSelect
      .all(by.tagName('option'))
      .last()
      .click();
  }
  async setUuidEvaInput(uuidEva) {
    await this.uuidEvaInput.sendKeys(uuidEva);
  }

  async getUuidEvaInput() {
    return this.uuidEvaInput.getAttribute('value');
  }

  async setUuidRequiredEvaInput(uuidRequiredEva) {
    await this.uuidRequiredEvaInput.sendKeys(uuidRequiredEva);
  }

  async getUuidRequiredEvaInput() {
    return this.uuidRequiredEvaInput.getAttribute('value');
  }

  async setByteImageEvaInput(byteImageEva) {
    await this.byteImageEvaInput.sendKeys(byteImageEva);
  }

  async getByteImageEvaInput() {
    return this.byteImageEvaInput.getAttribute('value');
  }

  async setByteImageRequiredEvaInput(byteImageRequiredEva) {
    await this.byteImageRequiredEvaInput.sendKeys(byteImageRequiredEva);
  }

  async getByteImageRequiredEvaInput() {
    return this.byteImageRequiredEvaInput.getAttribute('value');
  }

  async setByteImageMinbytesEvaInput(byteImageMinbytesEva) {
    await this.byteImageMinbytesEvaInput.sendKeys(byteImageMinbytesEva);
  }

  async getByteImageMinbytesEvaInput() {
    return this.byteImageMinbytesEvaInput.getAttribute('value');
  }

  async setByteImageMaxbytesEvaInput(byteImageMaxbytesEva) {
    await this.byteImageMaxbytesEvaInput.sendKeys(byteImageMaxbytesEva);
  }

  async getByteImageMaxbytesEvaInput() {
    return this.byteImageMaxbytesEvaInput.getAttribute('value');
  }

  async setByteAnyEvaInput(byteAnyEva) {
    await this.byteAnyEvaInput.sendKeys(byteAnyEva);
  }

  async getByteAnyEvaInput() {
    return this.byteAnyEvaInput.getAttribute('value');
  }

  async setByteAnyRequiredEvaInput(byteAnyRequiredEva) {
    await this.byteAnyRequiredEvaInput.sendKeys(byteAnyRequiredEva);
  }

  async getByteAnyRequiredEvaInput() {
    return this.byteAnyRequiredEvaInput.getAttribute('value');
  }

  async setByteAnyMinbytesEvaInput(byteAnyMinbytesEva) {
    await this.byteAnyMinbytesEvaInput.sendKeys(byteAnyMinbytesEva);
  }

  async getByteAnyMinbytesEvaInput() {
    return this.byteAnyMinbytesEvaInput.getAttribute('value');
  }

  async setByteAnyMaxbytesEvaInput(byteAnyMaxbytesEva) {
    await this.byteAnyMaxbytesEvaInput.sendKeys(byteAnyMaxbytesEva);
  }

  async getByteAnyMaxbytesEvaInput() {
    return this.byteAnyMaxbytesEvaInput.getAttribute('value');
  }

  async setByteTextEvaInput(byteTextEva) {
    await this.byteTextEvaInput.sendKeys(byteTextEva);
  }

  async getByteTextEvaInput() {
    return this.byteTextEvaInput.getAttribute('value');
  }

  async setByteTextRequiredEvaInput(byteTextRequiredEva) {
    await this.byteTextRequiredEvaInput.sendKeys(byteTextRequiredEva);
  }

  async getByteTextRequiredEvaInput() {
    return this.byteTextRequiredEvaInput.getAttribute('value');
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
