import { browser, element, by } from 'protractor';

import NavBarPage from './../../page-objects/navbar-page';
import SignInPage from './../../page-objects/signin-page';
import TestTwoRelationshipsSameEntityComponentsPage, {
  TestTwoRelationshipsSameEntityDeleteDialog
} from './test-two-relationships-same-entity-my-suffix.page-object';
import TestTwoRelationshipsSameEntityUpdatePage from './test-two-relationships-same-entity-my-suffix-update.page-object';
import { waitUntilDisplayed, waitUntilHidden } from '../../util/utils';

const expect = chai.expect;

describe('TestTwoRelationshipsSameEntity e2e test', () => {
  let navBarPage: NavBarPage;
  let signInPage: SignInPage;
  let testTwoRelationshipsSameEntityComponentsPage: TestTwoRelationshipsSameEntityComponentsPage;
  let testTwoRelationshipsSameEntityUpdatePage: TestTwoRelationshipsSameEntityUpdatePage;
  /* let testTwoRelationshipsSameEntityDeleteDialog: TestTwoRelationshipsSameEntityDeleteDialog; */

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

  it('should load TestTwoRelationshipsSameEntities', async () => {
    await navBarPage.getEntityPage('test-two-relationships-same-entity-my-suffix');
    testTwoRelationshipsSameEntityComponentsPage = new TestTwoRelationshipsSameEntityComponentsPage();
    expect(await testTwoRelationshipsSameEntityComponentsPage.getTitle().getText()).to.match(/Test Two Relationships Same Entities/);
  });

  it('should load create TestTwoRelationshipsSameEntity page', async () => {
    await testTwoRelationshipsSameEntityComponentsPage.clickOnCreateButton();
    testTwoRelationshipsSameEntityUpdatePage = new TestTwoRelationshipsSameEntityUpdatePage();
    expect(await testTwoRelationshipsSameEntityUpdatePage.getPageTitle().getAttribute('id')).to.match(
      /travisNg2App.testTwoRelationshipsSameEntity.home.createOrEditLabel/
    );
    await testTwoRelationshipsSameEntityUpdatePage.cancel();
  });

  /*  it('should create and save TestTwoRelationshipsSameEntities', async () => {
        async function createTestTwoRelationshipsSameEntity() {
            await testTwoRelationshipsSameEntityComponentsPage.clickOnCreateButton();
            await testTwoRelationshipsSameEntityUpdatePage.firstRelationshipSelectLastOption();
            await testTwoRelationshipsSameEntityUpdatePage.secondRelationshipSelectLastOption();
            await testTwoRelationshipsSameEntityUpdatePage.userOneSelectLastOption();
            await testTwoRelationshipsSameEntityUpdatePage.userTwoSelectLastOption();
            await testTwoRelationshipsSameEntityUpdatePage.firstUniqueRequiredRelationSelectLastOption();
            await testTwoRelationshipsSameEntityUpdatePage.secondUniqueRequiredRelationSelectLastOption();
            await waitUntilDisplayed(testTwoRelationshipsSameEntityUpdatePage.getSaveButton());
            await testTwoRelationshipsSameEntityUpdatePage.save();
            await waitUntilHidden(testTwoRelationshipsSameEntityUpdatePage.getSaveButton());
            expect(await testTwoRelationshipsSameEntityUpdatePage.getSaveButton().isPresent()).to.be.false;
        }

        await createTestTwoRelationshipsSameEntity();
        await testTwoRelationshipsSameEntityComponentsPage.waitUntilLoaded();
        const nbButtonsBeforeCreate = await testTwoRelationshipsSameEntityComponentsPage.countDeleteButtons();
        await createTestTwoRelationshipsSameEntity();

        await testTwoRelationshipsSameEntityComponentsPage.waitUntilDeleteButtonsLength(nbButtonsBeforeCreate + 1);
        expect(await testTwoRelationshipsSameEntityComponentsPage.countDeleteButtons()).to.eq(nbButtonsBeforeCreate + 1);
    }); */

  /*  it('should delete last TestTwoRelationshipsSameEntity', async () => {
        await testTwoRelationshipsSameEntityComponentsPage.waitUntilLoaded();
        const nbButtonsBeforeDelete = await testTwoRelationshipsSameEntityComponentsPage.countDeleteButtons();
        await testTwoRelationshipsSameEntityComponentsPage.clickOnLastDeleteButton();

        const deleteModal = element(by.className('modal'));
        await waitUntilDisplayed(deleteModal);

        testTwoRelationshipsSameEntityDeleteDialog = new TestTwoRelationshipsSameEntityDeleteDialog();
        expect(await testTwoRelationshipsSameEntityDeleteDialog.getDialogTitle().getAttribute('id')).to.match(/travisNg2App.testTwoRelationshipsSameEntity.delete.question/);
        await testTwoRelationshipsSameEntityDeleteDialog.clickOnConfirmButton();

        await testTwoRelationshipsSameEntityComponentsPage.waitUntilDeleteButtonsLength(nbButtonsBeforeDelete - 1);
        expect(await testTwoRelationshipsSameEntityComponentsPage.countDeleteButtons()).to.eq(nbButtonsBeforeDelete - 1);
    }); */

  after(async () => {
    await navBarPage.autoSignOut();
  });
});
