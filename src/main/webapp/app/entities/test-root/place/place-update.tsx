import React from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col, Label } from 'reactstrap';
import { AvFeedback, AvForm, AvGroup, AvInput, AvField } from 'availity-reactstrap-validation';
import { Translate, translate, ICrudGetAction, ICrudGetAllAction, setFileData, byteSize, ICrudPutAction } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IRootState } from 'app/shared/reducers';

import { IDivision } from 'app/shared/model/test-root/division.model';
import { getEntities as getDivisions } from 'app/entities/test-root/division/division.reducer';
import { getEntity, updateEntity, createEntity, setBlob, reset } from './place.reducer';
import { IPlace } from 'app/shared/model/test-root/place.model';
import { convertDateTimeFromServer, convertDateTimeToServer } from 'app/shared/util/date-utils';
import { mapIdList } from 'app/shared/util/entity-utils';

export interface IPlaceUpdateProps extends StateProps, DispatchProps, RouteComponentProps<{ id: string }> {}

export interface IPlaceUpdateState {
  isNew: boolean;
  idspreferredDivision: any[];
  ownerId: string;
}

export class PlaceUpdate extends React.Component<IPlaceUpdateProps, IPlaceUpdateState> {
  constructor(props) {
    super(props);
    this.state = {
      idspreferredDivision: [],
      ownerId: '0',
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

    this.props.getDivisions();
  }

  onBlobChange = (isAnImage, name) => event => {
    setFileData(event, (contentType, data) => this.props.setBlob(name, data, contentType), isAnImage);
  };

  clearBlob = name => () => {
    this.props.setBlob(name, undefined, undefined);
  };

  saveEntity = (event, errors, values) => {
    if (errors.length === 0) {
      const { placeEntity } = this.props;
      const entity = {
        ...placeEntity,
        ...values,
        preferredDivisions: mapIdList(values.preferredDivisions)
      };

      if (this.state.isNew) {
        this.props.createEntity(entity);
      } else {
        this.props.updateEntity(entity);
      }
    }
  };

  handleClose = () => {
    this.props.history.push('/place');
  };

  render() {
    const { placeEntity, divisions, loading, updating } = this.props;
    const { isNew } = this.state;

    const { description } = placeEntity;

    return (
      <div>
        <Row className="justify-content-center">
          <Col md="8">
            <h2 id="travisNg2App.testRootPlace.home.createOrEditLabel">
              <Translate contentKey="travisNg2App.testRootPlace.home.createOrEditLabel">Create or edit a Place</Translate>
            </h2>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col md="8">
            {loading ? (
              <p>Loading...</p>
            ) : (
              <AvForm model={isNew ? {} : placeEntity} onSubmit={this.saveEntity}>
                {!isNew ? (
                  <AvGroup>
                    <Label for="place-id">
                      <Translate contentKey="global.field.id">ID</Translate>
                    </Label>
                    <AvInput id="place-id" type="text" className="form-control" name="id" required readOnly />
                  </AvGroup>
                ) : null}
                <AvGroup>
                  <Label id="nameLabel" for="place-name">
                    <Translate contentKey="travisNg2App.testRootPlace.name">Name</Translate>
                  </Label>
                  <AvField
                    id="place-name"
                    type="text"
                    name="name"
                    validate={{
                      required: { value: true, errorMessage: translate('entity.validation.required') }
                    }}
                  />
                </AvGroup>
                <AvGroup>
                  <Label id="numberOfSeatsLabel" for="place-numberOfSeats">
                    <Translate contentKey="travisNg2App.testRootPlace.numberOfSeats">Number Of Seats</Translate>
                  </Label>
                  <AvField id="place-numberOfSeats" type="string" className="form-control" name="numberOfSeats" />
                </AvGroup>
                <AvGroup>
                  <Label id="shortNameLabel" for="place-shortName">
                    <Translate contentKey="travisNg2App.testRootPlace.shortName">Short Name</Translate>
                  </Label>
                  <AvField id="place-shortName" type="text" name="shortName" />
                </AvGroup>
                <AvGroup>
                  <Label id="colorBackgroundLabel" for="place-colorBackground">
                    <Translate contentKey="travisNg2App.testRootPlace.colorBackground">Color Background</Translate>
                  </Label>
                  <AvField id="place-colorBackground" type="text" name="colorBackground" />
                </AvGroup>
                <AvGroup>
                  <Label id="colorTextLabel" for="place-colorText">
                    <Translate contentKey="travisNg2App.testRootPlace.colorText">Color Text</Translate>
                  </Label>
                  <AvField id="place-colorText" type="text" name="colorText" />
                </AvGroup>
                <AvGroup>
                  <Label id="descriptionLabel" for="place-description">
                    <Translate contentKey="travisNg2App.testRootPlace.description">Description</Translate>
                  </Label>
                  <AvInput id="place-description" type="textarea" name="description" />
                </AvGroup>
                <AvGroup>
                  <Label for="place-preferredDivision">
                    <Translate contentKey="travisNg2App.testRootPlace.preferredDivision">Preferred Division</Translate>
                  </Label>
                  <AvInput
                    id="place-preferredDivision"
                    type="select"
                    multiple
                    className="form-control"
                    name="preferredDivisions"
                    value={placeEntity.preferredDivisions && placeEntity.preferredDivisions.map(e => e.id)}
                  >
                    <option value="" key="0" />
                    {divisions
                      ? divisions.map(otherEntity => (
                          <option value={otherEntity.id} key={otherEntity.id}>
                            {otherEntity.name}
                          </option>
                        ))
                      : null}
                  </AvInput>
                </AvGroup>
                <AvGroup>
                  <Label for="place-owner">
                    <Translate contentKey="travisNg2App.testRootPlace.owner">Owner</Translate>
                  </Label>
                  <AvInput id="place-owner" type="select" className="form-control" name="owner.id">
                    <option value="" key="0" />
                    {divisions
                      ? divisions.map(otherEntity => (
                          <option value={otherEntity.id} key={otherEntity.id}>
                            {otherEntity.name}
                          </option>
                        ))
                      : null}
                  </AvInput>
                </AvGroup>
                <Button tag={Link} id="cancel-save" to="/place" replace color="info">
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
  divisions: storeState.division.entities,
  placeEntity: storeState.place.entity,
  loading: storeState.place.loading,
  updating: storeState.place.updating,
  updateSuccess: storeState.place.updateSuccess
});

const mapDispatchToProps = {
  getDivisions,
  getEntity,
  updateEntity,
  setBlob,
  createEntity,
  reset
};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PlaceUpdate);
