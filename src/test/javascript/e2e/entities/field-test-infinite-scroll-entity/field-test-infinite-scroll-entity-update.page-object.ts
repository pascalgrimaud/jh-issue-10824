import { element, by, ElementFinder } from 'protractor';

export default class FieldTestInfiniteScrollEntityUpdatePage {
  pageTitle: ElementFinder = element(by.id('travisNg2App.fieldTestInfiniteScrollEntity.home.createOrEditLabel'));
  saveButton: ElementFinder = element(by.id('save-entity'));
  cancelButton: ElementFinder = element(by.id('cancel-save'));
  stringHugoInput: ElementFinder = element(by.css('input#field-test-infinite-scroll-entity-stringHugo'));
  stringRequiredHugoInput: ElementFinder = element(by.css('input#field-test-infinite-scroll-entity-stringRequiredHugo'));
  stringMinlengthHugoInput: ElementFinder = element(by.css('input#field-test-infinite-scroll-entity-stringMinlengthHugo'));
  stringMaxlengthHugoInput: ElementFinder = element(by.css('input#field-test-infinite-scroll-entity-stringMaxlengthHugo'));
  stringPatternHugoInput: ElementFinder = element(by.css('input#field-test-infinite-scroll-entity-stringPatternHugo'));
  integerHugoInput: ElementFinder = element(by.css('input#field-test-infinite-scroll-entity-integerHugo'));
  integerRequiredHugoInput: ElementFinder = element(by.css('input#field-test-infinite-scroll-entity-integerRequiredHugo'));
  integerMinHugoInput: ElementFinder = element(by.css('input#field-test-infinite-scroll-entity-integerMinHugo'));
  integerMaxHugoInput: ElementFinder = element(by.css('input#field-test-infinite-scroll-entity-integerMaxHugo'));
  longHugoInput: ElementFinder = element(by.css('input#field-test-infinite-scroll-entity-longHugo'));
  longRequiredHugoInput: ElementFinder = element(by.css('input#field-test-infinite-scroll-entity-longRequiredHugo'));
  longMinHugoInput: ElementFinder = element(by.css('input#field-test-infinite-scroll-entity-longMinHugo'));
  longMaxHugoInput: ElementFinder = element(by.css('input#field-test-infinite-scroll-entity-longMaxHugo'));
  floatHugoInput: ElementFinder = element(by.css('input#field-test-infinite-scroll-entity-floatHugo'));
  floatRequiredHugoInput: ElementFinder = element(by.css('input#field-test-infinite-scroll-entity-floatRequiredHugo'));
  floatMinHugoInput: ElementFinder = element(by.css('input#field-test-infinite-scroll-entity-floatMinHugo'));
  floatMaxHugoInput: ElementFinder = element(by.css('input#field-test-infinite-scroll-entity-floatMaxHugo'));
  doubleRequiredHugoInput: ElementFinder = element(by.css('input#field-test-infinite-scroll-entity-doubleRequiredHugo'));
  doubleMinHugoInput: ElementFinder = element(by.css('input#field-test-infinite-scroll-entity-doubleMinHugo'));
  doubleMaxHugoInput: ElementFinder = element(by.css('input#field-test-infinite-scroll-entity-doubleMaxHugo'));
  bigDecimalRequiredHugoInput: ElementFinder = element(by.css('input#field-test-infinite-scroll-entity-bigDecimalRequiredHugo'));
  bigDecimalMinHugoInput: ElementFinder = element(by.css('input#field-test-infinite-scroll-entity-bigDecimalMinHugo'));
  bigDecimalMaxHugoInput: ElementFinder = element(by.css('input#field-test-infinite-scroll-entity-bigDecimalMaxHugo'));
  localDateHugoInput: ElementFinder = element(by.css('input#field-test-infinite-scroll-entity-localDateHugo'));
  localDateRequiredHugoInput: ElementFinder = element(by.css('input#field-test-infinite-scroll-entity-localDateRequiredHugo'));
  instantHugoInput: ElementFinder = element(by.css('input#field-test-infinite-scroll-entity-instantHugo'));
  instanteRequiredHugoInput: ElementFinder = element(by.css('input#field-test-infinite-scroll-entity-instanteRequiredHugo'));
  zonedDateTimeHugoInput: ElementFinder = element(by.css('input#field-test-infinite-scroll-entity-zonedDateTimeHugo'));
  zonedDateTimeRequiredHugoInput: ElementFinder = element(by.css('input#field-test-infinite-scroll-entity-zonedDateTimeRequiredHugo'));
  durationHugoInput: ElementFinder = element(by.css('input#field-test-infinite-scroll-entity-durationHugo'));
  durationRequiredHugoInput: ElementFinder = element(by.css('input#field-test-infinite-scroll-entity-durationRequiredHugo'));
  booleanHugoInput: ElementFinder = element(by.css('input#field-test-infinite-scroll-entity-booleanHugo'));
  booleanRequiredHugoInput: ElementFinder = element(by.css('input#field-test-infinite-scroll-entity-booleanRequiredHugo'));
  enumHugoSelect: ElementFinder = element(by.css('select#field-test-infinite-scroll-entity-enumHugo'));
  enumRequiredHugoSelect: ElementFinder = element(by.css('select#field-test-infinite-scroll-entity-enumRequiredHugo'));
  uuidHugoInput: ElementFinder = element(by.css('input#field-test-infinite-scroll-entity-uuidHugo'));
  uuidRequiredHugoInput: ElementFinder = element(by.css('input#field-test-infinite-scroll-entity-uuidRequiredHugo'));
  byteImageHugoInput: ElementFinder = element(by.css('input#file_byteImageHugo'));
  byteImageRequiredHugoInput: ElementFinder = element(by.css('input#file_byteImageRequiredHugo'));
  byteImageMinbytesHugoInput: ElementFinder = element(by.css('input#file_byteImageMinbytesHugo'));
  byteImageMaxbytesHugoInput: ElementFinder = element(by.css('input#file_byteImageMaxbytesHugo'));
  byteAnyHugoInput: ElementFinder = element(by.css('input#file_byteAnyHugo'));
  byteAnyRequiredHugoInput: ElementFinder = element(by.css('input#file_byteAnyRequiredHugo'));
  byteAnyMinbytesHugoInput: ElementFinder = element(by.css('input#file_byteAnyMinbytesHugo'));
  byteAnyMaxbytesHugoInput: ElementFinder = element(by.css('input#file_byteAnyMaxbytesHugo'));
  byteTextHugoInput: ElementFinder = element(by.css('textarea#field-test-infinite-scroll-entity-byteTextHugo'));
  byteTextRequiredHugoInput: ElementFinder = element(by.css('textarea#field-test-infinite-scroll-entity-byteTextRequiredHugo'));

