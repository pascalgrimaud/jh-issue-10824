import axios from 'axios';
import { ICrudGetAction, ICrudGetAllAction, ICrudPutAction, ICrudDeleteAction } from 'react-jhipster';

import { cleanEntity } from 'app/shared/util/entity-utils';
import { REQUEST, SUCCESS, FAILURE } from 'app/shared/reducers/action-type.util';

import { ITestServiceImpl, defaultValue } from 'app/shared/model/test-service-impl.model';

export const ACTION_TYPES = {
  FETCH_TESTSERVICEIMPL_LIST: 'testServiceImpl/FETCH_TESTSERVICEIMPL_LIST',
  FETCH_TESTSERVICEIMPL: 'testServiceImpl/FETCH_TESTSERVICEIMPL',
  CREATE_TESTSERVICEIMPL: 'testServiceImpl/CREATE_TESTSERVICEIMPL',
  UPDATE_TESTSERVICEIMPL: 'testServiceImpl/UPDATE_TESTSERVICEIMPL',
  DELETE_TESTSERVICEIMPL: 'testServiceImpl/DELETE_TESTSERVICEIMPL',
  RESET: 'testServiceImpl/RESET'
};

const initialState = {
  loading: false,
  errorMessage: null,
  entities: [] as ReadonlyArray<ITestServiceImpl>,
  entity: defaultValue,
  updating: false,
  updateSuccess: false
};

export type TestServiceImplState = Readonly<typeof initialState>;

// Reducer

export default (state: TestServiceImplState = initialState, action): TestServiceImplState => {
  switch (action.type) {
    case REQUEST(ACTION_TYPES.FETCH_TESTSERVICEIMPL_LIST):
    case REQUEST(ACTION_TYPES.FETCH_TESTSERVICEIMPL):
      return {
        ...state,
        errorMessage: null,
        updateSuccess: false,
        loading: true
      };
    case REQUEST(ACTION_TYPES.CREATE_TESTSERVICEIMPL):
    case REQUEST(ACTION_TYPES.UPDATE_TESTSERVICEIMPL):
    case REQUEST(ACTION_TYPES.DELETE_TESTSERVICEIMPL):
      return {
        ...state,
        errorMessage: null,
        updateSuccess: false,
        updating: true
      };
    case FAILURE(ACTION_TYPES.FETCH_TESTSERVICEIMPL_LIST):
    case FAILURE(ACTION_TYPES.FETCH_TESTSERVICEIMPL):
    case FAILURE(ACTION_TYPES.CREATE_TESTSERVICEIMPL):
    case FAILURE(ACTION_TYPES.UPDATE_TESTSERVICEIMPL):
    case FAILURE(ACTION_TYPES.DELETE_TESTSERVICEIMPL):
      return {
        ...state,
        loading: false,
        updating: false,
        updateSuccess: false,
        errorMessage: action.payload
      };
    case SUCCESS(ACTION_TYPES.FETCH_TESTSERVICEIMPL_LIST):
      return {
        ...state,
        loading: false,
        entities: action.payload.data
      };
    case SUCCESS(ACTION_TYPES.FETCH_TESTSERVICEIMPL):
      return {
        ...state,
        loading: false,
        entity: action.payload.data
      };
    case SUCCESS(ACTION_TYPES.CREATE_TESTSERVICEIMPL):
    case SUCCESS(ACTION_TYPES.UPDATE_TESTSERVICEIMPL):
      return {
        ...state,
        updating: false,
        updateSuccess: true,
        entity: action.payload.data
      };
    case SUCCESS(ACTION_TYPES.DELETE_TESTSERVICEIMPL):
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

const apiUrl = 'api/test-service-impls';

// Actions

export const getEntities: ICrudGetAllAction<ITestServiceImpl> = (page, size, sort) => ({
  type: ACTION_TYPES.FETCH_TESTSERVICEIMPL_LIST,
  payload: axios.get<ITestServiceImpl>(`${apiUrl}?cacheBuster=${new Date().getTime()}`)
});

export const getEntity: ICrudGetAction<ITestServiceImpl> = id => {
  const requestUrl = `${apiUrl}/${id}`;
  return {
    type: ACTION_TYPES.FETCH_TESTSERVICEIMPL,
    payload: axios.get<ITestServiceImpl>(requestUrl)
  };
};

export const createEntity: ICrudPutAction<ITestServiceImpl> = entity => async dispatch => {
  const result = await dispatch({
    type: ACTION_TYPES.CREATE_TESTSERVICEIMPL,
    payload: axios.post(apiUrl, cleanEntity(entity))
  });
  dispatch(getEntities());
  return result;
};

export const updateEntity: ICrudPutAction<ITestServiceImpl> = entity => async dispatch => {
  const result = await dispatch({
    type: ACTION_TYPES.UPDATE_TESTSERVICEIMPL,
    payload: axios.put(apiUrl, cleanEntity(entity))
  });
  dispatch(getEntities());
  return result;
};

export const deleteEntity: ICrudDeleteAction<ITestServiceImpl> = id => async dispatch => {
  const requestUrl = `${apiUrl}/${id}`;
  const result = await dispatch({
    type: ACTION_TYPES.DELETE_TESTSERVICEIMPL,
    payload: axios.delete(requestUrl)
  });
  dispatch(getEntities());
  return result;
};

export const reset = () => ({
  type: ACTION_TYPES.RESET
});
