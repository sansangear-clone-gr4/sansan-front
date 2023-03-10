import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { __deleteBucket, __getBucket } from "../../redux/modules/bucketSlice";

function Cart() {
  const dispatch = useDispatch();
  const [total, setTotal] = useState();
  const [shipping, setShipping] = useState();
  const [subtotal, setSubtotal] = useState(0);

  useEffect(() => {
    dispatch(__getBucket());
  }, [dispatch]);

  const bucket = useSelector((state) => state.bucket.buckets);
  console.log(bucket);

  useEffect(() => {
    let add = 0;
    bucket.map((i) => setSubtotal((add += i.price * i.productNum)));
  }, [bucket]);
  useEffect(() => {
    if (subtotal <= 100000) {
      setShipping(5000);
    } else {
      setShipping(0);
    }
  }, [subtotal]);

  console.log(subtotal);
  const deleteBucketHandler = (id) => {
    console.log(id);
    dispatch(__deleteBucket(id));
  };

  // let newB;
  // const minusHandler = (id) => {
  //   bucket.map((b) => {
  //     if (b.id === id) {
  //       newB = { ...b, productNum: b.productNum - 1 };
  //       return newB;
  //     }
  //   });
  //   const newNum = newB.productNum;
  //   dispatch(__editBucket({ id, newNum }));
  // };
  // const plusHandler = () => {};

  return (
    <STLayout>
      {bucket.length !== 0 ? (
        <>
          <div className="bucket">
            <h2>CART</h2>
            {bucket.map((bucketItem) => {
              return (
                <STCard>
                  <STWrap>
                    <div className="innerWrap">
                      <div className="thumbnail">
                        <Link to={`/detail/${bucketItem.postId}`}>
                          <img
                            src={bucketItem.imageFile}
                            alt="제품사진"
                            width="78"
                          ></img>
                        </Link>
                      </div>
                      <div className="description">
                        <strong className="prdName" title="상품명">
                          <Link to={`detail/${bucketItem.postId}`}>
                            {bucketItem.title}
                          </Link>
                        </strong>
                        <ul className="bucketPrice">
                          <li id>
                            KRW
                            <strong> {bucketItem.price}</strong>
                            <span className="displaynone">
                              <span></span>
                            </span>
                          </li>
                        </ul>
                        <ul className="option">
                          <li className="size">[size:{bucketItem.size}]</li>
                        </ul>
                        <div className="quantity">
                          <p value={bucketItem.productNum}>
                            수량: {bucketItem.productNum}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="deleteButton">
                      <button
                        onClick={() => deleteBucketHandler(bucketItem.id)}
                      >
                        Remove
                      </button>
                    </div>
                  </STWrap>
                </STCard>
              );
            })}
          </div>
          <STPrice>
            <div className="wrapper">
              <div className="summary">
                <div>
                  <div className="name">Subtotal</div>
                  <span>{subtotal} KRW</span>
                </div>
                <div>
                  <div className="name">Shipping</div>

                  <div>KRW {shipping}</div>
                  <p
                    style={{
                      fontSize: "13px",
                      marginTop: "25px",
                      color: "grey",
                    }}
                  >
                    10만원 이상은 무료배송입니다
                  </p>
                </div>
              </div>
              <div className="total">
                <div className="name">Total</div>
                <span className="paymentPrice">
                  {total}
                  <strong className="price"> KRW {subtotal + shipping}</strong>
                </span>
              </div>
            </div>
            <div className="orderbutton">
              <button onClick={() => alert("주문완료되었습니다!!!")}>
                {" "}
                Continue to Order
              </button>
            </div>
          </STPrice>
        </>
      ) : (
        <div style={{ marginTop: "200px" }}>
          <p>장바구니가 비어있습니다.</p>
        </div>
      )}
    </STLayout>
  );
}
const STLayout = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 3rem;
  margin-top: 100px;
  .bucket {
    flex: 0 0 auto;
    width: 41.66666667%;
    h2 {
      margin-bottom: 50px;
    }
  }
  .price {
    flex: 0 0 auto;
    width: 16.66666667%;
    margin-top: 100px;
    margin-left: 150px;
  }
`;

const STCard = styled.div`
  border-top: solid 1px #c9c7c7;
  padding-top: 30px;
  margin-bottom: 30px;
  height: 180px;
`;

const STWrap = styled.div`
  display: flex;
  justify-content: space-between;
  .innerWrap {
    display: flex;
  }
  .thumbnail {
    img {
      min-width: 110px;
      min-height: 130px;
    }
  }
  .description {
    margin-left: 20px;
    .option {
      margin-top: 10px;
    }
    .quantity {
      margin-top: 20px;
      display: flex;
      gap: 10px;
      button {
        background-color: transparent;
        border-color: transparent;
        font-size: 20px;
      }
    }
  }
  .deleteButton {
    button {
      background-color: transparent;
      border-color: transparent;
      font-size: 15px;
      cursor: pointer;
    }
  }
`;

const STPrice = styled.div`
  margin: 80px 0px 0px 180px;
  div {
    div {
      margin-top: 10px;
    }
  }
  .wrapper {
    .summary {
      border-top: solid 1px #c9c7c7;
      border-bottom: solid 1px #c9c7c7;
      margin-bottom: 30px;
      padding-bottom: 20px;
      .name {
        font-weight: bold;
        margin-bottom: 25px;
        margin-top: 20px;
      }
    }
    .total {
      .name {
        font-weight: bold;
        margin-bottom: 25px;
      }
    }
  }
  .orderbutton {
    button {
      margin-top: 40px;
      background-color: black;
      border-color: transparent;
      color: white;
      width: 100%;
      height: 50px;
      font-size: 20px;
      cursor: pointer;
    }
  }
`;
export default Cart;
