import initialState from '../initialState';
import * as types from './types';

export default function(state = initialState.blogs, action) {
  switch (action.type) {
    case types.LOAD_BLOG_SUCCESS:
      return {
        ...state,
        posts: action.posts,
      };
    default:
      return state;
  }
}
