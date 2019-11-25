import React from 'react';
import InfiniteScroll from 'react-infinite-scroller';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Col, Row, Table } from 'reactstrap';
import { Translate, ICrudGetAllAction, getSortState, IPaginationBaseState } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IRootState } from 'app/shared/reducers';
import { getEntities, reset } from './test-infinite-scroll.reducer';
import { ITestInfiniteScroll } from 'app/shared/model/test-infinite-scroll.model';
import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
import { ITEMS_PER_PAGE } from 'app/shared/util/pagination.constants';

export interface ITestInfiniteScrollProps extends StateProps, DispatchProps, RouteComponentProps<{ url: string }> {}

export type ITestInfiniteScrollState = IPaginationBaseState;

export class TestInfiniteScroll extends React.Component<ITestInfiniteScrollProps, ITestInfiniteScrollState> {
  state: ITestInfiniteScrollState = {
    ...getSortState(this.props.location, ITEMS_PER_PAGE)
  };

  componentDidMount() {
    this.reset();
  }

  componentDidUpdate() {
    if (this.props.updateSuccess) {
      this.reset();
    }
  }

  reset = () => {
    this.props.reset();
    this.setState({ activePage: 1 }, () => {
      this.getEntities();
    });
  };

  handleLoadMore = () => {
    if (window.pageYOffset > 0) {
      this.setState({ activePage: this.state.activePage + 1 }, () => this.getEntities());
    }
  };

  sort = prop => () => {
    this.setState(
      {
        order: this.state.order === 'asc' ? 'desc' : 'asc',
        sort: prop
      },
      () => {
        this.reset();
      }
    );
  };

  getEntities = () => {
    const { activePage, itemsPerPage, sort, order } = this.state;
    this.props.getEntities(activePage - 1, itemsPerPage, `${sort},${order}`);
  };

  render() {
    const { testInfiniteScrollList, match } = this.props;
    return (
      <div>
        <h2 id="test-infinite-scroll-heading">
          <Translate contentKey="travisNg2App.testInfiniteScroll.home.title">Test Infinite Scrolls</Translate>
          <Link to={`${match.url}/new`} className="btn btn-primary float-right jh-create-entity" id="jh-create-entity">
            <FontAwesomeIcon icon="plus" />
            &nbsp;
            <Translate contentKey="travisNg2App.testInfiniteScroll.home.createLabel">Create a new Test Infinite Scroll</Translate>
          </Link>
        </h2>
        <div className="table-responsive">
          <InfiniteScroll
            pageStart={this.state.activePage}
            loadMore={this.handleLoadMore}
            hasMore={this.state.activePage - 1 < this.props.links.next}
            loader={<div className="loader">Loading ...</div>}
            threshold={0}
            initialLoad={false}
          >
            {testInfiniteScrollList && testInfiniteScrollList.length > 0 ? (
              <Table responsive aria-describedby="test-infinite-scroll-heading">
                <thead>
                  <tr>
                    <th className="hand" onClick={this.sort('id')}>
                      <Translate contentKey="global.field.id">ID</Translate> <FontAwesomeIcon icon="sort" />
                    </th>
                    <th>
                      <Translate contentKey="travisNg2App.testInfiniteScroll.userOneToMany">User One To Many</Translate>{' '}
                      <FontAwesomeIcon icon="sort" />
                    </th>
                    <th>
                      <Translate contentKey="travisNg2App.testInfiniteScroll.userOneToOne">User One To One</Translate>{' '}
                      <FontAwesomeIcon icon="sort" />
                    </th>
                    <th />
                  </tr>
                </thead>
                <tbody>
                  {testInfiniteScrollList.map((testInfiniteScroll, i) => (
                    <tr key={`entity-${i}`}>
                      <td>
                        <Button tag={Link} to={`${match.url}/${testInfiniteScroll.id}`} color="link" size="sm">
                          {testInfiniteScroll.id}
                        </Button>
                      </td>
                      <td>{testInfiniteScroll.userOneToMany ? testInfiniteScroll.userOneToMany.login : ''}</td>
                      <td>{testInfiniteScroll.userOneToOne ? testInfiniteScroll.userOneToOne.login : ''}</td>
                      <td className="text-right">
                        <div className="btn-group flex-btn-group-container">
                          <Button tag={Link} to={`${match.url}/${testInfiniteScroll.id}`} color="info" size="sm">
                            <FontAwesomeIcon icon="eye" />{' '}
                            <span className="d-none d-md-inline">
                              <Translate contentKey="entity.action.view">View</Translate>
                            </span>
                          </Button>
                          <Button tag={Link} to={`${match.url}/${testInfiniteScroll.id}/edit`} color="primary" size="sm">
                            <FontAwesomeIcon icon="pencil-alt" />{' '}
                            <span className="d-none d-md-inline">
                              <Translate contentKey="entity.action.edit">Edit</Translate>
                            </span>
                          </Button>
                          <Button tag={Link} to={`${match.url}/${testInfiniteScroll.id}/delete`} color="danger" size="sm">
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
                <Translate contentKey="travisNg2App.testInfiniteScroll.home.notFound">No Test Infinite Scrolls found</Translate>
              </div>
            )}
          </InfiniteScroll>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ testInfiniteScroll }: IRootState) => ({
  testInfiniteScrollList: testInfiniteScroll.entities,
  totalItems: testInfiniteScroll.totalItems,
  links: testInfiniteScroll.links,
  entity: testInfiniteScroll.entity,
  updateSuccess: testInfiniteScroll.updateSuccess
});

const mapDispatchToProps = {
  getEntities,
  reset
};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TestInfiniteScroll);
