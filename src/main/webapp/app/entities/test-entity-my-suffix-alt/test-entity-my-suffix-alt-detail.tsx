import React from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import { Translate, ICrudGetAction } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IRootState } from 'app/shared/reducers';
import { getEntity } from './test-entity-my-suffix-alt.reducer';
import { ITestEntityMySuffixAlt } from 'app/shared/model/test-entity-my-suffix-alt.model';
import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';

export interface ITestEntityMySuffixAltDetailProps extends StateProps, DispatchProps, RouteComponentProps<{ id: string }> {}

export class TestEntityMySuffixAltDetail extends React.Component<ITestEntityMySuffixAltDetailProps> {
  componentDidMount() {
    this.props.getEntity(this.props.match.params.id);
  }

  render() {
    const { testEntityEntity } = this.props;
    return (
      <Row>
        <Col md="8">
          <h2>
            <Translate contentKey="travisNg2App.testEntity.detail.title">TestEntity</Translate> [<b>{testEntityEntity.id}</b>]
          </h2>
          <dl className="jh-entity-details">
            <dt>
              <Translate contentKey="travisNg2App.testEntity.userOneToMany">User One To Many</Translate>
            </dt>
            <dd>{testEntityEntity.userOneToMany ? testEntityEntity.userOneToMany.login : ''}</dd>
            <dt>
              <Translate contentKey="travisNg2App.testEntity.userManyToMany">User Many To Many</Translate>
            </dt>
            <dd>
              {testEntityEntity.userManyToManies
                ? testEntityEntity.userManyToManies.map((val, i) => (
                    <span key={val.id}>
                      <a>{val.login}</a>
                      {i === testEntityEntity.userManyToManies.length - 1 ? '' : ', '}
                    </span>
                  ))
                : null}{' '}
            </dd>
            <dt>
              <Translate contentKey="travisNg2App.testEntity.userOneToOne">User One To One</Translate>
            </dt>
            <dd>{testEntityEntity.userOneToOne ? testEntityEntity.userOneToOne.login : ''}</dd>
          </dl>
          <Button tag={Link} to="/test-entity-my-suffix-alt" replace color="info">
            <FontAwesomeIcon icon="arrow-left" />{' '}
            <span className="d-none d-md-inline">
              <Translate contentKey="entity.action.back">Back</Translate>
            </span>
          </Button>
          &nbsp;
          <Button tag={Link} to={`/test-entity-my-suffix-alt/${testEntityEntity.id}/edit`} replace color="primary">
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

const mapStateToProps = ({ testEntity }: IRootState) => ({
  testEntityEntity: testEntity.entity
});

const mapDispatchToProps = { getEntity };

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TestEntityMySuffixAltDetail);
