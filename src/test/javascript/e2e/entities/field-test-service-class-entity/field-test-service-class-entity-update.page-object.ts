import { element, by, ElementFinder } from 'protractor';

export default class FieldTestServiceClassEntityUpdatePage {
  pageTitle: ElementFinder = element(by.id('travisNg2App.fieldTestServiceClassEntity.home.createOrEditLabel'));
  saveButton: ElementFinder = element(by.id('save-entity'));
  cancelButton: ElementFinder = element(by.id('cancel-save'));
  stringBobInput: ElementFinder = element(by.css('input#field-test-service-class-entity-stringBob'));
  stringRequiredBobInput: ElementFinder = element(by.css('input#field-test-service-class-entity-stringRequiredBob'));
  stringMinlengthBobInput: ElementFinder = element(by.css('input#field-test-service-class-entity-stringMinlengthBob'));
  stringMaxlengthBobInput: ElementFinder = element(by.css('input#field-test-service-class-entity-stringMaxlengthBob'));
  stringPatternBobInput: ElementFinder = element(by.css('input#field-test-service-class-entity-stringPatternBob'));
  integerBobInput: ElementFinder = element(by.css('input#field-test-service-class-entity-integerBob'));
  integerRequiredBobInput: ElementFinder = element(by.css('input#field-test-service-class-entity-integerRequiredBob'));
  integerMinBobInput: ElementFinder = element(by.css('input#field-test-service-class-entity-integerMinBob'));
  integerMaxBobInput: ElementFinder = element(by.css('input#field-test-service-class-entity-integerMaxBob'));
  longBobInput: ElementFinder = element(by.css('input#field-test-service-class-entity-longBob'));
  longRequiredBobInput: ElementFinder = element(by.css('input#field-test-service-class-entity-longRequiredBob'));
  longMinBobInput: ElementFinder = element(by.css('input#field-test-service-class-entity-longMinBob'));
  longMaxBobInput: ElementFinder = element(by.css('input#field-test-service-class-entity-longMaxBob'));
  floatBobInput: ElementFinder = element(by.css('input#field-test-service-class-entity-floatBob'));
  floatRequiredBobInput: ElementFinder = element(by.css('input#field-test-service-class-entity-floatRequiredBob'));
  floatMinBobInput: ElementFinder = element(by.css('input#field-test-service-class-entity-floatMinBob'));
  floatMaxBobInput: ElementFinder = element(by.css('input#field-test-service-class-entity-floatMaxBob'));
  doubleRequiredBobInput: ElementFinder = element(by.css('input#field-test-service-class-entity-doubleRequiredBob'));
  doubleMinBobInput: ElementFinder = element(by.css('input#field-test-service-class-entity-doubleMinBob'));
  doubleMaxBobInput: ElementFinder = element(by.css('input#field-test-service-class-entity-doubleMaxBob'));
  bigDecimalRequiredBobInput: ElementFinder = element(by.css('input#field-test-service-class-entity-bigDecimalRequiredBob'));
  bigDecimalMinBobInput: ElementFinder = element(by.css('input#field-test-service-class-entity-bigDecimalMinBob'));
  bigDecimalMaxBobInput: ElementFinder = element(by.css('input#field-test-service-class-entity-bigDecimalMaxBob'));
  localDateBobInput: ElementFinder = element(by.css('input#field-test-service-class-entity-localDateBob'));
  localDateRequiredBobInput: ElementFinder = element(by.css('input#field-test-service-class-entity-localDateRequiredBob'));
  instantBobInput: ElementFinder = element(by.css('input#field-test-service-class-entity-instantBob'));
  instanteRequiredBobInput: ElementFinder = element(by.css('input#field-test-service-class-entity-instanteRequiredBob'));
  zonedDateTimeBobInput: ElementFinder = element(by.css('input#field-test-service-class-entity-zonedDateTimeBob'));
  zonedDateTimeRequiredBobInput: ElementFinder = element(by.css('input#field-test-service-class-entity-zonedDateTimeRequiredBob'));
  durationBobInput: ElementFinder = element(by.css('input#field-test-service-class-entity-durationBob'));
  durationRequiredBobInput: ElementFinder = element(by.css('input#field-test-service-class-entity-durationRequiredBob'));
  booleanBobInput: ElementFinder = element(by.css('input#field-test-service-class-entity-booleanBob'));
  booleanRequiredBobInput: ElementFinder = element(by.css('input#field-test-service-class-entity-booleanRequiredBob'));
  enumBobSelect: ElementFinder = element(by.css('select#field-test-service-class-entity-enumBob'));
  enumRequiredBobSelect: ElementFinder = element(by.css('select#field-test-service-class-entity-enumRequiredBob'));
  uuidBobInput: ElementFinder = element(by.css('input#field-test-service-class-entity-uuidBob'));
  uuidRequiredBobInput: ElementFinder = element(by.css('input#field-test-service-class-entity-uuidRequiredBob'));
  byteImageBobInput: ElementFinder = element(by.css('input#file_byteImageBob'));
  byteImageRequiredBobInput: ElementFinder = element(by.css('input#file_byteImageRequiredBob'));
  byteImageMinbytesBobInput: ElementFinder = element(by.css('input#file_byteImageMinbytesBob'));
  byteImageMaxbytesBobInput: ElementFinder = element(by.css('input#file_byteImageMaxbytesBob'));
  byteAnyBobInput: ElementFinder = element(by.css('input#file_byteAnyBob'));
  byteAnyRequiredBobInput: ElementFinder = element(by.css('input#file_byteAnyRequiredBob'));
  byteAnyMinbytesBobInput: ElementFinder = element(by.css('input#file_byteAnyMinbytesBob'));
  byteAnyMaxbytesBobInput: ElementFinder = element(by.css('input#file_byteAnyMaxbytesBob'));
  byteTextBobInput: ElementFinder = element(by.css('textarea#field-test-service-class-entity-byteTextBob'));
  byteTextRequiredBobInput: ElementFinder = element(by.css('textarea#field-test-service-class-entity-byteTextRequiredBob'));

