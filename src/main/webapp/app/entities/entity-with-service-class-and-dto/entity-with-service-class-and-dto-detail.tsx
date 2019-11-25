import React from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import { Translate, ICrudGetAction } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IRootState } from 'app/shared/reducers';
import { getEntity } from './entity-with-service-class-and-dto.reducer';
import { IEntityWithServiceClassAndDTO } from 'app/shared/model/entity-with-service-class-and-dto.model';
import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';

export interface IEntityWithServiceClassAndDTODetailProps extends StateProps, DispatchProps, RouteComponentProps<{ id: string }> {}

export class EntityWithServiceClassAndDTODetail extends React.Component<IEntityWithServiceClassAndDTODetailProps> {
  componentDidMount() {
    this.props.getEntity(this.props.match.params.id);
  }

  render() {
    const { entityWithServiceClassAndDTOEntity } = this.props;
    return (
      <Row>
        <Col md="8">
          <h2>
            <Translate contentKey="travisNg2App.entityWithServiceClassAndDTO.detail.title">EntityWithServiceClassAndDTO</Translate> [
            <b>{entityWithServiceClassAndDTOEntity.id}</b>]
          </h2>
          <dl className="jh-entity-details">
            <dt>
              <span id="lucas">
                <Translate contentKey="travisNg2App.entityWithServiceClassAndDTO.lucas">Lucas</Translate>
              </span>
            </dt>
            <dd>{entityWithServiceClassAndDTOEntity.lucas}</dd>
          </dl>
          <Button tag={Link} to="/entity-with-service-class-and-dto" replace color="info">
            <FontAwesomeIcon icon="arrow-left" />{' '}
            <span className="d-none d-md-inline">
              <Translate contentKey="entity.action.back">Back</Translate>
            </span>
          </Button>
          &nbsp;
          <Button
            tag={Link}
            to={`/entity-with-service-class-and-dto/${entityWithServiceClassAndDTOEntity.id}/edit`}
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

const mapStateToProps = ({ entityWithServiceClassAndDTO }: IRootState) => ({
  entityWithServiceClassAndDTOEntity: entityWithServiceClassAndDTO.entity
});

const mapDispatchToProps = { getEntity };

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EntityWithServiceClassAndDTODetail);
