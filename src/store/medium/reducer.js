import initialState from '../initialState';
import * as types from './types';

export default function(state = initialState.mediums, action) {
  switch (action.type) {
    case types.MEDIUM_LOADING:
      return {
        ...state,
        loading: action.isLoading,
      };
    case types.LOAD_MEDIUM_SUCCESS:
      return {
        ...state,
        posts: action.posts,
        loading: false,
      };
    default:
      return state;
  }
}
