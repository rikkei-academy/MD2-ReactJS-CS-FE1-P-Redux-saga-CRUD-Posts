import axios from "axios";

export const getPostData = () => {
  return axios.get("https://jsonplaceholder.typicode.com/posts");
};

export const getPostDetailData = (id) => {
  return axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
};

export const postPostsDataAPI = (data) => {
  return axios.post(`https://jsonplaceholder.typicode.com/posts`, data);
};

export const putPostsDataAPI = (data) => {
  return axios.put(
    `https://jsonplaceholder.typicode.com/posts/${data.id}`,
    data
  );
};

export const deletePostsDataAPI = (id) => {
  return axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`);
};
