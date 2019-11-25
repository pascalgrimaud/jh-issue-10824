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
import { getEntity, updateEntity, createEntity, reset } from './test-infinite-scroll.reducer';
import { ITestInfiniteScroll } from 'app/shared/model/test-infinite-scroll.model';
import { convertDateTimeFromServer, convertDateTimeToServer } from 'app/shared/util/date-utils';
import { mapIdList } from 'app/shared/util/entity-utils';

export interface ITestInfiniteScrollUpdateProps extends StateProps, DispatchProps, RouteComponentProps<{ id: string }> {}

export interface ITestInfiniteScrollUpdateState {
  isNew: boolean;
  idsuserManyToMany: any[];
  testManyToManyId: string;
  testOneToOneId: string;
  userOneToManyId: string;
  userOneToOneId: string;
}

export class TestInfiniteScrollUpdate extends React.Component<ITestInfiniteScrollUpdateProps, ITestInfiniteScrollUpdateState> {
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
    if (!this.state.isNew) {
      this.props.getEntity(this.props.match.params.id);
    }

    this.props.getTestManyToManies();
    this.props.getTestOneToOnes();
    this.props.getUsers();
  }

  saveEntity = (event, errors, values) => {
    if (errors.length === 0) {
      const { testInfiniteScrollEntity } = this.props;
      const entity = {
        ...testInfiniteScrollEntity,
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
    this.props.history.push('/test-infinite-scroll');
  };

  render() {
    const { testInfiniteScrollEntity, testManyToManies, testOneToOnes, users, loading, updating } = this.props;
    const { isNew } = this.state;

    return (
      <div>
        <Row className="justify-content-center">
          <Col md="8">
            <h2 id="travisNg2App.testInfiniteScroll.home.createOrEditLabel">
              <Translate contentKey="travisNg2App.testInfiniteScroll.home.createOrEditLabel">Create or edit a TestInfiniteScroll</Translate>
            </h2>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col md="8">
            {loading ? (
              <p>Loading...</p>
            ) : (
              <AvForm model={isNew ? {} : testInfiniteScrollEntity} onSubmit={this.saveEntity}>
                {!isNew ? (
                  <AvGroup>
                    <Label for="test-infinite-scroll-id">
                      <Translate contentKey="global.field.id">ID</Translate>
                    </Label>
                    <AvInput id="test-infinite-scroll-id" type="text" className="form-control" name="id" required readOnly />
                  </AvGroup>
                ) : null}
                <AvGroup>
                  <Label for="test-infinite-scroll-userOneToMany">
                    <Translate contentKey="travisNg2App.testInfiniteScroll.userOneToMany">User One To Many</Translate>
                  </Label>
                  <AvInput id="test-infinite-scroll-userOneToMany" type="select" className="form-control" name="userOneToMany.id">
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
                  <Label for="test-infinite-scroll-userManyToMany">
                    <Translate contentKey="travisNg2App.testInfiniteScroll.userManyToMany">User Many To Many</Translate>
                  </Label>
                  <AvInput
                    id="test-infinite-scroll-userManyToMany"
                    type="select"
                    multiple
                    className="form-control"
                    name="userManyToManies"
                    value={testInfiniteScrollEntity.userManyToManies && testInfiniteScrollEntity.userManyToManies.map(e => e.id)}
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
                  <Label for="test-infinite-scroll-userOneToOne">
                    <Translate contentKey="travisNg2App.testInfiniteScroll.userOneToOne">User One To One</Translate>
                  </Label>
                  <AvInput id="test-infinite-scroll-userOneToOne" type="select" className="form-control" name="userOneToOne.id">
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
                <Button tag={Link} id="cancel-save" to="/test-infinite-scroll" replace color="info">
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
  testInfiniteScrollEntity: storeState.testInfiniteScroll.entity,
  loading: storeState.testInfiniteScroll.loading,
  updating: storeState.testInfiniteScroll.updating,
  updateSuccess: storeState.testInfiniteScroll.updateSuccess
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
)(TestInfiniteScrollUpdate);
