import axios from 'axios';
import { ICrudGetAction, ICrudGetAllAction, ICrudPutAction, ICrudDeleteAction } from 'react-jhipster';

import { cleanEntity } from 'app/shared/util/entity-utils';
import { REQUEST, SUCCESS, FAILURE } from 'app/shared/reducers/action-type.util';

import { ITestPagination, defaultValue } from 'app/shared/model/test-pagination.model';

export const ACTION_TYPES = {
  FETCH_TESTPAGINATION_LIST: 'testPagination/FETCH_TESTPAGINATION_LIST',
  FETCH_TESTPAGINATION: 'testPagination/FETCH_TESTPAGINATION',
  CREATE_TESTPAGINATION: 'testPagination/CREATE_TESTPAGINATION',
  UPDATE_TESTPAGINATION: 'testPagination/UPDATE_TESTPAGINATION',
  DELETE_TESTPAGINATION: 'testPagination/DELETE_TESTPAGINATION',
  RESET: 'testPagination/RESET'
};

const initialState = {
  loading: false,
  errorMessage: null,
  entities: [] as ReadonlyArray<ITestPagination>,
  entity: defaultValue,
  updating: false,
  totalItems: 0,
  updateSuccess: false
};

export type TestPaginationState = Readonly<typeof initialState>;

// Reducer

export default (state: TestPaginationState = initialState, action): TestPaginationState => {
  switch (action.type) {
    case REQUEST(ACTION_TYPES.FETCH_TESTPAGINATION_LIST):
    case REQUEST(ACTION_TYPES.FETCH_TESTPAGINATION):
      return {
        ...state,
        errorMessage: null,
        updateSuccess: false,
        loading: true
      };
    case REQUEST(ACTION_TYPES.CREATE_TESTPAGINATION):
    case REQUEST(ACTION_TYPES.UPDATE_TESTPAGINATION):
    case REQUEST(ACTION_TYPES.DELETE_TESTPAGINATION):
      return {
        ...state,
        errorMessage: null,
        updateSuccess: false,
        updating: true
      };
    case FAILURE(ACTION_TYPES.FETCH_TESTPAGINATION_LIST):
    case FAILURE(ACTION_TYPES.FETCH_TESTPAGINATION):
    case FAILURE(ACTION_TYPES.CREATE_TESTPAGINATION):
    case FAILURE(ACTION_TYPES.UPDATE_TESTPAGINATION):
    case FAILURE(ACTION_TYPES.DELETE_TESTPAGINATION):
      return {
        ...state,
        loading: false,
        updating: false,
        updateSuccess: false,
        errorMessage: action.payload
      };
    case SUCCESS(ACTION_TYPES.FETCH_TESTPAGINATION_LIST):
      return {
        ...state,
        loading: false,
        entities: action.payload.data,
        totalItems: parseInt(action.payload.headers['x-total-count'], 10)
      };
    case SUCCESS(ACTION_TYPES.FETCH_TESTPAGINATION):
      return {
        ...state,
        loading: false,
        entity: action.payload.data
      };
    case SUCCESS(ACTION_TYPES.CREATE_TESTPAGINATION):
    case SUCCESS(ACTION_TYPES.UPDATE_TESTPAGINATION):
      return {
        ...state,
        updating: false,
        updateSuccess: true,
        entity: action.payload.data
      };
    case SUCCESS(ACTION_TYPES.DELETE_TESTPAGINATION):
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

const apiUrl = 'api/test-paginations';

// Actions

export const getEntities: ICrudGetAllAction<ITestPagination> = (page, size, sort) => {
  const requestUrl = `${apiUrl}${sort ? `?page=${page}&size=${size}&sort=${sort}` : ''}`;
  return {
    type: ACTION_TYPES.FETCH_TESTPAGINATION_LIST,
    payload: axios.get<ITestPagination>(`${requestUrl}${sort ? '&' : '?'}cacheBuster=${new Date().getTime()}`)
  };
};

export const getEntity: ICrudGetAction<ITestPagination> = id => {
  const requestUrl = `${apiUrl}/${id}`;
  return {
    type: ACTION_TYPES.FETCH_TESTPAGINATION,
    payload: axios.get<ITestPagination>(requestUrl)
  };
};

export const createEntity: ICrudPutAction<ITestPagination> = entity => async dispatch => {
  const result = await dispatch({
    type: ACTION_TYPES.CREATE_TESTPAGINATION,
    payload: axios.post(apiUrl, cleanEntity(entity))
  });
  dispatch(getEntities());
  return result;
};

export const updateEntity: ICrudPutAction<ITestPagination> = entity => async dispatch => {
  const result = await dispatch({
    type: ACTION_TYPES.UPDATE_TESTPAGINATION,
    payload: axios.put(apiUrl, cleanEntity(entity))
  });
  dispatch(getEntities());
  return result;
};

export const deleteEntity: ICrudDeleteAction<ITestPagination> = id => async dispatch => {
  const requestUrl = `${apiUrl}/${id}`;
  const result = await dispatch({
    type: ACTION_TYPES.DELETE_TESTPAGINATION,
    payload: axios.delete(requestUrl)
  });
  dispatch(getEntities());
  return result;
};

export const reset = () => ({
  type: ACTION_TYPES.RESET
});
