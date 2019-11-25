import React from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import { Translate, ICrudGetAction } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IRootState } from 'app/shared/reducers';
import { getEntity } from './entity-with-pagination.reducer';
import { IEntityWithPagination } from 'app/shared/model/entity-with-pagination.model';
import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';

export interface IEntityWithPaginationDetailProps extends StateProps, DispatchProps, RouteComponentProps<{ id: string }> {}

export class EntityWithPaginationDetail extends React.Component<IEntityWithPaginationDetailProps> {
  componentDidMount() {
    this.props.getEntity(this.props.match.params.id);
  }

  render() {
    const { entityWithPaginationEntity } = this.props;
    return (
      <Row>
        <Col md="8">
          <h2>
            <Translate contentKey="travisNg2App.entityWithPagination.detail.title">EntityWithPagination</Translate> [
            <b>{entityWithPaginationEntity.id}</b>]
          </h2>
          <dl className="jh-entity-details">
            <dt>
              <span id="nathan">
                <Translate contentKey="travisNg2App.entityWithPagination.nathan">Nathan</Translate>
              </span>
            </dt>
            <dd>{entityWithPaginationEntity.nathan}</dd>
          </dl>
          <Button tag={Link} to="/entity-with-pagination" replace color="info">
            <FontAwesomeIcon icon="arrow-left" />{' '}
            <span className="d-none d-md-inline">
              <Translate contentKey="entity.action.back">Back</Translate>
            </span>
          </Button>
          &nbsp;
          <Button tag={Link} to={`/entity-with-pagination/${entityWithPaginationEntity.id}/edit`} replace color="primary">
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

const mapStateToProps = ({ entityWithPagination }: IRootState) => ({
  entityWithPaginationEntity: entityWithPagination.entity
});

const mapDispatchToProps = { getEntity };

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EntityWithPaginationDetail);
