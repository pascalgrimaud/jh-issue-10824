import React from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router-dom';
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap';
import { Translate, ICrudGetAction, ICrudDeleteAction } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IMapsIdChildEntityWithDTO } from 'app/shared/model/maps-id-child-entity-with-dto.model';
import { IRootState } from 'app/shared/reducers';
import { getEntity, deleteEntity } from './maps-id-child-entity-with-dto.reducer';

export interface IMapsIdChildEntityWithDTODeleteDialogProps extends StateProps, DispatchProps, RouteComponentProps<{ id: string }> {}

export class MapsIdChildEntityWithDTODeleteDialog extends React.Component<IMapsIdChildEntityWithDTODeleteDialogProps> {
  componentDidMount() {
    this.props.getEntity(this.props.match.params.id);
  }

  confirmDelete = event => {
    this.props.deleteEntity(this.props.mapsIdChildEntityWithDTOEntity.id);
    this.handleClose(event);
  };

  handleClose = event => {
    event.stopPropagation();
    this.props.history.goBack();
  };

  render() {
    const { mapsIdChildEntityWithDTOEntity } = this.props;
    return (
      <Modal isOpen toggle={this.handleClose}>
        <ModalHeader toggle={this.handleClose}>
          <Translate contentKey="entity.delete.title">Confirm delete operation</Translate>
        </ModalHeader>
        <ModalBody id="travisNg2App.mapsIdChildEntityWithDTO.delete.question">
          <Translate
            contentKey="travisNg2App.mapsIdChildEntityWithDTO.delete.question"
            interpolate={{ id: mapsIdChildEntityWithDTOEntity.id }}
          >
            Are you sure you want to delete this MapsIdChildEntityWithDTO?
          </Translate>
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={this.handleClose}>
            <FontAwesomeIcon icon="ban" />
            &nbsp;
            <Translate contentKey="entity.action.cancel">Cancel</Translate>
          </Button>
          <Button id="custom-confirm-delete-mapsIdChildEntityWithDTO" color="danger" onClick={this.confirmDelete}>
            <FontAwesomeIcon icon="trash" />
            &nbsp;
            <Translate contentKey="entity.action.delete">Delete</Translate>
          </Button>
        </ModalFooter>
      </Modal>
    );
  }
}

const mapStateToProps = ({ mapsIdChildEntityWithDTO }: IRootState) => ({
  mapsIdChildEntityWithDTOEntity: mapsIdChildEntityWithDTO.entity
});

const mapDispatchToProps = { getEntity, deleteEntity };

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MapsIdChildEntityWithDTODeleteDialog);
