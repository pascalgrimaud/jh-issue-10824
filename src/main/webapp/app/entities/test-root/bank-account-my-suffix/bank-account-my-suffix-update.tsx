import React from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col, Label } from 'reactstrap';
import { AvFeedback, AvForm, AvGroup, AvInput, AvField } from 'availity-reactstrap-validation';
import { Translate, translate, ICrudGetAction, ICrudGetAllAction, setFileData, openFile, byteSize, ICrudPutAction } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IRootState } from 'app/shared/reducers';

import { IUser } from 'app/shared/model/user.model';
import { getUsers } from 'app/modules/administration/user-management/user-management.reducer';
import { getEntity, updateEntity, createEntity, setBlob, reset } from './bank-account-my-suffix.reducer';
import { IBankAccountMySuffix } from 'app/shared/model/test-root/bank-account-my-suffix.model';
import { convertDateTimeFromServer, convertDateTimeToServer } from 'app/shared/util/date-utils';
import { mapIdList } from 'app/shared/util/entity-utils';

export interface IBankAccountMySuffixUpdateProps extends StateProps, DispatchProps, RouteComponentProps<{ id: string }> {}

export interface IBankAccountMySuffixUpdateState {
  isNew: boolean;
  userId: string;
}

export class BankAccountMySuffixUpdate extends React.Component<IBankAccountMySuffixUpdateProps, IBankAccountMySuffixUpdateState> {
  constructor(props) {
    super(props);
    this.state = {
      userId: '0',
      isNew: !this.props.match.params || !this.props.match.params.id
    };
  }

  componentWillUpdate(nextProps, nextState) {
    if (nextProps.updateSuccess !== this.props.updateSuccess && nextProps.updateSuccess) {
      this.handleClose();
    }
  }

  componentDidMount() {
    if (this.state.isNew) {
      this.props.reset();
    } else {
      this.props.getEntity(this.props.match.params.id);
    }

    this.props.getUsers();
  }

  onBlobChange = (isAnImage, name) => event => {
    setFileData(event, (contentType, data) => this.props.setBlob(name, data, contentType), isAnImage);
  };

  clearBlob = name => () => {
    this.props.setBlob(name, undefined, undefined);
  };

  saveEntity = (event, errors, values) => {
    values.lastOperationDate = convertDateTimeToServer(values.lastOperationDate);

    if (errors.length === 0) {
      const { bankAccountEntity } = this.props;
      const entity = {
        ...bankAccountEntity,
        ...values
      };

      if (this.state.isNew) {
        this.props.createEntity(entity);
      } else {
        this.props.updateEntity(entity);
      }
    }
  };

  handleClose = () => {
    this.props.history.push('/bank-account-my-suffix');
  };

