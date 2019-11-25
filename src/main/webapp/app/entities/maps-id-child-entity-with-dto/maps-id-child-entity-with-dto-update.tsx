import React from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col, Label } from 'reactstrap';
import { AvFeedback, AvForm, AvGroup, AvInput } from 'availity-reactstrap-validation';
import { Translate, translate, ICrudGetAction, ICrudGetAllAction, ICrudPutAction } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IRootState } from 'app/shared/reducers';

import { IMapsIdParentEntityWithDTO } from 'app/shared/model/maps-id-parent-entity-with-dto.model';
import { getEntities as getMapsIdParentEntityWithDtos } from 'app/entities/maps-id-parent-entity-with-dto/maps-id-parent-entity-with-dto.reducer';
import { getEntity, updateEntity, createEntity, reset } from './maps-id-child-entity-with-dto.reducer';
import { IMapsIdChildEntityWithDTO } from 'app/shared/model/maps-id-child-entity-with-dto.model';
import { convertDateTimeFromServer, convertDateTimeToServer } from 'app/shared/util/date-utils';
import { mapIdList } from 'app/shared/util/entity-utils';

export interface IMapsIdChildEntityWithDTOUpdateProps extends StateProps, DispatchProps, RouteComponentProps<{ id: string }> {}

export interface IMapsIdChildEntityWithDTOUpdateState {
  isNew: boolean;
  mapsIdParentEntityWithDTOId: string;
}

export class MapsIdChildEntityWithDTOUpdate extends React.Component<
  IMapsIdChildEntityWithDTOUpdateProps,
  IMapsIdChildEntityWithDTOUpdateState
> {
  constructor(props) {
    super(props);
    this.state = {
      mapsIdParentEntityWithDTOId: '0',
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

    this.props.getMapsIdParentEntityWithDtos();
  }

  saveEntity = (event, errors, values) => {
    values.date = convertDateTimeToServer(values.date);

    if (errors.length === 0) {
      const { mapsIdChildEntityWithDTOEntity } = this.props;
      const entity = {
        ...mapsIdChildEntityWithDTOEntity,
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
    this.props.history.push('/maps-id-child-entity-with-dto');
  };

  render() {
    const { mapsIdChildEntityWithDTOEntity, mapsIdParentEntityWithDTOS, loading, updating } = this.props;
    const { isNew } = this.state;

    return (
      <div>
        <Row className="justify-content-center">
          <Col md="8">
            <h2 id="travisNg2App.mapsIdChildEntityWithDTO.home.createOrEditLabel">
              <Translate contentKey="travisNg2App.mapsIdChildEntityWithDTO.home.createOrEditLabel">
                Create or edit a MapsIdChildEntityWithDTO
              </Translate>
            </h2>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col md="8">
            {loading ? (
              <p>Loading...</p>
            ) : (
              <AvForm model={isNew ? {} : mapsIdChildEntityWithDTOEntity} onSubmit={this.saveEntity}>
                {!isNew ? (
                  <AvGroup>
                    <Label for="maps-id-child-entity-with-dto-id">
                      <Translate contentKey="global.field.id">ID</Translate>
                    </Label>
                    <AvInput id="maps-id-child-entity-with-dto-id" type="text" className="form-control" name="id" required readOnly />
                  </AvGroup>
                ) : null}
                <AvGroup>
                  <Label id="dateLabel" for="maps-id-child-entity-with-dto-date">
                    <Translate contentKey="travisNg2App.mapsIdChildEntityWithDTO.date">Date</Translate>
                  </Label>
                  <AvInput
                    id="maps-id-child-entity-with-dto-date"
                    type="datetime-local"
                    className="form-control"
                    name="date"
                    placeholder={'YYYY-MM-DD HH:mm'}
                    value={isNew ? null : convertDateTimeFromServer(this.props.mapsIdChildEntityWithDTOEntity.date)}
                  />
                </AvGroup>
                <AvGroup>
                  <Label for="maps-id-child-entity-with-dto-mapsIdParentEntityWithDTO">
                    <Translate contentKey="travisNg2App.mapsIdChildEntityWithDTO.mapsIdParentEntityWithDTO">
                      Maps Id Parent Entity With DTO
                    </Translate>
                  </Label>
                  <AvInput
                    id="maps-id-child-entity-with-dto-mapsIdParentEntityWithDTO"
                    type="select"
                    className="form-control"
                    name="mapsIdParentEntityWithDTOId"
                  >
                    <option value="" key="0" />
                    {mapsIdParentEntityWithDTOS
                      ? mapsIdParentEntityWithDTOS.map(otherEntity => (
                          <option value={otherEntity.id} key={otherEntity.id}>
                            {otherEntity.id}
                          </option>
                        ))
                      : null}
                  </AvInput>
                </AvGroup>
                <Button tag={Link} id="cancel-save" to="/maps-id-child-entity-with-dto" replace color="info">
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
  mapsIdParentEntityWithDTOS: storeState.mapsIdParentEntityWithDTO.entities,
  mapsIdChildEntityWithDTOEntity: storeState.mapsIdChildEntityWithDTO.entity,
  loading: storeState.mapsIdChildEntityWithDTO.loading,
  updating: storeState.mapsIdChildEntityWithDTO.updating,
  updateSuccess: storeState.mapsIdChildEntityWithDTO.updateSuccess
});

const mapDispatchToProps = {
  getMapsIdParentEntityWithDtos,
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
)(MapsIdChildEntityWithDTOUpdate);
