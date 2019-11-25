import React from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col, Label } from 'reactstrap';
import { AvFeedback, AvForm, AvGroup, AvInput, AvField } from 'availity-reactstrap-validation';
import { Translate, translate, ICrudGetAction, ICrudGetAllAction, setFileData, openFile, byteSize, ICrudPutAction } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IRootState } from 'app/shared/reducers';

import { getEntity, updateEntity, createEntity, setBlob, reset } from './field-test-pagination-entity.reducer';
import { IFieldTestPaginationEntity } from 'app/shared/model/field-test-pagination-entity.model';
import { convertDateTimeFromServer, convertDateTimeToServer } from 'app/shared/util/date-utils';
import { mapIdList } from 'app/shared/util/entity-utils';

export interface IFieldTestPaginationEntityUpdateProps extends StateProps, DispatchProps, RouteComponentProps<{ id: string }> {}

export interface IFieldTestPaginationEntityUpdateState {
  isNew: boolean;
}

export class FieldTestPaginationEntityUpdate extends React.Component<
  IFieldTestPaginationEntityUpdateProps,
  IFieldTestPaginationEntityUpdateState
> {
  constructor(props) {
    super(props);
    this.state = {
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
  }

  onBlobChange = (isAnImage, name) => event => {
    setFileData(event, (contentType, data) => this.props.setBlob(name, data, contentType), isAnImage);
  };

  clearBlob = name => () => {
    this.props.setBlob(name, undefined, undefined);
  };

  saveEntity = (event, errors, values) => {
    values.instantAlice = convertDateTimeToServer(values.instantAlice);
    values.instanteRequiredAlice = convertDateTimeToServer(values.instanteRequiredAlice);
    values.zonedDateTimeAlice = convertDateTimeToServer(values.zonedDateTimeAlice);
    values.zonedDateTimeRequiredAlice = convertDateTimeToServer(values.zonedDateTimeRequiredAlice);

    if (errors.length === 0) {
      const { fieldTestPaginationEntityEntity } = this.props;
      const entity = {
        ...fieldTestPaginationEntityEntity,
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
    this.props.history.push('/field-test-pagination-entity');
  };

  render() {
    const { fieldTestPaginationEntityEntity, loading, updating } = this.props;
    const { isNew } = this.state;

    const {
      byteImageAlice,
      byteImageAliceContentType,
      byteImageRequiredAlice,
      byteImageRequiredAliceContentType,
      byteImageMinbytesAlice,
      byteImageMinbytesAliceContentType,
      byteImageMaxbytesAlice,
      byteImageMaxbytesAliceContentType,
      byteAnyAlice,
      byteAnyAliceContentType,
      byteAnyRequiredAlice,
      byteAnyRequiredAliceContentType,
      byteAnyMinbytesAlice,
      byteAnyMinbytesAliceContentType,
      byteAnyMaxbytesAlice,
      byteAnyMaxbytesAliceContentType,
      byteTextAlice,
      byteTextRequiredAlice
    } = fieldTestPaginationEntityEntity;

    return (
      <div>
        <Row className="justify-content-center">
          <Col md="8">
            <h2 id="travisNg2App.fieldTestPaginationEntity.home.createOrEditLabel">
              <Translate contentKey="travisNg2App.fieldTestPaginationEntity.home.createOrEditLabel">
                Create or edit a FieldTestPaginationEntity
              </Translate>
            </h2>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col md="8">
            {loading ? (
              <p>Loading...</p>
            ) : (
              <AvForm model={isNew ? {} : fieldTestPaginationEntityEntity} onSubmit={this.saveEntity}>
                {!isNew ? (
                  <AvGroup>
                    <Label for="field-test-pagination-entity-id">
                      <Translate contentKey="global.field.id">ID</Translate>
                    </Label>
                    <AvInput id="field-test-pagination-entity-id" type="text" className="form-control" name="id" required readOnly />
                  </AvGroup>
                ) : null}
                <AvGroup>
                  <Label id="stringAliceLabel" for="field-test-pagination-entity-stringAlice">
                    <Translate contentKey="travisNg2App.fieldTestPaginationEntity.stringAlice">String Alice</Translate>
                  </Label>
                  <AvField id="field-test-pagination-entity-stringAlice" type="text" name="stringAlice" />
                </AvGroup>
                <AvGroup>
                  <Label id="stringRequiredAliceLabel" for="field-test-pagination-entity-stringRequiredAlice">
                    <Translate contentKey="travisNg2App.fieldTestPaginationEntity.stringRequiredAlice">String Required Alice</Translate>
                  </Label>
                  <AvField
                    id="field-test-pagination-entity-stringRequiredAlice"
                    type="text"
                    name="stringRequiredAlice"
                    validate={{
                      required: { value: true, errorMessage: translate('entity.validation.required') }
                    }}
                  />
                </AvGroup>
                <AvGroup>
                  <Label id="stringMinlengthAliceLabel" for="field-test-pagination-entity-stringMinlengthAlice">
                    <Translate contentKey="travisNg2App.fieldTestPaginationEntity.stringMinlengthAlice">String Minlength Alice</Translate>
                  </Label>
                  <AvField
                    id="field-test-pagination-entity-stringMinlengthAlice"
                    type="text"
                    name="stringMinlengthAlice"
                    validate={{
                      minLength: { value: 0, errorMessage: translate('entity.validation.minlength', { min: 0 }) }
                    }}
                  />
                </AvGroup>
                <AvGroup>
                  <Label id="stringMaxlengthAliceLabel" for="field-test-pagination-entity-stringMaxlengthAlice">
                    <Translate contentKey="travisNg2App.fieldTestPaginationEntity.stringMaxlengthAlice">String Maxlength Alice</Translate>
                  </Label>
                  <AvField
                    id="field-test-pagination-entity-stringMaxlengthAlice"
                    type="text"
                    name="stringMaxlengthAlice"
                    validate={{
                      maxLength: { value: 20, errorMessage: translate('entity.validation.maxlength', { max: 20 }) }
                    }}
                  />
                </AvGroup>
                <AvGroup>
                  <Label id="stringPatternAliceLabel" for="field-test-pagination-entity-stringPatternAlice">
                    <Translate contentKey="travisNg2App.fieldTestPaginationEntity.stringPatternAlice">String Pattern Alice</Translate>
                  </Label>
                  <AvField
                    id="field-test-pagination-entity-stringPatternAlice"
                    type="text"
                    name="stringPatternAlice"
                    validate={{
                      pattern: {
                        value: '^[a-zA-Z0-9]*$',
                        errorMessage: translate('entity.validation.pattern', { pattern: '^[a-zA-Z0-9]*$' })
                      }
                    }}
                  />
                </AvGroup>
                <AvGroup>
                  <Label id="integerAliceLabel" for="field-test-pagination-entity-integerAlice">
                    <Translate contentKey="travisNg2App.fieldTestPaginationEntity.integerAlice">Integer Alice</Translate>
                  </Label>
                  <AvField id="field-test-pagination-entity-integerAlice" type="string" className="form-control" name="integerAlice" />
                </AvGroup>
                <AvGroup>
                  <Label id="integerRequiredAliceLabel" for="field-test-pagination-entity-integerRequiredAlice">
                    <Translate contentKey="travisNg2App.fieldTestPaginationEntity.integerRequiredAlice">Integer Required Alice</Translate>
                  </Label>
                  <AvField
                    id="field-test-pagination-entity-integerRequiredAlice"
                    type="string"
                    className="form-control"
                    name="integerRequiredAlice"
                    validate={{
                      required: { value: true, errorMessage: translate('entity.validation.required') },
                      number: { value: true, errorMessage: translate('entity.validation.number') }
                    }}
                  />
                </AvGroup>
                <AvGroup>
                  <Label id="integerMinAliceLabel" for="field-test-pagination-entity-integerMinAlice">
                    <Translate contentKey="travisNg2App.fieldTestPaginationEntity.integerMinAlice">Integer Min Alice</Translate>
                  </Label>
                  <AvField
                    id="field-test-pagination-entity-integerMinAlice"
                    type="string"
                    className="form-control"
                    name="integerMinAlice"
                    validate={{
                      min: { value: 0, errorMessage: translate('entity.validation.min', { min: 0 }) },
                      number: { value: true, errorMessage: translate('entity.validation.number') }
                    }}
                  />
                </AvGroup>
                <AvGroup>
                  <Label id="integerMaxAliceLabel" for="field-test-pagination-entity-integerMaxAlice">
                    <Translate contentKey="travisNg2App.fieldTestPaginationEntity.integerMaxAlice">Integer Max Alice</Translate>
                  </Label>
                  <AvField
                    id="field-test-pagination-entity-integerMaxAlice"
                    type="string"
                    className="form-control"
                    name="integerMaxAlice"
                    validate={{
                      max: { value: 100, errorMessage: translate('entity.validation.max', { max: 100 }) },
                      number: { value: true, errorMessage: translate('entity.validation.number') }
                    }}
                  />
                </AvGroup>
                <AvGroup>
                  <Label id="longAliceLabel" for="field-test-pagination-entity-longAlice">
                    <Translate contentKey="travisNg2App.fieldTestPaginationEntity.longAlice">Long Alice</Translate>
                  </Label>
                  <AvField id="field-test-pagination-entity-longAlice" type="string" className="form-control" name="longAlice" />
                </AvGroup>
                <AvGroup>
                  <Label id="longRequiredAliceLabel" for="field-test-pagination-entity-longRequiredAlice">
                    <Translate contentKey="travisNg2App.fieldTestPaginationEntity.longRequiredAlice">Long Required Alice</Translate>
                  </Label>
                  <AvField
                    id="field-test-pagination-entity-longRequiredAlice"
                    type="string"
                    className="form-control"
                    name="longRequiredAlice"
                    validate={{
                      required: { value: true, errorMessage: translate('entity.validation.required') },
                      number: { value: true, errorMessage: translate('entity.validation.number') }
                    }}
                  />
                </AvGroup>
                <AvGroup>
                  <Label id="longMinAliceLabel" for="field-test-pagination-entity-longMinAlice">
                    <Translate contentKey="travisNg2App.fieldTestPaginationEntity.longMinAlice">Long Min Alice</Translate>
                  </Label>
                  <AvField
                    id="field-test-pagination-entity-longMinAlice"
                    type="string"
                    className="form-control"
                    name="longMinAlice"
                    validate={{
                      min: { value: 0, errorMessage: translate('entity.validation.min', { min: 0 }) },
                      number: { value: true, errorMessage: translate('entity.validation.number') }
                    }}
                  />
                </AvGroup>
                <AvGroup>
                  <Label id="longMaxAliceLabel" for="field-test-pagination-entity-longMaxAlice">
                    <Translate contentKey="travisNg2App.fieldTestPaginationEntity.longMaxAlice">Long Max Alice</Translate>
                  </Label>
                  <AvField
                    id="field-test-pagination-entity-longMaxAlice"
                    type="string"
                    className="form-control"
                    name="longMaxAlice"
                    validate={{
                      max: { value: 100, errorMessage: translate('entity.validation.max', { max: 100 }) },
                      number: { value: true, errorMessage: translate('entity.validation.number') }
                    }}
                  />
                </AvGroup>
                <AvGroup>
                  <Label id="floatAliceLabel" for="field-test-pagination-entity-floatAlice">
                    <Translate contentKey="travisNg2App.fieldTestPaginationEntity.floatAlice">Float Alice</Translate>
                  </Label>
                  <AvField id="field-test-pagination-entity-floatAlice" type="string" className="form-control" name="floatAlice" />
                </AvGroup>
                <AvGroup>
                  <Label id="floatRequiredAliceLabel" for="field-test-pagination-entity-floatRequiredAlice">
                    <Translate contentKey="travisNg2App.fieldTestPaginationEntity.floatRequiredAlice">Float Required Alice</Translate>
                  </Label>
                  <AvField
                    id="field-test-pagination-entity-floatRequiredAlice"
                    type="string"
                    className="form-control"
                    name="floatRequiredAlice"
                    validate={{
                      required: { value: true, errorMessage: translate('entity.validation.required') },
                      number: { value: true, errorMessage: translate('entity.validation.number') }
                    }}
                  />
                </AvGroup>
                <AvGroup>
                  <Label id="floatMinAliceLabel" for="field-test-pagination-entity-floatMinAlice">
                    <Translate contentKey="travisNg2App.fieldTestPaginationEntity.floatMinAlice">Float Min Alice</Translate>
                  </Label>
                  <AvField
                    id="field-test-pagination-entity-floatMinAlice"
                    type="string"
                    className="form-control"
                    name="floatMinAlice"
                    validate={{
                      min: { value: 0, errorMessage: translate('entity.validation.min', { min: 0 }) },
                      number: { value: true, errorMessage: translate('entity.validation.number') }
                    }}
                  />
                </AvGroup>
                <AvGroup>
                  <Label id="floatMaxAliceLabel" for="field-test-pagination-entity-floatMaxAlice">
                    <Translate contentKey="travisNg2App.fieldTestPaginationEntity.floatMaxAlice">Float Max Alice</Translate>
                  </Label>
                  <AvField
                    id="field-test-pagination-entity-floatMaxAlice"
                    type="string"
                    className="form-control"
                    name="floatMaxAlice"
                    validate={{
                      max: { value: 100, errorMessage: translate('entity.validation.max', { max: 100 }) },
                      number: { value: true, errorMessage: translate('entity.validation.number') }
                    }}
                  />
                </AvGroup>
                <AvGroup>
                  <Label id="doubleRequiredAliceLabel" for="field-test-pagination-entity-doubleRequiredAlice">
                    <Translate contentKey="travisNg2App.fieldTestPaginationEntity.doubleRequiredAlice">Double Required Alice</Translate>
                  </Label>
                  <AvField
                    id="field-test-pagination-entity-doubleRequiredAlice"
                    type="string"
                    className="form-control"
                    name="doubleRequiredAlice"
                    validate={{
                      required: { value: true, errorMessage: translate('entity.validation.required') },
                      number: { value: true, errorMessage: translate('entity.validation.number') }
                    }}
                  />
                </AvGroup>
                <AvGroup>
                  <Label id="doubleMinAliceLabel" for="field-test-pagination-entity-doubleMinAlice">
                    <Translate contentKey="travisNg2App.fieldTestPaginationEntity.doubleMinAlice">Double Min Alice</Translate>
                  </Label>
                  <AvField
                    id="field-test-pagination-entity-doubleMinAlice"
                    type="string"
                    className="form-control"
                    name="doubleMinAlice"
                    validate={{
                      min: { value: 0, errorMessage: translate('entity.validation.min', { min: 0 }) },
                      number: { value: true, errorMessage: translate('entity.validation.number') }
                    }}
                  />
                </AvGroup>
                <AvGroup>
                  <Label id="doubleMaxAliceLabel" for="field-test-pagination-entity-doubleMaxAlice">
                    <Translate contentKey="travisNg2App.fieldTestPaginationEntity.doubleMaxAlice">Double Max Alice</Translate>
                  </Label>
                  <AvField
                    id="field-test-pagination-entity-doubleMaxAlice"
                    type="string"
                    className="form-control"
                    name="doubleMaxAlice"
                    validate={{
                      max: { value: 100, errorMessage: translate('entity.validation.max', { max: 100 }) },
                      number: { value: true, errorMessage: translate('entity.validation.number') }
                    }}
                  />
                </AvGroup>
                <AvGroup>
                  <Label id="bigDecimalRequiredAliceLabel" for="field-test-pagination-entity-bigDecimalRequiredAlice">
                    <Translate contentKey="travisNg2App.fieldTestPaginationEntity.bigDecimalRequiredAlice">
                      Big Decimal Required Alice
                    </Translate>
                  </Label>
                  <AvField
                    id="field-test-pagination-entity-bigDecimalRequiredAlice"
                    type="text"
                    name="bigDecimalRequiredAlice"
                    validate={{
                      required: { value: true, errorMessage: translate('entity.validation.required') },
                      number: { value: true, errorMessage: translate('entity.validation.number') }
                    }}
                  />
                </AvGroup>
                <AvGroup>
                  <Label id="bigDecimalMinAliceLabel" for="field-test-pagination-entity-bigDecimalMinAlice">
                    <Translate contentKey="travisNg2App.fieldTestPaginationEntity.bigDecimalMinAlice">Big Decimal Min Alice</Translate>
                  </Label>
                  <AvField
                    id="field-test-pagination-entity-bigDecimalMinAlice"
                    type="text"
                    name="bigDecimalMinAlice"
                    validate={{
                      min: { value: 0, errorMessage: translate('entity.validation.min', { min: 0 }) },
                      number: { value: true, errorMessage: translate('entity.validation.number') }
                    }}
                  />
                </AvGroup>
                <AvGroup>
                  <Label id="bigDecimalMaxAliceLabel" for="field-test-pagination-entity-bigDecimalMaxAlice">
                    <Translate contentKey="travisNg2App.fieldTestPaginationEntity.bigDecimalMaxAlice">Big Decimal Max Alice</Translate>
                  </Label>
                  <AvField
                    id="field-test-pagination-entity-bigDecimalMaxAlice"
                    type="text"
                    name="bigDecimalMaxAlice"
                    validate={{
                      max: { value: 100, errorMessage: translate('entity.validation.max', { max: 100 }) },
                      number: { value: true, errorMessage: translate('entity.validation.number') }
                    }}
                  />
                </AvGroup>
                <AvGroup>
                  <Label id="localDateAliceLabel" for="field-test-pagination-entity-localDateAlice">
                    <Translate contentKey="travisNg2App.fieldTestPaginationEntity.localDateAlice">Local Date Alice</Translate>
                  </Label>
                  <AvField id="field-test-pagination-entity-localDateAlice" type="date" className="form-control" name="localDateAlice" />
                </AvGroup>
                <AvGroup>
                  <Label id="localDateRequiredAliceLabel" for="field-test-pagination-entity-localDateRequiredAlice">
                    <Translate contentKey="travisNg2App.fieldTestPaginationEntity.localDateRequiredAlice">
                      Local Date Required Alice
                    </Translate>
                  </Label>
                  <AvField
                    id="field-test-pagination-entity-localDateRequiredAlice"
                    type="date"
                    className="form-control"
                    name="localDateRequiredAlice"
                    validate={{
                      required: { value: true, errorMessage: translate('entity.validation.required') }
                    }}
                  />
                </AvGroup>
                <AvGroup>
                  <Label id="instantAliceLabel" for="field-test-pagination-entity-instantAlice">
                    <Translate contentKey="travisNg2App.fieldTestPaginationEntity.instantAlice">Instant Alice</Translate>
                  </Label>
                  <AvInput
                    id="field-test-pagination-entity-instantAlice"
                    type="datetime-local"
                    className="form-control"
                    name="instantAlice"
                    placeholder={'YYYY-MM-DD HH:mm'}
                    value={isNew ? null : convertDateTimeFromServer(this.props.fieldTestPaginationEntityEntity.instantAlice)}
                  />
                </AvGroup>
                <AvGroup>
                  <Label id="instanteRequiredAliceLabel" for="field-test-pagination-entity-instanteRequiredAlice">
                    <Translate contentKey="travisNg2App.fieldTestPaginationEntity.instanteRequiredAlice">Instante Required Alice</Translate>
                  </Label>
                  <AvInput
                    id="field-test-pagination-entity-instanteRequiredAlice"
                    type="datetime-local"
                    className="form-control"
                    name="instanteRequiredAlice"
                    placeholder={'YYYY-MM-DD HH:mm'}
                    value={isNew ? null : convertDateTimeFromServer(this.props.fieldTestPaginationEntityEntity.instanteRequiredAlice)}
                    validate={{
                      required: { value: true, errorMessage: translate('entity.validation.required') }
                    }}
                  />
                </AvGroup>
                <AvGroup>
                  <Label id="zonedDateTimeAliceLabel" for="field-test-pagination-entity-zonedDateTimeAlice">
                    <Translate contentKey="travisNg2App.fieldTestPaginationEntity.zonedDateTimeAlice">Zoned Date Time Alice</Translate>
                  </Label>
                  <AvInput
                    id="field-test-pagination-entity-zonedDateTimeAlice"
                    type="datetime-local"
                    className="form-control"
                    name="zonedDateTimeAlice"
                    placeholder={'YYYY-MM-DD HH:mm'}
                    value={isNew ? null : convertDateTimeFromServer(this.props.fieldTestPaginationEntityEntity.zonedDateTimeAlice)}
                  />
                </AvGroup>
                <AvGroup>
                  <Label id="zonedDateTimeRequiredAliceLabel" for="field-test-pagination-entity-zonedDateTimeRequiredAlice">
                    <Translate contentKey="travisNg2App.fieldTestPaginationEntity.zonedDateTimeRequiredAlice">
                      Zoned Date Time Required Alice
                    </Translate>
                  </Label>
                  <AvInput
                    id="field-test-pagination-entity-zonedDateTimeRequiredAlice"
                    type="datetime-local"
                    className="form-control"
                    name="zonedDateTimeRequiredAlice"
                    placeholder={'YYYY-MM-DD HH:mm'}
                    value={isNew ? null : convertDateTimeFromServer(this.props.fieldTestPaginationEntityEntity.zonedDateTimeRequiredAlice)}
                    validate={{
                      required: { value: true, errorMessage: translate('entity.validation.required') }
                    }}
                  />
                </AvGroup>
                <AvGroup>
                  <Label id="durationAliceLabel" for="field-test-pagination-entity-durationAlice">
                    <Translate contentKey="travisNg2App.fieldTestPaginationEntity.durationAlice">Duration Alice</Translate>
                  </Label>
                  <AvField id="field-test-pagination-entity-durationAlice" type="text" name="durationAlice" />
                </AvGroup>
                <AvGroup>
                  <Label id="durationRequiredAliceLabel" for="field-test-pagination-entity-durationRequiredAlice">
                    <Translate contentKey="travisNg2App.fieldTestPaginationEntity.durationRequiredAlice">Duration Required Alice</Translate>
                  </Label>
                  <AvField
                    id="field-test-pagination-entity-durationRequiredAlice"
                    type="text"
                    name="durationRequiredAlice"
                    validate={{
                      required: { value: true, errorMessage: translate('entity.validation.required') }
                    }}
                  />
                </AvGroup>
                <AvGroup>
                  <Label id="booleanAliceLabel" check>
                    <AvInput id="field-test-pagination-entity-booleanAlice" type="checkbox" className="form-control" name="booleanAlice" />
                    <Translate contentKey="travisNg2App.fieldTestPaginationEntity.booleanAlice">Boolean Alice</Translate>
                  </Label>
                </AvGroup>
                <AvGroup>
                  <Label id="booleanRequiredAliceLabel" check>
                    <AvInput
                      id="field-test-pagination-entity-booleanRequiredAlice"
                      type="checkbox"
                      className="form-control"
                      name="booleanRequiredAlice"
                    />
                    <Translate contentKey="travisNg2App.fieldTestPaginationEntity.booleanRequiredAlice">Boolean Required Alice</Translate>
                  </Label>
                </AvGroup>
                <AvGroup>
                  <Label id="enumAliceLabel" for="field-test-pagination-entity-enumAlice">
                    <Translate contentKey="travisNg2App.fieldTestPaginationEntity.enumAlice">Enum Alice</Translate>
                  </Label>
                  <AvInput
                    id="field-test-pagination-entity-enumAlice"
                    type="select"
                    className="form-control"
                    name="enumAlice"
                    value={(!isNew && fieldTestPaginationEntityEntity.enumAlice) || 'ENUM_VALUE_1'}
                  >
                    <option value="ENUM_VALUE_1">{translate('travisNg2App.EnumFieldClass.ENUM_VALUE_1')}</option>
                    <option value="ENUM_VALUE_2">{translate('travisNg2App.EnumFieldClass.ENUM_VALUE_2')}</option>
                    <option value="ENUM_VALUE_3">{translate('travisNg2App.EnumFieldClass.ENUM_VALUE_3')}</option>
                  </AvInput>
                </AvGroup>
                <AvGroup>
                  <Label id="enumRequiredAliceLabel" for="field-test-pagination-entity-enumRequiredAlice">
                    <Translate contentKey="travisNg2App.fieldTestPaginationEntity.enumRequiredAlice">Enum Required Alice</Translate>
                  </Label>
                  <AvInput
                    id="field-test-pagination-entity-enumRequiredAlice"
                    type="select"
                    className="form-control"
                    name="enumRequiredAlice"
                    value={(!isNew && fieldTestPaginationEntityEntity.enumRequiredAlice) || 'ENUM_VALUE_1'}
                  >
                    <option value="ENUM_VALUE_1">{translate('travisNg2App.EnumRequiredFieldClass.ENUM_VALUE_1')}</option>
                    <option value="ENUM_VALUE_2">{translate('travisNg2App.EnumRequiredFieldClass.ENUM_VALUE_2')}</option>
                    <option value="ENUM_VALUE_3">{translate('travisNg2App.EnumRequiredFieldClass.ENUM_VALUE_3')}</option>
                  </AvInput>
                </AvGroup>
                <AvGroup>
                  <Label id="uuidAliceLabel" for="field-test-pagination-entity-uuidAlice">
                    <Translate contentKey="travisNg2App.fieldTestPaginationEntity.uuidAlice">Uuid Alice</Translate>
                  </Label>
                  <AvField id="field-test-pagination-entity-uuidAlice" type="text" name="uuidAlice" />
                </AvGroup>
                <AvGroup>
                  <Label id="uuidRequiredAliceLabel" for="field-test-pagination-entity-uuidRequiredAlice">
                    <Translate contentKey="travisNg2App.fieldTestPaginationEntity.uuidRequiredAlice">Uuid Required Alice</Translate>
                  </Label>
                  <AvField
                    id="field-test-pagination-entity-uuidRequiredAlice"
                    type="text"
                    name="uuidRequiredAlice"
                    validate={{
                      required: { value: true, errorMessage: translate('entity.validation.required') }
                    }}
                  />
                </AvGroup>
                <AvGroup>
                  <AvGroup>
                    <Label id="byteImageAliceLabel" for="byteImageAlice">
                      <Translate contentKey="travisNg2App.fieldTestPaginationEntity.byteImageAlice">Byte Image Alice</Translate>
                    </Label>
                    <br />
                    {byteImageAlice ? (
                      <div>
                        <a onClick={openFile(byteImageAliceContentType, byteImageAlice)}>
                          <img src={`data:${byteImageAliceContentType};base64,${byteImageAlice}`} style={{ maxHeight: '100px' }} />
                        </a>
                        <br />
                        <Row>
                          <Col md="11">
                            <span>
                              {byteImageAliceContentType}, {byteSize(byteImageAlice)}
                            </span>
                          </Col>
                          <Col md="1">
                            <Button color="danger" onClick={this.clearBlob('byteImageAlice')}>
                              <FontAwesomeIcon icon="times-circle" />
                            </Button>
                          </Col>
                        </Row>
                      </div>
                    ) : null}
                    <input id="file_byteImageAlice" type="file" onChange={this.onBlobChange(true, 'byteImageAlice')} accept="image/*" />
                    <AvInput type="hidden" name="byteImageAlice" value={byteImageAlice} />
                  </AvGroup>
                </AvGroup>
                <AvGroup>
                  <AvGroup>
                    <Label id="byteImageRequiredAliceLabel" for="byteImageRequiredAlice">
                      <Translate contentKey="travisNg2App.fieldTestPaginationEntity.byteImageRequiredAlice">
                        Byte Image Required Alice
                      </Translate>
                    </Label>
                    <br />
                    {byteImageRequiredAlice ? (
                      <div>
                        <a onClick={openFile(byteImageRequiredAliceContentType, byteImageRequiredAlice)}>
                          <img
                            src={`data:${byteImageRequiredAliceContentType};base64,${byteImageRequiredAlice}`}
                            style={{ maxHeight: '100px' }}
                          />
                        </a>
                        <br />
                        <Row>
                          <Col md="11">
                            <span>
                              {byteImageRequiredAliceContentType}, {byteSize(byteImageRequiredAlice)}
                            </span>
                          </Col>
                          <Col md="1">
                            <Button color="danger" onClick={this.clearBlob('byteImageRequiredAlice')}>
                              <FontAwesomeIcon icon="times-circle" />
                            </Button>
                          </Col>
                        </Row>
                      </div>
                    ) : null}
                    <input
                      id="file_byteImageRequiredAlice"
                      type="file"
                      onChange={this.onBlobChange(true, 'byteImageRequiredAlice')}
                      accept="image/*"
                    />
                    <AvInput
                      type="hidden"
                      name="byteImageRequiredAlice"
                      value={byteImageRequiredAlice}
                      validate={{
                        required: { value: true, errorMessage: translate('entity.validation.required') }
                      }}
                    />
                  </AvGroup>
                </AvGroup>
                <AvGroup>
                  <AvGroup>
                    <Label id="byteImageMinbytesAliceLabel" for="byteImageMinbytesAlice">
                      <Translate contentKey="travisNg2App.fieldTestPaginationEntity.byteImageMinbytesAlice">
                        Byte Image Minbytes Alice
                      </Translate>
                    </Label>
                    <br />
                    {byteImageMinbytesAlice ? (
                      <div>
                        <a onClick={openFile(byteImageMinbytesAliceContentType, byteImageMinbytesAlice)}>
                          <img
                            src={`data:${byteImageMinbytesAliceContentType};base64,${byteImageMinbytesAlice}`}
                            style={{ maxHeight: '100px' }}
                          />
                        </a>
                        <br />
                        <Row>
                          <Col md="11">
                            <span>
                              {byteImageMinbytesAliceContentType}, {byteSize(byteImageMinbytesAlice)}
                            </span>
                          </Col>
                          <Col md="1">
                            <Button color="danger" onClick={this.clearBlob('byteImageMinbytesAlice')}>
                              <FontAwesomeIcon icon="times-circle" />
                            </Button>
                          </Col>
                        </Row>
                      </div>
                    ) : null}
                    <input
                      id="file_byteImageMinbytesAlice"
                      type="file"
                      onChange={this.onBlobChange(true, 'byteImageMinbytesAlice')}
                      accept="image/*"
                    />
                    <AvInput type="hidden" name="byteImageMinbytesAlice" value={byteImageMinbytesAlice} validate={{}} />
                  </AvGroup>
                </AvGroup>
                <AvGroup>
                  <AvGroup>
                    <Label id="byteImageMaxbytesAliceLabel" for="byteImageMaxbytesAlice">
                      <Translate contentKey="travisNg2App.fieldTestPaginationEntity.byteImageMaxbytesAlice">
                        Byte Image Maxbytes Alice
                      </Translate>
                    </Label>
                    <br />
                    {byteImageMaxbytesAlice ? (
                      <div>
                        <a onClick={openFile(byteImageMaxbytesAliceContentType, byteImageMaxbytesAlice)}>
                          <img
                            src={`data:${byteImageMaxbytesAliceContentType};base64,${byteImageMaxbytesAlice}`}
                            style={{ maxHeight: '100px' }}
                          />
                        </a>
                        <br />
                        <Row>
                          <Col md="11">
                            <span>
                              {byteImageMaxbytesAliceContentType}, {byteSize(byteImageMaxbytesAlice)}
                            </span>
                          </Col>
                          <Col md="1">
                            <Button color="danger" onClick={this.clearBlob('byteImageMaxbytesAlice')}>
                              <FontAwesomeIcon icon="times-circle" />
                            </Button>
                          </Col>
                        </Row>
                      </div>
                    ) : null}
                    <input
                      id="file_byteImageMaxbytesAlice"
                      type="file"
                      onChange={this.onBlobChange(true, 'byteImageMaxbytesAlice')}
                      accept="image/*"
                    />
                    <AvInput type="hidden" name="byteImageMaxbytesAlice" value={byteImageMaxbytesAlice} validate={{}} />
                  </AvGroup>
                </AvGroup>
                <AvGroup>
                  <AvGroup>
                    <Label id="byteAnyAliceLabel" for="byteAnyAlice">
                      <Translate contentKey="travisNg2App.fieldTestPaginationEntity.byteAnyAlice">Byte Any Alice</Translate>
                    </Label>
                    <br />
                    {byteAnyAlice ? (
                      <div>
                        <a onClick={openFile(byteAnyAliceContentType, byteAnyAlice)}>
                          <Translate contentKey="entity.action.open">Open</Translate>
                        </a>
                        <br />
                        <Row>
                          <Col md="11">
                            <span>
                              {byteAnyAliceContentType}, {byteSize(byteAnyAlice)}
                            </span>
                          </Col>
                          <Col md="1">
                            <Button color="danger" onClick={this.clearBlob('byteAnyAlice')}>
                              <FontAwesomeIcon icon="times-circle" />
                            </Button>
                          </Col>
                        </Row>
                      </div>
                    ) : null}
                    <input id="file_byteAnyAlice" type="file" onChange={this.onBlobChange(false, 'byteAnyAlice')} />
                    <AvInput type="hidden" name="byteAnyAlice" value={byteAnyAlice} />
                  </AvGroup>
                </AvGroup>
                <AvGroup>
                  <AvGroup>
                    <Label id="byteAnyRequiredAliceLabel" for="byteAnyRequiredAlice">
                      <Translate contentKey="travisNg2App.fieldTestPaginationEntity.byteAnyRequiredAlice">
                        Byte Any Required Alice
                      </Translate>
                    </Label>
                    <br />
                    {byteAnyRequiredAlice ? (
                      <div>
                        <a onClick={openFile(byteAnyRequiredAliceContentType, byteAnyRequiredAlice)}>
                          <Translate contentKey="entity.action.open">Open</Translate>
                        </a>
                        <br />
                        <Row>
                          <Col md="11">
                            <span>
                              {byteAnyRequiredAliceContentType}, {byteSize(byteAnyRequiredAlice)}
                            </span>
                          </Col>
                          <Col md="1">
                            <Button color="danger" onClick={this.clearBlob('byteAnyRequiredAlice')}>
                              <FontAwesomeIcon icon="times-circle" />
                            </Button>
                          </Col>
                        </Row>
                      </div>
                    ) : null}
                    <input id="file_byteAnyRequiredAlice" type="file" onChange={this.onBlobChange(false, 'byteAnyRequiredAlice')} />
                    <AvInput
                      type="hidden"
                      name="byteAnyRequiredAlice"
                      value={byteAnyRequiredAlice}
                      validate={{
                        required: { value: true, errorMessage: translate('entity.validation.required') }
                      }}
                    />
                  </AvGroup>
                </AvGroup>
                <AvGroup>
                  <AvGroup>
                    <Label id="byteAnyMinbytesAliceLabel" for="byteAnyMinbytesAlice">
                      <Translate contentKey="travisNg2App.fieldTestPaginationEntity.byteAnyMinbytesAlice">
                        Byte Any Minbytes Alice
                      </Translate>
                    </Label>
                    <br />
                    {byteAnyMinbytesAlice ? (
                      <div>
                        <a onClick={openFile(byteAnyMinbytesAliceContentType, byteAnyMinbytesAlice)}>
                          <Translate contentKey="entity.action.open">Open</Translate>
                        </a>
                        <br />
                        <Row>
                          <Col md="11">
                            <span>
                              {byteAnyMinbytesAliceContentType}, {byteSize(byteAnyMinbytesAlice)}
                            </span>
                          </Col>
                          <Col md="1">
                            <Button color="danger" onClick={this.clearBlob('byteAnyMinbytesAlice')}>
                              <FontAwesomeIcon icon="times-circle" />
                            </Button>
                          </Col>
                        </Row>
                      </div>
                    ) : null}
                    <input id="file_byteAnyMinbytesAlice" type="file" onChange={this.onBlobChange(false, 'byteAnyMinbytesAlice')} />
                    <AvInput type="hidden" name="byteAnyMinbytesAlice" value={byteAnyMinbytesAlice} validate={{}} />
                  </AvGroup>
                </AvGroup>
                <AvGroup>
                  <AvGroup>
                    <Label id="byteAnyMaxbytesAliceLabel" for="byteAnyMaxbytesAlice">
                      <Translate contentKey="travisNg2App.fieldTestPaginationEntity.byteAnyMaxbytesAlice">
                        Byte Any Maxbytes Alice
                      </Translate>
                    </Label>
                    <br />
                    {byteAnyMaxbytesAlice ? (
                      <div>
                        <a onClick={openFile(byteAnyMaxbytesAliceContentType, byteAnyMaxbytesAlice)}>
                          <Translate contentKey="entity.action.open">Open</Translate>
                        </a>
                        <br />
                        <Row>
                          <Col md="11">
                            <span>
                              {byteAnyMaxbytesAliceContentType}, {byteSize(byteAnyMaxbytesAlice)}
                            </span>
                          </Col>
                          <Col md="1">
                            <Button color="danger" onClick={this.clearBlob('byteAnyMaxbytesAlice')}>
                              <FontAwesomeIcon icon="times-circle" />
                            </Button>
                          </Col>
                        </Row>
                      </div>
                    ) : null}
                    <input id="file_byteAnyMaxbytesAlice" type="file" onChange={this.onBlobChange(false, 'byteAnyMaxbytesAlice')} />
                    <AvInput type="hidden" name="byteAnyMaxbytesAlice" value={byteAnyMaxbytesAlice} validate={{}} />
                  </AvGroup>
                </AvGroup>
                <AvGroup>
                  <Label id="byteTextAliceLabel" for="field-test-pagination-entity-byteTextAlice">
                    <Translate contentKey="travisNg2App.fieldTestPaginationEntity.byteTextAlice">Byte Text Alice</Translate>
                  </Label>
                  <AvInput id="field-test-pagination-entity-byteTextAlice" type="textarea" name="byteTextAlice" />
                </AvGroup>
                <AvGroup>
                  <Label id="byteTextRequiredAliceLabel" for="field-test-pagination-entity-byteTextRequiredAlice">
                    <Translate contentKey="travisNg2App.fieldTestPaginationEntity.byteTextRequiredAlice">
                      Byte Text Required Alice
                    </Translate>
                  </Label>
                  <AvInput
                    id="field-test-pagination-entity-byteTextRequiredAlice"
                    type="textarea"
                    name="byteTextRequiredAlice"
                    validate={{
                      required: { value: true, errorMessage: translate('entity.validation.required') }
                    }}
                  />
                </AvGroup>
                <Button tag={Link} id="cancel-save" to="/field-test-pagination-entity" replace color="info">
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
  fieldTestPaginationEntityEntity: storeState.fieldTestPaginationEntity.entity,
  loading: storeState.fieldTestPaginationEntity.loading,
  updating: storeState.fieldTestPaginationEntity.updating,
  updateSuccess: storeState.fieldTestPaginationEntity.updateSuccess
});

const mapDispatchToProps = {
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
)(FieldTestPaginationEntityUpdate);
