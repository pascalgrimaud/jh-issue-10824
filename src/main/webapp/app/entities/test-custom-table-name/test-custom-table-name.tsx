import React from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Col, Row, Table } from 'reactstrap';
import { Translate, ICrudGetAllAction } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IRootState } from 'app/shared/reducers';
import { getEntities } from './test-custom-table-name.reducer';
import { ITestCustomTableName } from 'app/shared/model/test-custom-table-name.model';
import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';

export interface ITestCustomTableNameProps extends StateProps, DispatchProps, RouteComponentProps<{ url: string }> {}

export class TestCustomTableName extends React.Component<ITestCustomTableNameProps> {
  componentDidMount() {
    this.props.getEntities();
  }

  render() {
    const { testCustomTableNameList, match } = this.props;
    return (
      <div>
        <h2 id="test-custom-table-name-heading">
          <Translate contentKey="travisNg2App.testCustomTableName.home.title">Test Custom Table Names</Translate>
          <Link to={`${match.url}/new`} className="btn btn-primary float-right jh-create-entity" id="jh-create-entity">
            <FontAwesomeIcon icon="plus" />
            &nbsp;
            <Translate contentKey="travisNg2App.testCustomTableName.home.createLabel">Create a new Test Custom Table Name</Translate>
          </Link>
        </h2>
        <div className="table-responsive">
          {testCustomTableNameList && testCustomTableNameList.length > 0 ? (
            <Table responsive aria-describedby="test-custom-table-name-heading">
              <thead>
                <tr>
                  <th>
                    <Translate contentKey="global.field.id">ID</Translate>
                  </th>
                  <th>
                    <Translate contentKey="travisNg2App.testCustomTableName.testEntity">Test Entity</Translate>
                  </th>
                  <th>
                    <Translate contentKey="travisNg2App.testCustomTableName.userOneToMany">User One To Many</Translate>
                  </th>
                  <th>
                    <Translate contentKey="travisNg2App.testCustomTableName.userManyToMany">User Many To Many</Translate>
                  </th>
                  <th>
                    <Translate contentKey="travisNg2App.testCustomTableName.userOneToOne">User One To One</Translate>
                  </th>
                  <th>
                    <Translate contentKey="travisNg2App.testCustomTableName.superMegaLargeTestEntity">
                      Super Mega Large Test Entity
                    </Translate>
                  </th>
                  <th />
                </tr>
              </thead>
              <tbody>
                {testCustomTableNameList.map((testCustomTableName, i) => (
                  <tr key={`entity-${i}`}>
                    <td>
                      <Button tag={Link} to={`${match.url}/${testCustomTableName.id}`} color="link" size="sm">
                        {testCustomTableName.id}
                      </Button>
                    </td>
                    <td>
                      {testCustomTableName.testEntity ? (
                        <Link to={`test-entity-my-suffix-alt/${testCustomTableName.testEntity.id}`}>
                          {testCustomTableName.testEntity.id}
                        </Link>
                      ) : (
                        ''
                      )}
                    </td>
                    <td>{testCustomTableName.userOneToMany ? testCustomTableName.userOneToMany.login : ''}</td>
                    <td>
                      {testCustomTableName.userManyToManies
                        ? testCustomTableName.userManyToManies.map((val, j) => (
                            <span key={j}>
                              {val.login}
                              {j === testCustomTableName.userManyToManies.length - 1 ? '' : ', '}
                            </span>
                          ))
                        : null}
                    </td>
                    <td>{testCustomTableName.userOneToOne ? testCustomTableName.userOneToOne.login : ''}</td>
                    <td>
                      {testCustomTableName.superMegaLargeTestEntity ? (
                        <Link to={`super-mega-large-test-entity-my-suffix-alt/${testCustomTableName.superMegaLargeTestEntity.id}`}>
                          {testCustomTableName.superMegaLargeTestEntity.id}
                        </Link>
                      ) : (
                        ''
                      )}
                    </td>
                    <td className="text-right">
                      <div className="btn-group flex-btn-group-container">
                        <Button tag={Link} to={`${match.url}/${testCustomTableName.id}`} color="info" size="sm">
                          <FontAwesomeIcon icon="eye" />{' '}
                          <span className="d-none d-md-inline">
                            <Translate contentKey="entity.action.view">View</Translate>
                          </span>
                        </Button>
                        <Button tag={Link} to={`${match.url}/${testCustomTableName.id}/edit`} color="primary" size="sm">
                          <FontAwesomeIcon icon="pencil-alt" />{' '}
                          <span className="d-none d-md-inline">
                            <Translate contentKey="entity.action.edit">Edit</Translate>
                          </span>
                        </Button>
                        <Button tag={Link} to={`${match.url}/${testCustomTableName.id}/delete`} color="danger" size="sm">
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
              <Translate contentKey="travisNg2App.testCustomTableName.home.notFound">No Test Custom Table Names found</Translate>
            </div>
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ testCustomTableName }: IRootState) => ({
  testCustomTableNameList: testCustomTableName.entities
});

const mapDispatchToProps = {
  getEntities
};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TestCustomTableName);
