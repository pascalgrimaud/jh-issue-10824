import React from 'react';
import { Switch } from 'react-router-dom';

import ErrorBoundaryRoute from 'app/shared/error/error-boundary-route';

import EntityWithServiceClass from './entity-with-service-class';
import EntityWithServiceClassDetail from './entity-with-service-class-detail';
import EntityWithServiceClassUpdate from './entity-with-service-class-update';
import EntityWithServiceClassDeleteDialog from './entity-with-service-class-delete-dialog';

const Routes = ({ match }) => (
  <>
    <Switch>
      <ErrorBoundaryRoute exact path={`${match.url}/new`} component={EntityWithServiceClassUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id/edit`} component={EntityWithServiceClassUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id`} component={EntityWithServiceClassDetail} />
      <ErrorBoundaryRoute path={match.url} component={EntityWithServiceClass} />
    </Switch>
    <ErrorBoundaryRoute path={`${match.url}/:id/delete`} component={EntityWithServiceClassDeleteDialog} />
  </>
);

export default Routes;
