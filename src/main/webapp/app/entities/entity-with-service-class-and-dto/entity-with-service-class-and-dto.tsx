import React from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Col, Row, Table } from 'reactstrap';
import { Translate, ICrudGetAllAction } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IRootState } from 'app/shared/reducers';
import { getEntities } from './entity-with-service-class-and-dto.reducer';
import { IEntityWithServiceClassAndDTO } from 'app/shared/model/entity-with-service-class-and-dto.model';
import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';

export interface IEntityWithServiceClassAndDTOProps extends StateProps, DispatchProps, RouteComponentProps<{ url: string }> {}

export class EntityWithServiceClassAndDTO extends React.Component<IEntityWithServiceClassAndDTOProps> {
  componentDidMount() {
    this.props.getEntities();
  }

  render() {
    const { entityWithServiceClassAndDTOList, match } = this.props;
    return (
      <div>
        <h2 id="entity-with-service-class-and-dto-heading">
          <Translate contentKey="travisNg2App.entityWithServiceClassAndDTO.home.title">Entity With Service Class And DTOS</Translate>
          <Link to={`${match.url}/new`} className="btn btn-primary float-right jh-create-entity" id="jh-create-entity">
            <FontAwesomeIcon icon="plus" />
            &nbsp;
            <Translate contentKey="travisNg2App.entityWithServiceClassAndDTO.home.createLabel">
              Create a new Entity With Service Class And DTO
            </Translate>
          </Link>
        </h2>
        <div className="table-responsive">
          {entityWithServiceClassAndDTOList && entityWithServiceClassAndDTOList.length > 0 ? (
            <Table responsive aria-describedby="entity-with-service-class-and-dto-heading">
              <thead>
                <tr>
                  <th>
                    <Translate contentKey="global.field.id">ID</Translate>
                  </th>
                  <th>
                    <Translate contentKey="travisNg2App.entityWithServiceClassAndDTO.lucas">Lucas</Translate>
                  </th>
                  <th />
                </tr>
              </thead>
              <tbody>
                {entityWithServiceClassAndDTOList.map((entityWithServiceClassAndDTO, i) => (
                  <tr key={`entity-${i}`}>
                    <td>
                      <Button tag={Link} to={`${match.url}/${entityWithServiceClassAndDTO.id}`} color="link" size="sm">
                        {entityWithServiceClassAndDTO.id}
                      </Button>
                    </td>
                    <td>{entityWithServiceClassAndDTO.lucas}</td>
                    <td className="text-right">
                      <div className="btn-group flex-btn-group-container">
                        <Button tag={Link} to={`${match.url}/${entityWithServiceClassAndDTO.id}`} color="info" size="sm">
                          <FontAwesomeIcon icon="eye" />{' '}
                          <span className="d-none d-md-inline">
                            <Translate contentKey="entity.action.view">View</Translate>
                          </span>
                        </Button>
                        <Button tag={Link} to={`${match.url}/${entityWithServiceClassAndDTO.id}/edit`} color="primary" size="sm">
                          <FontAwesomeIcon icon="pencil-alt" />{' '}
                          <span className="d-none d-md-inline">
                            <Translate contentKey="entity.action.edit">Edit</Translate>
                          </span>
                        </Button>
                        <Button tag={Link} to={`${match.url}/${entityWithServiceClassAndDTO.id}/delete`} color="danger" size="sm">
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
              <Translate contentKey="travisNg2App.entityWithServiceClassAndDTO.home.notFound">
                No Entity With Service Class And DTOS found
              </Translate>
            </div>
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ entityWithServiceClassAndDTO }: IRootState) => ({
  entityWithServiceClassAndDTOList: entityWithServiceClassAndDTO.entities
});

const mapDispatchToProps = {
  getEntities
};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EntityWithServiceClassAndDTO);