  getPageTitle() {
    return this.pageTitle;
  }

  async setStringBobInput(stringBob) {
    await this.stringBobInput.sendKeys(stringBob);
  }

  async getStringBobInput() {
    return this.stringBobInput.getAttribute('value');
  }

  async setStringRequiredBobInput(stringRequiredBob) {
    await this.stringRequiredBobInput.sendKeys(stringRequiredBob);
  }

  async getStringRequiredBobInput() {
    return this.stringRequiredBobInput.getAttribute('value');
  }

  async setStringMinlengthBobInput(stringMinlengthBob) {
    await this.stringMinlengthBobInput.sendKeys(stringMinlengthBob);
  }

  async getStringMinlengthBobInput() {
    return this.stringMinlengthBobInput.getAttribute('value');
  }

  async setStringMaxlengthBobInput(stringMaxlengthBob) {
    await this.stringMaxlengthBobInput.sendKeys(stringMaxlengthBob);
  }

  async getStringMaxlengthBobInput() {
    return this.stringMaxlengthBobInput.getAttribute('value');
  }

  async setStringPatternBobInput(stringPatternBob) {
    await this.stringPatternBobInput.sendKeys(stringPatternBob);
  }

  async getStringPatternBobInput() {
    return this.stringPatternBobInput.getAttribute('value');
  }

  async setIntegerBobInput(integerBob) {
    await this.integerBobInput.sendKeys(integerBob);
  }

  async getIntegerBobInput() {
    return this.integerBobInput.getAttribute('value');
  }

  async setIntegerRequiredBobInput(integerRequiredBob) {
    await this.integerRequiredBobInput.sendKeys(integerRequiredBob);
  }

  async getIntegerRequiredBobInput() {
    return this.integerRequiredBobInput.getAttribute('value');
  }

  async setIntegerMinBobInput(integerMinBob) {
    await this.integerMinBobInput.sendKeys(integerMinBob);
  }

  async getIntegerMinBobInput() {
    return this.integerMinBobInput.getAttribute('value');
  }

  async setIntegerMaxBobInput(integerMaxBob) {
    await this.integerMaxBobInput.sendKeys(integerMaxBob);
  }

  async getIntegerMaxBobInput() {
    return this.integerMaxBobInput.getAttribute('value');
  }

  async setLongBobInput(longBob) {
    await this.longBobInput.sendKeys(longBob);
  }

  async getLongBobInput() {
    return this.longBobInput.getAttribute('value');
  }

  async setLongRequiredBobInput(longRequiredBob) {
    await this.longRequiredBobInput.sendKeys(longRequiredBob);
  }

  async getLongRequiredBobInput() {
    return this.longRequiredBobInput.getAttribute('value');
  }

  async setLongMinBobInput(longMinBob) {
    await this.longMinBobInput.sendKeys(longMinBob);
  }

  async getLongMinBobInput() {
    return this.longMinBobInput.getAttribute('value');
  }

  async setLongMaxBobInput(longMaxBob) {
    await this.longMaxBobInput.sendKeys(longMaxBob);
  }

