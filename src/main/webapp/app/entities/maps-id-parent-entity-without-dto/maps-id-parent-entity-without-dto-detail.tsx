import React from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import { Translate, ICrudGetAction } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IRootState } from 'app/shared/reducers';
import { getEntity } from './maps-id-parent-entity-without-dto.reducer';
import { IMapsIdParentEntityWithoutDTO } from 'app/shared/model/maps-id-parent-entity-without-dto.model';
import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';

export interface IMapsIdParentEntityWithoutDTODetailProps extends StateProps, DispatchProps, RouteComponentProps<{ id: string }> {}

export class MapsIdParentEntityWithoutDTODetail extends React.Component<IMapsIdParentEntityWithoutDTODetailProps> {
  componentDidMount() {
    this.props.getEntity(this.props.match.params.id);
  }

  render() {
    const { mapsIdParentEntityWithoutDTOEntity } = this.props;
    return (
      <Row>
        <Col md="8">
          <h2>
            <Translate contentKey="travisNg2App.mapsIdParentEntityWithoutDTO.detail.title">MapsIdParentEntityWithoutDTO</Translate> [
            <b>{mapsIdParentEntityWithoutDTOEntity.id}</b>]
          </h2>
          <dl className="jh-entity-details">
            <dt>
              <span id="name">
                <Translate contentKey="travisNg2App.mapsIdParentEntityWithoutDTO.name">Name</Translate>
              </span>
            </dt>
            <dd>{mapsIdParentEntityWithoutDTOEntity.name}</dd>
          </dl>
          <Button tag={Link} to="/maps-id-parent-entity-without-dto" replace color="info">
            <FontAwesomeIcon icon="arrow-left" />{' '}
            <span className="d-none d-md-inline">
              <Translate contentKey="entity.action.back">Back</Translate>
            </span>
          </Button>
          &nbsp;
          <Button
            tag={Link}
            to={`/maps-id-parent-entity-without-dto/${mapsIdParentEntityWithoutDTOEntity.id}/edit`}
            replace
            color="primary"
          >
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

const mapStateToProps = ({ mapsIdParentEntityWithoutDTO }: IRootState) => ({
  mapsIdParentEntityWithoutDTOEntity: mapsIdParentEntityWithoutDTO.entity
});

const mapDispatchToProps = { getEntity };

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MapsIdParentEntityWithoutDTODetail);