  getPageTitle() {
    return this.pageTitle;
  }

  async setStringHugoInput(stringHugo) {
    await this.stringHugoInput.sendKeys(stringHugo);
  }

  async getStringHugoInput() {
    return this.stringHugoInput.getAttribute('value');
  }

  async setStringRequiredHugoInput(stringRequiredHugo) {
    await this.stringRequiredHugoInput.sendKeys(stringRequiredHugo);
  }

  async getStringRequiredHugoInput() {
    return this.stringRequiredHugoInput.getAttribute('value');
  }

  async setStringMinlengthHugoInput(stringMinlengthHugo) {
    await this.stringMinlengthHugoInput.sendKeys(stringMinlengthHugo);
  }

  async getStringMinlengthHugoInput() {
    return this.stringMinlengthHugoInput.getAttribute('value');
  }

  async setStringMaxlengthHugoInput(stringMaxlengthHugo) {
    await this.stringMaxlengthHugoInput.sendKeys(stringMaxlengthHugo);
  }

  async getStringMaxlengthHugoInput() {
    return this.stringMaxlengthHugoInput.getAttribute('value');
  }

  async setStringPatternHugoInput(stringPatternHugo) {
    await this.stringPatternHugoInput.sendKeys(stringPatternHugo);
  }

  async getStringPatternHugoInput() {
    return this.stringPatternHugoInput.getAttribute('value');
  }

