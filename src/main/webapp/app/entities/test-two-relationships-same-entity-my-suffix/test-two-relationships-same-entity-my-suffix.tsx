import React from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Col, Row, Table } from 'reactstrap';
import { Translate, ICrudGetAllAction } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IRootState } from 'app/shared/reducers';
import { getEntities } from './test-two-relationships-same-entity-my-suffix.reducer';
import { ITestTwoRelationshipsSameEntityMySuffix } from 'app/shared/model/test-two-relationships-same-entity-my-suffix.model';
import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';

export interface ITestTwoRelationshipsSameEntityMySuffixProps extends StateProps, DispatchProps, RouteComponentProps<{ url: string }> {}

export class TestTwoRelationshipsSameEntityMySuffix extends React.Component<ITestTwoRelationshipsSameEntityMySuffixProps> {
  componentDidMount() {
    this.props.getEntities();
  }

  render() {
    const { testTwoRelationshipsSameEntityList, match } = this.props;
    return (
      <div>
        <h2 id="test-two-relationships-same-entity-my-suffix-heading">
          <Translate contentKey="travisNg2App.testTwoRelationshipsSameEntity.home.title">Test Two Relationships Same Entities</Translate>
          <Link to={`${match.url}/new`} className="btn btn-primary float-right jh-create-entity" id="jh-create-entity">
            <FontAwesomeIcon icon="plus" />
            &nbsp;
            <Translate contentKey="travisNg2App.testTwoRelationshipsSameEntity.home.createLabel">
              Create a new Test Two Relationships Same Entity
            </Translate>
          </Link>
        </h2>
        <div className="table-responsive">
          {testTwoRelationshipsSameEntityList && testTwoRelationshipsSameEntityList.length > 0 ? (
            <Table responsive aria-describedby="test-two-relationships-same-entity-my-suffix-heading">
              <thead>
                <tr>
                  <th>
                    <Translate contentKey="global.field.id">ID</Translate>
                  </th>
                  <th>
                    <Translate contentKey="travisNg2App.testTwoRelationshipsSameEntity.firstRelationship">First Relationship</Translate>
                  </th>
                  <th>
                    <Translate contentKey="travisNg2App.testTwoRelationshipsSameEntity.secondRelationship">Second Relationship</Translate>
                  </th>
                  <th>
                    <Translate contentKey="travisNg2App.testTwoRelationshipsSameEntity.userOne">User One</Translate>
                  </th>
                  <th>
                    <Translate contentKey="travisNg2App.testTwoRelationshipsSameEntity.userTwo">User Two</Translate>
                  </th>
                  <th>
                    <Translate contentKey="travisNg2App.testTwoRelationshipsSameEntity.firstUniqueRequiredRelation">
                      First Unique Required Relation
                    </Translate>
                  </th>
                  <th>
                    <Translate contentKey="travisNg2App.testTwoRelationshipsSameEntity.secondUniqueRequiredRelation">
                      Second Unique Required Relation
                    </Translate>
                  </th>
                  <th />
                </tr>
              </thead>
              <tbody>
                {testTwoRelationshipsSameEntityList.map((testTwoRelationshipsSameEntity, i) => (
                  <tr key={`entity-${i}`}>
                    <td>
                      <Button tag={Link} to={`${match.url}/${testTwoRelationshipsSameEntity.id}`} color="link" size="sm">
                        {testTwoRelationshipsSameEntity.id}
                      </Button>
                    </td>
                    <td>
                      {testTwoRelationshipsSameEntity.firstRelationship ? (
                        <Link to={`test-entity-my-suffix-alt/${testTwoRelationshipsSameEntity.firstRelationship.id}`}>
                          {testTwoRelationshipsSameEntity.firstRelationship.id}
                        </Link>
                      ) : (
                        ''
                      )}
                    </td>
                    <td>
                      {testTwoRelationshipsSameEntity.secondRelationship ? (
                        <Link to={`test-entity-my-suffix-alt/${testTwoRelationshipsSameEntity.secondRelationship.id}`}>
                          {testTwoRelationshipsSameEntity.secondRelationship.id}
                        </Link>
                      ) : (
                        ''
                      )}
                    </td>
                    <td>{testTwoRelationshipsSameEntity.userOne ? testTwoRelationshipsSameEntity.userOne.id : ''}</td>
                    <td>{testTwoRelationshipsSameEntity.userTwo ? testTwoRelationshipsSameEntity.userTwo.id : ''}</td>
                    <td>
                      {testTwoRelationshipsSameEntity.firstUniqueRequiredRelation ? (
                        <Link to={`division/${testTwoRelationshipsSameEntity.firstUniqueRequiredRelation.id}`}>
                          {testTwoRelationshipsSameEntity.firstUniqueRequiredRelation.id}
                        </Link>
                      ) : (
                        ''
                      )}
                    </td>
                    <td>
                      {testTwoRelationshipsSameEntity.secondUniqueRequiredRelation ? (
                        <Link to={`division/${testTwoRelationshipsSameEntity.secondUniqueRequiredRelation.id}`}>
                          {testTwoRelationshipsSameEntity.secondUniqueRequiredRelation.id}
                        </Link>
                      ) : (
                        ''
                      )}
                    </td>
                    <td className="text-right">
                      <div className="btn-group flex-btn-group-container">
                        <Button tag={Link} to={`${match.url}/${testTwoRelationshipsSameEntity.id}`} color="info" size="sm">
                          <FontAwesomeIcon icon="eye" />{' '}
                          <span className="d-none d-md-inline">
                            <Translate contentKey="entity.action.view">View</Translate>
                          </span>
                        </Button>
                        <Button tag={Link} to={`${match.url}/${testTwoRelationshipsSameEntity.id}/edit`} color="primary" size="sm">
                          <FontAwesomeIcon icon="pencil-alt" />{' '}
                          <span className="d-none d-md-inline">
                            <Translate contentKey="entity.action.edit">Edit</Translate>
                          </span>
                        </Button>
                        <Button tag={Link} to={`${match.url}/${testTwoRelationshipsSameEntity.id}/delete`} color="danger" size="sm">
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
              <Translate contentKey="travisNg2App.testTwoRelationshipsSameEntity.home.notFound">
                No Test Two Relationships Same Entities found
              </Translate>
            </div>
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ testTwoRelationshipsSameEntity }: IRootState) => ({
  testTwoRelationshipsSameEntityList: testTwoRelationshipsSameEntity.entities
});

const mapDispatchToProps = {
  getEntities
};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TestTwoRelationshipsSameEntityMySuffix);
