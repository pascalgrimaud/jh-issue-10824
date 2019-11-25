import React from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Col, Row, Table } from 'reactstrap';
import { Translate, ICrudGetAllAction } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IRootState } from 'app/shared/reducers';
import { getEntities } from './test-one-to-one-my-suffix.reducer';
import { ITestOneToOneMySuffix } from 'app/shared/model/test-one-to-one-my-suffix.model';
import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';

export interface ITestOneToOneMySuffixProps extends StateProps, DispatchProps, RouteComponentProps<{ url: string }> {}

export class TestOneToOneMySuffix extends React.Component<ITestOneToOneMySuffixProps> {
  componentDidMount() {
    this.props.getEntities();
  }

  render() {
    const { testOneToOneList, match } = this.props;
    return (
      <div>
        <h2 id="test-one-to-one-my-suffix-heading">
          <Translate contentKey="travisNg2App.testOneToOne.home.title">Test One To Ones</Translate>
          <Link to={`${match.url}/new`} className="btn btn-primary float-right jh-create-entity" id="jh-create-entity">
            <FontAwesomeIcon icon="plus" />
            &nbsp;
            <Translate contentKey="travisNg2App.testOneToOne.home.createLabel">Create a new Test One To One</Translate>
          </Link>
        </h2>
        <div className="table-responsive">
          {testOneToOneList && testOneToOneList.length > 0 ? (
            <Table responsive aria-describedby="test-one-to-one-my-suffix-heading">
              <thead>
                <tr>
                  <th>
                    <Translate contentKey="global.field.id">ID</Translate>
                  </th>
                  <th>
                    <Translate contentKey="travisNg2App.testOneToOne.testEntity">Test Entity</Translate>
                  </th>
                  <th>
                    <Translate contentKey="travisNg2App.testOneToOne.testMapstruct">Test Mapstruct</Translate>
                  </th>
                  <th>
                    <Translate contentKey="travisNg2App.testOneToOne.testServiceClass">Test Service Class</Translate>
                  </th>
                  <th>
                    <Translate contentKey="travisNg2App.testOneToOne.testServiceImpl">Test Service Impl</Translate>
                  </th>
                  <th>
                    <Translate contentKey="travisNg2App.testOneToOne.testInfiniteScroll">Test Infinite Scroll</Translate>
                  </th>
                  <th>
                    <Translate contentKey="travisNg2App.testOneToOne.testPagination">Test Pagination</Translate>
                  </th>
                  <th>
                    <Translate contentKey="travisNg2App.testOneToOne.testCustomTableName">Test Custom Table Name</Translate>
                  </th>
                  <th>
                    <Translate contentKey="travisNg2App.testOneToOne.superMegaLargeTestEntity">Super Mega Large Test Entity</Translate>
                  </th>
                  <th />
                </tr>
              </thead>
              <tbody>
                {testOneToOneList.map((testOneToOne, i) => (
                  <tr key={`entity-${i}`}>
                    <td>
                      <Button tag={Link} to={`${match.url}/${testOneToOne.id}`} color="link" size="sm">
                        {testOneToOne.id}
                      </Button>
                    </td>
                    <td>
                      {testOneToOne.testEntity ? (
                        <Link to={`test-entity-my-suffix-alt/${testOneToOne.testEntity.id}`}>{testOneToOne.testEntity.id}</Link>
                      ) : (
                        ''
                      )}
                    </td>
                    <td>
                      {testOneToOne.testMapstruct ? (
                        <Link to={`test-mapstruct/${testOneToOne.testMapstruct.id}`}>{testOneToOne.testMapstruct.id}</Link>
                      ) : (
                        ''
                      )}
                    </td>
                    <td>
                      {testOneToOne.testServiceClass ? (
                        <Link to={`test-service-class/${testOneToOne.testServiceClass.id}`}>{testOneToOne.testServiceClass.id}</Link>
                      ) : (
                        ''
                      )}
                    </td>
                    <td>
                      {testOneToOne.testServiceImpl ? (
                        <Link to={`test-service-impl/${testOneToOne.testServiceImpl.id}`}>{testOneToOne.testServiceImpl.id}</Link>
                      ) : (
                        ''
                      )}
                    </td>
                    <td>
                      {testOneToOne.testInfiniteScroll ? (
                        <Link to={`test-infinite-scroll/${testOneToOne.testInfiniteScroll.id}`}>{testOneToOne.testInfiniteScroll.id}</Link>
                      ) : (
                        ''
                      )}
                    </td>
                    <td>
                      {testOneToOne.testPagination ? (
                        <Link to={`test-pagination/${testOneToOne.testPagination.id}`}>{testOneToOne.testPagination.id}</Link>
                      ) : (
                        ''
                      )}
                    </td>
                    <td>
                      {testOneToOne.testCustomTableName ? (
                        <Link to={`test-custom-table-name/${testOneToOne.testCustomTableName.id}`}>
                          {testOneToOne.testCustomTableName.id}
                        </Link>
                      ) : (
                        ''
                      )}
                    </td>
                    <td>
                      {testOneToOne.superMegaLargeTestEntity ? (
                        <Link to={`super-mega-large-test-entity-my-suffix-alt/${testOneToOne.superMegaLargeTestEntity.id}`}>
                          {testOneToOne.superMegaLargeTestEntity.id}
                        </Link>
                      ) : (
                        ''
                      )}
                    </td>
                    <td className="text-right">
                      <div className="btn-group flex-btn-group-container">
                        <Button tag={Link} to={`${match.url}/${testOneToOne.id}`} color="info" size="sm">
                          <FontAwesomeIcon icon="eye" />{' '}
                          <span className="d-none d-md-inline">
                            <Translate contentKey="entity.action.view">View</Translate>
                          </span>
                        </Button>
                        <Button tag={Link} to={`${match.url}/${testOneToOne.id}/edit`} color="primary" size="sm">
                          <FontAwesomeIcon icon="pencil-alt" />{' '}
                          <span className="d-none d-md-inline">
                            <Translate contentKey="entity.action.edit">Edit</Translate>
                          </span>
                        </Button>
                        <Button tag={Link} to={`${match.url}/${testOneToOne.id}/delete`} color="danger" size="sm">
                          <FontAwesomeIcon icon="trash" />{' '}
                          <span className="d-none d-md-inline">
                            <Translate contentKey="entity.action.delete">Delete</Translate>
                          </span>
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          ) : (
            <div className="alert alert-warning">
              <Translate contentKey="travisNg2App.testOneToOne.home.notFound">No Test One To Ones found</Translate>
            </div>
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ testOneToOne }: IRootState) => ({
  testOneToOneList: testOneToOne.entities
});

const mapDispatchToProps = {
  getEntities
};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TestOneToOneMySuffix);
