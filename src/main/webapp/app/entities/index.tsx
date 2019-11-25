import React from 'react';
import { Switch } from 'react-router-dom';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import ErrorBoundaryRoute from 'app/shared/error/error-boundary-route';

import BankAccountMySuffix from './test-root/bank-account-my-suffix';
import Label from './test-root/label';
import Operation from './test-root/operation';
import FieldTestServiceImplEntity from './field-test-service-impl-entity';
import FieldTestServiceClassEntity from './field-test-service-class-entity';
import FieldTestEntity from './field-test-entity';
import FieldTestInfiniteScrollEntity from './field-test-infinite-scroll-entity';
import FieldTestMapstructEntity from './field-test-mapstruct-entity';
import FieldTestPaginationEntity from './field-test-pagination-entity';
import TestTwoRelationshipsSameEntityMySuffix from './test-two-relationships-same-entity-my-suffix';
import TestServiceImpl from './test-service-impl';
import TestServiceClass from './test-service-class';
import TestPagination from './test-pagination';
import TestMapstruct from './test-mapstruct';
import TestInfiniteScroll from './test-infinite-scroll';
import TestEntityMySuffixAlt from './test-entity-my-suffix-alt';
import TestCustomTableName from './test-custom-table-name';
import TestManyRelPaginDTOMySuffix from './test-many-rel-pagin-dto-my-suffix';
import TestManyToManyMySuffix from './test-many-to-many-my-suffix';
import TestManyToOneMySuffix from './test-many-to-one-my-suffix';
import TestOneToOneMySuffix from './test-one-to-one-my-suffix';
import EntityWithDTO from './entity-with-dto';
import EntityWithServiceClass from './entity-with-service-class';
import EntityWithServiceImpl from './entity-with-service-impl';
import EntityWithPagination from './entity-with-pagination';
import EntityWithServiceClassAndPagination from './entity-with-service-class-and-pagination';
import EntityWithServiceImplAndPagination from './entity-with-service-impl-and-pagination';
import EntityWithServiceClassAndDTO from './entity-with-service-class-and-dto';
import EntityWithServiceImplAndDTO from './entity-with-service-impl-and-dto';
import EntityWithPaginationAndDTO from './entity-with-pagination-and-dto';
import EntityWithServiceClassPaginationAndDTO from './entity-with-service-class-pagination-and-dto';
import EntityWithServiceImplPaginationAndDTO from './entity-with-service-impl-pagination-and-dto';
import Division from './test-root/division';
import Place from './test-root/place';
import SuperMegaLargeTestEntityMySuffixAlt from './super-mega-large-test-entity-my-suffix-alt';
import MapsIdParentEntityWithoutDTO from './maps-id-parent-entity-without-dto';
import MapsIdChildEntityWithoutDTO from './maps-id-child-entity-without-dto';
import MapsIdParentEntityWithDTO from './maps-id-parent-entity-with-dto';
import MapsIdChildEntityWithDTO from './maps-id-child-entity-with-dto';
import MapsIdUserProfileWithDTO from './maps-id-user-profile-with-dto';
/* jhipster-needle-add-route-import - JHipster will add routes here */

