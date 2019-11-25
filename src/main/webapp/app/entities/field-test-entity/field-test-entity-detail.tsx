import React from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import { Translate, ICrudGetAction, openFile, byteSize, TextFormat } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IRootState } from 'app/shared/reducers';
import { getEntity } from './field-test-entity.reducer';
import { IFieldTestEntity } from 'app/shared/model/field-test-entity.model';
import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';

export interface IFieldTestEntityDetailProps extends StateProps, DispatchProps, RouteComponentProps<{ id: string }> {}

export class FieldTestEntityDetail extends React.Component<IFieldTestEntityDetailProps> {
  componentDidMount() {
    this.props.getEntity(this.props.match.params.id);
  }

  render() {
    const { fieldTestEntityEntity } = this.props;
    return (
      <Row>
        <Col md="8">
          <h2>
            <Translate contentKey="travisNg2App.fieldTestEntity.detail.title">FieldTestEntity</Translate> [<b>{fieldTestEntityEntity.id}</b>
            ]
          </h2>
          <dl className="jh-entity-details">
            <dt>
              <span id="stringTom">
                <Translate contentKey="travisNg2App.fieldTestEntity.stringTom">String Tom</Translate>
              </span>
            </dt>
            <dd>{fieldTestEntityEntity.stringTom}</dd>
            <dt>
              <span id="stringRequiredTom">
                <Translate contentKey="travisNg2App.fieldTestEntity.stringRequiredTom">String Required Tom</Translate>
              </span>
            </dt>
            <dd>{fieldTestEntityEntity.stringRequiredTom}</dd>
            <dt>
              <span id="stringMinlengthTom">
                <Translate contentKey="travisNg2App.fieldTestEntity.stringMinlengthTom">String Minlength Tom</Translate>
              </span>
            </dt>
            <dd>{fieldTestEntityEntity.stringMinlengthTom}</dd>
            <dt>
              <span id="stringMaxlengthTom">
                <Translate contentKey="travisNg2App.fieldTestEntity.stringMaxlengthTom">String Maxlength Tom</Translate>
              </span>
            </dt>
            <dd>{fieldTestEntityEntity.stringMaxlengthTom}</dd>
            <dt>
              <span id="stringPatternTom">
                <Translate contentKey="travisNg2App.fieldTestEntity.stringPatternTom">String Pattern Tom</Translate>
              </span>
            </dt>
            <dd>{fieldTestEntityEntity.stringPatternTom}</dd>
            <dt>
              <span id="integerTom">
                <Translate contentKey="travisNg2App.fieldTestEntity.integerTom">Integer Tom</Translate>
              </span>
            </dt>
            <dd>{fieldTestEntityEntity.integerTom}</dd>
            <dt>
              <span id="integerRequiredTom">
                <Translate contentKey="travisNg2App.fieldTestEntity.integerRequiredTom">Integer Required Tom</Translate>
              </span>
            </dt>
            <dd>{fieldTestEntityEntity.integerRequiredTom}</dd>
            <dt>
              <span id="integerMinTom">
                <Translate contentKey="travisNg2App.fieldTestEntity.integerMinTom">Integer Min Tom</Translate>
              </span>
            </dt>
            <dd>{fieldTestEntityEntity.integerMinTom}</dd>
            <dt>
              <span id="integerMaxTom">
                <Translate contentKey="travisNg2App.fieldTestEntity.integerMaxTom">Integer Max Tom</Translate>
              </span>
            </dt>
            <dd>{fieldTestEntityEntity.integerMaxTom}</dd>
            <dt>
              <span id="longTom">
                <Translate contentKey="travisNg2App.fieldTestEntity.longTom">Long Tom</Translate>
              </span>
            </dt>
            <dd>{fieldTestEntityEntity.longTom}</dd>
            <dt>
              <span id="longRequiredTom">
                <Translate contentKey="travisNg2App.fieldTestEntity.longRequiredTom">Long Required Tom</Translate>
              </span>
            </dt>
            <dd>{fieldTestEntityEntity.longRequiredTom}</dd>
            <dt>
              <span id="longMinTom">
                <Translate contentKey="travisNg2App.fieldTestEntity.longMinTom">Long Min Tom</Translate>
              </span>
            </dt>
            <dd>{fieldTestEntityEntity.longMinTom}</dd>
            <dt>
              <span id="longMaxTom">
                <Translate contentKey="travisNg2App.fieldTestEntity.longMaxTom">Long Max Tom</Translate>
              </span>
            </dt>
            <dd>{fieldTestEntityEntity.longMaxTom}</dd>
            <dt>
              <span id="floatTom">
                <Translate contentKey="travisNg2App.fieldTestEntity.floatTom">Float Tom</Translate>
              </span>
            </dt>
            <dd>{fieldTestEntityEntity.floatTom}</dd>
            <dt>
              <span id="floatRequiredTom">
                <Translate contentKey="travisNg2App.fieldTestEntity.floatRequiredTom">Float Required Tom</Translate>
              </span>
            </dt>
            <dd>{fieldTestEntityEntity.floatRequiredTom}</dd>
            <dt>
              <span id="floatMinTom">
                <Translate contentKey="travisNg2App.fieldTestEntity.floatMinTom">Float Min Tom</Translate>
              </span>
            </dt>
            <dd>{fieldTestEntityEntity.floatMinTom}</dd>
            <dt>
              <span id="floatMaxTom">
                <Translate contentKey="travisNg2App.fieldTestEntity.floatMaxTom">Float Max Tom</Translate>
              </span>
            </dt>
            <dd>{fieldTestEntityEntity.floatMaxTom}</dd>
            <dt>
              <span id="doubleRequiredTom">
                <Translate contentKey="travisNg2App.fieldTestEntity.doubleRequiredTom">Double Required Tom</Translate>
              </span>
            </dt>
            <dd>{fieldTestEntityEntity.doubleRequiredTom}</dd>
            <dt>
              <span id="doubleMinTom">
                <Translate contentKey="travisNg2App.fieldTestEntity.doubleMinTom">Double Min Tom</Translate>
              </span>
            </dt>
            <dd>{fieldTestEntityEntity.doubleMinTom}</dd>
            <dt>
              <span id="doubleMaxTom">
                <Translate contentKey="travisNg2App.fieldTestEntity.doubleMaxTom">Double Max Tom</Translate>
              </span>
            </dt>
            <dd>{fieldTestEntityEntity.doubleMaxTom}</dd>
            <dt>
              <span id="bigDecimalRequiredTom">
                <Translate contentKey="travisNg2App.fieldTestEntity.bigDecimalRequiredTom">Big Decimal Required Tom</Translate>
              </span>
            </dt>
            <dd>{fieldTestEntityEntity.bigDecimalRequiredTom}</dd>
            <dt>
              <span id="bigDecimalMinTom">
                <Translate contentKey="travisNg2App.fieldTestEntity.bigDecimalMinTom">Big Decimal Min Tom</Translate>
              </span>
            </dt>
            <dd>{fieldTestEntityEntity.bigDecimalMinTom}</dd>
            <dt>
              <span id="bigDecimalMaxTom">
                <Translate contentKey="travisNg2App.fieldTestEntity.bigDecimalMaxTom">Big Decimal Max Tom</Translate>
              </span>
            </dt>
            <dd>{fieldTestEntityEntity.bigDecimalMaxTom}</dd>
            <dt>
              <span id="localDateTom">
                <Translate contentKey="travisNg2App.fieldTestEntity.localDateTom">Local Date Tom</Translate>
              </span>
            </dt>
            <dd>
              <TextFormat value={fieldTestEntityEntity.localDateTom} type="date" format={APP_LOCAL_DATE_FORMAT} />
            </dd>
            <dt>
              <span id="localDateRequiredTom">
                <Translate contentKey="travisNg2App.fieldTestEntity.localDateRequiredTom">Local Date Required Tom</Translate>
              </span>
            </dt>
            <dd>
              <TextFormat value={fieldTestEntityEntity.localDateRequiredTom} type="date" format={APP_LOCAL_DATE_FORMAT} />
            </dd>
            <dt>
              <span id="instantTom">
                <Translate contentKey="travisNg2App.fieldTestEntity.instantTom">Instant Tom</Translate>
              </span>
            </dt>
            <dd>
              <TextFormat value={fieldTestEntityEntity.instantTom} type="date" format={APP_DATE_FORMAT} />
            </dd>
            <dt>
              <span id="instantRequiredTom">
                <Translate contentKey="travisNg2App.fieldTestEntity.instantRequiredTom">Instant Required Tom</Translate>
              </span>
            </dt>
            <dd>
              <TextFormat value={fieldTestEntityEntity.instantRequiredTom} type="date" format={APP_DATE_FORMAT} />
            </dd>
            <dt>
              <span id="zonedDateTimeTom">
                <Translate contentKey="travisNg2App.fieldTestEntity.zonedDateTimeTom">Zoned Date Time Tom</Translate>
              </span>
            </dt>
            <dd>
              <TextFormat value={fieldTestEntityEntity.zonedDateTimeTom} type="date" format={APP_DATE_FORMAT} />
            </dd>
            <dt>
              <span id="zonedDateTimeRequiredTom">
                <Translate contentKey="travisNg2App.fieldTestEntity.zonedDateTimeRequiredTom">Zoned Date Time Required Tom</Translate>
              </span>
            </dt>
            <dd>
              <TextFormat value={fieldTestEntityEntity.zonedDateTimeRequiredTom} type="date" format={APP_DATE_FORMAT} />
            </dd>
            <dt>
              <span id="durationTom">
                <Translate contentKey="travisNg2App.fieldTestEntity.durationTom">Duration Tom</Translate>
              </span>
            </dt>
            <dd>{fieldTestEntityEntity.durationTom}</dd>
            <dt>
              <span id="durationRequiredTom">
                <Translate contentKey="travisNg2App.fieldTestEntity.durationRequiredTom">Duration Required Tom</Translate>
              </span>
            </dt>
            <dd>{fieldTestEntityEntity.durationRequiredTom}</dd>
            <dt>
              <span id="booleanTom">
                <Translate contentKey="travisNg2App.fieldTestEntity.booleanTom">Boolean Tom</Translate>
              </span>
            </dt>
            <dd>{fieldTestEntityEntity.booleanTom ? 'true' : 'false'}</dd>
            <dt>
              <span id="booleanRequiredTom">
                <Translate contentKey="travisNg2App.fieldTestEntity.booleanRequiredTom">Boolean Required Tom</Translate>
              </span>
            </dt>
            <dd>{fieldTestEntityEntity.booleanRequiredTom ? 'true' : 'false'}</dd>
            <dt>
              <span id="enumTom">
                <Translate contentKey="travisNg2App.fieldTestEntity.enumTom">Enum Tom</Translate>
              </span>
            </dt>
            <dd>{fieldTestEntityEntity.enumTom}</dd>
            <dt>
              <span id="enumRequiredTom">
                <Translate contentKey="travisNg2App.fieldTestEntity.enumRequiredTom">Enum Required Tom</Translate>
              </span>
            </dt>
            <dd>{fieldTestEntityEntity.enumRequiredTom}</dd>
            <dt>
              <span id="uuidTom">
                <Translate contentKey="travisNg2App.fieldTestEntity.uuidTom">Uuid Tom</Translate>
              </span>
            </dt>
            <dd>{fieldTestEntityEntity.uuidTom}</dd>
            <dt>
              <span id="uuidRequiredTom">
                <Translate contentKey="travisNg2App.fieldTestEntity.uuidRequiredTom">Uuid Required Tom</Translate>
              </span>
            </dt>
            <dd>{fieldTestEntityEntity.uuidRequiredTom}</dd>
            <dt>
              <span id="byteImageTom">
                <Translate contentKey="travisNg2App.fieldTestEntity.byteImageTom">Byte Image Tom</Translate>
              </span>
            </dt>
            <dd>
              {fieldTestEntityEntity.byteImageTom ? (
                <div>
                  <a onClick={openFile(fieldTestEntityEntity.byteImageTomContentType, fieldTestEntityEntity.byteImageTom)}>
                    <img
                      src={`data:${fieldTestEntityEntity.byteImageTomContentType};base64,${fieldTestEntityEntity.byteImageTom}`}
                      style={{ maxHeight: '30px' }}
                    />
                  </a>
                  <span>
                    {fieldTestEntityEntity.byteImageTomContentType}, {byteSize(fieldTestEntityEntity.byteImageTom)}
                  </span>
                </div>
              ) : null}
            </dd>
            <dt>
              <span id="byteImageRequiredTom">
                <Translate contentKey="travisNg2App.fieldTestEntity.byteImageRequiredTom">Byte Image Required Tom</Translate>
              </span>
            </dt>
            <dd>
              {fieldTestEntityEntity.byteImageRequiredTom ? (
                <div>
                  <a onClick={openFile(fieldTestEntityEntity.byteImageRequiredTomContentType, fieldTestEntityEntity.byteImageRequiredTom)}>
                    <img
                      src={`data:${fieldTestEntityEntity.byteImageRequiredTomContentType};base64,${
                        fieldTestEntityEntity.byteImageRequiredTom
                      }`}
                      style={{ maxHeight: '30px' }}
                    />
                  </a>
                  <span>
                    {fieldTestEntityEntity.byteImageRequiredTomContentType}, {byteSize(fieldTestEntityEntity.byteImageRequiredTom)}
                  </span>
                </div>
              ) : null}
            </dd>
            <dt>
              <span id="byteImageMinbytesTom">
                <Translate contentKey="travisNg2App.fieldTestEntity.byteImageMinbytesTom">Byte Image Minbytes Tom</Translate>
              </span>
            </dt>
            <dd>
              {fieldTestEntityEntity.byteImageMinbytesTom ? (
                <div>
                  <a onClick={openFile(fieldTestEntityEntity.byteImageMinbytesTomContentType, fieldTestEntityEntity.byteImageMinbytesTom)}>
                    <img
                      src={`data:${fieldTestEntityEntity.byteImageMinbytesTomContentType};base64,${
                        fieldTestEntityEntity.byteImageMinbytesTom
                      }`}
                      style={{ maxHeight: '30px' }}
                    />
                  </a>
                  <span>
                    {fieldTestEntityEntity.byteImageMinbytesTomContentType}, {byteSize(fieldTestEntityEntity.byteImageMinbytesTom)}
                  </span>
                </div>
              ) : null}
            </dd>
            <dt>
              <span id="byteImageMaxbytesTom">
                <Translate contentKey="travisNg2App.fieldTestEntity.byteImageMaxbytesTom">Byte Image Maxbytes Tom</Translate>
              </span>
            </dt>
            <dd>
              {fieldTestEntityEntity.byteImageMaxbytesTom ? (
                <div>
                  <a onClick={openFile(fieldTestEntityEntity.byteImageMaxbytesTomContentType, fieldTestEntityEntity.byteImageMaxbytesTom)}>
                    <img
                      src={`data:${fieldTestEntityEntity.byteImageMaxbytesTomContentType};base64,${
                        fieldTestEntityEntity.byteImageMaxbytesTom
                      }`}
                      style={{ maxHeight: '30px' }}
                    />
                  </a>
                  <span>
                    {fieldTestEntityEntity.byteImageMaxbytesTomContentType}, {byteSize(fieldTestEntityEntity.byteImageMaxbytesTom)}
                  </span>
                </div>
              ) : null}
            </dd>
            <dt>
              <span id="byteAnyTom">
                <Translate contentKey="travisNg2App.fieldTestEntity.byteAnyTom">Byte Any Tom</Translate>
              </span>
            </dt>
            <dd>
              {fieldTestEntityEntity.byteAnyTom ? (
                <div>
                  <a onClick={openFile(fieldTestEntityEntity.byteAnyTomContentType, fieldTestEntityEntity.byteAnyTom)}>
                    <Translate contentKey="entity.action.open">Open</Translate>&nbsp;
                  </a>
                  <span>
                    {fieldTestEntityEntity.byteAnyTomContentType}, {byteSize(fieldTestEntityEntity.byteAnyTom)}
                  </span>
                </div>
              ) : null}
            </dd>
            <dt>
              <span id="byteAnyRequiredTom">
                <Translate contentKey="travisNg2App.fieldTestEntity.byteAnyRequiredTom">Byte Any Required Tom</Translate>
              </span>
            </dt>
            <dd>
              {fieldTestEntityEntity.byteAnyRequiredTom ? (
                <div>
                  <a onClick={openFile(fieldTestEntityEntity.byteAnyRequiredTomContentType, fieldTestEntityEntity.byteAnyRequiredTom)}>
                    <Translate contentKey="entity.action.open">Open</Translate>&nbsp;
                  </a>
                  <span>
                    {fieldTestEntityEntity.byteAnyRequiredTomContentType}, {byteSize(fieldTestEntityEntity.byteAnyRequiredTom)}
                  </span>
                </div>
              ) : null}
            </dd>
            <dt>
              <span id="byteAnyMinbytesTom">
                <Translate contentKey="travisNg2App.fieldTestEntity.byteAnyMinbytesTom">Byte Any Minbytes Tom</Translate>
              </span>
            </dt>
            <dd>
              {fieldTestEntityEntity.byteAnyMinbytesTom ? (
                <div>
                  <a onClick={openFile(fieldTestEntityEntity.byteAnyMinbytesTomContentType, fieldTestEntityEntity.byteAnyMinbytesTom)}>
                    <Translate contentKey="entity.action.open">Open</Translate>&nbsp;
                  </a>
                  <span>
                    {fieldTestEntityEntity.byteAnyMinbytesTomContentType}, {byteSize(fieldTestEntityEntity.byteAnyMinbytesTom)}
                  </span>
                </div>
              ) : null}
            </dd>
            <dt>
              <span id="byteAnyMaxbytesTom">
                <Translate contentKey="travisNg2App.fieldTestEntity.byteAnyMaxbytesTom">Byte Any Maxbytes Tom</Translate>
              </span>
            </dt>
            <dd>
              {fieldTestEntityEntity.byteAnyMaxbytesTom ? (
                <div>
                  <a onClick={openFile(fieldTestEntityEntity.byteAnyMaxbytesTomContentType, fieldTestEntityEntity.byteAnyMaxbytesTom)}>
                    <Translate contentKey="entity.action.open">Open</Translate>&nbsp;
                  </a>
                  <span>
                    {fieldTestEntityEntity.byteAnyMaxbytesTomContentType}, {byteSize(fieldTestEntityEntity.byteAnyMaxbytesTom)}
                  </span>
                </div>
              ) : null}
            </dd>
            <dt>
              <span id="byteTextTom">
                <Translate contentKey="travisNg2App.fieldTestEntity.byteTextTom">Byte Text Tom</Translate>
              </span>
            </dt>
            <dd>{fieldTestEntityEntity.byteTextTom}</dd>
            <dt>
              <span id="byteTextRequiredTom">
                <Translate contentKey="travisNg2App.fieldTestEntity.byteTextRequiredTom">Byte Text Required Tom</Translate>
              </span>
            </dt>
            <dd>{fieldTestEntityEntity.byteTextRequiredTom}</dd>
          </dl>
          <Button tag={Link} to="/field-test-entity" replace color="info">
            <FontAwesomeIcon icon="arrow-left" />{' '}
            <span className="d-none d-md-inline">
              <Translate contentKey="entity.action.back">Back</Translate>
            </span>
          </Button>
          &nbsp;
          <Button tag={Link} to={`/field-test-entity/${fieldTestEntityEntity.id}/edit`} replace color="primary">
            <FontAwesomeIcon icon="pencil-alt" />{' '}
            <span className="d-none d-md-inline">
              <Translate contentKey="entity.action.edit">Edit</Translate>
            </span>
          </Button>
        </Col>
      </Row>
    );
  }
}

const mapStateToProps = ({ fieldTestEntity }: IRootState) => ({
  fieldTestEntityEntity: fieldTestEntity.entity
});

const mapDispatchToProps = { getEntity };

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FieldTestEntityDetail);
