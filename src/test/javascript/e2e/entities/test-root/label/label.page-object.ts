import { element, by, ElementFinder } from 'protractor';

import { waitUntilCount, waitUntilDisplayed } from '../../../util/utils';

export default class LabelComponentsPage {
  title: ElementFinder = element(by.id('label-heading'));

  getTitle() {
    return this.title;
  }
}
