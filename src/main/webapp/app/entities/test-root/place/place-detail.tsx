import React from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import { Translate, ICrudGetAction, byteSize } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IRootState } from 'app/shared/reducers';
import { getEntity } from './place.reducer';
import { IPlace } from 'app/shared/model/test-root/place.model';
import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';

export interface IPlaceDetailProps extends StateProps, DispatchProps, RouteComponentProps<{ id: string }> {}

export class PlaceDetail extends React.Component<IPlaceDetailProps> {
  componentDidMount() {
    this.props.getEntity(this.props.match.params.id);
  }

  render() {
    const { placeEntity } = this.props;
    return (
      <Row>
        <Col md="8">
          <h2>
            <Translate contentKey="travisNg2App.testRootPlace.detail.title">Place</Translate> [<b>{placeEntity.id}</b>]
          </h2>
          <dl className="jh-entity-details">
            <dt>
              <span id="name">
                <Translate contentKey="travisNg2App.testRootPlace.name">Name</Translate>
              </span>
            </dt>
            <dd>{placeEntity.name}</dd>
            <dt>
              <span id="numberOfSeats">
                <Translate contentKey="travisNg2App.testRootPlace.numberOfSeats">Number Of Seats</Translate>
              </span>
            </dt>
            <dd>{placeEntity.numberOfSeats}</dd>
            <dt>
              <span id="shortName">
                <Translate contentKey="travisNg2App.testRootPlace.shortName">Short Name</Translate>
              </span>
            </dt>
            <dd>{placeEntity.shortName}</dd>
            <dt>
              <span id="colorBackground">
                <Translate contentKey="travisNg2App.testRootPlace.colorBackground">Color Background</Translate>
              </span>
            </dt>
            <dd>{placeEntity.colorBackground}</dd>
            <dt>
              <span id="colorText">
                <Translate contentKey="travisNg2App.testRootPlace.colorText">Color Text</Translate>
              </span>
            </dt>
            <dd>{placeEntity.colorText}</dd>
            <dt>
              <span id="description">
                <Translate contentKey="travisNg2App.testRootPlace.description">Description</Translate>
              </span>
            </dt>
            <dd>{placeEntity.description}</dd>
            <dt>
              <Translate contentKey="travisNg2App.testRootPlace.preferredDivision">Preferred Division</Translate>
            </dt>
            <dd>
              {placeEntity.preferredDivisions
                ? placeEntity.preferredDivisions.map((val, i) => (
                    <span key={val.id}>
                      <a>{val.name}</a>
                      {i === placeEntity.preferredDivisions.length - 1 ? '' : ', '}
                    </span>
                  ))
                : null}
            </dd>
            <dt>
              <Translate contentKey="travisNg2App.testRootPlace.owner">Owner</Translate>
            </dt>
            <dd>{placeEntity.owner ? placeEntity.owner.name : ''}</dd>
          </dl>
          <Button tag={Link} to="/place" replace color="info">
            <FontAwesomeIcon icon="arrow-left" />{' '}
            <span className="d-none d-md-inline">
              <Translate contentKey="entity.action.back">Back</Translate>
            </span>
          </Button>
          &nbsp;
          <Button tag={Link} to={`/place/${placeEntity.id}/edit`} replace color="primary">
            <FontAwesomeIcon icon="pencil-alt" />{' '}
            <span className="d-none d-md-inline">
              <Translate contentKey="entity.action.edit">Edit</Translate>
            </span>
          </Button>
        </Col>
      </Row>
    );
  }
}

const mapStateToProps = ({ place }: IRootState) => ({
  placeEntity: place.entity
});

const mapDispatchToProps = { getEntity };

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PlaceDetail);
