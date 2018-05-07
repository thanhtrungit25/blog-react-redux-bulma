import axios from 'axios';
import * as actions from './medium/actions';

const fetchPosts = () =>
  axios.get(
    `https://cors.now.sh/https://us-central1-aaronklaser-1.cloudfunctions.net/medium?username=@aaron.klaser`,
  );

const setPosts = ({ data }) =>
  Object.values(data.payload.references.Post).map(
    ({ id, title, createdAt, virtuals, uniqueSlug }) =>
      Object.assign(
        {},
        {
          id,
          title,
          createdAt,
          subtitle: virtuals.subtitle,
          image: virtuals.previewImage.imageId
            ? `https://cdn-images-1.medium.com/max/800/${
                virtuals.previewImage.imageId
              }`
            : null,
          url: `https://medium.com/@aaron.klaser/${uniqueSlug}`,
        },
      ),
  );

export const fetchMedium = () => async dispatch => {
  dispatch(actions.mediumLoading());
  const data = await fetchPosts();
  return dispatch(actions.loadMediumSuccess(setPosts(data)));
};
