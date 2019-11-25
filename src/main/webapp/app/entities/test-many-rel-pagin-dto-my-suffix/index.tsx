import React from 'react';
import { Switch } from 'react-router-dom';

import ErrorBoundaryRoute from 'app/shared/error/error-boundary-route';

import TestManyRelPaginDTOMySuffix from './test-many-rel-pagin-dto-my-suffix';
import TestManyRelPaginDTOMySuffixDetail from './test-many-rel-pagin-dto-my-suffix-detail';
import TestManyRelPaginDTOMySuffixUpdate from './test-many-rel-pagin-dto-my-suffix-update';
import TestManyRelPaginDTOMySuffixDeleteDialog from './test-many-rel-pagin-dto-my-suffix-delete-dialog';

const Routes = ({ match }) => (
  <>
    <Switch>
      <ErrorBoundaryRoute exact path={`${match.url}/new`} component={TestManyRelPaginDTOMySuffixUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id/edit`} component={TestManyRelPaginDTOMySuffixUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id`} component={TestManyRelPaginDTOMySuffixDetail} />
      <ErrorBoundaryRoute path={match.url} component={TestManyRelPaginDTOMySuffix} />
    </Switch>
    <ErrorBoundaryRoute path={`${match.url}/:id/delete`} component={TestManyRelPaginDTOMySuffixDeleteDialog} />
  </>
);

export default Routes;