  async setIntegerHugoInput(integerHugo) {
    await this.integerHugoInput.sendKeys(integerHugo);
  }

  async getIntegerHugoInput() {
    return this.integerHugoInput.getAttribute('value');
  }

  async setIntegerRequiredHugoInput(integerRequiredHugo) {
    await this.integerRequiredHugoInput.sendKeys(integerRequiredHugo);
  }

  async getIntegerRequiredHugoInput() {
    return this.integerRequiredHugoInput.getAttribute('value');
  }

  async setIntegerMinHugoInput(integerMinHugo) {
    await this.integerMinHugoInput.sendKeys(integerMinHugo);
  }

  async getIntegerMinHugoInput() {
    return this.integerMinHugoInput.getAttribute('value');
  }

  async setIntegerMaxHugoInput(integerMaxHugo) {
    await this.integerMaxHugoInput.sendKeys(integerMaxHugo);
  }

  async getIntegerMaxHugoInput() {
    return this.integerMaxHugoInput.getAttribute('value');
  }

  async setLongHugoInput(longHugo) {
    await this.longHugoInput.sendKeys(longHugo);
  }

  async getLongHugoInput() {
    return this.longHugoInput.getAttribute('value');
  }

  async setLongRequiredHugoInput(longRequiredHugo) {
    await this.longRequiredHugoInput.sendKeys(longRequiredHugo);
  }

  async getLongRequiredHugoInput() {
    return this.longRequiredHugoInput.getAttribute('value');
  }

  async setLongMinHugoInput(longMinHugo) {
    await this.longMinHugoInput.sendKeys(longMinHugo);
  }

  async getLongMinHugoInput() {
    return this.longMinHugoInput.getAttribute('value');
  }

  async setLongMaxHugoInput(longMaxHugo) {
    await this.longMaxHugoInput.sendKeys(longMaxHugo);
  }

  async getLongMaxHugoInput() {
    return this.longMaxHugoInput.getAttribute('value');
  }

  async setFloatHugoInput(floatHugo) {
    await this.floatHugoInput.sendKeys(floatHugo);
  }

  async getFloatHugoInput() {
    return this.floatHugoInput.getAttribute('value');
  }

  async setFloatRequiredHugoInput(floatRequiredHugo) {
    await this.floatRequiredHugoInput.sendKeys(floatRequiredHugo);
  }

  async getFloatRequiredHugoInput() {
    return this.floatRequiredHugoInput.getAttribute('value');
  }

  async setFloatMinHugoInput(floatMinHugo) {
    await this.floatMinHugoInput.sendKeys(floatMinHugo);
  }

  async getFloatMinHugoInput() {
    return this.floatMinHugoInput.getAttribute('value');
  }

  async setFloatMaxHugoInput(floatMaxHugo) {
    await this.floatMaxHugoInput.sendKeys(floatMaxHugo);
  }

  async getFloatMaxHugoInput() {
    return this.floatMaxHugoInput.getAttribute('value');
  }

  async setDoubleRequiredHugoInput(doubleRequiredHugo) {
    await this.doubleRequiredHugoInput.sendKeys(doubleRequiredHugo);
  }

  async getDoubleRequiredHugoInput() {
    return this.doubleRequiredHugoInput.getAttribute('value');
  }

  async setDoubleMinHugoInput(doubleMinHugo) {
    await this.doubleMinHugoInput.sendKeys(doubleMinHugo);
  }

  async getDoubleMinHugoInput() {
    return this.doubleMinHugoInput.getAttribute('value');
  }

  async setDoubleMaxHugoInput(doubleMaxHugo) {
    await this.doubleMaxHugoInput.sendKeys(doubleMaxHugo);
  }

