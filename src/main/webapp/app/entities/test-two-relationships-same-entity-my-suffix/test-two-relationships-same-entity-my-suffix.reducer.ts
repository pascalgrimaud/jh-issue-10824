import axios from 'axios';
import { ICrudGetAction, ICrudGetAllAction, ICrudPutAction, ICrudDeleteAction } from 'react-jhipster';

import { cleanEntity } from 'app/shared/util/entity-utils';
import { REQUEST, SUCCESS, FAILURE } from 'app/shared/reducers/action-type.util';

import { ITestTwoRelationshipsSameEntityMySuffix, defaultValue } from 'app/shared/model/test-two-relationships-same-entity-my-suffix.model';

export const ACTION_TYPES = {
  FETCH_TESTTWORELATIONSHIPSSAMEENTITY_LIST: 'testTwoRelationshipsSameEntity/FETCH_TESTTWORELATIONSHIPSSAMEENTITY_LIST',
  FETCH_TESTTWORELATIONSHIPSSAMEENTITY: 'testTwoRelationshipsSameEntity/FETCH_TESTTWORELATIONSHIPSSAMEENTITY',
  CREATE_TESTTWORELATIONSHIPSSAMEENTITY: 'testTwoRelationshipsSameEntity/CREATE_TESTTWORELATIONSHIPSSAMEENTITY',
  UPDATE_TESTTWORELATIONSHIPSSAMEENTITY: 'testTwoRelationshipsSameEntity/UPDATE_TESTTWORELATIONSHIPSSAMEENTITY',
  DELETE_TESTTWORELATIONSHIPSSAMEENTITY: 'testTwoRelationshipsSameEntity/DELETE_TESTTWORELATIONSHIPSSAMEENTITY',
  RESET: 'testTwoRelationshipsSameEntity/RESET'
};

const initialState = {
  loading: false,
  errorMessage: null,
  entities: [] as ReadonlyArray<ITestTwoRelationshipsSameEntityMySuffix>,
  entity: defaultValue,
  updating: false,
  updateSuccess: false
};

export type TestTwoRelationshipsSameEntityMySuffixState = Readonly<typeof initialState>;

// Reducer

export default (state: TestTwoRelationshipsSameEntityMySuffixState = initialState, action): TestTwoRelationshipsSameEntityMySuffixState => {
  switch (action.type) {
    case REQUEST(ACTION_TYPES.FETCH_TESTTWORELATIONSHIPSSAMEENTITY_LIST):
    case REQUEST(ACTION_TYPES.FETCH_TESTTWORELATIONSHIPSSAMEENTITY):
      return {
        ...state,
        errorMessage: null,
        updateSuccess: false,
        loading: true
      };
    case REQUEST(ACTION_TYPES.CREATE_TESTTWORELATIONSHIPSSAMEENTITY):
    case REQUEST(ACTION_TYPES.UPDATE_TESTTWORELATIONSHIPSSAMEENTITY):
    case REQUEST(ACTION_TYPES.DELETE_TESTTWORELATIONSHIPSSAMEENTITY):
      return {
        ...state,
        errorMessage: null,
        updateSuccess: false,
        updating: true
      };
    case FAILURE(ACTION_TYPES.FETCH_TESTTWORELATIONSHIPSSAMEENTITY_LIST):
    case FAILURE(ACTION_TYPES.FETCH_TESTTWORELATIONSHIPSSAMEENTITY):
    case FAILURE(ACTION_TYPES.CREATE_TESTTWORELATIONSHIPSSAMEENTITY):
    case FAILURE(ACTION_TYPES.UPDATE_TESTTWORELATIONSHIPSSAMEENTITY):
    case FAILURE(ACTION_TYPES.DELETE_TESTTWORELATIONSHIPSSAMEENTITY):
      return {
        ...state,
        loading: false,
        updating: false,
        updateSuccess: false,
        errorMessage: action.payload
      };
    case SUCCESS(ACTION_TYPES.FETCH_TESTTWORELATIONSHIPSSAMEENTITY_LIST):
      return {
        ...state,
        loading: false,
        entities: action.payload.data
      };
    case SUCCESS(ACTION_TYPES.FETCH_TESTTWORELATIONSHIPSSAMEENTITY):
      return {
        ...state,
        loading: false,
        entity: action.payload.data
      };
    case SUCCESS(ACTION_TYPES.CREATE_TESTTWORELATIONSHIPSSAMEENTITY):
    case SUCCESS(ACTION_TYPES.UPDATE_TESTTWORELATIONSHIPSSAMEENTITY):
      return {
        ...state,
        updating: false,
        updateSuccess: true,
        entity: action.payload.data
      };
    case SUCCESS(ACTION_TYPES.DELETE_TESTTWORELATIONSHIPSSAMEENTITY):
      return {
        ...state,
        updating: false,
        updateSuccess: true,
        entity: {}
      };
    case ACTION_TYPES.RESET:
      return {
        ...initialState
      };
    default:
      return state;
  }
};

const apiUrl = 'api/test-two-relationships-same-entities';

// Actions

export const getEntities: ICrudGetAllAction<ITestTwoRelationshipsSameEntityMySuffix> = (page, size, sort) => ({
  type: ACTION_TYPES.FETCH_TESTTWORELATIONSHIPSSAMEENTITY_LIST,
  payload: axios.get<ITestTwoRelationshipsSameEntityMySuffix>(`${apiUrl}?cacheBuster=${new Date().getTime()}`)
});

export const getEntity: ICrudGetAction<ITestTwoRelationshipsSameEntityMySuffix> = id => {
  const requestUrl = `${apiUrl}/${id}`;
  return {
    type: ACTION_TYPES.FETCH_TESTTWORELATIONSHIPSSAMEENTITY,
    payload: axios.get<ITestTwoRelationshipsSameEntityMySuffix>(requestUrl)
  };
};

export const createEntity: ICrudPutAction<ITestTwoRelationshipsSameEntityMySuffix> = entity => async dispatch => {
  const result = await dispatch({
    type: ACTION_TYPES.CREATE_TESTTWORELATIONSHIPSSAMEENTITY,
    payload: axios.post(apiUrl, cleanEntity(entity))
  });
  dispatch(getEntities());
  return result;
};

export const updateEntity: ICrudPutAction<ITestTwoRelationshipsSameEntityMySuffix> = entity => async dispatch => {
  const result = await dispatch({
    type: ACTION_TYPES.UPDATE_TESTTWORELATIONSHIPSSAMEENTITY,
    payload: axios.put(apiUrl, cleanEntity(entity))
  });
  dispatch(getEntities());
  return result;
};

export const deleteEntity: ICrudDeleteAction<ITestTwoRelationshipsSameEntityMySuffix> = id => async dispatch => {
  const requestUrl = `${apiUrl}/${id}`;
  const result = await dispatch({
    type: ACTION_TYPES.DELETE_TESTTWORELATIONSHIPSSAMEENTITY,
    payload: axios.delete(requestUrl)
  });
  dispatch(getEntities());
  return result;
};

export const reset = () => ({
  type: ACTION_TYPES.RESET
});
