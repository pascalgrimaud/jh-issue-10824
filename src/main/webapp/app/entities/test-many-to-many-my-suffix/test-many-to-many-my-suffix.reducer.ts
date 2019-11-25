import axios from 'axios';
import { ICrudGetAction, ICrudGetAllAction, ICrudPutAction, ICrudDeleteAction } from 'react-jhipster';

import { cleanEntity } from 'app/shared/util/entity-utils';
import { REQUEST, SUCCESS, FAILURE } from 'app/shared/reducers/action-type.util';

import { ITestManyToManyMySuffix, defaultValue } from 'app/shared/model/test-many-to-many-my-suffix.model';

export const ACTION_TYPES = {
  FETCH_TESTMANYTOMANY_LIST: 'testManyToMany/FETCH_TESTMANYTOMANY_LIST',
  FETCH_TESTMANYTOMANY: 'testManyToMany/FETCH_TESTMANYTOMANY',
  CREATE_TESTMANYTOMANY: 'testManyToMany/CREATE_TESTMANYTOMANY',
  UPDATE_TESTMANYTOMANY: 'testManyToMany/UPDATE_TESTMANYTOMANY',
  DELETE_TESTMANYTOMANY: 'testManyToMany/DELETE_TESTMANYTOMANY',
  RESET: 'testManyToMany/RESET'
};

const initialState = {
  loading: false,
  errorMessage: null,
  entities: [] as ReadonlyArray<ITestManyToManyMySuffix>,
  entity: defaultValue,
  updating: false,
  updateSuccess: false
};

export type TestManyToManyMySuffixState = Readonly<typeof initialState>;

// Reducer

export default (state: TestManyToManyMySuffixState = initialState, action): TestManyToManyMySuffixState => {
  switch (action.type) {
    case REQUEST(ACTION_TYPES.FETCH_TESTMANYTOMANY_LIST):
    case REQUEST(ACTION_TYPES.FETCH_TESTMANYTOMANY):
      return {
        ...state,
        errorMessage: null,
        updateSuccess: false,
        loading: true
      };
    case REQUEST(ACTION_TYPES.CREATE_TESTMANYTOMANY):
    case REQUEST(ACTION_TYPES.UPDATE_TESTMANYTOMANY):
    case REQUEST(ACTION_TYPES.DELETE_TESTMANYTOMANY):
      return {
        ...state,
        errorMessage: null,
        updateSuccess: false,
        updating: true
      };
    case FAILURE(ACTION_TYPES.FETCH_TESTMANYTOMANY_LIST):
    case FAILURE(ACTION_TYPES.FETCH_TESTMANYTOMANY):
    case FAILURE(ACTION_TYPES.CREATE_TESTMANYTOMANY):
    case FAILURE(ACTION_TYPES.UPDATE_TESTMANYTOMANY):
    case FAILURE(ACTION_TYPES.DELETE_TESTMANYTOMANY):
      return {
        ...state,
        loading: false,
        updating: false,
        updateSuccess: false,
        errorMessage: action.payload
      };
    case SUCCESS(ACTION_TYPES.FETCH_TESTMANYTOMANY_LIST):
      return {
        ...state,
        loading: false,
        entities: action.payload.data
      };
    case SUCCESS(ACTION_TYPES.FETCH_TESTMANYTOMANY):
      return {
        ...state,
        loading: false,
        entity: action.payload.data
      };
    case SUCCESS(ACTION_TYPES.CREATE_TESTMANYTOMANY):
    case SUCCESS(ACTION_TYPES.UPDATE_TESTMANYTOMANY):
      return {
        ...state,
        updating: false,
        updateSuccess: true,
        entity: action.payload.data
      };
    case SUCCESS(ACTION_TYPES.DELETE_TESTMANYTOMANY):
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

const apiUrl = 'api/test-many-to-manies';

// Actions

export const getEntities: ICrudGetAllAction<ITestManyToManyMySuffix> = (page, size, sort) => ({
  type: ACTION_TYPES.FETCH_TESTMANYTOMANY_LIST,
  payload: axios.get<ITestManyToManyMySuffix>(`${apiUrl}?cacheBuster=${new Date().getTime()}`)
});

export const getEntity: ICrudGetAction<ITestManyToManyMySuffix> = id => {
  const requestUrl = `${apiUrl}/${id}`;
  return {
    type: ACTION_TYPES.FETCH_TESTMANYTOMANY,
    payload: axios.get<ITestManyToManyMySuffix>(requestUrl)
  };
};

export const createEntity: ICrudPutAction<ITestManyToManyMySuffix> = entity => async dispatch => {
  const result = await dispatch({
    type: ACTION_TYPES.CREATE_TESTMANYTOMANY,
    payload: axios.post(apiUrl, cleanEntity(entity))
  });
  dispatch(getEntities());
  return result;
};

export const updateEntity: ICrudPutAction<ITestManyToManyMySuffix> = entity => async dispatch => {
  const result = await dispatch({
    type: ACTION_TYPES.UPDATE_TESTMANYTOMANY,
    payload: axios.put(apiUrl, cleanEntity(entity))
  });
  dispatch(getEntities());
  return result;
};

export const deleteEntity: ICrudDeleteAction<ITestManyToManyMySuffix> = id => async dispatch => {
  const requestUrl = `${apiUrl}/${id}`;
  const result = await dispatch({
    type: ACTION_TYPES.DELETE_TESTMANYTOMANY,
    payload: axios.delete(requestUrl)
  });
  dispatch(getEntities());
  return result;
};

export const reset = () => ({
  type: ACTION_TYPES.RESET
});
