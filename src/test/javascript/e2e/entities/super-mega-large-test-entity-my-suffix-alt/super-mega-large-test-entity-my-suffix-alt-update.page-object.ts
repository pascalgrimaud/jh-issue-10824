import { element, by, ElementFinder } from 'protractor';

export default class SuperMegaLargeTestEntityUpdatePage {
  pageTitle: ElementFinder = element(by.id('travisNg2App.superMegaLargeTestEntity.home.createOrEditLabel'));
  saveButton: ElementFinder = element(by.id('save-entity'));
  cancelButton: ElementFinder = element(by.id('cancel-save'));
  superMegaLargeUserOneToManySelect: ElementFinder = element(
    by.css('select#super-mega-large-test-entity-my-suffix-alt-superMegaLargeUserOneToMany')
  );
  superMegaLargeUserManyToManySelect: ElementFinder = element(
    by.css('select#super-mega-large-test-entity-my-suffix-alt-superMegaLargeUserManyToMany')
  );
  superMegaLargeUserOneToOneSelect: ElementFinder = element(
    by.css('select#super-mega-large-test-entity-my-suffix-alt-superMegaLargeUserOneToOne')
  );

  getPageTitle() {
    return this.pageTitle;
  }

  async superMegaLargeUserOneToManySelectLastOption() {
    await this.superMegaLargeUserOneToManySelect
      .all(by.tagName('option'))
      .last()
      .click();
  }

  async superMegaLargeUserOneToManySelectOption(option) {
    await this.superMegaLargeUserOneToManySelect.sendKeys(option);
  }

  getSuperMegaLargeUserOneToManySelect() {
    return this.superMegaLargeUserOneToManySelect;
  }

  async getSuperMegaLargeUserOneToManySelectedOption() {
    return this.superMegaLargeUserOneToManySelect.element(by.css('option:checked')).getText();
  }

  async superMegaLargeUserManyToManySelectLastOption() {
    await this.superMegaLargeUserManyToManySelect
      .all(by.tagName('option'))
      .last()
      .click();
  }

  async superMegaLargeUserManyToManySelectOption(option) {
    await this.superMegaLargeUserManyToManySelect.sendKeys(option);
  }

  getSuperMegaLargeUserManyToManySelect() {
    return this.superMegaLargeUserManyToManySelect;
  }

  async getSuperMegaLargeUserManyToManySelectedOption() {
    return this.superMegaLargeUserManyToManySelect.element(by.css('option:checked')).getText();
  }

  async superMegaLargeUserOneToOneSelectLastOption() {
    await this.superMegaLargeUserOneToOneSelect
      .all(by.tagName('option'))
      .last()
      .click();
  }

  async superMegaLargeUserOneToOneSelectOption(option) {
    await this.superMegaLargeUserOneToOneSelect.sendKeys(option);
  }

  getSuperMegaLargeUserOneToOneSelect() {
    return this.superMegaLargeUserOneToOneSelect;
  }

  async getSuperMegaLargeUserOneToOneSelectedOption() {
    return this.superMegaLargeUserOneToOneSelect.element(by.css('option:checked')).getText();
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
