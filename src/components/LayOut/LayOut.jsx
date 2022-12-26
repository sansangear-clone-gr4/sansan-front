import styled from "styled-components";

function LayOut({ children }) {
  return (
    <>
      <STLayOut>{children}</STLayOut>
    </>
  );
}

const STLayOut = styled.div`
  font-size: 18px !important;
  color: #000;
  max-width: 100%;
  min-width: 100%;
  width: 100%;
  min-height: calc(100vh - 5rem);
  height: auto;
`;
export default LayOut;
