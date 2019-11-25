import React from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import { Translate, ICrudGetAction } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IRootState } from 'app/shared/reducers';
import { getEntity } from './division.reducer';
import { IDivision } from 'app/shared/model/test-root/division.model';
import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';

export interface IDivisionDetailProps extends StateProps, DispatchProps, RouteComponentProps<{ id: string }> {}

export class DivisionDetail extends React.Component<IDivisionDetailProps> {
  componentDidMount() {
    this.props.getEntity(this.props.match.params.id);
  }

  render() {
    const { divisionEntity } = this.props;
    return (
      <Row>
        <Col md="8">
          <h2>
            <Translate contentKey="travisNg2App.testRootDivision.detail.title">Division</Translate> [<b>{divisionEntity.id}</b>]
          </h2>
          <dl className="jh-entity-details">
            <dt>
              <span id="name">
                <Translate contentKey="travisNg2App.testRootDivision.name">Name</Translate>
              </span>
            </dt>
            <dd>{divisionEntity.name}</dd>
            <dt>
              <span id="shortName">
                <Translate contentKey="travisNg2App.testRootDivision.shortName">Short Name</Translate>
              </span>
            </dt>
            <dd>{divisionEntity.shortName}</dd>
            <dt>
              <span id="numberOfPeople">
                <Translate contentKey="travisNg2App.testRootDivision.numberOfPeople">Number Of People</Translate>
              </span>
            </dt>
            <dd>{divisionEntity.numberOfPeople}</dd>
            <dt>
              <span id="divisionType">
                <Translate contentKey="travisNg2App.testRootDivision.divisionType">Division Type</Translate>
              </span>
            </dt>
            <dd>{divisionEntity.divisionType}</dd>
            <dt>
              <span id="colorBackground">
                <Translate contentKey="travisNg2App.testRootDivision.colorBackground">Color Background</Translate>
              </span>
            </dt>
            <dd>{divisionEntity.colorBackground}</dd>
            <dt>
              <span id="colorText">
                <Translate contentKey="travisNg2App.testRootDivision.colorText">Color Text</Translate>
              </span>
            </dt>
            <dd>{divisionEntity.colorText}</dd>
          </dl>
          <Button tag={Link} to="/division" replace color="info">
            <FontAwesomeIcon icon="arrow-left" />{' '}
            <span className="d-none d-md-inline">
              <Translate contentKey="entity.action.back">Back</Translate>
            </span>
          </Button>
          &nbsp;
          <Button tag={Link} to={`/division/${divisionEntity.id}/edit`} replace color="primary">
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

const mapStateToProps = ({ division }: IRootState) => ({
  divisionEntity: division.entity
});

const mapDispatchToProps = { getEntity };

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DivisionDetail);
