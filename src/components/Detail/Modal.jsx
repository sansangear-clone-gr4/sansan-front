import { useState } from "react";

function Modal() {
  const [isModal, setIsModal] = useState(false);
  const ModalHandler = () => {
    setIsModal((prev) => !prev);
  };
  return (
    <>
      <Wrapper>
        <Title>Modal</Title>
        {isModal ? (
          <ModalBackground>
            <ModalBox>
              <ModalBtn onClick={ModalHandler}>X</ModalBtn>a
            </ModalBox>
          </ModalBackground>
        ) : (
          <OpenModal onClick={ModalHandler}>b</OpenModal>
        )}
      </Wrapper>
    </>
  );
}

const OpenModal = styled.button`
  background-color: ${(props) => props.theme.blue};
  width: 150px;
  height: 80px;
  border: none;
  border-radius: 30px;
  color: white;
  font-size: 20px;
  font-weight: 600;
  cursor: pointer;
`;
const ModalBackground = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  background-color: rgba(102, 100, 100, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
`;
const ModalBox = styled.div`
  position: relative;
  width: 400px;
  height: 150px;
  z-index: 10;
  color: ${(props) => props.theme.blue};
  background-color: white;
  font-size: 30px;
  font-weight: 600;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const ModalBtn = styled.button`
  margin-bottom: 30px;
  border: none;
  background-color: white;
  font-size: 20px;
  cursor: pointer;
`;

export default Modal;

