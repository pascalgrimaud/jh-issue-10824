import React from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Col, Row, Table } from 'reactstrap';
import { Translate, ICrudGetAllAction } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IRootState } from 'app/shared/reducers';
import { getEntities } from './entity-with-service-class.reducer';
import { IEntityWithServiceClass } from 'app/shared/model/entity-with-service-class.model';
import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';

export interface IEntityWithServiceClassProps extends StateProps, DispatchProps, RouteComponentProps<{ url: string }> {}

export class EntityWithServiceClass extends React.Component<IEntityWithServiceClassProps> {
  componentDidMount() {
    this.props.getEntities();
  }

  render() {
    const { entityWithServiceClassList, match } = this.props;
    return (
      <div>
        <h2 id="entity-with-service-class-heading">
          <Translate contentKey="travisNg2App.entityWithServiceClass.home.title">Entity With Service Classes</Translate>
          <Link to={`${match.url}/new`} className="btn btn-primary float-right jh-create-entity" id="jh-create-entity">
            <FontAwesomeIcon icon="plus" />
            &nbsp;
            <Translate contentKey="travisNg2App.entityWithServiceClass.home.createLabel">Create a new Entity With Service Class</Translate>
          </Link>
        </h2>
        <div className="table-responsive">
          {entityWithServiceClassList && entityWithServiceClassList.length > 0 ? (
            <Table responsive aria-describedby="entity-with-service-class-heading">
              <thead>
                <tr>
                  <th>
                    <Translate contentKey="global.field.id">ID</Translate>
                  </th>
                  <th>
                    <Translate contentKey="travisNg2App.entityWithServiceClass.zoe">Zoe</Translate>
                  </th>
                  <th />
                </tr>
              </thead>
              <tbody>
                {entityWithServiceClassList.map((entityWithServiceClass, i) => (
                  <tr key={`entity-${i}`}>
                    <td>
                      <Button tag={Link} to={`${match.url}/${entityWithServiceClass.id}`} color="link" size="sm">
                        {entityWithServiceClass.id}
                      </Button>
                    </td>
                    <td>{entityWithServiceClass.zoe}</td>
                    <td className="text-right">
                      <div className="btn-group flex-btn-group-container">
                        <Button tag={Link} to={`${match.url}/${entityWithServiceClass.id}`} color="info" size="sm">
                          <FontAwesomeIcon icon="eye" />{' '}
                          <span className="d-none d-md-inline">
                            <Translate contentKey="entity.action.view">View</Translate>
                          </span>
                        </Button>
                        <Button tag={Link} to={`${match.url}/${entityWithServiceClass.id}/edit`} color="primary" size="sm">
                          <FontAwesomeIcon icon="pencil-alt" />{' '}
                          <span className="d-none d-md-inline">
                            <Translate contentKey="entity.action.edit">Edit</Translate>
                          </span>
                        </Button>
                        <Button tag={Link} to={`${match.url}/${entityWithServiceClass.id}/delete`} color="danger" size="sm">
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
              <Translate contentKey="travisNg2App.entityWithServiceClass.home.notFound">No Entity With Service Classes found</Translate>
            </div>
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ entityWithServiceClass }: IRootState) => ({
  entityWithServiceClassList: entityWithServiceClass.entities
});

const mapDispatchToProps = {
  getEntities
};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EntityWithServiceClass);
