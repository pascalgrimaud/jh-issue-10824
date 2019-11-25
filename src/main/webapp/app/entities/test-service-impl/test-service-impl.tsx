import React from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Col, Row, Table } from 'reactstrap';
import { Translate, ICrudGetAllAction } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IRootState } from 'app/shared/reducers';
import { getEntities } from './test-service-impl.reducer';
import { ITestServiceImpl } from 'app/shared/model/test-service-impl.model';
import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';

export interface ITestServiceImplProps extends StateProps, DispatchProps, RouteComponentProps<{ url: string }> {}

export class TestServiceImpl extends React.Component<ITestServiceImplProps> {
  componentDidMount() {
    this.props.getEntities();
  }

  render() {
    const { testServiceImplList, match } = this.props;
    return (
      <div>
        <h2 id="test-service-impl-heading">
          <Translate contentKey="travisNg2App.testServiceImpl.home.title">Test Service Impls</Translate>
          <Link to={`${match.url}/new`} className="btn btn-primary float-right jh-create-entity" id="jh-create-entity">
            <FontAwesomeIcon icon="plus" />
            &nbsp;
            <Translate contentKey="travisNg2App.testServiceImpl.home.createLabel">Create a new Test Service Impl</Translate>
          </Link>
        </h2>
        <div className="table-responsive">
          {testServiceImplList && testServiceImplList.length > 0 ? (
            <Table responsive aria-describedby="test-service-impl-heading">
              <thead>
                <tr>
                  <th>
                    <Translate contentKey="global.field.id">ID</Translate>
                  </th>
                  <th>
                    <Translate contentKey="travisNg2App.testServiceImpl.userOneToMany">User One To Many</Translate>
                  </th>
                  <th>
                    <Translate contentKey="travisNg2App.testServiceImpl.userManyToMany">User Many To Many</Translate>
                  </th>
                  <th>
                    <Translate contentKey="travisNg2App.testServiceImpl.userOneToOne">User One To One</Translate>
                  </th>
                  <th />
                </tr>
              </thead>
              <tbody>
                {testServiceImplList.map((testServiceImpl, i) => (
                  <tr key={`entity-${i}`}>
                    <td>
                      <Button tag={Link} to={`${match.url}/${testServiceImpl.id}`} color="link" size="sm">
                        {testServiceImpl.id}
                      </Button>
                    </td>
                    <td>{testServiceImpl.userOneToMany ? testServiceImpl.userOneToMany.login : ''}</td>
                    <td>
                      {testServiceImpl.userManyToManies
                        ? testServiceImpl.userManyToManies.map((val, j) => (
                            <span key={j}>
                              {val.login}
                              {j === testServiceImpl.userManyToManies.length - 1 ? '' : ', '}
                            </span>
                          ))
                        : null}
                    </td>
                    <td>{testServiceImpl.userOneToOne ? testServiceImpl.userOneToOne.login : ''}</td>
                    <td className="text-right">
                      <div className="btn-group flex-btn-group-container">
                        <Button tag={Link} to={`${match.url}/${testServiceImpl.id}`} color="info" size="sm">
                          <FontAwesomeIcon icon="eye" />{' '}
                          <span className="d-none d-md-inline">
                            <Translate contentKey="entity.action.view">View</Translate>
                          </span>
                        </Button>
                        <Button tag={Link} to={`${match.url}/${testServiceImpl.id}/edit`} color="primary" size="sm">
                          <FontAwesomeIcon icon="pencil-alt" />{' '}
                          <span className="d-none d-md-inline">
                            <Translate contentKey="entity.action.edit">Edit</Translate>
                          </span>
                        </Button>
                        <Button tag={Link} to={`${match.url}/${testServiceImpl.id}/delete`} color="danger" size="sm">
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
              <Translate contentKey="travisNg2App.testServiceImpl.home.notFound">No Test Service Impls found</Translate>
            </div>
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ testServiceImpl }: IRootState) => ({
  testServiceImplList: testServiceImpl.entities
});

const mapDispatchToProps = {
  getEntities
};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TestServiceImpl);
