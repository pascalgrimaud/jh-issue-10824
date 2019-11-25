import React from 'react';
import { Switch } from 'react-router-dom';

import ErrorBoundaryRoute from 'app/shared/error/error-boundary-route';

import MapsIdChildEntityWithDTO from './maps-id-child-entity-with-dto';
import MapsIdChildEntityWithDTODetail from './maps-id-child-entity-with-dto-detail';
import MapsIdChildEntityWithDTOUpdate from './maps-id-child-entity-with-dto-update';
import MapsIdChildEntityWithDTODeleteDialog from './maps-id-child-entity-with-dto-delete-dialog';

const Routes = ({ match }) => (
  <>
    <Switch>
      <ErrorBoundaryRoute exact path={`${match.url}/new`} component={MapsIdChildEntityWithDTOUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id/edit`} component={MapsIdChildEntityWithDTOUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id`} component={MapsIdChildEntityWithDTODetail} />
      <ErrorBoundaryRoute path={match.url} component={MapsIdChildEntityWithDTO} />
    </Switch>
    <ErrorBoundaryRoute path={`${match.url}/:id/delete`} component={MapsIdChildEntityWithDTODeleteDialog} />
  </>
);

export default Routes;
