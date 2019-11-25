import React from 'react';
import { Switch } from 'react-router-dom';

import ErrorBoundaryRoute from 'app/shared/error/error-boundary-route';

import MapsIdChildEntityWithoutDTO from './maps-id-child-entity-without-dto';
import MapsIdChildEntityWithoutDTODetail from './maps-id-child-entity-without-dto-detail';
import MapsIdChildEntityWithoutDTOUpdate from './maps-id-child-entity-without-dto-update';
import MapsIdChildEntityWithoutDTODeleteDialog from './maps-id-child-entity-without-dto-delete-dialog';

const Routes = ({ match }) => (
  <>
    <Switch>
      <ErrorBoundaryRoute exact path={`${match.url}/new`} component={MapsIdChildEntityWithoutDTOUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id/edit`} component={MapsIdChildEntityWithoutDTOUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id`} component={MapsIdChildEntityWithoutDTODetail} />
      <ErrorBoundaryRoute path={match.url} component={MapsIdChildEntityWithoutDTO} />
    </Switch>
    <ErrorBoundaryRoute path={`${match.url}/:id/delete`} component={MapsIdChildEntityWithoutDTODeleteDialog} />
  </>
);

export default Routes;
