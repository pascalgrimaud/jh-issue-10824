import { element, by, ElementFinder } from 'protractor';

export default class FieldTestPaginationEntityUpdatePage {
  pageTitle: ElementFinder = element(by.id('travisNg2App.fieldTestPaginationEntity.home.createOrEditLabel'));
  saveButton: ElementFinder = element(by.id('save-entity'));
  cancelButton: ElementFinder = element(by.id('cancel-save'));
  stringAliceInput: ElementFinder = element(by.css('input#field-test-pagination-entity-stringAlice'));
  stringRequiredAliceInput: ElementFinder = element(by.css('input#field-test-pagination-entity-stringRequiredAlice'));
  stringMinlengthAliceInput: ElementFinder = element(by.css('input#field-test-pagination-entity-stringMinlengthAlice'));
  stringMaxlengthAliceInput: ElementFinder = element(by.css('input#field-test-pagination-entity-stringMaxlengthAlice'));
  stringPatternAliceInput: ElementFinder = element(by.css('input#field-test-pagination-entity-stringPatternAlice'));
  integerAliceInput: ElementFinder = element(by.css('input#field-test-pagination-entity-integerAlice'));
  integerRequiredAliceInput: ElementFinder = element(by.css('input#field-test-pagination-entity-integerRequiredAlice'));
  integerMinAliceInput: ElementFinder = element(by.css('input#field-test-pagination-entity-integerMinAlice'));
  integerMaxAliceInput: ElementFinder = element(by.css('input#field-test-pagination-entity-integerMaxAlice'));
  longAliceInput: ElementFinder = element(by.css('input#field-test-pagination-entity-longAlice'));
  longRequiredAliceInput: ElementFinder = element(by.css('input#field-test-pagination-entity-longRequiredAlice'));
  longMinAliceInput: ElementFinder = element(by.css('input#field-test-pagination-entity-longMinAlice'));
  longMaxAliceInput: ElementFinder = element(by.css('input#field-test-pagination-entity-longMaxAlice'));
  floatAliceInput: ElementFinder = element(by.css('input#field-test-pagination-entity-floatAlice'));
  floatRequiredAliceInput: ElementFinder = element(by.css('input#field-test-pagination-entity-floatRequiredAlice'));
  floatMinAliceInput: ElementFinder = element(by.css('input#field-test-pagination-entity-floatMinAlice'));
  floatMaxAliceInput: ElementFinder = element(by.css('input#field-test-pagination-entity-floatMaxAlice'));
  doubleRequiredAliceInput: ElementFinder = element(by.css('input#field-test-pagination-entity-doubleRequiredAlice'));
  doubleMinAliceInput: ElementFinder = element(by.css('input#field-test-pagination-entity-doubleMinAlice'));
  doubleMaxAliceInput: ElementFinder = element(by.css('input#field-test-pagination-entity-doubleMaxAlice'));
  bigDecimalRequiredAliceInput: ElementFinder = element(by.css('input#field-test-pagination-entity-bigDecimalRequiredAlice'));
  bigDecimalMinAliceInput: ElementFinder = element(by.css('input#field-test-pagination-entity-bigDecimalMinAlice'));
  bigDecimalMaxAliceInput: ElementFinder = element(by.css('input#field-test-pagination-entity-bigDecimalMaxAlice'));
  localDateAliceInput: ElementFinder = element(by.css('input#field-test-pagination-entity-localDateAlice'));
  localDateRequiredAliceInput: ElementFinder = element(by.css('input#field-test-pagination-entity-localDateRequiredAlice'));
  instantAliceInput: ElementFinder = element(by.css('input#field-test-pagination-entity-instantAlice'));
  instanteRequiredAliceInput: ElementFinder = element(by.css('input#field-test-pagination-entity-instanteRequiredAlice'));
  zonedDateTimeAliceInput: ElementFinder = element(by.css('input#field-test-pagination-entity-zonedDateTimeAlice'));
  zonedDateTimeRequiredAliceInput: ElementFinder = element(by.css('input#field-test-pagination-entity-zonedDateTimeRequiredAlice'));
  durationAliceInput: ElementFinder = element(by.css('input#field-test-pagination-entity-durationAlice'));
  durationRequiredAliceInput: ElementFinder = element(by.css('input#field-test-pagination-entity-durationRequiredAlice'));
  booleanAliceInput: ElementFinder = element(by.css('input#field-test-pagination-entity-booleanAlice'));
  booleanRequiredAliceInput: ElementFinder = element(by.css('input#field-test-pagination-entity-booleanRequiredAlice'));
  enumAliceSelect: ElementFinder = element(by.css('select#field-test-pagination-entity-enumAlice'));
  enumRequiredAliceSelect: ElementFinder = element(by.css('select#field-test-pagination-entity-enumRequiredAlice'));
  uuidAliceInput: ElementFinder = element(by.css('input#field-test-pagination-entity-uuidAlice'));
  uuidRequiredAliceInput: ElementFinder = element(by.css('input#field-test-pagination-entity-uuidRequiredAlice'));
  byteImageAliceInput: ElementFinder = element(by.css('input#file_byteImageAlice'));
  byteImageRequiredAliceInput: ElementFinder = element(by.css('input#file_byteImageRequiredAlice'));
  byteImageMinbytesAliceInput: ElementFinder = element(by.css('input#file_byteImageMinbytesAlice'));
  byteImageMaxbytesAliceInput: ElementFinder = element(by.css('input#file_byteImageMaxbytesAlice'));
  byteAnyAliceInput: ElementFinder = element(by.css('input#file_byteAnyAlice'));
  byteAnyRequiredAliceInput: ElementFinder = element(by.css('input#file_byteAnyRequiredAlice'));
  byteAnyMinbytesAliceInput: ElementFinder = element(by.css('input#file_byteAnyMinbytesAlice'));
  byteAnyMaxbytesAliceInput: ElementFinder = element(by.css('input#file_byteAnyMaxbytesAlice'));
  byteTextAliceInput: ElementFinder = element(by.css('textarea#field-test-pagination-entity-byteTextAlice'));
  byteTextRequiredAliceInput: ElementFinder = element(by.css('textarea#field-test-pagination-entity-byteTextRequiredAlice'));

