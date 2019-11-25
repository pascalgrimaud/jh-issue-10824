import React from 'react';
import { Switch } from 'react-router-dom';

import ErrorBoundaryRoute from 'app/shared/error/error-boundary-route';

import MapsIdUserProfileWithDTO from './maps-id-user-profile-with-dto';
import MapsIdUserProfileWithDTODetail from './maps-id-user-profile-with-dto-detail';
import MapsIdUserProfileWithDTOUpdate from './maps-id-user-profile-with-dto-update';
import MapsIdUserProfileWithDTODeleteDialog from './maps-id-user-profile-with-dto-delete-dialog';

const Routes = ({ match }) => (
  <>
    <Switch>
      <ErrorBoundaryRoute exact path={`${match.url}/new`} component={MapsIdUserProfileWithDTOUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id/edit`} component={MapsIdUserProfileWithDTOUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id`} component={MapsIdUserProfileWithDTODetail} />
      <ErrorBoundaryRoute path={match.url} component={MapsIdUserProfileWithDTO} />
    </Switch>
    <ErrorBoundaryRoute path={`${match.url}/:id/delete`} component={MapsIdUserProfileWithDTODeleteDialog} />
  </>
);

export default Routes;
