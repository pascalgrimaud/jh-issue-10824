import React from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router-dom';
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap';
import { Translate, ICrudGetAction, ICrudDeleteAction } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IFieldTestServiceImplEntity } from 'app/shared/model/field-test-service-impl-entity.model';
import { IRootState } from 'app/shared/reducers';
import { getEntity, deleteEntity } from './field-test-service-impl-entity.reducer';

export interface IFieldTestServiceImplEntityDeleteDialogProps extends StateProps, DispatchProps, RouteComponentProps<{ id: string }> {}

export class FieldTestServiceImplEntityDeleteDialog extends React.Component<IFieldTestServiceImplEntityDeleteDialogProps> {
  componentDidMount() {
    this.props.getEntity(this.props.match.params.id);
  }

  confirmDelete = event => {
    this.props.deleteEntity(this.props.fieldTestServiceImplEntityEntity.id);
    this.handleClose(event);
  };

  handleClose = event => {
    event.stopPropagation();
    this.props.history.goBack();
  };

  render() {
    const { fieldTestServiceImplEntityEntity } = this.props;
    return (
      <Modal isOpen toggle={this.handleClose}>
        <ModalHeader toggle={this.handleClose}>
          <Translate contentKey="entity.delete.title">Confirm delete operation</Translate>
        </ModalHeader>
        <ModalBody id="travisNg2App.fieldTestServiceImplEntity.delete.question">
          <Translate
            contentKey="travisNg2App.fieldTestServiceImplEntity.delete.question"
            interpolate={{ id: fieldTestServiceImplEntityEntity.id }}
          >
            Are you sure you want to delete this FieldTestServiceImplEntity?
          </Translate>
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={this.handleClose}>
            <FontAwesomeIcon icon="ban" />
            &nbsp;
            <Translate contentKey="entity.action.cancel">Cancel</Translate>
          </Button>
          <Button id="custom-confirm-delete-fieldTestServiceImplEntity" color="danger" onClick={this.confirmDelete}>
            <FontAwesomeIcon icon="trash" />
            &nbsp;
            <Translate contentKey="entity.action.delete">Delete</Translate>
          </Button>
        </ModalFooter>
      </Modal>
    );
  }
}

const mapStateToProps = ({ fieldTestServiceImplEntity }: IRootState) => ({
  fieldTestServiceImplEntityEntity: fieldTestServiceImplEntity.entity
});

const mapDispatchToProps = { getEntity, deleteEntity };

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FieldTestServiceImplEntityDeleteDialog);
