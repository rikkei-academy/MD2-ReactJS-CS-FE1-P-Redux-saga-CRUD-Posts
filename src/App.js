import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  getListPost,
  getListPostDetail,
  postListPosts,
  putListPosts,
  deleteListPosts,
} from "./action";

const App = (props) => {
  const dispatch = useDispatch();
  const { posts, load } = useSelector((state) => state.posts);
  const inputRef = useRef();
  const [idEdit, setIdEdit] = useState("");

  if (load) {
    return <h1>Data is loading from API...</h1>;
  }

  const hanldeClick = () => {
    dispatch(getListPost({ id: 10 }));
  };

  const hanldeClickDetail = () => {
    dispatch(
      getListPostDetail({
        data: { id: 1 },
        onSuccess: (data) => {
          console.log(data);
        },
      })
    );
  };

  const hanldeClickEdit = (id) => {
    setIdEdit(id);
    const recordPost = posts.filter((item) => item.id === id);
    inputRef.current.value = recordPost[0].title;
  };

  const hanldeClickDelete = (id) => {
    dispatch(
      deleteListPosts({
        id,
        onSuccess: (data) => {
          console.log(data);
        },
      })
    );
  };

  const hanldeClickUpdateCreate = () => {
    if (idEdit) {
      // update
      dispatch(
        putListPosts({
          data: {
            id: idEdit,
            title: inputRef.current.value,
          },
          onSuccess: (res) => {
            alert(`id : ${idEdit} deleted`);
          },
        })
      );
    } else {
      // create
      dispatch(
        postListPosts({
          data: {
            id: idEdit,
            title: inputRef.current.value,
          },
          onSuccess: (res) => {
            console.log("onSuccess", res);
            const { data } = res;
            alert(`id : ${data.id} create success with title : ${data.title}`);
          },
        })
      );
    }
  };

  return (
    <>
      <h1>List Post</h1>
      <div>
        <input
          type='text'
          ref={inputRef}
          placeholder='Nhập nội dung ...'
        ></input>
        <button onClick={hanldeClickUpdateCreate}>
          {idEdit ? "update" : "create"}
        </button>
        {idEdit ? `update id ${idEdit}` : null}
        {idEdit ? (
          <button
            onClick={() => {
              setIdEdit("");
              inputRef.current.value = "";
            }}
          >
            cancel
          </button>
        ) : null}
      </div>
      <button onClick={hanldeClick}>click show data</button>
      <button onClick={hanldeClickDetail}>click</button>
      <table>
        <tbody>
          <tr>
            <th>Id</th>
            <th>Title</th>
          </tr>
          {posts.map((post) => (
            <tr>
              <th>{post.id}</th>
              <th>{post.title}</th>
              <button onClick={(e) => hanldeClickEdit(post.id)}>Edit</button>
              <button onClick={() => hanldeClickDelete(post.id)}>Delete</button>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

// const mapStateToProps = (state) => {
//   return {
//     posts: state.posts,
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     getListPost: (params) => dispatch(getListPostAction(params)),
//   };
// };
export default App;
