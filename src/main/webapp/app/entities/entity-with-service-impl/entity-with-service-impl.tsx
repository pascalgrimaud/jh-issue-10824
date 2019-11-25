import React from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Col, Row, Table } from 'reactstrap';
import { Translate, ICrudGetAllAction } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IRootState } from 'app/shared/reducers';
import { getEntities } from './entity-with-service-impl.reducer';
import { IEntityWithServiceImpl } from 'app/shared/model/entity-with-service-impl.model';
import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';

export interface IEntityWithServiceImplProps extends StateProps, DispatchProps, RouteComponentProps<{ url: string }> {}

export class EntityWithServiceImpl extends React.Component<IEntityWithServiceImplProps> {
  componentDidMount() {
    this.props.getEntities();
  }

  render() {
    const { entityWithServiceImplList, match } = this.props;
    return (
      <div>
        <h2 id="entity-with-service-impl-heading">
          <Translate contentKey="travisNg2App.entityWithServiceImpl.home.title">Entity With Service Impls</Translate>
          <Link to={`${match.url}/new`} className="btn btn-primary float-right jh-create-entity" id="jh-create-entity">
            <FontAwesomeIcon icon="plus" />
            &nbsp;
            <Translate contentKey="travisNg2App.entityWithServiceImpl.home.createLabel">Create a new Entity With Service Impl</Translate>
          </Link>
        </h2>
        <div className="table-responsive">
          {entityWithServiceImplList && entityWithServiceImplList.length > 0 ? (
            <Table responsive aria-describedby="entity-with-service-impl-heading">
              <thead>
                <tr>
                  <th>
                    <Translate contentKey="global.field.id">ID</Translate>
                  </th>
                  <th>
                    <Translate contentKey="travisNg2App.entityWithServiceImpl.clara">Clara</Translate>
                  </th>
                  <th />
                </tr>
              </thead>
              <tbody>
                {entityWithServiceImplList.map((entityWithServiceImpl, i) => (
                  <tr key={`entity-${i}`}>
                    <td>
                      <Button tag={Link} to={`${match.url}/${entityWithServiceImpl.id}`} color="link" size="sm">
                        {entityWithServiceImpl.id}
                      </Button>
                    </td>
                    <td>{entityWithServiceImpl.clara}</td>
                    <td className="text-right">
                      <div className="btn-group flex-btn-group-container">
                        <Button tag={Link} to={`${match.url}/${entityWithServiceImpl.id}`} color="info" size="sm">
                          <FontAwesomeIcon icon="eye" />{' '}
                          <span className="d-none d-md-inline">
                            <Translate contentKey="entity.action.view">View</Translate>
                          </span>
                        </Button>
                        <Button tag={Link} to={`${match.url}/${entityWithServiceImpl.id}/edit`} color="primary" size="sm">
                          <FontAwesomeIcon icon="pencil-alt" />{' '}
                          <span className="d-none d-md-inline">
                            <Translate contentKey="entity.action.edit">Edit</Translate>
                          </span>
                        </Button>
                        <Button tag={Link} to={`${match.url}/${entityWithServiceImpl.id}/delete`} color="danger" size="sm">
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
              <Translate contentKey="travisNg2App.entityWithServiceImpl.home.notFound">No Entity With Service Impls found</Translate>
            </div>
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ entityWithServiceImpl }: IRootState) => ({
  entityWithServiceImplList: entityWithServiceImpl.entities
});

const mapDispatchToProps = {
  getEntities
};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EntityWithServiceImpl);
