import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { __getPost } from "../../redux/modules/postSlice";

import { getCookie } from "../../shared/Cookie";

import { __postBucket } from "../../redux/modules/bucketSlice";

import "./DetailPost.css";

function DetailPost() {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const { id } = useParams();
  const [size, setSize] = useState();
  const [productNum, setProductNum] = useState(1);
  const [totalPrice, setTotalPrice] = useState();
  const [bucket, setBucket] = useState({
    size: size,
    productNum: productNum,
  });

  useEffect(() => {
    dispatch(__getPost(+id));
  }, []);
  //(1)
  //useParam 으로 id 값을 가져와서
  //렌더링될때 __getPost로  id값을 전달

  const { post } = useSelector((state) => state.post);

  useEffect(() => {
    setTotalPrice(productNum * post.price);
  }, [productNum, post.price]);
  const plusHandler = () => {
    setProductNum(productNum + 1);
    setTotalPrice(productNum * post.price);
  };

  const minusHandler = () => {
    setProductNum(productNum - 1);
    setTotalPrice(productNum * post.price);
  };

  useEffect(() => {
    setBucket({
      size: size,
      productNum: productNum,
    });
  }, [productNum, size]);
  const addCartHandler = () => {
    if (size === undefined) {
      alert("사이즈와, 수량을 선택해 주세요 ");
      return;
    }
    setBucket({
      size: size,
      productNum: productNum,
    });
    console.log(bucket);
    const payload = [post.postId, bucket];
    dispatch(__postBucket(payload));
    alert("장바구니에 추가되었습니다");
  };

  return (
    <div className="inner">
      <section>
        <h3 id="proprietary">{post.title}</h3>
        <div>
          <p id="description">{post.content}</p>
        </div>
      </section>

      <section className="section_image">
        <img src={post.imageUrl} alt="상품사진" />
      </section>
      <section>
        <h3 id="price">{post.price}</h3>
        <p>Size</p>
        <a>Size Guide</a>
        <select value={size} onChange={(e) => setSize(Number(e.target.value))}>
          <option value="" defaultValue>
            SELECT A SIZE
          </option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>

        {getCookie("admin") === "true" ? (
          <>
            <button onClick={() => navigate("/editPost/:id")}>Edit</button>
            <button onClick={() => navigate("/shop")}>Delete</button>
          </>
        ) : null}
        {size ? (
          <div className="orderBox">
            <div className="quantity">
              <button onClick={plusHandler}>+</button>
              <p>{productNum}</p>
              <button onClick={minusHandler}>-</button>
            </div>
            <div className="price">{totalPrice}</div>
          </div>
        ) : null}
        <button type="submit" onClick={addCartHandler}>
          Add to Cart
        </button>
      </section>
    </div>
  );
}

export default DetailPost;
