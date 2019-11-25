import React from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col, Label } from 'reactstrap';
import { AvFeedback, AvForm, AvGroup, AvInput, AvField } from 'availity-reactstrap-validation';
import { Translate, translate, ICrudGetAction, ICrudGetAllAction, ICrudPutAction } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IRootState } from 'app/shared/reducers';

import { IPlace } from 'app/shared/model/test-root/place.model';
import { getEntities as getPlaces } from 'app/entities/test-root/place/place.reducer';
import { getEntity, updateEntity, createEntity, reset } from './division.reducer';
import { IDivision } from 'app/shared/model/test-root/division.model';
import { convertDateTimeFromServer, convertDateTimeToServer } from 'app/shared/util/date-utils';
import { mapIdList } from 'app/shared/util/entity-utils';

export interface IDivisionUpdateProps extends StateProps, DispatchProps, RouteComponentProps<{ id: string }> {}

export interface IDivisionUpdateState {
  isNew: boolean;
  divisionsPlaceId: string;
  preferredPlaceId: string;
}

export class DivisionUpdate extends React.Component<IDivisionUpdateProps, IDivisionUpdateState> {
  constructor(props) {
    super(props);
    this.state = {
      divisionsPlaceId: '0',
      preferredPlaceId: '0',
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

    this.props.getPlaces();
  }

  saveEntity = (event, errors, values) => {
    if (errors.length === 0) {
      const { divisionEntity } = this.props;
      const entity = {
        ...divisionEntity,
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
    this.props.history.push('/division');
  };

  render() {
    const { divisionEntity, places, loading, updating } = this.props;
    const { isNew } = this.state;

    return (
      <div>
        <Row className="justify-content-center">
          <Col md="8">
            <h2 id="travisNg2App.testRootDivision.home.createOrEditLabel">
              <Translate contentKey="travisNg2App.testRootDivision.home.createOrEditLabel">Create or edit a Division</Translate>
            </h2>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col md="8">
            {loading ? (
              <p>Loading...</p>
            ) : (
              <AvForm model={isNew ? {} : divisionEntity} onSubmit={this.saveEntity}>
                {!isNew ? (
                  <AvGroup>
                    <Label for="division-id">
                      <Translate contentKey="global.field.id">ID</Translate>
                    </Label>
                    <AvInput id="division-id" type="text" className="form-control" name="id" required readOnly />
                  </AvGroup>
                ) : null}
                <AvGroup>
                  <Label id="nameLabel" for="division-name">
                    <Translate contentKey="travisNg2App.testRootDivision.name">Name</Translate>
                  </Label>
                  <AvField
                    id="division-name"
                    type="text"
                    name="name"
                    validate={{
                      required: { value: true, errorMessage: translate('entity.validation.required') }
                    }}
                  />
                </AvGroup>
                <AvGroup>
                  <Label id="shortNameLabel" for="division-shortName">
                    <Translate contentKey="travisNg2App.testRootDivision.shortName">Short Name</Translate>
                  </Label>
                  <AvField id="division-shortName" type="text" name="shortName" validate={{}} />
                </AvGroup>
                <AvGroup>
                  <Label id="numberOfPeopleLabel" for="division-numberOfPeople">
                    <Translate contentKey="travisNg2App.testRootDivision.numberOfPeople">Number Of People</Translate>
                  </Label>
                  <AvField id="division-numberOfPeople" type="string" className="form-control" name="numberOfPeople" />
                </AvGroup>
                <AvGroup>
                  <Label id="divisionTypeLabel" for="division-divisionType">
                    <Translate contentKey="travisNg2App.testRootDivision.divisionType">Division Type</Translate>
                  </Label>
                  <AvInput
                    id="division-divisionType"
                    type="select"
                    className="form-control"
                    name="divisionType"
                    value={(!isNew && divisionEntity.divisionType) || 'SCHOOL'}
                  >
                    <option value="SCHOOL">{translate('travisNg2App.DivisionType.SCHOOL')}</option>
                    <option value="CLASS">{translate('travisNg2App.DivisionType.CLASS')}</option>
                    <option value="SUBGROUP">{translate('travisNg2App.DivisionType.SUBGROUP')}</option>
                  </AvInput>
                </AvGroup>
                <AvGroup>
                  <Label id="colorBackgroundLabel" for="division-colorBackground">
                    <Translate contentKey="travisNg2App.testRootDivision.colorBackground">Color Background</Translate>
                  </Label>
                  <AvField id="division-colorBackground" type="text" name="colorBackground" />
                </AvGroup>
                <AvGroup>
                  <Label id="colorTextLabel" for="division-colorText">
                    <Translate contentKey="travisNg2App.testRootDivision.colorText">Color Text</Translate>
                  </Label>
                  <AvField id="division-colorText" type="text" name="colorText" />
                </AvGroup>
                <Button tag={Link} id="cancel-save" to="/division" replace color="info">
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
  places: storeState.place.entities,
  divisionEntity: storeState.division.entity,
  loading: storeState.division.loading,
  updating: storeState.division.updating,
  updateSuccess: storeState.division.updateSuccess
});

const mapDispatchToProps = {
  getPlaces,
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
)(DivisionUpdate);
