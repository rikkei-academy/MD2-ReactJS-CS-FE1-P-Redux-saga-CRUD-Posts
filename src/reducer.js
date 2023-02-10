import {
  GET_LIST_POST,
  GET_LIST_POST_SUCCESS,
  POST_LIST_POST_SUCCESS,
  PUT_LIST_POST_SUCCESS,
  DELETE_LIST_POST_SUCCESS,
} from "./constant";

const INITIAL_STATE = {
  posts: [],
  load: false,
};

const postsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_LIST_POST:
      return {
        ...state,
        load: true,
      };
    case GET_LIST_POST_SUCCESS:
      const { data } = action.payload;
      console.log(data);
      return {
        ...state,
        posts: data,
        load: false,
      };
    case POST_LIST_POST_SUCCESS:
      const payload = action.payload;
      return {
        ...state,
        posts: [...state.posts, payload],
      };
    case PUT_LIST_POST_SUCCESS:
      const newPostList = state.posts.map((item) => {
        if (item.id === action.payload.id) {
          item.title = action.payload.title;
        }
        return item;
      });
      return {
        ...state,
        posts: [...newPostList],
      };
    case DELETE_LIST_POST_SUCCESS:
      const newPostListAffterDelete = state.posts.filter(
        (item) => item.id !== action.payload
      );
      return {
        ...state,
        posts: [...newPostListAffterDelete],
      };
    default:
      return state;
  }
};
export default postsReducer;