  async getLongMaxBobInput() {
    return this.longMaxBobInput.getAttribute('value');
  }

  async setFloatBobInput(floatBob) {
    await this.floatBobInput.sendKeys(floatBob);
  }

  async getFloatBobInput() {
    return this.floatBobInput.getAttribute('value');
  }

  async setFloatRequiredBobInput(floatRequiredBob) {
    await this.floatRequiredBobInput.sendKeys(floatRequiredBob);
  }

  async getFloatRequiredBobInput() {
    return this.floatRequiredBobInput.getAttribute('value');
  }

  async setFloatMinBobInput(floatMinBob) {
    await this.floatMinBobInput.sendKeys(floatMinBob);
  }

  async getFloatMinBobInput() {
    return this.floatMinBobInput.getAttribute('value');
  }

  async setFloatMaxBobInput(floatMaxBob) {
    await this.floatMaxBobInput.sendKeys(floatMaxBob);
  }

  async getFloatMaxBobInput() {
    return this.floatMaxBobInput.getAttribute('value');
  }

  async setDoubleRequiredBobInput(doubleRequiredBob) {
    await this.doubleRequiredBobInput.sendKeys(doubleRequiredBob);
  }

  async getDoubleRequiredBobInput() {
    return this.doubleRequiredBobInput.getAttribute('value');
  }

  async setDoubleMinBobInput(doubleMinBob) {
    await this.doubleMinBobInput.sendKeys(doubleMinBob);
  }

  async getDoubleMinBobInput() {
    return this.doubleMinBobInput.getAttribute('value');
  }

  async setDoubleMaxBobInput(doubleMaxBob) {
    await this.doubleMaxBobInput.sendKeys(doubleMaxBob);
  }

  async getDoubleMaxBobInput() {
    return this.doubleMaxBobInput.getAttribute('value');
  }

  async setBigDecimalRequiredBobInput(bigDecimalRequiredBob) {
    await this.bigDecimalRequiredBobInput.sendKeys(bigDecimalRequiredBob);
  }

  async getBigDecimalRequiredBobInput() {
    return this.bigDecimalRequiredBobInput.getAttribute('value');
  }

  async setBigDecimalMinBobInput(bigDecimalMinBob) {
    await this.bigDecimalMinBobInput.sendKeys(bigDecimalMinBob);
  }

  async getBigDecimalMinBobInput() {
    return this.bigDecimalMinBobInput.getAttribute('value');
  }

  async setBigDecimalMaxBobInput(bigDecimalMaxBob) {
    await this.bigDecimalMaxBobInput.sendKeys(bigDecimalMaxBob);
  }

  async getBigDecimalMaxBobInput() {
    return this.bigDecimalMaxBobInput.getAttribute('value');
  }

  async setLocalDateBobInput(localDateBob) {
    await this.localDateBobInput.sendKeys(localDateBob);
  }

  async getLocalDateBobInput() {
    return this.localDateBobInput.getAttribute('value');
  }

  async setLocalDateRequiredBobInput(localDateRequiredBob) {
    await this.localDateRequiredBobInput.sendKeys(localDateRequiredBob);
  }

  async getLocalDateRequiredBobInput() {
    return this.localDateRequiredBobInput.getAttribute('value');
  }

  async setInstantBobInput(instantBob) {
    await this.instantBobInput.sendKeys(instantBob);
  }

  async getInstantBobInput() {
    return this.instantBobInput.getAttribute('value');
  }

  async setInstanteRequiredBobInput(instanteRequiredBob) {
    await this.instanteRequiredBobInput.sendKeys(instanteRequiredBob);
  }

  async getInstanteRequiredBobInput() {
    return this.instanteRequiredBobInput.getAttribute('value');
  }

  async setZonedDateTimeBobInput(zonedDateTimeBob) {
    await this.zonedDateTimeBobInput.sendKeys(zonedDateTimeBob);
  }

  async getZonedDateTimeBobInput() {
    return this.zonedDateTimeBobInput.getAttribute('value');
  }

  async setZonedDateTimeRequiredBobInput(zonedDateTimeRequiredBob) {
    await this.zonedDateTimeRequiredBobInput.sendKeys(zonedDateTimeRequiredBob);
  }

  async getZonedDateTimeRequiredBobInput() {
    return this.zonedDateTimeRequiredBobInput.getAttribute('value');
  }

  async setDurationBobInput(durationBob) {
    await this.durationBobInput.sendKeys(durationBob);
  }

  async getDurationBobInput() {
    return this.durationBobInput.getAttribute('value');
  }

