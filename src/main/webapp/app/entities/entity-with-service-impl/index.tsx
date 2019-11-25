import React from 'react';
import { Switch } from 'react-router-dom';

import ErrorBoundaryRoute from 'app/shared/error/error-boundary-route';

import EntityWithServiceImpl from './entity-with-service-impl';
import EntityWithServiceImplDetail from './entity-with-service-impl-detail';
import EntityWithServiceImplUpdate from './entity-with-service-impl-update';
import EntityWithServiceImplDeleteDialog from './entity-with-service-impl-delete-dialog';

const Routes = ({ match }) => (
  <>
    <Switch>
      <ErrorBoundaryRoute exact path={`${match.url}/new`} component={EntityWithServiceImplUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id/edit`} component={EntityWithServiceImplUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id`} component={EntityWithServiceImplDetail} />
      <ErrorBoundaryRoute path={match.url} component={EntityWithServiceImpl} />
    </Switch>
    <ErrorBoundaryRoute path={`${match.url}/:id/delete`} component={EntityWithServiceImplDeleteDialog} />
  </>
);

export default Routes;