  getPageTitle() {
    return this.pageTitle;
  }

  async setStringAliceInput(stringAlice) {
    await this.stringAliceInput.sendKeys(stringAlice);
  }

  async getStringAliceInput() {
    return this.stringAliceInput.getAttribute('value');
  }

  async setStringRequiredAliceInput(stringRequiredAlice) {
    await this.stringRequiredAliceInput.sendKeys(stringRequiredAlice);
  }

  async getStringRequiredAliceInput() {
    return this.stringRequiredAliceInput.getAttribute('value');
  }

  async setStringMinlengthAliceInput(stringMinlengthAlice) {
    await this.stringMinlengthAliceInput.sendKeys(stringMinlengthAlice);
  }

  async getStringMinlengthAliceInput() {
    return this.stringMinlengthAliceInput.getAttribute('value');
  }

  async setStringMaxlengthAliceInput(stringMaxlengthAlice) {
    await this.stringMaxlengthAliceInput.sendKeys(stringMaxlengthAlice);
  }

  async getStringMaxlengthAliceInput() {
    return this.stringMaxlengthAliceInput.getAttribute('value');
  }

  async setStringPatternAliceInput(stringPatternAlice) {
    await this.stringPatternAliceInput.sendKeys(stringPatternAlice);
  }

  async getStringPatternAliceInput() {
    return this.stringPatternAliceInput.getAttribute('value');
  }

  async setIntegerAliceInput(integerAlice) {
    await this.integerAliceInput.sendKeys(integerAlice);
  }

  async getIntegerAliceInput() {
    return this.integerAliceInput.getAttribute('value');
  }

  async setIntegerRequiredAliceInput(integerRequiredAlice) {
    await this.integerRequiredAliceInput.sendKeys(integerRequiredAlice);
  }

  async getIntegerRequiredAliceInput() {
    return this.integerRequiredAliceInput.getAttribute('value');
  }

  async setIntegerMinAliceInput(integerMinAlice) {
    await this.integerMinAliceInput.sendKeys(integerMinAlice);
  }

  async getIntegerMinAliceInput() {
    return this.integerMinAliceInput.getAttribute('value');
  }

  async setIntegerMaxAliceInput(integerMaxAlice) {
    await this.integerMaxAliceInput.sendKeys(integerMaxAlice);
  }

  async getIntegerMaxAliceInput() {
    return this.integerMaxAliceInput.getAttribute('value');
  }

  async setLongAliceInput(longAlice) {
    await this.longAliceInput.sendKeys(longAlice);
  }

  async getLongAliceInput() {
    return this.longAliceInput.getAttribute('value');
  }

  async setLongRequiredAliceInput(longRequiredAlice) {
    await this.longRequiredAliceInput.sendKeys(longRequiredAlice);
  }

  async getLongRequiredAliceInput() {
    return this.longRequiredAliceInput.getAttribute('value');
  }

  async setLongMinAliceInput(longMinAlice) {
    await this.longMinAliceInput.sendKeys(longMinAlice);
  }

  async getLongMinAliceInput() {
    return this.longMinAliceInput.getAttribute('value');
  }

  async setLongMaxAliceInput(longMaxAlice) {
    await this.longMaxAliceInput.sendKeys(longMaxAlice);
  }

  async getLongMaxAliceInput() {
    return this.longMaxAliceInput.getAttribute('value');
  }

