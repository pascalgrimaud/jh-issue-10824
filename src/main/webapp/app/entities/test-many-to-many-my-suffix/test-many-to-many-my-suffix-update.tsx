import React from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col, Label } from 'reactstrap';
import { AvFeedback, AvForm, AvGroup, AvInput } from 'availity-reactstrap-validation';
import { Translate, translate, ICrudGetAction, ICrudGetAllAction, ICrudPutAction } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IRootState } from 'app/shared/reducers';

import { ITestEntityMySuffixAlt } from 'app/shared/model/test-entity-my-suffix-alt.model';
import { getEntities as getTestEntities } from 'app/entities/test-entity-my-suffix-alt/test-entity-my-suffix-alt.reducer';
import { ITestMapstruct } from 'app/shared/model/test-mapstruct.model';
import { getEntities as getTestMapstructs } from 'app/entities/test-mapstruct/test-mapstruct.reducer';
import { ITestServiceClass } from 'app/shared/model/test-service-class.model';
import { getEntities as getTestServiceClasses } from 'app/entities/test-service-class/test-service-class.reducer';
import { ITestServiceImpl } from 'app/shared/model/test-service-impl.model';
import { getEntities as getTestServiceImpls } from 'app/entities/test-service-impl/test-service-impl.reducer';
import { ITestInfiniteScroll } from 'app/shared/model/test-infinite-scroll.model';
import { getEntities as getTestInfiniteScrolls } from 'app/entities/test-infinite-scroll/test-infinite-scroll.reducer';
import { ITestPagination } from 'app/shared/model/test-pagination.model';
import { getEntities as getTestPaginations } from 'app/entities/test-pagination/test-pagination.reducer';
import { ITestCustomTableName } from 'app/shared/model/test-custom-table-name.model';
import { getEntities as getTestCustomTableNames } from 'app/entities/test-custom-table-name/test-custom-table-name.reducer';
import { ISuperMegaLargeTestEntityMySuffixAlt } from 'app/shared/model/super-mega-large-test-entity-my-suffix-alt.model';
import { getEntities as getSuperMegaLargeTestEntities } from 'app/entities/super-mega-large-test-entity-my-suffix-alt/super-mega-large-test-entity-my-suffix-alt.reducer';
import { getEntity, updateEntity, createEntity, reset } from './test-many-to-many-my-suffix.reducer';
import { ITestManyToManyMySuffix } from 'app/shared/model/test-many-to-many-my-suffix.model';
import { convertDateTimeFromServer, convertDateTimeToServer } from 'app/shared/util/date-utils';
import { mapIdList } from 'app/shared/util/entity-utils';

export interface ITestManyToManyMySuffixUpdateProps extends StateProps, DispatchProps, RouteComponentProps<{ id: string }> {}

export interface ITestManyToManyMySuffixUpdateState {
  isNew: boolean;
  idstestEntity: any[];
  idstestMapstruct: any[];
  idstestServiceClass: any[];
  idstestServiceImpl: any[];
  idstestInfiniteScroll: any[];
  idstestPagination: any[];
  idstestCustomTableName: any[];
  idssuperMegaLargeTestEntity: any[];
}

export class TestManyToManyMySuffixUpdate extends React.Component<ITestManyToManyMySuffixUpdateProps, ITestManyToManyMySuffixUpdateState> {
  constructor(props) {
    super(props);
    this.state = {
      idstestEntity: [],
      idstestMapstruct: [],
      idstestServiceClass: [],
      idstestServiceImpl: [],
      idstestInfiniteScroll: [],
      idstestPagination: [],
      idstestCustomTableName: [],
      idssuperMegaLargeTestEntity: [],
      isNew: !this.props.match.params || !this.props.match.params.id
    };
  }

  componentWillUpdate(nextProps, nextState) {
    if (nextProps.updateSuccess !== this.props.updateSuccess && nextProps.updateSuccess) {
      this.handleClose();
    }
  }

  componentDidMount() {
    if (this.state.isNew) {
      this.props.reset();
    } else {
      this.props.getEntity(this.props.match.params.id);
    }

    this.props.getTestEntities();
    this.props.getTestMapstructs();
    this.props.getTestServiceClasses();
    this.props.getTestServiceImpls();
    this.props.getTestInfiniteScrolls();
    this.props.getTestPaginations();
    this.props.getTestCustomTableNames();
    this.props.getSuperMegaLargeTestEntities();
  }

  saveEntity = (event, errors, values) => {
    if (errors.length === 0) {
      const { testManyToManyEntity } = this.props;
      const entity = {
        ...testManyToManyEntity,
        ...values,
        testEntities: mapIdList(values.testEntities),
        testMapstructs: mapIdList(values.testMapstructs),
        testServiceClasses: mapIdList(values.testServiceClasses),
        testServiceImpls: mapIdList(values.testServiceImpls),
        testInfiniteScrolls: mapIdList(values.testInfiniteScrolls),
        testPaginations: mapIdList(values.testPaginations),
        testCustomTableNames: mapIdList(values.testCustomTableNames),
        superMegaLargeTestEntities: mapIdList(values.superMegaLargeTestEntities)
      };

      if (this.state.isNew) {
        this.props.createEntity(entity);
      } else {
        this.props.updateEntity(entity);
      }
    }
  };

