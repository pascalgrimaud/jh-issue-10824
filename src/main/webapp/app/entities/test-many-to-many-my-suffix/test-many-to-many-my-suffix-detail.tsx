import React from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import { Translate, ICrudGetAction } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IRootState } from 'app/shared/reducers';
import { getEntity } from './test-many-to-many-my-suffix.reducer';
import { ITestManyToManyMySuffix } from 'app/shared/model/test-many-to-many-my-suffix.model';
import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';

export interface ITestManyToManyMySuffixDetailProps extends StateProps, DispatchProps, RouteComponentProps<{ id: string }> {}

export class TestManyToManyMySuffixDetail extends React.Component<ITestManyToManyMySuffixDetailProps> {
  componentDidMount() {
    this.props.getEntity(this.props.match.params.id);
  }

  render() {
    const { testManyToManyEntity } = this.props;
    return (
      <Row>
        <Col md="8">
          <h2>
            <Translate contentKey="travisNg2App.testManyToMany.detail.title">TestManyToMany</Translate> [<b>{testManyToManyEntity.id}</b>]
          </h2>
          <dl className="jh-entity-details">
            <dt>
              <Translate contentKey="travisNg2App.testManyToMany.testEntity">Test Entity</Translate>
            </dt>
            <dd>
              {testManyToManyEntity.testEntities
                ? testManyToManyEntity.testEntities.map((val, i) => (
                    <span key={val.id}>
                      <a>{val.id}</a>
                      {i === testManyToManyEntity.testEntities.length - 1 ? '' : ', '}
                    </span>
                  ))
                : null}
            </dd>
            <dt>
              <Translate contentKey="travisNg2App.testManyToMany.testMapstruct">Test Mapstruct</Translate>
            </dt>
            <dd>
              {testManyToManyEntity.testMapstructs
                ? testManyToManyEntity.testMapstructs.map((val, i) => (
                    <span key={val.id}>
                      <a>{val.id}</a>
                      {i === testManyToManyEntity.testMapstructs.length - 1 ? '' : ', '}
                    </span>
                  ))
                : null}
            </dd>
            <dt>
              <Translate contentKey="travisNg2App.testManyToMany.testServiceClass">Test Service Class</Translate>
            </dt>
            <dd>
              {testManyToManyEntity.testServiceClasses
                ? testManyToManyEntity.testServiceClasses.map((val, i) => (
                    <span key={val.id}>
                      <a>{val.id}</a>
                      {i === testManyToManyEntity.testServiceClasses.length - 1 ? '' : ', '}
                    </span>
                  ))
                : null}
            </dd>
            <dt>
              <Translate contentKey="travisNg2App.testManyToMany.testServiceImpl">Test Service Impl</Translate>
            </dt>
            <dd>
              {testManyToManyEntity.testServiceImpls
                ? testManyToManyEntity.testServiceImpls.map((val, i) => (
                    <span key={val.id}>
                      <a>{val.id}</a>
                      {i === testManyToManyEntity.testServiceImpls.length - 1 ? '' : ', '}
                    </span>
                  ))
                : null}
            </dd>
            <dt>
              <Translate contentKey="travisNg2App.testManyToMany.testInfiniteScroll">Test Infinite Scroll</Translate>
            </dt>
            <dd>
              {testManyToManyEntity.testInfiniteScrolls
                ? testManyToManyEntity.testInfiniteScrolls.map((val, i) => (
                    <span key={val.id}>
                      <a>{val.id}</a>
                      {i === testManyToManyEntity.testInfiniteScrolls.length - 1 ? '' : ', '}
                    </span>
                  ))
                : null}
            </dd>
            <dt>
              <Translate contentKey="travisNg2App.testManyToMany.testPagination">Test Pagination</Translate>
            </dt>
            <dd>
              {testManyToManyEntity.testPaginations
                ? testManyToManyEntity.testPaginations.map((val, i) => (
                    <span key={val.id}>
                      <a>{val.id}</a>
                      {i === testManyToManyEntity.testPaginations.length - 1 ? '' : ', '}
                    </span>
                  ))
                : null}
            </dd>
            <dt>
              <Translate contentKey="travisNg2App.testManyToMany.testCustomTableName">Test Custom Table Name</Translate>
            </dt>
            <dd>
              {testManyToManyEntity.testCustomTableNames
                ? testManyToManyEntity.testCustomTableNames.map((val, i) => (
                    <span key={val.id}>
                      <a>{val.id}</a>
                      {i === testManyToManyEntity.testCustomTableNames.length - 1 ? '' : ', '}
                    </span>
                  ))
                : null}
            </dd>
            <dt>
              <Translate contentKey="travisNg2App.testManyToMany.superMegaLargeTestEntity">Super Mega Large Test Entity</Translate>
            </dt>
            <dd>
              {testManyToManyEntity.superMegaLargeTestEntities
                ? testManyToManyEntity.superMegaLargeTestEntities.map((val, i) => (
                    <span key={val.id}>
                      <a>{val.id}</a>
                      {i === testManyToManyEntity.superMegaLargeTestEntities.length - 1 ? '' : ', '}
                    </span>
                  ))
                : null}
            </dd>
          </dl>
          <Button tag={Link} to="/test-many-to-many-my-suffix" replace color="info">
            <FontAwesomeIcon icon="arrow-left" />{' '}
            <span className="d-none d-md-inline">
              <Translate contentKey="entity.action.back">Back</Translate>
            </span>
          </Button>
          &nbsp;
          <Button tag={Link} to={`/test-many-to-many-my-suffix/${testManyToManyEntity.id}/edit`} replace color="primary">
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

const mapStateToProps = ({ testManyToMany }: IRootState) => ({
  testManyToManyEntity: testManyToMany.entity
});

const mapDispatchToProps = { getEntity };

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TestManyToManyMySuffixDetail);
