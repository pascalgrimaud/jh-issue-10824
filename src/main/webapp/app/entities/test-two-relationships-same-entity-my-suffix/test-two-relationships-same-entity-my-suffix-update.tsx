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
import { IUser } from 'app/shared/model/user.model';
import { getUsers } from 'app/modules/administration/user-management/user-management.reducer';
import { IDivision } from 'app/shared/model/test-root/division.model';
import { getEntities as getDivisions } from 'app/entities/test-root/division/division.reducer';
import { getEntity, updateEntity, createEntity, reset } from './test-two-relationships-same-entity-my-suffix.reducer';
import { ITestTwoRelationshipsSameEntityMySuffix } from 'app/shared/model/test-two-relationships-same-entity-my-suffix.model';
import { convertDateTimeFromServer, convertDateTimeToServer } from 'app/shared/util/date-utils';
import { mapIdList } from 'app/shared/util/entity-utils';

export interface ITestTwoRelationshipsSameEntityMySuffixUpdateProps
  extends StateProps,
    DispatchProps,
    RouteComponentProps<{ id: string }> {}

export interface ITestTwoRelationshipsSameEntityMySuffixUpdateState {
  isNew: boolean;
  firstRelationshipId: string;
  secondRelationshipId: string;
  userOneId: string;
  userTwoId: string;
  firstUniqueRequiredRelationId: string;
  secondUniqueRequiredRelationId: string;
}

export class TestTwoRelationshipsSameEntityMySuffixUpdate extends React.Component<
  ITestTwoRelationshipsSameEntityMySuffixUpdateProps,
  ITestTwoRelationshipsSameEntityMySuffixUpdateState
