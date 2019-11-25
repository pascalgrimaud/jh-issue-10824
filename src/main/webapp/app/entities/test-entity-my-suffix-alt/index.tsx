import React from 'react';
import { Switch } from 'react-router-dom';

import ErrorBoundaryRoute from 'app/shared/error/error-boundary-route';

import TestEntityMySuffixAlt from './test-entity-my-suffix-alt';
import TestEntityMySuffixAltDetail from './test-entity-my-suffix-alt-detail';
import TestEntityMySuffixAltUpdate from './test-entity-my-suffix-alt-update';
import TestEntityMySuffixAltDeleteDialog from './test-entity-my-suffix-alt-delete-dialog';

const Routes = ({ match }) => (
  <>
    <Switch>
      <ErrorBoundaryRoute exact path={`${match.url}/new`} component={TestEntityMySuffixAltUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id/edit`} component={TestEntityMySuffixAltUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id`} component={TestEntityMySuffixAltDetail} />
      <ErrorBoundaryRoute path={match.url} component={TestEntityMySuffixAlt} />
    </Switch>
    <ErrorBoundaryRoute path={`${match.url}/:id/delete`} component={TestEntityMySuffixAltDeleteDialog} />
  </>
);

export default Routes;
