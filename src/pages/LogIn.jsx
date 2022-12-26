import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import LayOut from "../components/LayOut/LayOut";
import { instance } from "../core/api/axios";
import { getCookie, setCookie } from "../shared/Cookie";
function LogIn() {
  const navigate = useNavigate();
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const go_login = () => {
    const login_data = { userId: userId, password: password };
    instance
      .post("/user/login", login_data)
      .then((res) => {
        console.log(res);
        //토큰 저장-> 쿠키에 token이라는 이름으로 저장
        const token = res.headers.authorization;
        setCookie("userToken", token);
        console.log(getCookie("userToken"));

        const loginMsg = res.data.msg;
        const loginCode = res.data.statusCode;
        console.log(loginMsg, loginCode);
        if (loginCode === 200) {
          setUserId("");
          setPassword("");
          alert(loginMsg);
          window.location.href = "/";
        }
      })
      .catch((error) => {
        alert(error.responce.data.msg);
        console.log(error);
      });
  };

  return (
    <>
      <Header />
      <LayOut>
        <STContainer>
          <STInner>
            <form onSubmit={go_login}>
              <div className="IDPW">
                <p>ID</p>
                <input
                  type="text"
                  placeholder="아이디"
                  value={userId}
                  onChange={(e) => {
                    setUserId(e.target.value);
                  }}
                />
                <p>Password</p>
                <input
                  type="text"
                  placeholder="비밀번호"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
              </div>
              <div className="buttons">
                <button type="submit">Login</button>
                <button type="button" onClick={navigate("/signup")}>
                  SignUp
                </button>
              </div>
              <div className="additional">
                <span>Find ID | Find Password</span>
                <span>Non-Member</span>
              </div>
            </form>
          </STInner>
        </STContainer>
      </LayOut>
      <Footer />
    </>
  );
}

const STContainer = styled.div`
  padding-top: 7.5rem;
  display: flex;
  justify-content: center;
`;

const STInner = styled.div`
  flex: 0 0 auto;
  width: 33.33333333%;
  form {
    div {
      width: 100%;
      margin: 0 0 0.5rem;
      p {
        font-size: 0.75rem;
        font-weight: bold;
        display: block !important;
        margin-bottom: 0.5rem;
      }
    }
  }
`;

export default LogIn;
