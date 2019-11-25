import axios from 'axios';
import { ICrudGetAction, ICrudGetAllAction, ICrudPutAction, ICrudDeleteAction } from 'react-jhipster';

import { cleanEntity } from 'app/shared/util/entity-utils';
import { REQUEST, SUCCESS, FAILURE } from 'app/shared/reducers/action-type.util';

import { ITestOneToOneMySuffix, defaultValue } from 'app/shared/model/test-one-to-one-my-suffix.model';

export const ACTION_TYPES = {
  FETCH_TESTONETOONE_LIST: 'testOneToOne/FETCH_TESTONETOONE_LIST',
  FETCH_TESTONETOONE: 'testOneToOne/FETCH_TESTONETOONE',
  CREATE_TESTONETOONE: 'testOneToOne/CREATE_TESTONETOONE',
  UPDATE_TESTONETOONE: 'testOneToOne/UPDATE_TESTONETOONE',
  DELETE_TESTONETOONE: 'testOneToOne/DELETE_TESTONETOONE',
  RESET: 'testOneToOne/RESET'
};

const initialState = {
  loading: false,
  errorMessage: null,
  entities: [] as ReadonlyArray<ITestOneToOneMySuffix>,
  entity: defaultValue,
  updating: false,
  updateSuccess: false
};

export type TestOneToOneMySuffixState = Readonly<typeof initialState>;

// Reducer

export default (state: TestOneToOneMySuffixState = initialState, action): TestOneToOneMySuffixState => {
  switch (action.type) {
    case REQUEST(ACTION_TYPES.FETCH_TESTONETOONE_LIST):
    case REQUEST(ACTION_TYPES.FETCH_TESTONETOONE):
      return {
        ...state,
        errorMessage: null,
        updateSuccess: false,
        loading: true
      };
    case REQUEST(ACTION_TYPES.CREATE_TESTONETOONE):
    case REQUEST(ACTION_TYPES.UPDATE_TESTONETOONE):
    case REQUEST(ACTION_TYPES.DELETE_TESTONETOONE):
      return {
        ...state,
        errorMessage: null,
        updateSuccess: false,
        updating: true
      };
    case FAILURE(ACTION_TYPES.FETCH_TESTONETOONE_LIST):
    case FAILURE(ACTION_TYPES.FETCH_TESTONETOONE):
    case FAILURE(ACTION_TYPES.CREATE_TESTONETOONE):
    case FAILURE(ACTION_TYPES.UPDATE_TESTONETOONE):
    case FAILURE(ACTION_TYPES.DELETE_TESTONETOONE):
      return {
        ...state,
        loading: false,
        updating: false,
        updateSuccess: false,
        errorMessage: action.payload
      };
    case SUCCESS(ACTION_TYPES.FETCH_TESTONETOONE_LIST):
      return {
        ...state,
        loading: false,
        entities: action.payload.data
      };
    case SUCCESS(ACTION_TYPES.FETCH_TESTONETOONE):
      return {
        ...state,
        loading: false,
        entity: action.payload.data
      };
    case SUCCESS(ACTION_TYPES.CREATE_TESTONETOONE):
    case SUCCESS(ACTION_TYPES.UPDATE_TESTONETOONE):
      return {
        ...state,
        updating: false,
        updateSuccess: true,
        entity: action.payload.data
      };
    case SUCCESS(ACTION_TYPES.DELETE_TESTONETOONE):
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

const apiUrl = 'api/test-one-to-ones';

// Actions

export const getEntities: ICrudGetAllAction<ITestOneToOneMySuffix> = (page, size, sort) => ({
  type: ACTION_TYPES.FETCH_TESTONETOONE_LIST,
  payload: axios.get<ITestOneToOneMySuffix>(`${apiUrl}?cacheBuster=${new Date().getTime()}`)
});

export const getEntity: ICrudGetAction<ITestOneToOneMySuffix> = id => {
  const requestUrl = `${apiUrl}/${id}`;
  return {
    type: ACTION_TYPES.FETCH_TESTONETOONE,
    payload: axios.get<ITestOneToOneMySuffix>(requestUrl)
  };
};

export const createEntity: ICrudPutAction<ITestOneToOneMySuffix> = entity => async dispatch => {
  const result = await dispatch({
    type: ACTION_TYPES.CREATE_TESTONETOONE,
    payload: axios.post(apiUrl, cleanEntity(entity))
  });
  dispatch(getEntities());
  return result;
};

export const updateEntity: ICrudPutAction<ITestOneToOneMySuffix> = entity => async dispatch => {
  const result = await dispatch({
    type: ACTION_TYPES.UPDATE_TESTONETOONE,
    payload: axios.put(apiUrl, cleanEntity(entity))
  });
  dispatch(getEntities());
  return result;
};

export const deleteEntity: ICrudDeleteAction<ITestOneToOneMySuffix> = id => async dispatch => {
  const requestUrl = `${apiUrl}/${id}`;
  const result = await dispatch({
    type: ACTION_TYPES.DELETE_TESTONETOONE,
    payload: axios.delete(requestUrl)
  });
  dispatch(getEntities());
  return result;
};

export const reset = () => ({
  type: ACTION_TYPES.RESET
});
