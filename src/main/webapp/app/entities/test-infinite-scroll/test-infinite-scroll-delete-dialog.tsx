import React from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router-dom';
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap';
import { Translate, ICrudGetAction, ICrudDeleteAction } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { ITestInfiniteScroll } from 'app/shared/model/test-infinite-scroll.model';
import { IRootState } from 'app/shared/reducers';
import { getEntity, deleteEntity } from './test-infinite-scroll.reducer';

export interface ITestInfiniteScrollDeleteDialogProps extends StateProps, DispatchProps, RouteComponentProps<{ id: string }> {}

export class TestInfiniteScrollDeleteDialog extends React.Component<ITestInfiniteScrollDeleteDialogProps> {
  componentDidMount() {
    this.props.getEntity(this.props.match.params.id);
  }

  confirmDelete = event => {
    this.props.deleteEntity(this.props.testInfiniteScrollEntity.id);
    this.handleClose(event);
  };

  handleClose = event => {
    event.stopPropagation();
    this.props.history.goBack();
  };

  render() {
    const { testInfiniteScrollEntity } = this.props;
    return (
      <Modal isOpen toggle={this.handleClose}>
        <ModalHeader toggle={this.handleClose}>
          <Translate contentKey="entity.delete.title">Confirm delete operation</Translate>
        </ModalHeader>
        <ModalBody id="travisNg2App.testInfiniteScroll.delete.question">
          <Translate contentKey="travisNg2App.testInfiniteScroll.delete.question" interpolate={{ id: testInfiniteScrollEntity.id }}>
            Are you sure you want to delete this TestInfiniteScroll?
          </Translate>
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={this.handleClose}>
            <FontAwesomeIcon icon="ban" />
            &nbsp;
            <Translate contentKey="entity.action.cancel">Cancel</Translate>
          </Button>
          <Button id="custom-confirm-delete-testInfiniteScroll" color="danger" onClick={this.confirmDelete}>
            <FontAwesomeIcon icon="trash" />
            &nbsp;
            <Translate contentKey="entity.action.delete">Delete</Translate>
          </Button>
        </ModalFooter>
      </Modal>
    );
  }
}

const mapStateToProps = ({ testInfiniteScroll }: IRootState) => ({
  testInfiniteScrollEntity: testInfiniteScroll.entity
});

const mapDispatchToProps = { getEntity, deleteEntity };

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TestInfiniteScrollDeleteDialog);