const Routes = ({ match }) => (
  <div>
    <Switch>
      {/* prettier-ignore */}
      <ErrorBoundaryRoute path={`${match.url}bank-account-my-suffix`} component={BankAccountMySuffix} />
      <ErrorBoundaryRoute path={`${match.url}label`} component={Label} />
      <ErrorBoundaryRoute path={`${match.url}operation`} component={Operation} />
      <ErrorBoundaryRoute path={`${match.url}field-test-service-impl-entity`} component={FieldTestServiceImplEntity} />
      <ErrorBoundaryRoute path={`${match.url}field-test-service-class-entity`} component={FieldTestServiceClassEntity} />
      <ErrorBoundaryRoute path={`${match.url}field-test-entity`} component={FieldTestEntity} />
      <ErrorBoundaryRoute path={`${match.url}field-test-infinite-scroll-entity`} component={FieldTestInfiniteScrollEntity} />
      <ErrorBoundaryRoute path={`${match.url}field-test-mapstruct-entity`} component={FieldTestMapstructEntity} />
      <ErrorBoundaryRoute path={`${match.url}field-test-pagination-entity`} component={FieldTestPaginationEntity} />
      <ErrorBoundaryRoute
        path={`${match.url}test-two-relationships-same-entity-my-suffix`}
        component={TestTwoRelationshipsSameEntityMySuffix}
      />
      <ErrorBoundaryRoute path={`${match.url}test-service-impl`} component={TestServiceImpl} />
      <ErrorBoundaryRoute path={`${match.url}test-service-class`} component={TestServiceClass} />
      <ErrorBoundaryRoute path={`${match.url}test-pagination`} component={TestPagination} />
      <ErrorBoundaryRoute path={`${match.url}test-mapstruct`} component={TestMapstruct} />
      <ErrorBoundaryRoute path={`${match.url}test-infinite-scroll`} component={TestInfiniteScroll} />
      <ErrorBoundaryRoute path={`${match.url}test-entity-my-suffix-alt`} component={TestEntityMySuffixAlt} />
      <ErrorBoundaryRoute path={`${match.url}test-custom-table-name`} component={TestCustomTableName} />
      <ErrorBoundaryRoute path={`${match.url}test-many-rel-pagin-dto-my-suffix`} component={TestManyRelPaginDTOMySuffix} />
      <ErrorBoundaryRoute path={`${match.url}test-many-to-many-my-suffix`} component={TestManyToManyMySuffix} />
      <ErrorBoundaryRoute path={`${match.url}test-many-to-one-my-suffix`} component={TestManyToOneMySuffix} />
      <ErrorBoundaryRoute path={`${match.url}test-one-to-one-my-suffix`} component={TestOneToOneMySuffix} />
      <ErrorBoundaryRoute path={`${match.url}entity-with-dto`} component={EntityWithDTO} />
      <ErrorBoundaryRoute path={`${match.url}entity-with-service-class`} component={EntityWithServiceClass} />
      <ErrorBoundaryRoute path={`${match.url}entity-with-service-impl`} component={EntityWithServiceImpl} />
      <ErrorBoundaryRoute path={`${match.url}entity-with-pagination`} component={EntityWithPagination} />
      <ErrorBoundaryRoute path={`${match.url}entity-with-service-class-and-pagination`} component={EntityWithServiceClassAndPagination} />
      <ErrorBoundaryRoute path={`${match.url}entity-with-service-impl-and-pagination`} component={EntityWithServiceImplAndPagination} />
      <ErrorBoundaryRoute path={`${match.url}entity-with-service-class-and-dto`} component={EntityWithServiceClassAndDTO} />
      <ErrorBoundaryRoute path={`${match.url}entity-with-service-impl-and-dto`} component={EntityWithServiceImplAndDTO} />
      <ErrorBoundaryRoute path={`${match.url}entity-with-pagination-and-dto`} component={EntityWithPaginationAndDTO} />
      <ErrorBoundaryRoute
        path={`${match.url}entity-with-service-class-pagination-and-dto`}
        component={EntityWithServiceClassPaginationAndDTO}
      />
      <ErrorBoundaryRoute
        path={`${match.url}entity-with-service-impl-pagination-and-dto`}
        component={EntityWithServiceImplPaginationAndDTO}
      />
      <ErrorBoundaryRoute path={`${match.url}division`} component={Division} />
      <ErrorBoundaryRoute path={`${match.url}place`} component={Place} />
      <ErrorBoundaryRoute path={`${match.url}super-mega-large-test-entity-my-suffix-alt`} component={SuperMegaLargeTestEntityMySuffixAlt} />
      <ErrorBoundaryRoute path={`${match.url}maps-id-parent-entity-without-dto`} component={MapsIdParentEntityWithoutDTO} />
      <ErrorBoundaryRoute path={`${match.url}maps-id-child-entity-without-dto`} component={MapsIdChildEntityWithoutDTO} />
      <ErrorBoundaryRoute path={`${match.url}maps-id-parent-entity-with-dto`} component={MapsIdParentEntityWithDTO} />
      <ErrorBoundaryRoute path={`${match.url}maps-id-child-entity-with-dto`} component={MapsIdChildEntityWithDTO} />
      <ErrorBoundaryRoute path={`${match.url}maps-id-user-profile-with-dto`} component={MapsIdUserProfileWithDTO} />
      {/* jhipster-needle-add-route-path - JHipster will add routes here */}
    </Switch>
  </div>
);

export default Routes;
