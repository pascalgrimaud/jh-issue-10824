import React from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Col, Row, Table } from 'reactstrap';
import { Translate, ICrudGetAllAction, TextFormat } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IRootState } from 'app/shared/reducers';
import { getEntities } from './maps-id-child-entity-without-dto.reducer';
import { IMapsIdChildEntityWithoutDTO } from 'app/shared/model/maps-id-child-entity-without-dto.model';
import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';

export interface IMapsIdChildEntityWithoutDTOProps extends StateProps, DispatchProps, RouteComponentProps<{ url: string }> {}

export class MapsIdChildEntityWithoutDTO extends React.Component<IMapsIdChildEntityWithoutDTOProps> {
  componentDidMount() {
    this.props.getEntities();
  }

  render() {
    const { mapsIdChildEntityWithoutDTOList, match } = this.props;
    return (
      <div>
        <h2 id="maps-id-child-entity-without-dto-heading">
          <Translate contentKey="travisNg2App.mapsIdChildEntityWithoutDTO.home.title">Maps Id Child Entity Without DTOS</Translate>
          <Link to={`${match.url}/new`} className="btn btn-primary float-right jh-create-entity" id="jh-create-entity">
            <FontAwesomeIcon icon="plus" />
            &nbsp;
            <Translate contentKey="travisNg2App.mapsIdChildEntityWithoutDTO.home.createLabel">
              Create a new Maps Id Child Entity Without DTO
            </Translate>
          </Link>
        </h2>
        <div className="table-responsive">
          {mapsIdChildEntityWithoutDTOList && mapsIdChildEntityWithoutDTOList.length > 0 ? (
            <Table responsive aria-describedby="maps-id-child-entity-without-dto-heading">
              <thead>
                <tr>
                  <th>
                    <Translate contentKey="global.field.id">ID</Translate>
                  </th>
                  <th>
                    <Translate contentKey="travisNg2App.mapsIdChildEntityWithoutDTO.date">Date</Translate>
                  </th>
                  <th>
                    <Translate contentKey="travisNg2App.mapsIdChildEntityWithoutDTO.mapsIdParentEntityWithoutDTO">
                      Maps Id Parent Entity Without DTO
                    </Translate>
                  </th>
                  <th />
                </tr>
              </thead>
              <tbody>
                {mapsIdChildEntityWithoutDTOList.map((mapsIdChildEntityWithoutDTO, i) => (
                  <tr key={`entity-${i}`}>
                    <td>
                      <Button tag={Link} to={`${match.url}/${mapsIdChildEntityWithoutDTO.id}`} color="link" size="sm">
                        {mapsIdChildEntityWithoutDTO.id}
                      </Button>
                    </td>
                    <td>
                      <TextFormat type="date" value={mapsIdChildEntityWithoutDTO.date} format={APP_DATE_FORMAT} />
                    </td>
                    <td>
                      {mapsIdChildEntityWithoutDTO.mapsIdParentEntityWithoutDTO ? (
                        <Link to={`maps-id-parent-entity-without-dto/${mapsIdChildEntityWithoutDTO.mapsIdParentEntityWithoutDTO.id}`}>
                          {mapsIdChildEntityWithoutDTO.mapsIdParentEntityWithoutDTO.id}
                        </Link>
                      ) : (
                        ''
                      )}
                    </td>
                    <td className="text-right">
                      <div className="btn-group flex-btn-group-container">
                        <Button tag={Link} to={`${match.url}/${mapsIdChildEntityWithoutDTO.id}`} color="info" size="sm">
                          <FontAwesomeIcon icon="eye" />{' '}
                          <span className="d-none d-md-inline">
                            <Translate contentKey="entity.action.view">View</Translate>
                          </span>
                        </Button>
                        <Button tag={Link} to={`${match.url}/${mapsIdChildEntityWithoutDTO.id}/edit`} color="primary" size="sm">
                          <FontAwesomeIcon icon="pencil-alt" />{' '}
                          <span className="d-none d-md-inline">
                            <Translate contentKey="entity.action.edit">Edit</Translate>
                          </span>
                        </Button>
                        <Button tag={Link} to={`${match.url}/${mapsIdChildEntityWithoutDTO.id}/delete`} color="danger" size="sm">
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
              <Translate contentKey="travisNg2App.mapsIdChildEntityWithoutDTO.home.notFound">
                No Maps Id Child Entity Without DTOS found
              </Translate>
            </div>
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ mapsIdChildEntityWithoutDTO }: IRootState) => ({
  mapsIdChildEntityWithoutDTOList: mapsIdChildEntityWithoutDTO.entities
});

const mapDispatchToProps = {
  getEntities
};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MapsIdChildEntityWithoutDTO);
