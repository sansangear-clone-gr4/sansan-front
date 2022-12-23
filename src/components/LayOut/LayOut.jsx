import styled from "styled-components";

function LayOut({ children }) {
  return (
    <>
      <STLayOut>{children}</STLayOut>
    </>
  );
}

const STLayOut = styled.div`
  max-width: 1200px;
  min-width: 800px;
  min-height: 500px;
  margin: 0 auto;
  padding-top: 30px;
`;
export default LayOut;
