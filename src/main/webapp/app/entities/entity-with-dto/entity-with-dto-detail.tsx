import React from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import { Translate, ICrudGetAction } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IRootState } from 'app/shared/reducers';
import { getEntity } from './entity-with-dto.reducer';
import { IEntityWithDTO } from 'app/shared/model/entity-with-dto.model';
import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';

export interface IEntityWithDTODetailProps extends StateProps, DispatchProps, RouteComponentProps<{ id: string }> {}

export class EntityWithDTODetail extends React.Component<IEntityWithDTODetailProps> {
  componentDidMount() {
    this.props.getEntity(this.props.match.params.id);
  }

  render() {
    const { entityWithDTOEntity } = this.props;
    return (
      <Row>
        <Col md="8">
          <h2>
            <Translate contentKey="travisNg2App.entityWithDTO.detail.title">EntityWithDTO</Translate> [<b>{entityWithDTOEntity.id}</b>]
          </h2>
          <dl className="jh-entity-details">
            <dt>
              <span id="emma">
                <Translate contentKey="travisNg2App.entityWithDTO.emma">Emma</Translate>
              </span>
            </dt>
            <dd>{entityWithDTOEntity.emma}</dd>
          </dl>
          <Button tag={Link} to="/entity-with-dto" replace color="info">
            <FontAwesomeIcon icon="arrow-left" />{' '}
            <span className="d-none d-md-inline">
              <Translate contentKey="entity.action.back">Back</Translate>
            </span>
          </Button>
          &nbsp;
          <Button tag={Link} to={`/entity-with-dto/${entityWithDTOEntity.id}/edit`} replace color="primary">
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

const mapStateToProps = ({ entityWithDTO }: IRootState) => ({
  entityWithDTOEntity: entityWithDTO.entity
});

const mapDispatchToProps = { getEntity };

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EntityWithDTODetail);
