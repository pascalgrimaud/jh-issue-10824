import axios from 'axios';
import { ICrudGetAction, ICrudGetAllAction, ICrudPutAction, ICrudDeleteAction } from 'react-jhipster';

import { cleanEntity } from 'app/shared/util/entity-utils';
import { REQUEST, SUCCESS, FAILURE } from 'app/shared/reducers/action-type.util';

import { IMapsIdChildEntityWithDTO, defaultValue } from 'app/shared/model/maps-id-child-entity-with-dto.model';

export const ACTION_TYPES = {
  FETCH_MAPSIDCHILDENTITYWITHDTO_LIST: 'mapsIdChildEntityWithDTO/FETCH_MAPSIDCHILDENTITYWITHDTO_LIST',
  FETCH_MAPSIDCHILDENTITYWITHDTO: 'mapsIdChildEntityWithDTO/FETCH_MAPSIDCHILDENTITYWITHDTO',
  CREATE_MAPSIDCHILDENTITYWITHDTO: 'mapsIdChildEntityWithDTO/CREATE_MAPSIDCHILDENTITYWITHDTO',
  UPDATE_MAPSIDCHILDENTITYWITHDTO: 'mapsIdChildEntityWithDTO/UPDATE_MAPSIDCHILDENTITYWITHDTO',
  DELETE_MAPSIDCHILDENTITYWITHDTO: 'mapsIdChildEntityWithDTO/DELETE_MAPSIDCHILDENTITYWITHDTO',
  RESET: 'mapsIdChildEntityWithDTO/RESET'
};

const initialState = {
  loading: false,
  errorMessage: null,
  entities: [] as ReadonlyArray<IMapsIdChildEntityWithDTO>,
  entity: defaultValue,
  updating: false,
  updateSuccess: false
};

export type MapsIdChildEntityWithDTOState = Readonly<typeof initialState>;

// Reducer

export default (state: MapsIdChildEntityWithDTOState = initialState, action): MapsIdChildEntityWithDTOState => {
  switch (action.type) {
    case REQUEST(ACTION_TYPES.FETCH_MAPSIDCHILDENTITYWITHDTO_LIST):
    case REQUEST(ACTION_TYPES.FETCH_MAPSIDCHILDENTITYWITHDTO):
      return {
        ...state,
        errorMessage: null,
        updateSuccess: false,
        loading: true
      };
    case REQUEST(ACTION_TYPES.CREATE_MAPSIDCHILDENTITYWITHDTO):
    case REQUEST(ACTION_TYPES.UPDATE_MAPSIDCHILDENTITYWITHDTO):
    case REQUEST(ACTION_TYPES.DELETE_MAPSIDCHILDENTITYWITHDTO):
      return {
        ...state,
        errorMessage: null,
        updateSuccess: false,
        updating: true
      };
    case FAILURE(ACTION_TYPES.FETCH_MAPSIDCHILDENTITYWITHDTO_LIST):
    case FAILURE(ACTION_TYPES.FETCH_MAPSIDCHILDENTITYWITHDTO):
    case FAILURE(ACTION_TYPES.CREATE_MAPSIDCHILDENTITYWITHDTO):
    case FAILURE(ACTION_TYPES.UPDATE_MAPSIDCHILDENTITYWITHDTO):
    case FAILURE(ACTION_TYPES.DELETE_MAPSIDCHILDENTITYWITHDTO):
      return {
        ...state,
        loading: false,
        updating: false,
        updateSuccess: false,
        errorMessage: action.payload
      };
    case SUCCESS(ACTION_TYPES.FETCH_MAPSIDCHILDENTITYWITHDTO_LIST):
      return {
        ...state,
        loading: false,
        entities: action.payload.data
      };
    case SUCCESS(ACTION_TYPES.FETCH_MAPSIDCHILDENTITYWITHDTO):
      return {
        ...state,
        loading: false,
        entity: action.payload.data
      };
    case SUCCESS(ACTION_TYPES.CREATE_MAPSIDCHILDENTITYWITHDTO):
    case SUCCESS(ACTION_TYPES.UPDATE_MAPSIDCHILDENTITYWITHDTO):
      return {
        ...state,
        updating: false,
        updateSuccess: true,
        entity: action.payload.data
      };
    case SUCCESS(ACTION_TYPES.DELETE_MAPSIDCHILDENTITYWITHDTO):
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

const apiUrl = 'api/maps-id-child-entity-with-dtos';

// Actions

export const getEntities: ICrudGetAllAction<IMapsIdChildEntityWithDTO> = (page, size, sort) => ({
  type: ACTION_TYPES.FETCH_MAPSIDCHILDENTITYWITHDTO_LIST,
  payload: axios.get<IMapsIdChildEntityWithDTO>(`${apiUrl}?cacheBuster=${new Date().getTime()}`)
});

export const getEntity: ICrudGetAction<IMapsIdChildEntityWithDTO> = id => {
  const requestUrl = `${apiUrl}/${id}`;
  return {
    type: ACTION_TYPES.FETCH_MAPSIDCHILDENTITYWITHDTO,
    payload: axios.get<IMapsIdChildEntityWithDTO>(requestUrl)
  };
};

export const createEntity: ICrudPutAction<IMapsIdChildEntityWithDTO> = entity => async dispatch => {
  const result = await dispatch({
    type: ACTION_TYPES.CREATE_MAPSIDCHILDENTITYWITHDTO,
    payload: axios.post(apiUrl, cleanEntity(entity))
  });
  dispatch(getEntities());
  return result;
};

export const updateEntity: ICrudPutAction<IMapsIdChildEntityWithDTO> = entity => async dispatch => {
  const result = await dispatch({
    type: ACTION_TYPES.UPDATE_MAPSIDCHILDENTITYWITHDTO,
    payload: axios.put(apiUrl, cleanEntity(entity))
  });
  dispatch(getEntities());
  return result;
};

export const deleteEntity: ICrudDeleteAction<IMapsIdChildEntityWithDTO> = id => async dispatch => {
  const requestUrl = `${apiUrl}/${id}`;
  const result = await dispatch({
    type: ACTION_TYPES.DELETE_MAPSIDCHILDENTITYWITHDTO,
    payload: axios.delete(requestUrl)
  });
  dispatch(getEntities());
  return result;
};

export const reset = () => ({
  type: ACTION_TYPES.RESET
});
