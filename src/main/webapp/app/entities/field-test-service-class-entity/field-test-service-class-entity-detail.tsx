import React from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import { Translate, ICrudGetAction, openFile, byteSize, TextFormat } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IRootState } from 'app/shared/reducers';
import { getEntity } from './field-test-service-class-entity.reducer';
import { IFieldTestServiceClassEntity } from 'app/shared/model/field-test-service-class-entity.model';
import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';

export interface IFieldTestServiceClassEntityDetailProps extends StateProps, DispatchProps, RouteComponentProps<{ id: string }> {}

export class FieldTestServiceClassEntityDetail extends React.Component<IFieldTestServiceClassEntityDetailProps> {
  componentDidMount() {
    this.props.getEntity(this.props.match.params.id);
  }

  render() {
    const { fieldTestServiceClassEntityEntity } = this.props;
    return (
      <Row>
        <Col md="8">
          <h2>
            <Translate contentKey="travisNg2App.fieldTestServiceClassEntity.detail.title">FieldTestServiceClassEntity</Translate> [
            <b>{fieldTestServiceClassEntityEntity.id}</b>]
          </h2>
          <dl className="jh-entity-details">
            <dt>
              <span id="stringBob">
                <Translate contentKey="travisNg2App.fieldTestServiceClassEntity.stringBob">String Bob</Translate>
              </span>
            </dt>
            <dd>{fieldTestServiceClassEntityEntity.stringBob}</dd>
            <dt>
              <span id="stringRequiredBob">
                <Translate contentKey="travisNg2App.fieldTestServiceClassEntity.stringRequiredBob">String Required Bob</Translate>
              </span>
            </dt>
            <dd>{fieldTestServiceClassEntityEntity.stringRequiredBob}</dd>
            <dt>
              <span id="stringMinlengthBob">
                <Translate contentKey="travisNg2App.fieldTestServiceClassEntity.stringMinlengthBob">String Minlength Bob</Translate>
              </span>
            </dt>
            <dd>{fieldTestServiceClassEntityEntity.stringMinlengthBob}</dd>
            <dt>
              <span id="stringMaxlengthBob">
                <Translate contentKey="travisNg2App.fieldTestServiceClassEntity.stringMaxlengthBob">String Maxlength Bob</Translate>
              </span>
            </dt>
            <dd>{fieldTestServiceClassEntityEntity.stringMaxlengthBob}</dd>
            <dt>
              <span id="stringPatternBob">
                <Translate contentKey="travisNg2App.fieldTestServiceClassEntity.stringPatternBob">String Pattern Bob</Translate>
              </span>
            </dt>
            <dd>{fieldTestServiceClassEntityEntity.stringPatternBob}</dd>
            <dt>
              <span id="integerBob">
                <Translate contentKey="travisNg2App.fieldTestServiceClassEntity.integerBob">Integer Bob</Translate>
              </span>
            </dt>
            <dd>{fieldTestServiceClassEntityEntity.integerBob}</dd>
            <dt>
              <span id="integerRequiredBob">
                <Translate contentKey="travisNg2App.fieldTestServiceClassEntity.integerRequiredBob">Integer Required Bob</Translate>
              </span>
            </dt>
            <dd>{fieldTestServiceClassEntityEntity.integerRequiredBob}</dd>
            <dt>
              <span id="integerMinBob">
                <Translate contentKey="travisNg2App.fieldTestServiceClassEntity.integerMinBob">Integer Min Bob</Translate>
              </span>
            </dt>
            <dd>{fieldTestServiceClassEntityEntity.integerMinBob}</dd>
            <dt>
              <span id="integerMaxBob">
                <Translate contentKey="travisNg2App.fieldTestServiceClassEntity.integerMaxBob">Integer Max Bob</Translate>
              </span>
            </dt>
            <dd>{fieldTestServiceClassEntityEntity.integerMaxBob}</dd>
            <dt>
              <span id="longBob">
                <Translate contentKey="travisNg2App.fieldTestServiceClassEntity.longBob">Long Bob</Translate>
              </span>
            </dt>
            <dd>{fieldTestServiceClassEntityEntity.longBob}</dd>
            <dt>
              <span id="longRequiredBob">
                <Translate contentKey="travisNg2App.fieldTestServiceClassEntity.longRequiredBob">Long Required Bob</Translate>
              </span>
            </dt>
            <dd>{fieldTestServiceClassEntityEntity.longRequiredBob}</dd>
            <dt>
              <span id="longMinBob">
                <Translate contentKey="travisNg2App.fieldTestServiceClassEntity.longMinBob">Long Min Bob</Translate>
              </span>
            </dt>
            <dd>{fieldTestServiceClassEntityEntity.longMinBob}</dd>
            <dt>
              <span id="longMaxBob">
                <Translate contentKey="travisNg2App.fieldTestServiceClassEntity.longMaxBob">Long Max Bob</Translate>
              </span>
            </dt>
            <dd>{fieldTestServiceClassEntityEntity.longMaxBob}</dd>
            <dt>
              <span id="floatBob">
                <Translate contentKey="travisNg2App.fieldTestServiceClassEntity.floatBob">Float Bob</Translate>
              </span>
            </dt>
            <dd>{fieldTestServiceClassEntityEntity.floatBob}</dd>
            <dt>
              <span id="floatRequiredBob">
                <Translate contentKey="travisNg2App.fieldTestServiceClassEntity.floatRequiredBob">Float Required Bob</Translate>
              </span>
            </dt>
            <dd>{fieldTestServiceClassEntityEntity.floatRequiredBob}</dd>
            <dt>
              <span id="floatMinBob">
                <Translate contentKey="travisNg2App.fieldTestServiceClassEntity.floatMinBob">Float Min Bob</Translate>
              </span>
            </dt>
            <dd>{fieldTestServiceClassEntityEntity.floatMinBob}</dd>
            <dt>
              <span id="floatMaxBob">
                <Translate contentKey="travisNg2App.fieldTestServiceClassEntity.floatMaxBob">Float Max Bob</Translate>
              </span>
            </dt>
            <dd>{fieldTestServiceClassEntityEntity.floatMaxBob}</dd>
            <dt>
              <span id="doubleRequiredBob">
                <Translate contentKey="travisNg2App.fieldTestServiceClassEntity.doubleRequiredBob">Double Required Bob</Translate>
              </span>
            </dt>
            <dd>{fieldTestServiceClassEntityEntity.doubleRequiredBob}</dd>
            <dt>
              <span id="doubleMinBob">
                <Translate contentKey="travisNg2App.fieldTestServiceClassEntity.doubleMinBob">Double Min Bob</Translate>
              </span>
            </dt>
            <dd>{fieldTestServiceClassEntityEntity.doubleMinBob}</dd>
            <dt>
              <span id="doubleMaxBob">
                <Translate contentKey="travisNg2App.fieldTestServiceClassEntity.doubleMaxBob">Double Max Bob</Translate>
              </span>
            </dt>
            <dd>{fieldTestServiceClassEntityEntity.doubleMaxBob}</dd>
            <dt>
              <span id="bigDecimalRequiredBob">
                <Translate contentKey="travisNg2App.fieldTestServiceClassEntity.bigDecimalRequiredBob">Big Decimal Required Bob</Translate>
              </span>
            </dt>
            <dd>{fieldTestServiceClassEntityEntity.bigDecimalRequiredBob}</dd>
            <dt>
              <span id="bigDecimalMinBob">
                <Translate contentKey="travisNg2App.fieldTestServiceClassEntity.bigDecimalMinBob">Big Decimal Min Bob</Translate>
              </span>
            </dt>
            <dd>{fieldTestServiceClassEntityEntity.bigDecimalMinBob}</dd>
            <dt>
              <span id="bigDecimalMaxBob">
                <Translate contentKey="travisNg2App.fieldTestServiceClassEntity.bigDecimalMaxBob">Big Decimal Max Bob</Translate>
              </span>
            </dt>
            <dd>{fieldTestServiceClassEntityEntity.bigDecimalMaxBob}</dd>
            <dt>
              <span id="localDateBob">
                <Translate contentKey="travisNg2App.fieldTestServiceClassEntity.localDateBob">Local Date Bob</Translate>
              </span>
            </dt>
            <dd>
              <TextFormat value={fieldTestServiceClassEntityEntity.localDateBob} type="date" format={APP_LOCAL_DATE_FORMAT} />
            </dd>
            <dt>
              <span id="localDateRequiredBob">
                <Translate contentKey="travisNg2App.fieldTestServiceClassEntity.localDateRequiredBob">Local Date Required Bob</Translate>
              </span>
            </dt>
            <dd>
              <TextFormat value={fieldTestServiceClassEntityEntity.localDateRequiredBob} type="date" format={APP_LOCAL_DATE_FORMAT} />
            </dd>
            <dt>
              <span id="instantBob">
                <Translate contentKey="travisNg2App.fieldTestServiceClassEntity.instantBob">Instant Bob</Translate>
              </span>
            </dt>
            <dd>
              <TextFormat value={fieldTestServiceClassEntityEntity.instantBob} type="date" format={APP_DATE_FORMAT} />
            </dd>
            <dt>
              <span id="instanteRequiredBob">
                <Translate contentKey="travisNg2App.fieldTestServiceClassEntity.instanteRequiredBob">Instante Required Bob</Translate>
              </span>
            </dt>
            <dd>
              <TextFormat value={fieldTestServiceClassEntityEntity.instanteRequiredBob} type="date" format={APP_DATE_FORMAT} />
            </dd>
            <dt>
              <span id="zonedDateTimeBob">
                <Translate contentKey="travisNg2App.fieldTestServiceClassEntity.zonedDateTimeBob">Zoned Date Time Bob</Translate>
              </span>
            </dt>
            <dd>
              <TextFormat value={fieldTestServiceClassEntityEntity.zonedDateTimeBob} type="date" format={APP_DATE_FORMAT} />
            </dd>
            <dt>
              <span id="zonedDateTimeRequiredBob">
                <Translate contentKey="travisNg2App.fieldTestServiceClassEntity.zonedDateTimeRequiredBob">
                  Zoned Date Time Required Bob
                </Translate>
              </span>
            </dt>
            <dd>
              <TextFormat value={fieldTestServiceClassEntityEntity.zonedDateTimeRequiredBob} type="date" format={APP_DATE_FORMAT} />
            </dd>
            <dt>
              <span id="durationBob">
                <Translate contentKey="travisNg2App.fieldTestServiceClassEntity.durationBob">Duration Bob</Translate>
              </span>
            </dt>
            <dd>{fieldTestServiceClassEntityEntity.durationBob}</dd>
            <dt>
              <span id="durationRequiredBob">
                <Translate contentKey="travisNg2App.fieldTestServiceClassEntity.durationRequiredBob">Duration Required Bob</Translate>
              </span>
            </dt>
            <dd>{fieldTestServiceClassEntityEntity.durationRequiredBob}</dd>
            <dt>
              <span id="booleanBob">
                <Translate contentKey="travisNg2App.fieldTestServiceClassEntity.booleanBob">Boolean Bob</Translate>
              </span>
            </dt>
            <dd>{fieldTestServiceClassEntityEntity.booleanBob ? 'true' : 'false'}</dd>
            <dt>
              <span id="booleanRequiredBob">
                <Translate contentKey="travisNg2App.fieldTestServiceClassEntity.booleanRequiredBob">Boolean Required Bob</Translate>
              </span>
            </dt>
            <dd>{fieldTestServiceClassEntityEntity.booleanRequiredBob ? 'true' : 'false'}</dd>
            <dt>
              <span id="enumBob">
                <Translate contentKey="travisNg2App.fieldTestServiceClassEntity.enumBob">Enum Bob</Translate>
              </span>
            </dt>
            <dd>{fieldTestServiceClassEntityEntity.enumBob}</dd>
            <dt>
              <span id="enumRequiredBob">
                <Translate contentKey="travisNg2App.fieldTestServiceClassEntity.enumRequiredBob">Enum Required Bob</Translate>
              </span>
            </dt>
            <dd>{fieldTestServiceClassEntityEntity.enumRequiredBob}</dd>
            <dt>
              <span id="uuidBob">
                <Translate contentKey="travisNg2App.fieldTestServiceClassEntity.uuidBob">Uuid Bob</Translate>
              </span>
            </dt>
            <dd>{fieldTestServiceClassEntityEntity.uuidBob}</dd>
            <dt>
              <span id="uuidRequiredBob">
                <Translate contentKey="travisNg2App.fieldTestServiceClassEntity.uuidRequiredBob">Uuid Required Bob</Translate>
              </span>
            </dt>
            <dd>{fieldTestServiceClassEntityEntity.uuidRequiredBob}</dd>
            <dt>
              <span id="byteImageBob">
                <Translate contentKey="travisNg2App.fieldTestServiceClassEntity.byteImageBob">Byte Image Bob</Translate>
              </span>
            </dt>
            <dd>
              {fieldTestServiceClassEntityEntity.byteImageBob ? (
                <div>
                  <a
                    onClick={openFile(
                      fieldTestServiceClassEntityEntity.byteImageBobContentType,
                      fieldTestServiceClassEntityEntity.byteImageBob
                    )}
                  >
                    <img
                      src={`data:${fieldTestServiceClassEntityEntity.byteImageBobContentType};base64,${
                        fieldTestServiceClassEntityEntity.byteImageBob
                      }`}
                      style={{ maxHeight: '30px' }}
                    />
                  </a>
                  <span>
                    {fieldTestServiceClassEntityEntity.byteImageBobContentType}, {byteSize(fieldTestServiceClassEntityEntity.byteImageBob)}
                  </span>
                </div>
              ) : null}
            </dd>
            <dt>
              <span id="byteImageRequiredBob">
                <Translate contentKey="travisNg2App.fieldTestServiceClassEntity.byteImageRequiredBob">Byte Image Required Bob</Translate>
              </span>
            </dt>
            <dd>
              {fieldTestServiceClassEntityEntity.byteImageRequiredBob ? (
                <div>
                  <a
                    onClick={openFile(
                      fieldTestServiceClassEntityEntity.byteImageRequiredBobContentType,
                      fieldTestServiceClassEntityEntity.byteImageRequiredBob
                    )}
                  >
                    <img
                      src={`data:${fieldTestServiceClassEntityEntity.byteImageRequiredBobContentType};base64,${
                        fieldTestServiceClassEntityEntity.byteImageRequiredBob
                      }`}
                      style={{ maxHeight: '30px' }}
                    />
                  </a>
                  <span>
                    {fieldTestServiceClassEntityEntity.byteImageRequiredBobContentType},{' '}
                    {byteSize(fieldTestServiceClassEntityEntity.byteImageRequiredBob)}
                  </span>
                </div>
              ) : null}
            </dd>
            <dt>
              <span id="byteImageMinbytesBob">
                <Translate contentKey="travisNg2App.fieldTestServiceClassEntity.byteImageMinbytesBob">Byte Image Minbytes Bob</Translate>
              </span>
            </dt>
            <dd>
              {fieldTestServiceClassEntityEntity.byteImageMinbytesBob ? (
                <div>
                  <a
                    onClick={openFile(
                      fieldTestServiceClassEntityEntity.byteImageMinbytesBobContentType,
                      fieldTestServiceClassEntityEntity.byteImageMinbytesBob
                    )}
                  >
                    <img
                      src={`data:${fieldTestServiceClassEntityEntity.byteImageMinbytesBobContentType};base64,${
                        fieldTestServiceClassEntityEntity.byteImageMinbytesBob
                      }`}
                      style={{ maxHeight: '30px' }}
                    />
                  </a>
                  <span>
                    {fieldTestServiceClassEntityEntity.byteImageMinbytesBobContentType},{' '}
                    {byteSize(fieldTestServiceClassEntityEntity.byteImageMinbytesBob)}
                  </span>
                </div>
              ) : null}
            </dd>
            <dt>
              <span id="byteImageMaxbytesBob">
                <Translate contentKey="travisNg2App.fieldTestServiceClassEntity.byteImageMaxbytesBob">Byte Image Maxbytes Bob</Translate>
              </span>
            </dt>
            <dd>
              {fieldTestServiceClassEntityEntity.byteImageMaxbytesBob ? (
                <div>
                  <a
                    onClick={openFile(
                      fieldTestServiceClassEntityEntity.byteImageMaxbytesBobContentType,
                      fieldTestServiceClassEntityEntity.byteImageMaxbytesBob
                    )}
                  >
                    <img
                      src={`data:${fieldTestServiceClassEntityEntity.byteImageMaxbytesBobContentType};base64,${
                        fieldTestServiceClassEntityEntity.byteImageMaxbytesBob
                      }`}
                      style={{ maxHeight: '30px' }}
                    />
                  </a>
                  <span>
                    {fieldTestServiceClassEntityEntity.byteImageMaxbytesBobContentType},{' '}
                    {byteSize(fieldTestServiceClassEntityEntity.byteImageMaxbytesBob)}
                  </span>
                </div>
              ) : null}
            </dd>
            <dt>
              <span id="byteAnyBob">
                <Translate contentKey="travisNg2App.fieldTestServiceClassEntity.byteAnyBob">Byte Any Bob</Translate>
              </span>
            </dt>
            <dd>
              {fieldTestServiceClassEntityEntity.byteAnyBob ? (
                <div>
                  <a
                    onClick={openFile(
                      fieldTestServiceClassEntityEntity.byteAnyBobContentType,
                      fieldTestServiceClassEntityEntity.byteAnyBob
                    )}
                  >
                    <Translate contentKey="entity.action.open">Open</Translate>&nbsp;
                  </a>
                  <span>
                    {fieldTestServiceClassEntityEntity.byteAnyBobContentType}, {byteSize(fieldTestServiceClassEntityEntity.byteAnyBob)}
                  </span>
                </div>
              ) : null}
            </dd>
            <dt>
              <span id="byteAnyRequiredBob">
                <Translate contentKey="travisNg2App.fieldTestServiceClassEntity.byteAnyRequiredBob">Byte Any Required Bob</Translate>
              </span>
            </dt>
            <dd>
              {fieldTestServiceClassEntityEntity.byteAnyRequiredBob ? (
                <div>
                  <a
                    onClick={openFile(
                      fieldTestServiceClassEntityEntity.byteAnyRequiredBobContentType,
                      fieldTestServiceClassEntityEntity.byteAnyRequiredBob
                    )}
                  >
                    <Translate contentKey="entity.action.open">Open</Translate>&nbsp;
                  </a>
                  <span>
                    {fieldTestServiceClassEntityEntity.byteAnyRequiredBobContentType},{' '}
                    {byteSize(fieldTestServiceClassEntityEntity.byteAnyRequiredBob)}
                  </span>
                </div>
              ) : null}
            </dd>
            <dt>
              <span id="byteAnyMinbytesBob">
                <Translate contentKey="travisNg2App.fieldTestServiceClassEntity.byteAnyMinbytesBob">Byte Any Minbytes Bob</Translate>
              </span>
            </dt>
            <dd>
              {fieldTestServiceClassEntityEntity.byteAnyMinbytesBob ? (
                <div>
                  <a
                    onClick={openFile(
                      fieldTestServiceClassEntityEntity.byteAnyMinbytesBobContentType,
                      fieldTestServiceClassEntityEntity.byteAnyMinbytesBob
                    )}
                  >
                    <Translate contentKey="entity.action.open">Open</Translate>&nbsp;
                  </a>
                  <span>
                    {fieldTestServiceClassEntityEntity.byteAnyMinbytesBobContentType},{' '}
                    {byteSize(fieldTestServiceClassEntityEntity.byteAnyMinbytesBob)}
                  </span>
                </div>
              ) : null}
            </dd>
            <dt>
              <span id="byteAnyMaxbytesBob">
                <Translate contentKey="travisNg2App.fieldTestServiceClassEntity.byteAnyMaxbytesBob">Byte Any Maxbytes Bob</Translate>
              </span>
            </dt>
            <dd>
              {fieldTestServiceClassEntityEntity.byteAnyMaxbytesBob ? (
                <div>
                  <a
                    onClick={openFile(
                      fieldTestServiceClassEntityEntity.byteAnyMaxbytesBobContentType,
                      fieldTestServiceClassEntityEntity.byteAnyMaxbytesBob
                    )}
                  >
                    <Translate contentKey="entity.action.open">Open</Translate>&nbsp;
                  </a>
                  <span>
                    {fieldTestServiceClassEntityEntity.byteAnyMaxbytesBobContentType},{' '}
                    {byteSize(fieldTestServiceClassEntityEntity.byteAnyMaxbytesBob)}
                  </span>
                </div>
              ) : null}
            </dd>
            <dt>
              <span id="byteTextBob">
                <Translate contentKey="travisNg2App.fieldTestServiceClassEntity.byteTextBob">Byte Text Bob</Translate>
              </span>
            </dt>
            <dd>{fieldTestServiceClassEntityEntity.byteTextBob}</dd>
            <dt>
              <span id="byteTextRequiredBob">
                <Translate contentKey="travisNg2App.fieldTestServiceClassEntity.byteTextRequiredBob">Byte Text Required Bob</Translate>
              </span>
            </dt>
            <dd>{fieldTestServiceClassEntityEntity.byteTextRequiredBob}</dd>
          </dl>
          <Button tag={Link} to="/field-test-service-class-entity" replace color="info">
            <FontAwesomeIcon icon="arrow-left" />{' '}
            <span className="d-none d-md-inline">
              <Translate contentKey="entity.action.back">Back</Translate>
            </span>
          </Button>
          &nbsp;
          <Button tag={Link} to={`/field-test-service-class-entity/${fieldTestServiceClassEntityEntity.id}/edit`} replace color="primary">
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

const mapStateToProps = ({ fieldTestServiceClassEntity }: IRootState) => ({
  fieldTestServiceClassEntityEntity: fieldTestServiceClassEntity.entity
});

const mapDispatchToProps = { getEntity };

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FieldTestServiceClassEntityDetail);
