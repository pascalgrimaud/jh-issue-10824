import axios from 'axios';
import { ICrudGetAction, ICrudGetAllAction, ICrudPutAction, ICrudDeleteAction } from 'react-jhipster';

import { cleanEntity } from 'app/shared/util/entity-utils';
import { REQUEST, SUCCESS, FAILURE } from 'app/shared/reducers/action-type.util';

import { ITestServiceClass, defaultValue } from 'app/shared/model/test-service-class.model';

export const ACTION_TYPES = {
  FETCH_TESTSERVICECLASS_LIST: 'testServiceClass/FETCH_TESTSERVICECLASS_LIST',
  FETCH_TESTSERVICECLASS: 'testServiceClass/FETCH_TESTSERVICECLASS',
  CREATE_TESTSERVICECLASS: 'testServiceClass/CREATE_TESTSERVICECLASS',
  UPDATE_TESTSERVICECLASS: 'testServiceClass/UPDATE_TESTSERVICECLASS',
  DELETE_TESTSERVICECLASS: 'testServiceClass/DELETE_TESTSERVICECLASS',
  RESET: 'testServiceClass/RESET'
};

const initialState = {
  loading: false,
  errorMessage: null,
  entities: [] as ReadonlyArray<ITestServiceClass>,
  entity: defaultValue,
  updating: false,
  updateSuccess: false
};

export type TestServiceClassState = Readonly<typeof initialState>;

// Reducer

export default (state: TestServiceClassState = initialState, action): TestServiceClassState => {
  switch (action.type) {
    case REQUEST(ACTION_TYPES.FETCH_TESTSERVICECLASS_LIST):
    case REQUEST(ACTION_TYPES.FETCH_TESTSERVICECLASS):
      return {
        ...state,
        errorMessage: null,
        updateSuccess: false,
        loading: true
      };
    case REQUEST(ACTION_TYPES.CREATE_TESTSERVICECLASS):
    case REQUEST(ACTION_TYPES.UPDATE_TESTSERVICECLASS):
    case REQUEST(ACTION_TYPES.DELETE_TESTSERVICECLASS):
      return {
        ...state,
        errorMessage: null,
        updateSuccess: false,
        updating: true
      };
    case FAILURE(ACTION_TYPES.FETCH_TESTSERVICECLASS_LIST):
    case FAILURE(ACTION_TYPES.FETCH_TESTSERVICECLASS):
    case FAILURE(ACTION_TYPES.CREATE_TESTSERVICECLASS):
    case FAILURE(ACTION_TYPES.UPDATE_TESTSERVICECLASS):
    case FAILURE(ACTION_TYPES.DELETE_TESTSERVICECLASS):
      return {
        ...state,
        loading: false,
        updating: false,
        updateSuccess: false,
        errorMessage: action.payload
      };
    case SUCCESS(ACTION_TYPES.FETCH_TESTSERVICECLASS_LIST):
      return {
        ...state,
        loading: false,
        entities: action.payload.data
      };
    case SUCCESS(ACTION_TYPES.FETCH_TESTSERVICECLASS):
      return {
        ...state,
        loading: false,
        entity: action.payload.data
      };
    case SUCCESS(ACTION_TYPES.CREATE_TESTSERVICECLASS):
    case SUCCESS(ACTION_TYPES.UPDATE_TESTSERVICECLASS):
      return {
        ...state,
        updating: false,
        updateSuccess: true,
        entity: action.payload.data
      };
    case SUCCESS(ACTION_TYPES.DELETE_TESTSERVICECLASS):
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

const apiUrl = 'api/test-service-classes';

// Actions

export const getEntities: ICrudGetAllAction<ITestServiceClass> = (page, size, sort) => ({
  type: ACTION_TYPES.FETCH_TESTSERVICECLASS_LIST,
  payload: axios.get<ITestServiceClass>(`${apiUrl}?cacheBuster=${new Date().getTime()}`)
});

export const getEntity: ICrudGetAction<ITestServiceClass> = id => {
  const requestUrl = `${apiUrl}/${id}`;
  return {
    type: ACTION_TYPES.FETCH_TESTSERVICECLASS,
    payload: axios.get<ITestServiceClass>(requestUrl)
  };
};

export const createEntity: ICrudPutAction<ITestServiceClass> = entity => async dispatch => {
  const result = await dispatch({
    type: ACTION_TYPES.CREATE_TESTSERVICECLASS,
    payload: axios.post(apiUrl, cleanEntity(entity))
  });
  dispatch(getEntities());
  return result;
};

export const updateEntity: ICrudPutAction<ITestServiceClass> = entity => async dispatch => {
  const result = await dispatch({
    type: ACTION_TYPES.UPDATE_TESTSERVICECLASS,
    payload: axios.put(apiUrl, cleanEntity(entity))
  });
  dispatch(getEntities());
  return result;
};

export const deleteEntity: ICrudDeleteAction<ITestServiceClass> = id => async dispatch => {
  const requestUrl = `${apiUrl}/${id}`;
  const result = await dispatch({
    type: ACTION_TYPES.DELETE_TESTSERVICECLASS,
    payload: axios.delete(requestUrl)
  });
  dispatch(getEntities());
  return result;
};

export const reset = () => ({
  type: ACTION_TYPES.RESET
});
