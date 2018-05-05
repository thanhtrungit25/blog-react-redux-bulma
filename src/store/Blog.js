import * as contentful from 'contentful';
import * as actions from './blog/actions';

const client = contentful.createClient({
  space: 'spcwng43cfp1',
  accessToken:
    '3c4a374b63c19c010b795fd05903cd282fac1f68c5383d04e6563dca17c4ed7d',
});

export function loadBlog() {
  return dispatch => {
    dispatch(actions.blogLoading());
    return client
      .getEntries()
      .then(({ items }) => {
        dispatch(actions.loadBlogSuccess(items));
      })
      .catch(error => {
        console.log(error);
        dispatch(actions.blogLoading(false));
      });
  };
}
