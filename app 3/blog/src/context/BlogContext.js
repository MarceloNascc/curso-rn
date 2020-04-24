import createDataContext from './createDataContext';
import jsonServer from '../api/jsonServer';

const blogReducer = (state, action) => {
  switch (action.type) {
    case 'get':
      return action.payload;

    // case 'add':
    //   return [...state, action.payload];

    case 'delete':
      return state.filter((blogPost) => blogPost.id !== action.payload);

    case 'edit':
      return state.map((blogPost) => {
        return blogPost.id !== action.payload.id ? blogPost : action.payload;
      });

    default:
      return state;
  }
};

const getBlogPosts = (dispatch) => {
  return async () => {
    const response = await jsonServer.get('/blogposts');

    dispatch({ type: 'get', payload: response.data });
  };
};

const addBlogPost = (dispatch) => {
  return async (newBlogPost, callback) => {
    /*const response = */await jsonServer.post('/blogposts', newBlogPost);

    // dispatch({ type: 'add', payload: response.data });
    callback();
  };
};

const deleteBlogPost = (dispatch) => {
  return async (id) => {
    await jsonServer.delete(`/blogposts/${id}`);

    dispatch({ type: 'delete', payload: id });
  };
};

const editBlogPost = (dispatch) => {
  return async (editedBlogPost, callback) => {
    await jsonServer.put(`/blogposts/${editedBlogPost.id}`, editedBlogPost);

    dispatch({ type: 'edit', payload: editedBlogPost });
    callback();
  };
};

export const { Context, Provider } = createDataContext(
  blogReducer,
  { addBlogPost, deleteBlogPost, editBlogPost, getBlogPosts },
  []
);