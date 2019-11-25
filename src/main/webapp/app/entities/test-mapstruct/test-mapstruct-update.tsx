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
import { ITestManyRelPaginDTOMySuffix } from 'app/shared/model/test-many-rel-pagin-dto-my-suffix.model';
import { getEntities as getTestManyRelPaginDtos } from 'app/entities/test-many-rel-pagin-dto-my-suffix/test-many-rel-pagin-dto-my-suffix.reducer';
import { ITestOneToOneMySuffix } from 'app/shared/model/test-one-to-one-my-suffix.model';
import { getEntities as getTestOneToOnes } from 'app/entities/test-one-to-one-my-suffix/test-one-to-one-my-suffix.reducer';
import { IUser } from 'app/shared/model/user.model';
import { getUsers } from 'app/modules/administration/user-management/user-management.reducer';
import { getEntity, updateEntity, createEntity, reset } from './test-mapstruct.reducer';
import { ITestMapstruct } from 'app/shared/model/test-mapstruct.model';
import { convertDateTimeFromServer, convertDateTimeToServer } from 'app/shared/util/date-utils';
import { mapIdList } from 'app/shared/util/entity-utils';

export interface ITestMapstructUpdateProps extends StateProps, DispatchProps, RouteComponentProps<{ id: string }> {}

export interface ITestMapstructUpdateState {
  isNew: boolean;
  idsuserManyToMany: any[];
  testManyToManyId: string;
  testManyRelPaginDTOId: string;
  testOneToOneId: string;
  userOneToManyId: string;
  userOneToOneId: string;
}

export class TestMapstructUpdate extends React.Component<ITestMapstructUpdateProps, ITestMapstructUpdateState> {
  constructor(props) {
    super(props);
    this.state = {
      idsuserManyToMany: [],
      testManyToManyId: '0',
      testManyRelPaginDTOId: '0',
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
    this.props.getTestManyRelPaginDtos();
    this.props.getTestOneToOnes();
    this.props.getUsers();
  }

  saveEntity = (event, errors, values) => {
    if (errors.length === 0) {
      const { testMapstructEntity } = this.props;
      const entity = {
        ...testMapstructEntity,
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
    this.props.history.push('/test-mapstruct');
  };

  render() {
    const { testMapstructEntity, testManyToManies, testManyRelPaginDTOS, testOneToOnes, users, loading, updating } = this.props;
    const { isNew } = this.state;

    return (
      <div>
        <Row className="justify-content-center">
          <Col md="8">
            <h2 id="travisNg2App.testMapstruct.home.createOrEditLabel">
              <Translate contentKey="travisNg2App.testMapstruct.home.createOrEditLabel">Create or edit a TestMapstruct</Translate>
            </h2>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col md="8">
            {loading ? (
              <p>Loading...</p>
            ) : (
              <AvForm model={isNew ? {} : testMapstructEntity} onSubmit={this.saveEntity}>
                {!isNew ? (
                  <AvGroup>
                    <Label for="test-mapstruct-id">
                      <Translate contentKey="global.field.id">ID</Translate>
                    </Label>
                    <AvInput id="test-mapstruct-id" type="text" className="form-control" name="id" required readOnly />
                  </AvGroup>
                ) : null}
                <AvGroup>
                  <Label for="test-mapstruct-userOneToMany">
                    <Translate contentKey="travisNg2App.testMapstruct.userOneToMany">User One To Many</Translate>
                  </Label>
                  <AvInput id="test-mapstruct-userOneToMany" type="select" className="form-control" name="userOneToManyId">
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
                  <Label for="test-mapstruct-userManyToMany">
                    <Translate contentKey="travisNg2App.testMapstruct.userManyToMany">User Many To Many</Translate>
                  </Label>
                  <AvInput
                    id="test-mapstruct-userManyToMany"
                    type="select"
                    multiple
                    className="form-control"
                    name="userManyToManies"
                    value={testMapstructEntity.userManyToManies && testMapstructEntity.userManyToManies.map(e => e.id)}
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
                  <Label for="test-mapstruct-userOneToOne">
                    <Translate contentKey="travisNg2App.testMapstruct.userOneToOne">User One To One</Translate>
                  </Label>
                  <AvInput id="test-mapstruct-userOneToOne" type="select" className="form-control" name="userOneToOneId">
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
                <Button tag={Link} id="cancel-save" to="/test-mapstruct" replace color="info">
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
  testManyRelPaginDTOS: storeState.testManyRelPaginDTO.entities,
  testOneToOnes: storeState.testOneToOne.entities,
  users: storeState.userManagement.users,
  testMapstructEntity: storeState.testMapstruct.entity,
  loading: storeState.testMapstruct.loading,
  updating: storeState.testMapstruct.updating,
  updateSuccess: storeState.testMapstruct.updateSuccess
});

const mapDispatchToProps = {
  getTestManyToManies,
  getTestManyRelPaginDtos,
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
)(TestMapstructUpdate);
