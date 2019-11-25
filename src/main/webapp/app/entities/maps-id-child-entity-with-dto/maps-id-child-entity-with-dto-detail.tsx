import React from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import { Translate, ICrudGetAction, TextFormat } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IRootState } from 'app/shared/reducers';
import { getEntity } from './maps-id-child-entity-with-dto.reducer';
import { IMapsIdChildEntityWithDTO } from 'app/shared/model/maps-id-child-entity-with-dto.model';
import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';

export interface IMapsIdChildEntityWithDTODetailProps extends StateProps, DispatchProps, RouteComponentProps<{ id: string }> {}

export class MapsIdChildEntityWithDTODetail extends React.Component<IMapsIdChildEntityWithDTODetailProps> {
  componentDidMount() {
    this.props.getEntity(this.props.match.params.id);
  }

  render() {
    const { mapsIdChildEntityWithDTOEntity } = this.props;
    return (
      <Row>
        <Col md="8">
          <h2>
            <Translate contentKey="travisNg2App.mapsIdChildEntityWithDTO.detail.title">MapsIdChildEntityWithDTO</Translate> [
            <b>{mapsIdChildEntityWithDTOEntity.id}</b>]
          </h2>
          <dl className="jh-entity-details">
            <dt>
              <span id="date">
                <Translate contentKey="travisNg2App.mapsIdChildEntityWithDTO.date">Date</Translate>
              </span>
            </dt>
            <dd>
              <TextFormat value={mapsIdChildEntityWithDTOEntity.date} type="date" format={APP_DATE_FORMAT} />
            </dd>
            <dt>
              <Translate contentKey="travisNg2App.mapsIdChildEntityWithDTO.mapsIdParentEntityWithDTO">
                Maps Id Parent Entity With DTO
              </Translate>
            </dt>
            <dd>
              {mapsIdChildEntityWithDTOEntity.mapsIdParentEntityWithDTOId ? mapsIdChildEntityWithDTOEntity.mapsIdParentEntityWithDTOId : ''}
            </dd>
          </dl>
          <Button tag={Link} to="/maps-id-child-entity-with-dto" replace color="info">
            <FontAwesomeIcon icon="arrow-left" />{' '}
            <span className="d-none d-md-inline">
              <Translate contentKey="entity.action.back">Back</Translate>
            </span>
          </Button>
          &nbsp;
          <Button tag={Link} to={`/maps-id-child-entity-with-dto/${mapsIdChildEntityWithDTOEntity.id}/edit`} replace color="primary">
            <FontAwesomeIcon icon="pencil-alt" />{' '}
            <span className="d-none d-md-inline">
              <Translate contentKey="entity.action.edit">Edit</Translate>
            </span>
          </Button>
        </Col>
      </Row>
    );
  }
}

const mapStateToProps = ({ mapsIdChildEntityWithDTO }: IRootState) => ({
  mapsIdChildEntityWithDTOEntity: mapsIdChildEntityWithDTO.entity
});

const mapDispatchToProps = { getEntity };

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MapsIdChildEntityWithDTODetail);
