import React from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Col, Row, Table } from 'reactstrap';
import { openFile, byteSize, Translate, ICrudGetAllAction, TextFormat } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IRootState } from 'app/shared/reducers';
import { getEntities } from './field-test-service-impl-entity.reducer';
import { IFieldTestServiceImplEntity } from 'app/shared/model/field-test-service-impl-entity.model';
import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';

export interface IFieldTestServiceImplEntityProps extends StateProps, DispatchProps, RouteComponentProps<{ url: string }> {}

export class FieldTestServiceImplEntity extends React.Component<IFieldTestServiceImplEntityProps> {
  componentDidMount() {
    this.props.getEntities();
  }

  render() {
    const { fieldTestServiceImplEntityList, match } = this.props;
    return (
      <div>
        <h2 id="field-test-service-impl-entity-heading">
          <Translate contentKey="travisNg2App.fieldTestServiceImplEntity.home.title">Field Test Service Impl Entities</Translate>
          <Link to={`${match.url}/new`} className="btn btn-primary float-right jh-create-entity" id="jh-create-entity">
            <FontAwesomeIcon icon="plus" />
            &nbsp;
            <Translate contentKey="travisNg2App.fieldTestServiceImplEntity.home.createLabel">
              Create a new Field Test Service Impl Entity
            </Translate>
          </Link>
        </h2>
        <div className="table-responsive">
          {fieldTestServiceImplEntityList && fieldTestServiceImplEntityList.length > 0 ? (
            <Table responsive aria-describedby="field-test-service-impl-entity-heading">
              <thead>
                <tr>
                  <th>
                    <Translate contentKey="global.field.id">ID</Translate>
                  </th>
                  <th>
                    <Translate contentKey="travisNg2App.fieldTestServiceImplEntity.stringMika">String Mika</Translate>
                  </th>
                  <th>
                    <Translate contentKey="travisNg2App.fieldTestServiceImplEntity.stringRequiredMika">String Required Mika</Translate>
                  </th>
                  <th>
                    <Translate contentKey="travisNg2App.fieldTestServiceImplEntity.stringMinlengthMika">String Minlength Mika</Translate>
                  </th>
                  <th>
                    <Translate contentKey="travisNg2App.fieldTestServiceImplEntity.stringMaxlengthMika">String Maxlength Mika</Translate>
                  </th>
                  <th>
                    <Translate contentKey="travisNg2App.fieldTestServiceImplEntity.stringPatternMika">String Pattern Mika</Translate>
                  </th>
                  <th>
                    <Translate contentKey="travisNg2App.fieldTestServiceImplEntity.integerMika">Integer Mika</Translate>
                  </th>
                  <th>
                    <Translate contentKey="travisNg2App.fieldTestServiceImplEntity.integerRequiredMika">Integer Required Mika</Translate>
                  </th>
                  <th>
                    <Translate contentKey="travisNg2App.fieldTestServiceImplEntity.integerMinMika">Integer Min Mika</Translate>
                  </th>
                  <th>
                    <Translate contentKey="travisNg2App.fieldTestServiceImplEntity.integerMaxMika">Integer Max Mika</Translate>
                  </th>
                  <th>
                    <Translate contentKey="travisNg2App.fieldTestServiceImplEntity.longMika">Long Mika</Translate>
                  </th>
                  <th>
                    <Translate contentKey="travisNg2App.fieldTestServiceImplEntity.longRequiredMika">Long Required Mika</Translate>
                  </th>
                  <th>
                    <Translate contentKey="travisNg2App.fieldTestServiceImplEntity.longMinMika">Long Min Mika</Translate>
                  </th>
                  <th>
                    <Translate contentKey="travisNg2App.fieldTestServiceImplEntity.longMaxMika">Long Max Mika</Translate>
                  </th>
                  <th>
                    <Translate contentKey="travisNg2App.fieldTestServiceImplEntity.floatMika">Float Mika</Translate>
                  </th>
                  <th>
                    <Translate contentKey="travisNg2App.fieldTestServiceImplEntity.floatRequiredMika">Float Required Mika</Translate>
                  </th>
                  <th>
                    <Translate contentKey="travisNg2App.fieldTestServiceImplEntity.floatMinMika">Float Min Mika</Translate>
                  </th>
                  <th>
                    <Translate contentKey="travisNg2App.fieldTestServiceImplEntity.floatMaxMika">Float Max Mika</Translate>
                  </th>
                  <th>
                    <Translate contentKey="travisNg2App.fieldTestServiceImplEntity.doubleRequiredMika">Double Required Mika</Translate>
                  </th>
                  <th>
                    <Translate contentKey="travisNg2App.fieldTestServiceImplEntity.doubleMinMika">Double Min Mika</Translate>
                  </th>
                  <th>
                    <Translate contentKey="travisNg2App.fieldTestServiceImplEntity.doubleMaxMika">Double Max Mika</Translate>
                  </th>
                  <th>
                    <Translate contentKey="travisNg2App.fieldTestServiceImplEntity.bigDecimalRequiredMika">
                      Big Decimal Required Mika
                    </Translate>
                  </th>
                  <th>
                    <Translate contentKey="travisNg2App.fieldTestServiceImplEntity.bigDecimalMinMika">Big Decimal Min Mika</Translate>
                  </th>
                  <th>
                    <Translate contentKey="travisNg2App.fieldTestServiceImplEntity.bigDecimalMaxMika">Big Decimal Max Mika</Translate>
                  </th>
                  <th>
                    <Translate contentKey="travisNg2App.fieldTestServiceImplEntity.localDateMika">Local Date Mika</Translate>
                  </th>
                  <th>
                    <Translate contentKey="travisNg2App.fieldTestServiceImplEntity.localDateRequiredMika">
                      Local Date Required Mika
                    </Translate>
                  </th>
                  <th>
                    <Translate contentKey="travisNg2App.fieldTestServiceImplEntity.instantMika">Instant Mika</Translate>
                  </th>
                  <th>
                    <Translate contentKey="travisNg2App.fieldTestServiceImplEntity.instanteRequiredMika">Instante Required Mika</Translate>
                  </th>
                  <th>
                    <Translate contentKey="travisNg2App.fieldTestServiceImplEntity.zonedDateTimeMika">Zoned Date Time Mika</Translate>
                  </th>
                  <th>
                    <Translate contentKey="travisNg2App.fieldTestServiceImplEntity.zonedDateTimeRequiredMika">
                      Zoned Date Time Required Mika
                    </Translate>
                  </th>
                  <th>
                    <Translate contentKey="travisNg2App.fieldTestServiceImplEntity.durationMika">Duration Mika</Translate>
                  </th>
                  <th>
                    <Translate contentKey="travisNg2App.fieldTestServiceImplEntity.durationRequiredMika">Duration Required Mika</Translate>
                  </th>
                  <th>
                    <Translate contentKey="travisNg2App.fieldTestServiceImplEntity.booleanMika">Boolean Mika</Translate>
                  </th>
                  <th>
                    <Translate contentKey="travisNg2App.fieldTestServiceImplEntity.booleanRequiredMika">Boolean Required Mika</Translate>
                  </th>
                  <th>
                    <Translate contentKey="travisNg2App.fieldTestServiceImplEntity.enumMika">Enum Mika</Translate>
                  </th>
                  <th>
                    <Translate contentKey="travisNg2App.fieldTestServiceImplEntity.enumRequiredMika">Enum Required Mika</Translate>
                  </th>
                  <th>
                    <Translate contentKey="travisNg2App.fieldTestServiceImplEntity.uuidMika">Uuid Mika</Translate>
                  </th>
                  <th>
                    <Translate contentKey="travisNg2App.fieldTestServiceImplEntity.uuidRequiredMika">Uuid Required Mika</Translate>
                  </th>
                  <th>
                    <Translate contentKey="travisNg2App.fieldTestServiceImplEntity.byteImageMika">Byte Image Mika</Translate>
                  </th>
                  <th>
                    <Translate contentKey="travisNg2App.fieldTestServiceImplEntity.byteImageRequiredMika">
                      Byte Image Required Mika
                    </Translate>
                  </th>
                  <th>
                    <Translate contentKey="travisNg2App.fieldTestServiceImplEntity.byteImageMinbytesMika">
                      Byte Image Minbytes Mika
                    </Translate>
                  </th>
                  <th>
                    <Translate contentKey="travisNg2App.fieldTestServiceImplEntity.byteImageMaxbytesMika">
                      Byte Image Maxbytes Mika
                    </Translate>
                  </th>
                  <th>
                    <Translate contentKey="travisNg2App.fieldTestServiceImplEntity.byteAnyMika">Byte Any Mika</Translate>
                  </th>
                  <th>
                    <Translate contentKey="travisNg2App.fieldTestServiceImplEntity.byteAnyRequiredMika">Byte Any Required Mika</Translate>
                  </th>
                  <th>
                    <Translate contentKey="travisNg2App.fieldTestServiceImplEntity.byteAnyMinbytesMika">Byte Any Minbytes Mika</Translate>
                  </th>
                  <th>
                    <Translate contentKey="travisNg2App.fieldTestServiceImplEntity.byteAnyMaxbytesMika">Byte Any Maxbytes Mika</Translate>
                  </th>
                  <th>
                    <Translate contentKey="travisNg2App.fieldTestServiceImplEntity.byteTextMika">Byte Text Mika</Translate>
                  </th>
                  <th>
                    <Translate contentKey="travisNg2App.fieldTestServiceImplEntity.byteTextRequiredMika">Byte Text Required Mika</Translate>
                  </th>
                  <th />
                </tr>
              </thead>
              <tbody>
                {fieldTestServiceImplEntityList.map((fieldTestServiceImplEntity, i) => (
                  <tr key={`entity-${i}`}>
                    <td>
                      <Button tag={Link} to={`${match.url}/${fieldTestServiceImplEntity.id}`} color="link" size="sm">
                        {fieldTestServiceImplEntity.id}
                      </Button>
                    </td>
                    <td>{fieldTestServiceImplEntity.stringMika}</td>
                    <td>{fieldTestServiceImplEntity.stringRequiredMika}</td>
                    <td>{fieldTestServiceImplEntity.stringMinlengthMika}</td>
                    <td>{fieldTestServiceImplEntity.stringMaxlengthMika}</td>
                    <td>{fieldTestServiceImplEntity.stringPatternMika}</td>
                    <td>{fieldTestServiceImplEntity.integerMika}</td>
                    <td>{fieldTestServiceImplEntity.integerRequiredMika}</td>
                    <td>{fieldTestServiceImplEntity.integerMinMika}</td>
                    <td>{fieldTestServiceImplEntity.integerMaxMika}</td>
                    <td>{fieldTestServiceImplEntity.longMika}</td>
                    <td>{fieldTestServiceImplEntity.longRequiredMika}</td>
                    <td>{fieldTestServiceImplEntity.longMinMika}</td>
                    <td>{fieldTestServiceImplEntity.longMaxMika}</td>
                    <td>{fieldTestServiceImplEntity.floatMika}</td>
                    <td>{fieldTestServiceImplEntity.floatRequiredMika}</td>
                    <td>{fieldTestServiceImplEntity.floatMinMika}</td>
                    <td>{fieldTestServiceImplEntity.floatMaxMika}</td>
                    <td>{fieldTestServiceImplEntity.doubleRequiredMika}</td>
                    <td>{fieldTestServiceImplEntity.doubleMinMika}</td>
                    <td>{fieldTestServiceImplEntity.doubleMaxMika}</td>
                    <td>{fieldTestServiceImplEntity.bigDecimalRequiredMika}</td>
                    <td>{fieldTestServiceImplEntity.bigDecimalMinMika}</td>
                    <td>{fieldTestServiceImplEntity.bigDecimalMaxMika}</td>
                    <td>
                      <TextFormat type="date" value={fieldTestServiceImplEntity.localDateMika} format={APP_LOCAL_DATE_FORMAT} />
                    </td>
                    <td>
                      <TextFormat type="date" value={fieldTestServiceImplEntity.localDateRequiredMika} format={APP_LOCAL_DATE_FORMAT} />
                    </td>
                    <td>
                      <TextFormat type="date" value={fieldTestServiceImplEntity.instantMika} format={APP_DATE_FORMAT} />
                    </td>
                    <td>
                      <TextFormat type="date" value={fieldTestServiceImplEntity.instanteRequiredMika} format={APP_DATE_FORMAT} />
                    </td>
                    <td>
                      <TextFormat type="date" value={fieldTestServiceImplEntity.zonedDateTimeMika} format={APP_DATE_FORMAT} />
                    </td>
                    <td>
                      <TextFormat type="date" value={fieldTestServiceImplEntity.zonedDateTimeRequiredMika} format={APP_DATE_FORMAT} />
                    </td>
                    <td>{fieldTestServiceImplEntity.durationMika}</td>
                    <td>{fieldTestServiceImplEntity.durationRequiredMika}</td>
                    <td>{fieldTestServiceImplEntity.booleanMika ? 'true' : 'false'}</td>
                    <td>{fieldTestServiceImplEntity.booleanRequiredMika ? 'true' : 'false'}</td>
                    <td>
                      <Translate contentKey={`travisNg2App.EnumFieldClass.${fieldTestServiceImplEntity.enumMika}`} />
                    </td>
                    <td>
                      <Translate contentKey={`travisNg2App.EnumRequiredFieldClass.${fieldTestServiceImplEntity.enumRequiredMika}`} />
                    </td>
                    <td>{fieldTestServiceImplEntity.uuidMika}</td>
                    <td>{fieldTestServiceImplEntity.uuidRequiredMika}</td>
                    <td>
                      {fieldTestServiceImplEntity.byteImageMika ? (
                        <div>
                          <a
                            onClick={openFile(
                              fieldTestServiceImplEntity.byteImageMikaContentType,
                              fieldTestServiceImplEntity.byteImageMika
                            )}
                          >
                            <img
                              src={`data:${fieldTestServiceImplEntity.byteImageMikaContentType};base64,${
                                fieldTestServiceImplEntity.byteImageMika
                              }`}
                              style={{ maxHeight: '30px' }}
                            />
                            &nbsp;
                          </a>
                          <span>
                            {fieldTestServiceImplEntity.byteImageMikaContentType}, {byteSize(fieldTestServiceImplEntity.byteImageMika)}
                          </span>
                        </div>
                      ) : null}
                    </td>
                    <td>
                      {fieldTestServiceImplEntity.byteImageRequiredMika ? (
                        <div>
                          <a
                            onClick={openFile(
                              fieldTestServiceImplEntity.byteImageRequiredMikaContentType,
                              fieldTestServiceImplEntity.byteImageRequiredMika
                            )}
                          >
                            <img
                              src={`data:${fieldTestServiceImplEntity.byteImageRequiredMikaContentType};base64,${
                                fieldTestServiceImplEntity.byteImageRequiredMika
                              }`}
                              style={{ maxHeight: '30px' }}
                            />
                            &nbsp;
                          </a>
                          <span>
                            {fieldTestServiceImplEntity.byteImageRequiredMikaContentType},{' '}
                            {byteSize(fieldTestServiceImplEntity.byteImageRequiredMika)}
                          </span>
                        </div>
                      ) : null}
                    </td>
                    <td>
                      {fieldTestServiceImplEntity.byteImageMinbytesMika ? (
                        <div>
                          <a
                            onClick={openFile(
                              fieldTestServiceImplEntity.byteImageMinbytesMikaContentType,
                              fieldTestServiceImplEntity.byteImageMinbytesMika
                            )}
                          >
                            <img
                              src={`data:${fieldTestServiceImplEntity.byteImageMinbytesMikaContentType};base64,${
                                fieldTestServiceImplEntity.byteImageMinbytesMika
                              }`}
                              style={{ maxHeight: '30px' }}
                            />
                            &nbsp;
                          </a>
                          <span>
                            {fieldTestServiceImplEntity.byteImageMinbytesMikaContentType},{' '}
                            {byteSize(fieldTestServiceImplEntity.byteImageMinbytesMika)}
                          </span>
                        </div>
                      ) : null}
                    </td>
                    <td>
                      {fieldTestServiceImplEntity.byteImageMaxbytesMika ? (
                        <div>
                          <a
                            onClick={openFile(
                              fieldTestServiceImplEntity.byteImageMaxbytesMikaContentType,
                              fieldTestServiceImplEntity.byteImageMaxbytesMika
                            )}
                          >
                            <img
                              src={`data:${fieldTestServiceImplEntity.byteImageMaxbytesMikaContentType};base64,${
                                fieldTestServiceImplEntity.byteImageMaxbytesMika
                              }`}
                              style={{ maxHeight: '30px' }}
                            />
                            &nbsp;
                          </a>
                          <span>
                            {fieldTestServiceImplEntity.byteImageMaxbytesMikaContentType},{' '}
                            {byteSize(fieldTestServiceImplEntity.byteImageMaxbytesMika)}
                          </span>
                        </div>
                      ) : null}
                    </td>
                    <td>
                      {fieldTestServiceImplEntity.byteAnyMika ? (
                        <div>
                          <a onClick={openFile(fieldTestServiceImplEntity.byteAnyMikaContentType, fieldTestServiceImplEntity.byteAnyMika)}>
                            <Translate contentKey="entity.action.open">Open</Translate>
                            &nbsp;
                          </a>
                          <span>
                            {fieldTestServiceImplEntity.byteAnyMikaContentType}, {byteSize(fieldTestServiceImplEntity.byteAnyMika)}
                          </span>
                        </div>
                      ) : null}
                    </td>
                    <td>
                      {fieldTestServiceImplEntity.byteAnyRequiredMika ? (
                        <div>
                          <a
                            onClick={openFile(
                              fieldTestServiceImplEntity.byteAnyRequiredMikaContentType,
                              fieldTestServiceImplEntity.byteAnyRequiredMika
                            )}
                          >
                            <Translate contentKey="entity.action.open">Open</Translate>
                            &nbsp;
                          </a>
                          <span>
                            {fieldTestServiceImplEntity.byteAnyRequiredMikaContentType},{' '}
                            {byteSize(fieldTestServiceImplEntity.byteAnyRequiredMika)}
                          </span>
                        </div>
                      ) : null}
                    </td>
                    <td>
                      {fieldTestServiceImplEntity.byteAnyMinbytesMika ? (
                        <div>
                          <a
                            onClick={openFile(
                              fieldTestServiceImplEntity.byteAnyMinbytesMikaContentType,
                              fieldTestServiceImplEntity.byteAnyMinbytesMika
                            )}
                          >
                            <Translate contentKey="entity.action.open">Open</Translate>
                            &nbsp;
                          </a>
                          <span>
                            {fieldTestServiceImplEntity.byteAnyMinbytesMikaContentType},{' '}
                            {byteSize(fieldTestServiceImplEntity.byteAnyMinbytesMika)}
                          </span>
                        </div>
                      ) : null}
                    </td>
                    <td>
                      {fieldTestServiceImplEntity.byteAnyMaxbytesMika ? (
                        <div>
                          <a
                            onClick={openFile(
                              fieldTestServiceImplEntity.byteAnyMaxbytesMikaContentType,
                              fieldTestServiceImplEntity.byteAnyMaxbytesMika
                            )}
                          >
                            <Translate contentKey="entity.action.open">Open</Translate>
                            &nbsp;
                          </a>
                          <span>
                            {fieldTestServiceImplEntity.byteAnyMaxbytesMikaContentType},{' '}
                            {byteSize(fieldTestServiceImplEntity.byteAnyMaxbytesMika)}
                          </span>
                        </div>
                      ) : null}
                    </td>
                    <td>{fieldTestServiceImplEntity.byteTextMika}</td>
                    <td>{fieldTestServiceImplEntity.byteTextRequiredMika}</td>
                    <td className="text-right">
                      <div className="btn-group flex-btn-group-container">
                        <Button tag={Link} to={`${match.url}/${fieldTestServiceImplEntity.id}`} color="info" size="sm">
                          <FontAwesomeIcon icon="eye" />{' '}
                          <span className="d-none d-md-inline">
                            <Translate contentKey="entity.action.view">View</Translate>
                          </span>
                        </Button>
                        <Button tag={Link} to={`${match.url}/${fieldTestServiceImplEntity.id}/edit`} color="primary" size="sm">
                          <FontAwesomeIcon icon="pencil-alt" />{' '}
                          <span className="d-none d-md-inline">
                            <Translate contentKey="entity.action.edit">Edit</Translate>
                          </span>
                        </Button>
                        <Button tag={Link} to={`${match.url}/${fieldTestServiceImplEntity.id}/delete`} color="danger" size="sm">
                          <FontAwesomeIcon icon="trash" />{' '}
                          <span className="d-none d-md-inline">
                            <Translate contentKey="entity.action.delete">Delete</Translate>
                          </span>
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          ) : (
            <div className="alert alert-warning">
              <Translate contentKey="travisNg2App.fieldTestServiceImplEntity.home.notFound">
                No Field Test Service Impl Entities found
              </Translate>
            </div>
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ fieldTestServiceImplEntity }: IRootState) => ({
  fieldTestServiceImplEntityList: fieldTestServiceImplEntity.entities
});

const mapDispatchToProps = {
  getEntities
};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FieldTestServiceImplEntity);
