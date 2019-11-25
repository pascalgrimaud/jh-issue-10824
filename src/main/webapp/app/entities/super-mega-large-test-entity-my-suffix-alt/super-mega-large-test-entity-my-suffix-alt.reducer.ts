import axios from 'axios';
import { ICrudGetAction, ICrudGetAllAction, ICrudPutAction, ICrudDeleteAction } from 'react-jhipster';

import { cleanEntity } from 'app/shared/util/entity-utils';
import { REQUEST, SUCCESS, FAILURE } from 'app/shared/reducers/action-type.util';

import { ISuperMegaLargeTestEntityMySuffixAlt, defaultValue } from 'app/shared/model/super-mega-large-test-entity-my-suffix-alt.model';

export const ACTION_TYPES = {
  FETCH_SUPERMEGALARGETESTENTITY_LIST: 'superMegaLargeTestEntity/FETCH_SUPERMEGALARGETESTENTITY_LIST',
  FETCH_SUPERMEGALARGETESTENTITY: 'superMegaLargeTestEntity/FETCH_SUPERMEGALARGETESTENTITY',
  CREATE_SUPERMEGALARGETESTENTITY: 'superMegaLargeTestEntity/CREATE_SUPERMEGALARGETESTENTITY',
  UPDATE_SUPERMEGALARGETESTENTITY: 'superMegaLargeTestEntity/UPDATE_SUPERMEGALARGETESTENTITY',
  DELETE_SUPERMEGALARGETESTENTITY: 'superMegaLargeTestEntity/DELETE_SUPERMEGALARGETESTENTITY',
  RESET: 'superMegaLargeTestEntity/RESET'
};

const initialState = {
  loading: false,
  errorMessage: null,
  entities: [] as ReadonlyArray<ISuperMegaLargeTestEntityMySuffixAlt>,
  entity: defaultValue,
  updating: false,
  updateSuccess: false
};

export type SuperMegaLargeTestEntityMySuffixAltState = Readonly<typeof initialState>;

// Reducer

export default (state: SuperMegaLargeTestEntityMySuffixAltState = initialState, action): SuperMegaLargeTestEntityMySuffixAltState => {
  switch (action.type) {
    case REQUEST(ACTION_TYPES.FETCH_SUPERMEGALARGETESTENTITY_LIST):
    case REQUEST(ACTION_TYPES.FETCH_SUPERMEGALARGETESTENTITY):
      return {
        ...state,
        errorMessage: null,
        updateSuccess: false,
        loading: true
      };
    case REQUEST(ACTION_TYPES.CREATE_SUPERMEGALARGETESTENTITY):
    case REQUEST(ACTION_TYPES.UPDATE_SUPERMEGALARGETESTENTITY):
    case REQUEST(ACTION_TYPES.DELETE_SUPERMEGALARGETESTENTITY):
      return {
        ...state,
        errorMessage: null,
        updateSuccess: false,
        updating: true
      };
    case FAILURE(ACTION_TYPES.FETCH_SUPERMEGALARGETESTENTITY_LIST):
    case FAILURE(ACTION_TYPES.FETCH_SUPERMEGALARGETESTENTITY):
    case FAILURE(ACTION_TYPES.CREATE_SUPERMEGALARGETESTENTITY):
    case FAILURE(ACTION_TYPES.UPDATE_SUPERMEGALARGETESTENTITY):
    case FAILURE(ACTION_TYPES.DELETE_SUPERMEGALARGETESTENTITY):
      return {
        ...state,
        loading: false,
        updating: false,
        updateSuccess: false,
        errorMessage: action.payload
      };
    case SUCCESS(ACTION_TYPES.FETCH_SUPERMEGALARGETESTENTITY_LIST):
      return {
        ...state,
        loading: false,
        entities: action.payload.data
      };
    case SUCCESS(ACTION_TYPES.FETCH_SUPERMEGALARGETESTENTITY):
      return {
        ...state,
        loading: false,
        entity: action.payload.data
      };
    case SUCCESS(ACTION_TYPES.CREATE_SUPERMEGALARGETESTENTITY):
    case SUCCESS(ACTION_TYPES.UPDATE_SUPERMEGALARGETESTENTITY):
      return {
        ...state,
        updating: false,
        updateSuccess: true,
        entity: action.payload.data
      };
    case SUCCESS(ACTION_TYPES.DELETE_SUPERMEGALARGETESTENTITY):
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

const apiUrl = 'api/super-mega-large-test-entities';

// Actions

export const getEntities: ICrudGetAllAction<ISuperMegaLargeTestEntityMySuffixAlt> = (page, size, sort) => ({
  type: ACTION_TYPES.FETCH_SUPERMEGALARGETESTENTITY_LIST,
  payload: axios.get<ISuperMegaLargeTestEntityMySuffixAlt>(`${apiUrl}?cacheBuster=${new Date().getTime()}`)
});

export const getEntity: ICrudGetAction<ISuperMegaLargeTestEntityMySuffixAlt> = id => {
  const requestUrl = `${apiUrl}/${id}`;
  return {
    type: ACTION_TYPES.FETCH_SUPERMEGALARGETESTENTITY,
    payload: axios.get<ISuperMegaLargeTestEntityMySuffixAlt>(requestUrl)
  };
};

export const createEntity: ICrudPutAction<ISuperMegaLargeTestEntityMySuffixAlt> = entity => async dispatch => {
  const result = await dispatch({
    type: ACTION_TYPES.CREATE_SUPERMEGALARGETESTENTITY,
    payload: axios.post(apiUrl, cleanEntity(entity))
  });
  dispatch(getEntities());
  return result;
};

export const updateEntity: ICrudPutAction<ISuperMegaLargeTestEntityMySuffixAlt> = entity => async dispatch => {
  const result = await dispatch({
    type: ACTION_TYPES.UPDATE_SUPERMEGALARGETESTENTITY,
    payload: axios.put(apiUrl, cleanEntity(entity))
  });
  dispatch(getEntities());
  return result;
};

export const deleteEntity: ICrudDeleteAction<ISuperMegaLargeTestEntityMySuffixAlt> = id => async dispatch => {
  const requestUrl = `${apiUrl}/${id}`;
  const result = await dispatch({
    type: ACTION_TYPES.DELETE_SUPERMEGALARGETESTENTITY,
    payload: axios.delete(requestUrl)
  });
  dispatch(getEntities());
  return result;
};

export const reset = () => ({
  type: ACTION_TYPES.RESET
});
