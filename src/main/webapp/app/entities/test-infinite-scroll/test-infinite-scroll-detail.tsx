import React from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import { Translate, ICrudGetAction } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IRootState } from 'app/shared/reducers';
import { getEntity } from './test-infinite-scroll.reducer';
import { ITestInfiniteScroll } from 'app/shared/model/test-infinite-scroll.model';
import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';

export interface ITestInfiniteScrollDetailProps extends StateProps, DispatchProps, RouteComponentProps<{ id: string }> {}

export class TestInfiniteScrollDetail extends React.Component<ITestInfiniteScrollDetailProps> {
  componentDidMount() {
    this.props.getEntity(this.props.match.params.id);
  }

  render() {
    const { testInfiniteScrollEntity } = this.props;
    return (
      <Row>
        <Col md="8">
          <h2>
            <Translate contentKey="travisNg2App.testInfiniteScroll.detail.title">TestInfiniteScroll</Translate> [
            <b>{testInfiniteScrollEntity.id}</b>]
          </h2>
          <dl className="jh-entity-details">
            <dt>
              <Translate contentKey="travisNg2App.testInfiniteScroll.userOneToMany">User One To Many</Translate>
            </dt>
            <dd>{testInfiniteScrollEntity.userOneToMany ? testInfiniteScrollEntity.userOneToMany.login : ''}</dd>
            <dt>
              <Translate contentKey="travisNg2App.testInfiniteScroll.userManyToMany">User Many To Many</Translate>
            </dt>
            <dd>
              {testInfiniteScrollEntity.userManyToManies
                ? testInfiniteScrollEntity.userManyToManies.map((val, i) => (
                    <span key={val.id}>
                      <a>{val.login}</a>
                      {i === testInfiniteScrollEntity.userManyToManies.length - 1 ? '' : ', '}
                    </span>
                  ))
                : null}{' '}
            </dd>
            <dt>
              <Translate contentKey="travisNg2App.testInfiniteScroll.userOneToOne">User One To One</Translate>
            </dt>
            <dd>{testInfiniteScrollEntity.userOneToOne ? testInfiniteScrollEntity.userOneToOne.login : ''}</dd>
          </dl>
          <Button tag={Link} to="/test-infinite-scroll" replace color="info">
            <FontAwesomeIcon icon="arrow-left" />{' '}
            <span className="d-none d-md-inline">
              <Translate contentKey="entity.action.back">Back</Translate>
            </span>
          </Button>
          &nbsp;
          <Button tag={Link} to={`/test-infinite-scroll/${testInfiniteScrollEntity.id}/edit`} replace color="primary">
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

const mapStateToProps = ({ testInfiniteScroll }: IRootState) => ({
  testInfiniteScrollEntity: testInfiniteScroll.entity
});

const mapDispatchToProps = { getEntity };

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TestInfiniteScrollDetail);
