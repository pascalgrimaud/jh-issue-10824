import React from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Col, Row, Table } from 'reactstrap';
import { Translate, ICrudGetAllAction } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IRootState } from 'app/shared/reducers';
import { getEntities } from './test-many-to-many-my-suffix.reducer';
import { ITestManyToManyMySuffix } from 'app/shared/model/test-many-to-many-my-suffix.model';
import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';

export interface ITestManyToManyMySuffixProps extends StateProps, DispatchProps, RouteComponentProps<{ url: string }> {}

export class TestManyToManyMySuffix extends React.Component<ITestManyToManyMySuffixProps> {
  componentDidMount() {
    this.props.getEntities();
  }

  render() {
    const { testManyToManyList, match } = this.props;
    return (
      <div>
        <h2 id="test-many-to-many-my-suffix-heading">
          <Translate contentKey="travisNg2App.testManyToMany.home.title">Test Many To Manies</Translate>
          <Link to={`${match.url}/new`} className="btn btn-primary float-right jh-create-entity" id="jh-create-entity">
            <FontAwesomeIcon icon="plus" />
            &nbsp;
            <Translate contentKey="travisNg2App.testManyToMany.home.createLabel">Create a new Test Many To Many</Translate>
          </Link>
        </h2>
        <div className="table-responsive">
          {testManyToManyList && testManyToManyList.length > 0 ? (
            <Table responsive aria-describedby="test-many-to-many-my-suffix-heading">
              <thead>
                <tr>
                  <th>
                    <Translate contentKey="global.field.id">ID</Translate>
                  </th>
                  <th>
                    <Translate contentKey="travisNg2App.testManyToMany.testEntity">Test Entity</Translate>
                  </th>
                  <th>
                    <Translate contentKey="travisNg2App.testManyToMany.testMapstruct">Test Mapstruct</Translate>
                  </th>
                  <th>
                    <Translate contentKey="travisNg2App.testManyToMany.testServiceClass">Test Service Class</Translate>
                  </th>
                  <th>
                    <Translate contentKey="travisNg2App.testManyToMany.testServiceImpl">Test Service Impl</Translate>
                  </th>
                  <th>
                    <Translate contentKey="travisNg2App.testManyToMany.testInfiniteScroll">Test Infinite Scroll</Translate>
                  </th>
                  <th>
                    <Translate contentKey="travisNg2App.testManyToMany.testPagination">Test Pagination</Translate>
                  </th>
                  <th>
                    <Translate contentKey="travisNg2App.testManyToMany.testCustomTableName">Test Custom Table Name</Translate>
                  </th>
                  <th>
                    <Translate contentKey="travisNg2App.testManyToMany.superMegaLargeTestEntity">Super Mega Large Test Entity</Translate>
                  </th>
                  <th />
                </tr>
              </thead>
              <tbody>
                {testManyToManyList.map((testManyToMany, i) => (
                  <tr key={`entity-${i}`}>
                    <td>
                      <Button tag={Link} to={`${match.url}/${testManyToMany.id}`} color="link" size="sm">
                        {testManyToMany.id}
                      </Button>
                    </td>
                    <td>
                      {testManyToMany.testEntities
                        ? testManyToMany.testEntities.map((val, j) => (
                            <span key={j}>
                              <Link to={`test-entity-my-suffix-alt/${val.id}`}>{val.id}</Link>
                              {j === testManyToMany.testEntities.length - 1 ? '' : ', '}
                            </span>
                          ))
                        : null}
                    </td>
                    <td>
                      {testManyToMany.testMapstructs
                        ? testManyToMany.testMapstructs.map((val, j) => (
                            <span key={j}>
                              <Link to={`test-mapstruct/${val.id}`}>{val.id}</Link>
                              {j === testManyToMany.testMapstructs.length - 1 ? '' : ', '}
                            </span>
                          ))
                        : null}
                    </td>
                    <td>
                      {testManyToMany.testServiceClasses
                        ? testManyToMany.testServiceClasses.map((val, j) => (
                            <span key={j}>
                              <Link to={`test-service-class/${val.id}`}>{val.id}</Link>
                              {j === testManyToMany.testServiceClasses.length - 1 ? '' : ', '}
                            </span>
                          ))
                        : null}
                    </td>
                    <td>
                      {testManyToMany.testServiceImpls
                        ? testManyToMany.testServiceImpls.map((val, j) => (
                            <span key={j}>
                              <Link to={`test-service-impl/${val.id}`}>{val.id}</Link>
                              {j === testManyToMany.testServiceImpls.length - 1 ? '' : ', '}
                            </span>
                          ))
                        : null}
                    </td>
                    <td>
                      {testManyToMany.testInfiniteScrolls
                        ? testManyToMany.testInfiniteScrolls.map((val, j) => (
                            <span key={j}>
                              <Link to={`test-infinite-scroll/${val.id}`}>{val.id}</Link>
                              {j === testManyToMany.testInfiniteScrolls.length - 1 ? '' : ', '}
                            </span>
                          ))
                        : null}
                    </td>
                    <td>
                      {testManyToMany.testPaginations
                        ? testManyToMany.testPaginations.map((val, j) => (
                            <span key={j}>
                              <Link to={`test-pagination/${val.id}`}>{val.id}</Link>
                              {j === testManyToMany.testPaginations.length - 1 ? '' : ', '}
                            </span>
                          ))
                        : null}
                    </td>
                    <td>
                      {testManyToMany.testCustomTableNames
                        ? testManyToMany.testCustomTableNames.map((val, j) => (
                            <span key={j}>
                              <Link to={`test-custom-table-name/${val.id}`}>{val.id}</Link>
                              {j === testManyToMany.testCustomTableNames.length - 1 ? '' : ', '}
                            </span>
                          ))
                        : null}
                    </td>
                    <td>
                      {testManyToMany.superMegaLargeTestEntities
                        ? testManyToMany.superMegaLargeTestEntities.map((val, j) => (
                            <span key={j}>
                              <Link to={`super-mega-large-test-entity-my-suffix-alt/${val.id}`}>{val.id}</Link>
                              {j === testManyToMany.superMegaLargeTestEntities.length - 1 ? '' : ', '}
                            </span>
                          ))
                        : null}
                    </td>
                    <td className="text-right">
                      <div className="btn-group flex-btn-group-container">
                        <Button tag={Link} to={`${match.url}/${testManyToMany.id}`} color="info" size="sm">
                          <FontAwesomeIcon icon="eye" />{' '}
                          <span className="d-none d-md-inline">
                            <Translate contentKey="entity.action.view">View</Translate>
                          </span>
                        </Button>
                        <Button tag={Link} to={`${match.url}/${testManyToMany.id}/edit`} color="primary" size="sm">
                          <FontAwesomeIcon icon="pencil-alt" />{' '}
                          <span className="d-none d-md-inline">
                            <Translate contentKey="entity.action.edit">Edit</Translate>
                          </span>
                        </Button>
                        <Button tag={Link} to={`${match.url}/${testManyToMany.id}/delete`} color="danger" size="sm">
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
              <Translate contentKey="travisNg2App.testManyToMany.home.notFound">No Test Many To Manies found</Translate>
            </div>
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ testManyToMany }: IRootState) => ({
  testManyToManyList: testManyToMany.entities
});

const mapDispatchToProps = {
  getEntities
};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TestManyToManyMySuffix);
