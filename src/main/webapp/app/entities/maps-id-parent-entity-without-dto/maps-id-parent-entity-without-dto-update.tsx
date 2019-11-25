import React from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col, Label } from 'reactstrap';
import { AvFeedback, AvForm, AvGroup, AvInput, AvField } from 'availity-reactstrap-validation';
import { Translate, translate, ICrudGetAction, ICrudGetAllAction, ICrudPutAction } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IRootState } from 'app/shared/reducers';

import { IMapsIdChildEntityWithoutDTO } from 'app/shared/model/maps-id-child-entity-without-dto.model';
import { getEntities as getMapsIdChildEntityWithoutDtos } from 'app/entities/maps-id-child-entity-without-dto/maps-id-child-entity-without-dto.reducer';
import { getEntity, updateEntity, createEntity, reset } from './maps-id-parent-entity-without-dto.reducer';
import { IMapsIdParentEntityWithoutDTO } from 'app/shared/model/maps-id-parent-entity-without-dto.model';
import { convertDateTimeFromServer, convertDateTimeToServer } from 'app/shared/util/date-utils';
import { mapIdList } from 'app/shared/util/entity-utils';

export interface IMapsIdParentEntityWithoutDTOUpdateProps extends StateProps, DispatchProps, RouteComponentProps<{ id: string }> {}

export interface IMapsIdParentEntityWithoutDTOUpdateState {
  isNew: boolean;
  mapsIdChildEntityWithoutDTOId: string;
}

export class MapsIdParentEntityWithoutDTOUpdate extends React.Component<
  IMapsIdParentEntityWithoutDTOUpdateProps,
  IMapsIdParentEntityWithoutDTOUpdateState
> {
  constructor(props) {
    super(props);
    this.state = {
      mapsIdChildEntityWithoutDTOId: '0',
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

    this.props.getMapsIdChildEntityWithoutDtos();
  }

  saveEntity = (event, errors, values) => {
    if (errors.length === 0) {
      const { mapsIdParentEntityWithoutDTOEntity } = this.props;
      const entity = {
        ...mapsIdParentEntityWithoutDTOEntity,
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
    this.props.history.push('/maps-id-parent-entity-without-dto');
  };

  render() {
    const { mapsIdParentEntityWithoutDTOEntity, mapsIdChildEntityWithoutDTOS, loading, updating } = this.props;
    const { isNew } = this.state;

    return (
      <div>
        <Row className="justify-content-center">
          <Col md="8">
            <h2 id="travisNg2App.mapsIdParentEntityWithoutDTO.home.createOrEditLabel">
              <Translate contentKey="travisNg2App.mapsIdParentEntityWithoutDTO.home.createOrEditLabel">
                Create or edit a MapsIdParentEntityWithoutDTO
              </Translate>
            </h2>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col md="8">
            {loading ? (
              <p>Loading...</p>
            ) : (
              <AvForm model={isNew ? {} : mapsIdParentEntityWithoutDTOEntity} onSubmit={this.saveEntity}>
                {!isNew ? (
                  <AvGroup>
                    <Label for="maps-id-parent-entity-without-dto-id">
                      <Translate contentKey="global.field.id">ID</Translate>
                    </Label>
                    <AvInput id="maps-id-parent-entity-without-dto-id" type="text" className="form-control" name="id" required readOnly />
                  </AvGroup>
                ) : null}
                <AvGroup>
                  <Label id="nameLabel" for="maps-id-parent-entity-without-dto-name">
                    <Translate contentKey="travisNg2App.mapsIdParentEntityWithoutDTO.name">Name</Translate>
                  </Label>
                  <AvField id="maps-id-parent-entity-without-dto-name" type="text" name="name" />
                </AvGroup>
                <Button tag={Link} id="cancel-save" to="/maps-id-parent-entity-without-dto" replace color="info">
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
  mapsIdChildEntityWithoutDTOS: storeState.mapsIdChildEntityWithoutDTO.entities,
  mapsIdParentEntityWithoutDTOEntity: storeState.mapsIdParentEntityWithoutDTO.entity,
  loading: storeState.mapsIdParentEntityWithoutDTO.loading,
  updating: storeState.mapsIdParentEntityWithoutDTO.updating,
  updateSuccess: storeState.mapsIdParentEntityWithoutDTO.updateSuccess
});

const mapDispatchToProps = {
  getMapsIdChildEntityWithoutDtos,
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
)(MapsIdParentEntityWithoutDTOUpdate);
