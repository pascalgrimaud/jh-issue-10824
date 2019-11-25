import React from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col, Label } from 'reactstrap';
import { AvFeedback, AvForm, AvGroup, AvInput, AvField } from 'availity-reactstrap-validation';
import { Translate, translate, ICrudGetAction, ICrudGetAllAction, ICrudPutAction } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IRootState } from 'app/shared/reducers';

import { getEntity, updateEntity, createEntity, reset } from './entity-with-pagination-and-dto.reducer';
import { IEntityWithPaginationAndDTO } from 'app/shared/model/entity-with-pagination-and-dto.model';
import { convertDateTimeFromServer, convertDateTimeToServer } from 'app/shared/util/date-utils';
import { mapIdList } from 'app/shared/util/entity-utils';

export interface IEntityWithPaginationAndDTOUpdateProps extends StateProps, DispatchProps, RouteComponentProps<{ id: string }> {}

export interface IEntityWithPaginationAndDTOUpdateState {
  isNew: boolean;
}

export class EntityWithPaginationAndDTOUpdate extends React.Component<
  IEntityWithPaginationAndDTOUpdateProps,
  IEntityWithPaginationAndDTOUpdateState
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
      const { entityWithPaginationAndDTOEntity } = this.props;
      const entity = {
        ...entityWithPaginationAndDTOEntity,
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
    this.props.history.push('/entity-with-pagination-and-dto');
  };

  render() {
    const { entityWithPaginationAndDTOEntity, loading, updating } = this.props;
    const { isNew } = this.state;

    return (
      <div>
        <Row className="justify-content-center">
          <Col md="8">
            <h2 id="travisNg2App.entityWithPaginationAndDTO.home.createOrEditLabel">
              <Translate contentKey="travisNg2App.entityWithPaginationAndDTO.home.createOrEditLabel">
                Create or edit a EntityWithPaginationAndDTO
              </Translate>
            </h2>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col md="8">
            {loading ? (
              <p>Loading...</p>
            ) : (
              <AvForm model={isNew ? {} : entityWithPaginationAndDTOEntity} onSubmit={this.saveEntity}>
                {!isNew ? (
                  <AvGroup>
                    <Label for="entity-with-pagination-and-dto-id">
                      <Translate contentKey="global.field.id">ID</Translate>
                    </Label>
                    <AvInput id="entity-with-pagination-and-dto-id" type="text" className="form-control" name="id" required readOnly />
                  </AvGroup>
                ) : null}
                <AvGroup>
                  <Label id="leaLabel" for="entity-with-pagination-and-dto-lea">
                    <Translate contentKey="travisNg2App.entityWithPaginationAndDTO.lea">Lea</Translate>
                  </Label>
                  <AvField id="entity-with-pagination-and-dto-lea" type="text" name="lea" />
                </AvGroup>
                <Button tag={Link} id="cancel-save" to="/entity-with-pagination-and-dto" replace color="info">
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
  entityWithPaginationAndDTOEntity: storeState.entityWithPaginationAndDTO.entity,
  loading: storeState.entityWithPaginationAndDTO.loading,
  updating: storeState.entityWithPaginationAndDTO.updating,
  updateSuccess: storeState.entityWithPaginationAndDTO.updateSuccess
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
)(EntityWithPaginationAndDTOUpdate);
