import React from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import { Translate, ICrudGetAction, TextFormat } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IRootState } from 'app/shared/reducers';
import { getEntity } from './maps-id-user-profile-with-dto.reducer';
import { IMapsIdUserProfileWithDTO } from 'app/shared/model/maps-id-user-profile-with-dto.model';
import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';

export interface IMapsIdUserProfileWithDTODetailProps extends StateProps, DispatchProps, RouteComponentProps<{ id: string }> {}

export class MapsIdUserProfileWithDTODetail extends React.Component<IMapsIdUserProfileWithDTODetailProps> {
  componentDidMount() {
    this.props.getEntity(this.props.match.params.id);
  }

  render() {
    const { mapsIdUserProfileWithDTOEntity } = this.props;
    return (
      <Row>
        <Col md="8">
          <h2>
            <Translate contentKey="travisNg2App.mapsIdUserProfileWithDTO.detail.title">MapsIdUserProfileWithDTO</Translate> [
            <b>{mapsIdUserProfileWithDTOEntity.id}</b>]
          </h2>
          <dl className="jh-entity-details">
            <dt>
              <span id="dateOfBirth">
                <Translate contentKey="travisNg2App.mapsIdUserProfileWithDTO.dateOfBirth">Date Of Birth</Translate>
              </span>
            </dt>
            <dd>
              <TextFormat value={mapsIdUserProfileWithDTOEntity.dateOfBirth} type="date" format={APP_DATE_FORMAT} />
            </dd>
            <dt>
              <Translate contentKey="travisNg2App.mapsIdUserProfileWithDTO.user">User</Translate>
            </dt>
            <dd>{mapsIdUserProfileWithDTOEntity.userLogin ? mapsIdUserProfileWithDTOEntity.userLogin : ''}</dd>
          </dl>
          <Button tag={Link} to="/maps-id-user-profile-with-dto" replace color="info">
            <FontAwesomeIcon icon="arrow-left" />{' '}
            <span className="d-none d-md-inline">
              <Translate contentKey="entity.action.back">Back</Translate>
            </span>
          </Button>
          &nbsp;
          <Button tag={Link} to={`/maps-id-user-profile-with-dto/${mapsIdUserProfileWithDTOEntity.id}/edit`} replace color="primary">
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

const mapStateToProps = ({ mapsIdUserProfileWithDTO }: IRootState) => ({
  mapsIdUserProfileWithDTOEntity: mapsIdUserProfileWithDTO.entity
});

const mapDispatchToProps = { getEntity };

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MapsIdUserProfileWithDTODetail);
