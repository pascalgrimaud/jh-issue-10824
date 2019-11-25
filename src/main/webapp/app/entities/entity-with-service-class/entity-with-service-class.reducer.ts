import axios from 'axios';
import { ICrudGetAction, ICrudGetAllAction, ICrudPutAction, ICrudDeleteAction } from 'react-jhipster';

import { cleanEntity } from 'app/shared/util/entity-utils';
import { REQUEST, SUCCESS, FAILURE } from 'app/shared/reducers/action-type.util';

import { IEntityWithServiceClass, defaultValue } from 'app/shared/model/entity-with-service-class.model';

export const ACTION_TYPES = {
  FETCH_ENTITYWITHSERVICECLASS_LIST: 'entityWithServiceClass/FETCH_ENTITYWITHSERVICECLASS_LIST',
  FETCH_ENTITYWITHSERVICECLASS: 'entityWithServiceClass/FETCH_ENTITYWITHSERVICECLASS',
  CREATE_ENTITYWITHSERVICECLASS: 'entityWithServiceClass/CREATE_ENTITYWITHSERVICECLASS',
  UPDATE_ENTITYWITHSERVICECLASS: 'entityWithServiceClass/UPDATE_ENTITYWITHSERVICECLASS',
  DELETE_ENTITYWITHSERVICECLASS: 'entityWithServiceClass/DELETE_ENTITYWITHSERVICECLASS',
  RESET: 'entityWithServiceClass/RESET'
};

const initialState = {
  loading: false,
  errorMessage: null,
  entities: [] as ReadonlyArray<IEntityWithServiceClass>,
  entity: defaultValue,
  updating: false,
  updateSuccess: false
};

export type EntityWithServiceClassState = Readonly<typeof initialState>;

// Reducer

export default (state: EntityWithServiceClassState = initialState, action): EntityWithServiceClassState => {
  switch (action.type) {
    case REQUEST(ACTION_TYPES.FETCH_ENTITYWITHSERVICECLASS_LIST):
    case REQUEST(ACTION_TYPES.FETCH_ENTITYWITHSERVICECLASS):
      return {
        ...state,
        errorMessage: null,
        updateSuccess: false,
        loading: true
      };
    case REQUEST(ACTION_TYPES.CREATE_ENTITYWITHSERVICECLASS):
    case REQUEST(ACTION_TYPES.UPDATE_ENTITYWITHSERVICECLASS):
    case REQUEST(ACTION_TYPES.DELETE_ENTITYWITHSERVICECLASS):
      return {
        ...state,
        errorMessage: null,
        updateSuccess: false,
        updating: true
      };
    case FAILURE(ACTION_TYPES.FETCH_ENTITYWITHSERVICECLASS_LIST):
    case FAILURE(ACTION_TYPES.FETCH_ENTITYWITHSERVICECLASS):
    case FAILURE(ACTION_TYPES.CREATE_ENTITYWITHSERVICECLASS):
    case FAILURE(ACTION_TYPES.UPDATE_ENTITYWITHSERVICECLASS):
    case FAILURE(ACTION_TYPES.DELETE_ENTITYWITHSERVICECLASS):
      return {
        ...state,
        loading: false,
        updating: false,
        updateSuccess: false,
        errorMessage: action.payload
      };
    case SUCCESS(ACTION_TYPES.FETCH_ENTITYWITHSERVICECLASS_LIST):
      return {
        ...state,
        loading: false,
        entities: action.payload.data
      };
    case SUCCESS(ACTION_TYPES.FETCH_ENTITYWITHSERVICECLASS):
      return {
        ...state,
        loading: false,
        entity: action.payload.data
      };
    case SUCCESS(ACTION_TYPES.CREATE_ENTITYWITHSERVICECLASS):
    case SUCCESS(ACTION_TYPES.UPDATE_ENTITYWITHSERVICECLASS):
      return {
        ...state,
        updating: false,
        updateSuccess: true,
        entity: action.payload.data
      };
    case SUCCESS(ACTION_TYPES.DELETE_ENTITYWITHSERVICECLASS):
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

const apiUrl = 'api/entity-with-service-classes';

// Actions

export const getEntities: ICrudGetAllAction<IEntityWithServiceClass> = (page, size, sort) => ({
  type: ACTION_TYPES.FETCH_ENTITYWITHSERVICECLASS_LIST,
  payload: axios.get<IEntityWithServiceClass>(`${apiUrl}?cacheBuster=${new Date().getTime()}`)
});

export const getEntity: ICrudGetAction<IEntityWithServiceClass> = id => {
  const requestUrl = `${apiUrl}/${id}`;
  return {
    type: ACTION_TYPES.FETCH_ENTITYWITHSERVICECLASS,
    payload: axios.get<IEntityWithServiceClass>(requestUrl)
  };
};

export const createEntity: ICrudPutAction<IEntityWithServiceClass> = entity => async dispatch => {
  const result = await dispatch({
    type: ACTION_TYPES.CREATE_ENTITYWITHSERVICECLASS,
    payload: axios.post(apiUrl, cleanEntity(entity))
  });
  dispatch(getEntities());
  return result;
};

export const updateEntity: ICrudPutAction<IEntityWithServiceClass> = entity => async dispatch => {
  const result = await dispatch({
    type: ACTION_TYPES.UPDATE_ENTITYWITHSERVICECLASS,
    payload: axios.put(apiUrl, cleanEntity(entity))
  });
  dispatch(getEntities());
  return result;
};

export const deleteEntity: ICrudDeleteAction<IEntityWithServiceClass> = id => async dispatch => {
  const requestUrl = `${apiUrl}/${id}`;
  const result = await dispatch({
    type: ACTION_TYPES.DELETE_ENTITYWITHSERVICECLASS,
    payload: axios.delete(requestUrl)
  });
  dispatch(getEntities());
  return result;
};

export const reset = () => ({
  type: ACTION_TYPES.RESET
});
