import axios from 'axios';
import { ICrudGetAction, ICrudGetAllAction, ICrudPutAction, ICrudDeleteAction } from 'react-jhipster';

import { cleanEntity } from 'app/shared/util/entity-utils';
import { REQUEST, SUCCESS, FAILURE } from 'app/shared/reducers/action-type.util';

import { IFieldTestMapstructEntity, defaultValue } from 'app/shared/model/field-test-mapstruct-entity.model';

export const ACTION_TYPES = {
  FETCH_FIELDTESTMAPSTRUCTENTITY_LIST: 'fieldTestMapstructEntity/FETCH_FIELDTESTMAPSTRUCTENTITY_LIST',
  FETCH_FIELDTESTMAPSTRUCTENTITY: 'fieldTestMapstructEntity/FETCH_FIELDTESTMAPSTRUCTENTITY',
  CREATE_FIELDTESTMAPSTRUCTENTITY: 'fieldTestMapstructEntity/CREATE_FIELDTESTMAPSTRUCTENTITY',
  UPDATE_FIELDTESTMAPSTRUCTENTITY: 'fieldTestMapstructEntity/UPDATE_FIELDTESTMAPSTRUCTENTITY',
  DELETE_FIELDTESTMAPSTRUCTENTITY: 'fieldTestMapstructEntity/DELETE_FIELDTESTMAPSTRUCTENTITY',
  SET_BLOB: 'fieldTestMapstructEntity/SET_BLOB',
  RESET: 'fieldTestMapstructEntity/RESET'
};

const initialState = {
  loading: false,
  errorMessage: null,
  entities: [] as ReadonlyArray<IFieldTestMapstructEntity>,
  entity: defaultValue,
  updating: false,
  updateSuccess: false
};

export type FieldTestMapstructEntityState = Readonly<typeof initialState>;

// Reducer

export default (state: FieldTestMapstructEntityState = initialState, action): FieldTestMapstructEntityState => {
  switch (action.type) {
    case REQUEST(ACTION_TYPES.FETCH_FIELDTESTMAPSTRUCTENTITY_LIST):
    case REQUEST(ACTION_TYPES.FETCH_FIELDTESTMAPSTRUCTENTITY):
      return {
        ...state,
        errorMessage: null,
        updateSuccess: false,
        loading: true
      };
    case REQUEST(ACTION_TYPES.CREATE_FIELDTESTMAPSTRUCTENTITY):
    case REQUEST(ACTION_TYPES.UPDATE_FIELDTESTMAPSTRUCTENTITY):
    case REQUEST(ACTION_TYPES.DELETE_FIELDTESTMAPSTRUCTENTITY):
      return {
        ...state,
        errorMessage: null,
        updateSuccess: false,
        updating: true
      };
    case FAILURE(ACTION_TYPES.FETCH_FIELDTESTMAPSTRUCTENTITY_LIST):
    case FAILURE(ACTION_TYPES.FETCH_FIELDTESTMAPSTRUCTENTITY):
    case FAILURE(ACTION_TYPES.CREATE_FIELDTESTMAPSTRUCTENTITY):
    case FAILURE(ACTION_TYPES.UPDATE_FIELDTESTMAPSTRUCTENTITY):
    case FAILURE(ACTION_TYPES.DELETE_FIELDTESTMAPSTRUCTENTITY):
      return {
        ...state,
        loading: false,
        updating: false,
        updateSuccess: false,
        errorMessage: action.payload
      };
    case SUCCESS(ACTION_TYPES.FETCH_FIELDTESTMAPSTRUCTENTITY_LIST):
      return {
        ...state,
        loading: false,
        entities: action.payload.data
      };
    case SUCCESS(ACTION_TYPES.FETCH_FIELDTESTMAPSTRUCTENTITY):
      return {
        ...state,
        loading: false,
        entity: action.payload.data
      };
    case SUCCESS(ACTION_TYPES.CREATE_FIELDTESTMAPSTRUCTENTITY):
    case SUCCESS(ACTION_TYPES.UPDATE_FIELDTESTMAPSTRUCTENTITY):
      return {
        ...state,
        updating: false,
        updateSuccess: true,
        entity: action.payload.data
      };
    case SUCCESS(ACTION_TYPES.DELETE_FIELDTESTMAPSTRUCTENTITY):
      return {
        ...state,
        updating: false,
        updateSuccess: true,
        entity: {}
      };
    case ACTION_TYPES.SET_BLOB: {
      const { name, data, contentType } = action.payload;
      return {
        ...state,
        entity: {
          ...state.entity,
          [name]: data,
          [name + 'ContentType']: contentType
        }
      };
    }
    case ACTION_TYPES.RESET:
      return {
        ...initialState
      };
    default:
      return state;
  }
};

const apiUrl = 'api/field-test-mapstruct-entities';

// Actions

export const getEntities: ICrudGetAllAction<IFieldTestMapstructEntity> = (page, size, sort) => ({
  type: ACTION_TYPES.FETCH_FIELDTESTMAPSTRUCTENTITY_LIST,
  payload: axios.get<IFieldTestMapstructEntity>(`${apiUrl}?cacheBuster=${new Date().getTime()}`)
});

export const getEntity: ICrudGetAction<IFieldTestMapstructEntity> = id => {
  const requestUrl = `${apiUrl}/${id}`;
  return {
    type: ACTION_TYPES.FETCH_FIELDTESTMAPSTRUCTENTITY,
    payload: axios.get<IFieldTestMapstructEntity>(requestUrl)
  };
};

export const createEntity: ICrudPutAction<IFieldTestMapstructEntity> = entity => async dispatch => {
  const result = await dispatch({
    type: ACTION_TYPES.CREATE_FIELDTESTMAPSTRUCTENTITY,
    payload: axios.post(apiUrl, cleanEntity(entity))
  });
  dispatch(getEntities());
  return result;
};

export const updateEntity: ICrudPutAction<IFieldTestMapstructEntity> = entity => async dispatch => {
  const result = await dispatch({
    type: ACTION_TYPES.UPDATE_FIELDTESTMAPSTRUCTENTITY,
    payload: axios.put(apiUrl, cleanEntity(entity))
  });
  dispatch(getEntities());
  return result;
};

export const deleteEntity: ICrudDeleteAction<IFieldTestMapstructEntity> = id => async dispatch => {
  const requestUrl = `${apiUrl}/${id}`;
  const result = await dispatch({
    type: ACTION_TYPES.DELETE_FIELDTESTMAPSTRUCTENTITY,
    payload: axios.delete(requestUrl)
  });
  dispatch(getEntities());
  return result;
};

export const setBlob = (name, data, contentType?) => ({
  type: ACTION_TYPES.SET_BLOB,
  payload: {
    name,
    data,
    contentType
  }
});

export const reset = () => ({
  type: ACTION_TYPES.RESET
});
