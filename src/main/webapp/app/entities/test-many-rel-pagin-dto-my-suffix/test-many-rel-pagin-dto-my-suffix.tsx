import React from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Col, Row, Table } from 'reactstrap';
import { Translate, ICrudGetAllAction, getSortState, IPaginationBaseState, JhiPagination, JhiItemCount } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IRootState } from 'app/shared/reducers';
import { getEntities } from './test-many-rel-pagin-dto-my-suffix.reducer';
import { ITestManyRelPaginDTOMySuffix } from 'app/shared/model/test-many-rel-pagin-dto-my-suffix.model';
import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
import { ITEMS_PER_PAGE } from 'app/shared/util/pagination.constants';

export interface ITestManyRelPaginDTOMySuffixProps extends StateProps, DispatchProps, RouteComponentProps<{ url: string }> {}

export type ITestManyRelPaginDTOMySuffixState = IPaginationBaseState;

export class TestManyRelPaginDTOMySuffix extends React.Component<ITestManyRelPaginDTOMySuffixProps, ITestManyRelPaginDTOMySuffixState> {
  state: ITestManyRelPaginDTOMySuffixState = {
    ...getSortState(this.props.location, ITEMS_PER_PAGE)
  };

  componentDidMount() {
    this.getEntities();
  }

  sort = prop => () => {
    this.setState(
      {
        order: this.state.order === 'asc' ? 'desc' : 'asc',
        sort: prop
      },
      () => this.sortEntities()
    );
  };

  sortEntities() {
    this.getEntities();
    this.props.history.push(`${this.props.location.pathname}?page=${this.state.activePage}&sort=${this.state.sort},${this.state.order}`);
  }

  handlePagination = activePage => this.setState({ activePage }, () => this.sortEntities());

  getEntities = () => {
    const { activePage, itemsPerPage, sort, order } = this.state;
    this.props.getEntities(activePage - 1, itemsPerPage, `${sort},${order}`);
  };

  render() {
    const { testManyRelPaginDTOList, match, totalItems } = this.props;
    return (
      <div>
        <h2 id="test-many-rel-pagin-dto-my-suffix-heading">
          <Translate contentKey="travisNg2App.testManyRelPaginDTO.home.title">Test Many Rel Pagin DTOS</Translate>
          <Link to={`${match.url}/new`} className="btn btn-primary float-right jh-create-entity" id="jh-create-entity">
            <FontAwesomeIcon icon="plus" />
            &nbsp;
            <Translate contentKey="travisNg2App.testManyRelPaginDTO.home.createLabel">Create a new Test Many Rel Pagin DTO</Translate>
          </Link>
        </h2>
        <div className="table-responsive">
          {testManyRelPaginDTOList && testManyRelPaginDTOList.length > 0 ? (
            <Table responsive aria-describedby="test-many-rel-pagin-dto-my-suffix-heading">
              <thead>
                <tr>
                  <th className="hand" onClick={this.sort('id')}>
                    <Translate contentKey="global.field.id">ID</Translate> <FontAwesomeIcon icon="sort" />
                  </th>
                  <th />
                </tr>
              </thead>
              <tbody>
                {testManyRelPaginDTOList.map((testManyRelPaginDTO, i) => (
                  <tr key={`entity-${i}`}>
                    <td>
                      <Button tag={Link} to={`${match.url}/${testManyRelPaginDTO.id}`} color="link" size="sm">
                        {testManyRelPaginDTO.id}
                      </Button>
                    </td>
                    <td className="text-right">
                      <div className="btn-group flex-btn-group-container">
                        <Button tag={Link} to={`${match.url}/${testManyRelPaginDTO.id}`} color="info" size="sm">
                          <FontAwesomeIcon icon="eye" />{' '}
                          <span className="d-none d-md-inline">
                            <Translate contentKey="entity.action.view">View</Translate>
                          </span>
                        </Button>
                        <Button tag={Link} to={`${match.url}/${testManyRelPaginDTO.id}/edit`} color="primary" size="sm">
                          <FontAwesomeIcon icon="pencil-alt" />{' '}
                          <span className="d-none d-md-inline">
                            <Translate contentKey="entity.action.edit">Edit</Translate>
                          </span>
                        </Button>
                        <Button tag={Link} to={`${match.url}/${testManyRelPaginDTO.id}/delete`} color="danger" size="sm">
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
              <Translate contentKey="travisNg2App.testManyRelPaginDTO.home.notFound">No Test Many Rel Pagin DTOS found</Translate>
            </div>
          )}
        </div>
        <div className={testManyRelPaginDTOList && testManyRelPaginDTOList.length > 0 ? '' : 'd-none'}>
          <Row className="justify-content-center">
            <JhiItemCount page={this.state.activePage} total={totalItems} itemsPerPage={this.state.itemsPerPage} i18nEnabled />
          </Row>
          <Row className="justify-content-center">
            <JhiPagination
              activePage={this.state.activePage}
              onSelect={this.handlePagination}
              maxButtons={5}
              itemsPerPage={this.state.itemsPerPage}
              totalItems={this.props.totalItems}
            />
          </Row>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ testManyRelPaginDTO }: IRootState) => ({
  testManyRelPaginDTOList: testManyRelPaginDTO.entities,
  totalItems: testManyRelPaginDTO.totalItems
});

const mapDispatchToProps = {
  getEntities
};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TestManyRelPaginDTOMySuffix);
