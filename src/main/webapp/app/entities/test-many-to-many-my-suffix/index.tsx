import React from 'react';
import { Switch } from 'react-router-dom';

import ErrorBoundaryRoute from 'app/shared/error/error-boundary-route';

import TestManyToManyMySuffix from './test-many-to-many-my-suffix';
import TestManyToManyMySuffixDetail from './test-many-to-many-my-suffix-detail';
import TestManyToManyMySuffixUpdate from './test-many-to-many-my-suffix-update';
import TestManyToManyMySuffixDeleteDialog from './test-many-to-many-my-suffix-delete-dialog';

const Routes = ({ match }) => (
  <>
    <Switch>
      <ErrorBoundaryRoute exact path={`${match.url}/new`} component={TestManyToManyMySuffixUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id/edit`} component={TestManyToManyMySuffixUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id`} component={TestManyToManyMySuffixDetail} />
      <ErrorBoundaryRoute path={match.url} component={TestManyToManyMySuffix} />
    </Switch>
    <ErrorBoundaryRoute path={`${match.url}/:id/delete`} component={TestManyToManyMySuffixDeleteDialog} />
  </>
);

export default Routes;
