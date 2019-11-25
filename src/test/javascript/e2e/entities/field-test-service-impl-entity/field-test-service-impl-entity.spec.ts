import { browser, element, by, protractor } from 'protractor';

import NavBarPage from './../../page-objects/navbar-page';
import SignInPage from './../../page-objects/signin-page';
import FieldTestServiceImplEntityComponentsPage, {
  FieldTestServiceImplEntityDeleteDialog
} from './field-test-service-impl-entity.page-object';
import FieldTestServiceImplEntityUpdatePage from './field-test-service-impl-entity-update.page-object';
import { waitUntilDisplayed, waitUntilHidden } from '../../util/utils';
import path from 'path';

const expect = chai.expect;

describe('FieldTestServiceImplEntity e2e test', () => {
  let navBarPage: NavBarPage;
  let signInPage: SignInPage;
  let fieldTestServiceImplEntityComponentsPage: FieldTestServiceImplEntityComponentsPage;
  let fieldTestServiceImplEntityUpdatePage: FieldTestServiceImplEntityUpdatePage;
  let fieldTestServiceImplEntityDeleteDialog: FieldTestServiceImplEntityDeleteDialog;
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

  it('should load FieldTestServiceImplEntities', async () => {
    await navBarPage.getEntityPage('field-test-service-impl-entity');
    fieldTestServiceImplEntityComponentsPage = new FieldTestServiceImplEntityComponentsPage();
    expect(await fieldTestServiceImplEntityComponentsPage.getTitle().getText()).to.match(/Field Test Service Impl Entities/);
  });

  it('should load create FieldTestServiceImplEntity page', async () => {
    await fieldTestServiceImplEntityComponentsPage.clickOnCreateButton();
    fieldTestServiceImplEntityUpdatePage = new FieldTestServiceImplEntityUpdatePage();
    expect(await fieldTestServiceImplEntityUpdatePage.getPageTitle().getAttribute('id')).to.match(
      /travisNg2App.fieldTestServiceImplEntity.home.createOrEditLabel/
    );
    await fieldTestServiceImplEntityUpdatePage.cancel();
  });

  it('should create and save FieldTestServiceImplEntities', async () => {
    async function createFieldTestServiceImplEntity() {
      await fieldTestServiceImplEntityComponentsPage.clickOnCreateButton();
      await fieldTestServiceImplEntityUpdatePage.setStringMikaInput('stringMika');
      expect(await fieldTestServiceImplEntityUpdatePage.getStringMikaInput()).to.match(/stringMika/);
      await fieldTestServiceImplEntityUpdatePage.setStringRequiredMikaInput('stringRequiredMika');
      expect(await fieldTestServiceImplEntityUpdatePage.getStringRequiredMikaInput()).to.match(/stringRequiredMika/);
      await fieldTestServiceImplEntityUpdatePage.setStringMinlengthMikaInput('stringMinlengthMika');
      expect(await fieldTestServiceImplEntityUpdatePage.getStringMinlengthMikaInput()).to.match(/stringMinlengthMika/);
      await fieldTestServiceImplEntityUpdatePage.setStringMaxlengthMikaInput('stringMaxlengthMika');
      expect(await fieldTestServiceImplEntityUpdatePage.getStringMaxlengthMikaInput()).to.match(/stringMaxlengthMika/);
      await fieldTestServiceImplEntityUpdatePage.setStringPatternMikaInput('xlPSntdr9wmL');
      expect(await fieldTestServiceImplEntityUpdatePage.getStringPatternMikaInput()).to.match(/xlPSntdr9wmL/);
      await fieldTestServiceImplEntityUpdatePage.setIntegerMikaInput('5');
      expect(await fieldTestServiceImplEntityUpdatePage.getIntegerMikaInput()).to.eq('5');
      await fieldTestServiceImplEntityUpdatePage.setIntegerRequiredMikaInput('5');
      expect(await fieldTestServiceImplEntityUpdatePage.getIntegerRequiredMikaInput()).to.eq('5');
      await fieldTestServiceImplEntityUpdatePage.setIntegerMinMikaInput('5');
      expect(await fieldTestServiceImplEntityUpdatePage.getIntegerMinMikaInput()).to.eq('5');
      await fieldTestServiceImplEntityUpdatePage.setIntegerMaxMikaInput('5');
      expect(await fieldTestServiceImplEntityUpdatePage.getIntegerMaxMikaInput()).to.eq('5');
      await fieldTestServiceImplEntityUpdatePage.setLongMikaInput('5');
      expect(await fieldTestServiceImplEntityUpdatePage.getLongMikaInput()).to.eq('5');
      await fieldTestServiceImplEntityUpdatePage.setLongRequiredMikaInput('5');
      expect(await fieldTestServiceImplEntityUpdatePage.getLongRequiredMikaInput()).to.eq('5');
      await fieldTestServiceImplEntityUpdatePage.setLongMinMikaInput('5');
      expect(await fieldTestServiceImplEntityUpdatePage.getLongMinMikaInput()).to.eq('5');
      await fieldTestServiceImplEntityUpdatePage.setLongMaxMikaInput('5');
      expect(await fieldTestServiceImplEntityUpdatePage.getLongMaxMikaInput()).to.eq('5');
      await fieldTestServiceImplEntityUpdatePage.setFloatMikaInput('5');
      expect(await fieldTestServiceImplEntityUpdatePage.getFloatMikaInput()).to.eq('5');
      await fieldTestServiceImplEntityUpdatePage.setFloatRequiredMikaInput('5');
      expect(await fieldTestServiceImplEntityUpdatePage.getFloatRequiredMikaInput()).to.eq('5');
      await fieldTestServiceImplEntityUpdatePage.setFloatMinMikaInput('5');
      expect(await fieldTestServiceImplEntityUpdatePage.getFloatMinMikaInput()).to.eq('5');
      await fieldTestServiceImplEntityUpdatePage.setFloatMaxMikaInput('5');
      expect(await fieldTestServiceImplEntityUpdatePage.getFloatMaxMikaInput()).to.eq('5');
      await fieldTestServiceImplEntityUpdatePage.setDoubleRequiredMikaInput('5');
      expect(await fieldTestServiceImplEntityUpdatePage.getDoubleRequiredMikaInput()).to.eq('5');
      await fieldTestServiceImplEntityUpdatePage.setDoubleMinMikaInput('5');
      expect(await fieldTestServiceImplEntityUpdatePage.getDoubleMinMikaInput()).to.eq('5');
      await fieldTestServiceImplEntityUpdatePage.setDoubleMaxMikaInput('5');
      expect(await fieldTestServiceImplEntityUpdatePage.getDoubleMaxMikaInput()).to.eq('5');
      await fieldTestServiceImplEntityUpdatePage.setBigDecimalRequiredMikaInput('5');
      expect(await fieldTestServiceImplEntityUpdatePage.getBigDecimalRequiredMikaInput()).to.eq('5');
      await fieldTestServiceImplEntityUpdatePage.setBigDecimalMinMikaInput('5');
      expect(await fieldTestServiceImplEntityUpdatePage.getBigDecimalMinMikaInput()).to.eq('5');
      await fieldTestServiceImplEntityUpdatePage.setBigDecimalMaxMikaInput('5');
      expect(await fieldTestServiceImplEntityUpdatePage.getBigDecimalMaxMikaInput()).to.eq('5');
      await fieldTestServiceImplEntityUpdatePage.setLocalDateMikaInput('01-01-2001');
      expect(await fieldTestServiceImplEntityUpdatePage.getLocalDateMikaInput()).to.eq('2001-01-01');
      await fieldTestServiceImplEntityUpdatePage.setLocalDateRequiredMikaInput('01-01-2001');
      expect(await fieldTestServiceImplEntityUpdatePage.getLocalDateRequiredMikaInput()).to.eq('2001-01-01');
      await fieldTestServiceImplEntityUpdatePage.setInstantMikaInput('01/01/2001' + protractor.Key.TAB + '02:30AM');
      expect(await fieldTestServiceImplEntityUpdatePage.getInstantMikaInput()).to.contain('2001-01-01T02:30');
      await fieldTestServiceImplEntityUpdatePage.setInstanteRequiredMikaInput('01/01/2001' + protractor.Key.TAB + '02:30AM');
      expect(await fieldTestServiceImplEntityUpdatePage.getInstanteRequiredMikaInput()).to.contain('2001-01-01T02:30');
      await fieldTestServiceImplEntityUpdatePage.setZonedDateTimeMikaInput('01/01/2001' + protractor.Key.TAB + '02:30AM');
      expect(await fieldTestServiceImplEntityUpdatePage.getZonedDateTimeMikaInput()).to.contain('2001-01-01T02:30');
      await fieldTestServiceImplEntityUpdatePage.setZonedDateTimeRequiredMikaInput('01/01/2001' + protractor.Key.TAB + '02:30AM');
      expect(await fieldTestServiceImplEntityUpdatePage.getZonedDateTimeRequiredMikaInput()).to.contain('2001-01-01T02:30');
      await fieldTestServiceImplEntityUpdatePage.setDurationMikaInput('PT12S');
      expect(await fieldTestServiceImplEntityUpdatePage.getDurationMikaInput()).to.contain('12');
      await fieldTestServiceImplEntityUpdatePage.setDurationRequiredMikaInput('PT12S');
      expect(await fieldTestServiceImplEntityUpdatePage.getDurationRequiredMikaInput()).to.contain('12');
      const selectedBooleanMika = await fieldTestServiceImplEntityUpdatePage.getBooleanMikaInput().isSelected();
      if (selectedBooleanMika) {
        await fieldTestServiceImplEntityUpdatePage.getBooleanMikaInput().click();
        expect(await fieldTestServiceImplEntityUpdatePage.getBooleanMikaInput().isSelected()).to.be.false;
      } else {
        await fieldTestServiceImplEntityUpdatePage.getBooleanMikaInput().click();
        expect(await fieldTestServiceImplEntityUpdatePage.getBooleanMikaInput().isSelected()).to.be.true;
      }
      const selectedBooleanRequiredMika = await fieldTestServiceImplEntityUpdatePage.getBooleanRequiredMikaInput().isSelected();
      if (selectedBooleanRequiredMika) {
        await fieldTestServiceImplEntityUpdatePage.getBooleanRequiredMikaInput().click();
        expect(await fieldTestServiceImplEntityUpdatePage.getBooleanRequiredMikaInput().isSelected()).to.be.false;
      } else {
        await fieldTestServiceImplEntityUpdatePage.getBooleanRequiredMikaInput().click();
        expect(await fieldTestServiceImplEntityUpdatePage.getBooleanRequiredMikaInput().isSelected()).to.be.true;
      }
      await fieldTestServiceImplEntityUpdatePage.enumMikaSelectLastOption();
      await fieldTestServiceImplEntityUpdatePage.enumRequiredMikaSelectLastOption();
      await fieldTestServiceImplEntityUpdatePage.setUuidMikaInput('64c99148-3908-465d-8c4a-e510e3ade974');
      expect(await fieldTestServiceImplEntityUpdatePage.getUuidMikaInput()).to.match(/64c99148-3908-465d-8c4a-e510e3ade974/);
      await fieldTestServiceImplEntityUpdatePage.setUuidRequiredMikaInput('64c99148-3908-465d-8c4a-e510e3ade974');
      expect(await fieldTestServiceImplEntityUpdatePage.getUuidRequiredMikaInput()).to.match(/64c99148-3908-465d-8c4a-e510e3ade974/);
      await fieldTestServiceImplEntityUpdatePage.setByteImageMikaInput(absolutePath);
      await fieldTestServiceImplEntityUpdatePage.setByteImageRequiredMikaInput(absolutePath);
      await fieldTestServiceImplEntityUpdatePage.setByteImageMinbytesMikaInput(absolutePath);
      await fieldTestServiceImplEntityUpdatePage.setByteImageMaxbytesMikaInput(absolutePath);
      await fieldTestServiceImplEntityUpdatePage.setByteAnyMikaInput(absolutePath);
      await fieldTestServiceImplEntityUpdatePage.setByteAnyRequiredMikaInput(absolutePath);
      await fieldTestServiceImplEntityUpdatePage.setByteAnyMinbytesMikaInput(absolutePath);
      await fieldTestServiceImplEntityUpdatePage.setByteAnyMaxbytesMikaInput(absolutePath);
      await fieldTestServiceImplEntityUpdatePage.setByteTextMikaInput('byteTextMika');
      expect(await fieldTestServiceImplEntityUpdatePage.getByteTextMikaInput()).to.match(/byteTextMika/);
      await fieldTestServiceImplEntityUpdatePage.setByteTextRequiredMikaInput('byteTextRequiredMika');
      expect(await fieldTestServiceImplEntityUpdatePage.getByteTextRequiredMikaInput()).to.match(/byteTextRequiredMika/);
      await waitUntilDisplayed(fieldTestServiceImplEntityUpdatePage.getSaveButton());
      await fieldTestServiceImplEntityUpdatePage.save();
      await waitUntilHidden(fieldTestServiceImplEntityUpdatePage.getSaveButton());
      expect(await fieldTestServiceImplEntityUpdatePage.getSaveButton().isPresent()).to.be.false;
    }

    await createFieldTestServiceImplEntity();
    await fieldTestServiceImplEntityComponentsPage.waitUntilLoaded();
    const nbButtonsBeforeCreate = await fieldTestServiceImplEntityComponentsPage.countDeleteButtons();
    await createFieldTestServiceImplEntity();

    await fieldTestServiceImplEntityComponentsPage.waitUntilDeleteButtonsLength(nbButtonsBeforeCreate + 1);
    expect(await fieldTestServiceImplEntityComponentsPage.countDeleteButtons()).to.eq(nbButtonsBeforeCreate + 1);
  });

  it('should delete last FieldTestServiceImplEntity', async () => {
    await fieldTestServiceImplEntityComponentsPage.waitUntilLoaded();
    const nbButtonsBeforeDelete = await fieldTestServiceImplEntityComponentsPage.countDeleteButtons();
    await fieldTestServiceImplEntityComponentsPage.clickOnLastDeleteButton();

    const deleteModal = element(by.className('modal'));
    await waitUntilDisplayed(deleteModal);

    fieldTestServiceImplEntityDeleteDialog = new FieldTestServiceImplEntityDeleteDialog();
    expect(await fieldTestServiceImplEntityDeleteDialog.getDialogTitle().getAttribute('id')).to.match(
      /travisNg2App.fieldTestServiceImplEntity.delete.question/
    );
    await fieldTestServiceImplEntityDeleteDialog.clickOnConfirmButton();

    await fieldTestServiceImplEntityComponentsPage.waitUntilDeleteButtonsLength(nbButtonsBeforeDelete - 1);
    expect(await fieldTestServiceImplEntityComponentsPage.countDeleteButtons()).to.eq(nbButtonsBeforeDelete - 1);
  });

  after(async () => {
    await navBarPage.autoSignOut();
  });
});