  render() {
    const { bankAccountEntity, users, loading, updating } = this.props;
    const { isNew } = this.state;

    const { attachment, attachmentContentType, description } = bankAccountEntity;

    return (
      <div>
        <Row className="justify-content-center">
          <Col md="8">
            <h2 id="travisNg2App.testRootBankAccount.home.createOrEditLabel">
              <Translate contentKey="travisNg2App.testRootBankAccount.home.createOrEditLabel">Create or edit a BankAccount</Translate>
            </h2>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col md="8">
            {loading ? (
              <p>Loading...</p>
            ) : (
              <AvForm model={isNew ? {} : bankAccountEntity} onSubmit={this.saveEntity}>
                {!isNew ? (
                  <AvGroup>
                    <Label for="bank-account-my-suffix-id">
                      <Translate contentKey="global.field.id">ID</Translate>
                    </Label>
                    <AvInput id="bank-account-my-suffix-id" type="text" className="form-control" name="id" required readOnly />
                  </AvGroup>
                ) : null}
                <AvGroup>
                  <Label id="nameLabel" for="bank-account-my-suffix-name">
                    <Translate contentKey="travisNg2App.testRootBankAccount.name">Name</Translate>
                  </Label>
                  <AvField
                    id="bank-account-my-suffix-name"
                    type="text"
                    name="name"
                    validate={{
                      required: { value: true, errorMessage: translate('entity.validation.required') }
                    }}
                  />
                </AvGroup>
                <AvGroup>
                  <Label id="guidLabel" for="bank-account-my-suffix-guid">
                    <Translate contentKey="travisNg2App.testRootBankAccount.guid">Guid</Translate>
                  </Label>
                  <AvField id="bank-account-my-suffix-guid" type="text" name="guid" />
                </AvGroup>
                <AvGroup>
                  <Label id="bankNumberLabel" for="bank-account-my-suffix-bankNumber">
                    <Translate contentKey="travisNg2App.testRootBankAccount.bankNumber">Bank Number</Translate>
                  </Label>
                  <AvField id="bank-account-my-suffix-bankNumber" type="string" className="form-control" name="bankNumber" />
                </AvGroup>
                <AvGroup>
                  <Label id="agencyNumberLabel" for="bank-account-my-suffix-agencyNumber">
                    <Translate contentKey="travisNg2App.testRootBankAccount.agencyNumber">Agency Number</Translate>
                  </Label>
                  <AvField id="bank-account-my-suffix-agencyNumber" type="string" className="form-control" name="agencyNumber" />
                </AvGroup>
                <AvGroup>
                  <Label id="lastOperationDurationLabel" for="bank-account-my-suffix-lastOperationDuration">
                    <Translate contentKey="travisNg2App.testRootBankAccount.lastOperationDuration">Last Operation Duration</Translate>
                  </Label>
                  <AvField
                    id="bank-account-my-suffix-lastOperationDuration"
                    type="string"
                    className="form-control"
                    name="lastOperationDuration"
                  />
                </AvGroup>
                <AvGroup>
                  <Label id="meanOperationDurationLabel" for="bank-account-my-suffix-meanOperationDuration">
                    <Translate contentKey="travisNg2App.testRootBankAccount.meanOperationDuration">Mean Operation Duration</Translate>
                  </Label>
                  <AvField
                    id="bank-account-my-suffix-meanOperationDuration"
                    type="string"
                    className="form-control"
                    name="meanOperationDuration"
                  />
                </AvGroup>
                <AvGroup>
                  <Label id="meanQueueDurationLabel" for="bank-account-my-suffix-meanQueueDuration">
                    <Translate contentKey="travisNg2App.testRootBankAccount.meanQueueDuration">Mean Queue Duration</Translate>
                  </Label>
                  <AvField id="bank-account-my-suffix-meanQueueDuration" type="text" name="meanQueueDuration" />
                </AvGroup>
                <AvGroup>
                  <Label id="balanceLabel" for="bank-account-my-suffix-balance">
                    <Translate contentKey="travisNg2App.testRootBankAccount.balance">Balance</Translate>
                  </Label>
                  <AvField
                    id="bank-account-my-suffix-balance"
                    type="text"
                    name="balance"
                    validate={{
                      required: { value: true, errorMessage: translate('entity.validation.required') },
                      number: { value: true, errorMessage: translate('entity.validation.number') }
                    }}
                  />
                </AvGroup>
                <AvGroup>
                  <Label id="openingDayLabel" for="bank-account-my-suffix-openingDay">
                    <Translate contentKey="travisNg2App.testRootBankAccount.openingDay">Opening Day</Translate>
                  </Label>
                  <AvField id="bank-account-my-suffix-openingDay" type="date" className="form-control" name="openingDay" />
                </AvGroup>
                <AvGroup>
                  <Label id="lastOperationDateLabel" for="bank-account-my-suffix-lastOperationDate">
                    <Translate contentKey="travisNg2App.testRootBankAccount.lastOperationDate">Last Operation Date</Translate>
                  </Label>
                  <AvInput
                    id="bank-account-my-suffix-lastOperationDate"
                    type="datetime-local"
                    className="form-control"
                    name="lastOperationDate"
                    placeholder={'YYYY-MM-DD HH:mm'}
                    value={isNew ? null : convertDateTimeFromServer(this.props.bankAccountEntity.lastOperationDate)}
                  />
                </AvGroup>
                <AvGroup>
                  <Label id="activeLabel" check>
                    <AvInput id="bank-account-my-suffix-active" type="checkbox" className="form-control" name="active" />
                    <Translate contentKey="travisNg2App.testRootBankAccount.active">Active</Translate>
                  </Label>
                </AvGroup>
                <AvGroup>
                  <Label id="accountTypeLabel" for="bank-account-my-suffix-accountType">
                    <Translate contentKey="travisNg2App.testRootBankAccount.accountType">Account Type</Translate>
                  </Label>
                  <AvInput
                    id="bank-account-my-suffix-accountType"
                    type="select"
                    className="form-control"
                    name="accountType"
                    value={(!isNew && bankAccountEntity.accountType) || 'CHECKING'}
                  >
                    <option value="CHECKING">{translate('travisNg2App.BankAccountType.CHECKING')}</option>
                    <option value="SAVINGS">{translate('travisNg2App.BankAccountType.SAVINGS')}</option>
                    <option value="LOAN">{translate('travisNg2App.BankAccountType.LOAN')}</option>
                  </AvInput>
                </AvGroup>
                <AvGroup>
                  <AvGroup>
                    <Label id="attachmentLabel" for="attachment">
                      <Translate contentKey="travisNg2App.testRootBankAccount.attachment">Attachment</Translate>
                    </Label>
                    <br />
                    {attachment ? (
                      <div>
                        <a onClick={openFile(attachmentContentType, attachment)}>
                          <Translate contentKey="entity.action.open">Open</Translate>
                        </a>
                        <br />
                        <Row>
                          <Col md="11">
                            <span>
                              {attachmentContentType}, {byteSize(attachment)}
                            </span>
                          </Col>
                          <Col md="1">
                            <Button color="danger" onClick={this.clearBlob('attachment')}>
                              <FontAwesomeIcon icon="times-circle" />
                            </Button>
                          </Col>
                        </Row>
                      </div>
                    ) : null}
                    <input id="file_attachment" type="file" onChange={this.onBlobChange(false, 'attachment')} />
                    <AvInput type="hidden" name="attachment" value={attachment} />
                  </AvGroup>
                </AvGroup>
                <AvGroup>
                  <Label id="descriptionLabel" for="bank-account-my-suffix-description">
                    <Translate contentKey="travisNg2App.testRootBankAccount.description">Description</Translate>
                  </Label>
                  <AvInput id="bank-account-my-suffix-description" type="textarea" name="description" />
                </AvGroup>
                <AvGroup>
                  <Label for="bank-account-my-suffix-user">
                    <Translate contentKey="travisNg2App.testRootBankAccount.user">User</Translate>
                  </Label>
                  <AvInput id="bank-account-my-suffix-user" type="select" className="form-control" name="userId">
                    <option value="" key="0" />
                    {users
                      ? users.map(otherEntity => (
                          <option value={otherEntity.id} key={otherEntity.id}>
                            {otherEntity.login}
                          </option>
                        ))
                      : null}
                  </AvInput>
                </AvGroup>
                <Button tag={Link} id="cancel-save" to="/bank-account-my-suffix" replace color="info">
                  <FontAwesomeIcon icon="arrow-left" />
                  &nbsp;
                  <span className="d-none d-md-inline">
                    <Translate contentKey="entity.action.back">Back</Translate>
                  </span>
                </Button>
                &nbsp;
                <Button color="primary" id="save-entity" type="submit" disabled={updating}>
                  <FontAwesomeIcon icon="save" />
                  &nbsp;
                  <Translate contentKey="entity.action.save">Save</Translate>
                </Button>
              </AvForm>
            )}
          </Col>
        </Row>
      </div>
    );
  }
}

const mapStateToProps = (storeState: IRootState) => ({
  users: storeState.userManagement.users,
  bankAccountEntity: storeState.bankAccount.entity,
  loading: storeState.bankAccount.loading,
  updating: storeState.bankAccount.updating,
  updateSuccess: storeState.bankAccount.updateSuccess
});

const mapDispatchToProps = {
  getUsers,
  getEntity,
  updateEntity,
  setBlob,
  createEntity,
  reset
};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BankAccountMySuffixUpdate);
