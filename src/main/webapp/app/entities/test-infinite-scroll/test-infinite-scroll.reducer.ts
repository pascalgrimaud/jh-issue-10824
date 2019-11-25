import axios from 'axios';
import {
  parseHeaderForLinks,
  loadMoreDataWhenScrolled,
  ICrudGetAction,
  ICrudGetAllAction,
  ICrudPutAction,
  ICrudDeleteAction
} from 'react-jhipster';

import { cleanEntity } from 'app/shared/util/entity-utils';
import { REQUEST, SUCCESS, FAILURE } from 'app/shared/reducers/action-type.util';

import { ITestInfiniteScroll, defaultValue } from 'app/shared/model/test-infinite-scroll.model';

export const ACTION_TYPES = {
  FETCH_TESTINFINITESCROLL_LIST: 'testInfiniteScroll/FETCH_TESTINFINITESCROLL_LIST',
  FETCH_TESTINFINITESCROLL: 'testInfiniteScroll/FETCH_TESTINFINITESCROLL',
  CREATE_TESTINFINITESCROLL: 'testInfiniteScroll/CREATE_TESTINFINITESCROLL',
  UPDATE_TESTINFINITESCROLL: 'testInfiniteScroll/UPDATE_TESTINFINITESCROLL',
  DELETE_TESTINFINITESCROLL: 'testInfiniteScroll/DELETE_TESTINFINITESCROLL',
  RESET: 'testInfiniteScroll/RESET'
};

const initialState = {
  loading: false,
  errorMessage: null,
  entities: [] as ReadonlyArray<ITestInfiniteScroll>,
  entity: defaultValue,
  links: { next: 0 },
  updating: false,
  totalItems: 0,
  updateSuccess: false
};

export type TestInfiniteScrollState = Readonly<typeof initialState>;

// Reducer

export default (state: TestInfiniteScrollState = initialState, action): TestInfiniteScrollState => {
  switch (action.type) {
    case REQUEST(ACTION_TYPES.FETCH_TESTINFINITESCROLL_LIST):
    case REQUEST(ACTION_TYPES.FETCH_TESTINFINITESCROLL):
      return {
        ...state,
        errorMessage: null,
        updateSuccess: false,
        loading: true
      };
    case REQUEST(ACTION_TYPES.CREATE_TESTINFINITESCROLL):
    case REQUEST(ACTION_TYPES.UPDATE_TESTINFINITESCROLL):
    case REQUEST(ACTION_TYPES.DELETE_TESTINFINITESCROLL):
      return {
        ...state,
        errorMessage: null,
        updateSuccess: false,
        updating: true
      };
    case FAILURE(ACTION_TYPES.FETCH_TESTINFINITESCROLL_LIST):
    case FAILURE(ACTION_TYPES.FETCH_TESTINFINITESCROLL):
    case FAILURE(ACTION_TYPES.CREATE_TESTINFINITESCROLL):
    case FAILURE(ACTION_TYPES.UPDATE_TESTINFINITESCROLL):
    case FAILURE(ACTION_TYPES.DELETE_TESTINFINITESCROLL):
      return {
        ...state,
        loading: false,
        updating: false,
        updateSuccess: false,
        errorMessage: action.payload
      };
    case SUCCESS(ACTION_TYPES.FETCH_TESTINFINITESCROLL_LIST): {
      const links = parseHeaderForLinks(action.payload.headers.link);

      return {
        ...state,
        loading: false,
        links,
        entities: loadMoreDataWhenScrolled(state.entities, action.payload.data, links),
        totalItems: parseInt(action.payload.headers['x-total-count'], 10)
      };
    }
    case SUCCESS(ACTION_TYPES.FETCH_TESTINFINITESCROLL):
      return {
        ...state,
        loading: false,
        entity: action.payload.data
      };
    case SUCCESS(ACTION_TYPES.CREATE_TESTINFINITESCROLL):
    case SUCCESS(ACTION_TYPES.UPDATE_TESTINFINITESCROLL):
      return {
        ...state,
        updating: false,
        updateSuccess: true,
        entity: action.payload.data
      };
    case SUCCESS(ACTION_TYPES.DELETE_TESTINFINITESCROLL):
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

const apiUrl = 'api/test-infinite-scrolls';

// Actions

export const getEntities: ICrudGetAllAction<ITestInfiniteScroll> = (page, size, sort) => {
  const requestUrl = `${apiUrl}${sort ? `?page=${page}&size=${size}&sort=${sort}` : ''}`;
  return {
    type: ACTION_TYPES.FETCH_TESTINFINITESCROLL_LIST,
    payload: axios.get<ITestInfiniteScroll>(`${requestUrl}${sort ? '&' : '?'}cacheBuster=${new Date().getTime()}`)
  };
};

export const getEntity: ICrudGetAction<ITestInfiniteScroll> = id => {
  const requestUrl = `${apiUrl}/${id}`;
  return {
    type: ACTION_TYPES.FETCH_TESTINFINITESCROLL,
    payload: axios.get<ITestInfiniteScroll>(requestUrl)
  };
};

export const createEntity: ICrudPutAction<ITestInfiniteScroll> = entity => async dispatch => {
  const result = await dispatch({
    type: ACTION_TYPES.CREATE_TESTINFINITESCROLL,
    payload: axios.post(apiUrl, cleanEntity(entity))
  });
  return result;
};

export const updateEntity: ICrudPutAction<ITestInfiniteScroll> = entity => async dispatch => {
  const result = await dispatch({
    type: ACTION_TYPES.UPDATE_TESTINFINITESCROLL,
    payload: axios.put(apiUrl, cleanEntity(entity))
  });
  return result;
};

export const deleteEntity: ICrudDeleteAction<ITestInfiniteScroll> = id => async dispatch => {
  const requestUrl = `${apiUrl}/${id}`;
  const result = await dispatch({
    type: ACTION_TYPES.DELETE_TESTINFINITESCROLL,
    payload: axios.delete(requestUrl)
  });
  return result;
};

export const reset = () => ({
  type: ACTION_TYPES.RESET
});
