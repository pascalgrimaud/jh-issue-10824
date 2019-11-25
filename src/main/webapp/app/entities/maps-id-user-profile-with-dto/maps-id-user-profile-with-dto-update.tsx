import React from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col, Label } from 'reactstrap';
import { AvFeedback, AvForm, AvGroup, AvInput } from 'availity-reactstrap-validation';
import { Translate, translate, ICrudGetAction, ICrudGetAllAction, ICrudPutAction } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IRootState } from 'app/shared/reducers';

import { IUser } from 'app/shared/model/user.model';
import { getUsers } from 'app/modules/administration/user-management/user-management.reducer';
import { getEntity, updateEntity, createEntity, reset } from './maps-id-user-profile-with-dto.reducer';
import { IMapsIdUserProfileWithDTO } from 'app/shared/model/maps-id-user-profile-with-dto.model';
import { convertDateTimeFromServer, convertDateTimeToServer } from 'app/shared/util/date-utils';
import { mapIdList } from 'app/shared/util/entity-utils';

export interface IMapsIdUserProfileWithDTOUpdateProps extends StateProps, DispatchProps, RouteComponentProps<{ id: string }> {}

export interface IMapsIdUserProfileWithDTOUpdateState {
  isNew: boolean;
  userId: string;
}

export class MapsIdUserProfileWithDTOUpdate extends React.Component<
  IMapsIdUserProfileWithDTOUpdateProps,
  IMapsIdUserProfileWithDTOUpdateState
> {
  constructor(props) {
    super(props);
    this.state = {
      userId: '0',
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

    this.props.getUsers();
  }

  saveEntity = (event, errors, values) => {
    values.dateOfBirth = convertDateTimeToServer(values.dateOfBirth);

    if (errors.length === 0) {
      const { mapsIdUserProfileWithDTOEntity } = this.props;
      const entity = {
        ...mapsIdUserProfileWithDTOEntity,
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
    this.props.history.push('/maps-id-user-profile-with-dto');
  };

  render() {
    const { mapsIdUserProfileWithDTOEntity, users, loading, updating } = this.props;
    const { isNew } = this.state;

    return (
      <div>
        <Row className="justify-content-center">
          <Col md="8">
            <h2 id="travisNg2App.mapsIdUserProfileWithDTO.home.createOrEditLabel">
              <Translate contentKey="travisNg2App.mapsIdUserProfileWithDTO.home.createOrEditLabel">
                Create or edit a MapsIdUserProfileWithDTO
              </Translate>
            </h2>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col md="8">
            {loading ? (
              <p>Loading...</p>
            ) : (
              <AvForm model={isNew ? {} : mapsIdUserProfileWithDTOEntity} onSubmit={this.saveEntity}>
                {!isNew ? (
                  <AvGroup>
                    <Label for="maps-id-user-profile-with-dto-id">
                      <Translate contentKey="global.field.id">ID</Translate>
                    </Label>
                    <AvInput id="maps-id-user-profile-with-dto-id" type="text" className="form-control" name="id" required readOnly />
                  </AvGroup>
                ) : null}
                <AvGroup>
                  <Label id="dateOfBirthLabel" for="maps-id-user-profile-with-dto-dateOfBirth">
                    <Translate contentKey="travisNg2App.mapsIdUserProfileWithDTO.dateOfBirth">Date Of Birth</Translate>
                  </Label>
                  <AvInput
                    id="maps-id-user-profile-with-dto-dateOfBirth"
                    type="datetime-local"
                    className="form-control"
                    name="dateOfBirth"
                    placeholder={'YYYY-MM-DD HH:mm'}
                    value={isNew ? null : convertDateTimeFromServer(this.props.mapsIdUserProfileWithDTOEntity.dateOfBirth)}
                  />
                </AvGroup>
                <AvGroup>
                  <Label for="maps-id-user-profile-with-dto-user">
                    <Translate contentKey="travisNg2App.mapsIdUserProfileWithDTO.user">User</Translate>
                  </Label>
                  <AvInput id="maps-id-user-profile-with-dto-user" type="select" className="form-control" name="userId">
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
                <Button tag={Link} id="cancel-save" to="/maps-id-user-profile-with-dto" replace color="info">
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
  users: storeState.userManagement.users,
  mapsIdUserProfileWithDTOEntity: storeState.mapsIdUserProfileWithDTO.entity,
  loading: storeState.mapsIdUserProfileWithDTO.loading,
  updating: storeState.mapsIdUserProfileWithDTO.updating,
  updateSuccess: storeState.mapsIdUserProfileWithDTO.updateSuccess
});

const mapDispatchToProps = {
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
)(MapsIdUserProfileWithDTOUpdate);
