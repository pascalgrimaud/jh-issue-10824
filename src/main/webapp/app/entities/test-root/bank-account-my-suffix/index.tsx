import React from 'react';
import { Switch } from 'react-router-dom';

import ErrorBoundaryRoute from 'app/shared/error/error-boundary-route';

import BankAccountMySuffix from './bank-account-my-suffix';
import BankAccountMySuffixDetail from './bank-account-my-suffix-detail';
import BankAccountMySuffixUpdate from './bank-account-my-suffix-update';
import BankAccountMySuffixDeleteDialog from './bank-account-my-suffix-delete-dialog';

const Routes = ({ match }) => (
  <>
    <Switch>
      <ErrorBoundaryRoute exact path={`${match.url}/new`} component={BankAccountMySuffixUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id/edit`} component={BankAccountMySuffixUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id`} component={BankAccountMySuffixDetail} />
      <ErrorBoundaryRoute path={match.url} component={BankAccountMySuffix} />
    </Switch>
    <ErrorBoundaryRoute path={`${match.url}/:id/delete`} component={BankAccountMySuffixDeleteDialog} />
  </>
);

export default Routes;
