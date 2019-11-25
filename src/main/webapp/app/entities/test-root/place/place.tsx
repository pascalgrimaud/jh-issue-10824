import React from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Col, Row, Table } from 'reactstrap';
import { byteSize, Translate, ICrudGetAllAction } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IRootState } from 'app/shared/reducers';
import { getEntities } from './place.reducer';
import { IPlace } from 'app/shared/model/test-root/place.model';
import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';

export interface IPlaceProps extends StateProps, DispatchProps, RouteComponentProps<{ url: string }> {}

export class Place extends React.Component<IPlaceProps> {
  componentDidMount() {
    this.props.getEntities();
  }

  render() {
    const { placeList, match } = this.props;
    return (
      <div>
        <h2 id="place-heading">
          <Translate contentKey="travisNg2App.testRootPlace.home.title">Places</Translate>
          <Link to={`${match.url}/new`} className="btn btn-primary float-right jh-create-entity" id="jh-create-entity">
            <FontAwesomeIcon icon="plus" />
            &nbsp;
            <Translate contentKey="travisNg2App.testRootPlace.home.createLabel">Create a new Place</Translate>
          </Link>
        </h2>
        <div className="table-responsive">
          {placeList && placeList.length > 0 ? (
            <Table responsive aria-describedby="place-heading">
              <thead>
                <tr>
                  <th>
                    <Translate contentKey="global.field.id">ID</Translate>
                  </th>
                  <th>
                    <Translate contentKey="travisNg2App.testRootPlace.name">Name</Translate>
                  </th>
                  <th>
                    <Translate contentKey="travisNg2App.testRootPlace.numberOfSeats">Number Of Seats</Translate>
                  </th>
                  <th>
                    <Translate contentKey="travisNg2App.testRootPlace.shortName">Short Name</Translate>
                  </th>
                  <th>
                    <Translate contentKey="travisNg2App.testRootPlace.colorBackground">Color Background</Translate>
                  </th>
                  <th>
                    <Translate contentKey="travisNg2App.testRootPlace.colorText">Color Text</Translate>
                  </th>
                  <th>
                    <Translate contentKey="travisNg2App.testRootPlace.description">Description</Translate>
                  </th>
                  <th>
                    <Translate contentKey="travisNg2App.testRootPlace.preferredDivision">Preferred Division</Translate>
                  </th>
                  <th>
                    <Translate contentKey="travisNg2App.testRootPlace.owner">Owner</Translate>
                  </th>
                  <th />
                </tr>
              </thead>
              <tbody>
                {placeList.map((place, i) => (
                  <tr key={`entity-${i}`}>
                    <td>
                      <Button tag={Link} to={`${match.url}/${place.id}`} color="link" size="sm">
                        {place.id}
                      </Button>
                    </td>
                    <td>{place.name}</td>
                    <td>{place.numberOfSeats}</td>
                    <td>{place.shortName}</td>
                    <td>{place.colorBackground}</td>
                    <td>{place.colorText}</td>
                    <td>{place.description}</td>
                    <td>
                      {place.preferredDivisions
                        ? place.preferredDivisions.map((val, j) => (
                            <span key={j}>
                              <Link to={`division/${val.id}`}>{val.name}</Link>
                              {j === place.preferredDivisions.length - 1 ? '' : ', '}
                            </span>
                          ))
                        : null}
                    </td>
                    <td>{place.owner ? <Link to={`division/${place.owner.id}`}>{place.owner.name}</Link> : ''}</td>
                    <td className="text-right">
                      <div className="btn-group flex-btn-group-container">
                        <Button tag={Link} to={`${match.url}/${place.id}`} color="info" size="sm">
                          <FontAwesomeIcon icon="eye" />{' '}
                          <span className="d-none d-md-inline">
                            <Translate contentKey="entity.action.view">View</Translate>
                          </span>
                        </Button>
                        <Button tag={Link} to={`${match.url}/${place.id}/edit`} color="primary" size="sm">
                          <FontAwesomeIcon icon="pencil-alt" />{' '}
                          <span className="d-none d-md-inline">
                            <Translate contentKey="entity.action.edit">Edit</Translate>
                          </span>
                        </Button>
                        <Button tag={Link} to={`${match.url}/${place.id}/delete`} color="danger" size="sm">
                          <FontAwesomeIcon icon="trash" />{' '}
                          <span className="d-none d-md-inline">
                            <Translate contentKey="entity.action.delete">Delete</Translate>
                          </span>
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          ) : (
            <div className="alert alert-warning">
              <Translate contentKey="travisNg2App.testRootPlace.home.notFound">No Places found</Translate>
            </div>
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ place }: IRootState) => ({
  placeList: place.entities
});

const mapDispatchToProps = {
  getEntities
};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Place);