  async getDoubleMaxHugoInput() {
    return this.doubleMaxHugoInput.getAttribute('value');
  }

  async setBigDecimalRequiredHugoInput(bigDecimalRequiredHugo) {
    await this.bigDecimalRequiredHugoInput.sendKeys(bigDecimalRequiredHugo);
  }

  async getBigDecimalRequiredHugoInput() {
    return this.bigDecimalRequiredHugoInput.getAttribute('value');
  }

  async setBigDecimalMinHugoInput(bigDecimalMinHugo) {
    await this.bigDecimalMinHugoInput.sendKeys(bigDecimalMinHugo);
  }

  async getBigDecimalMinHugoInput() {
    return this.bigDecimalMinHugoInput.getAttribute('value');
  }

  async setBigDecimalMaxHugoInput(bigDecimalMaxHugo) {
    await this.bigDecimalMaxHugoInput.sendKeys(bigDecimalMaxHugo);
  }

  async getBigDecimalMaxHugoInput() {
    return this.bigDecimalMaxHugoInput.getAttribute('value');
  }

  async setLocalDateHugoInput(localDateHugo) {
    await this.localDateHugoInput.sendKeys(localDateHugo);
  }

  async getLocalDateHugoInput() {
    return this.localDateHugoInput.getAttribute('value');
  }

  async setLocalDateRequiredHugoInput(localDateRequiredHugo) {
    await this.localDateRequiredHugoInput.sendKeys(localDateRequiredHugo);
  }

  async getLocalDateRequiredHugoInput() {
    return this.localDateRequiredHugoInput.getAttribute('value');
  }

  async setInstantHugoInput(instantHugo) {
    await this.instantHugoInput.sendKeys(instantHugo);
  }

  async getInstantHugoInput() {
    return this.instantHugoInput.getAttribute('value');
  }

  async setInstanteRequiredHugoInput(instanteRequiredHugo) {
    await this.instanteRequiredHugoInput.sendKeys(instanteRequiredHugo);
  }

  async getInstanteRequiredHugoInput() {
    return this.instanteRequiredHugoInput.getAttribute('value');
  }

  async setZonedDateTimeHugoInput(zonedDateTimeHugo) {
    await this.zonedDateTimeHugoInput.sendKeys(zonedDateTimeHugo);
  }

  async getZonedDateTimeHugoInput() {
    return this.zonedDateTimeHugoInput.getAttribute('value');
  }

  async setZonedDateTimeRequiredHugoInput(zonedDateTimeRequiredHugo) {
    await this.zonedDateTimeRequiredHugoInput.sendKeys(zonedDateTimeRequiredHugo);
  }

  async getZonedDateTimeRequiredHugoInput() {
    return this.zonedDateTimeRequiredHugoInput.getAttribute('value');
  }

  async setDurationHugoInput(durationHugo) {
    await this.durationHugoInput.sendKeys(durationHugo);
  }

  async getDurationHugoInput() {
    return this.durationHugoInput.getAttribute('value');
  }

  async setDurationRequiredHugoInput(durationRequiredHugo) {
    await this.durationRequiredHugoInput.sendKeys(durationRequiredHugo);
  }

  async getDurationRequiredHugoInput() {
    return this.durationRequiredHugoInput.getAttribute('value');
  }

  getBooleanHugoInput() {
    return this.booleanHugoInput;
  }
  getBooleanRequiredHugoInput() {
    return this.booleanRequiredHugoInput;
  }
  async setEnumHugoSelect(enumHugo) {
    await this.enumHugoSelect.sendKeys(enumHugo);
  }

  async getEnumHugoSelect() {
    return this.enumHugoSelect.element(by.css('option:checked')).getText();
  }

  async enumHugoSelectLastOption() {
    await this.enumHugoSelect
      .all(by.tagName('option'))
      .last()
      .click();
  }
  async setEnumRequiredHugoSelect(enumRequiredHugo) {
    await this.enumRequiredHugoSelect.sendKeys(enumRequiredHugo);
  }

