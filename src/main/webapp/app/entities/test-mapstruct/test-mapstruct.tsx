import React from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Col, Row, Table } from 'reactstrap';
import { Translate, ICrudGetAllAction } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IRootState } from 'app/shared/reducers';
import { getEntities } from './test-mapstruct.reducer';
import { ITestMapstruct } from 'app/shared/model/test-mapstruct.model';
import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';

export interface ITestMapstructProps extends StateProps, DispatchProps, RouteComponentProps<{ url: string }> {}

export class TestMapstruct extends React.Component<ITestMapstructProps> {
  componentDidMount() {
    this.props.getEntities();
  }

  render() {
    const { testMapstructList, match } = this.props;
    return (
      <div>
        <h2 id="test-mapstruct-heading">
          <Translate contentKey="travisNg2App.testMapstruct.home.title">Test Mapstructs</Translate>
          <Link to={`${match.url}/new`} className="btn btn-primary float-right jh-create-entity" id="jh-create-entity">
            <FontAwesomeIcon icon="plus" />
            &nbsp;
            <Translate contentKey="travisNg2App.testMapstruct.home.createLabel">Create a new Test Mapstruct</Translate>
          </Link>
        </h2>
        <div className="table-responsive">
          {testMapstructList && testMapstructList.length > 0 ? (
            <Table responsive aria-describedby="test-mapstruct-heading">
              <thead>
                <tr>
                  <th>
                    <Translate contentKey="global.field.id">ID</Translate>
                  </th>
                  <th>
                    <Translate contentKey="travisNg2App.testMapstruct.userOneToMany">User One To Many</Translate>
                  </th>
                  <th>
                    <Translate contentKey="travisNg2App.testMapstruct.userManyToMany">User Many To Many</Translate>
                  </th>
                  <th>
                    <Translate contentKey="travisNg2App.testMapstruct.userOneToOne">User One To One</Translate>
                  </th>
                  <th />
                </tr>
              </thead>
              <tbody>
                {testMapstructList.map((testMapstruct, i) => (
                  <tr key={`entity-${i}`}>
                    <td>
                      <Button tag={Link} to={`${match.url}/${testMapstruct.id}`} color="link" size="sm">
                        {testMapstruct.id}
                      </Button>
                    </td>
                    <td>{testMapstruct.userOneToManyLogin ? testMapstruct.userOneToManyLogin : ''}</td>
                    <td>
                      {testMapstruct.userManyToManies
                        ? testMapstruct.userManyToManies.map((val, j) => (
                            <span key={j}>
                              {val.login}
                              {j === testMapstruct.userManyToManies.length - 1 ? '' : ', '}
                            </span>
                          ))
                        : null}
                    </td>
                    <td>{testMapstruct.userOneToOneLogin ? testMapstruct.userOneToOneLogin : ''}</td>
                    <td className="text-right">
                      <div className="btn-group flex-btn-group-container">
                        <Button tag={Link} to={`${match.url}/${testMapstruct.id}`} color="info" size="sm">
                          <FontAwesomeIcon icon="eye" />{' '}
                          <span className="d-none d-md-inline">
                            <Translate contentKey="entity.action.view">View</Translate>
                          </span>
                        </Button>
                        <Button tag={Link} to={`${match.url}/${testMapstruct.id}/edit`} color="primary" size="sm">
                          <FontAwesomeIcon icon="pencil-alt" />{' '}
                          <span className="d-none d-md-inline">
                            <Translate contentKey="entity.action.edit">Edit</Translate>
                          </span>
                        </Button>
                        <Button tag={Link} to={`${match.url}/${testMapstruct.id}/delete`} color="danger" size="sm">
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
              <Translate contentKey="travisNg2App.testMapstruct.home.notFound">No Test Mapstructs found</Translate>
            </div>
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ testMapstruct }: IRootState) => ({
  testMapstructList: testMapstruct.entities
});

const mapDispatchToProps = {
  getEntities
};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TestMapstruct);
