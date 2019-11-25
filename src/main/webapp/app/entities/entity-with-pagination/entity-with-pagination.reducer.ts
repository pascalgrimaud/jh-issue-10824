import axios from 'axios';
import { ICrudGetAction, ICrudGetAllAction, ICrudPutAction, ICrudDeleteAction } from 'react-jhipster';

import { cleanEntity } from 'app/shared/util/entity-utils';
import { REQUEST, SUCCESS, FAILURE } from 'app/shared/reducers/action-type.util';

import { IEntityWithPagination, defaultValue } from 'app/shared/model/entity-with-pagination.model';

export const ACTION_TYPES = {
  FETCH_ENTITYWITHPAGINATION_LIST: 'entityWithPagination/FETCH_ENTITYWITHPAGINATION_LIST',
  FETCH_ENTITYWITHPAGINATION: 'entityWithPagination/FETCH_ENTITYWITHPAGINATION',
  CREATE_ENTITYWITHPAGINATION: 'entityWithPagination/CREATE_ENTITYWITHPAGINATION',
  UPDATE_ENTITYWITHPAGINATION: 'entityWithPagination/UPDATE_ENTITYWITHPAGINATION',
  DELETE_ENTITYWITHPAGINATION: 'entityWithPagination/DELETE_ENTITYWITHPAGINATION',
  RESET: 'entityWithPagination/RESET'
};

const initialState = {
  loading: false,
  errorMessage: null,
  entities: [] as ReadonlyArray<IEntityWithPagination>,
  entity: defaultValue,
  updating: false,
  totalItems: 0,
  updateSuccess: false
};

export type EntityWithPaginationState = Readonly<typeof initialState>;

// Reducer

export default (state: EntityWithPaginationState = initialState, action): EntityWithPaginationState => {
  switch (action.type) {
    case REQUEST(ACTION_TYPES.FETCH_ENTITYWITHPAGINATION_LIST):
    case REQUEST(ACTION_TYPES.FETCH_ENTITYWITHPAGINATION):
      return {
        ...state,
        errorMessage: null,
        updateSuccess: false,
        loading: true
      };
    case REQUEST(ACTION_TYPES.CREATE_ENTITYWITHPAGINATION):
    case REQUEST(ACTION_TYPES.UPDATE_ENTITYWITHPAGINATION):
    case REQUEST(ACTION_TYPES.DELETE_ENTITYWITHPAGINATION):
      return {
        ...state,
        errorMessage: null,
        updateSuccess: false,
        updating: true
      };
    case FAILURE(ACTION_TYPES.FETCH_ENTITYWITHPAGINATION_LIST):
    case FAILURE(ACTION_TYPES.FETCH_ENTITYWITHPAGINATION):
    case FAILURE(ACTION_TYPES.CREATE_ENTITYWITHPAGINATION):
    case FAILURE(ACTION_TYPES.UPDATE_ENTITYWITHPAGINATION):
    case FAILURE(ACTION_TYPES.DELETE_ENTITYWITHPAGINATION):
      return {
        ...state,
        loading: false,
        updating: false,
        updateSuccess: false,
        errorMessage: action.payload
      };
    case SUCCESS(ACTION_TYPES.FETCH_ENTITYWITHPAGINATION_LIST):
      return {
        ...state,
        loading: false,
        entities: action.payload.data,
        totalItems: parseInt(action.payload.headers['x-total-count'], 10)
      };
    case SUCCESS(ACTION_TYPES.FETCH_ENTITYWITHPAGINATION):
      return {
        ...state,
        loading: false,
        entity: action.payload.data
      };
    case SUCCESS(ACTION_TYPES.CREATE_ENTITYWITHPAGINATION):
    case SUCCESS(ACTION_TYPES.UPDATE_ENTITYWITHPAGINATION):
      return {
        ...state,
        updating: false,
        updateSuccess: true,
        entity: action.payload.data
      };
    case SUCCESS(ACTION_TYPES.DELETE_ENTITYWITHPAGINATION):
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

const apiUrl = 'api/entity-with-paginations';

// Actions

export const getEntities: ICrudGetAllAction<IEntityWithPagination> = (page, size, sort) => {
  const requestUrl = `${apiUrl}${sort ? `?page=${page}&size=${size}&sort=${sort}` : ''}`;
  return {
    type: ACTION_TYPES.FETCH_ENTITYWITHPAGINATION_LIST,
    payload: axios.get<IEntityWithPagination>(`${requestUrl}${sort ? '&' : '?'}cacheBuster=${new Date().getTime()}`)
  };
};

export const getEntity: ICrudGetAction<IEntityWithPagination> = id => {
  const requestUrl = `${apiUrl}/${id}`;
  return {
    type: ACTION_TYPES.FETCH_ENTITYWITHPAGINATION,
    payload: axios.get<IEntityWithPagination>(requestUrl)
  };
};

export const createEntity: ICrudPutAction<IEntityWithPagination> = entity => async dispatch => {
  const result = await dispatch({
    type: ACTION_TYPES.CREATE_ENTITYWITHPAGINATION,
    payload: axios.post(apiUrl, cleanEntity(entity))
  });
  dispatch(getEntities());
  return result;
};

export const updateEntity: ICrudPutAction<IEntityWithPagination> = entity => async dispatch => {
  const result = await dispatch({
    type: ACTION_TYPES.UPDATE_ENTITYWITHPAGINATION,
    payload: axios.put(apiUrl, cleanEntity(entity))
  });
  dispatch(getEntities());
  return result;
};

export const deleteEntity: ICrudDeleteAction<IEntityWithPagination> = id => async dispatch => {
  const requestUrl = `${apiUrl}/${id}`;
  const result = await dispatch({
    type: ACTION_TYPES.DELETE_ENTITYWITHPAGINATION,
    payload: axios.delete(requestUrl)
  });
  dispatch(getEntities());
  return result;
};

export const reset = () => ({
  type: ACTION_TYPES.RESET
});
