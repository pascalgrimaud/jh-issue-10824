import React from 'react';
import { Switch } from 'react-router-dom';

import ErrorBoundaryRoute from 'app/shared/error/error-boundary-route';

import TestInfiniteScroll from './test-infinite-scroll';
import TestInfiniteScrollDetail from './test-infinite-scroll-detail';
import TestInfiniteScrollUpdate from './test-infinite-scroll-update';
import TestInfiniteScrollDeleteDialog from './test-infinite-scroll-delete-dialog';

const Routes = ({ match }) => (
  <>
    <Switch>
      <ErrorBoundaryRoute exact path={`${match.url}/new`} component={TestInfiniteScrollUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id/edit`} component={TestInfiniteScrollUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id`} component={TestInfiniteScrollDetail} />
      <ErrorBoundaryRoute path={match.url} component={TestInfiniteScroll} />
    </Switch>
    <ErrorBoundaryRoute path={`${match.url}/:id/delete`} component={TestInfiniteScrollDeleteDialog} />
  </>
);

export default Routes;