  async setFloatAliceInput(floatAlice) {
    await this.floatAliceInput.sendKeys(floatAlice);
  }

  async getFloatAliceInput() {
    return this.floatAliceInput.getAttribute('value');
  }

  async setFloatRequiredAliceInput(floatRequiredAlice) {
    await this.floatRequiredAliceInput.sendKeys(floatRequiredAlice);
  }

  async getFloatRequiredAliceInput() {
    return this.floatRequiredAliceInput.getAttribute('value');
  }

  async setFloatMinAliceInput(floatMinAlice) {
    await this.floatMinAliceInput.sendKeys(floatMinAlice);
  }

  async getFloatMinAliceInput() {
    return this.floatMinAliceInput.getAttribute('value');
  }

  async setFloatMaxAliceInput(floatMaxAlice) {
    await this.floatMaxAliceInput.sendKeys(floatMaxAlice);
  }

  async getFloatMaxAliceInput() {
    return this.floatMaxAliceInput.getAttribute('value');
  }

  async setDoubleRequiredAliceInput(doubleRequiredAlice) {
    await this.doubleRequiredAliceInput.sendKeys(doubleRequiredAlice);
  }

  async getDoubleRequiredAliceInput() {
    return this.doubleRequiredAliceInput.getAttribute('value');
  }

  async setDoubleMinAliceInput(doubleMinAlice) {
    await this.doubleMinAliceInput.sendKeys(doubleMinAlice);
  }

  async getDoubleMinAliceInput() {
    return this.doubleMinAliceInput.getAttribute('value');
  }

  async setDoubleMaxAliceInput(doubleMaxAlice) {
    await this.doubleMaxAliceInput.sendKeys(doubleMaxAlice);
  }

  async getDoubleMaxAliceInput() {
    return this.doubleMaxAliceInput.getAttribute('value');
  }

  async setBigDecimalRequiredAliceInput(bigDecimalRequiredAlice) {
    await this.bigDecimalRequiredAliceInput.sendKeys(bigDecimalRequiredAlice);
  }

  async getBigDecimalRequiredAliceInput() {
    return this.bigDecimalRequiredAliceInput.getAttribute('value');
  }

  async setBigDecimalMinAliceInput(bigDecimalMinAlice) {
    await this.bigDecimalMinAliceInput.sendKeys(bigDecimalMinAlice);
  }

  async getBigDecimalMinAliceInput() {
    return this.bigDecimalMinAliceInput.getAttribute('value');
  }

  async setBigDecimalMaxAliceInput(bigDecimalMaxAlice) {
    await this.bigDecimalMaxAliceInput.sendKeys(bigDecimalMaxAlice);
  }

  async getBigDecimalMaxAliceInput() {
    return this.bigDecimalMaxAliceInput.getAttribute('value');
  }

  async setLocalDateAliceInput(localDateAlice) {
    await this.localDateAliceInput.sendKeys(localDateAlice);
  }

  async getLocalDateAliceInput() {
    return this.localDateAliceInput.getAttribute('value');
  }

  async setLocalDateRequiredAliceInput(localDateRequiredAlice) {
    await this.localDateRequiredAliceInput.sendKeys(localDateRequiredAlice);
  }

  async getLocalDateRequiredAliceInput() {
    return this.localDateRequiredAliceInput.getAttribute('value');
  }

  async setInstantAliceInput(instantAlice) {
    await this.instantAliceInput.sendKeys(instantAlice);
  }

  async getInstantAliceInput() {
    return this.instantAliceInput.getAttribute('value');
  }

  async setInstanteRequiredAliceInput(instanteRequiredAlice) {
    await this.instanteRequiredAliceInput.sendKeys(instanteRequiredAlice);
  }

  async getInstanteRequiredAliceInput() {
    return this.instanteRequiredAliceInput.getAttribute('value');
  }

  async setZonedDateTimeAliceInput(zonedDateTimeAlice) {
    await this.zonedDateTimeAliceInput.sendKeys(zonedDateTimeAlice);
  }

  async getZonedDateTimeAliceInput() {
    return this.zonedDateTimeAliceInput.getAttribute('value');
  }

  async setZonedDateTimeRequiredAliceInput(zonedDateTimeRequiredAlice) {
    await this.zonedDateTimeRequiredAliceInput.sendKeys(zonedDateTimeRequiredAlice);
  }

  async getZonedDateTimeRequiredAliceInput() {
    return this.zonedDateTimeRequiredAliceInput.getAttribute('value');
  }

  async setDurationAliceInput(durationAlice) {
    await this.durationAliceInput.sendKeys(durationAlice);
  }

  async getDurationAliceInput() {
    return this.durationAliceInput.getAttribute('value');
  }

