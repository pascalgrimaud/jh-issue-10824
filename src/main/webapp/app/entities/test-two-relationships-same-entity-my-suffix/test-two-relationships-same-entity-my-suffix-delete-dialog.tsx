import React from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router-dom';
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap';
import { Translate, ICrudGetAction, ICrudDeleteAction } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { ITestTwoRelationshipsSameEntityMySuffix } from 'app/shared/model/test-two-relationships-same-entity-my-suffix.model';
import { IRootState } from 'app/shared/reducers';
import { getEntity, deleteEntity } from './test-two-relationships-same-entity-my-suffix.reducer';

export interface ITestTwoRelationshipsSameEntityMySuffixDeleteDialogProps
  extends StateProps,
    DispatchProps,
    RouteComponentProps<{ id: string }> {}

export class TestTwoRelationshipsSameEntityMySuffixDeleteDialog extends React.Component<
  ITestTwoRelationshipsSameEntityMySuffixDeleteDialogProps
> {
  componentDidMount() {
    this.props.getEntity(this.props.match.params.id);
  }

  confirmDelete = event => {
    this.props.deleteEntity(this.props.testTwoRelationshipsSameEntityEntity.id);
    this.handleClose(event);
  };

  handleClose = event => {
    event.stopPropagation();
    this.props.history.goBack();
  };

  render() {
    const { testTwoRelationshipsSameEntityEntity } = this.props;
    return (
      <Modal isOpen toggle={this.handleClose}>
        <ModalHeader toggle={this.handleClose}>
          <Translate contentKey="entity.delete.title">Confirm delete operation</Translate>
        </ModalHeader>
        <ModalBody id="travisNg2App.testTwoRelationshipsSameEntity.delete.question">
          <Translate
            contentKey="travisNg2App.testTwoRelationshipsSameEntity.delete.question"
            interpolate={{ id: testTwoRelationshipsSameEntityEntity.id }}
          >
            Are you sure you want to delete this TestTwoRelationshipsSameEntity?
          </Translate>
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={this.handleClose}>
            <FontAwesomeIcon icon="ban" />
            &nbsp;
            <Translate contentKey="entity.action.cancel">Cancel</Translate>
          </Button>
          <Button id="custom-confirm-delete-testTwoRelationshipsSameEntity" color="danger" onClick={this.confirmDelete}>
            <FontAwesomeIcon icon="trash" />
            &nbsp;
            <Translate contentKey="entity.action.delete">Delete</Translate>
          </Button>
        </ModalFooter>
      </Modal>
    );
  }
}

const mapStateToProps = ({ testTwoRelationshipsSameEntity }: IRootState) => ({
  testTwoRelationshipsSameEntityEntity: testTwoRelationshipsSameEntity.entity
});

const mapDispatchToProps = { getEntity, deleteEntity };

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TestTwoRelationshipsSameEntityMySuffixDeleteDialog);
