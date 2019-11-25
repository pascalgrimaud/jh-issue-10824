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
import { getEntity, updateEntity, createEntity, reset } from './super-mega-large-test-entity-my-suffix-alt.reducer';
import { ISuperMegaLargeTestEntityMySuffixAlt } from 'app/shared/model/super-mega-large-test-entity-my-suffix-alt.model';
import { convertDateTimeFromServer, convertDateTimeToServer } from 'app/shared/util/date-utils';
import { mapIdList } from 'app/shared/util/entity-utils';

export interface ISuperMegaLargeTestEntityMySuffixAltUpdateProps extends StateProps, DispatchProps, RouteComponentProps<{ id: string }> {}

export interface ISuperMegaLargeTestEntityMySuffixAltUpdateState {
  isNew: boolean;
  idssuperMegaLargeUserManyToMany: any[];
  superMegaLargeTestManyToManyId: string;
  superMegaLargeTestOneToOneId: string;
  superMegaLargeUserOneToManyId: string;
  superMegaLargeUserOneToOneId: string;
}

export class SuperMegaLargeTestEntityMySuffixAltUpdate extends React.Component<
  ISuperMegaLargeTestEntityMySuffixAltUpdateProps,
  ISuperMegaLargeTestEntityMySuffixAltUpdateState
> {
  constructor(props) {
    super(props);
    this.state = {
      idssuperMegaLargeUserManyToMany: [],
      superMegaLargeTestManyToManyId: '0',
      superMegaLargeTestOneToOneId: '0',
      superMegaLargeUserOneToManyId: '0',
      superMegaLargeUserOneToOneId: '0',
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
      const { superMegaLargeTestEntityEntity } = this.props;
      const entity = {
        ...superMegaLargeTestEntityEntity,
        ...values,
        superMegaLargeUserManyToManies: mapIdList(values.superMegaLargeUserManyToManies)
      };

      if (this.state.isNew) {
        this.props.createEntity(entity);
      } else {
        this.props.updateEntity(entity);
      }
    }
  };

  handleClose = () => {
    this.props.history.push('/super-mega-large-test-entity-my-suffix-alt');
  };

  render() {
    const { superMegaLargeTestEntityEntity, testManyToManies, testOneToOnes, users, loading, updating } = this.props;
    const { isNew } = this.state;

    return (
      <div>
        <Row className="justify-content-center">
          <Col md="8">
            <h2 id="travisNg2App.superMegaLargeTestEntity.home.createOrEditLabel">
              <Translate contentKey="travisNg2App.superMegaLargeTestEntity.home.createOrEditLabel">
                Create or edit a SuperMegaLargeTestEntity
              </Translate>
            </h2>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col md="8">
            {loading ? (
              <p>Loading...</p>
            ) : (
              <AvForm model={isNew ? {} : superMegaLargeTestEntityEntity} onSubmit={this.saveEntity}>
                {!isNew ? (
                  <AvGroup>
                    <Label for="super-mega-large-test-entity-my-suffix-alt-id">
                      <Translate contentKey="global.field.id">ID</Translate>
                    </Label>
                    <AvInput
                      id="super-mega-large-test-entity-my-suffix-alt-id"
                      type="text"
                      className="form-control"
                      name="id"
                      required
                      readOnly
                    />
                  </AvGroup>
                ) : null}
                <AvGroup>
                  <Label for="super-mega-large-test-entity-my-suffix-alt-superMegaLargeUserOneToMany">
                    <Translate contentKey="travisNg2App.superMegaLargeTestEntity.superMegaLargeUserOneToMany">
                      Super Mega Large User One To Many
                    </Translate>
                  </Label>
                  <AvInput
                    id="super-mega-large-test-entity-my-suffix-alt-superMegaLargeUserOneToMany"
                    type="select"
                    className="form-control"
                    name="superMegaLargeUserOneToMany.id"
                    value={isNew ? users[0] && users[0].id : superMegaLargeTestEntityEntity.superMegaLargeUserOneToMany.id}
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
                  <Label for="super-mega-large-test-entity-my-suffix-alt-superMegaLargeUserManyToMany">
                    <Translate contentKey="travisNg2App.superMegaLargeTestEntity.superMegaLargeUserManyToMany">
                      Super Mega Large User Many To Many
                    </Translate>
                  </Label>
                  <AvInput
                    id="super-mega-large-test-entity-my-suffix-alt-superMegaLargeUserManyToMany"
                    type="select"
                    multiple
                    className="form-control"
                    name="superMegaLargeUserManyToManies"
                    value={
                      superMegaLargeTestEntityEntity.superMegaLargeUserManyToManies &&
                      superMegaLargeTestEntityEntity.superMegaLargeUserManyToManies.map(e => e.id)
                    }
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
                  <Label for="super-mega-large-test-entity-my-suffix-alt-superMegaLargeUserOneToOne">
                    <Translate contentKey="travisNg2App.superMegaLargeTestEntity.superMegaLargeUserOneToOne">
                      Super Mega Large User One To One
                    </Translate>
                  </Label>
                  <AvInput
                    id="super-mega-large-test-entity-my-suffix-alt-superMegaLargeUserOneToOne"
                    type="select"
                    className="form-control"
                    name="superMegaLargeUserOneToOne.id"
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
                <Button tag={Link} id="cancel-save" to="/super-mega-large-test-entity-my-suffix-alt" replace color="info">
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
  superMegaLargeTestEntityEntity: storeState.superMegaLargeTestEntity.entity,
  loading: storeState.superMegaLargeTestEntity.loading,
  updating: storeState.superMegaLargeTestEntity.updating,
  updateSuccess: storeState.superMegaLargeTestEntity.updateSuccess
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
)(SuperMegaLargeTestEntityMySuffixAltUpdate);
