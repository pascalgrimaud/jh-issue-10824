import React from 'react';
import { Switch } from 'react-router-dom';

import ErrorBoundaryRoute from 'app/shared/error/error-boundary-route';

import TestTwoRelationshipsSameEntityMySuffix from './test-two-relationships-same-entity-my-suffix';
import TestTwoRelationshipsSameEntityMySuffixDetail from './test-two-relationships-same-entity-my-suffix-detail';
import TestTwoRelationshipsSameEntityMySuffixUpdate from './test-two-relationships-same-entity-my-suffix-update';
import TestTwoRelationshipsSameEntityMySuffixDeleteDialog from './test-two-relationships-same-entity-my-suffix-delete-dialog';

const Routes = ({ match }) => (
  <>
    <Switch>
      <ErrorBoundaryRoute exact path={`${match.url}/new`} component={TestTwoRelationshipsSameEntityMySuffixUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id/edit`} component={TestTwoRelationshipsSameEntityMySuffixUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id`} component={TestTwoRelationshipsSameEntityMySuffixDetail} />
      <ErrorBoundaryRoute path={match.url} component={TestTwoRelationshipsSameEntityMySuffix} />
    </Switch>
    <ErrorBoundaryRoute path={`${match.url}/:id/delete`} component={TestTwoRelationshipsSameEntityMySuffixDeleteDialog} />
  </>
);

export default Routes;
