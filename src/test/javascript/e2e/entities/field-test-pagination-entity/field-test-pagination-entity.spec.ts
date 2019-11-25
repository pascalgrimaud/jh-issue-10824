import { browser, element, by, protractor } from 'protractor';

import NavBarPage from './../../page-objects/navbar-page';
import SignInPage from './../../page-objects/signin-page';
import FieldTestPaginationEntityComponentsPage, { FieldTestPaginationEntityDeleteDialog } from './field-test-pagination-entity.page-object';
import FieldTestPaginationEntityUpdatePage from './field-test-pagination-entity-update.page-object';
import { waitUntilDisplayed, waitUntilHidden } from '../../util/utils';
import path from 'path';

const expect = chai.expect;

describe('FieldTestPaginationEntity e2e test', () => {
  let navBarPage: NavBarPage;
  let signInPage: SignInPage;
  let fieldTestPaginationEntityComponentsPage: FieldTestPaginationEntityComponentsPage;
  let fieldTestPaginationEntityUpdatePage: FieldTestPaginationEntityUpdatePage;
  let fieldTestPaginationEntityDeleteDialog: FieldTestPaginationEntityDeleteDialog;
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

  it('should load FieldTestPaginationEntities', async () => {
    await navBarPage.getEntityPage('field-test-pagination-entity');
    fieldTestPaginationEntityComponentsPage = new FieldTestPaginationEntityComponentsPage();
    expect(await fieldTestPaginationEntityComponentsPage.getTitle().getText()).to.match(/Field Test Pagination Entities/);
  });

  it('should load create FieldTestPaginationEntity page', async () => {
    await fieldTestPaginationEntityComponentsPage.clickOnCreateButton();
    fieldTestPaginationEntityUpdatePage = new FieldTestPaginationEntityUpdatePage();
    expect(await fieldTestPaginationEntityUpdatePage.getPageTitle().getAttribute('id')).to.match(
      /travisNg2App.fieldTestPaginationEntity.home.createOrEditLabel/
    );
    await fieldTestPaginationEntityUpdatePage.cancel();
  });

  it('should create and save FieldTestPaginationEntities', async () => {
    async function createFieldTestPaginationEntity() {
      await fieldTestPaginationEntityComponentsPage.clickOnCreateButton();
      await fieldTestPaginationEntityUpdatePage.setStringAliceInput('stringAlice');
      expect(await fieldTestPaginationEntityUpdatePage.getStringAliceInput()).to.match(/stringAlice/);
      await fieldTestPaginationEntityUpdatePage.setStringRequiredAliceInput('stringRequiredAlice');
      expect(await fieldTestPaginationEntityUpdatePage.getStringRequiredAliceInput()).to.match(/stringRequiredAlice/);
      await fieldTestPaginationEntityUpdatePage.setStringMinlengthAliceInput('stringMinlengthAlice');
      expect(await fieldTestPaginationEntityUpdatePage.getStringMinlengthAliceInput()).to.match(/stringMinlengthAlice/);
      await fieldTestPaginationEntityUpdatePage.setStringMaxlengthAliceInput('stringMaxlengthAlice');
      expect(await fieldTestPaginationEntityUpdatePage.getStringMaxlengthAliceInput()).to.match(/stringMaxlengthAlice/);
      await fieldTestPaginationEntityUpdatePage.setStringPatternAliceInput('mkGRqkHLwnrvM246kvbek4wenoqwMEmc2oo0VQfSzWdfwD');
      expect(await fieldTestPaginationEntityUpdatePage.getStringPatternAliceInput()).to.match(
        /mkGRqkHLwnrvM246kvbek4wenoqwMEmc2oo0VQfSzWdfwD/
      );
      await fieldTestPaginationEntityUpdatePage.setIntegerAliceInput('5');
      expect(await fieldTestPaginationEntityUpdatePage.getIntegerAliceInput()).to.eq('5');
      await fieldTestPaginationEntityUpdatePage.setIntegerRequiredAliceInput('5');
      expect(await fieldTestPaginationEntityUpdatePage.getIntegerRequiredAliceInput()).to.eq('5');
      await fieldTestPaginationEntityUpdatePage.setIntegerMinAliceInput('5');
      expect(await fieldTestPaginationEntityUpdatePage.getIntegerMinAliceInput()).to.eq('5');
      await fieldTestPaginationEntityUpdatePage.setIntegerMaxAliceInput('5');
      expect(await fieldTestPaginationEntityUpdatePage.getIntegerMaxAliceInput()).to.eq('5');
      await fieldTestPaginationEntityUpdatePage.setLongAliceInput('5');
      expect(await fieldTestPaginationEntityUpdatePage.getLongAliceInput()).to.eq('5');
      await fieldTestPaginationEntityUpdatePage.setLongRequiredAliceInput('5');
      expect(await fieldTestPaginationEntityUpdatePage.getLongRequiredAliceInput()).to.eq('5');
      await fieldTestPaginationEntityUpdatePage.setLongMinAliceInput('5');
      expect(await fieldTestPaginationEntityUpdatePage.getLongMinAliceInput()).to.eq('5');
      await fieldTestPaginationEntityUpdatePage.setLongMaxAliceInput('5');
      expect(await fieldTestPaginationEntityUpdatePage.getLongMaxAliceInput()).to.eq('5');
      await fieldTestPaginationEntityUpdatePage.setFloatAliceInput('5');
      expect(await fieldTestPaginationEntityUpdatePage.getFloatAliceInput()).to.eq('5');
      await fieldTestPaginationEntityUpdatePage.setFloatRequiredAliceInput('5');
      expect(await fieldTestPaginationEntityUpdatePage.getFloatRequiredAliceInput()).to.eq('5');
      await fieldTestPaginationEntityUpdatePage.setFloatMinAliceInput('5');
      expect(await fieldTestPaginationEntityUpdatePage.getFloatMinAliceInput()).to.eq('5');
      await fieldTestPaginationEntityUpdatePage.setFloatMaxAliceInput('5');
      expect(await fieldTestPaginationEntityUpdatePage.getFloatMaxAliceInput()).to.eq('5');
      await fieldTestPaginationEntityUpdatePage.setDoubleRequiredAliceInput('5');
      expect(await fieldTestPaginationEntityUpdatePage.getDoubleRequiredAliceInput()).to.eq('5');
      await fieldTestPaginationEntityUpdatePage.setDoubleMinAliceInput('5');
      expect(await fieldTestPaginationEntityUpdatePage.getDoubleMinAliceInput()).to.eq('5');
      await fieldTestPaginationEntityUpdatePage.setDoubleMaxAliceInput('5');
      expect(await fieldTestPaginationEntityUpdatePage.getDoubleMaxAliceInput()).to.eq('5');
      await fieldTestPaginationEntityUpdatePage.setBigDecimalRequiredAliceInput('5');
      expect(await fieldTestPaginationEntityUpdatePage.getBigDecimalRequiredAliceInput()).to.eq('5');
      await fieldTestPaginationEntityUpdatePage.setBigDecimalMinAliceInput('5');
      expect(await fieldTestPaginationEntityUpdatePage.getBigDecimalMinAliceInput()).to.eq('5');
      await fieldTestPaginationEntityUpdatePage.setBigDecimalMaxAliceInput('5');
      expect(await fieldTestPaginationEntityUpdatePage.getBigDecimalMaxAliceInput()).to.eq('5');
      await fieldTestPaginationEntityUpdatePage.setLocalDateAliceInput('01-01-2001');
      expect(await fieldTestPaginationEntityUpdatePage.getLocalDateAliceInput()).to.eq('2001-01-01');
      await fieldTestPaginationEntityUpdatePage.setLocalDateRequiredAliceInput('01-01-2001');
      expect(await fieldTestPaginationEntityUpdatePage.getLocalDateRequiredAliceInput()).to.eq('2001-01-01');
      await fieldTestPaginationEntityUpdatePage.setInstantAliceInput('01/01/2001' + protractor.Key.TAB + '02:30AM');
      expect(await fieldTestPaginationEntityUpdatePage.getInstantAliceInput()).to.contain('2001-01-01T02:30');
      await fieldTestPaginationEntityUpdatePage.setInstanteRequiredAliceInput('01/01/2001' + protractor.Key.TAB + '02:30AM');
      expect(await fieldTestPaginationEntityUpdatePage.getInstanteRequiredAliceInput()).to.contain('2001-01-01T02:30');
      await fieldTestPaginationEntityUpdatePage.setZonedDateTimeAliceInput('01/01/2001' + protractor.Key.TAB + '02:30AM');
      expect(await fieldTestPaginationEntityUpdatePage.getZonedDateTimeAliceInput()).to.contain('2001-01-01T02:30');
      await fieldTestPaginationEntityUpdatePage.setZonedDateTimeRequiredAliceInput('01/01/2001' + protractor.Key.TAB + '02:30AM');
      expect(await fieldTestPaginationEntityUpdatePage.getZonedDateTimeRequiredAliceInput()).to.contain('2001-01-01T02:30');
      await fieldTestPaginationEntityUpdatePage.setDurationAliceInput('PT12S');
      expect(await fieldTestPaginationEntityUpdatePage.getDurationAliceInput()).to.contain('12');
      await fieldTestPaginationEntityUpdatePage.setDurationRequiredAliceInput('PT12S');
      expect(await fieldTestPaginationEntityUpdatePage.getDurationRequiredAliceInput()).to.contain('12');
      const selectedBooleanAlice = await fieldTestPaginationEntityUpdatePage.getBooleanAliceInput().isSelected();
      if (selectedBooleanAlice) {
        await fieldTestPaginationEntityUpdatePage.getBooleanAliceInput().click();
        expect(await fieldTestPaginationEntityUpdatePage.getBooleanAliceInput().isSelected()).to.be.false;
      } else {
        await fieldTestPaginationEntityUpdatePage.getBooleanAliceInput().click();
        expect(await fieldTestPaginationEntityUpdatePage.getBooleanAliceInput().isSelected()).to.be.true;
      }
      const selectedBooleanRequiredAlice = await fieldTestPaginationEntityUpdatePage.getBooleanRequiredAliceInput().isSelected();
      if (selectedBooleanRequiredAlice) {
        await fieldTestPaginationEntityUpdatePage.getBooleanRequiredAliceInput().click();
        expect(await fieldTestPaginationEntityUpdatePage.getBooleanRequiredAliceInput().isSelected()).to.be.false;
      } else {
        await fieldTestPaginationEntityUpdatePage.getBooleanRequiredAliceInput().click();
        expect(await fieldTestPaginationEntityUpdatePage.getBooleanRequiredAliceInput().isSelected()).to.be.true;
      }
      await fieldTestPaginationEntityUpdatePage.enumAliceSelectLastOption();
      await fieldTestPaginationEntityUpdatePage.enumRequiredAliceSelectLastOption();
      await fieldTestPaginationEntityUpdatePage.setUuidAliceInput('64c99148-3908-465d-8c4a-e510e3ade974');
      expect(await fieldTestPaginationEntityUpdatePage.getUuidAliceInput()).to.match(/64c99148-3908-465d-8c4a-e510e3ade974/);
      await fieldTestPaginationEntityUpdatePage.setUuidRequiredAliceInput('64c99148-3908-465d-8c4a-e510e3ade974');
      expect(await fieldTestPaginationEntityUpdatePage.getUuidRequiredAliceInput()).to.match(/64c99148-3908-465d-8c4a-e510e3ade974/);
      await fieldTestPaginationEntityUpdatePage.setByteImageAliceInput(absolutePath);
      await fieldTestPaginationEntityUpdatePage.setByteImageRequiredAliceInput(absolutePath);
      await fieldTestPaginationEntityUpdatePage.setByteImageMinbytesAliceInput(absolutePath);
      await fieldTestPaginationEntityUpdatePage.setByteImageMaxbytesAliceInput(absolutePath);
      await fieldTestPaginationEntityUpdatePage.setByteAnyAliceInput(absolutePath);
      await fieldTestPaginationEntityUpdatePage.setByteAnyRequiredAliceInput(absolutePath);
      await fieldTestPaginationEntityUpdatePage.setByteAnyMinbytesAliceInput(absolutePath);
      await fieldTestPaginationEntityUpdatePage.setByteAnyMaxbytesAliceInput(absolutePath);
      await fieldTestPaginationEntityUpdatePage.setByteTextAliceInput('byteTextAlice');
      expect(await fieldTestPaginationEntityUpdatePage.getByteTextAliceInput()).to.match(/byteTextAlice/);
      await fieldTestPaginationEntityUpdatePage.setByteTextRequiredAliceInput('byteTextRequiredAlice');
      expect(await fieldTestPaginationEntityUpdatePage.getByteTextRequiredAliceInput()).to.match(/byteTextRequiredAlice/);
      await waitUntilDisplayed(fieldTestPaginationEntityUpdatePage.getSaveButton());
      await fieldTestPaginationEntityUpdatePage.save();
      await waitUntilHidden(fieldTestPaginationEntityUpdatePage.getSaveButton());
      expect(await fieldTestPaginationEntityUpdatePage.getSaveButton().isPresent()).to.be.false;
    }

    await createFieldTestPaginationEntity();
    await fieldTestPaginationEntityComponentsPage.waitUntilLoaded();
    const nbButtonsBeforeCreate = await fieldTestPaginationEntityComponentsPage.countDeleteButtons();
    await createFieldTestPaginationEntity();

    await fieldTestPaginationEntityComponentsPage.waitUntilDeleteButtonsLength(nbButtonsBeforeCreate + 1);
    expect(await fieldTestPaginationEntityComponentsPage.countDeleteButtons()).to.eq(nbButtonsBeforeCreate + 1);
  });

  it('should delete last FieldTestPaginationEntity', async () => {
    await fieldTestPaginationEntityComponentsPage.waitUntilLoaded();
    const nbButtonsBeforeDelete = await fieldTestPaginationEntityComponentsPage.countDeleteButtons();
    await fieldTestPaginationEntityComponentsPage.clickOnLastDeleteButton();

    const deleteModal = element(by.className('modal'));
    await waitUntilDisplayed(deleteModal);

    fieldTestPaginationEntityDeleteDialog = new FieldTestPaginationEntityDeleteDialog();
    expect(await fieldTestPaginationEntityDeleteDialog.getDialogTitle().getAttribute('id')).to.match(
      /travisNg2App.fieldTestPaginationEntity.delete.question/
    );
    await fieldTestPaginationEntityDeleteDialog.clickOnConfirmButton();

    await fieldTestPaginationEntityComponentsPage.waitUntilDeleteButtonsLength(nbButtonsBeforeDelete - 1);
    expect(await fieldTestPaginationEntityComponentsPage.countDeleteButtons()).to.eq(nbButtonsBeforeDelete - 1);
  });

  after(async () => {
    await navBarPage.autoSignOut();
  });
});
