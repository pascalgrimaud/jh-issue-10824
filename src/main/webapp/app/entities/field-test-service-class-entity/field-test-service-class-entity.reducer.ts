import axios from 'axios';
import { ICrudGetAction, ICrudGetAllAction, ICrudPutAction, ICrudDeleteAction } from 'react-jhipster';

import { cleanEntity } from 'app/shared/util/entity-utils';
import { REQUEST, SUCCESS, FAILURE } from 'app/shared/reducers/action-type.util';

import { IFieldTestServiceClassEntity, defaultValue } from 'app/shared/model/field-test-service-class-entity.model';

export const ACTION_TYPES = {
  FETCH_FIELDTESTSERVICECLASSENTITY_LIST: 'fieldTestServiceClassEntity/FETCH_FIELDTESTSERVICECLASSENTITY_LIST',
  FETCH_FIELDTESTSERVICECLASSENTITY: 'fieldTestServiceClassEntity/FETCH_FIELDTESTSERVICECLASSENTITY',
  CREATE_FIELDTESTSERVICECLASSENTITY: 'fieldTestServiceClassEntity/CREATE_FIELDTESTSERVICECLASSENTITY',
  UPDATE_FIELDTESTSERVICECLASSENTITY: 'fieldTestServiceClassEntity/UPDATE_FIELDTESTSERVICECLASSENTITY',
  DELETE_FIELDTESTSERVICECLASSENTITY: 'fieldTestServiceClassEntity/DELETE_FIELDTESTSERVICECLASSENTITY',
  SET_BLOB: 'fieldTestServiceClassEntity/SET_BLOB',
  RESET: 'fieldTestServiceClassEntity/RESET'
};

const initialState = {
  loading: false,
  errorMessage: null,
  entities: [] as ReadonlyArray<IFieldTestServiceClassEntity>,
  entity: defaultValue,
  updating: false,
  updateSuccess: false
};

export type FieldTestServiceClassEntityState = Readonly<typeof initialState>;

// Reducer

export default (state: FieldTestServiceClassEntityState = initialState, action): FieldTestServiceClassEntityState => {
  switch (action.type) {
    case REQUEST(ACTION_TYPES.FETCH_FIELDTESTSERVICECLASSENTITY_LIST):
    case REQUEST(ACTION_TYPES.FETCH_FIELDTESTSERVICECLASSENTITY):
      return {
        ...state,
        errorMessage: null,
        updateSuccess: false,
        loading: true
      };
    case REQUEST(ACTION_TYPES.CREATE_FIELDTESTSERVICECLASSENTITY):
    case REQUEST(ACTION_TYPES.UPDATE_FIELDTESTSERVICECLASSENTITY):
    case REQUEST(ACTION_TYPES.DELETE_FIELDTESTSERVICECLASSENTITY):
      return {
        ...state,
        errorMessage: null,
        updateSuccess: false,
        updating: true
      };
    case FAILURE(ACTION_TYPES.FETCH_FIELDTESTSERVICECLASSENTITY_LIST):
    case FAILURE(ACTION_TYPES.FETCH_FIELDTESTSERVICECLASSENTITY):
    case FAILURE(ACTION_TYPES.CREATE_FIELDTESTSERVICECLASSENTITY):
    case FAILURE(ACTION_TYPES.UPDATE_FIELDTESTSERVICECLASSENTITY):
    case FAILURE(ACTION_TYPES.DELETE_FIELDTESTSERVICECLASSENTITY):
      return {
        ...state,
        loading: false,
        updating: false,
        updateSuccess: false,
        errorMessage: action.payload
      };
    case SUCCESS(ACTION_TYPES.FETCH_FIELDTESTSERVICECLASSENTITY_LIST):
      return {
        ...state,
        loading: false,
        entities: action.payload.data
      };
    case SUCCESS(ACTION_TYPES.FETCH_FIELDTESTSERVICECLASSENTITY):
      return {
        ...state,
        loading: false,
        entity: action.payload.data
      };
    case SUCCESS(ACTION_TYPES.CREATE_FIELDTESTSERVICECLASSENTITY):
    case SUCCESS(ACTION_TYPES.UPDATE_FIELDTESTSERVICECLASSENTITY):
      return {
        ...state,
        updating: false,
        updateSuccess: true,
        entity: action.payload.data
      };
    case SUCCESS(ACTION_TYPES.DELETE_FIELDTESTSERVICECLASSENTITY):
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

const apiUrl = 'api/field-test-service-class-entities';

// Actions

export const getEntities: ICrudGetAllAction<IFieldTestServiceClassEntity> = (page, size, sort) => ({
  type: ACTION_TYPES.FETCH_FIELDTESTSERVICECLASSENTITY_LIST,
  payload: axios.get<IFieldTestServiceClassEntity>(`${apiUrl}?cacheBuster=${new Date().getTime()}`)
});

export const getEntity: ICrudGetAction<IFieldTestServiceClassEntity> = id => {
  const requestUrl = `${apiUrl}/${id}`;
  return {
    type: ACTION_TYPES.FETCH_FIELDTESTSERVICECLASSENTITY,
    payload: axios.get<IFieldTestServiceClassEntity>(requestUrl)
  };
};

export const createEntity: ICrudPutAction<IFieldTestServiceClassEntity> = entity => async dispatch => {
  const result = await dispatch({
    type: ACTION_TYPES.CREATE_FIELDTESTSERVICECLASSENTITY,
    payload: axios.post(apiUrl, cleanEntity(entity))
  });
  dispatch(getEntities());
  return result;
};

export const updateEntity: ICrudPutAction<IFieldTestServiceClassEntity> = entity => async dispatch => {
  const result = await dispatch({
    type: ACTION_TYPES.UPDATE_FIELDTESTSERVICECLASSENTITY,
    payload: axios.put(apiUrl, cleanEntity(entity))
  });
  dispatch(getEntities());
  return result;
};

export const deleteEntity: ICrudDeleteAction<IFieldTestServiceClassEntity> = id => async dispatch => {
  const requestUrl = `${apiUrl}/${id}`;
  const result = await dispatch({
    type: ACTION_TYPES.DELETE_FIELDTESTSERVICECLASSENTITY,
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
