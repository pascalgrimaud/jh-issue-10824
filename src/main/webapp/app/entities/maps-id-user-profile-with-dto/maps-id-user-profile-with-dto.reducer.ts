import axios from 'axios';
import { ICrudGetAction, ICrudGetAllAction, ICrudPutAction, ICrudDeleteAction } from 'react-jhipster';

import { cleanEntity } from 'app/shared/util/entity-utils';
import { REQUEST, SUCCESS, FAILURE } from 'app/shared/reducers/action-type.util';

import { IMapsIdUserProfileWithDTO, defaultValue } from 'app/shared/model/maps-id-user-profile-with-dto.model';

export const ACTION_TYPES = {
  FETCH_MAPSIDUSERPROFILEWITHDTO_LIST: 'mapsIdUserProfileWithDTO/FETCH_MAPSIDUSERPROFILEWITHDTO_LIST',
  FETCH_MAPSIDUSERPROFILEWITHDTO: 'mapsIdUserProfileWithDTO/FETCH_MAPSIDUSERPROFILEWITHDTO',
  CREATE_MAPSIDUSERPROFILEWITHDTO: 'mapsIdUserProfileWithDTO/CREATE_MAPSIDUSERPROFILEWITHDTO',
  UPDATE_MAPSIDUSERPROFILEWITHDTO: 'mapsIdUserProfileWithDTO/UPDATE_MAPSIDUSERPROFILEWITHDTO',
  DELETE_MAPSIDUSERPROFILEWITHDTO: 'mapsIdUserProfileWithDTO/DELETE_MAPSIDUSERPROFILEWITHDTO',
  RESET: 'mapsIdUserProfileWithDTO/RESET'
};

const initialState = {
  loading: false,
  errorMessage: null,
  entities: [] as ReadonlyArray<IMapsIdUserProfileWithDTO>,
  entity: defaultValue,
  updating: false,
  updateSuccess: false
};

export type MapsIdUserProfileWithDTOState = Readonly<typeof initialState>;

// Reducer

export default (state: MapsIdUserProfileWithDTOState = initialState, action): MapsIdUserProfileWithDTOState => {
  switch (action.type) {
    case REQUEST(ACTION_TYPES.FETCH_MAPSIDUSERPROFILEWITHDTO_LIST):
    case REQUEST(ACTION_TYPES.FETCH_MAPSIDUSERPROFILEWITHDTO):
      return {
        ...state,
        errorMessage: null,
        updateSuccess: false,
        loading: true
      };
    case REQUEST(ACTION_TYPES.CREATE_MAPSIDUSERPROFILEWITHDTO):
    case REQUEST(ACTION_TYPES.UPDATE_MAPSIDUSERPROFILEWITHDTO):
    case REQUEST(ACTION_TYPES.DELETE_MAPSIDUSERPROFILEWITHDTO):
      return {
        ...state,
        errorMessage: null,
        updateSuccess: false,
        updating: true
      };
    case FAILURE(ACTION_TYPES.FETCH_MAPSIDUSERPROFILEWITHDTO_LIST):
    case FAILURE(ACTION_TYPES.FETCH_MAPSIDUSERPROFILEWITHDTO):
    case FAILURE(ACTION_TYPES.CREATE_MAPSIDUSERPROFILEWITHDTO):
    case FAILURE(ACTION_TYPES.UPDATE_MAPSIDUSERPROFILEWITHDTO):
    case FAILURE(ACTION_TYPES.DELETE_MAPSIDUSERPROFILEWITHDTO):
      return {
        ...state,
        loading: false,
        updating: false,
        updateSuccess: false,
        errorMessage: action.payload
      };
    case SUCCESS(ACTION_TYPES.FETCH_MAPSIDUSERPROFILEWITHDTO_LIST):
      return {
        ...state,
        loading: false,
        entities: action.payload.data
      };
    case SUCCESS(ACTION_TYPES.FETCH_MAPSIDUSERPROFILEWITHDTO):
      return {
        ...state,
        loading: false,
        entity: action.payload.data
      };
    case SUCCESS(ACTION_TYPES.CREATE_MAPSIDUSERPROFILEWITHDTO):
    case SUCCESS(ACTION_TYPES.UPDATE_MAPSIDUSERPROFILEWITHDTO):
      return {
        ...state,
        updating: false,
        updateSuccess: true,
        entity: action.payload.data
      };
    case SUCCESS(ACTION_TYPES.DELETE_MAPSIDUSERPROFILEWITHDTO):
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

const apiUrl = 'api/maps-id-user-profile-with-dtos';

// Actions

export const getEntities: ICrudGetAllAction<IMapsIdUserProfileWithDTO> = (page, size, sort) => ({
  type: ACTION_TYPES.FETCH_MAPSIDUSERPROFILEWITHDTO_LIST,
  payload: axios.get<IMapsIdUserProfileWithDTO>(`${apiUrl}?cacheBuster=${new Date().getTime()}`)
});

export const getEntity: ICrudGetAction<IMapsIdUserProfileWithDTO> = id => {
  const requestUrl = `${apiUrl}/${id}`;
  return {
    type: ACTION_TYPES.FETCH_MAPSIDUSERPROFILEWITHDTO,
    payload: axios.get<IMapsIdUserProfileWithDTO>(requestUrl)
  };
};

export const createEntity: ICrudPutAction<IMapsIdUserProfileWithDTO> = entity => async dispatch => {
  const result = await dispatch({
    type: ACTION_TYPES.CREATE_MAPSIDUSERPROFILEWITHDTO,
    payload: axios.post(apiUrl, cleanEntity(entity))
  });
  dispatch(getEntities());
  return result;
};

export const updateEntity: ICrudPutAction<IMapsIdUserProfileWithDTO> = entity => async dispatch => {
  const result = await dispatch({
    type: ACTION_TYPES.UPDATE_MAPSIDUSERPROFILEWITHDTO,
    payload: axios.put(apiUrl, cleanEntity(entity))
  });
  dispatch(getEntities());
  return result;
};

export const deleteEntity: ICrudDeleteAction<IMapsIdUserProfileWithDTO> = id => async dispatch => {
  const requestUrl = `${apiUrl}/${id}`;
  const result = await dispatch({
    type: ACTION_TYPES.DELETE_MAPSIDUSERPROFILEWITHDTO,
    payload: axios.delete(requestUrl)
  });
  dispatch(getEntities());
  return result;
};

export const reset = () => ({
  type: ACTION_TYPES.RESET
});
