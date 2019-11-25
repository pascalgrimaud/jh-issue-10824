import React from 'react';
import { Switch } from 'react-router-dom';

import ErrorBoundaryRoute from 'app/shared/error/error-boundary-route';

import FieldTestMapstructEntity from './field-test-mapstruct-entity';
import FieldTestMapstructEntityDetail from './field-test-mapstruct-entity-detail';
import FieldTestMapstructEntityUpdate from './field-test-mapstruct-entity-update';
import FieldTestMapstructEntityDeleteDialog from './field-test-mapstruct-entity-delete-dialog';

const Routes = ({ match }) => (
  <>
    <Switch>
      <ErrorBoundaryRoute exact path={`${match.url}/new`} component={FieldTestMapstructEntityUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id/edit`} component={FieldTestMapstructEntityUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id`} component={FieldTestMapstructEntityDetail} />
      <ErrorBoundaryRoute path={match.url} component={FieldTestMapstructEntity} />
    </Switch>
    <ErrorBoundaryRoute path={`${match.url}/:id/delete`} component={FieldTestMapstructEntityDeleteDialog} />
  </>
);

export default Routes;
