import React from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router-dom';
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap';
import { Translate, ICrudGetAction, ICrudDeleteAction } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IFieldTestServiceClassEntity } from 'app/shared/model/field-test-service-class-entity.model';
import { IRootState } from 'app/shared/reducers';
import { getEntity, deleteEntity } from './field-test-service-class-entity.reducer';

export interface IFieldTestServiceClassEntityDeleteDialogProps extends StateProps, DispatchProps, RouteComponentProps<{ id: string }> {}

export class FieldTestServiceClassEntityDeleteDialog extends React.Component<IFieldTestServiceClassEntityDeleteDialogProps> {
  componentDidMount() {
    this.props.getEntity(this.props.match.params.id);
  }

  confirmDelete = event => {
    this.props.deleteEntity(this.props.fieldTestServiceClassEntityEntity.id);
    this.handleClose(event);
  };

  handleClose = event => {
    event.stopPropagation();
    this.props.history.goBack();
  };

  render() {
    const { fieldTestServiceClassEntityEntity } = this.props;
    return (
      <Modal isOpen toggle={this.handleClose}>
        <ModalHeader toggle={this.handleClose}>
          <Translate contentKey="entity.delete.title">Confirm delete operation</Translate>
        </ModalHeader>
        <ModalBody id="travisNg2App.fieldTestServiceClassEntity.delete.question">
          <Translate
            contentKey="travisNg2App.fieldTestServiceClassEntity.delete.question"
            interpolate={{ id: fieldTestServiceClassEntityEntity.id }}
          >
            Are you sure you want to delete this FieldTestServiceClassEntity?
          </Translate>
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={this.handleClose}>
            <FontAwesomeIcon icon="ban" />
            &nbsp;
            <Translate contentKey="entity.action.cancel">Cancel</Translate>
          </Button>
          <Button id="custom-confirm-delete-fieldTestServiceClassEntity" color="danger" onClick={this.confirmDelete}>
            <FontAwesomeIcon icon="trash" />
            &nbsp;
            <Translate contentKey="entity.action.delete">Delete</Translate>
          </Button>
        </ModalFooter>
      </Modal>
    );
  }
}

const mapStateToProps = ({ fieldTestServiceClassEntity }: IRootState) => ({
  fieldTestServiceClassEntityEntity: fieldTestServiceClassEntity.entity
});

const mapDispatchToProps = { getEntity, deleteEntity };

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FieldTestServiceClassEntityDeleteDialog);
