import { useState } from "react";
import { useDispatch } from "react-redux";

function Form() {
  const [post, setPost] = useState({
    title: "",
    content: "",
    imageFile: "",
    price: "",
    category: "",
  });

  // const dispatch = useDispatch();
  console.log(post);
  const OnSubmitHandler = () => {};

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
      <button type="submit">ADD POST</button>
    </form>
  );
}

export default Form;
