import { element, by, ElementFinder } from 'protractor';

export default class FieldTestServiceImplEntityUpdatePage {
  pageTitle: ElementFinder = element(by.id('travisNg2App.fieldTestServiceImplEntity.home.createOrEditLabel'));
  saveButton: ElementFinder = element(by.id('save-entity'));
  cancelButton: ElementFinder = element(by.id('cancel-save'));
  stringMikaInput: ElementFinder = element(by.css('input#field-test-service-impl-entity-stringMika'));
  stringRequiredMikaInput: ElementFinder = element(by.css('input#field-test-service-impl-entity-stringRequiredMika'));
  stringMinlengthMikaInput: ElementFinder = element(by.css('input#field-test-service-impl-entity-stringMinlengthMika'));
  stringMaxlengthMikaInput: ElementFinder = element(by.css('input#field-test-service-impl-entity-stringMaxlengthMika'));
  stringPatternMikaInput: ElementFinder = element(by.css('input#field-test-service-impl-entity-stringPatternMika'));
  integerMikaInput: ElementFinder = element(by.css('input#field-test-service-impl-entity-integerMika'));
  integerRequiredMikaInput: ElementFinder = element(by.css('input#field-test-service-impl-entity-integerRequiredMika'));
  integerMinMikaInput: ElementFinder = element(by.css('input#field-test-service-impl-entity-integerMinMika'));
  integerMaxMikaInput: ElementFinder = element(by.css('input#field-test-service-impl-entity-integerMaxMika'));
  longMikaInput: ElementFinder = element(by.css('input#field-test-service-impl-entity-longMika'));
  longRequiredMikaInput: ElementFinder = element(by.css('input#field-test-service-impl-entity-longRequiredMika'));
  longMinMikaInput: ElementFinder = element(by.css('input#field-test-service-impl-entity-longMinMika'));
  longMaxMikaInput: ElementFinder = element(by.css('input#field-test-service-impl-entity-longMaxMika'));
  floatMikaInput: ElementFinder = element(by.css('input#field-test-service-impl-entity-floatMika'));
  floatRequiredMikaInput: ElementFinder = element(by.css('input#field-test-service-impl-entity-floatRequiredMika'));
  floatMinMikaInput: ElementFinder = element(by.css('input#field-test-service-impl-entity-floatMinMika'));
  floatMaxMikaInput: ElementFinder = element(by.css('input#field-test-service-impl-entity-floatMaxMika'));
  doubleRequiredMikaInput: ElementFinder = element(by.css('input#field-test-service-impl-entity-doubleRequiredMika'));
  doubleMinMikaInput: ElementFinder = element(by.css('input#field-test-service-impl-entity-doubleMinMika'));
  doubleMaxMikaInput: ElementFinder = element(by.css('input#field-test-service-impl-entity-doubleMaxMika'));
  bigDecimalRequiredMikaInput: ElementFinder = element(by.css('input#field-test-service-impl-entity-bigDecimalRequiredMika'));
  bigDecimalMinMikaInput: ElementFinder = element(by.css('input#field-test-service-impl-entity-bigDecimalMinMika'));
  bigDecimalMaxMikaInput: ElementFinder = element(by.css('input#field-test-service-impl-entity-bigDecimalMaxMika'));
  localDateMikaInput: ElementFinder = element(by.css('input#field-test-service-impl-entity-localDateMika'));
  localDateRequiredMikaInput: ElementFinder = element(by.css('input#field-test-service-impl-entity-localDateRequiredMika'));
  instantMikaInput: ElementFinder = element(by.css('input#field-test-service-impl-entity-instantMika'));
  instanteRequiredMikaInput: ElementFinder = element(by.css('input#field-test-service-impl-entity-instanteRequiredMika'));
  zonedDateTimeMikaInput: ElementFinder = element(by.css('input#field-test-service-impl-entity-zonedDateTimeMika'));
  zonedDateTimeRequiredMikaInput: ElementFinder = element(by.css('input#field-test-service-impl-entity-zonedDateTimeRequiredMika'));
  durationMikaInput: ElementFinder = element(by.css('input#field-test-service-impl-entity-durationMika'));
  durationRequiredMikaInput: ElementFinder = element(by.css('input#field-test-service-impl-entity-durationRequiredMika'));
  booleanMikaInput: ElementFinder = element(by.css('input#field-test-service-impl-entity-booleanMika'));
  booleanRequiredMikaInput: ElementFinder = element(by.css('input#field-test-service-impl-entity-booleanRequiredMika'));
  enumMikaSelect: ElementFinder = element(by.css('select#field-test-service-impl-entity-enumMika'));
  enumRequiredMikaSelect: ElementFinder = element(by.css('select#field-test-service-impl-entity-enumRequiredMika'));
  uuidMikaInput: ElementFinder = element(by.css('input#field-test-service-impl-entity-uuidMika'));
  uuidRequiredMikaInput: ElementFinder = element(by.css('input#field-test-service-impl-entity-uuidRequiredMika'));
  byteImageMikaInput: ElementFinder = element(by.css('input#file_byteImageMika'));
  byteImageRequiredMikaInput: ElementFinder = element(by.css('input#file_byteImageRequiredMika'));
  byteImageMinbytesMikaInput: ElementFinder = element(by.css('input#file_byteImageMinbytesMika'));
  byteImageMaxbytesMikaInput: ElementFinder = element(by.css('input#file_byteImageMaxbytesMika'));
  byteAnyMikaInput: ElementFinder = element(by.css('input#file_byteAnyMika'));
  byteAnyRequiredMikaInput: ElementFinder = element(by.css('input#file_byteAnyRequiredMika'));
  byteAnyMinbytesMikaInput: ElementFinder = element(by.css('input#file_byteAnyMinbytesMika'));
  byteAnyMaxbytesMikaInput: ElementFinder = element(by.css('input#file_byteAnyMaxbytesMika'));
  byteTextMikaInput: ElementFinder = element(by.css('textarea#field-test-service-impl-entity-byteTextMika'));
  byteTextRequiredMikaInput: ElementFinder = element(by.css('textarea#field-test-service-impl-entity-byteTextRequiredMika'));

