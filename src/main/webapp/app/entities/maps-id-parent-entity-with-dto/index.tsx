import React from 'react';
import { Switch } from 'react-router-dom';

import ErrorBoundaryRoute from 'app/shared/error/error-boundary-route';

import MapsIdParentEntityWithDTO from './maps-id-parent-entity-with-dto';
import MapsIdParentEntityWithDTODetail from './maps-id-parent-entity-with-dto-detail';
import MapsIdParentEntityWithDTOUpdate from './maps-id-parent-entity-with-dto-update';
import MapsIdParentEntityWithDTODeleteDialog from './maps-id-parent-entity-with-dto-delete-dialog';

const Routes = ({ match }) => (
  <>
    <Switch>
      <ErrorBoundaryRoute exact path={`${match.url}/new`} component={MapsIdParentEntityWithDTOUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id/edit`} component={MapsIdParentEntityWithDTOUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id`} component={MapsIdParentEntityWithDTODetail} />
      <ErrorBoundaryRoute path={match.url} component={MapsIdParentEntityWithDTO} />
    </Switch>
    <ErrorBoundaryRoute path={`${match.url}/:id/delete`} component={MapsIdParentEntityWithDTODeleteDialog} />
  </>
);

export default Routes;
