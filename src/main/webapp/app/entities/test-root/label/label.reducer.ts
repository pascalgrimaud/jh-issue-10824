import axios from 'axios';
import { ICrudGetAction, ICrudGetAllAction, ICrudPutAction, ICrudDeleteAction } from 'react-jhipster';

import { cleanEntity } from 'app/shared/util/entity-utils';
import { REQUEST, SUCCESS, FAILURE } from 'app/shared/reducers/action-type.util';

import { ILabel, defaultValue } from 'app/shared/model/test-root/label.model';

export const ACTION_TYPES = {
  FETCH_LABEL_LIST: 'label/FETCH_LABEL_LIST',
  FETCH_LABEL: 'label/FETCH_LABEL',
  RESET: 'label/RESET'
};

const initialState = {
  loading: false,
  errorMessage: null,
  entities: [] as ReadonlyArray<ILabel>,
  entity: defaultValue,
  updating: false,
  totalItems: 0,
  updateSuccess: false
};

export type LabelState = Readonly<typeof initialState>;

// Reducer

export default (state: LabelState = initialState, action): LabelState => {
  switch (action.type) {
    case REQUEST(ACTION_TYPES.FETCH_LABEL_LIST):
    case REQUEST(ACTION_TYPES.FETCH_LABEL):
      return {
        ...state,
        errorMessage: null,
        updateSuccess: false,
        loading: true
      };
    case FAILURE(ACTION_TYPES.FETCH_LABEL_LIST):
    case FAILURE(ACTION_TYPES.FETCH_LABEL):
      return {
        ...state,
        loading: false,
        updating: false,
        updateSuccess: false,
        errorMessage: action.payload
      };
    case SUCCESS(ACTION_TYPES.FETCH_LABEL_LIST):
      return {
        ...state,
        loading: false,
        entities: action.payload.data,
        totalItems: parseInt(action.payload.headers['x-total-count'], 10)
      };
    case SUCCESS(ACTION_TYPES.FETCH_LABEL):
      return {
        ...state,
        loading: false,
        entity: action.payload.data
      };
    case ACTION_TYPES.RESET:
      return {
        ...initialState
      };
    default:
      return state;
  }
};

const apiUrl = 'api/labels';

// Actions

export const getEntities: ICrudGetAllAction<ILabel> = (page, size, sort) => {
  const requestUrl = `${apiUrl}${sort ? `?page=${page}&size=${size}&sort=${sort}` : ''}`;
  return {
    type: ACTION_TYPES.FETCH_LABEL_LIST,
    payload: axios.get<ILabel>(`${requestUrl}${sort ? '&' : '?'}cacheBuster=${new Date().getTime()}`)
  };
};

export const getEntity: ICrudGetAction<ILabel> = id => {
  const requestUrl = `${apiUrl}/${id}`;
  return {
    type: ACTION_TYPES.FETCH_LABEL,
    payload: axios.get<ILabel>(requestUrl)
  };
};

export const reset = () => ({
  type: ACTION_TYPES.RESET
});
