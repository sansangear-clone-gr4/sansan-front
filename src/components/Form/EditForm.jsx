import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import {
  __editPost,
  __getPost,
  __postPost,
} from "../../redux/modules/postSlice";
import "./EditForm.css";

function EditForm() {
  const [editPost, setEditPost] = useState({
    title: "",
    content: "",
    price: "",
    category: "",
  });
  //editForm state
  const [img, setImg] = useState(null);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const { id } = useParams();

  useEffect(() => {
    dispatch(__getPost(+id));
  }, []);

  //렌더링될때 아이디값1 액션
  //나중에 param 쓰기
  const { post: olddata } = useSelector((state) => state.post);
  console.log(olddata);

  useEffect(() => {
    if (olddata) {
      setEditPost({
        title: olddata.title,
        content: olddata.content,
        price: olddata.price,
        category: olddata.category,
      });
    }
  }, [olddata]);

  const getImage = (e) => {
    setImg(e.target.files[0]);
  };

  const OnSubmitEditHandler = (e) => {
    alert("상품이 수정 되었습니다.");
    e.preventDefault();
    const postForm = new FormData();
    postForm.append("title", editPost.title);
    postForm.append("price", Number(editPost.price));
    postForm.append("category", editPost.category);
    postForm.append("content", editPost.content);
    postForm.append("file", img);
    dispatch(__editPost({ postForm, id }));
  };

  return (
    <div className="container">
      <form className="containerWrap" onSubmit={OnSubmitEditHandler}>
        <div lassName="inputTitle">
          <input
            type="text"
            value={editPost.title}
            placeholder="이름"
            minLength="2"
            onChange={(e) => {
              const { value } = e.target;
              setEditPost({ ...editPost, title: value });
              console.log(editPost);
            }}
          />
          <select
            name="category"
            value={editPost.category}
            placeholder="카테고리"
            onChange={(e) => {
              const { value } = e.target;
              setEditPost({ ...editPost, category: value });
            }}
          >
            <option value="" selected>
              CATEGORY
            </option>
            <option value="outer">Outer</option>
            <option value="top">Top</option>
            <option value="bottom">Bottom</option>
            <option value="accessories">Accessories</option>
          </select>
        </div>
        <input type="file" onChange={getImage} className="image" />

        <div className="inputContent">
          <textarea
            row="50"
            cols="80"
            value={editPost.content}
            type="text"
            id="content"
            placeholder="내용"
            onChange={(e) => {
              const { value } = e.target;
              setEditPost({ ...editPost, content: value });
            }}
          />
        </div>
        <div className="inputPrice">
          <input
            type="number"
            value={Number(editPost.price)}
            placeholder="가격"
            onChange={(e) => {
              const { value } = e.target;
              setEditPost({ ...editPost, price: value });
            }}
          />
        </div>
        <button className="addBtn">Edit Post</button>
      </form>
    </div>
  );
}

//onClick={navigate("/shop")}

export default EditForm;
