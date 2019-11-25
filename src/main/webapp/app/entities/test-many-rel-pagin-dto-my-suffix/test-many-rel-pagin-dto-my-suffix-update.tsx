import React from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col, Label } from 'reactstrap';
import { AvFeedback, AvForm, AvGroup, AvInput } from 'availity-reactstrap-validation';
import { Translate, translate, ICrudGetAction, ICrudGetAllAction, ICrudPutAction } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IRootState } from 'app/shared/reducers';

import { ITestMapstruct } from 'app/shared/model/test-mapstruct.model';
import { getEntities as getTestMapstructs } from 'app/entities/test-mapstruct/test-mapstruct.reducer';
import { getEntity, updateEntity, createEntity, reset } from './test-many-rel-pagin-dto-my-suffix.reducer';
import { ITestManyRelPaginDTOMySuffix } from 'app/shared/model/test-many-rel-pagin-dto-my-suffix.model';
import { convertDateTimeFromServer, convertDateTimeToServer } from 'app/shared/util/date-utils';
import { mapIdList } from 'app/shared/util/entity-utils';

export interface ITestManyRelPaginDTOMySuffixUpdateProps extends StateProps, DispatchProps, RouteComponentProps<{ id: string }> {}

export interface ITestManyRelPaginDTOMySuffixUpdateState {
  isNew: boolean;
  idstestMapstruct: any[];
}

export class TestManyRelPaginDTOMySuffixUpdate extends React.Component<
  ITestManyRelPaginDTOMySuffixUpdateProps,
  ITestManyRelPaginDTOMySuffixUpdateState
> {
  constructor(props) {
    super(props);
    this.state = {
      idstestMapstruct: [],
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

    this.props.getTestMapstructs();
  }

  saveEntity = (event, errors, values) => {
    if (errors.length === 0) {
      const { testManyRelPaginDTOEntity } = this.props;
      const entity = {
        ...testManyRelPaginDTOEntity,
        ...values,
        testMapstructs: mapIdList(values.testMapstructs)
      };

      if (this.state.isNew) {
        this.props.createEntity(entity);
      } else {
        this.props.updateEntity(entity);
      }
    }
  };

  handleClose = () => {
    this.props.history.push('/test-many-rel-pagin-dto-my-suffix');
  };

  render() {
    const { testManyRelPaginDTOEntity, testMapstructs, loading, updating } = this.props;
    const { isNew } = this.state;

    return (
      <div>
        <Row className="justify-content-center">
          <Col md="8">
            <h2 id="travisNg2App.testManyRelPaginDTO.home.createOrEditLabel">
              <Translate contentKey="travisNg2App.testManyRelPaginDTO.home.createOrEditLabel">
                Create or edit a TestManyRelPaginDTO
              </Translate>
            </h2>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col md="8">
            {loading ? (
              <p>Loading...</p>
            ) : (
              <AvForm model={isNew ? {} : testManyRelPaginDTOEntity} onSubmit={this.saveEntity}>
                {!isNew ? (
                  <AvGroup>
                    <Label for="test-many-rel-pagin-dto-my-suffix-id">
                      <Translate contentKey="global.field.id">ID</Translate>
                    </Label>
                    <AvInput id="test-many-rel-pagin-dto-my-suffix-id" type="text" className="form-control" name="id" required readOnly />
                  </AvGroup>
                ) : null}
                <AvGroup>
                  <Label for="test-many-rel-pagin-dto-my-suffix-testMapstruct">
                    <Translate contentKey="travisNg2App.testManyRelPaginDTO.testMapstruct">Test Mapstruct</Translate>
                  </Label>
                  <AvInput
                    id="test-many-rel-pagin-dto-my-suffix-testMapstruct"
                    type="select"
                    multiple
                    className="form-control"
                    name="testMapstructs"
                    value={testManyRelPaginDTOEntity.testMapstructs && testManyRelPaginDTOEntity.testMapstructs.map(e => e.id)}
                  >
                    <option value="" key="0" />
                    {testMapstructs
                      ? testMapstructs.map(otherEntity => (
                          <option value={otherEntity.id} key={otherEntity.id}>
                            {otherEntity.id}
                          </option>
                        ))
                      : null}
                  </AvInput>
                </AvGroup>
                <Button tag={Link} id="cancel-save" to="/test-many-rel-pagin-dto-my-suffix" replace color="info">
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
  testMapstructs: storeState.testMapstruct.entities,
  testManyRelPaginDTOEntity: storeState.testManyRelPaginDTO.entity,
  loading: storeState.testManyRelPaginDTO.loading,
  updating: storeState.testManyRelPaginDTO.updating,
  updateSuccess: storeState.testManyRelPaginDTO.updateSuccess
});

const mapDispatchToProps = {
  getTestMapstructs,
  getEntity,
  updateEntity,
  createEntity,
  reset
};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TestManyRelPaginDTOMySuffixUpdate);
