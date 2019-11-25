import React from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col, Label } from 'reactstrap';
import { AvFeedback, AvForm, AvGroup, AvInput, AvField } from 'availity-reactstrap-validation';
import { Translate, translate, ICrudGetAction, ICrudGetAllAction, ICrudPutAction } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IRootState } from 'app/shared/reducers';

import { IMapsIdChildEntityWithDTO } from 'app/shared/model/maps-id-child-entity-with-dto.model';
import { getEntities as getMapsIdChildEntityWithDtos } from 'app/entities/maps-id-child-entity-with-dto/maps-id-child-entity-with-dto.reducer';
import { getEntity, updateEntity, createEntity, reset } from './maps-id-parent-entity-with-dto.reducer';
import { IMapsIdParentEntityWithDTO } from 'app/shared/model/maps-id-parent-entity-with-dto.model';
import { convertDateTimeFromServer, convertDateTimeToServer } from 'app/shared/util/date-utils';
import { mapIdList } from 'app/shared/util/entity-utils';

export interface IMapsIdParentEntityWithDTOUpdateProps extends StateProps, DispatchProps, RouteComponentProps<{ id: string }> {}

export interface IMapsIdParentEntityWithDTOUpdateState {
  isNew: boolean;
  mapsIdChildEntityWithDTOId: string;
}

export class MapsIdParentEntityWithDTOUpdate extends React.Component<
  IMapsIdParentEntityWithDTOUpdateProps,
  IMapsIdParentEntityWithDTOUpdateState
> {
  constructor(props) {
    super(props);
    this.state = {
      mapsIdChildEntityWithDTOId: '0',
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

    this.props.getMapsIdChildEntityWithDtos();
  }

  saveEntity = (event, errors, values) => {
    if (errors.length === 0) {
      const { mapsIdParentEntityWithDTOEntity } = this.props;
      const entity = {
        ...mapsIdParentEntityWithDTOEntity,
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
    this.props.history.push('/maps-id-parent-entity-with-dto');
  };

  render() {
    const { mapsIdParentEntityWithDTOEntity, mapsIdChildEntityWithDTOS, loading, updating } = this.props;
    const { isNew } = this.state;

    return (
      <div>
        <Row className="justify-content-center">
          <Col md="8">
            <h2 id="travisNg2App.mapsIdParentEntityWithDTO.home.createOrEditLabel">
              <Translate contentKey="travisNg2App.mapsIdParentEntityWithDTO.home.createOrEditLabel">
                Create or edit a MapsIdParentEntityWithDTO
              </Translate>
            </h2>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col md="8">
            {loading ? (
              <p>Loading...</p>
            ) : (
              <AvForm model={isNew ? {} : mapsIdParentEntityWithDTOEntity} onSubmit={this.saveEntity}>
                {!isNew ? (
                  <AvGroup>
                    <Label for="maps-id-parent-entity-with-dto-id">
                      <Translate contentKey="global.field.id">ID</Translate>
                    </Label>
                    <AvInput id="maps-id-parent-entity-with-dto-id" type="text" className="form-control" name="id" required readOnly />
                  </AvGroup>
                ) : null}
                <AvGroup>
                  <Label id="nameLabel" for="maps-id-parent-entity-with-dto-name">
                    <Translate contentKey="travisNg2App.mapsIdParentEntityWithDTO.name">Name</Translate>
                  </Label>
                  <AvField id="maps-id-parent-entity-with-dto-name" type="text" name="name" />
                </AvGroup>
                <Button tag={Link} id="cancel-save" to="/maps-id-parent-entity-with-dto" replace color="info">
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
  mapsIdChildEntityWithDTOS: storeState.mapsIdChildEntityWithDTO.entities,
  mapsIdParentEntityWithDTOEntity: storeState.mapsIdParentEntityWithDTO.entity,
  loading: storeState.mapsIdParentEntityWithDTO.loading,
  updating: storeState.mapsIdParentEntityWithDTO.updating,
  updateSuccess: storeState.mapsIdParentEntityWithDTO.updateSuccess
});

const mapDispatchToProps = {
  getMapsIdChildEntityWithDtos,
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
)(MapsIdParentEntityWithDTOUpdate);
