import React from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import { Translate, ICrudGetAction } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IRootState } from 'app/shared/reducers';
import { getEntity } from './entity-with-pagination-and-dto.reducer';
import { IEntityWithPaginationAndDTO } from 'app/shared/model/entity-with-pagination-and-dto.model';
import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';

export interface IEntityWithPaginationAndDTODetailProps extends StateProps, DispatchProps, RouteComponentProps<{ id: string }> {}

export class EntityWithPaginationAndDTODetail extends React.Component<IEntityWithPaginationAndDTODetailProps> {
  componentDidMount() {
    this.props.getEntity(this.props.match.params.id);
  }

  render() {
    const { entityWithPaginationAndDTOEntity } = this.props;
    return (
      <Row>
        <Col md="8">
          <h2>
            <Translate contentKey="travisNg2App.entityWithPaginationAndDTO.detail.title">EntityWithPaginationAndDTO</Translate> [
            <b>{entityWithPaginationAndDTOEntity.id}</b>]
          </h2>
          <dl className="jh-entity-details">
            <dt>
              <span id="lea">
                <Translate contentKey="travisNg2App.entityWithPaginationAndDTO.lea">Lea</Translate>
              </span>
            </dt>
            <dd>{entityWithPaginationAndDTOEntity.lea}</dd>
          </dl>
          <Button tag={Link} to="/entity-with-pagination-and-dto" replace color="info">
            <FontAwesomeIcon icon="arrow-left" />{' '}
            <span className="d-none d-md-inline">
              <Translate contentKey="entity.action.back">Back</Translate>
            </span>
          </Button>
          &nbsp;
          <Button tag={Link} to={`/entity-with-pagination-and-dto/${entityWithPaginationAndDTOEntity.id}/edit`} replace color="primary">
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

const mapStateToProps = ({ entityWithPaginationAndDTO }: IRootState) => ({
  entityWithPaginationAndDTOEntity: entityWithPaginationAndDTO.entity
});

const mapDispatchToProps = { getEntity };

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EntityWithPaginationAndDTODetail);
