import React from 'react';
import { Switch } from 'react-router-dom';

import ErrorBoundaryRoute from 'app/shared/error/error-boundary-route';

import TestCustomTableName from './test-custom-table-name';
import TestCustomTableNameDetail from './test-custom-table-name-detail';
import TestCustomTableNameUpdate from './test-custom-table-name-update';
import TestCustomTableNameDeleteDialog from './test-custom-table-name-delete-dialog';

const Routes = ({ match }) => (
  <>
    <Switch>
      <ErrorBoundaryRoute exact path={`${match.url}/new`} component={TestCustomTableNameUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id/edit`} component={TestCustomTableNameUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id`} component={TestCustomTableNameDetail} />
      <ErrorBoundaryRoute path={match.url} component={TestCustomTableName} />
    </Switch>
    <ErrorBoundaryRoute path={`${match.url}/:id/delete`} component={TestCustomTableNameDeleteDialog} />
  </>
);

export default Routes;
