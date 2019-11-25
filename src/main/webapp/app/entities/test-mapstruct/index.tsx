import React from 'react';
import { Switch } from 'react-router-dom';

import ErrorBoundaryRoute from 'app/shared/error/error-boundary-route';

import TestMapstruct from './test-mapstruct';
import TestMapstructDetail from './test-mapstruct-detail';
import TestMapstructUpdate from './test-mapstruct-update';
import TestMapstructDeleteDialog from './test-mapstruct-delete-dialog';

const Routes = ({ match }) => (
  <>
    <Switch>
      <ErrorBoundaryRoute exact path={`${match.url}/new`} component={TestMapstructUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id/edit`} component={TestMapstructUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id`} component={TestMapstructDetail} />
      <ErrorBoundaryRoute path={match.url} component={TestMapstruct} />
    </Switch>
    <ErrorBoundaryRoute path={`${match.url}/:id/delete`} component={TestMapstructDeleteDialog} />
  </>
);

export default Routes;
