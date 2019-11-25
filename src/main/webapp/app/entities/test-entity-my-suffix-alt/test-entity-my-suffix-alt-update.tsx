import React from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col, Label } from 'reactstrap';
import { AvFeedback, AvForm, AvGroup, AvInput } from 'availity-reactstrap-validation';
import { Translate, translate, ICrudGetAction, ICrudGetAllAction, ICrudPutAction } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IRootState } from 'app/shared/reducers';

import { ITestManyToManyMySuffix } from 'app/shared/model/test-many-to-many-my-suffix.model';
import { getEntities as getTestManyToManies } from 'app/entities/test-many-to-many-my-suffix/test-many-to-many-my-suffix.reducer';
import { ITestOneToOneMySuffix } from 'app/shared/model/test-one-to-one-my-suffix.model';
import { getEntities as getTestOneToOnes } from 'app/entities/test-one-to-one-my-suffix/test-one-to-one-my-suffix.reducer';
import { IUser } from 'app/shared/model/user.model';
import { getUsers } from 'app/modules/administration/user-management/user-management.reducer';
import { getEntity, updateEntity, createEntity, reset } from './test-entity-my-suffix-alt.reducer';
import { ITestEntityMySuffixAlt } from 'app/shared/model/test-entity-my-suffix-alt.model';
import { convertDateTimeFromServer, convertDateTimeToServer } from 'app/shared/util/date-utils';
import { mapIdList } from 'app/shared/util/entity-utils';

export interface ITestEntityMySuffixAltUpdateProps extends StateProps, DispatchProps, RouteComponentProps<{ id: string }> {}

export interface ITestEntityMySuffixAltUpdateState {
  isNew: boolean;
  idsuserManyToMany: any[];
  testManyToManyId: string;
  testOneToOneId: string;
  userOneToManyId: string;
  userOneToOneId: string;
}

export class TestEntityMySuffixAltUpdate extends React.Component<ITestEntityMySuffixAltUpdateProps, ITestEntityMySuffixAltUpdateState> {
  constructor(props) {
    super(props);
    this.state = {
      idsuserManyToMany: [],
      testManyToManyId: '0',
      testOneToOneId: '0',
      userOneToManyId: '0',
      userOneToOneId: '0',
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

    this.props.getTestManyToManies();
    this.props.getTestOneToOnes();
    this.props.getUsers();
  }

  saveEntity = (event, errors, values) => {
    if (errors.length === 0) {
      const { testEntityEntity } = this.props;
      const entity = {
        ...testEntityEntity,
        ...values,
        userManyToManies: mapIdList(values.userManyToManies)
      };

      if (this.state.isNew) {
        this.props.createEntity(entity);
      } else {
        this.props.updateEntity(entity);
      }
    }
  };

  handleClose = () => {
    this.props.history.push('/test-entity-my-suffix-alt');
  };

  render() {
    const { testEntityEntity, testManyToManies, testOneToOnes, users, loading, updating } = this.props;
    const { isNew } = this.state;

    return (
      <div>
        <Row className="justify-content-center">
          <Col md="8">
            <h2 id="travisNg2App.testEntity.home.createOrEditLabel">
              <Translate contentKey="travisNg2App.testEntity.home.createOrEditLabel">Create or edit a TestEntity</Translate>
            </h2>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col md="8">
            {loading ? (
              <p>Loading...</p>
            ) : (
              <AvForm model={isNew ? {} : testEntityEntity} onSubmit={this.saveEntity}>
                {!isNew ? (
                  <AvGroup>
                    <Label for="test-entity-my-suffix-alt-id">
                      <Translate contentKey="global.field.id">ID</Translate>
                    </Label>
                    <AvInput id="test-entity-my-suffix-alt-id" type="text" className="form-control" name="id" required readOnly />
                  </AvGroup>
                ) : null}
                <AvGroup>
                  <Label for="test-entity-my-suffix-alt-userOneToMany">
                    <Translate contentKey="travisNg2App.testEntity.userOneToMany">User One To Many</Translate>
                  </Label>
                  <AvInput
                    id="test-entity-my-suffix-alt-userOneToMany"
                    type="select"
                    className="form-control"
                    name="userOneToMany.id"
                    value={isNew ? users[0] && users[0].id : testEntityEntity.userOneToMany.id}
                    required
                  >
                    {users
                      ? users.map(otherEntity => (
                          <option value={otherEntity.id} key={otherEntity.id}>
                            {otherEntity.login}
                          </option>
                        ))
                      : null}
                  </AvInput>
                  <AvFeedback>
                    <Translate contentKey="entity.validation.required">This field is required.</Translate>
                  </AvFeedback>
                </AvGroup>
                <AvGroup>
                  <Label for="test-entity-my-suffix-alt-userManyToMany">
                    <Translate contentKey="travisNg2App.testEntity.userManyToMany">User Many To Many</Translate>
                  </Label>
                  <AvInput
                    id="test-entity-my-suffix-alt-userManyToMany"
                    type="select"
                    multiple
                    className="form-control"
                    name="userManyToManies"
                    value={testEntityEntity.userManyToManies && testEntityEntity.userManyToManies.map(e => e.id)}
                  >
                    <option value="" key="0" />
                    {users
                      ? users.map(otherEntity => (
                          <option value={otherEntity.id} key={otherEntity.id}>
                            {otherEntity.login}
                          </option>
                        ))
                      : null}
                  </AvInput>
                </AvGroup>
                <AvGroup>
                  <Label for="test-entity-my-suffix-alt-userOneToOne">
                    <Translate contentKey="travisNg2App.testEntity.userOneToOne">User One To One</Translate>
                  </Label>
                  <AvInput id="test-entity-my-suffix-alt-userOneToOne" type="select" className="form-control" name="userOneToOne.id">
                    <option value="" key="0" />
                    {users
                      ? users.map(otherEntity => (
                          <option value={otherEntity.id} key={otherEntity.id}>
                            {otherEntity.login}
                          </option>
                        ))
                      : null}
                  </AvInput>
                </AvGroup>
                <Button tag={Link} id="cancel-save" to="/test-entity-my-suffix-alt" replace color="info">
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
  testManyToManies: storeState.testManyToMany.entities,
  testOneToOnes: storeState.testOneToOne.entities,
  users: storeState.userManagement.users,
  testEntityEntity: storeState.testEntity.entity,
  loading: storeState.testEntity.loading,
  updating: storeState.testEntity.updating,
  updateSuccess: storeState.testEntity.updateSuccess
});

const mapDispatchToProps = {
  getTestManyToManies,
  getTestOneToOnes,
  getUsers,
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
)(TestEntityMySuffixAltUpdate);
