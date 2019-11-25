import axios from 'axios';
import { ICrudGetAction, ICrudGetAllAction, ICrudPutAction, ICrudDeleteAction } from 'react-jhipster';

import { cleanEntity } from 'app/shared/util/entity-utils';
import { REQUEST, SUCCESS, FAILURE } from 'app/shared/reducers/action-type.util';

import { ITestManyToOneMySuffix, defaultValue } from 'app/shared/model/test-many-to-one-my-suffix.model';

export const ACTION_TYPES = {
  FETCH_TESTMANYTOONE_LIST: 'testManyToOne/FETCH_TESTMANYTOONE_LIST',
  FETCH_TESTMANYTOONE: 'testManyToOne/FETCH_TESTMANYTOONE',
  CREATE_TESTMANYTOONE: 'testManyToOne/CREATE_TESTMANYTOONE',
  UPDATE_TESTMANYTOONE: 'testManyToOne/UPDATE_TESTMANYTOONE',
  DELETE_TESTMANYTOONE: 'testManyToOne/DELETE_TESTMANYTOONE',
  RESET: 'testManyToOne/RESET'
};

const initialState = {
  loading: false,
  errorMessage: null,
  entities: [] as ReadonlyArray<ITestManyToOneMySuffix>,
  entity: defaultValue,
  updating: false,
  updateSuccess: false
};

export type TestManyToOneMySuffixState = Readonly<typeof initialState>;

// Reducer

export default (state: TestManyToOneMySuffixState = initialState, action): TestManyToOneMySuffixState => {
  switch (action.type) {
    case REQUEST(ACTION_TYPES.FETCH_TESTMANYTOONE_LIST):
    case REQUEST(ACTION_TYPES.FETCH_TESTMANYTOONE):
      return {
        ...state,
        errorMessage: null,
        updateSuccess: false,
        loading: true
      };
    case REQUEST(ACTION_TYPES.CREATE_TESTMANYTOONE):
    case REQUEST(ACTION_TYPES.UPDATE_TESTMANYTOONE):
    case REQUEST(ACTION_TYPES.DELETE_TESTMANYTOONE):
      return {
        ...state,
        errorMessage: null,
        updateSuccess: false,
        updating: true
      };
    case FAILURE(ACTION_TYPES.FETCH_TESTMANYTOONE_LIST):
    case FAILURE(ACTION_TYPES.FETCH_TESTMANYTOONE):
    case FAILURE(ACTION_TYPES.CREATE_TESTMANYTOONE):
    case FAILURE(ACTION_TYPES.UPDATE_TESTMANYTOONE):
    case FAILURE(ACTION_TYPES.DELETE_TESTMANYTOONE):
      return {
        ...state,
        loading: false,
        updating: false,
        updateSuccess: false,
        errorMessage: action.payload
      };
    case SUCCESS(ACTION_TYPES.FETCH_TESTMANYTOONE_LIST):
      return {
        ...state,
        loading: false,
        entities: action.payload.data
      };
    case SUCCESS(ACTION_TYPES.FETCH_TESTMANYTOONE):
      return {
        ...state,
        loading: false,
        entity: action.payload.data
      };
    case SUCCESS(ACTION_TYPES.CREATE_TESTMANYTOONE):
    case SUCCESS(ACTION_TYPES.UPDATE_TESTMANYTOONE):
      return {
        ...state,
        updating: false,
        updateSuccess: true,
        entity: action.payload.data
      };
    case SUCCESS(ACTION_TYPES.DELETE_TESTMANYTOONE):
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

const apiUrl = 'api/test-many-to-ones';

// Actions

export const getEntities: ICrudGetAllAction<ITestManyToOneMySuffix> = (page, size, sort) => ({
  type: ACTION_TYPES.FETCH_TESTMANYTOONE_LIST,
  payload: axios.get<ITestManyToOneMySuffix>(`${apiUrl}?cacheBuster=${new Date().getTime()}`)
});

export const getEntity: ICrudGetAction<ITestManyToOneMySuffix> = id => {
  const requestUrl = `${apiUrl}/${id}`;
  return {
    type: ACTION_TYPES.FETCH_TESTMANYTOONE,
    payload: axios.get<ITestManyToOneMySuffix>(requestUrl)
  };
};

export const createEntity: ICrudPutAction<ITestManyToOneMySuffix> = entity => async dispatch => {
  const result = await dispatch({
    type: ACTION_TYPES.CREATE_TESTMANYTOONE,
    payload: axios.post(apiUrl, cleanEntity(entity))
  });
  dispatch(getEntities());
  return result;
};

export const updateEntity: ICrudPutAction<ITestManyToOneMySuffix> = entity => async dispatch => {
  const result = await dispatch({
    type: ACTION_TYPES.UPDATE_TESTMANYTOONE,
    payload: axios.put(apiUrl, cleanEntity(entity))
  });
  dispatch(getEntities());
  return result;
};

export const deleteEntity: ICrudDeleteAction<ITestManyToOneMySuffix> = id => async dispatch => {
  const requestUrl = `${apiUrl}/${id}`;
  const result = await dispatch({
    type: ACTION_TYPES.DELETE_TESTMANYTOONE,
    payload: axios.delete(requestUrl)
  });
  dispatch(getEntities());
  return result;
};

export const reset = () => ({
  type: ACTION_TYPES.RESET
});
