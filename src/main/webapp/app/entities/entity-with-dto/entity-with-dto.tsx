import React from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Col, Row, Table } from 'reactstrap';
import { Translate, ICrudGetAllAction } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IRootState } from 'app/shared/reducers';
import { getEntities } from './entity-with-dto.reducer';
import { IEntityWithDTO } from 'app/shared/model/entity-with-dto.model';
import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';

export interface IEntityWithDTOProps extends StateProps, DispatchProps, RouteComponentProps<{ url: string }> {}

export class EntityWithDTO extends React.Component<IEntityWithDTOProps> {
  componentDidMount() {
    this.props.getEntities();
  }

  render() {
    const { entityWithDTOList, match } = this.props;
    return (
      <div>
        <h2 id="entity-with-dto-heading">
          <Translate contentKey="travisNg2App.entityWithDTO.home.title">Entity With DTOS</Translate>
          <Link to={`${match.url}/new`} className="btn btn-primary float-right jh-create-entity" id="jh-create-entity">
            <FontAwesomeIcon icon="plus" />
            &nbsp;
            <Translate contentKey="travisNg2App.entityWithDTO.home.createLabel">Create a new Entity With DTO</Translate>
          </Link>
        </h2>
        <div className="table-responsive">
          {entityWithDTOList && entityWithDTOList.length > 0 ? (
            <Table responsive aria-describedby="entity-with-dto-heading">
              <thead>
                <tr>
                  <th>
                    <Translate contentKey="global.field.id">ID</Translate>
                  </th>
                  <th>
                    <Translate contentKey="travisNg2App.entityWithDTO.emma">Emma</Translate>
                  </th>
                  <th />
                </tr>
              </thead>
              <tbody>
                {entityWithDTOList.map((entityWithDTO, i) => (
                  <tr key={`entity-${i}`}>
                    <td>
                      <Button tag={Link} to={`${match.url}/${entityWithDTO.id}`} color="link" size="sm">
                        {entityWithDTO.id}
                      </Button>
                    </td>
                    <td>{entityWithDTO.emma}</td>
                    <td className="text-right">
                      <div className="btn-group flex-btn-group-container">
                        <Button tag={Link} to={`${match.url}/${entityWithDTO.id}`} color="info" size="sm">
                          <FontAwesomeIcon icon="eye" />{' '}
                          <span className="d-none d-md-inline">
                            <Translate contentKey="entity.action.view">View</Translate>
                          </span>
                        </Button>
                        <Button tag={Link} to={`${match.url}/${entityWithDTO.id}/edit`} color="primary" size="sm">
                          <FontAwesomeIcon icon="pencil-alt" />{' '}
                          <span className="d-none d-md-inline">
                            <Translate contentKey="entity.action.edit">Edit</Translate>
                          </span>
                        </Button>
                        <Button tag={Link} to={`${match.url}/${entityWithDTO.id}/delete`} color="danger" size="sm">
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
              <Translate contentKey="travisNg2App.entityWithDTO.home.notFound">No Entity With DTOS found</Translate>
            </div>
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ entityWithDTO }: IRootState) => ({
  entityWithDTOList: entityWithDTO.entities
});

const mapDispatchToProps = {
  getEntities
};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EntityWithDTO);
