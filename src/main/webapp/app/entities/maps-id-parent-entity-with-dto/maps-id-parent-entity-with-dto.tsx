import React from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Col, Row, Table } from 'reactstrap';
import { Translate, ICrudGetAllAction } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IRootState } from 'app/shared/reducers';
import { getEntities } from './maps-id-parent-entity-with-dto.reducer';
import { IMapsIdParentEntityWithDTO } from 'app/shared/model/maps-id-parent-entity-with-dto.model';
import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';

export interface IMapsIdParentEntityWithDTOProps extends StateProps, DispatchProps, RouteComponentProps<{ url: string }> {}

export class MapsIdParentEntityWithDTO extends React.Component<IMapsIdParentEntityWithDTOProps> {
  componentDidMount() {
    this.props.getEntities();
  }

  render() {
    const { mapsIdParentEntityWithDTOList, match } = this.props;
    return (
      <div>
        <h2 id="maps-id-parent-entity-with-dto-heading">
          <Translate contentKey="travisNg2App.mapsIdParentEntityWithDTO.home.title">Maps Id Parent Entity With DTOS</Translate>
          <Link to={`${match.url}/new`} className="btn btn-primary float-right jh-create-entity" id="jh-create-entity">
            <FontAwesomeIcon icon="plus" />
            &nbsp;
            <Translate contentKey="travisNg2App.mapsIdParentEntityWithDTO.home.createLabel">
              Create a new Maps Id Parent Entity With DTO
            </Translate>
          </Link>
        </h2>
        <div className="table-responsive">
          {mapsIdParentEntityWithDTOList && mapsIdParentEntityWithDTOList.length > 0 ? (
            <Table responsive aria-describedby="maps-id-parent-entity-with-dto-heading">
              <thead>
                <tr>
                  <th>
                    <Translate contentKey="global.field.id">ID</Translate>
                  </th>
                  <th>
                    <Translate contentKey="travisNg2App.mapsIdParentEntityWithDTO.name">Name</Translate>
                  </th>
                  <th />
                </tr>
              </thead>
              <tbody>
                {mapsIdParentEntityWithDTOList.map((mapsIdParentEntityWithDTO, i) => (
                  <tr key={`entity-${i}`}>
                    <td>
                      <Button tag={Link} to={`${match.url}/${mapsIdParentEntityWithDTO.id}`} color="link" size="sm">
                        {mapsIdParentEntityWithDTO.id}
                      </Button>
                    </td>
                    <td>{mapsIdParentEntityWithDTO.name}</td>
                    <td className="text-right">
                      <div className="btn-group flex-btn-group-container">
                        <Button tag={Link} to={`${match.url}/${mapsIdParentEntityWithDTO.id}`} color="info" size="sm">
                          <FontAwesomeIcon icon="eye" />{' '}
                          <span className="d-none d-md-inline">
                            <Translate contentKey="entity.action.view">View</Translate>
                          </span>
                        </Button>
                        <Button tag={Link} to={`${match.url}/${mapsIdParentEntityWithDTO.id}/edit`} color="primary" size="sm">
                          <FontAwesomeIcon icon="pencil-alt" />{' '}
                          <span className="d-none d-md-inline">
                            <Translate contentKey="entity.action.edit">Edit</Translate>
                          </span>
                        </Button>
                        <Button tag={Link} to={`${match.url}/${mapsIdParentEntityWithDTO.id}/delete`} color="danger" size="sm">
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
              <Translate contentKey="travisNg2App.mapsIdParentEntityWithDTO.home.notFound">
                No Maps Id Parent Entity With DTOS found
              </Translate>
            </div>
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ mapsIdParentEntityWithDTO }: IRootState) => ({
  mapsIdParentEntityWithDTOList: mapsIdParentEntityWithDTO.entities
});

const mapDispatchToProps = {
  getEntities
};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MapsIdParentEntityWithDTO);
