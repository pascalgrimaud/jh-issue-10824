import axios from 'axios';
import { ICrudGetAction, ICrudGetAllAction, ICrudPutAction, ICrudDeleteAction } from 'react-jhipster';

import { cleanEntity } from 'app/shared/util/entity-utils';
import { REQUEST, SUCCESS, FAILURE } from 'app/shared/reducers/action-type.util';

import { IMapsIdParentEntityWithoutDTO, defaultValue } from 'app/shared/model/maps-id-parent-entity-without-dto.model';

export const ACTION_TYPES = {
  FETCH_MAPSIDPARENTENTITYWITHOUTDTO_LIST: 'mapsIdParentEntityWithoutDTO/FETCH_MAPSIDPARENTENTITYWITHOUTDTO_LIST',
  FETCH_MAPSIDPARENTENTITYWITHOUTDTO: 'mapsIdParentEntityWithoutDTO/FETCH_MAPSIDPARENTENTITYWITHOUTDTO',
  CREATE_MAPSIDPARENTENTITYWITHOUTDTO: 'mapsIdParentEntityWithoutDTO/CREATE_MAPSIDPARENTENTITYWITHOUTDTO',
  UPDATE_MAPSIDPARENTENTITYWITHOUTDTO: 'mapsIdParentEntityWithoutDTO/UPDATE_MAPSIDPARENTENTITYWITHOUTDTO',
  DELETE_MAPSIDPARENTENTITYWITHOUTDTO: 'mapsIdParentEntityWithoutDTO/DELETE_MAPSIDPARENTENTITYWITHOUTDTO',
  RESET: 'mapsIdParentEntityWithoutDTO/RESET'
};

const initialState = {
  loading: false,
  errorMessage: null,
  entities: [] as ReadonlyArray<IMapsIdParentEntityWithoutDTO>,
  entity: defaultValue,
  updating: false,
  updateSuccess: false
};

export type MapsIdParentEntityWithoutDTOState = Readonly<typeof initialState>;

// Reducer

export default (state: MapsIdParentEntityWithoutDTOState = initialState, action): MapsIdParentEntityWithoutDTOState => {
  switch (action.type) {
    case REQUEST(ACTION_TYPES.FETCH_MAPSIDPARENTENTITYWITHOUTDTO_LIST):
    case REQUEST(ACTION_TYPES.FETCH_MAPSIDPARENTENTITYWITHOUTDTO):
      return {
        ...state,
        errorMessage: null,
        updateSuccess: false,
        loading: true
      };
    case REQUEST(ACTION_TYPES.CREATE_MAPSIDPARENTENTITYWITHOUTDTO):
    case REQUEST(ACTION_TYPES.UPDATE_MAPSIDPARENTENTITYWITHOUTDTO):
    case REQUEST(ACTION_TYPES.DELETE_MAPSIDPARENTENTITYWITHOUTDTO):
      return {
        ...state,
        errorMessage: null,
        updateSuccess: false,
        updating: true
      };
    case FAILURE(ACTION_TYPES.FETCH_MAPSIDPARENTENTITYWITHOUTDTO_LIST):
    case FAILURE(ACTION_TYPES.FETCH_MAPSIDPARENTENTITYWITHOUTDTO):
    case FAILURE(ACTION_TYPES.CREATE_MAPSIDPARENTENTITYWITHOUTDTO):
    case FAILURE(ACTION_TYPES.UPDATE_MAPSIDPARENTENTITYWITHOUTDTO):
    case FAILURE(ACTION_TYPES.DELETE_MAPSIDPARENTENTITYWITHOUTDTO):
      return {
        ...state,
        loading: false,
        updating: false,
        updateSuccess: false,
        errorMessage: action.payload
      };
    case SUCCESS(ACTION_TYPES.FETCH_MAPSIDPARENTENTITYWITHOUTDTO_LIST):
      return {
        ...state,
        loading: false,
        entities: action.payload.data
      };
    case SUCCESS(ACTION_TYPES.FETCH_MAPSIDPARENTENTITYWITHOUTDTO):
      return {
        ...state,
        loading: false,
        entity: action.payload.data
      };
    case SUCCESS(ACTION_TYPES.CREATE_MAPSIDPARENTENTITYWITHOUTDTO):
    case SUCCESS(ACTION_TYPES.UPDATE_MAPSIDPARENTENTITYWITHOUTDTO):
      return {
        ...state,
        updating: false,
        updateSuccess: true,
        entity: action.payload.data
      };
    case SUCCESS(ACTION_TYPES.DELETE_MAPSIDPARENTENTITYWITHOUTDTO):
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

const apiUrl = 'api/maps-id-parent-entity-without-dtos';

// Actions

export const getEntities: ICrudGetAllAction<IMapsIdParentEntityWithoutDTO> = (page, size, sort) => ({
  type: ACTION_TYPES.FETCH_MAPSIDPARENTENTITYWITHOUTDTO_LIST,
  payload: axios.get<IMapsIdParentEntityWithoutDTO>(`${apiUrl}?cacheBuster=${new Date().getTime()}`)
});

export const getEntity: ICrudGetAction<IMapsIdParentEntityWithoutDTO> = id => {
  const requestUrl = `${apiUrl}/${id}`;
  return {
    type: ACTION_TYPES.FETCH_MAPSIDPARENTENTITYWITHOUTDTO,
    payload: axios.get<IMapsIdParentEntityWithoutDTO>(requestUrl)
  };
};

export const createEntity: ICrudPutAction<IMapsIdParentEntityWithoutDTO> = entity => async dispatch => {
  const result = await dispatch({
    type: ACTION_TYPES.CREATE_MAPSIDPARENTENTITYWITHOUTDTO,
    payload: axios.post(apiUrl, cleanEntity(entity))
  });
  dispatch(getEntities());
  return result;
};

export const updateEntity: ICrudPutAction<IMapsIdParentEntityWithoutDTO> = entity => async dispatch => {
  const result = await dispatch({
    type: ACTION_TYPES.UPDATE_MAPSIDPARENTENTITYWITHOUTDTO,
    payload: axios.put(apiUrl, cleanEntity(entity))
  });
  dispatch(getEntities());
  return result;
};

export const deleteEntity: ICrudDeleteAction<IMapsIdParentEntityWithoutDTO> = id => async dispatch => {
  const requestUrl = `${apiUrl}/${id}`;
  const result = await dispatch({
    type: ACTION_TYPES.DELETE_MAPSIDPARENTENTITYWITHOUTDTO,
    payload: axios.delete(requestUrl)
  });
  dispatch(getEntities());
  return result;
};

export const reset = () => ({
  type: ACTION_TYPES.RESET
});
