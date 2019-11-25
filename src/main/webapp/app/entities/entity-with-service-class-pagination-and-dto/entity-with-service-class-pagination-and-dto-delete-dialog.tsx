import React from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router-dom';
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap';
import { Translate, ICrudGetAction, ICrudDeleteAction } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IEntityWithServiceClassPaginationAndDTO } from 'app/shared/model/entity-with-service-class-pagination-and-dto.model';
import { IRootState } from 'app/shared/reducers';
import { getEntity, deleteEntity } from './entity-with-service-class-pagination-and-dto.reducer';

export interface IEntityWithServiceClassPaginationAndDTODeleteDialogProps
  extends StateProps,
    DispatchProps,
    RouteComponentProps<{ id: string }> {}

export class EntityWithServiceClassPaginationAndDTODeleteDialog extends React.Component<
  IEntityWithServiceClassPaginationAndDTODeleteDialogProps
> {
  componentDidMount() {
    this.props.getEntity(this.props.match.params.id);
  }

  confirmDelete = event => {
    this.props.deleteEntity(this.props.entityWithServiceClassPaginationAndDTOEntity.id);
    this.handleClose(event);
  };

  handleClose = event => {
    event.stopPropagation();
    this.props.history.goBack();
  };

  render() {
    const { entityWithServiceClassPaginationAndDTOEntity } = this.props;
    return (
      <Modal isOpen toggle={this.handleClose}>
        <ModalHeader toggle={this.handleClose}>
          <Translate contentKey="entity.delete.title">Confirm delete operation</Translate>
        </ModalHeader>
        <ModalBody id="travisNg2App.entityWithServiceClassPaginationAndDTO.delete.question">
          <Translate
            contentKey="travisNg2App.entityWithServiceClassPaginationAndDTO.delete.question"
            interpolate={{ id: entityWithServiceClassPaginationAndDTOEntity.id }}
          >
            Are you sure you want to delete this EntityWithServiceClassPaginationAndDTO?
          </Translate>
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={this.handleClose}>
            <FontAwesomeIcon icon="ban" />
            &nbsp;
            <Translate contentKey="entity.action.cancel">Cancel</Translate>
          </Button>
          <Button id="custom-confirm-delete-entityWithServiceClassPaginationAndDTO" color="danger" onClick={this.confirmDelete}>
            <FontAwesomeIcon icon="trash" />
            &nbsp;
            <Translate contentKey="entity.action.delete">Delete</Translate>
          </Button>
        </ModalFooter>
      </Modal>
    );
  }
}

const mapStateToProps = ({ entityWithServiceClassPaginationAndDTO }: IRootState) => ({
  entityWithServiceClassPaginationAndDTOEntity: entityWithServiceClassPaginationAndDTO.entity
});

const mapDispatchToProps = { getEntity, deleteEntity };

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EntityWithServiceClassPaginationAndDTODeleteDialog);
