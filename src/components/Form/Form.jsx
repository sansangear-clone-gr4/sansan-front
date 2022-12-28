import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useNavigation } from "react-router-dom";
import { __postPost } from "../../redux/modules/postSlice";
import { getCookie } from "../../shared/Cookie";
import "./Form.css";

function Form() {
  const [post, setPost] = useState({
    title: "",
    content: "",
    price: "",
    category: "",
  });
  const [img, setImg] = useState(null);

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const getImage = (e) => {
    setImg(e.target.files[0]);
  };

  const OnSubmitHandler = (e) => {
    e.preventDefault();
    const postForm = new FormData();
    postForm.append("title", post.title);
    postForm.append("price", Number(post.price));
    postForm.append("category", post.category);
    postForm.append("content", post.content);
    postForm.append("file", img);
    for (let key of postForm.keys()) {
      console.log(key);
    }
    for (let value of postForm.values()) {
      console.log(value);
    }
    dispatch(__postPost(postForm));
  };

  return (
    <form className="containerWarp" onSubmit={OnSubmitHandler}>
      <div className="inputTitle">
        <input
          type="text"
          placeholder="이름"
          minLength="2"
          onChange={(e) => {
            const { value } = e.target;
            setPost({ ...post, title: value });
            console.log(post);
          }}
        />
        <select
          name="category"
          placeholder="카테고리"
          onChange={(e) => {
            const { value } = e.target;
            setPost({ ...post, category: value });
          }}
        >
          <option value="" selected>
            Category
          </option>
          <option value="outer">Outer</option>
          <option value="top">Top</option>
          <option value="bottom">Bottom</option>
          <option value="accessories">Accessories</option>
        </select>
      </div>
      <input type="file" onChange={getImage} />

      <div className="inputContent">
        <textarea
          type="text"
          id="content"
          placeholder="내용"
          onChange={(e) => {
            const { value } = e.target;
            setPost({ ...post, content: value });
          }}
        />
      </div>
      <div className="inputPrice">
        <input
          type="number"
          placeholder="가격"
          onChange={(e) => {
            const { value } = e.target;
            setPost({ ...post, price: value });
          }}
        />
      </div>
      <button className="addBtn" onClick={() => navigate("/shop")}>
        Add Post
      </button>
    </form>
  );
}

export default Form;
