import React from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Col, Row, Table } from 'reactstrap';
import { Translate, ICrudGetAllAction } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IRootState } from 'app/shared/reducers';
import { getEntities } from './super-mega-large-test-entity-my-suffix-alt.reducer';
import { ISuperMegaLargeTestEntityMySuffixAlt } from 'app/shared/model/super-mega-large-test-entity-my-suffix-alt.model';
import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';

export interface ISuperMegaLargeTestEntityMySuffixAltProps extends StateProps, DispatchProps, RouteComponentProps<{ url: string }> {}

export class SuperMegaLargeTestEntityMySuffixAlt extends React.Component<ISuperMegaLargeTestEntityMySuffixAltProps> {
  componentDidMount() {
    this.props.getEntities();
  }

  render() {
    const { superMegaLargeTestEntityList, match } = this.props;
    return (
      <div>
        <h2 id="super-mega-large-test-entity-my-suffix-alt-heading">
          <Translate contentKey="travisNg2App.superMegaLargeTestEntity.home.title">Super Mega Large Test Entities</Translate>
          <Link to={`${match.url}/new`} className="btn btn-primary float-right jh-create-entity" id="jh-create-entity">
            <FontAwesomeIcon icon="plus" />
            &nbsp;
            <Translate contentKey="travisNg2App.superMegaLargeTestEntity.home.createLabel">
              Create a new Super Mega Large Test Entity
            </Translate>
          </Link>
        </h2>
        <div className="table-responsive">
          {superMegaLargeTestEntityList && superMegaLargeTestEntityList.length > 0 ? (
            <Table responsive aria-describedby="super-mega-large-test-entity-my-suffix-alt-heading">
              <thead>
                <tr>
                  <th>
                    <Translate contentKey="global.field.id">ID</Translate>
                  </th>
                  <th>
                    <Translate contentKey="travisNg2App.superMegaLargeTestEntity.superMegaLargeUserOneToMany">
                      Super Mega Large User One To Many
                    </Translate>
                  </th>
                  <th>
                    <Translate contentKey="travisNg2App.superMegaLargeTestEntity.superMegaLargeUserManyToMany">
                      Super Mega Large User Many To Many
                    </Translate>
                  </th>
                  <th>
                    <Translate contentKey="travisNg2App.superMegaLargeTestEntity.superMegaLargeUserOneToOne">
                      Super Mega Large User One To One
                    </Translate>
                  </th>
                  <th />
                </tr>
              </thead>
              <tbody>
                {superMegaLargeTestEntityList.map((superMegaLargeTestEntity, i) => (
                  <tr key={`entity-${i}`}>
                    <td>
                      <Button tag={Link} to={`${match.url}/${superMegaLargeTestEntity.id}`} color="link" size="sm">
                        {superMegaLargeTestEntity.id}
                      </Button>
                    </td>
                    <td>
                      {superMegaLargeTestEntity.superMegaLargeUserOneToMany
                        ? superMegaLargeTestEntity.superMegaLargeUserOneToMany.login
                        : ''}
                    </td>
                    <td>
                      {superMegaLargeTestEntity.superMegaLargeUserManyToManies
                        ? superMegaLargeTestEntity.superMegaLargeUserManyToManies.map((val, j) => (
                            <span key={j}>
                              {val.login}
                              {j === superMegaLargeTestEntity.superMegaLargeUserManyToManies.length - 1 ? '' : ', '}
                            </span>
                          ))
                        : null}
                    </td>
                    <td>
                      {superMegaLargeTestEntity.superMegaLargeUserOneToOne ? superMegaLargeTestEntity.superMegaLargeUserOneToOne.login : ''}
                    </td>
                    <td className="text-right">
                      <div className="btn-group flex-btn-group-container">
                        <Button tag={Link} to={`${match.url}/${superMegaLargeTestEntity.id}`} color="info" size="sm">
                          <FontAwesomeIcon icon="eye" />{' '}
                          <span className="d-none d-md-inline">
                            <Translate contentKey="entity.action.view">View</Translate>
                          </span>
                        </Button>
                        <Button tag={Link} to={`${match.url}/${superMegaLargeTestEntity.id}/edit`} color="primary" size="sm">
                          <FontAwesomeIcon icon="pencil-alt" />{' '}
                          <span className="d-none d-md-inline">
                            <Translate contentKey="entity.action.edit">Edit</Translate>
                          </span>
                        </Button>
                        <Button tag={Link} to={`${match.url}/${superMegaLargeTestEntity.id}/delete`} color="danger" size="sm">
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
              <Translate contentKey="travisNg2App.superMegaLargeTestEntity.home.notFound">
                No Super Mega Large Test Entities found
              </Translate>
            </div>
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ superMegaLargeTestEntity }: IRootState) => ({
  superMegaLargeTestEntityList: superMegaLargeTestEntity.entities
});

const mapDispatchToProps = {
  getEntities
};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SuperMegaLargeTestEntityMySuffixAlt);
