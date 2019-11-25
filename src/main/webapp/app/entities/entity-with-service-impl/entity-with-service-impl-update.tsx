import React from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col, Label } from 'reactstrap';
import { AvFeedback, AvForm, AvGroup, AvInput, AvField } from 'availity-reactstrap-validation';
import { Translate, translate, ICrudGetAction, ICrudGetAllAction, ICrudPutAction } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IRootState } from 'app/shared/reducers';

import { getEntity, updateEntity, createEntity, reset } from './entity-with-service-impl.reducer';
import { IEntityWithServiceImpl } from 'app/shared/model/entity-with-service-impl.model';
import { convertDateTimeFromServer, convertDateTimeToServer } from 'app/shared/util/date-utils';
import { mapIdList } from 'app/shared/util/entity-utils';

export interface IEntityWithServiceImplUpdateProps extends StateProps, DispatchProps, RouteComponentProps<{ id: string }> {}

export interface IEntityWithServiceImplUpdateState {
  isNew: boolean;
}

export class EntityWithServiceImplUpdate extends React.Component<IEntityWithServiceImplUpdateProps, IEntityWithServiceImplUpdateState> {
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
      const { entityWithServiceImplEntity } = this.props;
      const entity = {
        ...entityWithServiceImplEntity,
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
    this.props.history.push('/entity-with-service-impl');
  };

  render() {
    const { entityWithServiceImplEntity, loading, updating } = this.props;
    const { isNew } = this.state;

    return (
      <div>
        <Row className="justify-content-center">
          <Col md="8">
            <h2 id="travisNg2App.entityWithServiceImpl.home.createOrEditLabel">
              <Translate contentKey="travisNg2App.entityWithServiceImpl.home.createOrEditLabel">
                Create or edit a EntityWithServiceImpl
              </Translate>
            </h2>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col md="8">
            {loading ? (
              <p>Loading...</p>
            ) : (
              <AvForm model={isNew ? {} : entityWithServiceImplEntity} onSubmit={this.saveEntity}>
                {!isNew ? (
                  <AvGroup>
                    <Label for="entity-with-service-impl-id">
                      <Translate contentKey="global.field.id">ID</Translate>
                    </Label>
                    <AvInput id="entity-with-service-impl-id" type="text" className="form-control" name="id" required readOnly />
                  </AvGroup>
                ) : null}
                <AvGroup>
                  <Label id="claraLabel" for="entity-with-service-impl-clara">
                    <Translate contentKey="travisNg2App.entityWithServiceImpl.clara">Clara</Translate>
                  </Label>
                  <AvField id="entity-with-service-impl-clara" type="text" name="clara" />
                </AvGroup>
                <Button tag={Link} id="cancel-save" to="/entity-with-service-impl" replace color="info">
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
  entityWithServiceImplEntity: storeState.entityWithServiceImpl.entity,
  loading: storeState.entityWithServiceImpl.loading,
  updating: storeState.entityWithServiceImpl.updating,
  updateSuccess: storeState.entityWithServiceImpl.updateSuccess
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
)(EntityWithServiceImplUpdate);
