import React from 'react';
import { Switch } from 'react-router-dom';

import ErrorBoundaryRoute from 'app/shared/error/error-boundary-route';

import Label from './label';
import LabelDetail from './label-detail';

const Routes = ({ match }) => (
  <>
    <Switch>
      <ErrorBoundaryRoute exact path={`${match.url}/:id`} component={LabelDetail} />
      <ErrorBoundaryRoute path={match.url} component={Label} />
    </Switch>
  </>
);

export default Routes;
