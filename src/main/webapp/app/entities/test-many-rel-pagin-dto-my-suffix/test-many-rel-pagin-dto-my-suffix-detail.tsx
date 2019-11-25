import React from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import { Translate, ICrudGetAction } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IRootState } from 'app/shared/reducers';
import { getEntity } from './test-many-rel-pagin-dto-my-suffix.reducer';
import { ITestManyRelPaginDTOMySuffix } from 'app/shared/model/test-many-rel-pagin-dto-my-suffix.model';
import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';

export interface ITestManyRelPaginDTOMySuffixDetailProps extends StateProps, DispatchProps, RouteComponentProps<{ id: string }> {}

export class TestManyRelPaginDTOMySuffixDetail extends React.Component<ITestManyRelPaginDTOMySuffixDetailProps> {
  componentDidMount() {
    this.props.getEntity(this.props.match.params.id);
  }

  render() {
    const { testManyRelPaginDTOEntity } = this.props;
    return (
      <Row>
        <Col md="8">
          <h2>
            <Translate contentKey="travisNg2App.testManyRelPaginDTO.detail.title">TestManyRelPaginDTO</Translate> [
            <b>{testManyRelPaginDTOEntity.id}</b>]
          </h2>
          <dl className="jh-entity-details">
            <dt>
              <Translate contentKey="travisNg2App.testManyRelPaginDTO.testMapstruct">Test Mapstruct</Translate>
            </dt>
            <dd>
              {testManyRelPaginDTOEntity.testMapstructs
                ? testManyRelPaginDTOEntity.testMapstructs.map((val, i) => (
                    <span key={val.id}>
                      <a>{val.id}</a>
                      {i === testManyRelPaginDTOEntity.testMapstructs.length - 1 ? '' : ', '}
                    </span>
                  ))
                : null}
            </dd>
          </dl>
          <Button tag={Link} to="/test-many-rel-pagin-dto-my-suffix" replace color="info">
            <FontAwesomeIcon icon="arrow-left" />{' '}
            <span className="d-none d-md-inline">
              <Translate contentKey="entity.action.back">Back</Translate>
            </span>
          </Button>
          &nbsp;
          <Button tag={Link} to={`/test-many-rel-pagin-dto-my-suffix/${testManyRelPaginDTOEntity.id}/edit`} replace color="primary">
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

const mapStateToProps = ({ testManyRelPaginDTO }: IRootState) => ({
  testManyRelPaginDTOEntity: testManyRelPaginDTO.entity
});

const mapDispatchToProps = { getEntity };

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TestManyRelPaginDTOMySuffixDetail);