  async setDurationRequiredAliceInput(durationRequiredAlice) {
    await this.durationRequiredAliceInput.sendKeys(durationRequiredAlice);
  }

  async getDurationRequiredAliceInput() {
    return this.durationRequiredAliceInput.getAttribute('value');
  }

  getBooleanAliceInput() {
    return this.booleanAliceInput;
  }
  getBooleanRequiredAliceInput() {
    return this.booleanRequiredAliceInput;
  }
  async setEnumAliceSelect(enumAlice) {
    await this.enumAliceSelect.sendKeys(enumAlice);
  }

  async getEnumAliceSelect() {
    return this.enumAliceSelect.element(by.css('option:checked')).getText();
  }

  async enumAliceSelectLastOption() {
    await this.enumAliceSelect
      .all(by.tagName('option'))
      .last()
      .click();
  }
  async setEnumRequiredAliceSelect(enumRequiredAlice) {
    await this.enumRequiredAliceSelect.sendKeys(enumRequiredAlice);
  }

  async getEnumRequiredAliceSelect() {
    return this.enumRequiredAliceSelect.element(by.css('option:checked')).getText();
  }

  async enumRequiredAliceSelectLastOption() {
    await this.enumRequiredAliceSelect
      .all(by.tagName('option'))
      .last()
      .click();
  }
  async setUuidAliceInput(uuidAlice) {
    await this.uuidAliceInput.sendKeys(uuidAlice);
  }

  async getUuidAliceInput() {
    return this.uuidAliceInput.getAttribute('value');
  }

  async setUuidRequiredAliceInput(uuidRequiredAlice) {
    await this.uuidRequiredAliceInput.sendKeys(uuidRequiredAlice);
  }

  async getUuidRequiredAliceInput() {
    return this.uuidRequiredAliceInput.getAttribute('value');
  }

  async setByteImageAliceInput(byteImageAlice) {
    await this.byteImageAliceInput.sendKeys(byteImageAlice);
  }

  async getByteImageAliceInput() {
    return this.byteImageAliceInput.getAttribute('value');
  }

  async setByteImageRequiredAliceInput(byteImageRequiredAlice) {
    await this.byteImageRequiredAliceInput.sendKeys(byteImageRequiredAlice);
  }

  async getByteImageRequiredAliceInput() {
    return this.byteImageRequiredAliceInput.getAttribute('value');
  }

  async setByteImageMinbytesAliceInput(byteImageMinbytesAlice) {
    await this.byteImageMinbytesAliceInput.sendKeys(byteImageMinbytesAlice);
  }

  async getByteImageMinbytesAliceInput() {
    return this.byteImageMinbytesAliceInput.getAttribute('value');
  }

  async setByteImageMaxbytesAliceInput(byteImageMaxbytesAlice) {
    await this.byteImageMaxbytesAliceInput.sendKeys(byteImageMaxbytesAlice);
  }

  async getByteImageMaxbytesAliceInput() {
    return this.byteImageMaxbytesAliceInput.getAttribute('value');
  }

  async setByteAnyAliceInput(byteAnyAlice) {
    await this.byteAnyAliceInput.sendKeys(byteAnyAlice);
  }

  async getByteAnyAliceInput() {
    return this.byteAnyAliceInput.getAttribute('value');
  }

  async setByteAnyRequiredAliceInput(byteAnyRequiredAlice) {
    await this.byteAnyRequiredAliceInput.sendKeys(byteAnyRequiredAlice);
  }

  async getByteAnyRequiredAliceInput() {
    return this.byteAnyRequiredAliceInput.getAttribute('value');
  }

  async setByteAnyMinbytesAliceInput(byteAnyMinbytesAlice) {
    await this.byteAnyMinbytesAliceInput.sendKeys(byteAnyMinbytesAlice);
  }

  async getByteAnyMinbytesAliceInput() {
    return this.byteAnyMinbytesAliceInput.getAttribute('value');
  }

  async setByteAnyMaxbytesAliceInput(byteAnyMaxbytesAlice) {
    await this.byteAnyMaxbytesAliceInput.sendKeys(byteAnyMaxbytesAlice);
  }

  async getByteAnyMaxbytesAliceInput() {
    return this.byteAnyMaxbytesAliceInput.getAttribute('value');
  }

  async setByteTextAliceInput(byteTextAlice) {
    await this.byteTextAliceInput.sendKeys(byteTextAlice);
  }

  async getByteTextAliceInput() {
    return this.byteTextAliceInput.getAttribute('value');
  }

  async setByteTextRequiredAliceInput(byteTextRequiredAlice) {
    await this.byteTextRequiredAliceInput.sendKeys(byteTextRequiredAlice);
  }

  async getByteTextRequiredAliceInput() {
    return this.byteTextRequiredAliceInput.getAttribute('value');
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
