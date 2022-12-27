import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import { useState } from "react";
import styled from "styled-components";
import { Collapse } from 'antd';
function FAQ() {
  const [newList, setNewList] = useState([]);
  const faqList = [
    {
      title: "주문 수량 제한이 있나요?",
      content: "전 제품 1인당 1품목 주문 가능합니다",
      category: "주문/결제",
    },
    {
      title: "결제 수단은 무엇인가요",
      content: "카드 결제, 휴대폰 결제로 구매 가능합니다.",
      category: "주문/결제",
    },
    {
      title: "주문을 했는데 제품이 주문취소 처리되었어요",
      content:
        "중복주문, 동시주문으로 인한 품절 등 보내드리지 못하는 상품 건에 대해서는 주문취소 처리 됩니다.",
      category: "주문/결제",
    },
    {
      title: "교환 시 주의사항",
      content:
        "구매하신 제품 수령일로부터 7일 이전, 택을 제거하지 않고 착용하지 않은 상태의 제품에 한하여 교환 가능합니다",
      category: "교환",
    },
    {
      title: "어떤 제품이 교환이 가능한가요?",
      content:
        "구매하신 제품과 동일한 제품만 교환 가능합니다. 단, 품절 시에는 교환이 불가능합니다",
      category: "교환",
    },
    {
      title: "제품은 보냈는데 언제 교환상품이 배송 되나요?",
      content:
        "교환을 원하시는 제품을 수령 및 검수 후 배송시작과 함께 운송장 번호를 메일로 보내드립니다",
      category: "교환",
    },
    {
      title: "환불이 불가능한 경우",
      content:
        "택에 제거된 제품, 고객님의 실수로 인한 하자가 있는 제품. 2차 거래를 통한 제품은 환불이 불가능 합니다.",
      category: "취소/환불",
    },
    {
      title: "입금 전 주문 취소는 어떻게 하나요?",
      content:
        "주문 취소를 원하시는 제품과 주문번호를 고객센터(cs@sansangear.com)로 요청해주시면 주문 취소처리 도와드리겠습니다",
      category: "취소/환불",
    },
    {
      title: "제품은 보냈는데 언제 환불 되나요?",
      content:
        "환불하실 제품을 수령 및 검수 후 환불 진행되어 약 3~5일 소요됩니다.",
      category: "취소/환불",
    },
    {
      title: "제품을 수선 받고 싶습니다",
      content:
        "제품 수선을 원하시는 경우. 제품의 불량 여부 및 제품 상태 확인을 위하여, 사진 촬영후 문의 사항 기재하시어 고객센터에 요청해주시면 됩니다. 수령 이후 제품 상태를 확인하고 진행 도와드리겠습니다.",
      category: "제품",
    },
    {
      title: "제품이 불량인 것을 착용하고나서 확인했어요. 어떻게 하나요 ",
      content:
        "해당 제품의 불량인 부분을 촬영하여 고객센터로 보내주시면 확인 후 고객님께서 원하시는 방향(교환,환불)으로 처리 도와드리겠습니다.",
      category: "제품",
    },
    {
      title: "제품 세탁은 어떻게 해야하나요?",
      content:
        "산산기어 대부분 제품의 경우 가급적 오염부분만 부분 세탁을 권장해 드리고 있습니다. 다만 부득이한 경우로 제품 전체를 세탁하여야 하는 경우에는 중성세제로 찬물에 손세탁을 권장해 드리고 있습니다. 또한 물에 오래 두실 경우 이염이 발생할 수도 있으니 주의하셔야 합니다.",
      category: "제품",
    },
    {
      title: "주문후 배송지를 변경할 수 있나요?",
      content:
        "배송 준비중 상테에서 고객센터로 요청해주시면 배송지 변경 도와드리겠습니다",
      category: "배송",
    },
    {
      title: "국제배송도 가능한가요?",
      content: "국제배송은 불가능 합니다",
      category: "배송",
    },
    {
      title: "교환(환불) 배송비는 무료인가요?",
      content:
        "교환하실 제품은 교환 배송비 (2,8000원)를 제품과 동봉하여 문 앞에 놓아주시면 기사님께서 고객님께 연락 후에 수거해 가실 예정입니다. 환불을 원하시는 경우 , 초기 배송비(2,800)원와 착불 택배비(2,600원)를 차감한 금액으로 환불 진행 도와드리겠습니다.",
      category: "배송",
    },
  ];

  const faqMenuHandler = (category) => {
    setNewList(
      faqList.map((faq) => {
        if (faq.category === category) {
          return (
            <li claaName="faq">
              <div className="category">{faq.category}</div>
              <div className="title">{faq.title}</div>
              <div className="content">{faq.content}</div>
            </li>
          );
        } else {
          return null;
        }
      })
    );
  };
  console.log(newList);
  return (
    <>
      <Header />
      <STContainer>
        <div className="menubox">
          <h2>FAQS</h2>
          <button
            onClick={(e) => faqMenuHandler(e.target.value)}
            value="주문/결제"
          >
            주문/결제{" "}
          </button>
          <button onClick={(e) => faqMenuHandler(e.target.value)} value="제품">
            제품{" "}
          </button>
          <button onClick={(e) => faqMenuHandler(e.target.value)} value="배송">
            배송{" "}
          </button>
          <button onClick={(e) => faqMenuHandler(e.target.value)} value="교환">
            교환{" "}
          </button>
          <button
            onClick={(e) => faqMenuHandler(e.target.value)}
            value="취소/환불"
          >
            취소/환불{" "}
          </button>
        </div>
        <div className="FAQbox">
          <div className="FAQList">
            <ul className="FAQ">{newList}</ul>
          </div>
        </div>
      </STContainer>
      <Footer />
    </>
  );
}

const STContainer = styled.div`
  margin-top: 45px;
  display: flex;
  justify-content: center;
  padding: 7.5rem 0;
  font-size: 18px;
  color: #000;
  h2 {
    font-size: 18px;
    margin-bottom: 37px;
  }
  .menubox {
    display: flex;
    flex-direction: column;
    button {
      margin-bottom: 20px;
    }
  }
  .FAQbox {
    margin-top: 50px;
    ul {
      list-style: none;
      li {
        margin-bottom: 30px;
      }
    }
  }
`;

export default FAQ;



const { Panel } = Collapse;
const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;
const App = () => {
  const onChange = (key) => {
    console.log(key);
  };
  return (
    <Collapse defaultActiveKey={['1']} onChange={onChange}>
      <Panel header="This is panel header 1" key="1">
        <p>{text}</p>
      </Panel>
      <Panel header="This is panel header 2" key="2">
        <p>{text}</p>
      </Panel>
      <Panel header="This is panel header 3" key="3">
        <p>{text}</p>
      </Panel>
    </Collapse>
  );
};
export default App;