import axios from 'axios';
import { ICrudGetAction, ICrudGetAllAction, ICrudPutAction, ICrudDeleteAction } from 'react-jhipster';

import { cleanEntity } from 'app/shared/util/entity-utils';
import { REQUEST, SUCCESS, FAILURE } from 'app/shared/reducers/action-type.util';

import { ITestCustomTableName, defaultValue } from 'app/shared/model/test-custom-table-name.model';

export const ACTION_TYPES = {
  FETCH_TESTCUSTOMTABLENAME_LIST: 'testCustomTableName/FETCH_TESTCUSTOMTABLENAME_LIST',
  FETCH_TESTCUSTOMTABLENAME: 'testCustomTableName/FETCH_TESTCUSTOMTABLENAME',
  CREATE_TESTCUSTOMTABLENAME: 'testCustomTableName/CREATE_TESTCUSTOMTABLENAME',
  UPDATE_TESTCUSTOMTABLENAME: 'testCustomTableName/UPDATE_TESTCUSTOMTABLENAME',
  DELETE_TESTCUSTOMTABLENAME: 'testCustomTableName/DELETE_TESTCUSTOMTABLENAME',
  RESET: 'testCustomTableName/RESET'
};

const initialState = {
  loading: false,
  errorMessage: null,
  entities: [] as ReadonlyArray<ITestCustomTableName>,
  entity: defaultValue,
  updating: false,
  updateSuccess: false
};

export type TestCustomTableNameState = Readonly<typeof initialState>;

// Reducer

export default (state: TestCustomTableNameState = initialState, action): TestCustomTableNameState => {
  switch (action.type) {
    case REQUEST(ACTION_TYPES.FETCH_TESTCUSTOMTABLENAME_LIST):
    case REQUEST(ACTION_TYPES.FETCH_TESTCUSTOMTABLENAME):
      return {
        ...state,
        errorMessage: null,
        updateSuccess: false,
        loading: true
      };
    case REQUEST(ACTION_TYPES.CREATE_TESTCUSTOMTABLENAME):
    case REQUEST(ACTION_TYPES.UPDATE_TESTCUSTOMTABLENAME):
    case REQUEST(ACTION_TYPES.DELETE_TESTCUSTOMTABLENAME):
      return {
        ...state,
        errorMessage: null,
        updateSuccess: false,
        updating: true
      };
    case FAILURE(ACTION_TYPES.FETCH_TESTCUSTOMTABLENAME_LIST):
    case FAILURE(ACTION_TYPES.FETCH_TESTCUSTOMTABLENAME):
    case FAILURE(ACTION_TYPES.CREATE_TESTCUSTOMTABLENAME):
    case FAILURE(ACTION_TYPES.UPDATE_TESTCUSTOMTABLENAME):
    case FAILURE(ACTION_TYPES.DELETE_TESTCUSTOMTABLENAME):
      return {
        ...state,
        loading: false,
        updating: false,
        updateSuccess: false,
        errorMessage: action.payload
      };
    case SUCCESS(ACTION_TYPES.FETCH_TESTCUSTOMTABLENAME_LIST):
      return {
        ...state,
        loading: false,
        entities: action.payload.data
      };
    case SUCCESS(ACTION_TYPES.FETCH_TESTCUSTOMTABLENAME):
      return {
        ...state,
        loading: false,
        entity: action.payload.data
      };
    case SUCCESS(ACTION_TYPES.CREATE_TESTCUSTOMTABLENAME):
    case SUCCESS(ACTION_TYPES.UPDATE_TESTCUSTOMTABLENAME):
      return {
        ...state,
        updating: false,
        updateSuccess: true,
        entity: action.payload.data
      };
    case SUCCESS(ACTION_TYPES.DELETE_TESTCUSTOMTABLENAME):
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

const apiUrl = 'api/test-custom-table-names';

// Actions

export const getEntities: ICrudGetAllAction<ITestCustomTableName> = (page, size, sort) => ({
  type: ACTION_TYPES.FETCH_TESTCUSTOMTABLENAME_LIST,
  payload: axios.get<ITestCustomTableName>(`${apiUrl}?cacheBuster=${new Date().getTime()}`)
});

export const getEntity: ICrudGetAction<ITestCustomTableName> = id => {
  const requestUrl = `${apiUrl}/${id}`;
  return {
    type: ACTION_TYPES.FETCH_TESTCUSTOMTABLENAME,
    payload: axios.get<ITestCustomTableName>(requestUrl)
  };
};

export const createEntity: ICrudPutAction<ITestCustomTableName> = entity => async dispatch => {
  const result = await dispatch({
    type: ACTION_TYPES.CREATE_TESTCUSTOMTABLENAME,
    payload: axios.post(apiUrl, cleanEntity(entity))
  });
  dispatch(getEntities());
  return result;
};

export const updateEntity: ICrudPutAction<ITestCustomTableName> = entity => async dispatch => {
  const result = await dispatch({
    type: ACTION_TYPES.UPDATE_TESTCUSTOMTABLENAME,
    payload: axios.put(apiUrl, cleanEntity(entity))
  });
  dispatch(getEntities());
  return result;
};

export const deleteEntity: ICrudDeleteAction<ITestCustomTableName> = id => async dispatch => {
  const requestUrl = `${apiUrl}/${id}`;
  const result = await dispatch({
    type: ACTION_TYPES.DELETE_TESTCUSTOMTABLENAME,
    payload: axios.delete(requestUrl)
  });
  dispatch(getEntities());
  return result;
};

export const reset = () => ({
  type: ACTION_TYPES.RESET
});