> {
  constructor(props) {
    super(props);
    this.state = {
      firstRelationshipId: '0',
      secondRelationshipId: '0',
      userOneId: '0',
      userTwoId: '0',
      firstUniqueRequiredRelationId: '0',
      secondUniqueRequiredRelationId: '0',
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
    this.props.getUsers();
    this.props.getDivisions();
  }

  saveEntity = (event, errors, values) => {
    if (errors.length === 0) {
      const { testTwoRelationshipsSameEntityEntity } = this.props;
      const entity = {
        ...testTwoRelationshipsSameEntityEntity,
        ...values
      };

      if (this.state.isNew) {
        this.props.createEntity(entity);
      } else {
        this.props.updateEntity(entity);
      }
    }
  };

  handleClose = () => {
    this.props.history.push('/test-two-relationships-same-entity-my-suffix');
  };

  render() {
    const { testTwoRelationshipsSameEntityEntity, testEntities, users, divisions, loading, updating } = this.props;
    const { isNew } = this.state;

    return (
      <div>
        <Row className="justify-content-center">
          <Col md="8">
            <h2 id="travisNg2App.testTwoRelationshipsSameEntity.home.createOrEditLabel">
              <Translate contentKey="travisNg2App.testTwoRelationshipsSameEntity.home.createOrEditLabel">
                Create or edit a TestTwoRelationshipsSameEntity
              </Translate>
            </h2>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col md="8">
            {loading ? (
              <p>Loading...</p>
            ) : (
              <AvForm model={isNew ? {} : testTwoRelationshipsSameEntityEntity} onSubmit={this.saveEntity}>
                {!isNew ? (
                  <AvGroup>
                    <Label for="test-two-relationships-same-entity-my-suffix-id">
                      <Translate contentKey="global.field.id">ID</Translate>
                    </Label>
                    <AvInput
                      id="test-two-relationships-same-entity-my-suffix-id"
                      type="text"
                      className="form-control"
                      name="id"
                      required
                      readOnly
                    />
                  </AvGroup>
                ) : null}
                <AvGroup>
                  <Label for="test-two-relationships-same-entity-my-suffix-firstRelationship">
                    <Translate contentKey="travisNg2App.testTwoRelationshipsSameEntity.firstRelationship">First Relationship</Translate>
                  </Label>
                  <AvInput
                    id="test-two-relationships-same-entity-my-suffix-firstRelationship"
                    type="select"
                    className="form-control"
                    name="firstRelationship.id"
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
                  <Label for="test-two-relationships-same-entity-my-suffix-secondRelationship">
                    <Translate contentKey="travisNg2App.testTwoRelationshipsSameEntity.secondRelationship">Second Relationship</Translate>
                  </Label>
                  <AvInput
                    id="test-two-relationships-same-entity-my-suffix-secondRelationship"
                    type="select"
                    className="form-control"
                    name="secondRelationship.id"
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
                  <Label for="test-two-relationships-same-entity-my-suffix-userOne">
                    <Translate contentKey="travisNg2App.testTwoRelationshipsSameEntity.userOne">User One</Translate>
                  </Label>
                  <AvInput
                    id="test-two-relationships-same-entity-my-suffix-userOne"
                    type="select"
                    className="form-control"
                    name="userOne.id"
                  >
                    <option value="" key="0" />
                    {users
                      ? users.map(otherEntity => (
                          <option value={otherEntity.id} key={otherEntity.id}>
                            {otherEntity.id}
                          </option>
                        ))
                      : null}
                  </AvInput>
                </AvGroup>
                <AvGroup>
                  <Label for="test-two-relationships-same-entity-my-suffix-userTwo">
                    <Translate contentKey="travisNg2App.testTwoRelationshipsSameEntity.userTwo">User Two</Translate>
                  </Label>
                  <AvInput
                    id="test-two-relationships-same-entity-my-suffix-userTwo"
                    type="select"
                    className="form-control"
                    name="userTwo.id"
                  >
                    <option value="" key="0" />
                    {users
                      ? users.map(otherEntity => (
                          <option value={otherEntity.id} key={otherEntity.id}>
                            {otherEntity.id}
                          </option>
                        ))
                      : null}
                  </AvInput>
                </AvGroup>
                <AvGroup>
                  <Label for="test-two-relationships-same-entity-my-suffix-firstUniqueRequiredRelation">
                    <Translate contentKey="travisNg2App.testTwoRelationshipsSameEntity.firstUniqueRequiredRelation">
                      First Unique Required Relation
                    </Translate>
                  </Label>
                  <AvInput
                    id="test-two-relationships-same-entity-my-suffix-firstUniqueRequiredRelation"
                    type="select"
                    className="form-control"
                    name="firstUniqueRequiredRelation.id"
                    value={isNew ? divisions[0] && divisions[0].id : testTwoRelationshipsSameEntityEntity.firstUniqueRequiredRelation.id}
                    required
                  >
                    {divisions
                      ? divisions.map(otherEntity => (
                          <option value={otherEntity.id} key={otherEntity.id}>
                            {otherEntity.id}
                          </option>
                        ))
                      : null}
                  </AvInput>
                  <AvFeedback>
                    <Translate contentKey="entity.validation.required">This field is required.</Translate>
                  </AvFeedback>
                </AvGroup>
                <AvGroup>
                  <Label for="test-two-relationships-same-entity-my-suffix-secondUniqueRequiredRelation">
                    <Translate contentKey="travisNg2App.testTwoRelationshipsSameEntity.secondUniqueRequiredRelation">
                      Second Unique Required Relation
                    </Translate>
                  </Label>
                  <AvInput
                    id="test-two-relationships-same-entity-my-suffix-secondUniqueRequiredRelation"
                    type="select"
                    className="form-control"
                    name="secondUniqueRequiredRelation.id"
                    value={isNew ? divisions[0] && divisions[0].id : testTwoRelationshipsSameEntityEntity.secondUniqueRequiredRelation.id}
                    required
                  >
                    {divisions
                      ? divisions.map(otherEntity => (
                          <option value={otherEntity.id} key={otherEntity.id}>
                            {otherEntity.id}
                          </option>
                        ))
                      : null}
                  </AvInput>
                  <AvFeedback>
                    <Translate contentKey="entity.validation.required">This field is required.</Translate>
                  </AvFeedback>
                </AvGroup>
                <Button tag={Link} id="cancel-save" to="/test-two-relationships-same-entity-my-suffix" replace color="info">
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
  users: storeState.userManagement.users,
  divisions: storeState.division.entities,
  testTwoRelationshipsSameEntityEntity: storeState.testTwoRelationshipsSameEntity.entity,
  loading: storeState.testTwoRelationshipsSameEntity.loading,
  updating: storeState.testTwoRelationshipsSameEntity.updating,
  updateSuccess: storeState.testTwoRelationshipsSameEntity.updateSuccess
});

const mapDispatchToProps = {
  getTestEntities,
  getUsers,
  getDivisions,
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
)(TestTwoRelationshipsSameEntityMySuffixUpdate);
