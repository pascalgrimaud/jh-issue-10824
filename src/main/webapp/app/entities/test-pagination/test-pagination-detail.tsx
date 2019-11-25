import React from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import { Translate, ICrudGetAction } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IRootState } from 'app/shared/reducers';
import { getEntity } from './test-pagination.reducer';
import { ITestPagination } from 'app/shared/model/test-pagination.model';
import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';

export interface ITestPaginationDetailProps extends StateProps, DispatchProps, RouteComponentProps<{ id: string }> {}

export class TestPaginationDetail extends React.Component<ITestPaginationDetailProps> {
  componentDidMount() {
    this.props.getEntity(this.props.match.params.id);
  }

  render() {
    const { testPaginationEntity } = this.props;
    return (
      <Row>
        <Col md="8">
          <h2>
            <Translate contentKey="travisNg2App.testPagination.detail.title">TestPagination</Translate> [<b>{testPaginationEntity.id}</b>]
          </h2>
          <dl className="jh-entity-details">
            <dt>
              <Translate contentKey="travisNg2App.testPagination.userOneToMany">User One To Many</Translate>
            </dt>
            <dd>{testPaginationEntity.userOneToMany ? testPaginationEntity.userOneToMany.login : ''}</dd>
            <dt>
              <Translate contentKey="travisNg2App.testPagination.userManyToMany">User Many To Many</Translate>
            </dt>
            <dd>
              {testPaginationEntity.userManyToManies
                ? testPaginationEntity.userManyToManies.map((val, i) => (
                    <span key={val.id}>
                      <a>{val.login}</a>
                      {i === testPaginationEntity.userManyToManies.length - 1 ? '' : ', '}
                    </span>
                  ))
                : null}{' '}
            </dd>
            <dt>
              <Translate contentKey="travisNg2App.testPagination.userOneToOne">User One To One</Translate>
            </dt>
            <dd>{testPaginationEntity.userOneToOne ? testPaginationEntity.userOneToOne.login : ''}</dd>
          </dl>
          <Button tag={Link} to="/test-pagination" replace color="info">
            <FontAwesomeIcon icon="arrow-left" />{' '}
            <span className="d-none d-md-inline">
              <Translate contentKey="entity.action.back">Back</Translate>
            </span>
          </Button>
          &nbsp;
          <Button tag={Link} to={`/test-pagination/${testPaginationEntity.id}/edit`} replace color="primary">
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

const mapStateToProps = ({ testPagination }: IRootState) => ({
  testPaginationEntity: testPagination.entity
});

const mapDispatchToProps = { getEntity };

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TestPaginationDetail);
