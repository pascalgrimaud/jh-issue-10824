import axios from 'axios';
import { ICrudGetAction, ICrudGetAllAction, ICrudPutAction, ICrudDeleteAction } from 'react-jhipster';

import { cleanEntity } from 'app/shared/util/entity-utils';
import { REQUEST, SUCCESS, FAILURE } from 'app/shared/reducers/action-type.util';

import { IBankAccountMySuffix, defaultValue } from 'app/shared/model/test-root/bank-account-my-suffix.model';

export const ACTION_TYPES = {
  FETCH_BANKACCOUNT_LIST: 'bankAccount/FETCH_BANKACCOUNT_LIST',
  FETCH_BANKACCOUNT: 'bankAccount/FETCH_BANKACCOUNT',
  CREATE_BANKACCOUNT: 'bankAccount/CREATE_BANKACCOUNT',
  UPDATE_BANKACCOUNT: 'bankAccount/UPDATE_BANKACCOUNT',
  DELETE_BANKACCOUNT: 'bankAccount/DELETE_BANKACCOUNT',
  SET_BLOB: 'bankAccount/SET_BLOB',
  RESET: 'bankAccount/RESET'
};

const initialState = {
  loading: false,
  errorMessage: null,
  entities: [] as ReadonlyArray<IBankAccountMySuffix>,
  entity: defaultValue,
  updating: false,
  updateSuccess: false
};

export type BankAccountMySuffixState = Readonly<typeof initialState>;

// Reducer

export default (state: BankAccountMySuffixState = initialState, action): BankAccountMySuffixState => {
  switch (action.type) {
    case REQUEST(ACTION_TYPES.FETCH_BANKACCOUNT_LIST):
    case REQUEST(ACTION_TYPES.FETCH_BANKACCOUNT):
      return {
        ...state,
        errorMessage: null,
        updateSuccess: false,
        loading: true
      };
    case REQUEST(ACTION_TYPES.CREATE_BANKACCOUNT):
    case REQUEST(ACTION_TYPES.UPDATE_BANKACCOUNT):
    case REQUEST(ACTION_TYPES.DELETE_BANKACCOUNT):
      return {
        ...state,
        errorMessage: null,
        updateSuccess: false,
        updating: true
      };
    case FAILURE(ACTION_TYPES.FETCH_BANKACCOUNT_LIST):
    case FAILURE(ACTION_TYPES.FETCH_BANKACCOUNT):
    case FAILURE(ACTION_TYPES.CREATE_BANKACCOUNT):
    case FAILURE(ACTION_TYPES.UPDATE_BANKACCOUNT):
    case FAILURE(ACTION_TYPES.DELETE_BANKACCOUNT):
      return {
        ...state,
        loading: false,
        updating: false,
        updateSuccess: false,
        errorMessage: action.payload
      };
    case SUCCESS(ACTION_TYPES.FETCH_BANKACCOUNT_LIST):
      return {
        ...state,
        loading: false,
        entities: action.payload.data
      };
    case SUCCESS(ACTION_TYPES.FETCH_BANKACCOUNT):
      return {
        ...state,
        loading: false,
        entity: action.payload.data
      };
    case SUCCESS(ACTION_TYPES.CREATE_BANKACCOUNT):
    case SUCCESS(ACTION_TYPES.UPDATE_BANKACCOUNT):
      return {
        ...state,
        updating: false,
        updateSuccess: true,
        entity: action.payload.data
      };
    case SUCCESS(ACTION_TYPES.DELETE_BANKACCOUNT):
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

const apiUrl = 'api/bank-accounts';

// Actions

export const getEntities: ICrudGetAllAction<IBankAccountMySuffix> = (page, size, sort) => ({
  type: ACTION_TYPES.FETCH_BANKACCOUNT_LIST,
  payload: axios.get<IBankAccountMySuffix>(`${apiUrl}?cacheBuster=${new Date().getTime()}`)
});

export const getEntity: ICrudGetAction<IBankAccountMySuffix> = id => {
  const requestUrl = `${apiUrl}/${id}`;
  return {
    type: ACTION_TYPES.FETCH_BANKACCOUNT,
    payload: axios.get<IBankAccountMySuffix>(requestUrl)
  };
};

export const createEntity: ICrudPutAction<IBankAccountMySuffix> = entity => async dispatch => {
  const result = await dispatch({
    type: ACTION_TYPES.CREATE_BANKACCOUNT,
    payload: axios.post(apiUrl, cleanEntity(entity))
  });
  dispatch(getEntities());
  return result;
};

export const updateEntity: ICrudPutAction<IBankAccountMySuffix> = entity => async dispatch => {
  const result = await dispatch({
    type: ACTION_TYPES.UPDATE_BANKACCOUNT,
    payload: axios.put(apiUrl, cleanEntity(entity))
  });
  dispatch(getEntities());
  return result;
};

export const deleteEntity: ICrudDeleteAction<IBankAccountMySuffix> = id => async dispatch => {
  const requestUrl = `${apiUrl}/${id}`;
  const result = await dispatch({
    type: ACTION_TYPES.DELETE_BANKACCOUNT,
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
