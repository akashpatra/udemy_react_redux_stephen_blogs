import jsonPlaceHolder from '../apis/jsonplaceholder';

export const fetchPosts = () => {
  return function (dispatch, getState) {
    const response = jsonPlaceHolder.get('/posts');

    return {
      type: 'FETCH_POSTS',
      payload: response,
    };
  };
};
