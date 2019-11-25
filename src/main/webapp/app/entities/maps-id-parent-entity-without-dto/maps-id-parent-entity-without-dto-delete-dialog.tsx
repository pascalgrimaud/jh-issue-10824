import React from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router-dom';
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap';
import { Translate, ICrudGetAction, ICrudDeleteAction } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IMapsIdParentEntityWithoutDTO } from 'app/shared/model/maps-id-parent-entity-without-dto.model';
import { IRootState } from 'app/shared/reducers';
import { getEntity, deleteEntity } from './maps-id-parent-entity-without-dto.reducer';

export interface IMapsIdParentEntityWithoutDTODeleteDialogProps extends StateProps, DispatchProps, RouteComponentProps<{ id: string }> {}

export class MapsIdParentEntityWithoutDTODeleteDialog extends React.Component<IMapsIdParentEntityWithoutDTODeleteDialogProps> {
  componentDidMount() {
    this.props.getEntity(this.props.match.params.id);
  }

  confirmDelete = event => {
    this.props.deleteEntity(this.props.mapsIdParentEntityWithoutDTOEntity.id);
    this.handleClose(event);
  };

  handleClose = event => {
    event.stopPropagation();
    this.props.history.goBack();
  };

  render() {
    const { mapsIdParentEntityWithoutDTOEntity } = this.props;
    return (
      <Modal isOpen toggle={this.handleClose}>
        <ModalHeader toggle={this.handleClose}>
          <Translate contentKey="entity.delete.title">Confirm delete operation</Translate>
        </ModalHeader>
        <ModalBody id="travisNg2App.mapsIdParentEntityWithoutDTO.delete.question">
          <Translate
            contentKey="travisNg2App.mapsIdParentEntityWithoutDTO.delete.question"
            interpolate={{ id: mapsIdParentEntityWithoutDTOEntity.id }}
          >
            Are you sure you want to delete this MapsIdParentEntityWithoutDTO?
          </Translate>
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={this.handleClose}>
            <FontAwesomeIcon icon="ban" />
            &nbsp;
            <Translate contentKey="entity.action.cancel">Cancel</Translate>
          </Button>
          <Button id="custom-confirm-delete-mapsIdParentEntityWithoutDTO" color="danger" onClick={this.confirmDelete}>
            <FontAwesomeIcon icon="trash" />
            &nbsp;
            <Translate contentKey="entity.action.delete">Delete</Translate>
          </Button>
        </ModalFooter>
      </Modal>
    );
  }
}

const mapStateToProps = ({ mapsIdParentEntityWithoutDTO }: IRootState) => ({
  mapsIdParentEntityWithoutDTOEntity: mapsIdParentEntityWithoutDTO.entity
});

const mapDispatchToProps = { getEntity, deleteEntity };

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MapsIdParentEntityWithoutDTODeleteDialog);
