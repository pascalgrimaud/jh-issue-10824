import React from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import { Translate, ICrudGetAction } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IRootState } from 'app/shared/reducers';
import { getEntity } from './entity-with-service-impl-and-dto.reducer';
import { IEntityWithServiceImplAndDTO } from 'app/shared/model/entity-with-service-impl-and-dto.model';
import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';

export interface IEntityWithServiceImplAndDTODetailProps extends StateProps, DispatchProps, RouteComponentProps<{ id: string }> {}

export class EntityWithServiceImplAndDTODetail extends React.Component<IEntityWithServiceImplAndDTODetailProps> {
  componentDidMount() {
    this.props.getEntity(this.props.match.params.id);
  }

  render() {
    const { entityWithServiceImplAndDTOEntity } = this.props;
    return (
      <Row>
        <Col md="8">
          <h2>
            <Translate contentKey="travisNg2App.entityWithServiceImplAndDTO.detail.title">EntityWithServiceImplAndDTO</Translate> [
            <b>{entityWithServiceImplAndDTOEntity.id}</b>]
          </h2>
          <dl className="jh-entity-details">
            <dt>
              <span id="louis">
                <Translate contentKey="travisNg2App.entityWithServiceImplAndDTO.louis">Louis</Translate>
              </span>
            </dt>
            <dd>{entityWithServiceImplAndDTOEntity.louis}</dd>
          </dl>
          <Button tag={Link} to="/entity-with-service-impl-and-dto" replace color="info">
            <FontAwesomeIcon icon="arrow-left" />{' '}
            <span className="d-none d-md-inline">
              <Translate contentKey="entity.action.back">Back</Translate>
            </span>
          </Button>
          &nbsp;
          <Button tag={Link} to={`/entity-with-service-impl-and-dto/${entityWithServiceImplAndDTOEntity.id}/edit`} replace color="primary">
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

const mapStateToProps = ({ entityWithServiceImplAndDTO }: IRootState) => ({
  entityWithServiceImplAndDTOEntity: entityWithServiceImplAndDTO.entity
});

const mapDispatchToProps = { getEntity };

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EntityWithServiceImplAndDTODetail);
