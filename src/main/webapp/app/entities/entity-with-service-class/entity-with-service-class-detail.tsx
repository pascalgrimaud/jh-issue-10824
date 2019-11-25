import React from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import { Translate, ICrudGetAction } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IRootState } from 'app/shared/reducers';
import { getEntity } from './entity-with-service-class.reducer';
import { IEntityWithServiceClass } from 'app/shared/model/entity-with-service-class.model';
import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';

export interface IEntityWithServiceClassDetailProps extends StateProps, DispatchProps, RouteComponentProps<{ id: string }> {}

export class EntityWithServiceClassDetail extends React.Component<IEntityWithServiceClassDetailProps> {
  componentDidMount() {
    this.props.getEntity(this.props.match.params.id);
  }

  render() {
    const { entityWithServiceClassEntity } = this.props;
    return (
      <Row>
        <Col md="8">
          <h2>
            <Translate contentKey="travisNg2App.entityWithServiceClass.detail.title">EntityWithServiceClass</Translate> [
            <b>{entityWithServiceClassEntity.id}</b>]
          </h2>
          <dl className="jh-entity-details">
            <dt>
              <span id="zoe">
                <Translate contentKey="travisNg2App.entityWithServiceClass.zoe">Zoe</Translate>
              </span>
            </dt>
            <dd>{entityWithServiceClassEntity.zoe}</dd>
          </dl>
          <Button tag={Link} to="/entity-with-service-class" replace color="info">
            <FontAwesomeIcon icon="arrow-left" />{' '}
            <span className="d-none d-md-inline">
              <Translate contentKey="entity.action.back">Back</Translate>
            </span>
          </Button>
          &nbsp;
          <Button tag={Link} to={`/entity-with-service-class/${entityWithServiceClassEntity.id}/edit`} replace color="primary">
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

const mapStateToProps = ({ entityWithServiceClass }: IRootState) => ({
  entityWithServiceClassEntity: entityWithServiceClass.entity
});

const mapDispatchToProps = { getEntity };

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EntityWithServiceClassDetail);