  async setDurationRequiredBobInput(durationRequiredBob) {
    await this.durationRequiredBobInput.sendKeys(durationRequiredBob);
  }

  async getDurationRequiredBobInput() {
    return this.durationRequiredBobInput.getAttribute('value');
  }

  getBooleanBobInput() {
    return this.booleanBobInput;
  }
  getBooleanRequiredBobInput() {
    return this.booleanRequiredBobInput;
  }
  async setEnumBobSelect(enumBob) {
    await this.enumBobSelect.sendKeys(enumBob);
  }

  async getEnumBobSelect() {
    return this.enumBobSelect.element(by.css('option:checked')).getText();
  }

  async enumBobSelectLastOption() {
    await this.enumBobSelect
      .all(by.tagName('option'))
      .last()
      .click();
  }
  async setEnumRequiredBobSelect(enumRequiredBob) {
    await this.enumRequiredBobSelect.sendKeys(enumRequiredBob);
  }

  async getEnumRequiredBobSelect() {
    return this.enumRequiredBobSelect.element(by.css('option:checked')).getText();
  }

  async enumRequiredBobSelectLastOption() {
    await this.enumRequiredBobSelect
      .all(by.tagName('option'))
      .last()
      .click();
  }
  async setUuidBobInput(uuidBob) {
    await this.uuidBobInput.sendKeys(uuidBob);
  }

  async getUuidBobInput() {
    return this.uuidBobInput.getAttribute('value');
  }

  async setUuidRequiredBobInput(uuidRequiredBob) {
    await this.uuidRequiredBobInput.sendKeys(uuidRequiredBob);
  }

  async getUuidRequiredBobInput() {
    return this.uuidRequiredBobInput.getAttribute('value');
  }

  async setByteImageBobInput(byteImageBob) {
    await this.byteImageBobInput.sendKeys(byteImageBob);
  }

  async getByteImageBobInput() {
    return this.byteImageBobInput.getAttribute('value');
  }

  async setByteImageRequiredBobInput(byteImageRequiredBob) {
    await this.byteImageRequiredBobInput.sendKeys(byteImageRequiredBob);
  }

  async getByteImageRequiredBobInput() {
    return this.byteImageRequiredBobInput.getAttribute('value');
  }

  async setByteImageMinbytesBobInput(byteImageMinbytesBob) {
    await this.byteImageMinbytesBobInput.sendKeys(byteImageMinbytesBob);
  }

  async getByteImageMinbytesBobInput() {
    return this.byteImageMinbytesBobInput.getAttribute('value');
  }

  async setByteImageMaxbytesBobInput(byteImageMaxbytesBob) {
    await this.byteImageMaxbytesBobInput.sendKeys(byteImageMaxbytesBob);
  }

  async getByteImageMaxbytesBobInput() {
    return this.byteImageMaxbytesBobInput.getAttribute('value');
  }

  async setByteAnyBobInput(byteAnyBob) {
    await this.byteAnyBobInput.sendKeys(byteAnyBob);
  }

  async getByteAnyBobInput() {
    return this.byteAnyBobInput.getAttribute('value');
  }

  async setByteAnyRequiredBobInput(byteAnyRequiredBob) {
    await this.byteAnyRequiredBobInput.sendKeys(byteAnyRequiredBob);
  }

  async getByteAnyRequiredBobInput() {
    return this.byteAnyRequiredBobInput.getAttribute('value');
  }

  async setByteAnyMinbytesBobInput(byteAnyMinbytesBob) {
    await this.byteAnyMinbytesBobInput.sendKeys(byteAnyMinbytesBob);
  }

  async getByteAnyMinbytesBobInput() {
    return this.byteAnyMinbytesBobInput.getAttribute('value');
  }

  async setByteAnyMaxbytesBobInput(byteAnyMaxbytesBob) {
    await this.byteAnyMaxbytesBobInput.sendKeys(byteAnyMaxbytesBob);
  }

  async getByteAnyMaxbytesBobInput() {
    return this.byteAnyMaxbytesBobInput.getAttribute('value');
  }

  async setByteTextBobInput(byteTextBob) {
    await this.byteTextBobInput.sendKeys(byteTextBob);
  }

  async getByteTextBobInput() {
    return this.byteTextBobInput.getAttribute('value');
  }

  async setByteTextRequiredBobInput(byteTextRequiredBob) {
    await this.byteTextRequiredBobInput.sendKeys(byteTextRequiredBob);
  }

  async getByteTextRequiredBobInput() {
    return this.byteTextRequiredBobInput.getAttribute('value');
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