  getPageTitle() {
    return this.pageTitle;
  }

  async setStringMikaInput(stringMika) {
    await this.stringMikaInput.sendKeys(stringMika);
  }

  async getStringMikaInput() {
    return this.stringMikaInput.getAttribute('value');
  }

  async setStringRequiredMikaInput(stringRequiredMika) {
    await this.stringRequiredMikaInput.sendKeys(stringRequiredMika);
  }

  async getStringRequiredMikaInput() {
    return this.stringRequiredMikaInput.getAttribute('value');
  }

  async setStringMinlengthMikaInput(stringMinlengthMika) {
    await this.stringMinlengthMikaInput.sendKeys(stringMinlengthMika);
  }

  async getStringMinlengthMikaInput() {
    return this.stringMinlengthMikaInput.getAttribute('value');
  }

  async setStringMaxlengthMikaInput(stringMaxlengthMika) {
    await this.stringMaxlengthMikaInput.sendKeys(stringMaxlengthMika);
  }

  async getStringMaxlengthMikaInput() {
    return this.stringMaxlengthMikaInput.getAttribute('value');
  }

  async setStringPatternMikaInput(stringPatternMika) {
    await this.stringPatternMikaInput.sendKeys(stringPatternMika);
  }

  async getStringPatternMikaInput() {
    return this.stringPatternMikaInput.getAttribute('value');
  }

  async setIntegerMikaInput(integerMika) {
    await this.integerMikaInput.sendKeys(integerMika);
  }

  async getIntegerMikaInput() {
    return this.integerMikaInput.getAttribute('value');
  }

  async setIntegerRequiredMikaInput(integerRequiredMika) {
    await this.integerRequiredMikaInput.sendKeys(integerRequiredMika);
  }

  async getIntegerRequiredMikaInput() {
    return this.integerRequiredMikaInput.getAttribute('value');
  }

  async setIntegerMinMikaInput(integerMinMika) {
    await this.integerMinMikaInput.sendKeys(integerMinMika);
  }

  async getIntegerMinMikaInput() {
    return this.integerMinMikaInput.getAttribute('value');
  }

  async setIntegerMaxMikaInput(integerMaxMika) {
    await this.integerMaxMikaInput.sendKeys(integerMaxMika);
  }

  async getIntegerMaxMikaInput() {
    return this.integerMaxMikaInput.getAttribute('value');
  }

  async setLongMikaInput(longMika) {
    await this.longMikaInput.sendKeys(longMika);
  }

  async getLongMikaInput() {
    return this.longMikaInput.getAttribute('value');
  }

  async setLongRequiredMikaInput(longRequiredMika) {
    await this.longRequiredMikaInput.sendKeys(longRequiredMika);
  }

  async getLongRequiredMikaInput() {
    return this.longRequiredMikaInput.getAttribute('value');
  }

  async setLongMinMikaInput(longMinMika) {
    await this.longMinMikaInput.sendKeys(longMinMika);
  }

  async getLongMinMikaInput() {
    return this.longMinMikaInput.getAttribute('value');
  }

  async setLongMaxMikaInput(longMaxMika) {
    await this.longMaxMikaInput.sendKeys(longMaxMika);
  }

