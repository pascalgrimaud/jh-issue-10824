import { browser, element, by, protractor } from 'protractor';

import NavBarPage from './../../page-objects/navbar-page';
import SignInPage from './../../page-objects/signin-page';
import FieldTestEntityComponentsPage, { FieldTestEntityDeleteDialog } from './field-test-entity.page-object';
import FieldTestEntityUpdatePage from './field-test-entity-update.page-object';
import { waitUntilDisplayed, waitUntilHidden } from '../../util/utils';
import path from 'path';

const expect = chai.expect;

describe('FieldTestEntity e2e test', () => {
  let navBarPage: NavBarPage;
  let signInPage: SignInPage;
  let fieldTestEntityComponentsPage: FieldTestEntityComponentsPage;
  let fieldTestEntityUpdatePage: FieldTestEntityUpdatePage;
  let fieldTestEntityDeleteDialog: FieldTestEntityDeleteDialog;
  const fileToUpload = '../../../../../../src/main/webapp/content/images/logo-jhipster.png';
  const absolutePath = path.resolve(__dirname, fileToUpload);

  before(async () => {
    await browser.get('/');
    navBarPage = new NavBarPage();
    signInPage = await navBarPage.getSignInPage();
    await signInPage.waitUntilDisplayed();

    await signInPage.username.sendKeys('admin');
    await signInPage.password.sendKeys('admin');
    await signInPage.loginButton.click();
    await signInPage.waitUntilHidden();
    await waitUntilDisplayed(navBarPage.entityMenu);
    await waitUntilDisplayed(navBarPage.adminMenu);
    await waitUntilDisplayed(navBarPage.accountMenu);
  });

  it('should load FieldTestEntities', async () => {
    await navBarPage.getEntityPage('field-test-entity');
    fieldTestEntityComponentsPage = new FieldTestEntityComponentsPage();
    expect(await fieldTestEntityComponentsPage.getTitle().getText()).to.match(/Field Test Entities/);
  });

  it('should load create FieldTestEntity page', async () => {
    await fieldTestEntityComponentsPage.clickOnCreateButton();
    fieldTestEntityUpdatePage = new FieldTestEntityUpdatePage();
    expect(await fieldTestEntityUpdatePage.getPageTitle().getAttribute('id')).to.match(
      /travisNg2App.fieldTestEntity.home.createOrEditLabel/
    );
    await fieldTestEntityUpdatePage.cancel();
  });

  it('should create and save FieldTestEntities', async () => {
    async function createFieldTestEntity() {
      await fieldTestEntityComponentsPage.clickOnCreateButton();
      await fieldTestEntityUpdatePage.setStringTomInput('stringTom');
      expect(await fieldTestEntityUpdatePage.getStringTomInput()).to.match(/stringTom/);
      await fieldTestEntityUpdatePage.setStringRequiredTomInput('stringRequiredTom');
      expect(await fieldTestEntityUpdatePage.getStringRequiredTomInput()).to.match(/stringRequiredTom/);
      await fieldTestEntityUpdatePage.setStringMinlengthTomInput('stringMinlengthTom');
      expect(await fieldTestEntityUpdatePage.getStringMinlengthTomInput()).to.match(/stringMinlengthTom/);
      await fieldTestEntityUpdatePage.setStringMaxlengthTomInput('stringMaxlengthTom');
      expect(await fieldTestEntityUpdatePage.getStringMaxlengthTomInput()).to.match(/stringMaxlengthTom/);
      await fieldTestEntityUpdatePage.setStringPatternTomInput('orlg');
      expect(await fieldTestEntityUpdatePage.getStringPatternTomInput()).to.match(/orlg/);
      await fieldTestEntityUpdatePage.setIntegerTomInput('5');
      expect(await fieldTestEntityUpdatePage.getIntegerTomInput()).to.eq('5');
      await fieldTestEntityUpdatePage.setIntegerRequiredTomInput('5');
      expect(await fieldTestEntityUpdatePage.getIntegerRequiredTomInput()).to.eq('5');
      await fieldTestEntityUpdatePage.setIntegerMinTomInput('5');
      expect(await fieldTestEntityUpdatePage.getIntegerMinTomInput()).to.eq('5');
      await fieldTestEntityUpdatePage.setIntegerMaxTomInput('5');
      expect(await fieldTestEntityUpdatePage.getIntegerMaxTomInput()).to.eq('5');
      await fieldTestEntityUpdatePage.setLongTomInput('5');
      expect(await fieldTestEntityUpdatePage.getLongTomInput()).to.eq('5');
      await fieldTestEntityUpdatePage.setLongRequiredTomInput('5');
      expect(await fieldTestEntityUpdatePage.getLongRequiredTomInput()).to.eq('5');
      await fieldTestEntityUpdatePage.setLongMinTomInput('5');
      expect(await fieldTestEntityUpdatePage.getLongMinTomInput()).to.eq('5');
      await fieldTestEntityUpdatePage.setLongMaxTomInput('5');
      expect(await fieldTestEntityUpdatePage.getLongMaxTomInput()).to.eq('5');
      await fieldTestEntityUpdatePage.setFloatTomInput('5');
      expect(await fieldTestEntityUpdatePage.getFloatTomInput()).to.eq('5');
      await fieldTestEntityUpdatePage.setFloatRequiredTomInput('5');
      expect(await fieldTestEntityUpdatePage.getFloatRequiredTomInput()).to.eq('5');
      await fieldTestEntityUpdatePage.setFloatMinTomInput('5');
      expect(await fieldTestEntityUpdatePage.getFloatMinTomInput()).to.eq('5');
      await fieldTestEntityUpdatePage.setFloatMaxTomInput('5');
      expect(await fieldTestEntityUpdatePage.getFloatMaxTomInput()).to.eq('5');
      await fieldTestEntityUpdatePage.setDoubleRequiredTomInput('5');
      expect(await fieldTestEntityUpdatePage.getDoubleRequiredTomInput()).to.eq('5');
      await fieldTestEntityUpdatePage.setDoubleMinTomInput('5');
      expect(await fieldTestEntityUpdatePage.getDoubleMinTomInput()).to.eq('5');
      await fieldTestEntityUpdatePage.setDoubleMaxTomInput('5');
      expect(await fieldTestEntityUpdatePage.getDoubleMaxTomInput()).to.eq('5');
      await fieldTestEntityUpdatePage.setBigDecimalRequiredTomInput('5');
      expect(await fieldTestEntityUpdatePage.getBigDecimalRequiredTomInput()).to.eq('5');
      await fieldTestEntityUpdatePage.setBigDecimalMinTomInput('5');
      expect(await fieldTestEntityUpdatePage.getBigDecimalMinTomInput()).to.eq('5');
      await fieldTestEntityUpdatePage.setBigDecimalMaxTomInput('5');
      expect(await fieldTestEntityUpdatePage.getBigDecimalMaxTomInput()).to.eq('5');
      await fieldTestEntityUpdatePage.setLocalDateTomInput('01-01-2001');
      expect(await fieldTestEntityUpdatePage.getLocalDateTomInput()).to.eq('2001-01-01');
      await fieldTestEntityUpdatePage.setLocalDateRequiredTomInput('01-01-2001');
      expect(await fieldTestEntityUpdatePage.getLocalDateRequiredTomInput()).to.eq('2001-01-01');
      await fieldTestEntityUpdatePage.setInstantTomInput('01/01/2001' + protractor.Key.TAB + '02:30AM');
      expect(await fieldTestEntityUpdatePage.getInstantTomInput()).to.contain('2001-01-01T02:30');
      await fieldTestEntityUpdatePage.setInstantRequiredTomInput('01/01/2001' + protractor.Key.TAB + '02:30AM');
      expect(await fieldTestEntityUpdatePage.getInstantRequiredTomInput()).to.contain('2001-01-01T02:30');
      await fieldTestEntityUpdatePage.setZonedDateTimeTomInput('01/01/2001' + protractor.Key.TAB + '02:30AM');
      expect(await fieldTestEntityUpdatePage.getZonedDateTimeTomInput()).to.contain('2001-01-01T02:30');
      await fieldTestEntityUpdatePage.setZonedDateTimeRequiredTomInput('01/01/2001' + protractor.Key.TAB + '02:30AM');
      expect(await fieldTestEntityUpdatePage.getZonedDateTimeRequiredTomInput()).to.contain('2001-01-01T02:30');
      await fieldTestEntityUpdatePage.setDurationTomInput('PT12S');
      expect(await fieldTestEntityUpdatePage.getDurationTomInput()).to.contain('12');
      await fieldTestEntityUpdatePage.setDurationRequiredTomInput('PT12S');
      expect(await fieldTestEntityUpdatePage.getDurationRequiredTomInput()).to.contain('12');
      const selectedBooleanTom = await fieldTestEntityUpdatePage.getBooleanTomInput().isSelected();
      if (selectedBooleanTom) {
        await fieldTestEntityUpdatePage.getBooleanTomInput().click();
        expect(await fieldTestEntityUpdatePage.getBooleanTomInput().isSelected()).to.be.false;
      } else {
        await fieldTestEntityUpdatePage.getBooleanTomInput().click();
        expect(await fieldTestEntityUpdatePage.getBooleanTomInput().isSelected()).to.be.true;
      }
      const selectedBooleanRequiredTom = await fieldTestEntityUpdatePage.getBooleanRequiredTomInput().isSelected();
      if (selectedBooleanRequiredTom) {
        await fieldTestEntityUpdatePage.getBooleanRequiredTomInput().click();
        expect(await fieldTestEntityUpdatePage.getBooleanRequiredTomInput().isSelected()).to.be.false;
      } else {
        await fieldTestEntityUpdatePage.getBooleanRequiredTomInput().click();
        expect(await fieldTestEntityUpdatePage.getBooleanRequiredTomInput().isSelected()).to.be.true;
      }
      await fieldTestEntityUpdatePage.enumTomSelectLastOption();
      await fieldTestEntityUpdatePage.enumRequiredTomSelectLastOption();
      await fieldTestEntityUpdatePage.setUuidTomInput('64c99148-3908-465d-8c4a-e510e3ade974');
      expect(await fieldTestEntityUpdatePage.getUuidTomInput()).to.match(/64c99148-3908-465d-8c4a-e510e3ade974/);
      await fieldTestEntityUpdatePage.setUuidRequiredTomInput('64c99148-3908-465d-8c4a-e510e3ade974');
      expect(await fieldTestEntityUpdatePage.getUuidRequiredTomInput()).to.match(/64c99148-3908-465d-8c4a-e510e3ade974/);
      await fieldTestEntityUpdatePage.setByteImageTomInput(absolutePath);
      await fieldTestEntityUpdatePage.setByteImageRequiredTomInput(absolutePath);
      await fieldTestEntityUpdatePage.setByteImageMinbytesTomInput(absolutePath);
      await fieldTestEntityUpdatePage.setByteImageMaxbytesTomInput(absolutePath);
      await fieldTestEntityUpdatePage.setByteAnyTomInput(absolutePath);
      await fieldTestEntityUpdatePage.setByteAnyRequiredTomInput(absolutePath);
      await fieldTestEntityUpdatePage.setByteAnyMinbytesTomInput(absolutePath);
      await fieldTestEntityUpdatePage.setByteAnyMaxbytesTomInput(absolutePath);
      await fieldTestEntityUpdatePage.setByteTextTomInput('byteTextTom');
      expect(await fieldTestEntityUpdatePage.getByteTextTomInput()).to.match(/byteTextTom/);
      await fieldTestEntityUpdatePage.setByteTextRequiredTomInput('byteTextRequiredTom');
      expect(await fieldTestEntityUpdatePage.getByteTextRequiredTomInput()).to.match(/byteTextRequiredTom/);
      await waitUntilDisplayed(fieldTestEntityUpdatePage.getSaveButton());
      await fieldTestEntityUpdatePage.save();
      await waitUntilHidden(fieldTestEntityUpdatePage.getSaveButton());
      expect(await fieldTestEntityUpdatePage.getSaveButton().isPresent()).to.be.false;
    }

    await createFieldTestEntity();
    await fieldTestEntityComponentsPage.waitUntilLoaded();
    const nbButtonsBeforeCreate = await fieldTestEntityComponentsPage.countDeleteButtons();
    await createFieldTestEntity();

    await fieldTestEntityComponentsPage.waitUntilDeleteButtonsLength(nbButtonsBeforeCreate + 1);
    expect(await fieldTestEntityComponentsPage.countDeleteButtons()).to.eq(nbButtonsBeforeCreate + 1);
  });

  it('should delete last FieldTestEntity', async () => {
    await fieldTestEntityComponentsPage.waitUntilLoaded();
    const nbButtonsBeforeDelete = await fieldTestEntityComponentsPage.countDeleteButtons();
    await fieldTestEntityComponentsPage.clickOnLastDeleteButton();

    const deleteModal = element(by.className('modal'));
    await waitUntilDisplayed(deleteModal);

    fieldTestEntityDeleteDialog = new FieldTestEntityDeleteDialog();
    expect(await fieldTestEntityDeleteDialog.getDialogTitle().getAttribute('id')).to.match(/travisNg2App.fieldTestEntity.delete.question/);
    await fieldTestEntityDeleteDialog.clickOnConfirmButton();

    await fieldTestEntityComponentsPage.waitUntilDeleteButtonsLength(nbButtonsBeforeDelete - 1);
    expect(await fieldTestEntityComponentsPage.countDeleteButtons()).to.eq(nbButtonsBeforeDelete - 1);
  });

  after(async () => {
    await navBarPage.autoSignOut();
  });
});
