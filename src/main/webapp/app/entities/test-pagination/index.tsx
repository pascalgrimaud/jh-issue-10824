import React from 'react';
import { Switch } from 'react-router-dom';

import ErrorBoundaryRoute from 'app/shared/error/error-boundary-route';

import TestPagination from './test-pagination';
import TestPaginationDetail from './test-pagination-detail';
import TestPaginationUpdate from './test-pagination-update';
import TestPaginationDeleteDialog from './test-pagination-delete-dialog';

const Routes = ({ match }) => (
  <>
    <Switch>
      <ErrorBoundaryRoute exact path={`${match.url}/new`} component={TestPaginationUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id/edit`} component={TestPaginationUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id`} component={TestPaginationDetail} />
      <ErrorBoundaryRoute path={match.url} component={TestPagination} />
    </Switch>
    <ErrorBoundaryRoute path={`${match.url}/:id/delete`} component={TestPaginationDeleteDialog} />
  </>
);

export default Routes;
