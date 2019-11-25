import { browser, element, by, protractor } from 'protractor';

import NavBarPage from './../../page-objects/navbar-page';
import SignInPage from './../../page-objects/signin-page';
import FieldTestInfiniteScrollEntityComponentsPage, {
  FieldTestInfiniteScrollEntityDeleteDialog
} from './field-test-infinite-scroll-entity.page-object';
import FieldTestInfiniteScrollEntityUpdatePage from './field-test-infinite-scroll-entity-update.page-object';
import { waitUntilDisplayed, waitUntilHidden } from '../../util/utils';
import path from 'path';

const expect = chai.expect;

describe('FieldTestInfiniteScrollEntity e2e test', () => {
  let navBarPage: NavBarPage;
  let signInPage: SignInPage;
  let fieldTestInfiniteScrollEntityComponentsPage: FieldTestInfiniteScrollEntityComponentsPage;
  let fieldTestInfiniteScrollEntityUpdatePage: FieldTestInfiniteScrollEntityUpdatePage;
  let fieldTestInfiniteScrollEntityDeleteDialog: FieldTestInfiniteScrollEntityDeleteDialog;
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

  it('should load FieldTestInfiniteScrollEntities', async () => {
    await navBarPage.getEntityPage('field-test-infinite-scroll-entity');
    fieldTestInfiniteScrollEntityComponentsPage = new FieldTestInfiniteScrollEntityComponentsPage();
    expect(await fieldTestInfiniteScrollEntityComponentsPage.getTitle().getText()).to.match(/Field Test Infinite Scroll Entities/);
  });

  it('should load create FieldTestInfiniteScrollEntity page', async () => {
    await fieldTestInfiniteScrollEntityComponentsPage.clickOnCreateButton();
    fieldTestInfiniteScrollEntityUpdatePage = new FieldTestInfiniteScrollEntityUpdatePage();
    expect(await fieldTestInfiniteScrollEntityUpdatePage.getPageTitle().getAttribute('id')).to.match(
      /travisNg2App.fieldTestInfiniteScrollEntity.home.createOrEditLabel/
    );
    await fieldTestInfiniteScrollEntityUpdatePage.cancel();
  });

  it('should create and save FieldTestInfiniteScrollEntities', async () => {
    async function createFieldTestInfiniteScrollEntity() {
      await fieldTestInfiniteScrollEntityComponentsPage.clickOnCreateButton();
      await fieldTestInfiniteScrollEntityUpdatePage.setStringHugoInput('stringHugo');
      expect(await fieldTestInfiniteScrollEntityUpdatePage.getStringHugoInput()).to.match(/stringHugo/);
      await fieldTestInfiniteScrollEntityUpdatePage.setStringRequiredHugoInput('stringRequiredHugo');
      expect(await fieldTestInfiniteScrollEntityUpdatePage.getStringRequiredHugoInput()).to.match(/stringRequiredHugo/);
      await fieldTestInfiniteScrollEntityUpdatePage.setStringMinlengthHugoInput('stringMinlengthHugo');
      expect(await fieldTestInfiniteScrollEntityUpdatePage.getStringMinlengthHugoInput()).to.match(/stringMinlengthHugo/);
      await fieldTestInfiniteScrollEntityUpdatePage.setStringMaxlengthHugoInput('stringMaxlengthHugo');
      expect(await fieldTestInfiniteScrollEntityUpdatePage.getStringMaxlengthHugoInput()).to.match(/stringMaxlengthHugo/);
      await fieldTestInfiniteScrollEntityUpdatePage.setStringPatternHugoInput(
        'GJnc5q0FwYnblSA2sHiU9kNwfBj2IeugZrDvv1UEWIwz547hVCTjshMTt5IaLTQpf6TYj'
      );
      expect(await fieldTestInfiniteScrollEntityUpdatePage.getStringPatternHugoInput()).to.match(
        /GJnc5q0FwYnblSA2sHiU9kNwfBj2IeugZrDvv1UEWIwz547hVCTjshMTt5IaLTQpf6TYj/
      );
      await fieldTestInfiniteScrollEntityUpdatePage.setIntegerHugoInput('5');
      expect(await fieldTestInfiniteScrollEntityUpdatePage.getIntegerHugoInput()).to.eq('5');
      await fieldTestInfiniteScrollEntityUpdatePage.setIntegerRequiredHugoInput('5');
      expect(await fieldTestInfiniteScrollEntityUpdatePage.getIntegerRequiredHugoInput()).to.eq('5');
      await fieldTestInfiniteScrollEntityUpdatePage.setIntegerMinHugoInput('5');
      expect(await fieldTestInfiniteScrollEntityUpdatePage.getIntegerMinHugoInput()).to.eq('5');
      await fieldTestInfiniteScrollEntityUpdatePage.setIntegerMaxHugoInput('5');
      expect(await fieldTestInfiniteScrollEntityUpdatePage.getIntegerMaxHugoInput()).to.eq('5');
      await fieldTestInfiniteScrollEntityUpdatePage.setLongHugoInput('5');
      expect(await fieldTestInfiniteScrollEntityUpdatePage.getLongHugoInput()).to.eq('5');
      await fieldTestInfiniteScrollEntityUpdatePage.setLongRequiredHugoInput('5');
      expect(await fieldTestInfiniteScrollEntityUpdatePage.getLongRequiredHugoInput()).to.eq('5');
      await fieldTestInfiniteScrollEntityUpdatePage.setLongMinHugoInput('5');
      expect(await fieldTestInfiniteScrollEntityUpdatePage.getLongMinHugoInput()).to.eq('5');
      await fieldTestInfiniteScrollEntityUpdatePage.setLongMaxHugoInput('5');
      expect(await fieldTestInfiniteScrollEntityUpdatePage.getLongMaxHugoInput()).to.eq('5');
      await fieldTestInfiniteScrollEntityUpdatePage.setFloatHugoInput('5');
      expect(await fieldTestInfiniteScrollEntityUpdatePage.getFloatHugoInput()).to.eq('5');
      await fieldTestInfiniteScrollEntityUpdatePage.setFloatRequiredHugoInput('5');
      expect(await fieldTestInfiniteScrollEntityUpdatePage.getFloatRequiredHugoInput()).to.eq('5');
      await fieldTestInfiniteScrollEntityUpdatePage.setFloatMinHugoInput('5');
      expect(await fieldTestInfiniteScrollEntityUpdatePage.getFloatMinHugoInput()).to.eq('5');
      await fieldTestInfiniteScrollEntityUpdatePage.setFloatMaxHugoInput('5');
      expect(await fieldTestInfiniteScrollEntityUpdatePage.getFloatMaxHugoInput()).to.eq('5');
      await fieldTestInfiniteScrollEntityUpdatePage.setDoubleRequiredHugoInput('5');
      expect(await fieldTestInfiniteScrollEntityUpdatePage.getDoubleRequiredHugoInput()).to.eq('5');
      await fieldTestInfiniteScrollEntityUpdatePage.setDoubleMinHugoInput('5');
      expect(await fieldTestInfiniteScrollEntityUpdatePage.getDoubleMinHugoInput()).to.eq('5');
      await fieldTestInfiniteScrollEntityUpdatePage.setDoubleMaxHugoInput('5');
      expect(await fieldTestInfiniteScrollEntityUpdatePage.getDoubleMaxHugoInput()).to.eq('5');
      await fieldTestInfiniteScrollEntityUpdatePage.setBigDecimalRequiredHugoInput('5');
      expect(await fieldTestInfiniteScrollEntityUpdatePage.getBigDecimalRequiredHugoInput()).to.eq('5');
      await fieldTestInfiniteScrollEntityUpdatePage.setBigDecimalMinHugoInput('5');
      expect(await fieldTestInfiniteScrollEntityUpdatePage.getBigDecimalMinHugoInput()).to.eq('5');
      await fieldTestInfiniteScrollEntityUpdatePage.setBigDecimalMaxHugoInput('5');
      expect(await fieldTestInfiniteScrollEntityUpdatePage.getBigDecimalMaxHugoInput()).to.eq('5');
      await fieldTestInfiniteScrollEntityUpdatePage.setLocalDateHugoInput('01-01-2001');
      expect(await fieldTestInfiniteScrollEntityUpdatePage.getLocalDateHugoInput()).to.eq('2001-01-01');
      await fieldTestInfiniteScrollEntityUpdatePage.setLocalDateRequiredHugoInput('01-01-2001');
      expect(await fieldTestInfiniteScrollEntityUpdatePage.getLocalDateRequiredHugoInput()).to.eq('2001-01-01');
      await fieldTestInfiniteScrollEntityUpdatePage.setInstantHugoInput('01/01/2001' + protractor.Key.TAB + '02:30AM');
      expect(await fieldTestInfiniteScrollEntityUpdatePage.getInstantHugoInput()).to.contain('2001-01-01T02:30');
      await fieldTestInfiniteScrollEntityUpdatePage.setInstanteRequiredHugoInput('01/01/2001' + protractor.Key.TAB + '02:30AM');
      expect(await fieldTestInfiniteScrollEntityUpdatePage.getInstanteRequiredHugoInput()).to.contain('2001-01-01T02:30');
      await fieldTestInfiniteScrollEntityUpdatePage.setZonedDateTimeHugoInput('01/01/2001' + protractor.Key.TAB + '02:30AM');
      expect(await fieldTestInfiniteScrollEntityUpdatePage.getZonedDateTimeHugoInput()).to.contain('2001-01-01T02:30');
      await fieldTestInfiniteScrollEntityUpdatePage.setZonedDateTimeRequiredHugoInput('01/01/2001' + protractor.Key.TAB + '02:30AM');
      expect(await fieldTestInfiniteScrollEntityUpdatePage.getZonedDateTimeRequiredHugoInput()).to.contain('2001-01-01T02:30');
      await fieldTestInfiniteScrollEntityUpdatePage.setDurationHugoInput('PT12S');
      expect(await fieldTestInfiniteScrollEntityUpdatePage.getDurationHugoInput()).to.contain('12');
      await fieldTestInfiniteScrollEntityUpdatePage.setDurationRequiredHugoInput('PT12S');
      expect(await fieldTestInfiniteScrollEntityUpdatePage.getDurationRequiredHugoInput()).to.contain('12');
      const selectedBooleanHugo = await fieldTestInfiniteScrollEntityUpdatePage.getBooleanHugoInput().isSelected();
      if (selectedBooleanHugo) {
        await fieldTestInfiniteScrollEntityUpdatePage.getBooleanHugoInput().click();
        expect(await fieldTestInfiniteScrollEntityUpdatePage.getBooleanHugoInput().isSelected()).to.be.false;
      } else {
        await fieldTestInfiniteScrollEntityUpdatePage.getBooleanHugoInput().click();
        expect(await fieldTestInfiniteScrollEntityUpdatePage.getBooleanHugoInput().isSelected()).to.be.true;
      }
      const selectedBooleanRequiredHugo = await fieldTestInfiniteScrollEntityUpdatePage.getBooleanRequiredHugoInput().isSelected();
      if (selectedBooleanRequiredHugo) {
        await fieldTestInfiniteScrollEntityUpdatePage.getBooleanRequiredHugoInput().click();
        expect(await fieldTestInfiniteScrollEntityUpdatePage.getBooleanRequiredHugoInput().isSelected()).to.be.false;
      } else {
        await fieldTestInfiniteScrollEntityUpdatePage.getBooleanRequiredHugoInput().click();
        expect(await fieldTestInfiniteScrollEntityUpdatePage.getBooleanRequiredHugoInput().isSelected()).to.be.true;
      }
      await fieldTestInfiniteScrollEntityUpdatePage.enumHugoSelectLastOption();
      await fieldTestInfiniteScrollEntityUpdatePage.enumRequiredHugoSelectLastOption();
      await fieldTestInfiniteScrollEntityUpdatePage.setUuidHugoInput('64c99148-3908-465d-8c4a-e510e3ade974');
      expect(await fieldTestInfiniteScrollEntityUpdatePage.getUuidHugoInput()).to.match(/64c99148-3908-465d-8c4a-e510e3ade974/);
      await fieldTestInfiniteScrollEntityUpdatePage.setUuidRequiredHugoInput('64c99148-3908-465d-8c4a-e510e3ade974');
      expect(await fieldTestInfiniteScrollEntityUpdatePage.getUuidRequiredHugoInput()).to.match(/64c99148-3908-465d-8c4a-e510e3ade974/);
      await fieldTestInfiniteScrollEntityUpdatePage.setByteImageHugoInput(absolutePath);
      await fieldTestInfiniteScrollEntityUpdatePage.setByteImageRequiredHugoInput(absolutePath);
      await fieldTestInfiniteScrollEntityUpdatePage.setByteImageMinbytesHugoInput(absolutePath);
      await fieldTestInfiniteScrollEntityUpdatePage.setByteImageMaxbytesHugoInput(absolutePath);
      await fieldTestInfiniteScrollEntityUpdatePage.setByteAnyHugoInput(absolutePath);
      await fieldTestInfiniteScrollEntityUpdatePage.setByteAnyRequiredHugoInput(absolutePath);
      await fieldTestInfiniteScrollEntityUpdatePage.setByteAnyMinbytesHugoInput(absolutePath);
      await fieldTestInfiniteScrollEntityUpdatePage.setByteAnyMaxbytesHugoInput(absolutePath);
      await fieldTestInfiniteScrollEntityUpdatePage.setByteTextHugoInput('byteTextHugo');
      expect(await fieldTestInfiniteScrollEntityUpdatePage.getByteTextHugoInput()).to.match(/byteTextHugo/);
      await fieldTestInfiniteScrollEntityUpdatePage.setByteTextRequiredHugoInput('byteTextRequiredHugo');
      expect(await fieldTestInfiniteScrollEntityUpdatePage.getByteTextRequiredHugoInput()).to.match(/byteTextRequiredHugo/);
      await waitUntilDisplayed(fieldTestInfiniteScrollEntityUpdatePage.getSaveButton());
      await fieldTestInfiniteScrollEntityUpdatePage.save();
      await waitUntilHidden(fieldTestInfiniteScrollEntityUpdatePage.getSaveButton());
      expect(await fieldTestInfiniteScrollEntityUpdatePage.getSaveButton().isPresent()).to.be.false;
    }

    await createFieldTestInfiniteScrollEntity();
    await fieldTestInfiniteScrollEntityComponentsPage.waitUntilLoaded();
    const nbButtonsBeforeCreate = await fieldTestInfiniteScrollEntityComponentsPage.countDeleteButtons();
    await createFieldTestInfiniteScrollEntity();

    await fieldTestInfiniteScrollEntityComponentsPage.waitUntilDeleteButtonsLength(nbButtonsBeforeCreate + 1);
    expect(await fieldTestInfiniteScrollEntityComponentsPage.countDeleteButtons()).to.eq(nbButtonsBeforeCreate + 1);
  });

  it('should delete last FieldTestInfiniteScrollEntity', async () => {
    await fieldTestInfiniteScrollEntityComponentsPage.waitUntilLoaded();
    const nbButtonsBeforeDelete = await fieldTestInfiniteScrollEntityComponentsPage.countDeleteButtons();
    await fieldTestInfiniteScrollEntityComponentsPage.clickOnLastDeleteButton();

    const deleteModal = element(by.className('modal'));
    await waitUntilDisplayed(deleteModal);

    fieldTestInfiniteScrollEntityDeleteDialog = new FieldTestInfiniteScrollEntityDeleteDialog();
    expect(await fieldTestInfiniteScrollEntityDeleteDialog.getDialogTitle().getAttribute('id')).to.match(
      /travisNg2App.fieldTestInfiniteScrollEntity.delete.question/
    );
    await fieldTestInfiniteScrollEntityDeleteDialog.clickOnConfirmButton();

    await fieldTestInfiniteScrollEntityComponentsPage.waitUntilDeleteButtonsLength(nbButtonsBeforeDelete - 1);
    expect(await fieldTestInfiniteScrollEntityComponentsPage.countDeleteButtons()).to.eq(nbButtonsBeforeDelete - 1);
  });

  after(async () => {
    await navBarPage.autoSignOut();
  });
});
