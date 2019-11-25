import React from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import { Translate, ICrudGetAction } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IRootState } from 'app/shared/reducers';
import { getEntity } from './label.reducer';
import { ILabel } from 'app/shared/model/test-root/label.model';
import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';

export interface ILabelDetailProps extends StateProps, DispatchProps, RouteComponentProps<{ id: string }> {}

export class LabelDetail extends React.Component<ILabelDetailProps> {
  componentDidMount() {
    this.props.getEntity(this.props.match.params.id);
  }

  render() {
    const { labelEntity } = this.props;
    return (
      <Row>
        <Col md="8">
          <h2>
            <Translate contentKey="travisNg2App.testRootLabel.detail.title">Label</Translate> [<b>{labelEntity.id}</b>]
          </h2>
          <dl className="jh-entity-details">
            <dt>
              <span id="labelName">
                <Translate contentKey="travisNg2App.testRootLabel.labelName">Label Name</Translate>
              </span>
            </dt>
            <dd>{labelEntity.labelName}</dd>
          </dl>
          <Button tag={Link} to="/label" replace color="info">
            <FontAwesomeIcon icon="arrow-left" />{' '}
            <span className="d-none d-md-inline">
              <Translate contentKey="entity.action.back">Back</Translate>
            </span>
          </Button>
          &nbsp;
        </Col>
      </Row>
    );
  }
}

const mapStateToProps = ({ label }: IRootState) => ({
  labelEntity: label.entity
});

const mapDispatchToProps = { getEntity };

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LabelDetail);