  async getLongMaxMikaInput() {
    return this.longMaxMikaInput.getAttribute('value');
  }

  async setFloatMikaInput(floatMika) {
    await this.floatMikaInput.sendKeys(floatMika);
  }

  async getFloatMikaInput() {
    return this.floatMikaInput.getAttribute('value');
  }

  async setFloatRequiredMikaInput(floatRequiredMika) {
    await this.floatRequiredMikaInput.sendKeys(floatRequiredMika);
  }

  async getFloatRequiredMikaInput() {
    return this.floatRequiredMikaInput.getAttribute('value');
  }

  async setFloatMinMikaInput(floatMinMika) {
    await this.floatMinMikaInput.sendKeys(floatMinMika);
  }

  async getFloatMinMikaInput() {
    return this.floatMinMikaInput.getAttribute('value');
  }

  async setFloatMaxMikaInput(floatMaxMika) {
    await this.floatMaxMikaInput.sendKeys(floatMaxMika);
  }

  async getFloatMaxMikaInput() {
    return this.floatMaxMikaInput.getAttribute('value');
  }

  async setDoubleRequiredMikaInput(doubleRequiredMika) {
    await this.doubleRequiredMikaInput.sendKeys(doubleRequiredMika);
  }

  async getDoubleRequiredMikaInput() {
    return this.doubleRequiredMikaInput.getAttribute('value');
  }

  async setDoubleMinMikaInput(doubleMinMika) {
    await this.doubleMinMikaInput.sendKeys(doubleMinMika);
  }

  async getDoubleMinMikaInput() {
    return this.doubleMinMikaInput.getAttribute('value');
  }

  async setDoubleMaxMikaInput(doubleMaxMika) {
    await this.doubleMaxMikaInput.sendKeys(doubleMaxMika);
  }

  async getDoubleMaxMikaInput() {
    return this.doubleMaxMikaInput.getAttribute('value');
  }

  async setBigDecimalRequiredMikaInput(bigDecimalRequiredMika) {
    await this.bigDecimalRequiredMikaInput.sendKeys(bigDecimalRequiredMika);
  }

  async getBigDecimalRequiredMikaInput() {
    return this.bigDecimalRequiredMikaInput.getAttribute('value');
  }

  async setBigDecimalMinMikaInput(bigDecimalMinMika) {
    await this.bigDecimalMinMikaInput.sendKeys(bigDecimalMinMika);
  }

  async getBigDecimalMinMikaInput() {
    return this.bigDecimalMinMikaInput.getAttribute('value');
  }

  async setBigDecimalMaxMikaInput(bigDecimalMaxMika) {
    await this.bigDecimalMaxMikaInput.sendKeys(bigDecimalMaxMika);
  }

  async getBigDecimalMaxMikaInput() {
    return this.bigDecimalMaxMikaInput.getAttribute('value');
  }

  async setLocalDateMikaInput(localDateMika) {
    await this.localDateMikaInput.sendKeys(localDateMika);
  }

  async getLocalDateMikaInput() {
    return this.localDateMikaInput.getAttribute('value');
  }

  async setLocalDateRequiredMikaInput(localDateRequiredMika) {
    await this.localDateRequiredMikaInput.sendKeys(localDateRequiredMika);
  }

  async getLocalDateRequiredMikaInput() {
    return this.localDateRequiredMikaInput.getAttribute('value');
  }

  async setInstantMikaInput(instantMika) {
    await this.instantMikaInput.sendKeys(instantMika);
  }

  async getInstantMikaInput() {
    return this.instantMikaInput.getAttribute('value');
  }

  async setInstanteRequiredMikaInput(instanteRequiredMika) {
    await this.instanteRequiredMikaInput.sendKeys(instanteRequiredMika);
  }

  async getInstanteRequiredMikaInput() {
    return this.instanteRequiredMikaInput.getAttribute('value');
  }

  async setZonedDateTimeMikaInput(zonedDateTimeMika) {
    await this.zonedDateTimeMikaInput.sendKeys(zonedDateTimeMika);
  }

  async getZonedDateTimeMikaInput() {
    return this.zonedDateTimeMikaInput.getAttribute('value');
  }

  async setZonedDateTimeRequiredMikaInput(zonedDateTimeRequiredMika) {
    await this.zonedDateTimeRequiredMikaInput.sendKeys(zonedDateTimeRequiredMika);
  }

  async getZonedDateTimeRequiredMikaInput() {
    return this.zonedDateTimeRequiredMikaInput.getAttribute('value');
  }

  async setDurationMikaInput(durationMika) {
    await this.durationMikaInput.sendKeys(durationMika);
  }

  async getDurationMikaInput() {
    return this.durationMikaInput.getAttribute('value');
  }

