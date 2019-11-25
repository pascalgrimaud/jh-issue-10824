import axios from 'axios';
import { ICrudGetAction, ICrudGetAllAction, ICrudPutAction, ICrudDeleteAction } from 'react-jhipster';

import { cleanEntity } from 'app/shared/util/entity-utils';
import { REQUEST, SUCCESS, FAILURE } from 'app/shared/reducers/action-type.util';

import { IEntityWithServiceImpl, defaultValue } from 'app/shared/model/entity-with-service-impl.model';

export const ACTION_TYPES = {
  FETCH_ENTITYWITHSERVICEIMPL_LIST: 'entityWithServiceImpl/FETCH_ENTITYWITHSERVICEIMPL_LIST',
  FETCH_ENTITYWITHSERVICEIMPL: 'entityWithServiceImpl/FETCH_ENTITYWITHSERVICEIMPL',
  CREATE_ENTITYWITHSERVICEIMPL: 'entityWithServiceImpl/CREATE_ENTITYWITHSERVICEIMPL',
  UPDATE_ENTITYWITHSERVICEIMPL: 'entityWithServiceImpl/UPDATE_ENTITYWITHSERVICEIMPL',
  DELETE_ENTITYWITHSERVICEIMPL: 'entityWithServiceImpl/DELETE_ENTITYWITHSERVICEIMPL',
  RESET: 'entityWithServiceImpl/RESET'
};

const initialState = {
  loading: false,
  errorMessage: null,
  entities: [] as ReadonlyArray<IEntityWithServiceImpl>,
  entity: defaultValue,
  updating: false,
  updateSuccess: false
};

export type EntityWithServiceImplState = Readonly<typeof initialState>;

// Reducer

export default (state: EntityWithServiceImplState = initialState, action): EntityWithServiceImplState => {
  switch (action.type) {
    case REQUEST(ACTION_TYPES.FETCH_ENTITYWITHSERVICEIMPL_LIST):
    case REQUEST(ACTION_TYPES.FETCH_ENTITYWITHSERVICEIMPL):
      return {
        ...state,
        errorMessage: null,
        updateSuccess: false,
        loading: true
      };
    case REQUEST(ACTION_TYPES.CREATE_ENTITYWITHSERVICEIMPL):
    case REQUEST(ACTION_TYPES.UPDATE_ENTITYWITHSERVICEIMPL):
    case REQUEST(ACTION_TYPES.DELETE_ENTITYWITHSERVICEIMPL):
      return {
        ...state,
        errorMessage: null,
        updateSuccess: false,
        updating: true
      };
    case FAILURE(ACTION_TYPES.FETCH_ENTITYWITHSERVICEIMPL_LIST):
    case FAILURE(ACTION_TYPES.FETCH_ENTITYWITHSERVICEIMPL):
    case FAILURE(ACTION_TYPES.CREATE_ENTITYWITHSERVICEIMPL):
    case FAILURE(ACTION_TYPES.UPDATE_ENTITYWITHSERVICEIMPL):
    case FAILURE(ACTION_TYPES.DELETE_ENTITYWITHSERVICEIMPL):
      return {
        ...state,
        loading: false,
        updating: false,
        updateSuccess: false,
        errorMessage: action.payload
      };
    case SUCCESS(ACTION_TYPES.FETCH_ENTITYWITHSERVICEIMPL_LIST):
      return {
        ...state,
        loading: false,
        entities: action.payload.data
      };
    case SUCCESS(ACTION_TYPES.FETCH_ENTITYWITHSERVICEIMPL):
      return {
        ...state,
        loading: false,
        entity: action.payload.data
      };
    case SUCCESS(ACTION_TYPES.CREATE_ENTITYWITHSERVICEIMPL):
    case SUCCESS(ACTION_TYPES.UPDATE_ENTITYWITHSERVICEIMPL):
      return {
        ...state,
        updating: false,
        updateSuccess: true,
        entity: action.payload.data
      };
    case SUCCESS(ACTION_TYPES.DELETE_ENTITYWITHSERVICEIMPL):
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

const apiUrl = 'api/entity-with-service-impls';

// Actions

export const getEntities: ICrudGetAllAction<IEntityWithServiceImpl> = (page, size, sort) => ({
  type: ACTION_TYPES.FETCH_ENTITYWITHSERVICEIMPL_LIST,
  payload: axios.get<IEntityWithServiceImpl>(`${apiUrl}?cacheBuster=${new Date().getTime()}`)
});

export const getEntity: ICrudGetAction<IEntityWithServiceImpl> = id => {
  const requestUrl = `${apiUrl}/${id}`;
  return {
    type: ACTION_TYPES.FETCH_ENTITYWITHSERVICEIMPL,
    payload: axios.get<IEntityWithServiceImpl>(requestUrl)
  };
};

export const createEntity: ICrudPutAction<IEntityWithServiceImpl> = entity => async dispatch => {
  const result = await dispatch({
    type: ACTION_TYPES.CREATE_ENTITYWITHSERVICEIMPL,
    payload: axios.post(apiUrl, cleanEntity(entity))
  });
  dispatch(getEntities());
  return result;
};

export const updateEntity: ICrudPutAction<IEntityWithServiceImpl> = entity => async dispatch => {
  const result = await dispatch({
    type: ACTION_TYPES.UPDATE_ENTITYWITHSERVICEIMPL,
    payload: axios.put(apiUrl, cleanEntity(entity))
  });
  dispatch(getEntities());
  return result;
};

export const deleteEntity: ICrudDeleteAction<IEntityWithServiceImpl> = id => async dispatch => {
  const requestUrl = `${apiUrl}/${id}`;
  const result = await dispatch({
    type: ACTION_TYPES.DELETE_ENTITYWITHSERVICEIMPL,
    payload: axios.delete(requestUrl)
  });
  dispatch(getEntities());
  return result;
};

export const reset = () => ({
  type: ACTION_TYPES.RESET
});