  handleClose = () => {
    this.props.history.push('/test-many-to-many-my-suffix');
  };

  render() {
    const {
      testManyToManyEntity,
      testEntities,
      testMapstructs,
      testServiceClasses,
      testServiceImpls,
      testInfiniteScrolls,
      testPaginations,
      testCustomTableNames,
      superMegaLargeTestEntities,
      loading,
      updating
    } = this.props;
    const { isNew } = this.state;

    return (
      <div>
        <Row className="justify-content-center">
          <Col md="8">
            <h2 id="travisNg2App.testManyToMany.home.createOrEditLabel">
              <Translate contentKey="travisNg2App.testManyToMany.home.createOrEditLabel">Create or edit a TestManyToMany</Translate>
            </h2>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col md="8">
            {loading ? (
              <p>Loading...</p>
            ) : (
              <AvForm model={isNew ? {} : testManyToManyEntity} onSubmit={this.saveEntity}>
                {!isNew ? (
                  <AvGroup>
                    <Label for="test-many-to-many-my-suffix-id">
                      <Translate contentKey="global.field.id">ID</Translate>
                    </Label>
                    <AvInput id="test-many-to-many-my-suffix-id" type="text" className="form-control" name="id" required readOnly />
                  </AvGroup>
                ) : null}
                <AvGroup>
                  <Label for="test-many-to-many-my-suffix-testEntity">
                    <Translate contentKey="travisNg2App.testManyToMany.testEntity">Test Entity</Translate>
                  </Label>
                  <AvInput
                    id="test-many-to-many-my-suffix-testEntity"
                    type="select"
                    multiple
                    className="form-control"
                    name="testEntities"
                    value={testManyToManyEntity.testEntities && testManyToManyEntity.testEntities.map(e => e.id)}
                  >
                    <option value="" key="0" />
                    {testEntities
                      ? testEntities.map(otherEntity => (
                          <option value={otherEntity.id} key={otherEntity.id}>
                            {otherEntity.id}
                          </option>
                        ))
                      : null}
                  </AvInput>
                </AvGroup>
                <AvGroup>
                  <Label for="test-many-to-many-my-suffix-testMapstruct">
                    <Translate contentKey="travisNg2App.testManyToMany.testMapstruct">Test Mapstruct</Translate>
                  </Label>
                  <AvInput
                    id="test-many-to-many-my-suffix-testMapstruct"
                    type="select"
                    multiple
                    className="form-control"
                    name="testMapstructs"
                    value={testManyToManyEntity.testMapstructs && testManyToManyEntity.testMapstructs.map(e => e.id)}
                  >
                    <option value="" key="0" />
                    {testMapstructs
                      ? testMapstructs.map(otherEntity => (
                          <option value={otherEntity.id} key={otherEntity.id}>
                            {otherEntity.id}
                          </option>
                        ))
                      : null}
                  </AvInput>
                </AvGroup>
                <AvGroup>
                  <Label for="test-many-to-many-my-suffix-testServiceClass">
                    <Translate contentKey="travisNg2App.testManyToMany.testServiceClass">Test Service Class</Translate>
                  </Label>
                  <AvInput
                    id="test-many-to-many-my-suffix-testServiceClass"
                    type="select"
                    multiple
                    className="form-control"
                    name="testServiceClasses"
                    value={testManyToManyEntity.testServiceClasses && testManyToManyEntity.testServiceClasses.map(e => e.id)}
                  >
                    <option value="" key="0" />
                    {testServiceClasses
                      ? testServiceClasses.map(otherEntity => (
                          <option value={otherEntity.id} key={otherEntity.id}>
                            {otherEntity.id}
                          </option>
                        ))
                      : null}
                  </AvInput>
                </AvGroup>
                <AvGroup>
                  <Label for="test-many-to-many-my-suffix-testServiceImpl">
                    <Translate contentKey="travisNg2App.testManyToMany.testServiceImpl">Test Service Impl</Translate>
                  </Label>
                  <AvInput
                    id="test-many-to-many-my-suffix-testServiceImpl"
                    type="select"
                    multiple
                    className="form-control"
                    name="testServiceImpls"
                    value={testManyToManyEntity.testServiceImpls && testManyToManyEntity.testServiceImpls.map(e => e.id)}
                  >
                    <option value="" key="0" />
                    {testServiceImpls
                      ? testServiceImpls.map(otherEntity => (
                          <option value={otherEntity.id} key={otherEntity.id}>
                            {otherEntity.id}
                          </option>
                        ))
                      : null}
                  </AvInput>
                </AvGroup>
                <AvGroup>
                  <Label for="test-many-to-many-my-suffix-testInfiniteScroll">
                    <Translate contentKey="travisNg2App.testManyToMany.testInfiniteScroll">Test Infinite Scroll</Translate>
                  </Label>
                  <AvInput
                    id="test-many-to-many-my-suffix-testInfiniteScroll"
                    type="select"
                    multiple
                    className="form-control"
                    name="testInfiniteScrolls"
                    value={testManyToManyEntity.testInfiniteScrolls && testManyToManyEntity.testInfiniteScrolls.map(e => e.id)}
                  >
                    <option value="" key="0" />
                    {testInfiniteScrolls
                      ? testInfiniteScrolls.map(otherEntity => (
                          <option value={otherEntity.id} key={otherEntity.id}>
                            {otherEntity.id}
                          </option>
                        ))
                      : null}
                  </AvInput>
                </AvGroup>
                <AvGroup>
                  <Label for="test-many-to-many-my-suffix-testPagination">
                    <Translate contentKey="travisNg2App.testManyToMany.testPagination">Test Pagination</Translate>
                  </Label>
                  <AvInput
                    id="test-many-to-many-my-suffix-testPagination"
                    type="select"
                    multiple
                    className="form-control"
                    name="testPaginations"
                    value={testManyToManyEntity.testPaginations && testManyToManyEntity.testPaginations.map(e => e.id)}
                  >
                    <option value="" key="0" />
                    {testPaginations
                      ? testPaginations.map(otherEntity => (
                          <option value={otherEntity.id} key={otherEntity.id}>
                            {otherEntity.id}
                          </option>
                        ))
                      : null}
                  </AvInput>
                </AvGroup>
                <AvGroup>
                  <Label for="test-many-to-many-my-suffix-testCustomTableName">
                    <Translate contentKey="travisNg2App.testManyToMany.testCustomTableName">Test Custom Table Name</Translate>
                  </Label>
                  <AvInput
                    id="test-many-to-many-my-suffix-testCustomTableName"
                    type="select"
                    multiple
                    className="form-control"
                    name="testCustomTableNames"
                    value={testManyToManyEntity.testCustomTableNames && testManyToManyEntity.testCustomTableNames.map(e => e.id)}
                  >
                    <option value="" key="0" />
                    {testCustomTableNames
                      ? testCustomTableNames.map(otherEntity => (
                          <option value={otherEntity.id} key={otherEntity.id}>
                            {otherEntity.id}
                          </option>
                        ))
                      : null}
                  </AvInput>
                </AvGroup>
                <AvGroup>
                  <Label for="test-many-to-many-my-suffix-superMegaLargeTestEntity">
                    <Translate contentKey="travisNg2App.testManyToMany.superMegaLargeTestEntity">Super Mega Large Test Entity</Translate>
                  </Label>
                  <AvInput
                    id="test-many-to-many-my-suffix-superMegaLargeTestEntity"
                    type="select"
                    multiple
                    className="form-control"
                    name="superMegaLargeTestEntities"
                    value={
                      testManyToManyEntity.superMegaLargeTestEntities && testManyToManyEntity.superMegaLargeTestEntities.map(e => e.id)
                    }
                  >
                    <option value="" key="0" />
                    {superMegaLargeTestEntities
                      ? superMegaLargeTestEntities.map(otherEntity => (
                          <option value={otherEntity.id} key={otherEntity.id}>
                            {otherEntity.id}
                          </option>
                        ))
                      : null}
                  </AvInput>
                </AvGroup>
                <Button tag={Link} id="cancel-save" to="/test-many-to-many-my-suffix" replace color="info">
                  <FontAwesomeIcon icon="arrow-left" />
                  &nbsp;
                  <span className="d-none d-md-inline">
                    <Translate contentKey="entity.action.back">Back</Translate>
                  </span>
                </Button>
                &nbsp;
                <Button color="primary" id="save-entity" type="submit" disabled={updating}>
                  <FontAwesomeIcon icon="save" />
                  &nbsp;
                  <Translate contentKey="entity.action.save">Save</Translate>
                </Button>
              </AvForm>
            )}
          </Col>
        </Row>
      </div>
    );
  }
}

const mapStateToProps = (storeState: IRootState) => ({
  testEntities: storeState.testEntity.entities,
  testMapstructs: storeState.testMapstruct.entities,
  testServiceClasses: storeState.testServiceClass.entities,
  testServiceImpls: storeState.testServiceImpl.entities,
  testInfiniteScrolls: storeState.testInfiniteScroll.entities,
  testPaginations: storeState.testPagination.entities,
  testCustomTableNames: storeState.testCustomTableName.entities,
  superMegaLargeTestEntities: storeState.superMegaLargeTestEntity.entities,
  testManyToManyEntity: storeState.testManyToMany.entity,
  loading: storeState.testManyToMany.loading,
  updating: storeState.testManyToMany.updating,
  updateSuccess: storeState.testManyToMany.updateSuccess
});

const mapDispatchToProps = {
  getTestEntities,
  getTestMapstructs,
  getTestServiceClasses,
  getTestServiceImpls,
  getTestInfiniteScrolls,
  getTestPaginations,
  getTestCustomTableNames,
  getSuperMegaLargeTestEntities,
  getEntity,
  updateEntity,
  createEntity,
  reset
};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TestManyToManyMySuffixUpdate);
