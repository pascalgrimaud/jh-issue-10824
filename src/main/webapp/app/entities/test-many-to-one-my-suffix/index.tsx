import React from 'react';
import { Switch } from 'react-router-dom';

import ErrorBoundaryRoute from 'app/shared/error/error-boundary-route';

import TestManyToOneMySuffix from './test-many-to-one-my-suffix';
import TestManyToOneMySuffixDetail from './test-many-to-one-my-suffix-detail';
import TestManyToOneMySuffixUpdate from './test-many-to-one-my-suffix-update';
import TestManyToOneMySuffixDeleteDialog from './test-many-to-one-my-suffix-delete-dialog';

const Routes = ({ match }) => (
  <>
    <Switch>
      <ErrorBoundaryRoute exact path={`${match.url}/new`} component={TestManyToOneMySuffixUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id/edit`} component={TestManyToOneMySuffixUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id`} component={TestManyToOneMySuffixDetail} />
      <ErrorBoundaryRoute path={match.url} component={TestManyToOneMySuffix} />
    </Switch>
    <ErrorBoundaryRoute path={`${match.url}/:id/delete`} component={TestManyToOneMySuffixDeleteDialog} />
  </>
);

export default Routes;
