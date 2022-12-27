import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { __postPost } from "../../redux/modules/postSlice";

function Form() {
  const [post, setPost] = useState({
    title: "",
    content: "",
    imageFile: "",
    price: "",
    category: "",
  });
  const [img, setImg] = useState(null);
  const data = useSelector((state) => state);
  console.log(data);

  const dispatch = useDispatch();

  const getImage = (e) => {
    console.log(e.target.files[0]);
    setImg(e.target.files[0]);
  };

  console.log(post);
  const OnSubmitHandler = (e) => {
    e.preventDefault();
    // const postForm = new FormData();
    // postForm.append("title", post.title);
    // postForm.append("content", post.content);
    // postForm.append("imageFile", post.imageFile);
    // postForm.append("price", post.price);
    // postForm.append("category", post.category);
    // dispatch(__postPost(postForm));
    console.log(post, "확인");
    dispatch(__postPost(post));
  };

  return (
    <form onSubmit={OnSubmitHandler}>
      <div>
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
          <option value="outer">Outer</option>
          <option value="top">Top</option>
          <option value="bottom">Bottom</option>
          <option value="accessories">Accessories</option>
        </select>
      </div>
      <input type="file" onChange={getImage} />

      <div>
        <textarea
          row="50"
          cols="80"
          type="text"
          id="content"
          placeholder="내용"
          onChange={(e) => {
            const { value } = e.target;
            setPost({ ...post, content: value });
          }}
        />
      </div>
      <div>
        <input
          type="text"
          placeholder="가격"
          onChange={(e) => {
            const { value } = e.target;
            setPost({ ...post, price: value });
          }}
        />
      </div>
      <button>ADD POST</button>
    </form>
  );
}

export default Form;