  async setDurationRequiredMikaInput(durationRequiredMika) {
    await this.durationRequiredMikaInput.sendKeys(durationRequiredMika);
  }

  async getDurationRequiredMikaInput() {
    return this.durationRequiredMikaInput.getAttribute('value');
  }

  getBooleanMikaInput() {
    return this.booleanMikaInput;
  }
  getBooleanRequiredMikaInput() {
    return this.booleanRequiredMikaInput;
  }
  async setEnumMikaSelect(enumMika) {
    await this.enumMikaSelect.sendKeys(enumMika);
  }

  async getEnumMikaSelect() {
    return this.enumMikaSelect.element(by.css('option:checked')).getText();
  }

  async enumMikaSelectLastOption() {
    await this.enumMikaSelect
      .all(by.tagName('option'))
      .last()
      .click();
  }
  async setEnumRequiredMikaSelect(enumRequiredMika) {
    await this.enumRequiredMikaSelect.sendKeys(enumRequiredMika);
  }

  async getEnumRequiredMikaSelect() {
    return this.enumRequiredMikaSelect.element(by.css('option:checked')).getText();
  }

  async enumRequiredMikaSelectLastOption() {
    await this.enumRequiredMikaSelect
      .all(by.tagName('option'))
      .last()
      .click();
  }
  async setUuidMikaInput(uuidMika) {
    await this.uuidMikaInput.sendKeys(uuidMika);
  }

  async getUuidMikaInput() {
    return this.uuidMikaInput.getAttribute('value');
  }

  async setUuidRequiredMikaInput(uuidRequiredMika) {
    await this.uuidRequiredMikaInput.sendKeys(uuidRequiredMika);
  }

  async getUuidRequiredMikaInput() {
    return this.uuidRequiredMikaInput.getAttribute('value');
  }

  async setByteImageMikaInput(byteImageMika) {
    await this.byteImageMikaInput.sendKeys(byteImageMika);
  }

  async getByteImageMikaInput() {
    return this.byteImageMikaInput.getAttribute('value');
  }

  async setByteImageRequiredMikaInput(byteImageRequiredMika) {
    await this.byteImageRequiredMikaInput.sendKeys(byteImageRequiredMika);
  }

  async getByteImageRequiredMikaInput() {
    return this.byteImageRequiredMikaInput.getAttribute('value');
  }

  async setByteImageMinbytesMikaInput(byteImageMinbytesMika) {
    await this.byteImageMinbytesMikaInput.sendKeys(byteImageMinbytesMika);
  }

  async getByteImageMinbytesMikaInput() {
    return this.byteImageMinbytesMikaInput.getAttribute('value');
  }

  async setByteImageMaxbytesMikaInput(byteImageMaxbytesMika) {
    await this.byteImageMaxbytesMikaInput.sendKeys(byteImageMaxbytesMika);
  }

  async getByteImageMaxbytesMikaInput() {
    return this.byteImageMaxbytesMikaInput.getAttribute('value');
  }

  async setByteAnyMikaInput(byteAnyMika) {
    await this.byteAnyMikaInput.sendKeys(byteAnyMika);
  }

  async getByteAnyMikaInput() {
    return this.byteAnyMikaInput.getAttribute('value');
  }

  async setByteAnyRequiredMikaInput(byteAnyRequiredMika) {
    await this.byteAnyRequiredMikaInput.sendKeys(byteAnyRequiredMika);
  }

  async getByteAnyRequiredMikaInput() {
    return this.byteAnyRequiredMikaInput.getAttribute('value');
  }

  async setByteAnyMinbytesMikaInput(byteAnyMinbytesMika) {
    await this.byteAnyMinbytesMikaInput.sendKeys(byteAnyMinbytesMika);
  }

  async getByteAnyMinbytesMikaInput() {
    return this.byteAnyMinbytesMikaInput.getAttribute('value');
  }

  async setByteAnyMaxbytesMikaInput(byteAnyMaxbytesMika) {
    await this.byteAnyMaxbytesMikaInput.sendKeys(byteAnyMaxbytesMika);
  }

  async getByteAnyMaxbytesMikaInput() {
    return this.byteAnyMaxbytesMikaInput.getAttribute('value');
  }

  async setByteTextMikaInput(byteTextMika) {
    await this.byteTextMikaInput.sendKeys(byteTextMika);
  }

  async getByteTextMikaInput() {
    return this.byteTextMikaInput.getAttribute('value');
  }

  async setByteTextRequiredMikaInput(byteTextRequiredMika) {
    await this.byteTextRequiredMikaInput.sendKeys(byteTextRequiredMika);
  }

  async getByteTextRequiredMikaInput() {
    return this.byteTextRequiredMikaInput.getAttribute('value');
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
