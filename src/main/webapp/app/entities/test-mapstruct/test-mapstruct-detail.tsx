import React from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import { Translate, ICrudGetAction } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IRootState } from 'app/shared/reducers';
import { getEntity } from './test-mapstruct.reducer';
import { ITestMapstruct } from 'app/shared/model/test-mapstruct.model';
import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';

export interface ITestMapstructDetailProps extends StateProps, DispatchProps, RouteComponentProps<{ id: string }> {}

export class TestMapstructDetail extends React.Component<ITestMapstructDetailProps> {
  componentDidMount() {
    this.props.getEntity(this.props.match.params.id);
  }

  render() {
    const { testMapstructEntity } = this.props;
    return (
      <Row>
        <Col md="8">
          <h2>
            <Translate contentKey="travisNg2App.testMapstruct.detail.title">TestMapstruct</Translate> [<b>{testMapstructEntity.id}</b>]
          </h2>
          <dl className="jh-entity-details">
            <dt>
              <Translate contentKey="travisNg2App.testMapstruct.userOneToMany">User One To Many</Translate>
            </dt>
            <dd>{testMapstructEntity.userOneToManyLogin ? testMapstructEntity.userOneToManyLogin : ''}</dd>
            <dt>
              <Translate contentKey="travisNg2App.testMapstruct.userManyToMany">User Many To Many</Translate>
            </dt>
            <dd>
              {testMapstructEntity.userManyToManies
                ? testMapstructEntity.userManyToManies.map((val, i) => (
                    <span key={val.id}>
                      <a>{val.login}</a>
                      {i === testMapstructEntity.userManyToManies.length - 1 ? '' : ', '}
                    </span>
                  ))
                : null}{' '}
            </dd>
            <dt>
              <Translate contentKey="travisNg2App.testMapstruct.userOneToOne">User One To One</Translate>
            </dt>
            <dd>{testMapstructEntity.userOneToOneLogin ? testMapstructEntity.userOneToOneLogin : ''}</dd>
          </dl>
          <Button tag={Link} to="/test-mapstruct" replace color="info">
            <FontAwesomeIcon icon="arrow-left" />{' '}
            <span className="d-none d-md-inline">
              <Translate contentKey="entity.action.back">Back</Translate>
            </span>
          </Button>
          &nbsp;
          <Button tag={Link} to={`/test-mapstruct/${testMapstructEntity.id}/edit`} replace color="primary">
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

const mapStateToProps = ({ testMapstruct }: IRootState) => ({
  testMapstructEntity: testMapstruct.entity
});

const mapDispatchToProps = { getEntity };

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TestMapstructDetail);
