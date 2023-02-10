import {
  GET_LIST_POST,
  GET_LIST_POST_SUCCESS,
  GET_LIST_POST_Detail,
  POST_LIST_POST,
  PUT_LIST_POST,
  DELETE_LIST_POST,
  POST_LIST_POST_SUCCESS,
  PUT_LIST_POST_SUCCESS,
  DELETE_LIST_POST_SUCCESS,
} from "./constant";

export const getListPost = (payload) => {
  return {
    type: GET_LIST_POST,
    payload,
  };
};

export const getListPostSuccess = (payload) => {
  return {
    type: GET_LIST_POST_SUCCESS,
    payload,
  };
};

export const getListPostDetail = (payload) => {
  return {
    type: GET_LIST_POST_Detail,
    payload,
  };
};

export const postListPosts = (payload) => {
  return {
    type: POST_LIST_POST,
    payload,
  };
};

export const putListPosts = (payload) => {
  return {
    type: PUT_LIST_POST,
    payload,
  };
};

export const deleteListPosts = (payload) => {
  return {
    type: DELETE_LIST_POST,
    payload,
  };
};

export const postListPostSuccess = (payload) => {
  return {
    type: POST_LIST_POST_SUCCESS,
    payload,
  };
};

export const putListPostsSuccess = (payload) => {
  return {
    type: PUT_LIST_POST_SUCCESS,
    payload,
  };
};

export const deletePostsSuccess = (payload) => {
  return {
    type: DELETE_LIST_POST_SUCCESS,
    payload,
  };
};
