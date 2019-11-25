import React from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Col, Row, Table } from 'reactstrap';
import { openFile, byteSize, Translate, ICrudGetAllAction, TextFormat } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IRootState } from 'app/shared/reducers';
import { getEntities } from './field-test-mapstruct-entity.reducer';
import { IFieldTestMapstructEntity } from 'app/shared/model/field-test-mapstruct-entity.model';
import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';

export interface IFieldTestMapstructEntityProps extends StateProps, DispatchProps, RouteComponentProps<{ url: string }> {}

export class FieldTestMapstructEntity extends React.Component<IFieldTestMapstructEntityProps> {
  componentDidMount() {
    this.props.getEntities();
  }

  render() {
    const { fieldTestMapstructEntityList, match } = this.props;
    return (
      <div>
        <h2 id="field-test-mapstruct-entity-heading">
          <Translate contentKey="travisNg2App.fieldTestMapstructEntity.home.title">Field Test Mapstruct Entities</Translate>
          <Link to={`${match.url}/new`} className="btn btn-primary float-right jh-create-entity" id="jh-create-entity">
            <FontAwesomeIcon icon="plus" />
            &nbsp;
            <Translate contentKey="travisNg2App.fieldTestMapstructEntity.home.createLabel">
              Create a new Field Test Mapstruct Entity
            </Translate>
          </Link>
        </h2>
        <div className="table-responsive">
          {fieldTestMapstructEntityList && fieldTestMapstructEntityList.length > 0 ? (
            <Table responsive aria-describedby="field-test-mapstruct-entity-heading">
              <thead>
                <tr>
                  <th>
                    <Translate contentKey="global.field.id">ID</Translate>
                  </th>
                  <th>
                    <Translate contentKey="travisNg2App.fieldTestMapstructEntity.stringEva">String Eva</Translate>
                  </th>
                  <th>
                    <Translate contentKey="travisNg2App.fieldTestMapstructEntity.stringRequiredEva">String Required Eva</Translate>
                  </th>
                  <th>
                    <Translate contentKey="travisNg2App.fieldTestMapstructEntity.stringMinlengthEva">String Minlength Eva</Translate>
                  </th>
                  <th>
                    <Translate contentKey="travisNg2App.fieldTestMapstructEntity.stringMaxlengthEva">String Maxlength Eva</Translate>
                  </th>
                  <th>
                    <Translate contentKey="travisNg2App.fieldTestMapstructEntity.stringPatternEva">String Pattern Eva</Translate>
                  </th>
                  <th>
                    <Translate contentKey="travisNg2App.fieldTestMapstructEntity.integerEva">Integer Eva</Translate>
                  </th>
                  <th>
                    <Translate contentKey="travisNg2App.fieldTestMapstructEntity.integerRequiredEva">Integer Required Eva</Translate>
                  </th>
                  <th>
                    <Translate contentKey="travisNg2App.fieldTestMapstructEntity.integerMinEva">Integer Min Eva</Translate>
                  </th>
                  <th>
                    <Translate contentKey="travisNg2App.fieldTestMapstructEntity.integerMaxEva">Integer Max Eva</Translate>
                  </th>
                  <th>
                    <Translate contentKey="travisNg2App.fieldTestMapstructEntity.longEva">Long Eva</Translate>
                  </th>
                  <th>
                    <Translate contentKey="travisNg2App.fieldTestMapstructEntity.longRequiredEva">Long Required Eva</Translate>
                  </th>
                  <th>
                    <Translate contentKey="travisNg2App.fieldTestMapstructEntity.longMinEva">Long Min Eva</Translate>
                  </th>
                  <th>
                    <Translate contentKey="travisNg2App.fieldTestMapstructEntity.longMaxEva">Long Max Eva</Translate>
                  </th>
                  <th>
                    <Translate contentKey="travisNg2App.fieldTestMapstructEntity.floatEva">Float Eva</Translate>
                  </th>
                  <th>
                    <Translate contentKey="travisNg2App.fieldTestMapstructEntity.floatRequiredEva">Float Required Eva</Translate>
                  </th>
                  <th>
                    <Translate contentKey="travisNg2App.fieldTestMapstructEntity.floatMinEva">Float Min Eva</Translate>
                  </th>
                  <th>
                    <Translate contentKey="travisNg2App.fieldTestMapstructEntity.floatMaxEva">Float Max Eva</Translate>
                  </th>
                  <th>
                    <Translate contentKey="travisNg2App.fieldTestMapstructEntity.doubleRequiredEva">Double Required Eva</Translate>
                  </th>
                  <th>
                    <Translate contentKey="travisNg2App.fieldTestMapstructEntity.doubleMinEva">Double Min Eva</Translate>
                  </th>
                  <th>
                    <Translate contentKey="travisNg2App.fieldTestMapstructEntity.doubleMaxEva">Double Max Eva</Translate>
                  </th>
                  <th>
                    <Translate contentKey="travisNg2App.fieldTestMapstructEntity.bigDecimalRequiredEva">Big Decimal Required Eva</Translate>
                  </th>
                  <th>
                    <Translate contentKey="travisNg2App.fieldTestMapstructEntity.bigDecimalMinEva">Big Decimal Min Eva</Translate>
                  </th>
                  <th>
                    <Translate contentKey="travisNg2App.fieldTestMapstructEntity.bigDecimalMaxEva">Big Decimal Max Eva</Translate>
                  </th>
                  <th>
                    <Translate contentKey="travisNg2App.fieldTestMapstructEntity.localDateEva">Local Date Eva</Translate>
                  </th>
                  <th>
                    <Translate contentKey="travisNg2App.fieldTestMapstructEntity.localDateRequiredEva">Local Date Required Eva</Translate>
                  </th>
                  <th>
                    <Translate contentKey="travisNg2App.fieldTestMapstructEntity.instantEva">Instant Eva</Translate>
                  </th>
                  <th>
                    <Translate contentKey="travisNg2App.fieldTestMapstructEntity.instanteRequiredEva">Instante Required Eva</Translate>
                  </th>
                  <th>
                    <Translate contentKey="travisNg2App.fieldTestMapstructEntity.zonedDateTimeEva">Zoned Date Time Eva</Translate>
                  </th>
                  <th>
                    <Translate contentKey="travisNg2App.fieldTestMapstructEntity.zonedDateTimeRequiredEva">
                      Zoned Date Time Required Eva
                    </Translate>
                  </th>
                  <th>
                    <Translate contentKey="travisNg2App.fieldTestMapstructEntity.durationEva">Duration Eva</Translate>
                  </th>
                  <th>
                    <Translate contentKey="travisNg2App.fieldTestMapstructEntity.durationRequiredEva">Duration Required Eva</Translate>
                  </th>
                  <th>
                    <Translate contentKey="travisNg2App.fieldTestMapstructEntity.booleanEva">Boolean Eva</Translate>
                  </th>
                  <th>
                    <Translate contentKey="travisNg2App.fieldTestMapstructEntity.booleanRequiredEva">Boolean Required Eva</Translate>
                  </th>
                  <th>
                    <Translate contentKey="travisNg2App.fieldTestMapstructEntity.enumEva">Enum Eva</Translate>
                  </th>
                  <th>
                    <Translate contentKey="travisNg2App.fieldTestMapstructEntity.enumRequiredEva">Enum Required Eva</Translate>
                  </th>
                  <th>
                    <Translate contentKey="travisNg2App.fieldTestMapstructEntity.uuidEva">Uuid Eva</Translate>
                  </th>
                  <th>
                    <Translate contentKey="travisNg2App.fieldTestMapstructEntity.uuidRequiredEva">Uuid Required Eva</Translate>
                  </th>
                  <th>
                    <Translate contentKey="travisNg2App.fieldTestMapstructEntity.byteImageEva">Byte Image Eva</Translate>
                  </th>
                  <th>
                    <Translate contentKey="travisNg2App.fieldTestMapstructEntity.byteImageRequiredEva">Byte Image Required Eva</Translate>
                  </th>
                  <th>
                    <Translate contentKey="travisNg2App.fieldTestMapstructEntity.byteImageMinbytesEva">Byte Image Minbytes Eva</Translate>
                  </th>
                  <th>
                    <Translate contentKey="travisNg2App.fieldTestMapstructEntity.byteImageMaxbytesEva">Byte Image Maxbytes Eva</Translate>
                  </th>
                  <th>
                    <Translate contentKey="travisNg2App.fieldTestMapstructEntity.byteAnyEva">Byte Any Eva</Translate>
                  </th>
                  <th>
                    <Translate contentKey="travisNg2App.fieldTestMapstructEntity.byteAnyRequiredEva">Byte Any Required Eva</Translate>
                  </th>
                  <th>
                    <Translate contentKey="travisNg2App.fieldTestMapstructEntity.byteAnyMinbytesEva">Byte Any Minbytes Eva</Translate>
                  </th>
                  <th>
                    <Translate contentKey="travisNg2App.fieldTestMapstructEntity.byteAnyMaxbytesEva">Byte Any Maxbytes Eva</Translate>
                  </th>
                  <th>
                    <Translate contentKey="travisNg2App.fieldTestMapstructEntity.byteTextEva">Byte Text Eva</Translate>
                  </th>
                  <th>
                    <Translate contentKey="travisNg2App.fieldTestMapstructEntity.byteTextRequiredEva">Byte Text Required Eva</Translate>
                  </th>
                  <th />
                </tr>
              </thead>
              <tbody>
                {fieldTestMapstructEntityList.map((fieldTestMapstructEntity, i) => (
                  <tr key={`entity-${i}`}>
                    <td>
                      <Button tag={Link} to={`${match.url}/${fieldTestMapstructEntity.id}`} color="link" size="sm">
                        {fieldTestMapstructEntity.id}
                      </Button>
                    </td>
                    <td>{fieldTestMapstructEntity.stringEva}</td>
                    <td>{fieldTestMapstructEntity.stringRequiredEva}</td>
                    <td>{fieldTestMapstructEntity.stringMinlengthEva}</td>
                    <td>{fieldTestMapstructEntity.stringMaxlengthEva}</td>
                    <td>{fieldTestMapstructEntity.stringPatternEva}</td>
                    <td>{fieldTestMapstructEntity.integerEva}</td>
                    <td>{fieldTestMapstructEntity.integerRequiredEva}</td>
                    <td>{fieldTestMapstructEntity.integerMinEva}</td>
                    <td>{fieldTestMapstructEntity.integerMaxEva}</td>
                    <td>{fieldTestMapstructEntity.longEva}</td>
                    <td>{fieldTestMapstructEntity.longRequiredEva}</td>
                    <td>{fieldTestMapstructEntity.longMinEva}</td>
                    <td>{fieldTestMapstructEntity.longMaxEva}</td>
                    <td>{fieldTestMapstructEntity.floatEva}</td>
                    <td>{fieldTestMapstructEntity.floatRequiredEva}</td>
                    <td>{fieldTestMapstructEntity.floatMinEva}</td>
                    <td>{fieldTestMapstructEntity.floatMaxEva}</td>
                    <td>{fieldTestMapstructEntity.doubleRequiredEva}</td>
                    <td>{fieldTestMapstructEntity.doubleMinEva}</td>
                    <td>{fieldTestMapstructEntity.doubleMaxEva}</td>
                    <td>{fieldTestMapstructEntity.bigDecimalRequiredEva}</td>
                    <td>{fieldTestMapstructEntity.bigDecimalMinEva}</td>
                    <td>{fieldTestMapstructEntity.bigDecimalMaxEva}</td>
                    <td>
                      <TextFormat type="date" value={fieldTestMapstructEntity.localDateEva} format={APP_LOCAL_DATE_FORMAT} />
                    </td>
                    <td>
                      <TextFormat type="date" value={fieldTestMapstructEntity.localDateRequiredEva} format={APP_LOCAL_DATE_FORMAT} />
                    </td>
                    <td>
                      <TextFormat type="date" value={fieldTestMapstructEntity.instantEva} format={APP_DATE_FORMAT} />
                    </td>
                    <td>
                      <TextFormat type="date" value={fieldTestMapstructEntity.instanteRequiredEva} format={APP_DATE_FORMAT} />
                    </td>
                    <td>
                      <TextFormat type="date" value={fieldTestMapstructEntity.zonedDateTimeEva} format={APP_DATE_FORMAT} />
                    </td>
                    <td>
                      <TextFormat type="date" value={fieldTestMapstructEntity.zonedDateTimeRequiredEva} format={APP_DATE_FORMAT} />
                    </td>
                    <td>{fieldTestMapstructEntity.durationEva}</td>
                    <td>{fieldTestMapstructEntity.durationRequiredEva}</td>
                    <td>{fieldTestMapstructEntity.booleanEva ? 'true' : 'false'}</td>
                    <td>{fieldTestMapstructEntity.booleanRequiredEva ? 'true' : 'false'}</td>
                    <td>
                      <Translate contentKey={`travisNg2App.EnumFieldClass.${fieldTestMapstructEntity.enumEva}`} />
                    </td>
                    <td>
                      <Translate contentKey={`travisNg2App.EnumRequiredFieldClass.${fieldTestMapstructEntity.enumRequiredEva}`} />
                    </td>
                    <td>{fieldTestMapstructEntity.uuidEva}</td>
                    <td>{fieldTestMapstructEntity.uuidRequiredEva}</td>
                    <td>
                      {fieldTestMapstructEntity.byteImageEva ? (
                        <div>
                          <a onClick={openFile(fieldTestMapstructEntity.byteImageEvaContentType, fieldTestMapstructEntity.byteImageEva)}>
                            <img
                              src={`data:${fieldTestMapstructEntity.byteImageEvaContentType};base64,${
                                fieldTestMapstructEntity.byteImageEva
                              }`}
                              style={{ maxHeight: '30px' }}
                            />
                            &nbsp;
                          </a>
                          <span>
                            {fieldTestMapstructEntity.byteImageEvaContentType}, {byteSize(fieldTestMapstructEntity.byteImageEva)}
                          </span>
                        </div>
                      ) : null}
                    </td>
                    <td>
                      {fieldTestMapstructEntity.byteImageRequiredEva ? (
                        <div>
                          <a
                            onClick={openFile(
                              fieldTestMapstructEntity.byteImageRequiredEvaContentType,
                              fieldTestMapstructEntity.byteImageRequiredEva
                            )}
                          >
                            <img
                              src={`data:${fieldTestMapstructEntity.byteImageRequiredEvaContentType};base64,${
                                fieldTestMapstructEntity.byteImageRequiredEva
                              }`}
                              style={{ maxHeight: '30px' }}
                            />
                            &nbsp;
                          </a>
                          <span>
                            {fieldTestMapstructEntity.byteImageRequiredEvaContentType},{' '}
                            {byteSize(fieldTestMapstructEntity.byteImageRequiredEva)}
                          </span>
                        </div>
                      ) : null}
                    </td>
                    <td>
                      {fieldTestMapstructEntity.byteImageMinbytesEva ? (
                        <div>
                          <a
                            onClick={openFile(
                              fieldTestMapstructEntity.byteImageMinbytesEvaContentType,
                              fieldTestMapstructEntity.byteImageMinbytesEva
                            )}
                          >
                            <img
                              src={`data:${fieldTestMapstructEntity.byteImageMinbytesEvaContentType};base64,${
                                fieldTestMapstructEntity.byteImageMinbytesEva
                              }`}
                              style={{ maxHeight: '30px' }}
                            />
                            &nbsp;
                          </a>
                          <span>
                            {fieldTestMapstructEntity.byteImageMinbytesEvaContentType},{' '}
                            {byteSize(fieldTestMapstructEntity.byteImageMinbytesEva)}
                          </span>
                        </div>
                      ) : null}
                    </td>
                    <td>
                      {fieldTestMapstructEntity.byteImageMaxbytesEva ? (
                        <div>
                          <a
                            onClick={openFile(
                              fieldTestMapstructEntity.byteImageMaxbytesEvaContentType,
                              fieldTestMapstructEntity.byteImageMaxbytesEva
                            )}
                          >
                            <img
                              src={`data:${fieldTestMapstructEntity.byteImageMaxbytesEvaContentType};base64,${
                                fieldTestMapstructEntity.byteImageMaxbytesEva
                              }`}
                              style={{ maxHeight: '30px' }}
                            />
                            &nbsp;
                          </a>
                          <span>
                            {fieldTestMapstructEntity.byteImageMaxbytesEvaContentType},{' '}
                            {byteSize(fieldTestMapstructEntity.byteImageMaxbytesEva)}
                          </span>
                        </div>
                      ) : null}
                    </td>
                    <td>
                      {fieldTestMapstructEntity.byteAnyEva ? (
                        <div>
                          <a onClick={openFile(fieldTestMapstructEntity.byteAnyEvaContentType, fieldTestMapstructEntity.byteAnyEva)}>
                            <Translate contentKey="entity.action.open">Open</Translate>
                            &nbsp;
                          </a>
                          <span>
                            {fieldTestMapstructEntity.byteAnyEvaContentType}, {byteSize(fieldTestMapstructEntity.byteAnyEva)}
                          </span>
                        </div>
                      ) : null}
                    </td>
                    <td>
                      {fieldTestMapstructEntity.byteAnyRequiredEva ? (
                        <div>
                          <a
                            onClick={openFile(
                              fieldTestMapstructEntity.byteAnyRequiredEvaContentType,
                              fieldTestMapstructEntity.byteAnyRequiredEva
                            )}
                          >
                            <Translate contentKey="entity.action.open">Open</Translate>
                            &nbsp;
                          </a>
                          <span>
                            {fieldTestMapstructEntity.byteAnyRequiredEvaContentType},{' '}
                            {byteSize(fieldTestMapstructEntity.byteAnyRequiredEva)}
                          </span>
                        </div>
                      ) : null}
                    </td>
                    <td>
                      {fieldTestMapstructEntity.byteAnyMinbytesEva ? (
                        <div>
                          <a
                            onClick={openFile(
                              fieldTestMapstructEntity.byteAnyMinbytesEvaContentType,
                              fieldTestMapstructEntity.byteAnyMinbytesEva
                            )}
                          >
                            <Translate contentKey="entity.action.open">Open</Translate>
                            &nbsp;
                          </a>
                          <span>
                            {fieldTestMapstructEntity.byteAnyMinbytesEvaContentType},{' '}
                            {byteSize(fieldTestMapstructEntity.byteAnyMinbytesEva)}
                          </span>
                        </div>
                      ) : null}
                    </td>
                    <td>
                      {fieldTestMapstructEntity.byteAnyMaxbytesEva ? (
                        <div>
                          <a
                            onClick={openFile(
                              fieldTestMapstructEntity.byteAnyMaxbytesEvaContentType,
                              fieldTestMapstructEntity.byteAnyMaxbytesEva
                            )}
                          >
                            <Translate contentKey="entity.action.open">Open</Translate>
                            &nbsp;
                          </a>
                          <span>
                            {fieldTestMapstructEntity.byteAnyMaxbytesEvaContentType},{' '}
                            {byteSize(fieldTestMapstructEntity.byteAnyMaxbytesEva)}
                          </span>
                        </div>
                      ) : null}
                    </td>
                    <td>{fieldTestMapstructEntity.byteTextEva}</td>
                    <td>{fieldTestMapstructEntity.byteTextRequiredEva}</td>
                    <td className="text-right">
                      <div className="btn-group flex-btn-group-container">
                        <Button tag={Link} to={`${match.url}/${fieldTestMapstructEntity.id}`} color="info" size="sm">
                          <FontAwesomeIcon icon="eye" />{' '}
                          <span className="d-none d-md-inline">
                            <Translate contentKey="entity.action.view">View</Translate>
                          </span>
                        </Button>
                        <Button tag={Link} to={`${match.url}/${fieldTestMapstructEntity.id}/edit`} color="primary" size="sm">
                          <FontAwesomeIcon icon="pencil-alt" />{' '}
                          <span className="d-none d-md-inline">
                            <Translate contentKey="entity.action.edit">Edit</Translate>
                          </span>
                        </Button>
                        <Button tag={Link} to={`${match.url}/${fieldTestMapstructEntity.id}/delete`} color="danger" size="sm">
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
              <Translate contentKey="travisNg2App.fieldTestMapstructEntity.home.notFound">No Field Test Mapstruct Entities found</Translate>
            </div>
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ fieldTestMapstructEntity }: IRootState) => ({
  fieldTestMapstructEntityList: fieldTestMapstructEntity.entities
});

const mapDispatchToProps = {
  getEntities
};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FieldTestMapstructEntity);
