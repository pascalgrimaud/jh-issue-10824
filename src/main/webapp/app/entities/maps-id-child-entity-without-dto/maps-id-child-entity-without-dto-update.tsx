import React from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col, Label } from 'reactstrap';
import { AvFeedback, AvForm, AvGroup, AvInput } from 'availity-reactstrap-validation';
import { Translate, translate, ICrudGetAction, ICrudGetAllAction, ICrudPutAction } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IRootState } from 'app/shared/reducers';

import { IMapsIdParentEntityWithoutDTO } from 'app/shared/model/maps-id-parent-entity-without-dto.model';
import { getEntities as getMapsIdParentEntityWithoutDtos } from 'app/entities/maps-id-parent-entity-without-dto/maps-id-parent-entity-without-dto.reducer';
import { getEntity, updateEntity, createEntity, reset } from './maps-id-child-entity-without-dto.reducer';
import { IMapsIdChildEntityWithoutDTO } from 'app/shared/model/maps-id-child-entity-without-dto.model';
import { convertDateTimeFromServer, convertDateTimeToServer } from 'app/shared/util/date-utils';
import { mapIdList } from 'app/shared/util/entity-utils';

export interface IMapsIdChildEntityWithoutDTOUpdateProps extends StateProps, DispatchProps, RouteComponentProps<{ id: string }> {}

export interface IMapsIdChildEntityWithoutDTOUpdateState {
  isNew: boolean;
  mapsIdParentEntityWithoutDTOId: string;
}

export class MapsIdChildEntityWithoutDTOUpdate extends React.Component<
  IMapsIdChildEntityWithoutDTOUpdateProps,
  IMapsIdChildEntityWithoutDTOUpdateState
> {
  constructor(props) {
    super(props);
    this.state = {
      mapsIdParentEntityWithoutDTOId: '0',
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

    this.props.getMapsIdParentEntityWithoutDtos();
  }

  saveEntity = (event, errors, values) => {
    values.date = convertDateTimeToServer(values.date);

    if (errors.length === 0) {
      const { mapsIdChildEntityWithoutDTOEntity } = this.props;
      const entity = {
        ...mapsIdChildEntityWithoutDTOEntity,
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
    this.props.history.push('/maps-id-child-entity-without-dto');
  };

  render() {
    const { mapsIdChildEntityWithoutDTOEntity, mapsIdParentEntityWithoutDTOS, loading, updating } = this.props;
    const { isNew } = this.state;

    return (
      <div>
        <Row className="justify-content-center">
          <Col md="8">
            <h2 id="travisNg2App.mapsIdChildEntityWithoutDTO.home.createOrEditLabel">
              <Translate contentKey="travisNg2App.mapsIdChildEntityWithoutDTO.home.createOrEditLabel">
                Create or edit a MapsIdChildEntityWithoutDTO
              </Translate>
            </h2>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col md="8">
            {loading ? (
              <p>Loading...</p>
            ) : (
              <AvForm model={isNew ? {} : mapsIdChildEntityWithoutDTOEntity} onSubmit={this.saveEntity}>
                {!isNew ? (
                  <AvGroup>
                    <Label for="maps-id-child-entity-without-dto-id">
                      <Translate contentKey="global.field.id">ID</Translate>
                    </Label>
                    <AvInput id="maps-id-child-entity-without-dto-id" type="text" className="form-control" name="id" required readOnly />
                  </AvGroup>
                ) : null}
                <AvGroup>
                  <Label id="dateLabel" for="maps-id-child-entity-without-dto-date">
                    <Translate contentKey="travisNg2App.mapsIdChildEntityWithoutDTO.date">Date</Translate>
                  </Label>
                  <AvInput
                    id="maps-id-child-entity-without-dto-date"
                    type="datetime-local"
                    className="form-control"
                    name="date"
                    placeholder={'YYYY-MM-DD HH:mm'}
                    value={isNew ? null : convertDateTimeFromServer(this.props.mapsIdChildEntityWithoutDTOEntity.date)}
                  />
                </AvGroup>
                <AvGroup>
                  <Label for="maps-id-child-entity-without-dto-mapsIdParentEntityWithoutDTO">
                    <Translate contentKey="travisNg2App.mapsIdChildEntityWithoutDTO.mapsIdParentEntityWithoutDTO">
                      Maps Id Parent Entity Without DTO
                    </Translate>
                  </Label>
                  <AvInput
                    id="maps-id-child-entity-without-dto-mapsIdParentEntityWithoutDTO"
                    type="select"
                    className="form-control"
                    name="mapsIdParentEntityWithoutDTO.id"
                  >
                    <option value="" key="0" />
                    {mapsIdParentEntityWithoutDTOS
                      ? mapsIdParentEntityWithoutDTOS.map(otherEntity => (
                          <option value={otherEntity.id} key={otherEntity.id}>
                            {otherEntity.id}
                          </option>
                        ))
                      : null}
                  </AvInput>
                </AvGroup>
                <Button tag={Link} id="cancel-save" to="/maps-id-child-entity-without-dto" replace color="info">
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
  mapsIdParentEntityWithoutDTOS: storeState.mapsIdParentEntityWithoutDTO.entities,
  mapsIdChildEntityWithoutDTOEntity: storeState.mapsIdChildEntityWithoutDTO.entity,
  loading: storeState.mapsIdChildEntityWithoutDTO.loading,
  updating: storeState.mapsIdChildEntityWithoutDTO.updating,
  updateSuccess: storeState.mapsIdChildEntityWithoutDTO.updateSuccess
});

const mapDispatchToProps = {
  getMapsIdParentEntityWithoutDtos,
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
)(MapsIdChildEntityWithoutDTOUpdate);
