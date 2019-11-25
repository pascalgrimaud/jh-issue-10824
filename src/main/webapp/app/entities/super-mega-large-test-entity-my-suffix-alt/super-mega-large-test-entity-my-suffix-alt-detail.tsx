import React from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import { Translate, ICrudGetAction } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IRootState } from 'app/shared/reducers';
import { getEntity } from './super-mega-large-test-entity-my-suffix-alt.reducer';
import { ISuperMegaLargeTestEntityMySuffixAlt } from 'app/shared/model/super-mega-large-test-entity-my-suffix-alt.model';
import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';

export interface ISuperMegaLargeTestEntityMySuffixAltDetailProps extends StateProps, DispatchProps, RouteComponentProps<{ id: string }> {}

export class SuperMegaLargeTestEntityMySuffixAltDetail extends React.Component<ISuperMegaLargeTestEntityMySuffixAltDetailProps> {
  componentDidMount() {
    this.props.getEntity(this.props.match.params.id);
  }

  render() {
    const { superMegaLargeTestEntityEntity } = this.props;
    return (
      <Row>
        <Col md="8">
          <h2>
            <Translate contentKey="travisNg2App.superMegaLargeTestEntity.detail.title">SuperMegaLargeTestEntity</Translate> [
            <b>{superMegaLargeTestEntityEntity.id}</b>]
          </h2>
          <dl className="jh-entity-details">
            <dt>
              <Translate contentKey="travisNg2App.superMegaLargeTestEntity.superMegaLargeUserOneToMany">
                Super Mega Large User One To Many
              </Translate>
            </dt>
            <dd>
              {superMegaLargeTestEntityEntity.superMegaLargeUserOneToMany
                ? superMegaLargeTestEntityEntity.superMegaLargeUserOneToMany.login
                : ''}
            </dd>
            <dt>
              <Translate contentKey="travisNg2App.superMegaLargeTestEntity.superMegaLargeUserManyToMany">
                Super Mega Large User Many To Many
              </Translate>
            </dt>
            <dd>
              {superMegaLargeTestEntityEntity.superMegaLargeUserManyToManies
                ? superMegaLargeTestEntityEntity.superMegaLargeUserManyToManies.map((val, i) => (
                    <span key={val.id}>
                      <a>{val.login}</a>
                      {i === superMegaLargeTestEntityEntity.superMegaLargeUserManyToManies.length - 1 ? '' : ', '}
                    </span>
                  ))
                : null}{' '}
            </dd>
            <dt>
              <Translate contentKey="travisNg2App.superMegaLargeTestEntity.superMegaLargeUserOneToOne">
                Super Mega Large User One To One
              </Translate>
            </dt>
            <dd>
              {superMegaLargeTestEntityEntity.superMegaLargeUserOneToOne
                ? superMegaLargeTestEntityEntity.superMegaLargeUserOneToOne.login
                : ''}
            </dd>
          </dl>
          <Button tag={Link} to="/super-mega-large-test-entity-my-suffix-alt" replace color="info">
            <FontAwesomeIcon icon="arrow-left" />{' '}
            <span className="d-none d-md-inline">
              <Translate contentKey="entity.action.back">Back</Translate>
            </span>
          </Button>
          &nbsp;
          <Button
            tag={Link}
            to={`/super-mega-large-test-entity-my-suffix-alt/${superMegaLargeTestEntityEntity.id}/edit`}
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

const mapStateToProps = ({ superMegaLargeTestEntity }: IRootState) => ({
  superMegaLargeTestEntityEntity: superMegaLargeTestEntity.entity
});

const mapDispatchToProps = { getEntity };

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SuperMegaLargeTestEntityMySuffixAltDetail);
