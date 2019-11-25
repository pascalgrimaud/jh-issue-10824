import React from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import { Translate, ICrudGetAction } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IRootState } from 'app/shared/reducers';
import { getEntity } from './test-custom-table-name.reducer';
import { ITestCustomTableName } from 'app/shared/model/test-custom-table-name.model';
import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';

export interface ITestCustomTableNameDetailProps extends StateProps, DispatchProps, RouteComponentProps<{ id: string }> {}

export class TestCustomTableNameDetail extends React.Component<ITestCustomTableNameDetailProps> {
  componentDidMount() {
    this.props.getEntity(this.props.match.params.id);
  }

  render() {
    const { testCustomTableNameEntity } = this.props;
    return (
      <Row>
        <Col md="8">
          <h2>
            <Translate contentKey="travisNg2App.testCustomTableName.detail.title">TestCustomTableName</Translate> [
            <b>{testCustomTableNameEntity.id}</b>]
          </h2>
          <dl className="jh-entity-details">
            <dt>
              <Translate contentKey="travisNg2App.testCustomTableName.testEntity">Test Entity</Translate>
            </dt>
            <dd>{testCustomTableNameEntity.testEntity ? testCustomTableNameEntity.testEntity.id : ''}</dd>
            <dt>
              <Translate contentKey="travisNg2App.testCustomTableName.userOneToMany">User One To Many</Translate>
            </dt>
            <dd>{testCustomTableNameEntity.userOneToMany ? testCustomTableNameEntity.userOneToMany.login : ''}</dd>
            <dt>
              <Translate contentKey="travisNg2App.testCustomTableName.userManyToMany">User Many To Many</Translate>
            </dt>
            <dd>
              {testCustomTableNameEntity.userManyToManies
                ? testCustomTableNameEntity.userManyToManies.map((val, i) => (
                    <span key={val.id}>
                      <a>{val.login}</a>
                      {i === testCustomTableNameEntity.userManyToManies.length - 1 ? '' : ', '}
                    </span>
                  ))
                : null}{' '}
            </dd>
            <dt>
              <Translate contentKey="travisNg2App.testCustomTableName.userOneToOne">User One To One</Translate>
            </dt>
            <dd>{testCustomTableNameEntity.userOneToOne ? testCustomTableNameEntity.userOneToOne.login : ''}</dd>
            <dt>
              <Translate contentKey="travisNg2App.testCustomTableName.superMegaLargeTestEntity">Super Mega Large Test Entity</Translate>
            </dt>
            <dd>{testCustomTableNameEntity.superMegaLargeTestEntity ? testCustomTableNameEntity.superMegaLargeTestEntity.id : ''}</dd>
          </dl>
          <Button tag={Link} to="/test-custom-table-name" replace color="info">
            <FontAwesomeIcon icon="arrow-left" />{' '}
            <span className="d-none d-md-inline">
              <Translate contentKey="entity.action.back">Back</Translate>
            </span>
          </Button>
          &nbsp;
          <Button tag={Link} to={`/test-custom-table-name/${testCustomTableNameEntity.id}/edit`} replace color="primary">
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

const mapStateToProps = ({ testCustomTableName }: IRootState) => ({
  testCustomTableNameEntity: testCustomTableName.entity
});

const mapDispatchToProps = { getEntity };

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TestCustomTableNameDetail);
