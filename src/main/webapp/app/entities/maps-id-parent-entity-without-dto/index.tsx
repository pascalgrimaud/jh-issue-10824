import React from 'react';
import { Switch } from 'react-router-dom';

import ErrorBoundaryRoute from 'app/shared/error/error-boundary-route';

import MapsIdParentEntityWithoutDTO from './maps-id-parent-entity-without-dto';
import MapsIdParentEntityWithoutDTODetail from './maps-id-parent-entity-without-dto-detail';
import MapsIdParentEntityWithoutDTOUpdate from './maps-id-parent-entity-without-dto-update';
import MapsIdParentEntityWithoutDTODeleteDialog from './maps-id-parent-entity-without-dto-delete-dialog';

const Routes = ({ match }) => (
  <>
    <Switch>
      <ErrorBoundaryRoute exact path={`${match.url}/new`} component={MapsIdParentEntityWithoutDTOUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id/edit`} component={MapsIdParentEntityWithoutDTOUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id`} component={MapsIdParentEntityWithoutDTODetail} />
      <ErrorBoundaryRoute path={match.url} component={MapsIdParentEntityWithoutDTO} />
    </Switch>
    <ErrorBoundaryRoute path={`${match.url}/:id/delete`} component={MapsIdParentEntityWithoutDTODeleteDialog} />
  </>
);

export default Routes;
