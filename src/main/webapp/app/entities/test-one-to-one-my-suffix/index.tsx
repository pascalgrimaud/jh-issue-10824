import React from 'react';
import { Switch } from 'react-router-dom';

import ErrorBoundaryRoute from 'app/shared/error/error-boundary-route';

import TestOneToOneMySuffix from './test-one-to-one-my-suffix';
import TestOneToOneMySuffixDetail from './test-one-to-one-my-suffix-detail';
import TestOneToOneMySuffixUpdate from './test-one-to-one-my-suffix-update';
import TestOneToOneMySuffixDeleteDialog from './test-one-to-one-my-suffix-delete-dialog';

const Routes = ({ match }) => (
  <>
    <Switch>
      <ErrorBoundaryRoute exact path={`${match.url}/new`} component={TestOneToOneMySuffixUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id/edit`} component={TestOneToOneMySuffixUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id`} component={TestOneToOneMySuffixDetail} />
      <ErrorBoundaryRoute path={match.url} component={TestOneToOneMySuffix} />
    </Switch>
    <ErrorBoundaryRoute path={`${match.url}/:id/delete`} component={TestOneToOneMySuffixDeleteDialog} />
  </>
);

export default Routes;
