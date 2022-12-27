import { Link } from "react-router-dom";
import styled from "styled-components";

function Cart() {
  return (
    <STContainer>
      <div>
        <h2>Cart</h2>
        <STBucket>
          <STPrdbox>
            <div className="thumbnail">
              {/* <Link to={`detail/${postId}`}> */}
              {/* <img src={imageFile} alt="제품사진" width="78"></img> */}
              {/* </Link> */}
            </div>
            <div className="description">
              <strong class="prdName" title="상품명">
                {/* <Link to={`detail/${postId}`}>{title}</Link> */}
              </strong>
              <ul className="price">
                <li id>
                  "KRW"
                  <strong>369,000</strong>
                  <span className="displaynone">
                    <span></span>
                  </span>
                </li>
              </ul>
              <ul className="option">
                {/* <li className="size">[size:`${size}`]</li> */}
              </ul>
              <div className="quantity">
                <span className="stepper">수량 변경 구현</span>
              </div>
            </div>
            <button>Remove</button>
          </STPrdbox>
        </STBucket>
        <div className="price-container">
          <div clasName="price-box">
            <div className="summaryGroup">
              <div className="summary">
                <div className="head">
                  <strong className="name">Subtotal</strong>
                  <span>
                    "KRW"
                    <strong>
                      {/* <span className="total">{price}</span> */}
                    </strong>
                    <span className="refer displaynone">
                      <span></span>
                    </span>
                  </span>
                </div>
              </div>
              <div className="summary shipping">
                <strong class="name">Shipping</strong>
                <div>
                  "KRW"
                  <strong id="total_delv_price_front">
                    <span class="total_delv_price_front">0</span>
                  </strong>
                </div>
              </div>
            </div>
            <div className="total">
              <strong className="name">Total</strong>
              <span className="paymentPrice">
                "KRW"
                <strong id="total_order_price_front" class="price">
                  총 금액
                </strong>
              </span>
            </div>
          </div>
        </div>
        <div className="button">
          <button> Continue to Order</button>
        </div>
      </div>
    </STContainer>
  );
}

const STContainer = styled.div`
  margin-top: 45px;
  display: flex;
  justify-content: center;
  padding: 7.5rem 0;
  font-size: 18px;
  color: #000;
`;
const STBucket = styled.div`
  flex: 0 0 auto;
  width: 41.66666667%;
  h2 {
    margin-bottom: 2rem;
    font-size: 18px;
    font-weight: bold;
    text-transform: capitalize;
  }
`;

const STPrdbox = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  .thumbnail {
    width: 6rem;
    margin-right: 1rem;
    flex: 0 0 auto;
    link {
      text-decoration: none;
      color: #000;
      img {
        width: 100%;
        height: auto;
      }
    }
  }
  .description {
    flex: 0 0 auto;
    width: calc(100% - 7rem);
  }
`;

export default Cart;
