import React from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router-dom';
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap';
import { Translate, ICrudGetAction, ICrudDeleteAction } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IMapsIdUserProfileWithDTO } from 'app/shared/model/maps-id-user-profile-with-dto.model';
import { IRootState } from 'app/shared/reducers';
import { getEntity, deleteEntity } from './maps-id-user-profile-with-dto.reducer';

export interface IMapsIdUserProfileWithDTODeleteDialogProps extends StateProps, DispatchProps, RouteComponentProps<{ id: string }> {}

export class MapsIdUserProfileWithDTODeleteDialog extends React.Component<IMapsIdUserProfileWithDTODeleteDialogProps> {
  componentDidMount() {
    this.props.getEntity(this.props.match.params.id);
  }

  confirmDelete = event => {
    this.props.deleteEntity(this.props.mapsIdUserProfileWithDTOEntity.id);
    this.handleClose(event);
  };

  handleClose = event => {
    event.stopPropagation();
    this.props.history.goBack();
  };

  render() {
    const { mapsIdUserProfileWithDTOEntity } = this.props;
    return (
      <Modal isOpen toggle={this.handleClose}>
        <ModalHeader toggle={this.handleClose}>
          <Translate contentKey="entity.delete.title">Confirm delete operation</Translate>
        </ModalHeader>
        <ModalBody id="travisNg2App.mapsIdUserProfileWithDTO.delete.question">
          <Translate
            contentKey="travisNg2App.mapsIdUserProfileWithDTO.delete.question"
            interpolate={{ id: mapsIdUserProfileWithDTOEntity.id }}
          >
            Are you sure you want to delete this MapsIdUserProfileWithDTO?
          </Translate>
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={this.handleClose}>
            <FontAwesomeIcon icon="ban" />
            &nbsp;
            <Translate contentKey="entity.action.cancel">Cancel</Translate>
          </Button>
          <Button id="custom-confirm-delete-mapsIdUserProfileWithDTO" color="danger" onClick={this.confirmDelete}>
            <FontAwesomeIcon icon="trash" />
            &nbsp;
            <Translate contentKey="entity.action.delete">Delete</Translate>
          </Button>
        </ModalFooter>
      </Modal>
    );
  }
}

const mapStateToProps = ({ mapsIdUserProfileWithDTO }: IRootState) => ({
  mapsIdUserProfileWithDTOEntity: mapsIdUserProfileWithDTO.entity
});

const mapDispatchToProps = { getEntity, deleteEntity };

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MapsIdUserProfileWithDTODeleteDialog);
