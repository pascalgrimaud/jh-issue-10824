import React from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import { Translate, ICrudGetAction, openFile, byteSize, TextFormat } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IRootState } from 'app/shared/reducers';
import { getEntity } from './field-test-infinite-scroll-entity.reducer';
import { IFieldTestInfiniteScrollEntity } from 'app/shared/model/field-test-infinite-scroll-entity.model';
import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';

export interface IFieldTestInfiniteScrollEntityDetailProps extends StateProps, DispatchProps, RouteComponentProps<{ id: string }> {}

export class FieldTestInfiniteScrollEntityDetail extends React.Component<IFieldTestInfiniteScrollEntityDetailProps> {
  componentDidMount() {
    this.props.getEntity(this.props.match.params.id);
  }

  render() {
    const { fieldTestInfiniteScrollEntityEntity } = this.props;
    return (
      <Row>
        <Col md="8">
          <h2>
            <Translate contentKey="travisNg2App.fieldTestInfiniteScrollEntity.detail.title">FieldTestInfiniteScrollEntity</Translate> [
            <b>{fieldTestInfiniteScrollEntityEntity.id}</b>]
          </h2>
          <dl className="jh-entity-details">
            <dt>
              <span id="stringHugo">
                <Translate contentKey="travisNg2App.fieldTestInfiniteScrollEntity.stringHugo">String Hugo</Translate>
              </span>
            </dt>
            <dd>{fieldTestInfiniteScrollEntityEntity.stringHugo}</dd>
            <dt>
              <span id="stringRequiredHugo">
                <Translate contentKey="travisNg2App.fieldTestInfiniteScrollEntity.stringRequiredHugo">String Required Hugo</Translate>
              </span>
            </dt>
            <dd>{fieldTestInfiniteScrollEntityEntity.stringRequiredHugo}</dd>
            <dt>
              <span id="stringMinlengthHugo">
                <Translate contentKey="travisNg2App.fieldTestInfiniteScrollEntity.stringMinlengthHugo">String Minlength Hugo</Translate>
              </span>
            </dt>
            <dd>{fieldTestInfiniteScrollEntityEntity.stringMinlengthHugo}</dd>
            <dt>
              <span id="stringMaxlengthHugo">
                <Translate contentKey="travisNg2App.fieldTestInfiniteScrollEntity.stringMaxlengthHugo">String Maxlength Hugo</Translate>
              </span>
            </dt>
            <dd>{fieldTestInfiniteScrollEntityEntity.stringMaxlengthHugo}</dd>
            <dt>
              <span id="stringPatternHugo">
                <Translate contentKey="travisNg2App.fieldTestInfiniteScrollEntity.stringPatternHugo">String Pattern Hugo</Translate>
              </span>
            </dt>
            <dd>{fieldTestInfiniteScrollEntityEntity.stringPatternHugo}</dd>
            <dt>
              <span id="integerHugo">
                <Translate contentKey="travisNg2App.fieldTestInfiniteScrollEntity.integerHugo">Integer Hugo</Translate>
              </span>
            </dt>
            <dd>{fieldTestInfiniteScrollEntityEntity.integerHugo}</dd>
            <dt>
              <span id="integerRequiredHugo">
                <Translate contentKey="travisNg2App.fieldTestInfiniteScrollEntity.integerRequiredHugo">Integer Required Hugo</Translate>
              </span>
            </dt>
            <dd>{fieldTestInfiniteScrollEntityEntity.integerRequiredHugo}</dd>
            <dt>
              <span id="integerMinHugo">
                <Translate contentKey="travisNg2App.fieldTestInfiniteScrollEntity.integerMinHugo">Integer Min Hugo</Translate>
              </span>
            </dt>
            <dd>{fieldTestInfiniteScrollEntityEntity.integerMinHugo}</dd>
            <dt>
              <span id="integerMaxHugo">
                <Translate contentKey="travisNg2App.fieldTestInfiniteScrollEntity.integerMaxHugo">Integer Max Hugo</Translate>
              </span>
            </dt>
            <dd>{fieldTestInfiniteScrollEntityEntity.integerMaxHugo}</dd>
            <dt>
              <span id="longHugo">
                <Translate contentKey="travisNg2App.fieldTestInfiniteScrollEntity.longHugo">Long Hugo</Translate>
              </span>
            </dt>
            <dd>{fieldTestInfiniteScrollEntityEntity.longHugo}</dd>
            <dt>
              <span id="longRequiredHugo">
                <Translate contentKey="travisNg2App.fieldTestInfiniteScrollEntity.longRequiredHugo">Long Required Hugo</Translate>
              </span>
            </dt>
            <dd>{fieldTestInfiniteScrollEntityEntity.longRequiredHugo}</dd>
            <dt>
              <span id="longMinHugo">
                <Translate contentKey="travisNg2App.fieldTestInfiniteScrollEntity.longMinHugo">Long Min Hugo</Translate>
              </span>
            </dt>
            <dd>{fieldTestInfiniteScrollEntityEntity.longMinHugo}</dd>
            <dt>
              <span id="longMaxHugo">
                <Translate contentKey="travisNg2App.fieldTestInfiniteScrollEntity.longMaxHugo">Long Max Hugo</Translate>
              </span>
            </dt>
            <dd>{fieldTestInfiniteScrollEntityEntity.longMaxHugo}</dd>
            <dt>
              <span id="floatHugo">
                <Translate contentKey="travisNg2App.fieldTestInfiniteScrollEntity.floatHugo">Float Hugo</Translate>
              </span>
            </dt>
            <dd>{fieldTestInfiniteScrollEntityEntity.floatHugo}</dd>
            <dt>
              <span id="floatRequiredHugo">
                <Translate contentKey="travisNg2App.fieldTestInfiniteScrollEntity.floatRequiredHugo">Float Required Hugo</Translate>
              </span>
            </dt>
            <dd>{fieldTestInfiniteScrollEntityEntity.floatRequiredHugo}</dd>
            <dt>
              <span id="floatMinHugo">
                <Translate contentKey="travisNg2App.fieldTestInfiniteScrollEntity.floatMinHugo">Float Min Hugo</Translate>
              </span>
            </dt>
            <dd>{fieldTestInfiniteScrollEntityEntity.floatMinHugo}</dd>
            <dt>
              <span id="floatMaxHugo">
                <Translate contentKey="travisNg2App.fieldTestInfiniteScrollEntity.floatMaxHugo">Float Max Hugo</Translate>
              </span>
            </dt>
            <dd>{fieldTestInfiniteScrollEntityEntity.floatMaxHugo}</dd>
            <dt>
              <span id="doubleRequiredHugo">
                <Translate contentKey="travisNg2App.fieldTestInfiniteScrollEntity.doubleRequiredHugo">Double Required Hugo</Translate>
              </span>
            </dt>
            <dd>{fieldTestInfiniteScrollEntityEntity.doubleRequiredHugo}</dd>
            <dt>
              <span id="doubleMinHugo">
                <Translate contentKey="travisNg2App.fieldTestInfiniteScrollEntity.doubleMinHugo">Double Min Hugo</Translate>
              </span>
            </dt>
            <dd>{fieldTestInfiniteScrollEntityEntity.doubleMinHugo}</dd>
            <dt>
              <span id="doubleMaxHugo">
                <Translate contentKey="travisNg2App.fieldTestInfiniteScrollEntity.doubleMaxHugo">Double Max Hugo</Translate>
              </span>
            </dt>
            <dd>{fieldTestInfiniteScrollEntityEntity.doubleMaxHugo}</dd>
            <dt>
              <span id="bigDecimalRequiredHugo">
                <Translate contentKey="travisNg2App.fieldTestInfiniteScrollEntity.bigDecimalRequiredHugo">
                  Big Decimal Required Hugo
                </Translate>
              </span>
            </dt>
            <dd>{fieldTestInfiniteScrollEntityEntity.bigDecimalRequiredHugo}</dd>
            <dt>
              <span id="bigDecimalMinHugo">
                <Translate contentKey="travisNg2App.fieldTestInfiniteScrollEntity.bigDecimalMinHugo">Big Decimal Min Hugo</Translate>
              </span>
            </dt>
            <dd>{fieldTestInfiniteScrollEntityEntity.bigDecimalMinHugo}</dd>
            <dt>
              <span id="bigDecimalMaxHugo">
                <Translate contentKey="travisNg2App.fieldTestInfiniteScrollEntity.bigDecimalMaxHugo">Big Decimal Max Hugo</Translate>
              </span>
            </dt>
            <dd>{fieldTestInfiniteScrollEntityEntity.bigDecimalMaxHugo}</dd>
            <dt>
              <span id="localDateHugo">
                <Translate contentKey="travisNg2App.fieldTestInfiniteScrollEntity.localDateHugo">Local Date Hugo</Translate>
              </span>
            </dt>
            <dd>
              <TextFormat value={fieldTestInfiniteScrollEntityEntity.localDateHugo} type="date" format={APP_LOCAL_DATE_FORMAT} />
            </dd>
            <dt>
              <span id="localDateRequiredHugo">
                <Translate contentKey="travisNg2App.fieldTestInfiniteScrollEntity.localDateRequiredHugo">
                  Local Date Required Hugo
                </Translate>
              </span>
            </dt>
            <dd>
              <TextFormat value={fieldTestInfiniteScrollEntityEntity.localDateRequiredHugo} type="date" format={APP_LOCAL_DATE_FORMAT} />
            </dd>
            <dt>
              <span id="instantHugo">
                <Translate contentKey="travisNg2App.fieldTestInfiniteScrollEntity.instantHugo">Instant Hugo</Translate>
              </span>
            </dt>
            <dd>
              <TextFormat value={fieldTestInfiniteScrollEntityEntity.instantHugo} type="date" format={APP_DATE_FORMAT} />
            </dd>
            <dt>
              <span id="instanteRequiredHugo">
                <Translate contentKey="travisNg2App.fieldTestInfiniteScrollEntity.instanteRequiredHugo">Instante Required Hugo</Translate>
              </span>
            </dt>
            <dd>
              <TextFormat value={fieldTestInfiniteScrollEntityEntity.instanteRequiredHugo} type="date" format={APP_DATE_FORMAT} />
            </dd>
            <dt>
              <span id="zonedDateTimeHugo">
                <Translate contentKey="travisNg2App.fieldTestInfiniteScrollEntity.zonedDateTimeHugo">Zoned Date Time Hugo</Translate>
              </span>
            </dt>
            <dd>
              <TextFormat value={fieldTestInfiniteScrollEntityEntity.zonedDateTimeHugo} type="date" format={APP_DATE_FORMAT} />
            </dd>
            <dt>
              <span id="zonedDateTimeRequiredHugo">
                <Translate contentKey="travisNg2App.fieldTestInfiniteScrollEntity.zonedDateTimeRequiredHugo">
                  Zoned Date Time Required Hugo
                </Translate>
              </span>
            </dt>
            <dd>
              <TextFormat value={fieldTestInfiniteScrollEntityEntity.zonedDateTimeRequiredHugo} type="date" format={APP_DATE_FORMAT} />
            </dd>
            <dt>
              <span id="durationHugo">
                <Translate contentKey="travisNg2App.fieldTestInfiniteScrollEntity.durationHugo">Duration Hugo</Translate>
              </span>
            </dt>
            <dd>{fieldTestInfiniteScrollEntityEntity.durationHugo}</dd>
            <dt>
              <span id="durationRequiredHugo">
                <Translate contentKey="travisNg2App.fieldTestInfiniteScrollEntity.durationRequiredHugo">Duration Required Hugo</Translate>
              </span>
            </dt>
            <dd>{fieldTestInfiniteScrollEntityEntity.durationRequiredHugo}</dd>
            <dt>
              <span id="booleanHugo">
                <Translate contentKey="travisNg2App.fieldTestInfiniteScrollEntity.booleanHugo">Boolean Hugo</Translate>
              </span>
            </dt>
            <dd>{fieldTestInfiniteScrollEntityEntity.booleanHugo ? 'true' : 'false'}</dd>
            <dt>
              <span id="booleanRequiredHugo">
                <Translate contentKey="travisNg2App.fieldTestInfiniteScrollEntity.booleanRequiredHugo">Boolean Required Hugo</Translate>
              </span>
            </dt>
            <dd>{fieldTestInfiniteScrollEntityEntity.booleanRequiredHugo ? 'true' : 'false'}</dd>
            <dt>
              <span id="enumHugo">
                <Translate contentKey="travisNg2App.fieldTestInfiniteScrollEntity.enumHugo">Enum Hugo</Translate>
              </span>
            </dt>
            <dd>{fieldTestInfiniteScrollEntityEntity.enumHugo}</dd>
            <dt>
              <span id="enumRequiredHugo">
                <Translate contentKey="travisNg2App.fieldTestInfiniteScrollEntity.enumRequiredHugo">Enum Required Hugo</Translate>
              </span>
            </dt>
            <dd>{fieldTestInfiniteScrollEntityEntity.enumRequiredHugo}</dd>
            <dt>
              <span id="uuidHugo">
                <Translate contentKey="travisNg2App.fieldTestInfiniteScrollEntity.uuidHugo">Uuid Hugo</Translate>
              </span>
            </dt>
            <dd>{fieldTestInfiniteScrollEntityEntity.uuidHugo}</dd>
            <dt>
              <span id="uuidRequiredHugo">
                <Translate contentKey="travisNg2App.fieldTestInfiniteScrollEntity.uuidRequiredHugo">Uuid Required Hugo</Translate>
              </span>
            </dt>
            <dd>{fieldTestInfiniteScrollEntityEntity.uuidRequiredHugo}</dd>
            <dt>
              <span id="byteImageHugo">
                <Translate contentKey="travisNg2App.fieldTestInfiniteScrollEntity.byteImageHugo">Byte Image Hugo</Translate>
              </span>
            </dt>
            <dd>
              {fieldTestInfiniteScrollEntityEntity.byteImageHugo ? (
                <div>
                  <a
                    onClick={openFile(
                      fieldTestInfiniteScrollEntityEntity.byteImageHugoContentType,
                      fieldTestInfiniteScrollEntityEntity.byteImageHugo
                    )}
                  >
                    <img
                      src={`data:${fieldTestInfiniteScrollEntityEntity.byteImageHugoContentType};base64,${
                        fieldTestInfiniteScrollEntityEntity.byteImageHugo
                      }`}
                      style={{ maxHeight: '30px' }}
                    />
                  </a>
                  <span>
                    {fieldTestInfiniteScrollEntityEntity.byteImageHugoContentType},{' '}
                    {byteSize(fieldTestInfiniteScrollEntityEntity.byteImageHugo)}
                  </span>
                </div>
              ) : null}
            </dd>
            <dt>
              <span id="byteImageRequiredHugo">
                <Translate contentKey="travisNg2App.fieldTestInfiniteScrollEntity.byteImageRequiredHugo">
                  Byte Image Required Hugo
                </Translate>
              </span>
            </dt>
            <dd>
              {fieldTestInfiniteScrollEntityEntity.byteImageRequiredHugo ? (
                <div>
                  <a
                    onClick={openFile(
                      fieldTestInfiniteScrollEntityEntity.byteImageRequiredHugoContentType,
                      fieldTestInfiniteScrollEntityEntity.byteImageRequiredHugo
                    )}
                  >
                    <img
                      src={`data:${fieldTestInfiniteScrollEntityEntity.byteImageRequiredHugoContentType};base64,${
                        fieldTestInfiniteScrollEntityEntity.byteImageRequiredHugo
                      }`}
                      style={{ maxHeight: '30px' }}
                    />
                  </a>
                  <span>
                    {fieldTestInfiniteScrollEntityEntity.byteImageRequiredHugoContentType},{' '}
                    {byteSize(fieldTestInfiniteScrollEntityEntity.byteImageRequiredHugo)}
                  </span>
                </div>
              ) : null}
            </dd>
            <dt>
              <span id="byteImageMinbytesHugo">
                <Translate contentKey="travisNg2App.fieldTestInfiniteScrollEntity.byteImageMinbytesHugo">
                  Byte Image Minbytes Hugo
                </Translate>
              </span>
            </dt>
            <dd>
              {fieldTestInfiniteScrollEntityEntity.byteImageMinbytesHugo ? (
                <div>
                  <a
                    onClick={openFile(
                      fieldTestInfiniteScrollEntityEntity.byteImageMinbytesHugoContentType,
                      fieldTestInfiniteScrollEntityEntity.byteImageMinbytesHugo
                    )}
                  >
                    <img
                      src={`data:${fieldTestInfiniteScrollEntityEntity.byteImageMinbytesHugoContentType};base64,${
                        fieldTestInfiniteScrollEntityEntity.byteImageMinbytesHugo
                      }`}
                      style={{ maxHeight: '30px' }}
                    />
                  </a>
                  <span>
                    {fieldTestInfiniteScrollEntityEntity.byteImageMinbytesHugoContentType},{' '}
                    {byteSize(fieldTestInfiniteScrollEntityEntity.byteImageMinbytesHugo)}
                  </span>
                </div>
              ) : null}
            </dd>
            <dt>
              <span id="byteImageMaxbytesHugo">
                <Translate contentKey="travisNg2App.fieldTestInfiniteScrollEntity.byteImageMaxbytesHugo">
                  Byte Image Maxbytes Hugo
                </Translate>
              </span>
            </dt>
            <dd>
              {fieldTestInfiniteScrollEntityEntity.byteImageMaxbytesHugo ? (
                <div>
                  <a
                    onClick={openFile(
                      fieldTestInfiniteScrollEntityEntity.byteImageMaxbytesHugoContentType,
                      fieldTestInfiniteScrollEntityEntity.byteImageMaxbytesHugo
                    )}
                  >
                    <img
                      src={`data:${fieldTestInfiniteScrollEntityEntity.byteImageMaxbytesHugoContentType};base64,${
                        fieldTestInfiniteScrollEntityEntity.byteImageMaxbytesHugo
                      }`}
                      style={{ maxHeight: '30px' }}
                    />
                  </a>
                  <span>
                    {fieldTestInfiniteScrollEntityEntity.byteImageMaxbytesHugoContentType},{' '}
                    {byteSize(fieldTestInfiniteScrollEntityEntity.byteImageMaxbytesHugo)}
                  </span>
                </div>
              ) : null}
            </dd>
            <dt>
              <span id="byteAnyHugo">
                <Translate contentKey="travisNg2App.fieldTestInfiniteScrollEntity.byteAnyHugo">Byte Any Hugo</Translate>
              </span>
            </dt>
            <dd>
              {fieldTestInfiniteScrollEntityEntity.byteAnyHugo ? (
                <div>
                  <a
                    onClick={openFile(
                      fieldTestInfiniteScrollEntityEntity.byteAnyHugoContentType,
                      fieldTestInfiniteScrollEntityEntity.byteAnyHugo
                    )}
                  >
                    <Translate contentKey="entity.action.open">Open</Translate>&nbsp;
                  </a>
                  <span>
                    {fieldTestInfiniteScrollEntityEntity.byteAnyHugoContentType},{' '}
                    {byteSize(fieldTestInfiniteScrollEntityEntity.byteAnyHugo)}
                  </span>
                </div>
              ) : null}
            </dd>
            <dt>
              <span id="byteAnyRequiredHugo">
                <Translate contentKey="travisNg2App.fieldTestInfiniteScrollEntity.byteAnyRequiredHugo">Byte Any Required Hugo</Translate>
              </span>
            </dt>
            <dd>
              {fieldTestInfiniteScrollEntityEntity.byteAnyRequiredHugo ? (
                <div>
                  <a
                    onClick={openFile(
                      fieldTestInfiniteScrollEntityEntity.byteAnyRequiredHugoContentType,
                      fieldTestInfiniteScrollEntityEntity.byteAnyRequiredHugo
                    )}
                  >
                    <Translate contentKey="entity.action.open">Open</Translate>&nbsp;
                  </a>
                  <span>
                    {fieldTestInfiniteScrollEntityEntity.byteAnyRequiredHugoContentType},{' '}
                    {byteSize(fieldTestInfiniteScrollEntityEntity.byteAnyRequiredHugo)}
                  </span>
                </div>
              ) : null}
            </dd>
            <dt>
              <span id="byteAnyMinbytesHugo">
                <Translate contentKey="travisNg2App.fieldTestInfiniteScrollEntity.byteAnyMinbytesHugo">Byte Any Minbytes Hugo</Translate>
              </span>
            </dt>
            <dd>
              {fieldTestInfiniteScrollEntityEntity.byteAnyMinbytesHugo ? (
                <div>
                  <a
                    onClick={openFile(
                      fieldTestInfiniteScrollEntityEntity.byteAnyMinbytesHugoContentType,
                      fieldTestInfiniteScrollEntityEntity.byteAnyMinbytesHugo
                    )}
                  >
                    <Translate contentKey="entity.action.open">Open</Translate>&nbsp;
                  </a>
                  <span>
                    {fieldTestInfiniteScrollEntityEntity.byteAnyMinbytesHugoContentType},{' '}
                    {byteSize(fieldTestInfiniteScrollEntityEntity.byteAnyMinbytesHugo)}
                  </span>
                </div>
              ) : null}
            </dd>
            <dt>
              <span id="byteAnyMaxbytesHugo">
                <Translate contentKey="travisNg2App.fieldTestInfiniteScrollEntity.byteAnyMaxbytesHugo">Byte Any Maxbytes Hugo</Translate>
              </span>
            </dt>
            <dd>
              {fieldTestInfiniteScrollEntityEntity.byteAnyMaxbytesHugo ? (
                <div>
                  <a
                    onClick={openFile(
                      fieldTestInfiniteScrollEntityEntity.byteAnyMaxbytesHugoContentType,
                      fieldTestInfiniteScrollEntityEntity.byteAnyMaxbytesHugo
                    )}
                  >
                    <Translate contentKey="entity.action.open">Open</Translate>&nbsp;
                  </a>
                  <span>
                    {fieldTestInfiniteScrollEntityEntity.byteAnyMaxbytesHugoContentType},{' '}
                    {byteSize(fieldTestInfiniteScrollEntityEntity.byteAnyMaxbytesHugo)}
                  </span>
                </div>
              ) : null}
            </dd>
            <dt>
              <span id="byteTextHugo">
                <Translate contentKey="travisNg2App.fieldTestInfiniteScrollEntity.byteTextHugo">Byte Text Hugo</Translate>
              </span>
            </dt>
            <dd>{fieldTestInfiniteScrollEntityEntity.byteTextHugo}</dd>
            <dt>
              <span id="byteTextRequiredHugo">
                <Translate contentKey="travisNg2App.fieldTestInfiniteScrollEntity.byteTextRequiredHugo">Byte Text Required Hugo</Translate>
              </span>
            </dt>
            <dd>{fieldTestInfiniteScrollEntityEntity.byteTextRequiredHugo}</dd>
          </dl>
          <Button tag={Link} to="/field-test-infinite-scroll-entity" replace color="info">
            <FontAwesomeIcon icon="arrow-left" />{' '}
            <span className="d-none d-md-inline">
              <Translate contentKey="entity.action.back">Back</Translate>
            </span>
          </Button>
          &nbsp;
          <Button
            tag={Link}
            to={`/field-test-infinite-scroll-entity/${fieldTestInfiniteScrollEntityEntity.id}/edit`}
            replace
            color="primary"
          >
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

const mapStateToProps = ({ fieldTestInfiniteScrollEntity }: IRootState) => ({
  fieldTestInfiniteScrollEntityEntity: fieldTestInfiniteScrollEntity.entity
});

const mapDispatchToProps = { getEntity };

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FieldTestInfiniteScrollEntityDetail);
