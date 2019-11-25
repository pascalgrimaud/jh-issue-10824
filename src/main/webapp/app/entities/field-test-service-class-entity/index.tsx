import React from 'react';
import { Switch } from 'react-router-dom';

import ErrorBoundaryRoute from 'app/shared/error/error-boundary-route';

import FieldTestServiceClassEntity from './field-test-service-class-entity';
import FieldTestServiceClassEntityDetail from './field-test-service-class-entity-detail';
import FieldTestServiceClassEntityUpdate from './field-test-service-class-entity-update';
import FieldTestServiceClassEntityDeleteDialog from './field-test-service-class-entity-delete-dialog';

const Routes = ({ match }) => (
  <>
    <Switch>
      <ErrorBoundaryRoute exact path={`${match.url}/new`} component={FieldTestServiceClassEntityUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id/edit`} component={FieldTestServiceClassEntityUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id`} component={FieldTestServiceClassEntityDetail} />
      <ErrorBoundaryRoute path={match.url} component={FieldTestServiceClassEntity} />
    </Switch>
    <ErrorBoundaryRoute path={`${match.url}/:id/delete`} component={FieldTestServiceClassEntityDeleteDialog} />
  </>
);

export default Routes;
