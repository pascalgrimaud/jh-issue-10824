import React from 'react';
import { Switch } from 'react-router-dom';

import ErrorBoundaryRoute from 'app/shared/error/error-boundary-route';

import EntityWithServiceClassAndDTO from './entity-with-service-class-and-dto';
import EntityWithServiceClassAndDTODetail from './entity-with-service-class-and-dto-detail';
import EntityWithServiceClassAndDTOUpdate from './entity-with-service-class-and-dto-update';
import EntityWithServiceClassAndDTODeleteDialog from './entity-with-service-class-and-dto-delete-dialog';

const Routes = ({ match }) => (
  <>
    <Switch>
      <ErrorBoundaryRoute exact path={`${match.url}/new`} component={EntityWithServiceClassAndDTOUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id/edit`} component={EntityWithServiceClassAndDTOUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id`} component={EntityWithServiceClassAndDTODetail} />
      <ErrorBoundaryRoute path={match.url} component={EntityWithServiceClassAndDTO} />
    </Switch>
    <ErrorBoundaryRoute path={`${match.url}/:id/delete`} component={EntityWithServiceClassAndDTODeleteDialog} />
  </>
);

export default Routes;
