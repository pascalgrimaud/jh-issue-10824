import React from 'react';
import { Switch } from 'react-router-dom';

import ErrorBoundaryRoute from 'app/shared/error/error-boundary-route';

import TestServiceClass from './test-service-class';
import TestServiceClassDetail from './test-service-class-detail';
import TestServiceClassUpdate from './test-service-class-update';
import TestServiceClassDeleteDialog from './test-service-class-delete-dialog';

const Routes = ({ match }) => (
  <>
    <Switch>
      <ErrorBoundaryRoute exact path={`${match.url}/new`} component={TestServiceClassUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id/edit`} component={TestServiceClassUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id`} component={TestServiceClassDetail} />
      <ErrorBoundaryRoute path={match.url} component={TestServiceClass} />
    </Switch>
    <ErrorBoundaryRoute path={`${match.url}/:id/delete`} component={TestServiceClassDeleteDialog} />
  </>
);

export default Routes;
