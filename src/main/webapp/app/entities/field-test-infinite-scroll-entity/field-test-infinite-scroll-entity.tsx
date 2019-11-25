import React from 'react';
import InfiniteScroll from 'react-infinite-scroller';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Col, Row, Table } from 'reactstrap';
import { openFile, byteSize, Translate, ICrudGetAllAction, TextFormat, getSortState, IPaginationBaseState } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IRootState } from 'app/shared/reducers';
import { getEntities, reset } from './field-test-infinite-scroll-entity.reducer';
import { IFieldTestInfiniteScrollEntity } from 'app/shared/model/field-test-infinite-scroll-entity.model';
import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
import { ITEMS_PER_PAGE } from 'app/shared/util/pagination.constants';

export interface IFieldTestInfiniteScrollEntityProps extends StateProps, DispatchProps, RouteComponentProps<{ url: string }> {}

export type IFieldTestInfiniteScrollEntityState = IPaginationBaseState;

export class FieldTestInfiniteScrollEntity extends React.Component<
  IFieldTestInfiniteScrollEntityProps,
  IFieldTestInfiniteScrollEntityState
> {
  state: IFieldTestInfiniteScrollEntityState = {
    ...getSortState(this.props.location, ITEMS_PER_PAGE)
  };

  componentDidMount() {
    this.reset();
  }

  componentDidUpdate() {
    if (this.props.updateSuccess) {
      this.reset();
    }
  }

  reset = () => {
    this.props.reset();
    this.setState({ activePage: 1 }, () => {
      this.getEntities();
    });
  };

  handleLoadMore = () => {
    if (window.pageYOffset > 0) {
      this.setState({ activePage: this.state.activePage + 1 }, () => this.getEntities());
    }
  };

  sort = prop => () => {
    this.setState(
      {
        order: this.state.order === 'asc' ? 'desc' : 'asc',
        sort: prop
      },
      () => {
        this.reset();
      }
    );
  };

  getEntities = () => {
    const { activePage, itemsPerPage, sort, order } = this.state;
    this.props.getEntities(activePage - 1, itemsPerPage, `${sort},${order}`);
  };

  render() {
    const { fieldTestInfiniteScrollEntityList, match } = this.props;
    return (
      <div>
        <h2 id="field-test-infinite-scroll-entity-heading">
          <Translate contentKey="travisNg2App.fieldTestInfiniteScrollEntity.home.title">Field Test Infinite Scroll Entities</Translate>
          <Link to={`${match.url}/new`} className="btn btn-primary float-right jh-create-entity" id="jh-create-entity">
            <FontAwesomeIcon icon="plus" />
            &nbsp;
            <Translate contentKey="travisNg2App.fieldTestInfiniteScrollEntity.home.createLabel">
              Create a new Field Test Infinite Scroll Entity
            </Translate>
          </Link>
        </h2>
        <div className="table-responsive">
          <InfiniteScroll
            pageStart={this.state.activePage}
            loadMore={this.handleLoadMore}
            hasMore={this.state.activePage - 1 < this.props.links.next}
            loader={<div className="loader">Loading ...</div>}
            threshold={0}
            initialLoad={false}
          >
            {fieldTestInfiniteScrollEntityList && fieldTestInfiniteScrollEntityList.length > 0 ? (
              <Table responsive aria-describedby="field-test-infinite-scroll-entity-heading">
                <thead>
                  <tr>
                    <th className="hand" onClick={this.sort('id')}>
                      <Translate contentKey="global.field.id">ID</Translate> <FontAwesomeIcon icon="sort" />
                    </th>
                    <th className="hand" onClick={this.sort('stringHugo')}>
                      <Translate contentKey="travisNg2App.fieldTestInfiniteScrollEntity.stringHugo">String Hugo</Translate>{' '}
                      <FontAwesomeIcon icon="sort" />
                    </th>
                    <th className="hand" onClick={this.sort('stringRequiredHugo')}>
                      <Translate contentKey="travisNg2App.fieldTestInfiniteScrollEntity.stringRequiredHugo">String Required Hugo</Translate>{' '}
                      <FontAwesomeIcon icon="sort" />
                    </th>
                    <th className="hand" onClick={this.sort('stringMinlengthHugo')}>
                      <Translate contentKey="travisNg2App.fieldTestInfiniteScrollEntity.stringMinlengthHugo">
                        String Minlength Hugo
                      </Translate>{' '}
                      <FontAwesomeIcon icon="sort" />
                    </th>
                    <th className="hand" onClick={this.sort('stringMaxlengthHugo')}>
                      <Translate contentKey="travisNg2App.fieldTestInfiniteScrollEntity.stringMaxlengthHugo">
                        String Maxlength Hugo
                      </Translate>{' '}
                      <FontAwesomeIcon icon="sort" />
                    </th>
                    <th className="hand" onClick={this.sort('stringPatternHugo')}>
                      <Translate contentKey="travisNg2App.fieldTestInfiniteScrollEntity.stringPatternHugo">String Pattern Hugo</Translate>{' '}
                      <FontAwesomeIcon icon="sort" />
                    </th>
                    <th className="hand" onClick={this.sort('integerHugo')}>
                      <Translate contentKey="travisNg2App.fieldTestInfiniteScrollEntity.integerHugo">Integer Hugo</Translate>{' '}
                      <FontAwesomeIcon icon="sort" />
                    </th>
                    <th className="hand" onClick={this.sort('integerRequiredHugo')}>
                      <Translate contentKey="travisNg2App.fieldTestInfiniteScrollEntity.integerRequiredHugo">
                        Integer Required Hugo
                      </Translate>{' '}
                      <FontAwesomeIcon icon="sort" />
                    </th>
                    <th className="hand" onClick={this.sort('integerMinHugo')}>
                      <Translate contentKey="travisNg2App.fieldTestInfiniteScrollEntity.integerMinHugo">Integer Min Hugo</Translate>{' '}
                      <FontAwesomeIcon icon="sort" />
                    </th>
                    <th className="hand" onClick={this.sort('integerMaxHugo')}>
                      <Translate contentKey="travisNg2App.fieldTestInfiniteScrollEntity.integerMaxHugo">Integer Max Hugo</Translate>{' '}
                      <FontAwesomeIcon icon="sort" />
                    </th>
                    <th className="hand" onClick={this.sort('longHugo')}>
                      <Translate contentKey="travisNg2App.fieldTestInfiniteScrollEntity.longHugo">Long Hugo</Translate>{' '}
                      <FontAwesomeIcon icon="sort" />
                    </th>
                    <th className="hand" onClick={this.sort('longRequiredHugo')}>
                      <Translate contentKey="travisNg2App.fieldTestInfiniteScrollEntity.longRequiredHugo">Long Required Hugo</Translate>{' '}
                      <FontAwesomeIcon icon="sort" />
                    </th>
                    <th className="hand" onClick={this.sort('longMinHugo')}>
                      <Translate contentKey="travisNg2App.fieldTestInfiniteScrollEntity.longMinHugo">Long Min Hugo</Translate>{' '}
                      <FontAwesomeIcon icon="sort" />
                    </th>
                    <th className="hand" onClick={this.sort('longMaxHugo')}>
                      <Translate contentKey="travisNg2App.fieldTestInfiniteScrollEntity.longMaxHugo">Long Max Hugo</Translate>{' '}
                      <FontAwesomeIcon icon="sort" />
                    </th>
                    <th className="hand" onClick={this.sort('floatHugo')}>
                      <Translate contentKey="travisNg2App.fieldTestInfiniteScrollEntity.floatHugo">Float Hugo</Translate>{' '}
                      <FontAwesomeIcon icon="sort" />
                    </th>
                    <th className="hand" onClick={this.sort('floatRequiredHugo')}>
                      <Translate contentKey="travisNg2App.fieldTestInfiniteScrollEntity.floatRequiredHugo">Float Required Hugo</Translate>{' '}
                      <FontAwesomeIcon icon="sort" />
                    </th>
                    <th className="hand" onClick={this.sort('floatMinHugo')}>
                      <Translate contentKey="travisNg2App.fieldTestInfiniteScrollEntity.floatMinHugo">Float Min Hugo</Translate>{' '}
                      <FontAwesomeIcon icon="sort" />
                    </th>
                    <th className="hand" onClick={this.sort('floatMaxHugo')}>
                      <Translate contentKey="travisNg2App.fieldTestInfiniteScrollEntity.floatMaxHugo">Float Max Hugo</Translate>{' '}
                      <FontAwesomeIcon icon="sort" />
                    </th>
                    <th className="hand" onClick={this.sort('doubleRequiredHugo')}>
                      <Translate contentKey="travisNg2App.fieldTestInfiniteScrollEntity.doubleRequiredHugo">Double Required Hugo</Translate>{' '}
                      <FontAwesomeIcon icon="sort" />
                    </th>
                    <th className="hand" onClick={this.sort('doubleMinHugo')}>
                      <Translate contentKey="travisNg2App.fieldTestInfiniteScrollEntity.doubleMinHugo">Double Min Hugo</Translate>{' '}
                      <FontAwesomeIcon icon="sort" />
                    </th>
                    <th className="hand" onClick={this.sort('doubleMaxHugo')}>
                      <Translate contentKey="travisNg2App.fieldTestInfiniteScrollEntity.doubleMaxHugo">Double Max Hugo</Translate>{' '}
                      <FontAwesomeIcon icon="sort" />
                    </th>
                    <th className="hand" onClick={this.sort('bigDecimalRequiredHugo')}>
                      <Translate contentKey="travisNg2App.fieldTestInfiniteScrollEntity.bigDecimalRequiredHugo">
                        Big Decimal Required Hugo
                      </Translate>{' '}
                      <FontAwesomeIcon icon="sort" />
                    </th>
                    <th className="hand" onClick={this.sort('bigDecimalMinHugo')}>
                      <Translate contentKey="travisNg2App.fieldTestInfiniteScrollEntity.bigDecimalMinHugo">Big Decimal Min Hugo</Translate>{' '}
                      <FontAwesomeIcon icon="sort" />
                    </th>
                    <th className="hand" onClick={this.sort('bigDecimalMaxHugo')}>
                      <Translate contentKey="travisNg2App.fieldTestInfiniteScrollEntity.bigDecimalMaxHugo">Big Decimal Max Hugo</Translate>{' '}
                      <FontAwesomeIcon icon="sort" />
                    </th>
                    <th className="hand" onClick={this.sort('localDateHugo')}>
                      <Translate contentKey="travisNg2App.fieldTestInfiniteScrollEntity.localDateHugo">Local Date Hugo</Translate>{' '}
                      <FontAwesomeIcon icon="sort" />
                    </th>
                    <th className="hand" onClick={this.sort('localDateRequiredHugo')}>
                      <Translate contentKey="travisNg2App.fieldTestInfiniteScrollEntity.localDateRequiredHugo">
                        Local Date Required Hugo
                      </Translate>{' '}
                      <FontAwesomeIcon icon="sort" />
                    </th>
                    <th className="hand" onClick={this.sort('instantHugo')}>
                      <Translate contentKey="travisNg2App.fieldTestInfiniteScrollEntity.instantHugo">Instant Hugo</Translate>{' '}
                      <FontAwesomeIcon icon="sort" />
                    </th>
                    <th className="hand" onClick={this.sort('instanteRequiredHugo')}>
                      <Translate contentKey="travisNg2App.fieldTestInfiniteScrollEntity.instanteRequiredHugo">
                        Instante Required Hugo
                      </Translate>{' '}
                      <FontAwesomeIcon icon="sort" />
                    </th>
                    <th className="hand" onClick={this.sort('zonedDateTimeHugo')}>
                      <Translate contentKey="travisNg2App.fieldTestInfiniteScrollEntity.zonedDateTimeHugo">Zoned Date Time Hugo</Translate>{' '}
                      <FontAwesomeIcon icon="sort" />
                    </th>
                    <th className="hand" onClick={this.sort('zonedDateTimeRequiredHugo')}>
                      <Translate contentKey="travisNg2App.fieldTestInfiniteScrollEntity.zonedDateTimeRequiredHugo">
                        Zoned Date Time Required Hugo
                      </Translate>{' '}
                      <FontAwesomeIcon icon="sort" />
                    </th>
                    <th className="hand" onClick={this.sort('durationHugo')}>
                      <Translate contentKey="travisNg2App.fieldTestInfiniteScrollEntity.durationHugo">Duration Hugo</Translate>{' '}
                      <FontAwesomeIcon icon="sort" />
                    </th>
                    <th className="hand" onClick={this.sort('durationRequiredHugo')}>
                      <Translate contentKey="travisNg2App.fieldTestInfiniteScrollEntity.durationRequiredHugo">
                        Duration Required Hugo
                      </Translate>{' '}
                      <FontAwesomeIcon icon="sort" />
                    </th>
                    <th className="hand" onClick={this.sort('booleanHugo')}>
                      <Translate contentKey="travisNg2App.fieldTestInfiniteScrollEntity.booleanHugo">Boolean Hugo</Translate>{' '}
                      <FontAwesomeIcon icon="sort" />
                    </th>
                    <th className="hand" onClick={this.sort('booleanRequiredHugo')}>
                      <Translate contentKey="travisNg2App.fieldTestInfiniteScrollEntity.booleanRequiredHugo">
                        Boolean Required Hugo
                      </Translate>{' '}
                      <FontAwesomeIcon icon="sort" />
                    </th>
                    <th className="hand" onClick={this.sort('enumHugo')}>
                      <Translate contentKey="travisNg2App.fieldTestInfiniteScrollEntity.enumHugo">Enum Hugo</Translate>{' '}
                      <FontAwesomeIcon icon="sort" />
                    </th>
                    <th className="hand" onClick={this.sort('enumRequiredHugo')}>
                      <Translate contentKey="travisNg2App.fieldTestInfiniteScrollEntity.enumRequiredHugo">Enum Required Hugo</Translate>{' '}
                      <FontAwesomeIcon icon="sort" />
                    </th>
                    <th className="hand" onClick={this.sort('uuidHugo')}>
                      <Translate contentKey="travisNg2App.fieldTestInfiniteScrollEntity.uuidHugo">Uuid Hugo</Translate>{' '}
                      <FontAwesomeIcon icon="sort" />
                    </th>
                    <th className="hand" onClick={this.sort('uuidRequiredHugo')}>
                      <Translate contentKey="travisNg2App.fieldTestInfiniteScrollEntity.uuidRequiredHugo">Uuid Required Hugo</Translate>{' '}
                      <FontAwesomeIcon icon="sort" />
                    </th>
                    <th className="hand" onClick={this.sort('byteImageHugo')}>
                      <Translate contentKey="travisNg2App.fieldTestInfiniteScrollEntity.byteImageHugo">Byte Image Hugo</Translate>{' '}
                      <FontAwesomeIcon icon="sort" />
                    </th>
                    <th className="hand" onClick={this.sort('byteImageRequiredHugo')}>
                      <Translate contentKey="travisNg2App.fieldTestInfiniteScrollEntity.byteImageRequiredHugo">
                        Byte Image Required Hugo
                      </Translate>{' '}
                      <FontAwesomeIcon icon="sort" />
                    </th>
                    <th className="hand" onClick={this.sort('byteImageMinbytesHugo')}>
                      <Translate contentKey="travisNg2App.fieldTestInfiniteScrollEntity.byteImageMinbytesHugo">
                        Byte Image Minbytes Hugo
                      </Translate>{' '}
                      <FontAwesomeIcon icon="sort" />
                    </th>
                    <th className="hand" onClick={this.sort('byteImageMaxbytesHugo')}>
                      <Translate contentKey="travisNg2App.fieldTestInfiniteScrollEntity.byteImageMaxbytesHugo">
                        Byte Image Maxbytes Hugo
                      </Translate>{' '}
                      <FontAwesomeIcon icon="sort" />
                    </th>
                    <th className="hand" onClick={this.sort('byteAnyHugo')}>
                      <Translate contentKey="travisNg2App.fieldTestInfiniteScrollEntity.byteAnyHugo">Byte Any Hugo</Translate>{' '}
                      <FontAwesomeIcon icon="sort" />
                    </th>
                    <th className="hand" onClick={this.sort('byteAnyRequiredHugo')}>
                      <Translate contentKey="travisNg2App.fieldTestInfiniteScrollEntity.byteAnyRequiredHugo">
                        Byte Any Required Hugo
                      </Translate>{' '}
                      <FontAwesomeIcon icon="sort" />
                    </th>
                    <th className="hand" onClick={this.sort('byteAnyMinbytesHugo')}>
                      <Translate contentKey="travisNg2App.fieldTestInfiniteScrollEntity.byteAnyMinbytesHugo">
                        Byte Any Minbytes Hugo
                      </Translate>{' '}
                      <FontAwesomeIcon icon="sort" />
                    </th>
                    <th className="hand" onClick={this.sort('byteAnyMaxbytesHugo')}>
                      <Translate contentKey="travisNg2App.fieldTestInfiniteScrollEntity.byteAnyMaxbytesHugo">
                        Byte Any Maxbytes Hugo
                      </Translate>{' '}
                      <FontAwesomeIcon icon="sort" />
                    </th>
                    <th className="hand" onClick={this.sort('byteTextHugo')}>
                      <Translate contentKey="travisNg2App.fieldTestInfiniteScrollEntity.byteTextHugo">Byte Text Hugo</Translate>{' '}
                      <FontAwesomeIcon icon="sort" />
                    </th>
                    <th className="hand" onClick={this.sort('byteTextRequiredHugo')}>
                      <Translate contentKey="travisNg2App.fieldTestInfiniteScrollEntity.byteTextRequiredHugo">
                        Byte Text Required Hugo
                      </Translate>{' '}
                      <FontAwesomeIcon icon="sort" />
                    </th>
                    <th />
                  </tr>
                </thead>
                <tbody>
                  {fieldTestInfiniteScrollEntityList.map((fieldTestInfiniteScrollEntity, i) => (
                    <tr key={`entity-${i}`}>
                      <td>
                        <Button tag={Link} to={`${match.url}/${fieldTestInfiniteScrollEntity.id}`} color="link" size="sm">
                          {fieldTestInfiniteScrollEntity.id}
                        </Button>
                      </td>
                      <td>{fieldTestInfiniteScrollEntity.stringHugo}</td>
                      <td>{fieldTestInfiniteScrollEntity.stringRequiredHugo}</td>
                      <td>{fieldTestInfiniteScrollEntity.stringMinlengthHugo}</td>
                      <td>{fieldTestInfiniteScrollEntity.stringMaxlengthHugo}</td>
                      <td>{fieldTestInfiniteScrollEntity.stringPatternHugo}</td>
                      <td>{fieldTestInfiniteScrollEntity.integerHugo}</td>
                      <td>{fieldTestInfiniteScrollEntity.integerRequiredHugo}</td>
                      <td>{fieldTestInfiniteScrollEntity.integerMinHugo}</td>
                      <td>{fieldTestInfiniteScrollEntity.integerMaxHugo}</td>
                      <td>{fieldTestInfiniteScrollEntity.longHugo}</td>
                      <td>{fieldTestInfiniteScrollEntity.longRequiredHugo}</td>
                      <td>{fieldTestInfiniteScrollEntity.longMinHugo}</td>
                      <td>{fieldTestInfiniteScrollEntity.longMaxHugo}</td>
                      <td>{fieldTestInfiniteScrollEntity.floatHugo}</td>
                      <td>{fieldTestInfiniteScrollEntity.floatRequiredHugo}</td>
                      <td>{fieldTestInfiniteScrollEntity.floatMinHugo}</td>
                      <td>{fieldTestInfiniteScrollEntity.floatMaxHugo}</td>
                      <td>{fieldTestInfiniteScrollEntity.doubleRequiredHugo}</td>
                      <td>{fieldTestInfiniteScrollEntity.doubleMinHugo}</td>
                      <td>{fieldTestInfiniteScrollEntity.doubleMaxHugo}</td>
                      <td>{fieldTestInfiniteScrollEntity.bigDecimalRequiredHugo}</td>
                      <td>{fieldTestInfiniteScrollEntity.bigDecimalMinHugo}</td>
                      <td>{fieldTestInfiniteScrollEntity.bigDecimalMaxHugo}</td>
                      <td>
                        <TextFormat type="date" value={fieldTestInfiniteScrollEntity.localDateHugo} format={APP_LOCAL_DATE_FORMAT} />
                      </td>
                      <td>
                        <TextFormat
                          type="date"
                          value={fieldTestInfiniteScrollEntity.localDateRequiredHugo}
                          format={APP_LOCAL_DATE_FORMAT}
                        />
                      </td>
                      <td>
                        <TextFormat type="date" value={fieldTestInfiniteScrollEntity.instantHugo} format={APP_DATE_FORMAT} />
                      </td>
                      <td>
                        <TextFormat type="date" value={fieldTestInfiniteScrollEntity.instanteRequiredHugo} format={APP_DATE_FORMAT} />
                      </td>
                      <td>
                        <TextFormat type="date" value={fieldTestInfiniteScrollEntity.zonedDateTimeHugo} format={APP_DATE_FORMAT} />
                      </td>
                      <td>
                        <TextFormat type="date" value={fieldTestInfiniteScrollEntity.zonedDateTimeRequiredHugo} format={APP_DATE_FORMAT} />
                      </td>
                      <td>{fieldTestInfiniteScrollEntity.durationHugo}</td>
                      <td>{fieldTestInfiniteScrollEntity.durationRequiredHugo}</td>
                      <td>{fieldTestInfiniteScrollEntity.booleanHugo ? 'true' : 'false'}</td>
                      <td>{fieldTestInfiniteScrollEntity.booleanRequiredHugo ? 'true' : 'false'}</td>
                      <td>
                        <Translate contentKey={`travisNg2App.EnumFieldClass.${fieldTestInfiniteScrollEntity.enumHugo}`} />
                      </td>
                      <td>
                        <Translate contentKey={`travisNg2App.EnumRequiredFieldClass.${fieldTestInfiniteScrollEntity.enumRequiredHugo}`} />
                      </td>
                      <td>{fieldTestInfiniteScrollEntity.uuidHugo}</td>
                      <td>{fieldTestInfiniteScrollEntity.uuidRequiredHugo}</td>
                      <td>
                        {fieldTestInfiniteScrollEntity.byteImageHugo ? (
                          <div>
                            <a
                              onClick={openFile(
                                fieldTestInfiniteScrollEntity.byteImageHugoContentType,
                                fieldTestInfiniteScrollEntity.byteImageHugo
                              )}
                            >
                              <img
                                src={`data:${fieldTestInfiniteScrollEntity.byteImageHugoContentType};base64,${
                                  fieldTestInfiniteScrollEntity.byteImageHugo
                                }`}
                                style={{ maxHeight: '30px' }}
                              />
                              &nbsp;
                            </a>
                            <span>
                              {fieldTestInfiniteScrollEntity.byteImageHugoContentType},{' '}
                              {byteSize(fieldTestInfiniteScrollEntity.byteImageHugo)}
                            </span>
                          </div>
                        ) : null}
                      </td>
                      <td>
                        {fieldTestInfiniteScrollEntity.byteImageRequiredHugo ? (
                          <div>
                            <a
                              onClick={openFile(
                                fieldTestInfiniteScrollEntity.byteImageRequiredHugoContentType,
                                fieldTestInfiniteScrollEntity.byteImageRequiredHugo
                              )}
                            >
                              <img
                                src={`data:${fieldTestInfiniteScrollEntity.byteImageRequiredHugoContentType};base64,${
                                  fieldTestInfiniteScrollEntity.byteImageRequiredHugo
                                }`}
                                style={{ maxHeight: '30px' }}
                              />
                              &nbsp;
                            </a>
                            <span>
                              {fieldTestInfiniteScrollEntity.byteImageRequiredHugoContentType},{' '}
                              {byteSize(fieldTestInfiniteScrollEntity.byteImageRequiredHugo)}
                            </span>
                          </div>
                        ) : null}
                      </td>
                      <td>
                        {fieldTestInfiniteScrollEntity.byteImageMinbytesHugo ? (
                          <div>
                            <a
                              onClick={openFile(
                                fieldTestInfiniteScrollEntity.byteImageMinbytesHugoContentType,
                                fieldTestInfiniteScrollEntity.byteImageMinbytesHugo
                              )}
                            >
                              <img
                                src={`data:${fieldTestInfiniteScrollEntity.byteImageMinbytesHugoContentType};base64,${
                                  fieldTestInfiniteScrollEntity.byteImageMinbytesHugo
                                }`}
                                style={{ maxHeight: '30px' }}
                              />
                              &nbsp;
                            </a>
                            <span>
                              {fieldTestInfiniteScrollEntity.byteImageMinbytesHugoContentType},{' '}
                              {byteSize(fieldTestInfiniteScrollEntity.byteImageMinbytesHugo)}
                            </span>
                          </div>
                        ) : null}
                      </td>
                      <td>
                        {fieldTestInfiniteScrollEntity.byteImageMaxbytesHugo ? (
                          <div>
                            <a
                              onClick={openFile(
                                fieldTestInfiniteScrollEntity.byteImageMaxbytesHugoContentType,
                                fieldTestInfiniteScrollEntity.byteImageMaxbytesHugo
                              )}
                            >
                              <img
                                src={`data:${fieldTestInfiniteScrollEntity.byteImageMaxbytesHugoContentType};base64,${
                                  fieldTestInfiniteScrollEntity.byteImageMaxbytesHugo
                                }`}
                                style={{ maxHeight: '30px' }}
                              />
                              &nbsp;
                            </a>
                            <span>
                              {fieldTestInfiniteScrollEntity.byteImageMaxbytesHugoContentType},{' '}
                              {byteSize(fieldTestInfiniteScrollEntity.byteImageMaxbytesHugo)}
                            </span>
                          </div>
                        ) : null}
                      </td>
                      <td>
                        {fieldTestInfiniteScrollEntity.byteAnyHugo ? (
                          <div>
                            <a
                              onClick={openFile(
                                fieldTestInfiniteScrollEntity.byteAnyHugoContentType,
                                fieldTestInfiniteScrollEntity.byteAnyHugo
                              )}
                            >
                              <Translate contentKey="entity.action.open">Open</Translate>
                              &nbsp;
                            </a>
                            <span>
                              {fieldTestInfiniteScrollEntity.byteAnyHugoContentType}, {byteSize(fieldTestInfiniteScrollEntity.byteAnyHugo)}
                            </span>
                          </div>
                        ) : null}
                      </td>
                      <td>
                        {fieldTestInfiniteScrollEntity.byteAnyRequiredHugo ? (
                          <div>
                            <a
                              onClick={openFile(
                                fieldTestInfiniteScrollEntity.byteAnyRequiredHugoContentType,
                                fieldTestInfiniteScrollEntity.byteAnyRequiredHugo
                              )}
                            >
                              <Translate contentKey="entity.action.open">Open</Translate>
                              &nbsp;
                            </a>
                            <span>
                              {fieldTestInfiniteScrollEntity.byteAnyRequiredHugoContentType},{' '}
                              {byteSize(fieldTestInfiniteScrollEntity.byteAnyRequiredHugo)}
                            </span>
                          </div>
                        ) : null}
                      </td>
                      <td>
                        {fieldTestInfiniteScrollEntity.byteAnyMinbytesHugo ? (
                          <div>
                            <a
                              onClick={openFile(
                                fieldTestInfiniteScrollEntity.byteAnyMinbytesHugoContentType,
                                fieldTestInfiniteScrollEntity.byteAnyMinbytesHugo
                              )}
                            >
                              <Translate contentKey="entity.action.open">Open</Translate>
                              &nbsp;
                            </a>
                            <span>
                              {fieldTestInfiniteScrollEntity.byteAnyMinbytesHugoContentType},{' '}
                              {byteSize(fieldTestInfiniteScrollEntity.byteAnyMinbytesHugo)}
                            </span>
                          </div>
                        ) : null}
                      </td>
                      <td>
                        {fieldTestInfiniteScrollEntity.byteAnyMaxbytesHugo ? (
                          <div>
                            <a
                              onClick={openFile(
                                fieldTestInfiniteScrollEntity.byteAnyMaxbytesHugoContentType,
                                fieldTestInfiniteScrollEntity.byteAnyMaxbytesHugo
                              )}
                            >
                              <Translate contentKey="entity.action.open">Open</Translate>
                              &nbsp;
                            </a>
                            <span>
                              {fieldTestInfiniteScrollEntity.byteAnyMaxbytesHugoContentType},{' '}
                              {byteSize(fieldTestInfiniteScrollEntity.byteAnyMaxbytesHugo)}
                            </span>
                          </div>
                        ) : null}
                      </td>
                      <td>{fieldTestInfiniteScrollEntity.byteTextHugo}</td>
                      <td>{fieldTestInfiniteScrollEntity.byteTextRequiredHugo}</td>
                      <td className="text-right">
                        <div className="btn-group flex-btn-group-container">
                          <Button tag={Link} to={`${match.url}/${fieldTestInfiniteScrollEntity.id}`} color="info" size="sm">
                            <FontAwesomeIcon icon="eye" />{' '}
                            <span className="d-none d-md-inline">
                              <Translate contentKey="entity.action.view">View</Translate>
                            </span>
                          </Button>
                          <Button tag={Link} to={`${match.url}/${fieldTestInfiniteScrollEntity.id}/edit`} color="primary" size="sm">
                            <FontAwesomeIcon icon="pencil-alt" />{' '}
                            <span className="d-none d-md-inline">
                              <Translate contentKey="entity.action.edit">Edit</Translate>
                            </span>
                          </Button>
                          <Button tag={Link} to={`${match.url}/${fieldTestInfiniteScrollEntity.id}/delete`} color="danger" size="sm">
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
                <Translate contentKey="travisNg2App.fieldTestInfiniteScrollEntity.home.notFound">
                  No Field Test Infinite Scroll Entities found
                </Translate>
              </div>
            )}
          </InfiniteScroll>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ fieldTestInfiniteScrollEntity }: IRootState) => ({
  fieldTestInfiniteScrollEntityList: fieldTestInfiniteScrollEntity.entities,
  totalItems: fieldTestInfiniteScrollEntity.totalItems,
  links: fieldTestInfiniteScrollEntity.links,
  entity: fieldTestInfiniteScrollEntity.entity,
  updateSuccess: fieldTestInfiniteScrollEntity.updateSuccess
});

const mapDispatchToProps = {
  getEntities,
  reset
};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FieldTestInfiniteScrollEntity);
