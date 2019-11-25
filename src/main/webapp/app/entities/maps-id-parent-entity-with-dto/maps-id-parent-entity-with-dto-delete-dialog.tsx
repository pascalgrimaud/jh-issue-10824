import React from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router-dom';
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap';
import { Translate, ICrudGetAction, ICrudDeleteAction } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IMapsIdParentEntityWithDTO } from 'app/shared/model/maps-id-parent-entity-with-dto.model';
import { IRootState } from 'app/shared/reducers';
import { getEntity, deleteEntity } from './maps-id-parent-entity-with-dto.reducer';

export interface IMapsIdParentEntityWithDTODeleteDialogProps extends StateProps, DispatchProps, RouteComponentProps<{ id: string }> {}

export class MapsIdParentEntityWithDTODeleteDialog extends React.Component<IMapsIdParentEntityWithDTODeleteDialogProps> {
  componentDidMount() {
    this.props.getEntity(this.props.match.params.id);
  }

  confirmDelete = event => {
    this.props.deleteEntity(this.props.mapsIdParentEntityWithDTOEntity.id);
    this.handleClose(event);
  };

  handleClose = event => {
    event.stopPropagation();
    this.props.history.goBack();
  };

  render() {
    const { mapsIdParentEntityWithDTOEntity } = this.props;
    return (
      <Modal isOpen toggle={this.handleClose}>
        <ModalHeader toggle={this.handleClose}>
          <Translate contentKey="entity.delete.title">Confirm delete operation</Translate>
        </ModalHeader>
        <ModalBody id="travisNg2App.mapsIdParentEntityWithDTO.delete.question">
          <Translate
            contentKey="travisNg2App.mapsIdParentEntityWithDTO.delete.question"
            interpolate={{ id: mapsIdParentEntityWithDTOEntity.id }}
          >
            Are you sure you want to delete this MapsIdParentEntityWithDTO?
          </Translate>
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={this.handleClose}>
            <FontAwesomeIcon icon="ban" />
            &nbsp;
            <Translate contentKey="entity.action.cancel">Cancel</Translate>
          </Button>
          <Button id="custom-confirm-delete-mapsIdParentEntityWithDTO" color="danger" onClick={this.confirmDelete}>
            <FontAwesomeIcon icon="trash" />
            &nbsp;
            <Translate contentKey="entity.action.delete">Delete</Translate>
          </Button>
        </ModalFooter>
      </Modal>
    );
  }
}

const mapStateToProps = ({ mapsIdParentEntityWithDTO }: IRootState) => ({
  mapsIdParentEntityWithDTOEntity: mapsIdParentEntityWithDTO.entity
});

const mapDispatchToProps = { getEntity, deleteEntity };

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MapsIdParentEntityWithDTODeleteDialog);
