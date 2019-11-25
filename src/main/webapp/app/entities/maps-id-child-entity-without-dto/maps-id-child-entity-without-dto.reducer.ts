import axios from 'axios';
import { ICrudGetAction, ICrudGetAllAction, ICrudPutAction, ICrudDeleteAction } from 'react-jhipster';

import { cleanEntity } from 'app/shared/util/entity-utils';
import { REQUEST, SUCCESS, FAILURE } from 'app/shared/reducers/action-type.util';

import { IMapsIdChildEntityWithoutDTO, defaultValue } from 'app/shared/model/maps-id-child-entity-without-dto.model';

export const ACTION_TYPES = {
  FETCH_MAPSIDCHILDENTITYWITHOUTDTO_LIST: 'mapsIdChildEntityWithoutDTO/FETCH_MAPSIDCHILDENTITYWITHOUTDTO_LIST',
  FETCH_MAPSIDCHILDENTITYWITHOUTDTO: 'mapsIdChildEntityWithoutDTO/FETCH_MAPSIDCHILDENTITYWITHOUTDTO',
  CREATE_MAPSIDCHILDENTITYWITHOUTDTO: 'mapsIdChildEntityWithoutDTO/CREATE_MAPSIDCHILDENTITYWITHOUTDTO',
  UPDATE_MAPSIDCHILDENTITYWITHOUTDTO: 'mapsIdChildEntityWithoutDTO/UPDATE_MAPSIDCHILDENTITYWITHOUTDTO',
  DELETE_MAPSIDCHILDENTITYWITHOUTDTO: 'mapsIdChildEntityWithoutDTO/DELETE_MAPSIDCHILDENTITYWITHOUTDTO',
  RESET: 'mapsIdChildEntityWithoutDTO/RESET'
};

const initialState = {
  loading: false,
  errorMessage: null,
  entities: [] as ReadonlyArray<IMapsIdChildEntityWithoutDTO>,
  entity: defaultValue,
  updating: false,
  updateSuccess: false
};

export type MapsIdChildEntityWithoutDTOState = Readonly<typeof initialState>;

// Reducer

export default (state: MapsIdChildEntityWithoutDTOState = initialState, action): MapsIdChildEntityWithoutDTOState => {
  switch (action.type) {
    case REQUEST(ACTION_TYPES.FETCH_MAPSIDCHILDENTITYWITHOUTDTO_LIST):
    case REQUEST(ACTION_TYPES.FETCH_MAPSIDCHILDENTITYWITHOUTDTO):
      return {
        ...state,
        errorMessage: null,
        updateSuccess: false,
        loading: true
      };
    case REQUEST(ACTION_TYPES.CREATE_MAPSIDCHILDENTITYWITHOUTDTO):
    case REQUEST(ACTION_TYPES.UPDATE_MAPSIDCHILDENTITYWITHOUTDTO):
    case REQUEST(ACTION_TYPES.DELETE_MAPSIDCHILDENTITYWITHOUTDTO):
      return {
        ...state,
        errorMessage: null,
        updateSuccess: false,
        updating: true
      };
    case FAILURE(ACTION_TYPES.FETCH_MAPSIDCHILDENTITYWITHOUTDTO_LIST):
    case FAILURE(ACTION_TYPES.FETCH_MAPSIDCHILDENTITYWITHOUTDTO):
    case FAILURE(ACTION_TYPES.CREATE_MAPSIDCHILDENTITYWITHOUTDTO):
    case FAILURE(ACTION_TYPES.UPDATE_MAPSIDCHILDENTITYWITHOUTDTO):
    case FAILURE(ACTION_TYPES.DELETE_MAPSIDCHILDENTITYWITHOUTDTO):
      return {
        ...state,
        loading: false,
        updating: false,
        updateSuccess: false,
        errorMessage: action.payload
      };
    case SUCCESS(ACTION_TYPES.FETCH_MAPSIDCHILDENTITYWITHOUTDTO_LIST):
      return {
        ...state,
        loading: false,
        entities: action.payload.data
      };
    case SUCCESS(ACTION_TYPES.FETCH_MAPSIDCHILDENTITYWITHOUTDTO):
      return {
        ...state,
        loading: false,
        entity: action.payload.data
      };
    case SUCCESS(ACTION_TYPES.CREATE_MAPSIDCHILDENTITYWITHOUTDTO):
    case SUCCESS(ACTION_TYPES.UPDATE_MAPSIDCHILDENTITYWITHOUTDTO):
      return {
        ...state,
        updating: false,
        updateSuccess: true,
        entity: action.payload.data
      };
    case SUCCESS(ACTION_TYPES.DELETE_MAPSIDCHILDENTITYWITHOUTDTO):
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

const apiUrl = 'api/maps-id-child-entity-without-dtos';

// Actions

export const getEntities: ICrudGetAllAction<IMapsIdChildEntityWithoutDTO> = (page, size, sort) => ({
  type: ACTION_TYPES.FETCH_MAPSIDCHILDENTITYWITHOUTDTO_LIST,
  payload: axios.get<IMapsIdChildEntityWithoutDTO>(`${apiUrl}?cacheBuster=${new Date().getTime()}`)
});

export const getEntity: ICrudGetAction<IMapsIdChildEntityWithoutDTO> = id => {
  const requestUrl = `${apiUrl}/${id}`;
  return {
    type: ACTION_TYPES.FETCH_MAPSIDCHILDENTITYWITHOUTDTO,
    payload: axios.get<IMapsIdChildEntityWithoutDTO>(requestUrl)
  };
};

export const createEntity: ICrudPutAction<IMapsIdChildEntityWithoutDTO> = entity => async dispatch => {
  const result = await dispatch({
    type: ACTION_TYPES.CREATE_MAPSIDCHILDENTITYWITHOUTDTO,
    payload: axios.post(apiUrl, cleanEntity(entity))
  });
  dispatch(getEntities());
  return result;
};

export const updateEntity: ICrudPutAction<IMapsIdChildEntityWithoutDTO> = entity => async dispatch => {
  const result = await dispatch({
    type: ACTION_TYPES.UPDATE_MAPSIDCHILDENTITYWITHOUTDTO,
    payload: axios.put(apiUrl, cleanEntity(entity))
  });
  dispatch(getEntities());
  return result;
};

export const deleteEntity: ICrudDeleteAction<IMapsIdChildEntityWithoutDTO> = id => async dispatch => {
  const requestUrl = `${apiUrl}/${id}`;
  const result = await dispatch({
    type: ACTION_TYPES.DELETE_MAPSIDCHILDENTITYWITHOUTDTO,
    payload: axios.delete(requestUrl)
  });
  dispatch(getEntities());
  return result;
};

export const reset = () => ({
  type: ACTION_TYPES.RESET
});
