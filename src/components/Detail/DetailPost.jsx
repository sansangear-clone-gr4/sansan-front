import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { __getPost } from "../../redux/modules/postSlice";
import "./DetailPost.css";

function DetailPost() {
  const dispatch = useDispatch();
  const { id } = useParams();

  console.log(id);
  useEffect(() => {
    dispatch(__getPost(+id));
  }, []);
  //(1)
  //useParam 으로 id 값을 가져와서
  //렌더링될때 __getPost로  id값을 전달

  const { post } = useSelector((state) => state.post);
  console.log(post);
  return (
    <div className="inner">
      <section>
        <h3 id="proprietary name">{post.title}</h3>
        <div>
          <p id="description">{post.content}</p>
        </div>
      </section>
      <section className="section image">
        <img src="{post.imageFile}" alt="상품사진" />
      </section>
      <section>
        <h3 id="price">{post.price}</h3>
        <p>Size</p>
        <a>Size Guide</a>
        <select>
          <option value="" selected>
            SELECT A SIZE
          </option>
          <option value="size1">1</option>
          <option value="size2">2</option>
          <option value="size3">3</option>
        </select>
        <button type="submit">Add to Cart</button>
      </section>
    </div>
  );
}

export default DetailPost;
