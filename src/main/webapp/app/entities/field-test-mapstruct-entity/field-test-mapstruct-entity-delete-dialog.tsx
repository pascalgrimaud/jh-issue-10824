import React from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router-dom';
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap';
import { Translate, ICrudGetAction, ICrudDeleteAction } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IFieldTestMapstructEntity } from 'app/shared/model/field-test-mapstruct-entity.model';
import { IRootState } from 'app/shared/reducers';
import { getEntity, deleteEntity } from './field-test-mapstruct-entity.reducer';

export interface IFieldTestMapstructEntityDeleteDialogProps extends StateProps, DispatchProps, RouteComponentProps<{ id: string }> {}

export class FieldTestMapstructEntityDeleteDialog extends React.Component<IFieldTestMapstructEntityDeleteDialogProps> {
  componentDidMount() {
    this.props.getEntity(this.props.match.params.id);
  }

  confirmDelete = event => {
    this.props.deleteEntity(this.props.fieldTestMapstructEntityEntity.id);
    this.handleClose(event);
  };

  handleClose = event => {
    event.stopPropagation();
    this.props.history.goBack();
  };

  render() {
    const { fieldTestMapstructEntityEntity } = this.props;
    return (
      <Modal isOpen toggle={this.handleClose}>
        <ModalHeader toggle={this.handleClose}>
          <Translate contentKey="entity.delete.title">Confirm delete operation</Translate>
        </ModalHeader>
        <ModalBody id="travisNg2App.fieldTestMapstructEntity.delete.question">
          <Translate
            contentKey="travisNg2App.fieldTestMapstructEntity.delete.question"
            interpolate={{ id: fieldTestMapstructEntityEntity.id }}
          >
            Are you sure you want to delete this FieldTestMapstructEntity?
          </Translate>
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={this.handleClose}>
            <FontAwesomeIcon icon="ban" />
            &nbsp;
            <Translate contentKey="entity.action.cancel">Cancel</Translate>
          </Button>
          <Button id="custom-confirm-delete-fieldTestMapstructEntity" color="danger" onClick={this.confirmDelete}>
            <FontAwesomeIcon icon="trash" />
            &nbsp;
            <Translate contentKey="entity.action.delete">Delete</Translate>
          </Button>
        </ModalFooter>
      </Modal>
    );
  }
}

const mapStateToProps = ({ fieldTestMapstructEntity }: IRootState) => ({
  fieldTestMapstructEntityEntity: fieldTestMapstructEntity.entity
});

const mapDispatchToProps = { getEntity, deleteEntity };

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FieldTestMapstructEntityDeleteDialog);
