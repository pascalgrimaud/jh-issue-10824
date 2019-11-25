import React from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Col, Row, Table } from 'reactstrap';
import { Translate, ICrudGetAllAction } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IRootState } from 'app/shared/reducers';
import { getEntities } from './division.reducer';
import { IDivision } from 'app/shared/model/test-root/division.model';
import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';

export interface IDivisionProps extends StateProps, DispatchProps, RouteComponentProps<{ url: string }> {}

export class Division extends React.Component<IDivisionProps> {
  componentDidMount() {
    this.props.getEntities();
  }

  render() {
    const { divisionList, match } = this.props;
    return (
      <div>
        <h2 id="division-heading">
          <Translate contentKey="travisNg2App.testRootDivision.home.title">Divisions</Translate>
          <Link to={`${match.url}/new`} className="btn btn-primary float-right jh-create-entity" id="jh-create-entity">
            <FontAwesomeIcon icon="plus" />
            &nbsp;
            <Translate contentKey="travisNg2App.testRootDivision.home.createLabel">Create a new Division</Translate>
          </Link>
        </h2>
        <div className="table-responsive">
          {divisionList && divisionList.length > 0 ? (
            <Table responsive aria-describedby="division-heading">
              <thead>
                <tr>
                  <th>
                    <Translate contentKey="global.field.id">ID</Translate>
                  </th>
                  <th>
                    <Translate contentKey="travisNg2App.testRootDivision.name">Name</Translate>
                  </th>
                  <th>
                    <Translate contentKey="travisNg2App.testRootDivision.shortName">Short Name</Translate>
                  </th>
                  <th>
                    <Translate contentKey="travisNg2App.testRootDivision.numberOfPeople">Number Of People</Translate>
                  </th>
                  <th>
                    <Translate contentKey="travisNg2App.testRootDivision.divisionType">Division Type</Translate>
                  </th>
                  <th>
                    <Translate contentKey="travisNg2App.testRootDivision.colorBackground">Color Background</Translate>
                  </th>
                  <th>
                    <Translate contentKey="travisNg2App.testRootDivision.colorText">Color Text</Translate>
                  </th>
                  <th />
                </tr>
              </thead>
              <tbody>
                {divisionList.map((division, i) => (
                  <tr key={`entity-${i}`}>
                    <td>
                      <Button tag={Link} to={`${match.url}/${division.id}`} color="link" size="sm">
                        {division.id}
                      </Button>
                    </td>
                    <td>{division.name}</td>
                    <td>{division.shortName}</td>
                    <td>{division.numberOfPeople}</td>
                    <td>
                      <Translate contentKey={`travisNg2App.DivisionType.${division.divisionType}`} />
                    </td>
                    <td>{division.colorBackground}</td>
                    <td>{division.colorText}</td>
                    <td className="text-right">
                      <div className="btn-group flex-btn-group-container">
                        <Button tag={Link} to={`${match.url}/${division.id}`} color="info" size="sm">
                          <FontAwesomeIcon icon="eye" />{' '}
                          <span className="d-none d-md-inline">
                            <Translate contentKey="entity.action.view">View</Translate>
                          </span>
                        </Button>
                        <Button tag={Link} to={`${match.url}/${division.id}/edit`} color="primary" size="sm">
                          <FontAwesomeIcon icon="pencil-alt" />{' '}
                          <span className="d-none d-md-inline">
                            <Translate contentKey="entity.action.edit">Edit</Translate>
                          </span>
                        </Button>
                        <Button tag={Link} to={`${match.url}/${division.id}/delete`} color="danger" size="sm">
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
              <Translate contentKey="travisNg2App.testRootDivision.home.notFound">No Divisions found</Translate>
            </div>
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ division }: IRootState) => ({
  divisionList: division.entities
});

const mapDispatchToProps = {
  getEntities
};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Division);
