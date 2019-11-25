import React from 'react';
import { Switch } from 'react-router-dom';

import ErrorBoundaryRoute from 'app/shared/error/error-boundary-route';

import TestServiceImpl from './test-service-impl';
import TestServiceImplDetail from './test-service-impl-detail';
import TestServiceImplUpdate from './test-service-impl-update';
import TestServiceImplDeleteDialog from './test-service-impl-delete-dialog';

const Routes = ({ match }) => (
  <>
    <Switch>
      <ErrorBoundaryRoute exact path={`${match.url}/new`} component={TestServiceImplUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id/edit`} component={TestServiceImplUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id`} component={TestServiceImplDetail} />
      <ErrorBoundaryRoute path={match.url} component={TestServiceImpl} />
    </Switch>
    <ErrorBoundaryRoute path={`${match.url}/:id/delete`} component={TestServiceImplDeleteDialog} />
  </>
);

export default Routes;
