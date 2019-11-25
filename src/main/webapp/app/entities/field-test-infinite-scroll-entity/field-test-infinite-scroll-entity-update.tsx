import React from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col, Label } from 'reactstrap';
import { AvFeedback, AvForm, AvGroup, AvInput, AvField } from 'availity-reactstrap-validation';
import { Translate, translate, ICrudGetAction, ICrudGetAllAction, setFileData, openFile, byteSize, ICrudPutAction } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IRootState } from 'app/shared/reducers';

import { getEntity, updateEntity, createEntity, setBlob, reset } from './field-test-infinite-scroll-entity.reducer';
import { IFieldTestInfiniteScrollEntity } from 'app/shared/model/field-test-infinite-scroll-entity.model';
import { convertDateTimeFromServer, convertDateTimeToServer } from 'app/shared/util/date-utils';
import { mapIdList } from 'app/shared/util/entity-utils';

export interface IFieldTestInfiniteScrollEntityUpdateProps extends StateProps, DispatchProps, RouteComponentProps<{ id: string }> {}

export interface IFieldTestInfiniteScrollEntityUpdateState {
  isNew: boolean;
}

export class FieldTestInfiniteScrollEntityUpdate extends React.Component<
  IFieldTestInfiniteScrollEntityUpdateProps,
  IFieldTestInfiniteScrollEntityUpdateState
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
    if (!this.state.isNew) {
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
    values.instantHugo = convertDateTimeToServer(values.instantHugo);
    values.instanteRequiredHugo = convertDateTimeToServer(values.instanteRequiredHugo);
    values.zonedDateTimeHugo = convertDateTimeToServer(values.zonedDateTimeHugo);
    values.zonedDateTimeRequiredHugo = convertDateTimeToServer(values.zonedDateTimeRequiredHugo);

    if (errors.length === 0) {
      const { fieldTestInfiniteScrollEntityEntity } = this.props;
      const entity = {
        ...fieldTestInfiniteScrollEntityEntity,
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
    this.props.history.push('/field-test-infinite-scroll-entity');
  };

  render() {
    const { fieldTestInfiniteScrollEntityEntity, loading, updating } = this.props;
    const { isNew } = this.state;

    const {
      byteImageHugo,
      byteImageHugoContentType,
      byteImageRequiredHugo,
      byteImageRequiredHugoContentType,
      byteImageMinbytesHugo,
      byteImageMinbytesHugoContentType,
      byteImageMaxbytesHugo,
      byteImageMaxbytesHugoContentType,
      byteAnyHugo,
      byteAnyHugoContentType,
      byteAnyRequiredHugo,
      byteAnyRequiredHugoContentType,
      byteAnyMinbytesHugo,
      byteAnyMinbytesHugoContentType,
      byteAnyMaxbytesHugo,
      byteAnyMaxbytesHugoContentType,
      byteTextHugo,
      byteTextRequiredHugo
    } = fieldTestInfiniteScrollEntityEntity;

    return (
      <div>
        <Row className="justify-content-center">
          <Col md="8">
            <h2 id="travisNg2App.fieldTestInfiniteScrollEntity.home.createOrEditLabel">
              <Translate contentKey="travisNg2App.fieldTestInfiniteScrollEntity.home.createOrEditLabel">
                Create or edit a FieldTestInfiniteScrollEntity
              </Translate>
            </h2>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col md="8">
            {loading ? (
              <p>Loading...</p>
            ) : (
              <AvForm model={isNew ? {} : fieldTestInfiniteScrollEntityEntity} onSubmit={this.saveEntity}>
                {!isNew ? (
                  <AvGroup>
                    <Label for="field-test-infinite-scroll-entity-id">
                      <Translate contentKey="global.field.id">ID</Translate>
                    </Label>
                    <AvInput id="field-test-infinite-scroll-entity-id" type="text" className="form-control" name="id" required readOnly />
                  </AvGroup>
                ) : null}
                <AvGroup>
                  <Label id="stringHugoLabel" for="field-test-infinite-scroll-entity-stringHugo">
                    <Translate contentKey="travisNg2App.fieldTestInfiniteScrollEntity.stringHugo">String Hugo</Translate>
                  </Label>
                  <AvField id="field-test-infinite-scroll-entity-stringHugo" type="text" name="stringHugo" />
                </AvGroup>
                <AvGroup>
                  <Label id="stringRequiredHugoLabel" for="field-test-infinite-scroll-entity-stringRequiredHugo">
                    <Translate contentKey="travisNg2App.fieldTestInfiniteScrollEntity.stringRequiredHugo">String Required Hugo</Translate>
                  </Label>
                  <AvField
                    id="field-test-infinite-scroll-entity-stringRequiredHugo"
                    type="text"
                    name="stringRequiredHugo"
                    validate={{
                      required: { value: true, errorMessage: translate('entity.validation.required') }
                    }}
                  />
                </AvGroup>
                <AvGroup>
                  <Label id="stringMinlengthHugoLabel" for="field-test-infinite-scroll-entity-stringMinlengthHugo">
                    <Translate contentKey="travisNg2App.fieldTestInfiniteScrollEntity.stringMinlengthHugo">String Minlength Hugo</Translate>
                  </Label>
                  <AvField
                    id="field-test-infinite-scroll-entity-stringMinlengthHugo"
                    type="text"
                    name="stringMinlengthHugo"
                    validate={{
                      minLength: { value: 0, errorMessage: translate('entity.validation.minlength', { min: 0 }) }
                    }}
                  />
                </AvGroup>
                <AvGroup>
                  <Label id="stringMaxlengthHugoLabel" for="field-test-infinite-scroll-entity-stringMaxlengthHugo">
                    <Translate contentKey="travisNg2App.fieldTestInfiniteScrollEntity.stringMaxlengthHugo">String Maxlength Hugo</Translate>
                  </Label>
                  <AvField
                    id="field-test-infinite-scroll-entity-stringMaxlengthHugo"
                    type="text"
                    name="stringMaxlengthHugo"
                    validate={{
                      maxLength: { value: 20, errorMessage: translate('entity.validation.maxlength', { max: 20 }) }
                    }}
                  />
                </AvGroup>
                <AvGroup>
                  <Label id="stringPatternHugoLabel" for="field-test-infinite-scroll-entity-stringPatternHugo">
                    <Translate contentKey="travisNg2App.fieldTestInfiniteScrollEntity.stringPatternHugo">String Pattern Hugo</Translate>
                  </Label>
                  <AvField
                    id="field-test-infinite-scroll-entity-stringPatternHugo"
                    type="text"
                    name="stringPatternHugo"
                    validate={{
                      pattern: {
                        value: '^[a-zA-Z0-9]*$',
                        errorMessage: translate('entity.validation.pattern', { pattern: '^[a-zA-Z0-9]*$' })
                      }
                    }}
                  />
                </AvGroup>
                <AvGroup>
                  <Label id="integerHugoLabel" for="field-test-infinite-scroll-entity-integerHugo">
                    <Translate contentKey="travisNg2App.fieldTestInfiniteScrollEntity.integerHugo">Integer Hugo</Translate>
                  </Label>
                  <AvField id="field-test-infinite-scroll-entity-integerHugo" type="string" className="form-control" name="integerHugo" />
                </AvGroup>
                <AvGroup>
                  <Label id="integerRequiredHugoLabel" for="field-test-infinite-scroll-entity-integerRequiredHugo">
                    <Translate contentKey="travisNg2App.fieldTestInfiniteScrollEntity.integerRequiredHugo">Integer Required Hugo</Translate>
                  </Label>
                  <AvField
                    id="field-test-infinite-scroll-entity-integerRequiredHugo"
                    type="string"
                    className="form-control"
                    name="integerRequiredHugo"
                    validate={{
                      required: { value: true, errorMessage: translate('entity.validation.required') },
                      number: { value: true, errorMessage: translate('entity.validation.number') }
                    }}
                  />
                </AvGroup>
                <AvGroup>
                  <Label id="integerMinHugoLabel" for="field-test-infinite-scroll-entity-integerMinHugo">
                    <Translate contentKey="travisNg2App.fieldTestInfiniteScrollEntity.integerMinHugo">Integer Min Hugo</Translate>
                  </Label>
                  <AvField
                    id="field-test-infinite-scroll-entity-integerMinHugo"
                    type="string"
                    className="form-control"
                    name="integerMinHugo"
                    validate={{
                      min: { value: 0, errorMessage: translate('entity.validation.min', { min: 0 }) },
                      number: { value: true, errorMessage: translate('entity.validation.number') }
                    }}
                  />
                </AvGroup>
                <AvGroup>
                  <Label id="integerMaxHugoLabel" for="field-test-infinite-scroll-entity-integerMaxHugo">
                    <Translate contentKey="travisNg2App.fieldTestInfiniteScrollEntity.integerMaxHugo">Integer Max Hugo</Translate>
                  </Label>
                  <AvField
                    id="field-test-infinite-scroll-entity-integerMaxHugo"
                    type="string"
                    className="form-control"
                    name="integerMaxHugo"
                    validate={{
                      max: { value: 100, errorMessage: translate('entity.validation.max', { max: 100 }) },
                      number: { value: true, errorMessage: translate('entity.validation.number') }
                    }}
                  />
                </AvGroup>
                <AvGroup>
                  <Label id="longHugoLabel" for="field-test-infinite-scroll-entity-longHugo">
                    <Translate contentKey="travisNg2App.fieldTestInfiniteScrollEntity.longHugo">Long Hugo</Translate>
                  </Label>
                  <AvField id="field-test-infinite-scroll-entity-longHugo" type="string" className="form-control" name="longHugo" />
                </AvGroup>
                <AvGroup>
                  <Label id="longRequiredHugoLabel" for="field-test-infinite-scroll-entity-longRequiredHugo">
                    <Translate contentKey="travisNg2App.fieldTestInfiniteScrollEntity.longRequiredHugo">Long Required Hugo</Translate>
                  </Label>
                  <AvField
                    id="field-test-infinite-scroll-entity-longRequiredHugo"
                    type="string"
                    className="form-control"
                    name="longRequiredHugo"
                    validate={{
                      required: { value: true, errorMessage: translate('entity.validation.required') },
                      number: { value: true, errorMessage: translate('entity.validation.number') }
                    }}
                  />
                </AvGroup>
                <AvGroup>
                  <Label id="longMinHugoLabel" for="field-test-infinite-scroll-entity-longMinHugo">
                    <Translate contentKey="travisNg2App.fieldTestInfiniteScrollEntity.longMinHugo">Long Min Hugo</Translate>
                  </Label>
                  <AvField
                    id="field-test-infinite-scroll-entity-longMinHugo"
                    type="string"
                    className="form-control"
                    name="longMinHugo"
                    validate={{
                      min: { value: 0, errorMessage: translate('entity.validation.min', { min: 0 }) },
                      number: { value: true, errorMessage: translate('entity.validation.number') }
                    }}
                  />
                </AvGroup>
                <AvGroup>
                  <Label id="longMaxHugoLabel" for="field-test-infinite-scroll-entity-longMaxHugo">
                    <Translate contentKey="travisNg2App.fieldTestInfiniteScrollEntity.longMaxHugo">Long Max Hugo</Translate>
                  </Label>
                  <AvField
                    id="field-test-infinite-scroll-entity-longMaxHugo"
                    type="string"
                    className="form-control"
                    name="longMaxHugo"
                    validate={{
                      max: { value: 100, errorMessage: translate('entity.validation.max', { max: 100 }) },
                      number: { value: true, errorMessage: translate('entity.validation.number') }
                    }}
                  />
                </AvGroup>
                <AvGroup>
                  <Label id="floatHugoLabel" for="field-test-infinite-scroll-entity-floatHugo">
                    <Translate contentKey="travisNg2App.fieldTestInfiniteScrollEntity.floatHugo">Float Hugo</Translate>
                  </Label>
                  <AvField id="field-test-infinite-scroll-entity-floatHugo" type="string" className="form-control" name="floatHugo" />
                </AvGroup>
                <AvGroup>
                  <Label id="floatRequiredHugoLabel" for="field-test-infinite-scroll-entity-floatRequiredHugo">
                    <Translate contentKey="travisNg2App.fieldTestInfiniteScrollEntity.floatRequiredHugo">Float Required Hugo</Translate>
                  </Label>
                  <AvField
                    id="field-test-infinite-scroll-entity-floatRequiredHugo"
                    type="string"
                    className="form-control"
                    name="floatRequiredHugo"
                    validate={{
                      required: { value: true, errorMessage: translate('entity.validation.required') },
                      number: { value: true, errorMessage: translate('entity.validation.number') }
                    }}
                  />
                </AvGroup>
                <AvGroup>
                  <Label id="floatMinHugoLabel" for="field-test-infinite-scroll-entity-floatMinHugo">
                    <Translate contentKey="travisNg2App.fieldTestInfiniteScrollEntity.floatMinHugo">Float Min Hugo</Translate>
                  </Label>
                  <AvField
                    id="field-test-infinite-scroll-entity-floatMinHugo"
                    type="string"
                    className="form-control"
                    name="floatMinHugo"
                    validate={{
                      min: { value: 0, errorMessage: translate('entity.validation.min', { min: 0 }) },
                      number: { value: true, errorMessage: translate('entity.validation.number') }
                    }}
                  />
                </AvGroup>
                <AvGroup>
                  <Label id="floatMaxHugoLabel" for="field-test-infinite-scroll-entity-floatMaxHugo">
                    <Translate contentKey="travisNg2App.fieldTestInfiniteScrollEntity.floatMaxHugo">Float Max Hugo</Translate>
                  </Label>
                  <AvField
                    id="field-test-infinite-scroll-entity-floatMaxHugo"
                    type="string"
                    className="form-control"
                    name="floatMaxHugo"
                    validate={{
                      max: { value: 100, errorMessage: translate('entity.validation.max', { max: 100 }) },
                      number: { value: true, errorMessage: translate('entity.validation.number') }
                    }}
                  />
                </AvGroup>
                <AvGroup>
                  <Label id="doubleRequiredHugoLabel" for="field-test-infinite-scroll-entity-doubleRequiredHugo">
                    <Translate contentKey="travisNg2App.fieldTestInfiniteScrollEntity.doubleRequiredHugo">Double Required Hugo</Translate>
                  </Label>
                  <AvField
                    id="field-test-infinite-scroll-entity-doubleRequiredHugo"
                    type="string"
                    className="form-control"
                    name="doubleRequiredHugo"
                    validate={{
                      required: { value: true, errorMessage: translate('entity.validation.required') },
                      number: { value: true, errorMessage: translate('entity.validation.number') }
                    }}
                  />
                </AvGroup>
                <AvGroup>
                  <Label id="doubleMinHugoLabel" for="field-test-infinite-scroll-entity-doubleMinHugo">
                    <Translate contentKey="travisNg2App.fieldTestInfiniteScrollEntity.doubleMinHugo">Double Min Hugo</Translate>
                  </Label>
                  <AvField
                    id="field-test-infinite-scroll-entity-doubleMinHugo"
                    type="string"
                    className="form-control"
                    name="doubleMinHugo"
                    validate={{
                      min: { value: 0, errorMessage: translate('entity.validation.min', { min: 0 }) },
                      number: { value: true, errorMessage: translate('entity.validation.number') }
                    }}
                  />
                </AvGroup>
                <AvGroup>
                  <Label id="doubleMaxHugoLabel" for="field-test-infinite-scroll-entity-doubleMaxHugo">
                    <Translate contentKey="travisNg2App.fieldTestInfiniteScrollEntity.doubleMaxHugo">Double Max Hugo</Translate>
                  </Label>
                  <AvField
                    id="field-test-infinite-scroll-entity-doubleMaxHugo"
                    type="string"
                    className="form-control"
                    name="doubleMaxHugo"
                    validate={{
                      max: { value: 100, errorMessage: translate('entity.validation.max', { max: 100 }) },
                      number: { value: true, errorMessage: translate('entity.validation.number') }
                    }}
                  />
                </AvGroup>
                <AvGroup>
                  <Label id="bigDecimalRequiredHugoLabel" for="field-test-infinite-scroll-entity-bigDecimalRequiredHugo">
                    <Translate contentKey="travisNg2App.fieldTestInfiniteScrollEntity.bigDecimalRequiredHugo">
                      Big Decimal Required Hugo
                    </Translate>
                  </Label>
                  <AvField
                    id="field-test-infinite-scroll-entity-bigDecimalRequiredHugo"
                    type="text"
                    name="bigDecimalRequiredHugo"
                    validate={{
                      required: { value: true, errorMessage: translate('entity.validation.required') },
                      number: { value: true, errorMessage: translate('entity.validation.number') }
                    }}
                  />
                </AvGroup>
                <AvGroup>
                  <Label id="bigDecimalMinHugoLabel" for="field-test-infinite-scroll-entity-bigDecimalMinHugo">
                    <Translate contentKey="travisNg2App.fieldTestInfiniteScrollEntity.bigDecimalMinHugo">Big Decimal Min Hugo</Translate>
                  </Label>
                  <AvField
                    id="field-test-infinite-scroll-entity-bigDecimalMinHugo"
                    type="text"
                    name="bigDecimalMinHugo"
                    validate={{
                      min: { value: 0, errorMessage: translate('entity.validation.min', { min: 0 }) },
                      number: { value: true, errorMessage: translate('entity.validation.number') }
                    }}
                  />
                </AvGroup>
                <AvGroup>
                  <Label id="bigDecimalMaxHugoLabel" for="field-test-infinite-scroll-entity-bigDecimalMaxHugo">
                    <Translate contentKey="travisNg2App.fieldTestInfiniteScrollEntity.bigDecimalMaxHugo">Big Decimal Max Hugo</Translate>
                  </Label>
                  <AvField
                    id="field-test-infinite-scroll-entity-bigDecimalMaxHugo"
                    type="text"
                    name="bigDecimalMaxHugo"
                    validate={{
                      max: { value: 100, errorMessage: translate('entity.validation.max', { max: 100 }) },
                      number: { value: true, errorMessage: translate('entity.validation.number') }
                    }}
                  />
                </AvGroup>
                <AvGroup>
                  <Label id="localDateHugoLabel" for="field-test-infinite-scroll-entity-localDateHugo">
                    <Translate contentKey="travisNg2App.fieldTestInfiniteScrollEntity.localDateHugo">Local Date Hugo</Translate>
                  </Label>
                  <AvField id="field-test-infinite-scroll-entity-localDateHugo" type="date" className="form-control" name="localDateHugo" />
                </AvGroup>
                <AvGroup>
                  <Label id="localDateRequiredHugoLabel" for="field-test-infinite-scroll-entity-localDateRequiredHugo">
                    <Translate contentKey="travisNg2App.fieldTestInfiniteScrollEntity.localDateRequiredHugo">
                      Local Date Required Hugo
                    </Translate>
                  </Label>
                  <AvField
                    id="field-test-infinite-scroll-entity-localDateRequiredHugo"
                    type="date"
                    className="form-control"
                    name="localDateRequiredHugo"
                    validate={{
                      required: { value: true, errorMessage: translate('entity.validation.required') }
                    }}
                  />
                </AvGroup>
                <AvGroup>
                  <Label id="instantHugoLabel" for="field-test-infinite-scroll-entity-instantHugo">
                    <Translate contentKey="travisNg2App.fieldTestInfiniteScrollEntity.instantHugo">Instant Hugo</Translate>
                  </Label>
                  <AvInput
                    id="field-test-infinite-scroll-entity-instantHugo"
                    type="datetime-local"
                    className="form-control"
                    name="instantHugo"
                    placeholder={'YYYY-MM-DD HH:mm'}
                    value={isNew ? null : convertDateTimeFromServer(this.props.fieldTestInfiniteScrollEntityEntity.instantHugo)}
                  />
                </AvGroup>
                <AvGroup>
                  <Label id="instanteRequiredHugoLabel" for="field-test-infinite-scroll-entity-instanteRequiredHugo">
                    <Translate contentKey="travisNg2App.fieldTestInfiniteScrollEntity.instanteRequiredHugo">
                      Instante Required Hugo
                    </Translate>
                  </Label>
                  <AvInput
                    id="field-test-infinite-scroll-entity-instanteRequiredHugo"
                    type="datetime-local"
                    className="form-control"
                    name="instanteRequiredHugo"
                    placeholder={'YYYY-MM-DD HH:mm'}
                    value={isNew ? null : convertDateTimeFromServer(this.props.fieldTestInfiniteScrollEntityEntity.instanteRequiredHugo)}
                    validate={{
                      required: { value: true, errorMessage: translate('entity.validation.required') }
                    }}
                  />
                </AvGroup>
                <AvGroup>
                  <Label id="zonedDateTimeHugoLabel" for="field-test-infinite-scroll-entity-zonedDateTimeHugo">
                    <Translate contentKey="travisNg2App.fieldTestInfiniteScrollEntity.zonedDateTimeHugo">Zoned Date Time Hugo</Translate>
                  </Label>
                  <AvInput
                    id="field-test-infinite-scroll-entity-zonedDateTimeHugo"
                    type="datetime-local"
                    className="form-control"
                    name="zonedDateTimeHugo"
                    placeholder={'YYYY-MM-DD HH:mm'}
                    value={isNew ? null : convertDateTimeFromServer(this.props.fieldTestInfiniteScrollEntityEntity.zonedDateTimeHugo)}
                  />
                </AvGroup>
                <AvGroup>
                  <Label id="zonedDateTimeRequiredHugoLabel" for="field-test-infinite-scroll-entity-zonedDateTimeRequiredHugo">
                    <Translate contentKey="travisNg2App.fieldTestInfiniteScrollEntity.zonedDateTimeRequiredHugo">
                      Zoned Date Time Required Hugo
                    </Translate>
                  </Label>
                  <AvInput
                    id="field-test-infinite-scroll-entity-zonedDateTimeRequiredHugo"
                    type="datetime-local"
                    className="form-control"
                    name="zonedDateTimeRequiredHugo"
                    placeholder={'YYYY-MM-DD HH:mm'}
                    value={
                      isNew ? null : convertDateTimeFromServer(this.props.fieldTestInfiniteScrollEntityEntity.zonedDateTimeRequiredHugo)
                    }
                    validate={{
                      required: { value: true, errorMessage: translate('entity.validation.required') }
                    }}
                  />
                </AvGroup>
                <AvGroup>
                  <Label id="durationHugoLabel" for="field-test-infinite-scroll-entity-durationHugo">
                    <Translate contentKey="travisNg2App.fieldTestInfiniteScrollEntity.durationHugo">Duration Hugo</Translate>
                  </Label>
                  <AvField id="field-test-infinite-scroll-entity-durationHugo" type="text" name="durationHugo" />
                </AvGroup>
                <AvGroup>
                  <Label id="durationRequiredHugoLabel" for="field-test-infinite-scroll-entity-durationRequiredHugo">
                    <Translate contentKey="travisNg2App.fieldTestInfiniteScrollEntity.durationRequiredHugo">
                      Duration Required Hugo
                    </Translate>
                  </Label>
                  <AvField
                    id="field-test-infinite-scroll-entity-durationRequiredHugo"
                    type="text"
                    name="durationRequiredHugo"
                    validate={{
                      required: { value: true, errorMessage: translate('entity.validation.required') }
                    }}
                  />
                </AvGroup>
                <AvGroup>
                  <Label id="booleanHugoLabel" check>
                    <AvInput
                      id="field-test-infinite-scroll-entity-booleanHugo"
                      type="checkbox"
                      className="form-control"
                      name="booleanHugo"
                    />
                    <Translate contentKey="travisNg2App.fieldTestInfiniteScrollEntity.booleanHugo">Boolean Hugo</Translate>
                  </Label>
                </AvGroup>
                <AvGroup>
                  <Label id="booleanRequiredHugoLabel" check>
                    <AvInput
                      id="field-test-infinite-scroll-entity-booleanRequiredHugo"
                      type="checkbox"
                      className="form-control"
                      name="booleanRequiredHugo"
                    />
                    <Translate contentKey="travisNg2App.fieldTestInfiniteScrollEntity.booleanRequiredHugo">Boolean Required Hugo</Translate>
                  </Label>
                </AvGroup>
                <AvGroup>
                  <Label id="enumHugoLabel" for="field-test-infinite-scroll-entity-enumHugo">
                    <Translate contentKey="travisNg2App.fieldTestInfiniteScrollEntity.enumHugo">Enum Hugo</Translate>
                  </Label>
                  <AvInput
                    id="field-test-infinite-scroll-entity-enumHugo"
                    type="select"
                    className="form-control"
                    name="enumHugo"
                    value={(!isNew && fieldTestInfiniteScrollEntityEntity.enumHugo) || 'ENUM_VALUE_1'}
                  >
                    <option value="ENUM_VALUE_1">{translate('travisNg2App.EnumFieldClass.ENUM_VALUE_1')}</option>
                    <option value="ENUM_VALUE_2">{translate('travisNg2App.EnumFieldClass.ENUM_VALUE_2')}</option>
                    <option value="ENUM_VALUE_3">{translate('travisNg2App.EnumFieldClass.ENUM_VALUE_3')}</option>
                  </AvInput>
                </AvGroup>
                <AvGroup>
                  <Label id="enumRequiredHugoLabel" for="field-test-infinite-scroll-entity-enumRequiredHugo">
                    <Translate contentKey="travisNg2App.fieldTestInfiniteScrollEntity.enumRequiredHugo">Enum Required Hugo</Translate>
                  </Label>
                  <AvInput
                    id="field-test-infinite-scroll-entity-enumRequiredHugo"
                    type="select"
                    className="form-control"
                    name="enumRequiredHugo"
                    value={(!isNew && fieldTestInfiniteScrollEntityEntity.enumRequiredHugo) || 'ENUM_VALUE_1'}
                  >
                    <option value="ENUM_VALUE_1">{translate('travisNg2App.EnumRequiredFieldClass.ENUM_VALUE_1')}</option>
                    <option value="ENUM_VALUE_2">{translate('travisNg2App.EnumRequiredFieldClass.ENUM_VALUE_2')}</option>
                    <option value="ENUM_VALUE_3">{translate('travisNg2App.EnumRequiredFieldClass.ENUM_VALUE_3')}</option>
                  </AvInput>
                </AvGroup>
                <AvGroup>
                  <Label id="uuidHugoLabel" for="field-test-infinite-scroll-entity-uuidHugo">
                    <Translate contentKey="travisNg2App.fieldTestInfiniteScrollEntity.uuidHugo">Uuid Hugo</Translate>
                  </Label>
                  <AvField id="field-test-infinite-scroll-entity-uuidHugo" type="text" name="uuidHugo" />
                </AvGroup>
                <AvGroup>
                  <Label id="uuidRequiredHugoLabel" for="field-test-infinite-scroll-entity-uuidRequiredHugo">
                    <Translate contentKey="travisNg2App.fieldTestInfiniteScrollEntity.uuidRequiredHugo">Uuid Required Hugo</Translate>
                  </Label>
                  <AvField
                    id="field-test-infinite-scroll-entity-uuidRequiredHugo"
                    type="text"
                    name="uuidRequiredHugo"
                    validate={{
                      required: { value: true, errorMessage: translate('entity.validation.required') }
                    }}
                  />
                </AvGroup>
                <AvGroup>
                  <AvGroup>
                    <Label id="byteImageHugoLabel" for="byteImageHugo">
                      <Translate contentKey="travisNg2App.fieldTestInfiniteScrollEntity.byteImageHugo">Byte Image Hugo</Translate>
                    </Label>
                    <br />
                    {byteImageHugo ? (
                      <div>
                        <a onClick={openFile(byteImageHugoContentType, byteImageHugo)}>
                          <img src={`data:${byteImageHugoContentType};base64,${byteImageHugo}`} style={{ maxHeight: '100px' }} />
                        </a>
                        <br />
                        <Row>
                          <Col md="11">
                            <span>
                              {byteImageHugoContentType}, {byteSize(byteImageHugo)}
                            </span>
                          </Col>
                          <Col md="1">
                            <Button color="danger" onClick={this.clearBlob('byteImageHugo')}>
                              <FontAwesomeIcon icon="times-circle" />
                            </Button>
                          </Col>
                        </Row>
                      </div>
                    ) : null}
                    <input id="file_byteImageHugo" type="file" onChange={this.onBlobChange(true, 'byteImageHugo')} accept="image/*" />
                    <AvInput type="hidden" name="byteImageHugo" value={byteImageHugo} />
                  </AvGroup>
                </AvGroup>
                <AvGroup>
                  <AvGroup>
                    <Label id="byteImageRequiredHugoLabel" for="byteImageRequiredHugo">
                      <Translate contentKey="travisNg2App.fieldTestInfiniteScrollEntity.byteImageRequiredHugo">
                        Byte Image Required Hugo
                      </Translate>
                    </Label>
                    <br />
                    {byteImageRequiredHugo ? (
                      <div>
                        <a onClick={openFile(byteImageRequiredHugoContentType, byteImageRequiredHugo)}>
                          <img
                            src={`data:${byteImageRequiredHugoContentType};base64,${byteImageRequiredHugo}`}
                            style={{ maxHeight: '100px' }}
                          />
                        </a>
                        <br />
                        <Row>
                          <Col md="11">
                            <span>
                              {byteImageRequiredHugoContentType}, {byteSize(byteImageRequiredHugo)}
                            </span>
                          </Col>
                          <Col md="1">
                            <Button color="danger" onClick={this.clearBlob('byteImageRequiredHugo')}>
                              <FontAwesomeIcon icon="times-circle" />
                            </Button>
                          </Col>
                        </Row>
                      </div>
                    ) : null}
                    <input
                      id="file_byteImageRequiredHugo"
                      type="file"
                      onChange={this.onBlobChange(true, 'byteImageRequiredHugo')}
                      accept="image/*"
                    />
                    <AvInput
                      type="hidden"
                      name="byteImageRequiredHugo"
                      value={byteImageRequiredHugo}
                      validate={{
                        required: { value: true, errorMessage: translate('entity.validation.required') }
                      }}
                    />
                  </AvGroup>
                </AvGroup>
                <AvGroup>
                  <AvGroup>
                    <Label id="byteImageMinbytesHugoLabel" for="byteImageMinbytesHugo">
                      <Translate contentKey="travisNg2App.fieldTestInfiniteScrollEntity.byteImageMinbytesHugo">
                        Byte Image Minbytes Hugo
                      </Translate>
                    </Label>
                    <br />
                    {byteImageMinbytesHugo ? (
                      <div>
                        <a onClick={openFile(byteImageMinbytesHugoContentType, byteImageMinbytesHugo)}>
                          <img
                            src={`data:${byteImageMinbytesHugoContentType};base64,${byteImageMinbytesHugo}`}
                            style={{ maxHeight: '100px' }}
                          />
                        </a>
                        <br />
                        <Row>
                          <Col md="11">
                            <span>
                              {byteImageMinbytesHugoContentType}, {byteSize(byteImageMinbytesHugo)}
                            </span>
                          </Col>
                          <Col md="1">
                            <Button color="danger" onClick={this.clearBlob('byteImageMinbytesHugo')}>
                              <FontAwesomeIcon icon="times-circle" />
                            </Button>
                          </Col>
                        </Row>
                      </div>
                    ) : null}
                    <input
                      id="file_byteImageMinbytesHugo"
                      type="file"
                      onChange={this.onBlobChange(true, 'byteImageMinbytesHugo')}
                      accept="image/*"
                    />
                    <AvInput type="hidden" name="byteImageMinbytesHugo" value={byteImageMinbytesHugo} validate={{}} />
                  </AvGroup>
                </AvGroup>
                <AvGroup>
                  <AvGroup>
                    <Label id="byteImageMaxbytesHugoLabel" for="byteImageMaxbytesHugo">
                      <Translate contentKey="travisNg2App.fieldTestInfiniteScrollEntity.byteImageMaxbytesHugo">
                        Byte Image Maxbytes Hugo
                      </Translate>
                    </Label>
                    <br />
                    {byteImageMaxbytesHugo ? (
                      <div>
                        <a onClick={openFile(byteImageMaxbytesHugoContentType, byteImageMaxbytesHugo)}>
                          <img
                            src={`data:${byteImageMaxbytesHugoContentType};base64,${byteImageMaxbytesHugo}`}
                            style={{ maxHeight: '100px' }}
                          />
                        </a>
                        <br />
                        <Row>
                          <Col md="11">
                            <span>
                              {byteImageMaxbytesHugoContentType}, {byteSize(byteImageMaxbytesHugo)}
                            </span>
                          </Col>
                          <Col md="1">
                            <Button color="danger" onClick={this.clearBlob('byteImageMaxbytesHugo')}>
                              <FontAwesomeIcon icon="times-circle" />
                            </Button>
                          </Col>
                        </Row>
                      </div>
                    ) : null}
                    <input
                      id="file_byteImageMaxbytesHugo"
                      type="file"
                      onChange={this.onBlobChange(true, 'byteImageMaxbytesHugo')}
                      accept="image/*"
                    />
                    <AvInput type="hidden" name="byteImageMaxbytesHugo" value={byteImageMaxbytesHugo} validate={{}} />
                  </AvGroup>
                </AvGroup>
                <AvGroup>
                  <AvGroup>
                    <Label id="byteAnyHugoLabel" for="byteAnyHugo">
                      <Translate contentKey="travisNg2App.fieldTestInfiniteScrollEntity.byteAnyHugo">Byte Any Hugo</Translate>
                    </Label>
                    <br />
                    {byteAnyHugo ? (
                      <div>
                        <a onClick={openFile(byteAnyHugoContentType, byteAnyHugo)}>
                          <Translate contentKey="entity.action.open">Open</Translate>
                        </a>
                        <br />
                        <Row>
                          <Col md="11">
                            <span>
                              {byteAnyHugoContentType}, {byteSize(byteAnyHugo)}
                            </span>
                          </Col>
                          <Col md="1">
                            <Button color="danger" onClick={this.clearBlob('byteAnyHugo')}>
                              <FontAwesomeIcon icon="times-circle" />
                            </Button>
                          </Col>
                        </Row>
                      </div>
                    ) : null}
                    <input id="file_byteAnyHugo" type="file" onChange={this.onBlobChange(false, 'byteAnyHugo')} />
                    <AvInput type="hidden" name="byteAnyHugo" value={byteAnyHugo} />
                  </AvGroup>
                </AvGroup>
                <AvGroup>
                  <AvGroup>
                    <Label id="byteAnyRequiredHugoLabel" for="byteAnyRequiredHugo">
                      <Translate contentKey="travisNg2App.fieldTestInfiniteScrollEntity.byteAnyRequiredHugo">
                        Byte Any Required Hugo
                      </Translate>
                    </Label>
                    <br />
                    {byteAnyRequiredHugo ? (
                      <div>
                        <a onClick={openFile(byteAnyRequiredHugoContentType, byteAnyRequiredHugo)}>
                          <Translate contentKey="entity.action.open">Open</Translate>
                        </a>
                        <br />
                        <Row>
                          <Col md="11">
                            <span>
                              {byteAnyRequiredHugoContentType}, {byteSize(byteAnyRequiredHugo)}
                            </span>
                          </Col>
                          <Col md="1">
                            <Button color="danger" onClick={this.clearBlob('byteAnyRequiredHugo')}>
                              <FontAwesomeIcon icon="times-circle" />
                            </Button>
                          </Col>
                        </Row>
                      </div>
                    ) : null}
                    <input id="file_byteAnyRequiredHugo" type="file" onChange={this.onBlobChange(false, 'byteAnyRequiredHugo')} />
                    <AvInput
                      type="hidden"
                      name="byteAnyRequiredHugo"
                      value={byteAnyRequiredHugo}
                      validate={{
                        required: { value: true, errorMessage: translate('entity.validation.required') }
                      }}
                    />
                  </AvGroup>
                </AvGroup>
                <AvGroup>
                  <AvGroup>
                    <Label id="byteAnyMinbytesHugoLabel" for="byteAnyMinbytesHugo">
                      <Translate contentKey="travisNg2App.fieldTestInfiniteScrollEntity.byteAnyMinbytesHugo">
                        Byte Any Minbytes Hugo
                      </Translate>
                    </Label>
                    <br />
                    {byteAnyMinbytesHugo ? (
                      <div>
                        <a onClick={openFile(byteAnyMinbytesHugoContentType, byteAnyMinbytesHugo)}>
                          <Translate contentKey="entity.action.open">Open</Translate>
                        </a>
                        <br />
                        <Row>
                          <Col md="11">
                            <span>
                              {byteAnyMinbytesHugoContentType}, {byteSize(byteAnyMinbytesHugo)}
                            </span>
                          </Col>
                          <Col md="1">
                            <Button color="danger" onClick={this.clearBlob('byteAnyMinbytesHugo')}>
                              <FontAwesomeIcon icon="times-circle" />
                            </Button>
                          </Col>
                        </Row>
                      </div>
                    ) : null}
                    <input id="file_byteAnyMinbytesHugo" type="file" onChange={this.onBlobChange(false, 'byteAnyMinbytesHugo')} />
                    <AvInput type="hidden" name="byteAnyMinbytesHugo" value={byteAnyMinbytesHugo} validate={{}} />
                  </AvGroup>
                </AvGroup>
                <AvGroup>
                  <AvGroup>
                    <Label id="byteAnyMaxbytesHugoLabel" for="byteAnyMaxbytesHugo">
                      <Translate contentKey="travisNg2App.fieldTestInfiniteScrollEntity.byteAnyMaxbytesHugo">
                        Byte Any Maxbytes Hugo
                      </Translate>
                    </Label>
                    <br />
                    {byteAnyMaxbytesHugo ? (
                      <div>
                        <a onClick={openFile(byteAnyMaxbytesHugoContentType, byteAnyMaxbytesHugo)}>
                          <Translate contentKey="entity.action.open">Open</Translate>
                        </a>
                        <br />
                        <Row>
                          <Col md="11">
                            <span>
                              {byteAnyMaxbytesHugoContentType}, {byteSize(byteAnyMaxbytesHugo)}
                            </span>
                          </Col>
                          <Col md="1">
                            <Button color="danger" onClick={this.clearBlob('byteAnyMaxbytesHugo')}>
                              <FontAwesomeIcon icon="times-circle" />
                            </Button>
                          </Col>
                        </Row>
                      </div>
                    ) : null}
                    <input id="file_byteAnyMaxbytesHugo" type="file" onChange={this.onBlobChange(false, 'byteAnyMaxbytesHugo')} />
                    <AvInput type="hidden" name="byteAnyMaxbytesHugo" value={byteAnyMaxbytesHugo} validate={{}} />
                  </AvGroup>
                </AvGroup>
                <AvGroup>
                  <Label id="byteTextHugoLabel" for="field-test-infinite-scroll-entity-byteTextHugo">
                    <Translate contentKey="travisNg2App.fieldTestInfiniteScrollEntity.byteTextHugo">Byte Text Hugo</Translate>
                  </Label>
                  <AvInput id="field-test-infinite-scroll-entity-byteTextHugo" type="textarea" name="byteTextHugo" />
                </AvGroup>
                <AvGroup>
                  <Label id="byteTextRequiredHugoLabel" for="field-test-infinite-scroll-entity-byteTextRequiredHugo">
                    <Translate contentKey="travisNg2App.fieldTestInfiniteScrollEntity.byteTextRequiredHugo">
                      Byte Text Required Hugo
                    </Translate>
                  </Label>
                  <AvInput
                    id="field-test-infinite-scroll-entity-byteTextRequiredHugo"
                    type="textarea"
                    name="byteTextRequiredHugo"
                    validate={{
                      required: { value: true, errorMessage: translate('entity.validation.required') }
                    }}
                  />
                </AvGroup>
                <Button tag={Link} id="cancel-save" to="/field-test-infinite-scroll-entity" replace color="info">
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
  fieldTestInfiniteScrollEntityEntity: storeState.fieldTestInfiniteScrollEntity.entity,
  loading: storeState.fieldTestInfiniteScrollEntity.loading,
  updating: storeState.fieldTestInfiniteScrollEntity.updating,
  updateSuccess: storeState.fieldTestInfiniteScrollEntity.updateSuccess
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
)(FieldTestInfiniteScrollEntityUpdate);
