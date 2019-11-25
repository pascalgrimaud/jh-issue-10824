import React from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import { Translate, ICrudGetAction } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IRootState } from 'app/shared/reducers';
import { getEntity } from './test-two-relationships-same-entity-my-suffix.reducer';
import { ITestTwoRelationshipsSameEntityMySuffix } from 'app/shared/model/test-two-relationships-same-entity-my-suffix.model';
import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';

export interface ITestTwoRelationshipsSameEntityMySuffixDetailProps
  extends StateProps,
    DispatchProps,
    RouteComponentProps<{ id: string }> {}

export class TestTwoRelationshipsSameEntityMySuffixDetail extends React.Component<ITestTwoRelationshipsSameEntityMySuffixDetailProps> {
  componentDidMount() {
    this.props.getEntity(this.props.match.params.id);
  }

  render() {
    const { testTwoRelationshipsSameEntityEntity } = this.props;
    return (
      <Row>
        <Col md="8">
          <h2>
            <Translate contentKey="travisNg2App.testTwoRelationshipsSameEntity.detail.title">TestTwoRelationshipsSameEntity</Translate> [
            <b>{testTwoRelationshipsSameEntityEntity.id}</b>]
          </h2>
          <dl className="jh-entity-details">
            <dt>
              <Translate contentKey="travisNg2App.testTwoRelationshipsSameEntity.firstRelationship">First Relationship</Translate>
            </dt>
            <dd>
              {testTwoRelationshipsSameEntityEntity.firstRelationship ? testTwoRelationshipsSameEntityEntity.firstRelationship.id : ''}
            </dd>
            <dt>
              <Translate contentKey="travisNg2App.testTwoRelationshipsSameEntity.secondRelationship">Second Relationship</Translate>
            </dt>
            <dd>
              {testTwoRelationshipsSameEntityEntity.secondRelationship ? testTwoRelationshipsSameEntityEntity.secondRelationship.id : ''}
            </dd>
            <dt>
              <Translate contentKey="travisNg2App.testTwoRelationshipsSameEntity.userOne">User One</Translate>
            </dt>
            <dd>{testTwoRelationshipsSameEntityEntity.userOne ? testTwoRelationshipsSameEntityEntity.userOne.id : ''}</dd>
            <dt>
              <Translate contentKey="travisNg2App.testTwoRelationshipsSameEntity.userTwo">User Two</Translate>
            </dt>
            <dd>{testTwoRelationshipsSameEntityEntity.userTwo ? testTwoRelationshipsSameEntityEntity.userTwo.id : ''}</dd>
            <dt>
              <Translate contentKey="travisNg2App.testTwoRelationshipsSameEntity.firstUniqueRequiredRelation">
                First Unique Required Relation
              </Translate>
            </dt>
            <dd>
              {testTwoRelationshipsSameEntityEntity.firstUniqueRequiredRelation
                ? testTwoRelationshipsSameEntityEntity.firstUniqueRequiredRelation.id
                : ''}
            </dd>
            <dt>
              <Translate contentKey="travisNg2App.testTwoRelationshipsSameEntity.secondUniqueRequiredRelation">
                Second Unique Required Relation
              </Translate>
            </dt>
            <dd>
              {testTwoRelationshipsSameEntityEntity.secondUniqueRequiredRelation
                ? testTwoRelationshipsSameEntityEntity.secondUniqueRequiredRelation.id
                : ''}
            </dd>
          </dl>
          <Button tag={Link} to="/test-two-relationships-same-entity-my-suffix" replace color="info">
            <FontAwesomeIcon icon="arrow-left" />{' '}
            <span className="d-none d-md-inline">
              <Translate contentKey="entity.action.back">Back</Translate>
            </span>
          </Button>
          &nbsp;
          <Button
            tag={Link}
            to={`/test-two-relationships-same-entity-my-suffix/${testTwoRelationshipsSameEntityEntity.id}/edit`}
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

const mapStateToProps = ({ testTwoRelationshipsSameEntity }: IRootState) => ({
  testTwoRelationshipsSameEntityEntity: testTwoRelationshipsSameEntity.entity
});

const mapDispatchToProps = { getEntity };

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TestTwoRelationshipsSameEntityMySuffixDetail);
