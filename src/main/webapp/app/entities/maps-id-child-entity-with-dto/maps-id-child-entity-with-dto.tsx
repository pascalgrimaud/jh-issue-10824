import React from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Col, Row, Table } from 'reactstrap';
import { Translate, ICrudGetAllAction, TextFormat } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IRootState } from 'app/shared/reducers';
import { getEntities } from './maps-id-child-entity-with-dto.reducer';
import { IMapsIdChildEntityWithDTO } from 'app/shared/model/maps-id-child-entity-with-dto.model';
import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';

export interface IMapsIdChildEntityWithDTOProps extends StateProps, DispatchProps, RouteComponentProps<{ url: string }> {}

export class MapsIdChildEntityWithDTO extends React.Component<IMapsIdChildEntityWithDTOProps> {
  componentDidMount() {
    this.props.getEntities();
  }

  render() {
    const { mapsIdChildEntityWithDTOList, match } = this.props;
    return (
      <div>
        <h2 id="maps-id-child-entity-with-dto-heading">
          <Translate contentKey="travisNg2App.mapsIdChildEntityWithDTO.home.title">Maps Id Child Entity With DTOS</Translate>
          <Link to={`${match.url}/new`} className="btn btn-primary float-right jh-create-entity" id="jh-create-entity">
            <FontAwesomeIcon icon="plus" />
            &nbsp;
            <Translate contentKey="travisNg2App.mapsIdChildEntityWithDTO.home.createLabel">
              Create a new Maps Id Child Entity With DTO
            </Translate>
          </Link>
        </h2>
        <div className="table-responsive">
          {mapsIdChildEntityWithDTOList && mapsIdChildEntityWithDTOList.length > 0 ? (
            <Table responsive aria-describedby="maps-id-child-entity-with-dto-heading">
              <thead>
                <tr>
                  <th>
                    <Translate contentKey="global.field.id">ID</Translate>
                  </th>
                  <th>
                    <Translate contentKey="travisNg2App.mapsIdChildEntityWithDTO.date">Date</Translate>
                  </th>
                  <th>
                    <Translate contentKey="travisNg2App.mapsIdChildEntityWithDTO.mapsIdParentEntityWithDTO">
                      Maps Id Parent Entity With DTO
                    </Translate>
                  </th>
                  <th />
                </tr>
              </thead>
              <tbody>
                {mapsIdChildEntityWithDTOList.map((mapsIdChildEntityWithDTO, i) => (
                  <tr key={`entity-${i}`}>
                    <td>
                      <Button tag={Link} to={`${match.url}/${mapsIdChildEntityWithDTO.id}`} color="link" size="sm">
                        {mapsIdChildEntityWithDTO.id}
                      </Button>
                    </td>
                    <td>
                      <TextFormat type="date" value={mapsIdChildEntityWithDTO.date} format={APP_DATE_FORMAT} />
                    </td>
                    <td>
                      {mapsIdChildEntityWithDTO.mapsIdParentEntityWithDTOId ? (
                        <Link to={`maps-id-parent-entity-with-dto/${mapsIdChildEntityWithDTO.mapsIdParentEntityWithDTOId}`}>
                          {mapsIdChildEntityWithDTO.mapsIdParentEntityWithDTOId}
                        </Link>
                      ) : (
                        ''
                      )}
                    </td>
                    <td className="text-right">
                      <div className="btn-group flex-btn-group-container">
                        <Button tag={Link} to={`${match.url}/${mapsIdChildEntityWithDTO.id}`} color="info" size="sm">
                          <FontAwesomeIcon icon="eye" />{' '}
                          <span className="d-none d-md-inline">
                            <Translate contentKey="entity.action.view">View</Translate>
                          </span>
                        </Button>
                        <Button tag={Link} to={`${match.url}/${mapsIdChildEntityWithDTO.id}/edit`} color="primary" size="sm">
                          <FontAwesomeIcon icon="pencil-alt" />{' '}
                          <span className="d-none d-md-inline">
                            <Translate contentKey="entity.action.edit">Edit</Translate>
                          </span>
                        </Button>
                        <Button tag={Link} to={`${match.url}/${mapsIdChildEntityWithDTO.id}/delete`} color="danger" size="sm">
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
              <Translate contentKey="travisNg2App.mapsIdChildEntityWithDTO.home.notFound">
                No Maps Id Child Entity With DTOS found
              </Translate>
            </div>
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ mapsIdChildEntityWithDTO }: IRootState) => ({
  mapsIdChildEntityWithDTOList: mapsIdChildEntityWithDTO.entities
});

const mapDispatchToProps = {
  getEntities
};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MapsIdChildEntityWithDTO);
