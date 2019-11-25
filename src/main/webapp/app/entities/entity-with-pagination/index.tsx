import React from 'react';
import { Switch } from 'react-router-dom';

import ErrorBoundaryRoute from 'app/shared/error/error-boundary-route';

import EntityWithPagination from './entity-with-pagination';
import EntityWithPaginationDetail from './entity-with-pagination-detail';
import EntityWithPaginationUpdate from './entity-with-pagination-update';
import EntityWithPaginationDeleteDialog from './entity-with-pagination-delete-dialog';

const Routes = ({ match }) => (
  <>
    <Switch>
      <ErrorBoundaryRoute exact path={`${match.url}/new`} component={EntityWithPaginationUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id/edit`} component={EntityWithPaginationUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id`} component={EntityWithPaginationDetail} />
      <ErrorBoundaryRoute path={match.url} component={EntityWithPagination} />
    </Switch>
    <ErrorBoundaryRoute path={`${match.url}/:id/delete`} component={EntityWithPaginationDeleteDialog} />
  </>
);

export default Routes;