  async getEnumRequiredHugoSelect() {
    return this.enumRequiredHugoSelect.element(by.css('option:checked')).getText();
  }

  async enumRequiredHugoSelectLastOption() {
    await this.enumRequiredHugoSelect
      .all(by.tagName('option'))
      .last()
      .click();
  }
  async setUuidHugoInput(uuidHugo) {
    await this.uuidHugoInput.sendKeys(uuidHugo);
  }

  async getUuidHugoInput() {
    return this.uuidHugoInput.getAttribute('value');
  }

  async setUuidRequiredHugoInput(uuidRequiredHugo) {
    await this.uuidRequiredHugoInput.sendKeys(uuidRequiredHugo);
  }

  async getUuidRequiredHugoInput() {
    return this.uuidRequiredHugoInput.getAttribute('value');
  }

  async setByteImageHugoInput(byteImageHugo) {
    await this.byteImageHugoInput.sendKeys(byteImageHugo);
  }

  async getByteImageHugoInput() {
    return this.byteImageHugoInput.getAttribute('value');
  }

  async setByteImageRequiredHugoInput(byteImageRequiredHugo) {
    await this.byteImageRequiredHugoInput.sendKeys(byteImageRequiredHugo);
  }

  async getByteImageRequiredHugoInput() {
    return this.byteImageRequiredHugoInput.getAttribute('value');
  }

  async setByteImageMinbytesHugoInput(byteImageMinbytesHugo) {
    await this.byteImageMinbytesHugoInput.sendKeys(byteImageMinbytesHugo);
  }

  async getByteImageMinbytesHugoInput() {
    return this.byteImageMinbytesHugoInput.getAttribute('value');
  }

  async setByteImageMaxbytesHugoInput(byteImageMaxbytesHugo) {
    await this.byteImageMaxbytesHugoInput.sendKeys(byteImageMaxbytesHugo);
  }

  async getByteImageMaxbytesHugoInput() {
    return this.byteImageMaxbytesHugoInput.getAttribute('value');
  }

  async setByteAnyHugoInput(byteAnyHugo) {
    await this.byteAnyHugoInput.sendKeys(byteAnyHugo);
  }

  async getByteAnyHugoInput() {
    return this.byteAnyHugoInput.getAttribute('value');
  }

  async setByteAnyRequiredHugoInput(byteAnyRequiredHugo) {
    await this.byteAnyRequiredHugoInput.sendKeys(byteAnyRequiredHugo);
  }

  async getByteAnyRequiredHugoInput() {
    return this.byteAnyRequiredHugoInput.getAttribute('value');
  }

  async setByteAnyMinbytesHugoInput(byteAnyMinbytesHugo) {
    await this.byteAnyMinbytesHugoInput.sendKeys(byteAnyMinbytesHugo);
  }

  async getByteAnyMinbytesHugoInput() {
    return this.byteAnyMinbytesHugoInput.getAttribute('value');
  }

  async setByteAnyMaxbytesHugoInput(byteAnyMaxbytesHugo) {
    await this.byteAnyMaxbytesHugoInput.sendKeys(byteAnyMaxbytesHugo);
  }

  async getByteAnyMaxbytesHugoInput() {
    return this.byteAnyMaxbytesHugoInput.getAttribute('value');
  }

  async setByteTextHugoInput(byteTextHugo) {
    await this.byteTextHugoInput.sendKeys(byteTextHugo);
  }

  async getByteTextHugoInput() {
    return this.byteTextHugoInput.getAttribute('value');
  }

  async setByteTextRequiredHugoInput(byteTextRequiredHugo) {
    await this.byteTextRequiredHugoInput.sendKeys(byteTextRequiredHugo);
  }

  async getByteTextRequiredHugoInput() {
    return this.byteTextRequiredHugoInput.getAttribute('value');
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
