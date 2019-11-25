import React from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Col, Row, Table } from 'reactstrap';
import { Translate, ICrudGetAllAction } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IRootState } from 'app/shared/reducers';
import { getEntities } from './entity-with-service-impl-and-dto.reducer';
import { IEntityWithServiceImplAndDTO } from 'app/shared/model/entity-with-service-impl-and-dto.model';
import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';

export interface IEntityWithServiceImplAndDTOProps extends StateProps, DispatchProps, RouteComponentProps<{ url: string }> {}

export class EntityWithServiceImplAndDTO extends React.Component<IEntityWithServiceImplAndDTOProps> {
  componentDidMount() {
    this.props.getEntities();
  }

  render() {
    const { entityWithServiceImplAndDTOList, match } = this.props;
    return (
      <div>
        <h2 id="entity-with-service-impl-and-dto-heading">
          <Translate contentKey="travisNg2App.entityWithServiceImplAndDTO.home.title">Entity With Service Impl And DTOS</Translate>
          <Link to={`${match.url}/new`} className="btn btn-primary float-right jh-create-entity" id="jh-create-entity">
            <FontAwesomeIcon icon="plus" />
            &nbsp;
            <Translate contentKey="travisNg2App.entityWithServiceImplAndDTO.home.createLabel">
              Create a new Entity With Service Impl And DTO
            </Translate>
          </Link>
        </h2>
        <div className="table-responsive">
          {entityWithServiceImplAndDTOList && entityWithServiceImplAndDTOList.length > 0 ? (
            <Table responsive aria-describedby="entity-with-service-impl-and-dto-heading">
              <thead>
                <tr>
                  <th>
                    <Translate contentKey="global.field.id">ID</Translate>
                  </th>
                  <th>
                    <Translate contentKey="travisNg2App.entityWithServiceImplAndDTO.louis">Louis</Translate>
                  </th>
                  <th />
                </tr>
              </thead>
              <tbody>
                {entityWithServiceImplAndDTOList.map((entityWithServiceImplAndDTO, i) => (
                  <tr key={`entity-${i}`}>
                    <td>
                      <Button tag={Link} to={`${match.url}/${entityWithServiceImplAndDTO.id}`} color="link" size="sm">
                        {entityWithServiceImplAndDTO.id}
                      </Button>
                    </td>
                    <td>{entityWithServiceImplAndDTO.louis}</td>
                    <td className="text-right">
                      <div className="btn-group flex-btn-group-container">
                        <Button tag={Link} to={`${match.url}/${entityWithServiceImplAndDTO.id}`} color="info" size="sm">
                          <FontAwesomeIcon icon="eye" />{' '}
                          <span className="d-none d-md-inline">
                            <Translate contentKey="entity.action.view">View</Translate>
                          </span>
                        </Button>
                        <Button tag={Link} to={`${match.url}/${entityWithServiceImplAndDTO.id}/edit`} color="primary" size="sm">
                          <FontAwesomeIcon icon="pencil-alt" />{' '}
                          <span className="d-none d-md-inline">
                            <Translate contentKey="entity.action.edit">Edit</Translate>
                          </span>
                        </Button>
                        <Button tag={Link} to={`${match.url}/${entityWithServiceImplAndDTO.id}/delete`} color="danger" size="sm">
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
              <Translate contentKey="travisNg2App.entityWithServiceImplAndDTO.home.notFound">
                No Entity With Service Impl And DTOS found
              </Translate>
            </div>
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ entityWithServiceImplAndDTO }: IRootState) => ({
  entityWithServiceImplAndDTOList: entityWithServiceImplAndDTO.entities
});

const mapDispatchToProps = {
  getEntities
};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EntityWithServiceImplAndDTO);
