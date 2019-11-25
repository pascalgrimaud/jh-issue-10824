import axios from 'axios';
import { ICrudGetAction, ICrudGetAllAction, ICrudPutAction, ICrudDeleteAction } from 'react-jhipster';

import { cleanEntity } from 'app/shared/util/entity-utils';
import { REQUEST, SUCCESS, FAILURE } from 'app/shared/reducers/action-type.util';

import { ITestMapstruct, defaultValue } from 'app/shared/model/test-mapstruct.model';

export const ACTION_TYPES = {
  FETCH_TESTMAPSTRUCT_LIST: 'testMapstruct/FETCH_TESTMAPSTRUCT_LIST',
  FETCH_TESTMAPSTRUCT: 'testMapstruct/FETCH_TESTMAPSTRUCT',
  CREATE_TESTMAPSTRUCT: 'testMapstruct/CREATE_TESTMAPSTRUCT',
  UPDATE_TESTMAPSTRUCT: 'testMapstruct/UPDATE_TESTMAPSTRUCT',
  DELETE_TESTMAPSTRUCT: 'testMapstruct/DELETE_TESTMAPSTRUCT',
  RESET: 'testMapstruct/RESET'
};

const initialState = {
  loading: false,
  errorMessage: null,
  entities: [] as ReadonlyArray<ITestMapstruct>,
  entity: defaultValue,
  updating: false,
  updateSuccess: false
};

export type TestMapstructState = Readonly<typeof initialState>;

// Reducer

export default (state: TestMapstructState = initialState, action): TestMapstructState => {
  switch (action.type) {
    case REQUEST(ACTION_TYPES.FETCH_TESTMAPSTRUCT_LIST):
    case REQUEST(ACTION_TYPES.FETCH_TESTMAPSTRUCT):
      return {
        ...state,
        errorMessage: null,
        updateSuccess: false,
        loading: true
      };
    case REQUEST(ACTION_TYPES.CREATE_TESTMAPSTRUCT):
    case REQUEST(ACTION_TYPES.UPDATE_TESTMAPSTRUCT):
    case REQUEST(ACTION_TYPES.DELETE_TESTMAPSTRUCT):
      return {
        ...state,
        errorMessage: null,
        updateSuccess: false,
        updating: true
      };
    case FAILURE(ACTION_TYPES.FETCH_TESTMAPSTRUCT_LIST):
    case FAILURE(ACTION_TYPES.FETCH_TESTMAPSTRUCT):
    case FAILURE(ACTION_TYPES.CREATE_TESTMAPSTRUCT):
    case FAILURE(ACTION_TYPES.UPDATE_TESTMAPSTRUCT):
    case FAILURE(ACTION_TYPES.DELETE_TESTMAPSTRUCT):
      return {
        ...state,
        loading: false,
        updating: false,
        updateSuccess: false,
        errorMessage: action.payload
      };
    case SUCCESS(ACTION_TYPES.FETCH_TESTMAPSTRUCT_LIST):
      return {
        ...state,
        loading: false,
        entities: action.payload.data
      };
    case SUCCESS(ACTION_TYPES.FETCH_TESTMAPSTRUCT):
      return {
        ...state,
        loading: false,
        entity: action.payload.data
      };
    case SUCCESS(ACTION_TYPES.CREATE_TESTMAPSTRUCT):
    case SUCCESS(ACTION_TYPES.UPDATE_TESTMAPSTRUCT):
      return {
        ...state,
        updating: false,
        updateSuccess: true,
        entity: action.payload.data
      };
    case SUCCESS(ACTION_TYPES.DELETE_TESTMAPSTRUCT):
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

const apiUrl = 'api/test-mapstructs';

// Actions

export const getEntities: ICrudGetAllAction<ITestMapstruct> = (page, size, sort) => ({
  type: ACTION_TYPES.FETCH_TESTMAPSTRUCT_LIST,
  payload: axios.get<ITestMapstruct>(`${apiUrl}?cacheBuster=${new Date().getTime()}`)
});

export const getEntity: ICrudGetAction<ITestMapstruct> = id => {
  const requestUrl = `${apiUrl}/${id}`;
  return {
    type: ACTION_TYPES.FETCH_TESTMAPSTRUCT,
    payload: axios.get<ITestMapstruct>(requestUrl)
  };
};

export const createEntity: ICrudPutAction<ITestMapstruct> = entity => async dispatch => {
  const result = await dispatch({
    type: ACTION_TYPES.CREATE_TESTMAPSTRUCT,
    payload: axios.post(apiUrl, cleanEntity(entity))
  });
  dispatch(getEntities());
  return result;
};

export const updateEntity: ICrudPutAction<ITestMapstruct> = entity => async dispatch => {
  const result = await dispatch({
    type: ACTION_TYPES.UPDATE_TESTMAPSTRUCT,
    payload: axios.put(apiUrl, cleanEntity(entity))
  });
  dispatch(getEntities());
  return result;
};

export const deleteEntity: ICrudDeleteAction<ITestMapstruct> = id => async dispatch => {
  const requestUrl = `${apiUrl}/${id}`;
  const result = await dispatch({
    type: ACTION_TYPES.DELETE_TESTMAPSTRUCT,
    payload: axios.delete(requestUrl)
  });
  dispatch(getEntities());
  return result;
};

export const reset = () => ({
  type: ACTION_TYPES.RESET
});
