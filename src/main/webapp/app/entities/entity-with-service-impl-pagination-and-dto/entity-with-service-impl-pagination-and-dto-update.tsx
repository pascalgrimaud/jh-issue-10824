import React from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col, Label } from 'reactstrap';
import { AvFeedback, AvForm, AvGroup, AvInput, AvField } from 'availity-reactstrap-validation';
import { Translate, translate, ICrudGetAction, ICrudGetAllAction, ICrudPutAction } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IRootState } from 'app/shared/reducers';

import { getEntity, updateEntity, createEntity, reset } from './entity-with-service-impl-pagination-and-dto.reducer';
import { IEntityWithServiceImplPaginationAndDTO } from 'app/shared/model/entity-with-service-impl-pagination-and-dto.model';
import { convertDateTimeFromServer, convertDateTimeToServer } from 'app/shared/util/date-utils';
import { mapIdList } from 'app/shared/util/entity-utils';

export interface IEntityWithServiceImplPaginationAndDTOUpdateProps extends StateProps, DispatchProps, RouteComponentProps<{ id: string }> {}

export interface IEntityWithServiceImplPaginationAndDTOUpdateState {
  isNew: boolean;
}

export class EntityWithServiceImplPaginationAndDTOUpdate extends React.Component<
  IEntityWithServiceImplPaginationAndDTOUpdateProps,
  IEntityWithServiceImplPaginationAndDTOUpdateState
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
      const { entityWithServiceImplPaginationAndDTOEntity } = this.props;
      const entity = {
        ...entityWithServiceImplPaginationAndDTOEntity,
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
    this.props.history.push('/entity-with-service-impl-pagination-and-dto');
  };

  render() {
    const { entityWithServiceImplPaginationAndDTOEntity, loading, updating } = this.props;
    const { isNew } = this.state;

    return (
      <div>
        <Row className="justify-content-center">
          <Col md="8">
            <h2 id="travisNg2App.entityWithServiceImplPaginationAndDTO.home.createOrEditLabel">
              <Translate contentKey="travisNg2App.entityWithServiceImplPaginationAndDTO.home.createOrEditLabel">
                Create or edit a EntityWithServiceImplPaginationAndDTO
              </Translate>
            </h2>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col md="8">
            {loading ? (
              <p>Loading...</p>
            ) : (
              <AvForm model={isNew ? {} : entityWithServiceImplPaginationAndDTOEntity} onSubmit={this.saveEntity}>
                {!isNew ? (
                  <AvGroup>
                    <Label for="entity-with-service-impl-pagination-and-dto-id">
                      <Translate contentKey="global.field.id">ID</Translate>
                    </Label>
                    <AvInput
                      id="entity-with-service-impl-pagination-and-dto-id"
                      type="text"
                      className="form-control"
                      name="id"
                      required
                      readOnly
                    />
                  </AvGroup>
                ) : null}
                <AvGroup>
                  <Label id="theoLabel" for="entity-with-service-impl-pagination-and-dto-theo">
                    <Translate contentKey="travisNg2App.entityWithServiceImplPaginationAndDTO.theo">Theo</Translate>
                  </Label>
                  <AvField id="entity-with-service-impl-pagination-and-dto-theo" type="text" name="theo" />
                </AvGroup>
                <Button tag={Link} id="cancel-save" to="/entity-with-service-impl-pagination-and-dto" replace color="info">
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
  entityWithServiceImplPaginationAndDTOEntity: storeState.entityWithServiceImplPaginationAndDTO.entity,
  loading: storeState.entityWithServiceImplPaginationAndDTO.loading,
  updating: storeState.entityWithServiceImplPaginationAndDTO.updating,
  updateSuccess: storeState.entityWithServiceImplPaginationAndDTO.updateSuccess
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
)(EntityWithServiceImplPaginationAndDTOUpdate);
