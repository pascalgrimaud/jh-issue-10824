import axios from 'axios';
import { ICrudGetAction, ICrudGetAllAction, ICrudPutAction, ICrudDeleteAction } from 'react-jhipster';

import { cleanEntity } from 'app/shared/util/entity-utils';
import { REQUEST, SUCCESS, FAILURE } from 'app/shared/reducers/action-type.util';

import { IEntityWithServiceClassAndDTO, defaultValue } from 'app/shared/model/entity-with-service-class-and-dto.model';

export const ACTION_TYPES = {
  FETCH_ENTITYWITHSERVICECLASSANDDTO_LIST: 'entityWithServiceClassAndDTO/FETCH_ENTITYWITHSERVICECLASSANDDTO_LIST',
  FETCH_ENTITYWITHSERVICECLASSANDDTO: 'entityWithServiceClassAndDTO/FETCH_ENTITYWITHSERVICECLASSANDDTO',
  CREATE_ENTITYWITHSERVICECLASSANDDTO: 'entityWithServiceClassAndDTO/CREATE_ENTITYWITHSERVICECLASSANDDTO',
  UPDATE_ENTITYWITHSERVICECLASSANDDTO: 'entityWithServiceClassAndDTO/UPDATE_ENTITYWITHSERVICECLASSANDDTO',
  DELETE_ENTITYWITHSERVICECLASSANDDTO: 'entityWithServiceClassAndDTO/DELETE_ENTITYWITHSERVICECLASSANDDTO',
  RESET: 'entityWithServiceClassAndDTO/RESET'
};

const initialState = {
  loading: false,
  errorMessage: null,
  entities: [] as ReadonlyArray<IEntityWithServiceClassAndDTO>,
  entity: defaultValue,
  updating: false,
  updateSuccess: false
};

export type EntityWithServiceClassAndDTOState = Readonly<typeof initialState>;

// Reducer

export default (state: EntityWithServiceClassAndDTOState = initialState, action): EntityWithServiceClassAndDTOState => {
  switch (action.type) {
    case REQUEST(ACTION_TYPES.FETCH_ENTITYWITHSERVICECLASSANDDTO_LIST):
    case REQUEST(ACTION_TYPES.FETCH_ENTITYWITHSERVICECLASSANDDTO):
      return {
        ...state,
        errorMessage: null,
        updateSuccess: false,
        loading: true
      };
    case REQUEST(ACTION_TYPES.CREATE_ENTITYWITHSERVICECLASSANDDTO):
    case REQUEST(ACTION_TYPES.UPDATE_ENTITYWITHSERVICECLASSANDDTO):
    case REQUEST(ACTION_TYPES.DELETE_ENTITYWITHSERVICECLASSANDDTO):
      return {
        ...state,
        errorMessage: null,
        updateSuccess: false,
        updating: true
      };
    case FAILURE(ACTION_TYPES.FETCH_ENTITYWITHSERVICECLASSANDDTO_LIST):
    case FAILURE(ACTION_TYPES.FETCH_ENTITYWITHSERVICECLASSANDDTO):
    case FAILURE(ACTION_TYPES.CREATE_ENTITYWITHSERVICECLASSANDDTO):
    case FAILURE(ACTION_TYPES.UPDATE_ENTITYWITHSERVICECLASSANDDTO):
    case FAILURE(ACTION_TYPES.DELETE_ENTITYWITHSERVICECLASSANDDTO):
      return {
        ...state,
        loading: false,
        updating: false,
        updateSuccess: false,
        errorMessage: action.payload
      };
    case SUCCESS(ACTION_TYPES.FETCH_ENTITYWITHSERVICECLASSANDDTO_LIST):
      return {
        ...state,
        loading: false,
        entities: action.payload.data
      };
    case SUCCESS(ACTION_TYPES.FETCH_ENTITYWITHSERVICECLASSANDDTO):
      return {
        ...state,
        loading: false,
        entity: action.payload.data
      };
    case SUCCESS(ACTION_TYPES.CREATE_ENTITYWITHSERVICECLASSANDDTO):
    case SUCCESS(ACTION_TYPES.UPDATE_ENTITYWITHSERVICECLASSANDDTO):
      return {
        ...state,
        updating: false,
        updateSuccess: true,
        entity: action.payload.data
      };
    case SUCCESS(ACTION_TYPES.DELETE_ENTITYWITHSERVICECLASSANDDTO):
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

const apiUrl = 'api/entity-with-service-class-and-dtos';

// Actions

export const getEntities: ICrudGetAllAction<IEntityWithServiceClassAndDTO> = (page, size, sort) => ({
  type: ACTION_TYPES.FETCH_ENTITYWITHSERVICECLASSANDDTO_LIST,
  payload: axios.get<IEntityWithServiceClassAndDTO>(`${apiUrl}?cacheBuster=${new Date().getTime()}`)
});

export const getEntity: ICrudGetAction<IEntityWithServiceClassAndDTO> = id => {
  const requestUrl = `${apiUrl}/${id}`;
  return {
    type: ACTION_TYPES.FETCH_ENTITYWITHSERVICECLASSANDDTO,
    payload: axios.get<IEntityWithServiceClassAndDTO>(requestUrl)
  };
};

export const createEntity: ICrudPutAction<IEntityWithServiceClassAndDTO> = entity => async dispatch => {
  const result = await dispatch({
    type: ACTION_TYPES.CREATE_ENTITYWITHSERVICECLASSANDDTO,
    payload: axios.post(apiUrl, cleanEntity(entity))
  });
  dispatch(getEntities());
  return result;
};

export const updateEntity: ICrudPutAction<IEntityWithServiceClassAndDTO> = entity => async dispatch => {
  const result = await dispatch({
    type: ACTION_TYPES.UPDATE_ENTITYWITHSERVICECLASSANDDTO,
    payload: axios.put(apiUrl, cleanEntity(entity))
  });
  dispatch(getEntities());
  return result;
};

export const deleteEntity: ICrudDeleteAction<IEntityWithServiceClassAndDTO> = id => async dispatch => {
  const requestUrl = `${apiUrl}/${id}`;
  const result = await dispatch({
    type: ACTION_TYPES.DELETE_ENTITYWITHSERVICECLASSANDDTO,
    payload: axios.delete(requestUrl)
  });
  dispatch(getEntities());
  return result;
};

export const reset = () => ({
  type: ACTION_TYPES.RESET
});
