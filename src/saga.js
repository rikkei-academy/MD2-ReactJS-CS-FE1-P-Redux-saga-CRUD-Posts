import { call, put, takeLatest } from "redux-saga/effects";

import {
  getPostData,
  getPostDetailData,
  postPostsDataAPI,
  putPostsDataAPI,
  deletePostsDataAPI,
} from "./postsAPI";
import {
  getListPostSuccess,
  postListPostSuccess,
  putListPostsSuccess,
  deletePostsSuccess,
} from "./action";
import {
  GET_LIST_POST,
  GET_LIST_POST_Detail,
  GET_LIST_POST_SUCCESS,
  POST_LIST_POST,
  PUT_LIST_POST,
  DELETE_LIST_POST,
} from "./constant";

function* getListPostSaga(action) {
  try {
    // goi ra ngoai saga
    const data = yield call(getPostData);
    // put đẩy them action vào saga
    yield put(getListPostSuccess(data));
  } catch (error) {
    //handle error
    console.log((err) => console.log(err));
  }
}

function* getListPostSuccessSaga(action) {
  console.log("success");
}
function* getListPostDetailSuccess(action) {
  console.log("success");
}
function* getListPostDetailSaga(action) {
  try {
    // Gọi ra ngoài saga
    const data = yield call(getPostDetailData(action.payload.data.id));
    console.log(action);
    yield action.payload.onSuccess(data);

    // Put đẩy thêm action vào saga
    yield put(getListPostDetailSuccess(data));
  } catch (error) {
    //handle error
    console.log((err) => console.log(err));
  }
}

//
// }

function* postPostsData(action) {
  const { payload } = action;
  try {
    // goi ra ngoai sage
    const res = yield call(postPostsDataAPI, payload.data);
    if (res.status === 201) {
      yield payload.onSuccess(res);
      yield put(postListPostSuccess(res.data));
    }
  } catch (error) {
    console.log(error);
  }
}

function* putPostsData(action) {
  const { payload } = action;
  try {
    // goi ra ngoai sage
    const res = yield call(putPostsDataAPI, payload.data);
    // put đẩy them action vào sagae
    yield put(putListPostsSuccess(res.data));
  } catch (error) {
    //handle error
    console.log((err) => console.log(err));
  }
}

function* deletePostsData(action) {
  console.log("delete");

  const { payload } = action;
  try {
    console.log("res 1");
    // Gọi ra ngoài saga
    const res = yield call(deletePostsDataAPI, payload.id);

    if (res.status === 200) {
      yield payload.onSuccess(res);
      yield put(deletePostsSuccess(payload.id));
    }
  } catch (error) {
    //handle error
    console.log(error);
  }
}

function* postsSaga() {
  yield takeLatest(GET_LIST_POST, getListPostSaga);
  yield takeLatest(GET_LIST_POST_SUCCESS, getListPostSuccessSaga);
  yield takeLatest(GET_LIST_POST_Detail, getListPostDetailSaga);
  yield takeLatest(POST_LIST_POST, postPostsData);
  yield takeLatest(PUT_LIST_POST, putPostsData);
  yield takeLatest(DELETE_LIST_POST, deletePostsData);
}

export default postsSaga;
