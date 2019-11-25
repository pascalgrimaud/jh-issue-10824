import React from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Col, Row, Table } from 'reactstrap';
import { openFile, byteSize, Translate, ICrudGetAllAction, TextFormat } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IRootState } from 'app/shared/reducers';
import { getEntities } from './field-test-service-class-entity.reducer';
import { IFieldTestServiceClassEntity } from 'app/shared/model/field-test-service-class-entity.model';
import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';

export interface IFieldTestServiceClassEntityProps extends StateProps, DispatchProps, RouteComponentProps<{ url: string }> {}

export class FieldTestServiceClassEntity extends React.Component<IFieldTestServiceClassEntityProps> {
  componentDidMount() {
    this.props.getEntities();
  }

  render() {
    const { fieldTestServiceClassEntityList, match } = this.props;
    return (
      <div>
        <h2 id="field-test-service-class-entity-heading">
          <Translate contentKey="travisNg2App.fieldTestServiceClassEntity.home.title">Field Test Service Class Entities</Translate>
          <Link to={`${match.url}/new`} className="btn btn-primary float-right jh-create-entity" id="jh-create-entity">
            <FontAwesomeIcon icon="plus" />
            &nbsp;
            <Translate contentKey="travisNg2App.fieldTestServiceClassEntity.home.createLabel">
              Create a new Field Test Service Class Entity
            </Translate>
          </Link>
        </h2>
        <div className="table-responsive">
          {fieldTestServiceClassEntityList && fieldTestServiceClassEntityList.length > 0 ? (
            <Table responsive aria-describedby="field-test-service-class-entity-heading">
              <thead>
                <tr>
                  <th>
                    <Translate contentKey="global.field.id">ID</Translate>
                  </th>
                  <th>
                    <Translate contentKey="travisNg2App.fieldTestServiceClassEntity.stringBob">String Bob</Translate>
                  </th>
                  <th>
                    <Translate contentKey="travisNg2App.fieldTestServiceClassEntity.stringRequiredBob">String Required Bob</Translate>
                  </th>
                  <th>
                    <Translate contentKey="travisNg2App.fieldTestServiceClassEntity.stringMinlengthBob">String Minlength Bob</Translate>
                  </th>
                  <th>
                    <Translate contentKey="travisNg2App.fieldTestServiceClassEntity.stringMaxlengthBob">String Maxlength Bob</Translate>
                  </th>
                  <th>
                    <Translate contentKey="travisNg2App.fieldTestServiceClassEntity.stringPatternBob">String Pattern Bob</Translate>
                  </th>
                  <th>
                    <Translate contentKey="travisNg2App.fieldTestServiceClassEntity.integerBob">Integer Bob</Translate>
                  </th>
                  <th>
                    <Translate contentKey="travisNg2App.fieldTestServiceClassEntity.integerRequiredBob">Integer Required Bob</Translate>
                  </th>
                  <th>
                    <Translate contentKey="travisNg2App.fieldTestServiceClassEntity.integerMinBob">Integer Min Bob</Translate>
                  </th>
                  <th>
                    <Translate contentKey="travisNg2App.fieldTestServiceClassEntity.integerMaxBob">Integer Max Bob</Translate>
                  </th>
                  <th>
                    <Translate contentKey="travisNg2App.fieldTestServiceClassEntity.longBob">Long Bob</Translate>
                  </th>
                  <th>
                    <Translate contentKey="travisNg2App.fieldTestServiceClassEntity.longRequiredBob">Long Required Bob</Translate>
                  </th>
                  <th>
                    <Translate contentKey="travisNg2App.fieldTestServiceClassEntity.longMinBob">Long Min Bob</Translate>
                  </th>
                  <th>
                    <Translate contentKey="travisNg2App.fieldTestServiceClassEntity.longMaxBob">Long Max Bob</Translate>
                  </th>
                  <th>
                    <Translate contentKey="travisNg2App.fieldTestServiceClassEntity.floatBob">Float Bob</Translate>
                  </th>
                  <th>
                    <Translate contentKey="travisNg2App.fieldTestServiceClassEntity.floatRequiredBob">Float Required Bob</Translate>
                  </th>
                  <th>
                    <Translate contentKey="travisNg2App.fieldTestServiceClassEntity.floatMinBob">Float Min Bob</Translate>
                  </th>
                  <th>
                    <Translate contentKey="travisNg2App.fieldTestServiceClassEntity.floatMaxBob">Float Max Bob</Translate>
                  </th>
                  <th>
                    <Translate contentKey="travisNg2App.fieldTestServiceClassEntity.doubleRequiredBob">Double Required Bob</Translate>
                  </th>
                  <th>
                    <Translate contentKey="travisNg2App.fieldTestServiceClassEntity.doubleMinBob">Double Min Bob</Translate>
                  </th>
                  <th>
                    <Translate contentKey="travisNg2App.fieldTestServiceClassEntity.doubleMaxBob">Double Max Bob</Translate>
                  </th>
                  <th>
                    <Translate contentKey="travisNg2App.fieldTestServiceClassEntity.bigDecimalRequiredBob">
                      Big Decimal Required Bob
                    </Translate>
                  </th>
                  <th>
                    <Translate contentKey="travisNg2App.fieldTestServiceClassEntity.bigDecimalMinBob">Big Decimal Min Bob</Translate>
                  </th>
                  <th>
                    <Translate contentKey="travisNg2App.fieldTestServiceClassEntity.bigDecimalMaxBob">Big Decimal Max Bob</Translate>
                  </th>
                  <th>
                    <Translate contentKey="travisNg2App.fieldTestServiceClassEntity.localDateBob">Local Date Bob</Translate>
                  </th>
                  <th>
                    <Translate contentKey="travisNg2App.fieldTestServiceClassEntity.localDateRequiredBob">
                      Local Date Required Bob
                    </Translate>
                  </th>
                  <th>
                    <Translate contentKey="travisNg2App.fieldTestServiceClassEntity.instantBob">Instant Bob</Translate>
                  </th>
                  <th>
                    <Translate contentKey="travisNg2App.fieldTestServiceClassEntity.instanteRequiredBob">Instante Required Bob</Translate>
                  </th>
                  <th>
                    <Translate contentKey="travisNg2App.fieldTestServiceClassEntity.zonedDateTimeBob">Zoned Date Time Bob</Translate>
                  </th>
                  <th>
                    <Translate contentKey="travisNg2App.fieldTestServiceClassEntity.zonedDateTimeRequiredBob">
                      Zoned Date Time Required Bob
                    </Translate>
                  </th>
                  <th>
                    <Translate contentKey="travisNg2App.fieldTestServiceClassEntity.durationBob">Duration Bob</Translate>
                  </th>
                  <th>
                    <Translate contentKey="travisNg2App.fieldTestServiceClassEntity.durationRequiredBob">Duration Required Bob</Translate>
                  </th>
                  <th>
                    <Translate contentKey="travisNg2App.fieldTestServiceClassEntity.booleanBob">Boolean Bob</Translate>
                  </th>
                  <th>
                    <Translate contentKey="travisNg2App.fieldTestServiceClassEntity.booleanRequiredBob">Boolean Required Bob</Translate>
                  </th>
                  <th>
                    <Translate contentKey="travisNg2App.fieldTestServiceClassEntity.enumBob">Enum Bob</Translate>
                  </th>
                  <th>
                    <Translate contentKey="travisNg2App.fieldTestServiceClassEntity.enumRequiredBob">Enum Required Bob</Translate>
                  </th>
                  <th>
                    <Translate contentKey="travisNg2App.fieldTestServiceClassEntity.uuidBob">Uuid Bob</Translate>
                  </th>
                  <th>
                    <Translate contentKey="travisNg2App.fieldTestServiceClassEntity.uuidRequiredBob">Uuid Required Bob</Translate>
                  </th>
                  <th>
                    <Translate contentKey="travisNg2App.fieldTestServiceClassEntity.byteImageBob">Byte Image Bob</Translate>
                  </th>
                  <th>
                    <Translate contentKey="travisNg2App.fieldTestServiceClassEntity.byteImageRequiredBob">
                      Byte Image Required Bob
                    </Translate>
                  </th>
                  <th>
                    <Translate contentKey="travisNg2App.fieldTestServiceClassEntity.byteImageMinbytesBob">
                      Byte Image Minbytes Bob
                    </Translate>
                  </th>
                  <th>
                    <Translate contentKey="travisNg2App.fieldTestServiceClassEntity.byteImageMaxbytesBob">
                      Byte Image Maxbytes Bob
                    </Translate>
                  </th>
                  <th>
                    <Translate contentKey="travisNg2App.fieldTestServiceClassEntity.byteAnyBob">Byte Any Bob</Translate>
                  </th>
                  <th>
                    <Translate contentKey="travisNg2App.fieldTestServiceClassEntity.byteAnyRequiredBob">Byte Any Required Bob</Translate>
                  </th>
                  <th>
                    <Translate contentKey="travisNg2App.fieldTestServiceClassEntity.byteAnyMinbytesBob">Byte Any Minbytes Bob</Translate>
                  </th>
                  <th>
                    <Translate contentKey="travisNg2App.fieldTestServiceClassEntity.byteAnyMaxbytesBob">Byte Any Maxbytes Bob</Translate>
                  </th>
                  <th>
                    <Translate contentKey="travisNg2App.fieldTestServiceClassEntity.byteTextBob">Byte Text Bob</Translate>
                  </th>
                  <th>
                    <Translate contentKey="travisNg2App.fieldTestServiceClassEntity.byteTextRequiredBob">Byte Text Required Bob</Translate>
                  </th>
                  <th />
                </tr>
              </thead>
              <tbody>
                {fieldTestServiceClassEntityList.map((fieldTestServiceClassEntity, i) => (
                  <tr key={`entity-${i}`}>
                    <td>
                      <Button tag={Link} to={`${match.url}/${fieldTestServiceClassEntity.id}`} color="link" size="sm">
                        {fieldTestServiceClassEntity.id}
                      </Button>
                    </td>
                    <td>{fieldTestServiceClassEntity.stringBob}</td>
                    <td>{fieldTestServiceClassEntity.stringRequiredBob}</td>
                    <td>{fieldTestServiceClassEntity.stringMinlengthBob}</td>
                    <td>{fieldTestServiceClassEntity.stringMaxlengthBob}</td>
                    <td>{fieldTestServiceClassEntity.stringPatternBob}</td>
                    <td>{fieldTestServiceClassEntity.integerBob}</td>
                    <td>{fieldTestServiceClassEntity.integerRequiredBob}</td>
                    <td>{fieldTestServiceClassEntity.integerMinBob}</td>
                    <td>{fieldTestServiceClassEntity.integerMaxBob}</td>
                    <td>{fieldTestServiceClassEntity.longBob}</td>
                    <td>{fieldTestServiceClassEntity.longRequiredBob}</td>
                    <td>{fieldTestServiceClassEntity.longMinBob}</td>
                    <td>{fieldTestServiceClassEntity.longMaxBob}</td>
                    <td>{fieldTestServiceClassEntity.floatBob}</td>
                    <td>{fieldTestServiceClassEntity.floatRequiredBob}</td>
                    <td>{fieldTestServiceClassEntity.floatMinBob}</td>
                    <td>{fieldTestServiceClassEntity.floatMaxBob}</td>
                    <td>{fieldTestServiceClassEntity.doubleRequiredBob}</td>
                    <td>{fieldTestServiceClassEntity.doubleMinBob}</td>
                    <td>{fieldTestServiceClassEntity.doubleMaxBob}</td>
                    <td>{fieldTestServiceClassEntity.bigDecimalRequiredBob}</td>
                    <td>{fieldTestServiceClassEntity.bigDecimalMinBob}</td>
                    <td>{fieldTestServiceClassEntity.bigDecimalMaxBob}</td>
                    <td>
                      <TextFormat type="date" value={fieldTestServiceClassEntity.localDateBob} format={APP_LOCAL_DATE_FORMAT} />
                    </td>
                    <td>
                      <TextFormat type="date" value={fieldTestServiceClassEntity.localDateRequiredBob} format={APP_LOCAL_DATE_FORMAT} />
                    </td>
                    <td>
                      <TextFormat type="date" value={fieldTestServiceClassEntity.instantBob} format={APP_DATE_FORMAT} />
                    </td>
                    <td>
                      <TextFormat type="date" value={fieldTestServiceClassEntity.instanteRequiredBob} format={APP_DATE_FORMAT} />
                    </td>
                    <td>
                      <TextFormat type="date" value={fieldTestServiceClassEntity.zonedDateTimeBob} format={APP_DATE_FORMAT} />
                    </td>
                    <td>
                      <TextFormat type="date" value={fieldTestServiceClassEntity.zonedDateTimeRequiredBob} format={APP_DATE_FORMAT} />
                    </td>
                    <td>{fieldTestServiceClassEntity.durationBob}</td>
                    <td>{fieldTestServiceClassEntity.durationRequiredBob}</td>
                    <td>{fieldTestServiceClassEntity.booleanBob ? 'true' : 'false'}</td>
                    <td>{fieldTestServiceClassEntity.booleanRequiredBob ? 'true' : 'false'}</td>
                    <td>
                      <Translate contentKey={`travisNg2App.EnumFieldClass.${fieldTestServiceClassEntity.enumBob}`} />
                    </td>
                    <td>
                      <Translate contentKey={`travisNg2App.EnumRequiredFieldClass.${fieldTestServiceClassEntity.enumRequiredBob}`} />
                    </td>
                    <td>{fieldTestServiceClassEntity.uuidBob}</td>
                    <td>{fieldTestServiceClassEntity.uuidRequiredBob}</td>
                    <td>
                      {fieldTestServiceClassEntity.byteImageBob ? (
                        <div>
                          <a
                            onClick={openFile(
                              fieldTestServiceClassEntity.byteImageBobContentType,
                              fieldTestServiceClassEntity.byteImageBob
                            )}
                          >
                            <img
                              src={`data:${fieldTestServiceClassEntity.byteImageBobContentType};base64,${
                                fieldTestServiceClassEntity.byteImageBob
                              }`}
                              style={{ maxHeight: '30px' }}
                            />
                            &nbsp;
                          </a>
                          <span>
                            {fieldTestServiceClassEntity.byteImageBobContentType}, {byteSize(fieldTestServiceClassEntity.byteImageBob)}
                          </span>
                        </div>
                      ) : null}
                    </td>
                    <td>
                      {fieldTestServiceClassEntity.byteImageRequiredBob ? (
                        <div>
                          <a
                            onClick={openFile(
                              fieldTestServiceClassEntity.byteImageRequiredBobContentType,
                              fieldTestServiceClassEntity.byteImageRequiredBob
                            )}
                          >
                            <img
                              src={`data:${fieldTestServiceClassEntity.byteImageRequiredBobContentType};base64,${
                                fieldTestServiceClassEntity.byteImageRequiredBob
                              }`}
                              style={{ maxHeight: '30px' }}
                            />
                            &nbsp;
                          </a>
                          <span>
                            {fieldTestServiceClassEntity.byteImageRequiredBobContentType},{' '}
                            {byteSize(fieldTestServiceClassEntity.byteImageRequiredBob)}
                          </span>
                        </div>
                      ) : null}
                    </td>
                    <td>
                      {fieldTestServiceClassEntity.byteImageMinbytesBob ? (
                        <div>
                          <a
                            onClick={openFile(
                              fieldTestServiceClassEntity.byteImageMinbytesBobContentType,
                              fieldTestServiceClassEntity.byteImageMinbytesBob
                            )}
                          >
                            <img
                              src={`data:${fieldTestServiceClassEntity.byteImageMinbytesBobContentType};base64,${
                                fieldTestServiceClassEntity.byteImageMinbytesBob
                              }`}
                              style={{ maxHeight: '30px' }}
                            />
                            &nbsp;
                          </a>
                          <span>
                            {fieldTestServiceClassEntity.byteImageMinbytesBobContentType},{' '}
                            {byteSize(fieldTestServiceClassEntity.byteImageMinbytesBob)}
                          </span>
                        </div>
                      ) : null}
                    </td>
                    <td>
                      {fieldTestServiceClassEntity.byteImageMaxbytesBob ? (
                        <div>
                          <a
                            onClick={openFile(
                              fieldTestServiceClassEntity.byteImageMaxbytesBobContentType,
                              fieldTestServiceClassEntity.byteImageMaxbytesBob
                            )}
                          >
                            <img
                              src={`data:${fieldTestServiceClassEntity.byteImageMaxbytesBobContentType};base64,${
                                fieldTestServiceClassEntity.byteImageMaxbytesBob
                              }`}
                              style={{ maxHeight: '30px' }}
                            />
                            &nbsp;
                          </a>
                          <span>
                            {fieldTestServiceClassEntity.byteImageMaxbytesBobContentType},{' '}
                            {byteSize(fieldTestServiceClassEntity.byteImageMaxbytesBob)}
                          </span>
                        </div>
                      ) : null}
                    </td>
                    <td>
                      {fieldTestServiceClassEntity.byteAnyBob ? (
                        <div>
                          <a onClick={openFile(fieldTestServiceClassEntity.byteAnyBobContentType, fieldTestServiceClassEntity.byteAnyBob)}>
                            <Translate contentKey="entity.action.open">Open</Translate>
                            &nbsp;
                          </a>
                          <span>
                            {fieldTestServiceClassEntity.byteAnyBobContentType}, {byteSize(fieldTestServiceClassEntity.byteAnyBob)}
                          </span>
                        </div>
                      ) : null}
                    </td>
                    <td>
                      {fieldTestServiceClassEntity.byteAnyRequiredBob ? (
                        <div>
                          <a
                            onClick={openFile(
                              fieldTestServiceClassEntity.byteAnyRequiredBobContentType,
                              fieldTestServiceClassEntity.byteAnyRequiredBob
                            )}
                          >
                            <Translate contentKey="entity.action.open">Open</Translate>
                            &nbsp;
                          </a>
                          <span>
                            {fieldTestServiceClassEntity.byteAnyRequiredBobContentType},{' '}
                            {byteSize(fieldTestServiceClassEntity.byteAnyRequiredBob)}
                          </span>
                        </div>
                      ) : null}
                    </td>
                    <td>
                      {fieldTestServiceClassEntity.byteAnyMinbytesBob ? (
                        <div>
                          <a
                            onClick={openFile(
                              fieldTestServiceClassEntity.byteAnyMinbytesBobContentType,
                              fieldTestServiceClassEntity.byteAnyMinbytesBob
                            )}
                          >
                            <Translate contentKey="entity.action.open">Open</Translate>
                            &nbsp;
                          </a>
                          <span>
                            {fieldTestServiceClassEntity.byteAnyMinbytesBobContentType},{' '}
                            {byteSize(fieldTestServiceClassEntity.byteAnyMinbytesBob)}
                          </span>
                        </div>
                      ) : null}
                    </td>
                    <td>
                      {fieldTestServiceClassEntity.byteAnyMaxbytesBob ? (
                        <div>
                          <a
                            onClick={openFile(
                              fieldTestServiceClassEntity.byteAnyMaxbytesBobContentType,
                              fieldTestServiceClassEntity.byteAnyMaxbytesBob
                            )}
                          >
                            <Translate contentKey="entity.action.open">Open</Translate>
                            &nbsp;
                          </a>
                          <span>
                            {fieldTestServiceClassEntity.byteAnyMaxbytesBobContentType},{' '}
                            {byteSize(fieldTestServiceClassEntity.byteAnyMaxbytesBob)}
                          </span>
                        </div>
                      ) : null}
                    </td>
                    <td>{fieldTestServiceClassEntity.byteTextBob}</td>
                    <td>{fieldTestServiceClassEntity.byteTextRequiredBob}</td>
                    <td className="text-right">
                      <div className="btn-group flex-btn-group-container">
                        <Button tag={Link} to={`${match.url}/${fieldTestServiceClassEntity.id}`} color="info" size="sm">
                          <FontAwesomeIcon icon="eye" />{' '}
                          <span className="d-none d-md-inline">
                            <Translate contentKey="entity.action.view">View</Translate>
                          </span>
                        </Button>
                        <Button tag={Link} to={`${match.url}/${fieldTestServiceClassEntity.id}/edit`} color="primary" size="sm">
                          <FontAwesomeIcon icon="pencil-alt" />{' '}
                          <span className="d-none d-md-inline">
                            <Translate contentKey="entity.action.edit">Edit</Translate>
                          </span>
                        </Button>
                        <Button tag={Link} to={`${match.url}/${fieldTestServiceClassEntity.id}/delete`} color="danger" size="sm">
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
              <Translate contentKey="travisNg2App.fieldTestServiceClassEntity.home.notFound">
                No Field Test Service Class Entities found
              </Translate>
            </div>
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ fieldTestServiceClassEntity }: IRootState) => ({
  fieldTestServiceClassEntityList: fieldTestServiceClassEntity.entities
});

const mapDispatchToProps = {
  getEntities
};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FieldTestServiceClassEntity);
