import React from 'react';
import { Switch } from 'react-router-dom';

import ErrorBoundaryRoute from 'app/shared/error/error-boundary-route';

import SuperMegaLargeTestEntityMySuffixAlt from './super-mega-large-test-entity-my-suffix-alt';
import SuperMegaLargeTestEntityMySuffixAltDetail from './super-mega-large-test-entity-my-suffix-alt-detail';
import SuperMegaLargeTestEntityMySuffixAltUpdate from './super-mega-large-test-entity-my-suffix-alt-update';
import SuperMegaLargeTestEntityMySuffixAltDeleteDialog from './super-mega-large-test-entity-my-suffix-alt-delete-dialog';

const Routes = ({ match }) => (
  <>
    <Switch>
      <ErrorBoundaryRoute exact path={`${match.url}/new`} component={SuperMegaLargeTestEntityMySuffixAltUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id/edit`} component={SuperMegaLargeTestEntityMySuffixAltUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id`} component={SuperMegaLargeTestEntityMySuffixAltDetail} />
      <ErrorBoundaryRoute path={match.url} component={SuperMegaLargeTestEntityMySuffixAlt} />
    </Switch>
    <ErrorBoundaryRoute path={`${match.url}/:id/delete`} component={SuperMegaLargeTestEntityMySuffixAltDeleteDialog} />
  </>
);

export default Routes;
