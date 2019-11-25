import { browser, element, by, protractor } from 'protractor';

import NavBarPage from './../../page-objects/navbar-page';
import SignInPage from './../../page-objects/signin-page';
import FieldTestServiceClassEntityComponentsPage, {
  FieldTestServiceClassEntityDeleteDialog
} from './field-test-service-class-entity.page-object';
import FieldTestServiceClassEntityUpdatePage from './field-test-service-class-entity-update.page-object';
import { waitUntilDisplayed, waitUntilHidden } from '../../util/utils';
import path from 'path';

const expect = chai.expect;

describe('FieldTestServiceClassEntity e2e test', () => {
  let navBarPage: NavBarPage;
  let signInPage: SignInPage;
  let fieldTestServiceClassEntityComponentsPage: FieldTestServiceClassEntityComponentsPage;
  let fieldTestServiceClassEntityUpdatePage: FieldTestServiceClassEntityUpdatePage;
  let fieldTestServiceClassEntityDeleteDialog: FieldTestServiceClassEntityDeleteDialog;
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

  it('should load FieldTestServiceClassEntities', async () => {
    await navBarPage.getEntityPage('field-test-service-class-entity');
    fieldTestServiceClassEntityComponentsPage = new FieldTestServiceClassEntityComponentsPage();
    expect(await fieldTestServiceClassEntityComponentsPage.getTitle().getText()).to.match(/Field Test Service Class Entities/);
  });

  it('should load create FieldTestServiceClassEntity page', async () => {
    await fieldTestServiceClassEntityComponentsPage.clickOnCreateButton();
    fieldTestServiceClassEntityUpdatePage = new FieldTestServiceClassEntityUpdatePage();
    expect(await fieldTestServiceClassEntityUpdatePage.getPageTitle().getAttribute('id')).to.match(
      /travisNg2App.fieldTestServiceClassEntity.home.createOrEditLabel/
    );
    await fieldTestServiceClassEntityUpdatePage.cancel();
  });

  it('should create and save FieldTestServiceClassEntities', async () => {
    async function createFieldTestServiceClassEntity() {
      await fieldTestServiceClassEntityComponentsPage.clickOnCreateButton();
      await fieldTestServiceClassEntityUpdatePage.setStringBobInput('stringBob');
      expect(await fieldTestServiceClassEntityUpdatePage.getStringBobInput()).to.match(/stringBob/);
      await fieldTestServiceClassEntityUpdatePage.setStringRequiredBobInput('stringRequiredBob');
      expect(await fieldTestServiceClassEntityUpdatePage.getStringRequiredBobInput()).to.match(/stringRequiredBob/);
      await fieldTestServiceClassEntityUpdatePage.setStringMinlengthBobInput('stringMinlengthBob');
      expect(await fieldTestServiceClassEntityUpdatePage.getStringMinlengthBobInput()).to.match(/stringMinlengthBob/);
      await fieldTestServiceClassEntityUpdatePage.setStringMaxlengthBobInput('stringMaxlengthBob');
      expect(await fieldTestServiceClassEntityUpdatePage.getStringMaxlengthBobInput()).to.match(/stringMaxlengthBob/);
      await fieldTestServiceClassEntityUpdatePage.setStringPatternBobInput('iEtAr9FAbbkXQxt0wioDsioaB1oIUVGY');
      expect(await fieldTestServiceClassEntityUpdatePage.getStringPatternBobInput()).to.match(/iEtAr9FAbbkXQxt0wioDsioaB1oIUVGY/);
      await fieldTestServiceClassEntityUpdatePage.setIntegerBobInput('5');
      expect(await fieldTestServiceClassEntityUpdatePage.getIntegerBobInput()).to.eq('5');
      await fieldTestServiceClassEntityUpdatePage.setIntegerRequiredBobInput('5');
      expect(await fieldTestServiceClassEntityUpdatePage.getIntegerRequiredBobInput()).to.eq('5');
      await fieldTestServiceClassEntityUpdatePage.setIntegerMinBobInput('5');
      expect(await fieldTestServiceClassEntityUpdatePage.getIntegerMinBobInput()).to.eq('5');
      await fieldTestServiceClassEntityUpdatePage.setIntegerMaxBobInput('5');
      expect(await fieldTestServiceClassEntityUpdatePage.getIntegerMaxBobInput()).to.eq('5');
      await fieldTestServiceClassEntityUpdatePage.setLongBobInput('5');
      expect(await fieldTestServiceClassEntityUpdatePage.getLongBobInput()).to.eq('5');
      await fieldTestServiceClassEntityUpdatePage.setLongRequiredBobInput('5');
      expect(await fieldTestServiceClassEntityUpdatePage.getLongRequiredBobInput()).to.eq('5');
      await fieldTestServiceClassEntityUpdatePage.setLongMinBobInput('5');
      expect(await fieldTestServiceClassEntityUpdatePage.getLongMinBobInput()).to.eq('5');
      await fieldTestServiceClassEntityUpdatePage.setLongMaxBobInput('5');
      expect(await fieldTestServiceClassEntityUpdatePage.getLongMaxBobInput()).to.eq('5');
      await fieldTestServiceClassEntityUpdatePage.setFloatBobInput('5');
      expect(await fieldTestServiceClassEntityUpdatePage.getFloatBobInput()).to.eq('5');
      await fieldTestServiceClassEntityUpdatePage.setFloatRequiredBobInput('5');
      expect(await fieldTestServiceClassEntityUpdatePage.getFloatRequiredBobInput()).to.eq('5');
      await fieldTestServiceClassEntityUpdatePage.setFloatMinBobInput('5');
      expect(await fieldTestServiceClassEntityUpdatePage.getFloatMinBobInput()).to.eq('5');
      await fieldTestServiceClassEntityUpdatePage.setFloatMaxBobInput('5');
      expect(await fieldTestServiceClassEntityUpdatePage.getFloatMaxBobInput()).to.eq('5');
      await fieldTestServiceClassEntityUpdatePage.setDoubleRequiredBobInput('5');
      expect(await fieldTestServiceClassEntityUpdatePage.getDoubleRequiredBobInput()).to.eq('5');
      await fieldTestServiceClassEntityUpdatePage.setDoubleMinBobInput('5');
      expect(await fieldTestServiceClassEntityUpdatePage.getDoubleMinBobInput()).to.eq('5');
      await fieldTestServiceClassEntityUpdatePage.setDoubleMaxBobInput('5');
      expect(await fieldTestServiceClassEntityUpdatePage.getDoubleMaxBobInput()).to.eq('5');
      await fieldTestServiceClassEntityUpdatePage.setBigDecimalRequiredBobInput('5');
      expect(await fieldTestServiceClassEntityUpdatePage.getBigDecimalRequiredBobInput()).to.eq('5');
      await fieldTestServiceClassEntityUpdatePage.setBigDecimalMinBobInput('5');
      expect(await fieldTestServiceClassEntityUpdatePage.getBigDecimalMinBobInput()).to.eq('5');
      await fieldTestServiceClassEntityUpdatePage.setBigDecimalMaxBobInput('5');
      expect(await fieldTestServiceClassEntityUpdatePage.getBigDecimalMaxBobInput()).to.eq('5');
      await fieldTestServiceClassEntityUpdatePage.setLocalDateBobInput('01-01-2001');
      expect(await fieldTestServiceClassEntityUpdatePage.getLocalDateBobInput()).to.eq('2001-01-01');
      await fieldTestServiceClassEntityUpdatePage.setLocalDateRequiredBobInput('01-01-2001');
      expect(await fieldTestServiceClassEntityUpdatePage.getLocalDateRequiredBobInput()).to.eq('2001-01-01');
      await fieldTestServiceClassEntityUpdatePage.setInstantBobInput('01/01/2001' + protractor.Key.TAB + '02:30AM');
      expect(await fieldTestServiceClassEntityUpdatePage.getInstantBobInput()).to.contain('2001-01-01T02:30');
      await fieldTestServiceClassEntityUpdatePage.setInstanteRequiredBobInput('01/01/2001' + protractor.Key.TAB + '02:30AM');
      expect(await fieldTestServiceClassEntityUpdatePage.getInstanteRequiredBobInput()).to.contain('2001-01-01T02:30');
      await fieldTestServiceClassEntityUpdatePage.setZonedDateTimeBobInput('01/01/2001' + protractor.Key.TAB + '02:30AM');
      expect(await fieldTestServiceClassEntityUpdatePage.getZonedDateTimeBobInput()).to.contain('2001-01-01T02:30');
      await fieldTestServiceClassEntityUpdatePage.setZonedDateTimeRequiredBobInput('01/01/2001' + protractor.Key.TAB + '02:30AM');
      expect(await fieldTestServiceClassEntityUpdatePage.getZonedDateTimeRequiredBobInput()).to.contain('2001-01-01T02:30');
      await fieldTestServiceClassEntityUpdatePage.setDurationBobInput('PT12S');
      expect(await fieldTestServiceClassEntityUpdatePage.getDurationBobInput()).to.contain('12');
      await fieldTestServiceClassEntityUpdatePage.setDurationRequiredBobInput('PT12S');
      expect(await fieldTestServiceClassEntityUpdatePage.getDurationRequiredBobInput()).to.contain('12');
      const selectedBooleanBob = await fieldTestServiceClassEntityUpdatePage.getBooleanBobInput().isSelected();
      if (selectedBooleanBob) {
        await fieldTestServiceClassEntityUpdatePage.getBooleanBobInput().click();
        expect(await fieldTestServiceClassEntityUpdatePage.getBooleanBobInput().isSelected()).to.be.false;
      } else {
        await fieldTestServiceClassEntityUpdatePage.getBooleanBobInput().click();
        expect(await fieldTestServiceClassEntityUpdatePage.getBooleanBobInput().isSelected()).to.be.true;
      }
      const selectedBooleanRequiredBob = await fieldTestServiceClassEntityUpdatePage.getBooleanRequiredBobInput().isSelected();
      if (selectedBooleanRequiredBob) {
        await fieldTestServiceClassEntityUpdatePage.getBooleanRequiredBobInput().click();
        expect(await fieldTestServiceClassEntityUpdatePage.getBooleanRequiredBobInput().isSelected()).to.be.false;
      } else {
        await fieldTestServiceClassEntityUpdatePage.getBooleanRequiredBobInput().click();
        expect(await fieldTestServiceClassEntityUpdatePage.getBooleanRequiredBobInput().isSelected()).to.be.true;
      }
      await fieldTestServiceClassEntityUpdatePage.enumBobSelectLastOption();
      await fieldTestServiceClassEntityUpdatePage.enumRequiredBobSelectLastOption();
      await fieldTestServiceClassEntityUpdatePage.setUuidBobInput('64c99148-3908-465d-8c4a-e510e3ade974');
      expect(await fieldTestServiceClassEntityUpdatePage.getUuidBobInput()).to.match(/64c99148-3908-465d-8c4a-e510e3ade974/);
      await fieldTestServiceClassEntityUpdatePage.setUuidRequiredBobInput('64c99148-3908-465d-8c4a-e510e3ade974');
      expect(await fieldTestServiceClassEntityUpdatePage.getUuidRequiredBobInput()).to.match(/64c99148-3908-465d-8c4a-e510e3ade974/);
      await fieldTestServiceClassEntityUpdatePage.setByteImageBobInput(absolutePath);
      await fieldTestServiceClassEntityUpdatePage.setByteImageRequiredBobInput(absolutePath);
      await fieldTestServiceClassEntityUpdatePage.setByteImageMinbytesBobInput(absolutePath);
      await fieldTestServiceClassEntityUpdatePage.setByteImageMaxbytesBobInput(absolutePath);
      await fieldTestServiceClassEntityUpdatePage.setByteAnyBobInput(absolutePath);
      await fieldTestServiceClassEntityUpdatePage.setByteAnyRequiredBobInput(absolutePath);
      await fieldTestServiceClassEntityUpdatePage.setByteAnyMinbytesBobInput(absolutePath);
      await fieldTestServiceClassEntityUpdatePage.setByteAnyMaxbytesBobInput(absolutePath);
      await fieldTestServiceClassEntityUpdatePage.setByteTextBobInput('byteTextBob');
      expect(await fieldTestServiceClassEntityUpdatePage.getByteTextBobInput()).to.match(/byteTextBob/);
      await fieldTestServiceClassEntityUpdatePage.setByteTextRequiredBobInput('byteTextRequiredBob');
      expect(await fieldTestServiceClassEntityUpdatePage.getByteTextRequiredBobInput()).to.match(/byteTextRequiredBob/);
      await waitUntilDisplayed(fieldTestServiceClassEntityUpdatePage.getSaveButton());
      await fieldTestServiceClassEntityUpdatePage.save();
      await waitUntilHidden(fieldTestServiceClassEntityUpdatePage.getSaveButton());
      expect(await fieldTestServiceClassEntityUpdatePage.getSaveButton().isPresent()).to.be.false;
    }

    await createFieldTestServiceClassEntity();
    await fieldTestServiceClassEntityComponentsPage.waitUntilLoaded();
    const nbButtonsBeforeCreate = await fieldTestServiceClassEntityComponentsPage.countDeleteButtons();
    await createFieldTestServiceClassEntity();

    await fieldTestServiceClassEntityComponentsPage.waitUntilDeleteButtonsLength(nbButtonsBeforeCreate + 1);
    expect(await fieldTestServiceClassEntityComponentsPage.countDeleteButtons()).to.eq(nbButtonsBeforeCreate + 1);
  });

  it('should delete last FieldTestServiceClassEntity', async () => {
    await fieldTestServiceClassEntityComponentsPage.waitUntilLoaded();
    const nbButtonsBeforeDelete = await fieldTestServiceClassEntityComponentsPage.countDeleteButtons();
    await fieldTestServiceClassEntityComponentsPage.clickOnLastDeleteButton();

    const deleteModal = element(by.className('modal'));
    await waitUntilDisplayed(deleteModal);

    fieldTestServiceClassEntityDeleteDialog = new FieldTestServiceClassEntityDeleteDialog();
    expect(await fieldTestServiceClassEntityDeleteDialog.getDialogTitle().getAttribute('id')).to.match(
      /travisNg2App.fieldTestServiceClassEntity.delete.question/
    );
    await fieldTestServiceClassEntityDeleteDialog.clickOnConfirmButton();

    await fieldTestServiceClassEntityComponentsPage.waitUntilDeleteButtonsLength(nbButtonsBeforeDelete - 1);
    expect(await fieldTestServiceClassEntityComponentsPage.countDeleteButtons()).to.eq(nbButtonsBeforeDelete - 1);
  });

  after(async () => {
    await navBarPage.autoSignOut();
  });
});
