import React from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col, Label } from 'reactstrap';
import { AvFeedback, AvForm, AvGroup, AvInput, AvField } from 'availity-reactstrap-validation';
import { Translate, translate, ICrudGetAction, ICrudGetAllAction, ICrudPutAction } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IRootState } from 'app/shared/reducers';

import { getEntity, updateEntity, createEntity, reset } from './entity-with-service-class-and-dto.reducer';
import { IEntityWithServiceClassAndDTO } from 'app/shared/model/entity-with-service-class-and-dto.model';
import { convertDateTimeFromServer, convertDateTimeToServer } from 'app/shared/util/date-utils';
import { mapIdList } from 'app/shared/util/entity-utils';

export interface IEntityWithServiceClassAndDTOUpdateProps extends StateProps, DispatchProps, RouteComponentProps<{ id: string }> {}

export interface IEntityWithServiceClassAndDTOUpdateState {
  isNew: boolean;
}

export class EntityWithServiceClassAndDTOUpdate extends React.Component<
  IEntityWithServiceClassAndDTOUpdateProps,
  IEntityWithServiceClassAndDTOUpdateState
> {
  constructor(props) {
    super(props);
    this.state = {
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
  }

  saveEntity = (event, errors, values) => {
    if (errors.length === 0) {
      const { entityWithServiceClassAndDTOEntity } = this.props;
      const entity = {
        ...entityWithServiceClassAndDTOEntity,
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
    this.props.history.push('/entity-with-service-class-and-dto');
  };

  render() {
    const { entityWithServiceClassAndDTOEntity, loading, updating } = this.props;
    const { isNew } = this.state;

    return (
      <div>
        <Row className="justify-content-center">
          <Col md="8">
            <h2 id="travisNg2App.entityWithServiceClassAndDTO.home.createOrEditLabel">
              <Translate contentKey="travisNg2App.entityWithServiceClassAndDTO.home.createOrEditLabel">
                Create or edit a EntityWithServiceClassAndDTO
              </Translate>
            </h2>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col md="8">
            {loading ? (
              <p>Loading...</p>
            ) : (
              <AvForm model={isNew ? {} : entityWithServiceClassAndDTOEntity} onSubmit={this.saveEntity}>
                {!isNew ? (
                  <AvGroup>
                    <Label for="entity-with-service-class-and-dto-id">
                      <Translate contentKey="global.field.id">ID</Translate>
                    </Label>
                    <AvInput id="entity-with-service-class-and-dto-id" type="text" className="form-control" name="id" required readOnly />
                  </AvGroup>
                ) : null}
                <AvGroup>
                  <Label id="lucasLabel" for="entity-with-service-class-and-dto-lucas">
                    <Translate contentKey="travisNg2App.entityWithServiceClassAndDTO.lucas">Lucas</Translate>
                  </Label>
                  <AvField id="entity-with-service-class-and-dto-lucas" type="text" name="lucas" />
                </AvGroup>
                <Button tag={Link} id="cancel-save" to="/entity-with-service-class-and-dto" replace color="info">
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
  entityWithServiceClassAndDTOEntity: storeState.entityWithServiceClassAndDTO.entity,
  loading: storeState.entityWithServiceClassAndDTO.loading,
  updating: storeState.entityWithServiceClassAndDTO.updating,
  updateSuccess: storeState.entityWithServiceClassAndDTO.updateSuccess
});

const mapDispatchToProps = {
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
)(EntityWithServiceClassAndDTOUpdate);
