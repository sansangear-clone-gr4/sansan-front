import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useNavigation } from "react-router-dom";
import { __postPost } from "../../redux/modules/postSlice";
import "../../pages/reset.css";
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
    alert("상품이 추가 되었습니다.");
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
    navigate("/shop");
  };

  const checkOption = (option) => {
    switch (option) {
      case 0:
        return "Outer";
      case 1:
        return "Top";
      case 2:
        return "Bottom";
      case 3:
        return "Accessories";
      default:
        return;
    }
  };
  return (

    <>
      <div className="container">
        <form className="containerWarp" onSubmit={OnSubmitHandler}>
          <div className="inputTitle">
            <input
              type="text"
              placeholder="제품명을 입력해주세요"
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
                console.log(value);
                setPost({ ...post, category: value });
              }}
              value={checkOption(post.category)}
            >
              <option value="" selected>
                Category
              </option>
              <option value="0">Outer</option>
              <option value="1">Top</option>
              <option value="2">Bottom</option>
              <option value="3">Accessories</option>
            </select>
          </div>
          <input type="file" onChange={getImage} className="image" />
          <div className="inputContent">
            <textarea
              rows="20"
              cols="100"
              type="text"
              id="content"
              placeholder="상품의 설명을 입력해주세요"
              onChange={(e) => {
                const { value } = e.target;
                setPost({ ...post, content: value });
              }}
            />
          </div>
          <div className="inputPrice">
            <input
              type="number"
              placeholder="가격을 입력해주세요"
              onChange={(e) => {
                const { value } = e.target;
                setPost({ ...post, price: value });
              }}
            />
          </div>
          <button className="addBtn"> Add Post</button>
        </form>
      </div>
    </>

  );
}

export default Form;
