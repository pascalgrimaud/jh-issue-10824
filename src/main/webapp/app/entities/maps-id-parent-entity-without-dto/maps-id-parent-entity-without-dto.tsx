import React from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Col, Row, Table } from 'reactstrap';
import { Translate, ICrudGetAllAction } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IRootState } from 'app/shared/reducers';
import { getEntities } from './maps-id-parent-entity-without-dto.reducer';
import { IMapsIdParentEntityWithoutDTO } from 'app/shared/model/maps-id-parent-entity-without-dto.model';
import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';

export interface IMapsIdParentEntityWithoutDTOProps extends StateProps, DispatchProps, RouteComponentProps<{ url: string }> {}

export class MapsIdParentEntityWithoutDTO extends React.Component<IMapsIdParentEntityWithoutDTOProps> {
  componentDidMount() {
    this.props.getEntities();
  }

  render() {
    const { mapsIdParentEntityWithoutDTOList, match } = this.props;
    return (
      <div>
        <h2 id="maps-id-parent-entity-without-dto-heading">
          <Translate contentKey="travisNg2App.mapsIdParentEntityWithoutDTO.home.title">Maps Id Parent Entity Without DTOS</Translate>
          <Link to={`${match.url}/new`} className="btn btn-primary float-right jh-create-entity" id="jh-create-entity">
            <FontAwesomeIcon icon="plus" />
            &nbsp;
            <Translate contentKey="travisNg2App.mapsIdParentEntityWithoutDTO.home.createLabel">
              Create a new Maps Id Parent Entity Without DTO
            </Translate>
          </Link>
        </h2>
        <div className="table-responsive">
          {mapsIdParentEntityWithoutDTOList && mapsIdParentEntityWithoutDTOList.length > 0 ? (
            <Table responsive aria-describedby="maps-id-parent-entity-without-dto-heading">
              <thead>
                <tr>
                  <th>
                    <Translate contentKey="global.field.id">ID</Translate>
                  </th>
                  <th>
                    <Translate contentKey="travisNg2App.mapsIdParentEntityWithoutDTO.name">Name</Translate>
                  </th>
                  <th />
                </tr>
              </thead>
              <tbody>
                {mapsIdParentEntityWithoutDTOList.map((mapsIdParentEntityWithoutDTO, i) => (
                  <tr key={`entity-${i}`}>
                    <td>
                      <Button tag={Link} to={`${match.url}/${mapsIdParentEntityWithoutDTO.id}`} color="link" size="sm">
                        {mapsIdParentEntityWithoutDTO.id}
                      </Button>
                    </td>
                    <td>{mapsIdParentEntityWithoutDTO.name}</td>
                    <td className="text-right">
                      <div className="btn-group flex-btn-group-container">
                        <Button tag={Link} to={`${match.url}/${mapsIdParentEntityWithoutDTO.id}`} color="info" size="sm">
                          <FontAwesomeIcon icon="eye" />{' '}
                          <span className="d-none d-md-inline">
                            <Translate contentKey="entity.action.view">View</Translate>
                          </span>
                        </Button>
                        <Button tag={Link} to={`${match.url}/${mapsIdParentEntityWithoutDTO.id}/edit`} color="primary" size="sm">
                          <FontAwesomeIcon icon="pencil-alt" />{' '}
                          <span className="d-none d-md-inline">
                            <Translate contentKey="entity.action.edit">Edit</Translate>
                          </span>
                        </Button>
                        <Button tag={Link} to={`${match.url}/${mapsIdParentEntityWithoutDTO.id}/delete`} color="danger" size="sm">
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
              <Translate contentKey="travisNg2App.mapsIdParentEntityWithoutDTO.home.notFound">
                No Maps Id Parent Entity Without DTOS found
              </Translate>
            </div>
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ mapsIdParentEntityWithoutDTO }: IRootState) => ({
  mapsIdParentEntityWithoutDTOList: mapsIdParentEntityWithoutDTO.entities
});

const mapDispatchToProps = {
  getEntities
};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MapsIdParentEntityWithoutDTO);
