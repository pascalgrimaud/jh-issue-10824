import { browser, element, by, protractor } from 'protractor';

import NavBarPage from './../../page-objects/navbar-page';
import SignInPage from './../../page-objects/signin-page';
import FieldTestMapstructEntityComponentsPage, { FieldTestMapstructEntityDeleteDialog } from './field-test-mapstruct-entity.page-object';
import FieldTestMapstructEntityUpdatePage from './field-test-mapstruct-entity-update.page-object';
import { waitUntilDisplayed, waitUntilHidden } from '../../util/utils';
import path from 'path';

const expect = chai.expect;

describe('FieldTestMapstructEntity e2e test', () => {
  let navBarPage: NavBarPage;
  let signInPage: SignInPage;
  let fieldTestMapstructEntityComponentsPage: FieldTestMapstructEntityComponentsPage;
  let fieldTestMapstructEntityUpdatePage: FieldTestMapstructEntityUpdatePage;
  let fieldTestMapstructEntityDeleteDialog: FieldTestMapstructEntityDeleteDialog;
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

  it('should load FieldTestMapstructEntities', async () => {
    await navBarPage.getEntityPage('field-test-mapstruct-entity');
    fieldTestMapstructEntityComponentsPage = new FieldTestMapstructEntityComponentsPage();
    expect(await fieldTestMapstructEntityComponentsPage.getTitle().getText()).to.match(/Field Test Mapstruct Entities/);
  });

  it('should load create FieldTestMapstructEntity page', async () => {
    await fieldTestMapstructEntityComponentsPage.clickOnCreateButton();
    fieldTestMapstructEntityUpdatePage = new FieldTestMapstructEntityUpdatePage();
    expect(await fieldTestMapstructEntityUpdatePage.getPageTitle().getAttribute('id')).to.match(
      /travisNg2App.fieldTestMapstructEntity.home.createOrEditLabel/
    );
    await fieldTestMapstructEntityUpdatePage.cancel();
  });

  it('should create and save FieldTestMapstructEntities', async () => {
    async function createFieldTestMapstructEntity() {
      await fieldTestMapstructEntityComponentsPage.clickOnCreateButton();
      await fieldTestMapstructEntityUpdatePage.setStringEvaInput('stringEva');
      expect(await fieldTestMapstructEntityUpdatePage.getStringEvaInput()).to.match(/stringEva/);
      await fieldTestMapstructEntityUpdatePage.setStringRequiredEvaInput('stringRequiredEva');
      expect(await fieldTestMapstructEntityUpdatePage.getStringRequiredEvaInput()).to.match(/stringRequiredEva/);
      await fieldTestMapstructEntityUpdatePage.setStringMinlengthEvaInput('stringMinlengthEva');
      expect(await fieldTestMapstructEntityUpdatePage.getStringMinlengthEvaInput()).to.match(/stringMinlengthEva/);
      await fieldTestMapstructEntityUpdatePage.setStringMaxlengthEvaInput('stringMaxlengthEva');
      expect(await fieldTestMapstructEntityUpdatePage.getStringMaxlengthEvaInput()).to.match(/stringMaxlengthEva/);
      await fieldTestMapstructEntityUpdatePage.setStringPatternEvaInput('D3lQVbNaQT7qZ1iVf1rZwfKuC4dPswoA5Z71BNi5QY');
      expect(await fieldTestMapstructEntityUpdatePage.getStringPatternEvaInput()).to.match(/D3lQVbNaQT7qZ1iVf1rZwfKuC4dPswoA5Z71BNi5QY/);
      await fieldTestMapstructEntityUpdatePage.setIntegerEvaInput('5');
      expect(await fieldTestMapstructEntityUpdatePage.getIntegerEvaInput()).to.eq('5');
      await fieldTestMapstructEntityUpdatePage.setIntegerRequiredEvaInput('5');
      expect(await fieldTestMapstructEntityUpdatePage.getIntegerRequiredEvaInput()).to.eq('5');
      await fieldTestMapstructEntityUpdatePage.setIntegerMinEvaInput('5');
      expect(await fieldTestMapstructEntityUpdatePage.getIntegerMinEvaInput()).to.eq('5');
      await fieldTestMapstructEntityUpdatePage.setIntegerMaxEvaInput('5');
      expect(await fieldTestMapstructEntityUpdatePage.getIntegerMaxEvaInput()).to.eq('5');
      await fieldTestMapstructEntityUpdatePage.setLongEvaInput('5');
      expect(await fieldTestMapstructEntityUpdatePage.getLongEvaInput()).to.eq('5');
      await fieldTestMapstructEntityUpdatePage.setLongRequiredEvaInput('5');
      expect(await fieldTestMapstructEntityUpdatePage.getLongRequiredEvaInput()).to.eq('5');
      await fieldTestMapstructEntityUpdatePage.setLongMinEvaInput('5');
      expect(await fieldTestMapstructEntityUpdatePage.getLongMinEvaInput()).to.eq('5');
      await fieldTestMapstructEntityUpdatePage.setLongMaxEvaInput('5');
      expect(await fieldTestMapstructEntityUpdatePage.getLongMaxEvaInput()).to.eq('5');
      await fieldTestMapstructEntityUpdatePage.setFloatEvaInput('5');
      expect(await fieldTestMapstructEntityUpdatePage.getFloatEvaInput()).to.eq('5');
      await fieldTestMapstructEntityUpdatePage.setFloatRequiredEvaInput('5');
      expect(await fieldTestMapstructEntityUpdatePage.getFloatRequiredEvaInput()).to.eq('5');
      await fieldTestMapstructEntityUpdatePage.setFloatMinEvaInput('5');
      expect(await fieldTestMapstructEntityUpdatePage.getFloatMinEvaInput()).to.eq('5');
      await fieldTestMapstructEntityUpdatePage.setFloatMaxEvaInput('5');
      expect(await fieldTestMapstructEntityUpdatePage.getFloatMaxEvaInput()).to.eq('5');
      await fieldTestMapstructEntityUpdatePage.setDoubleRequiredEvaInput('5');
      expect(await fieldTestMapstructEntityUpdatePage.getDoubleRequiredEvaInput()).to.eq('5');
      await fieldTestMapstructEntityUpdatePage.setDoubleMinEvaInput('5');
      expect(await fieldTestMapstructEntityUpdatePage.getDoubleMinEvaInput()).to.eq('5');
      await fieldTestMapstructEntityUpdatePage.setDoubleMaxEvaInput('5');
      expect(await fieldTestMapstructEntityUpdatePage.getDoubleMaxEvaInput()).to.eq('5');
      await fieldTestMapstructEntityUpdatePage.setBigDecimalRequiredEvaInput('5');
      expect(await fieldTestMapstructEntityUpdatePage.getBigDecimalRequiredEvaInput()).to.eq('5');
      await fieldTestMapstructEntityUpdatePage.setBigDecimalMinEvaInput('5');
      expect(await fieldTestMapstructEntityUpdatePage.getBigDecimalMinEvaInput()).to.eq('5');
      await fieldTestMapstructEntityUpdatePage.setBigDecimalMaxEvaInput('5');
      expect(await fieldTestMapstructEntityUpdatePage.getBigDecimalMaxEvaInput()).to.eq('5');
      await fieldTestMapstructEntityUpdatePage.setLocalDateEvaInput('01-01-2001');
      expect(await fieldTestMapstructEntityUpdatePage.getLocalDateEvaInput()).to.eq('2001-01-01');
      await fieldTestMapstructEntityUpdatePage.setLocalDateRequiredEvaInput('01-01-2001');
      expect(await fieldTestMapstructEntityUpdatePage.getLocalDateRequiredEvaInput()).to.eq('2001-01-01');
      await fieldTestMapstructEntityUpdatePage.setInstantEvaInput('01/01/2001' + protractor.Key.TAB + '02:30AM');
      expect(await fieldTestMapstructEntityUpdatePage.getInstantEvaInput()).to.contain('2001-01-01T02:30');
      await fieldTestMapstructEntityUpdatePage.setInstanteRequiredEvaInput('01/01/2001' + protractor.Key.TAB + '02:30AM');
      expect(await fieldTestMapstructEntityUpdatePage.getInstanteRequiredEvaInput()).to.contain('2001-01-01T02:30');
      await fieldTestMapstructEntityUpdatePage.setZonedDateTimeEvaInput('01/01/2001' + protractor.Key.TAB + '02:30AM');
      expect(await fieldTestMapstructEntityUpdatePage.getZonedDateTimeEvaInput()).to.contain('2001-01-01T02:30');
      await fieldTestMapstructEntityUpdatePage.setZonedDateTimeRequiredEvaInput('01/01/2001' + protractor.Key.TAB + '02:30AM');
      expect(await fieldTestMapstructEntityUpdatePage.getZonedDateTimeRequiredEvaInput()).to.contain('2001-01-01T02:30');
      await fieldTestMapstructEntityUpdatePage.setDurationEvaInput('PT12S');
      expect(await fieldTestMapstructEntityUpdatePage.getDurationEvaInput()).to.contain('12');
      await fieldTestMapstructEntityUpdatePage.setDurationRequiredEvaInput('PT12S');
      expect(await fieldTestMapstructEntityUpdatePage.getDurationRequiredEvaInput()).to.contain('12');
      const selectedBooleanEva = await fieldTestMapstructEntityUpdatePage.getBooleanEvaInput().isSelected();
      if (selectedBooleanEva) {
        await fieldTestMapstructEntityUpdatePage.getBooleanEvaInput().click();
        expect(await fieldTestMapstructEntityUpdatePage.getBooleanEvaInput().isSelected()).to.be.false;
      } else {
        await fieldTestMapstructEntityUpdatePage.getBooleanEvaInput().click();
        expect(await fieldTestMapstructEntityUpdatePage.getBooleanEvaInput().isSelected()).to.be.true;
      }
      const selectedBooleanRequiredEva = await fieldTestMapstructEntityUpdatePage.getBooleanRequiredEvaInput().isSelected();
      if (selectedBooleanRequiredEva) {
        await fieldTestMapstructEntityUpdatePage.getBooleanRequiredEvaInput().click();
        expect(await fieldTestMapstructEntityUpdatePage.getBooleanRequiredEvaInput().isSelected()).to.be.false;
      } else {
        await fieldTestMapstructEntityUpdatePage.getBooleanRequiredEvaInput().click();
        expect(await fieldTestMapstructEntityUpdatePage.getBooleanRequiredEvaInput().isSelected()).to.be.true;
      }
      await fieldTestMapstructEntityUpdatePage.enumEvaSelectLastOption();
      await fieldTestMapstructEntityUpdatePage.enumRequiredEvaSelectLastOption();
      await fieldTestMapstructEntityUpdatePage.setUuidEvaInput('64c99148-3908-465d-8c4a-e510e3ade974');
      expect(await fieldTestMapstructEntityUpdatePage.getUuidEvaInput()).to.match(/64c99148-3908-465d-8c4a-e510e3ade974/);
      await fieldTestMapstructEntityUpdatePage.setUuidRequiredEvaInput('64c99148-3908-465d-8c4a-e510e3ade974');
      expect(await fieldTestMapstructEntityUpdatePage.getUuidRequiredEvaInput()).to.match(/64c99148-3908-465d-8c4a-e510e3ade974/);
      await fieldTestMapstructEntityUpdatePage.setByteImageEvaInput(absolutePath);
      await fieldTestMapstructEntityUpdatePage.setByteImageRequiredEvaInput(absolutePath);
      await fieldTestMapstructEntityUpdatePage.setByteImageMinbytesEvaInput(absolutePath);
      await fieldTestMapstructEntityUpdatePage.setByteImageMaxbytesEvaInput(absolutePath);
      await fieldTestMapstructEntityUpdatePage.setByteAnyEvaInput(absolutePath);
      await fieldTestMapstructEntityUpdatePage.setByteAnyRequiredEvaInput(absolutePath);
      await fieldTestMapstructEntityUpdatePage.setByteAnyMinbytesEvaInput(absolutePath);
      await fieldTestMapstructEntityUpdatePage.setByteAnyMaxbytesEvaInput(absolutePath);
      await fieldTestMapstructEntityUpdatePage.setByteTextEvaInput('byteTextEva');
      expect(await fieldTestMapstructEntityUpdatePage.getByteTextEvaInput()).to.match(/byteTextEva/);
      await fieldTestMapstructEntityUpdatePage.setByteTextRequiredEvaInput('byteTextRequiredEva');
      expect(await fieldTestMapstructEntityUpdatePage.getByteTextRequiredEvaInput()).to.match(/byteTextRequiredEva/);
      await waitUntilDisplayed(fieldTestMapstructEntityUpdatePage.getSaveButton());
      await fieldTestMapstructEntityUpdatePage.save();
      await waitUntilHidden(fieldTestMapstructEntityUpdatePage.getSaveButton());
      expect(await fieldTestMapstructEntityUpdatePage.getSaveButton().isPresent()).to.be.false;
    }

    await createFieldTestMapstructEntity();
    await fieldTestMapstructEntityComponentsPage.waitUntilLoaded();
    const nbButtonsBeforeCreate = await fieldTestMapstructEntityComponentsPage.countDeleteButtons();
    await createFieldTestMapstructEntity();

    await fieldTestMapstructEntityComponentsPage.waitUntilDeleteButtonsLength(nbButtonsBeforeCreate + 1);
    expect(await fieldTestMapstructEntityComponentsPage.countDeleteButtons()).to.eq(nbButtonsBeforeCreate + 1);
  });

  it('should delete last FieldTestMapstructEntity', async () => {
    await fieldTestMapstructEntityComponentsPage.waitUntilLoaded();
    const nbButtonsBeforeDelete = await fieldTestMapstructEntityComponentsPage.countDeleteButtons();
    await fieldTestMapstructEntityComponentsPage.clickOnLastDeleteButton();

    const deleteModal = element(by.className('modal'));
    await waitUntilDisplayed(deleteModal);

    fieldTestMapstructEntityDeleteDialog = new FieldTestMapstructEntityDeleteDialog();
    expect(await fieldTestMapstructEntityDeleteDialog.getDialogTitle().getAttribute('id')).to.match(
      /travisNg2App.fieldTestMapstructEntity.delete.question/
    );
    await fieldTestMapstructEntityDeleteDialog.clickOnConfirmButton();

    await fieldTestMapstructEntityComponentsPage.waitUntilDeleteButtonsLength(nbButtonsBeforeDelete - 1);
    expect(await fieldTestMapstructEntityComponentsPage.countDeleteButtons()).to.eq(nbButtonsBeforeDelete - 1);
  });

  after(async () => {
    await navBarPage.autoSignOut();
  });
});
