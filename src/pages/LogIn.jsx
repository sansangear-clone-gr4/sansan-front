import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import LayOut from "../components/LayOut/LayOut";
import { postLogin } from "../core/login/queries";
import { getCookie, setCookie } from "../shared/Cookie";
function LogIn() {
  const navigate = useNavigate();
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const go_login = () => {
    const login_data = { userId: userId, password: password };

    postLogin(login_data)
      .then((res) => {
        console.log(res);
        setCookie("userToken", res.headers.authorization);
        setCookie("admin", res.data.role);
        console.log(getCookie("admin"));
        const loginMsg = res.data.msg;
        const loginCode = res.data.statusCode;
        console.log(loginMsg, loginCode);
        if (loginCode === 200) {
          setUserId("");
          setPassword("");
          alert(loginMsg);
        }
      })
      .catch((error) => {
        alert("아이디 비밀번호를 다시한번 확인해주세요");
        console.log(error);
      });
    navigate("/");
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
                  type="password"
                  placeholder="비밀번호"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
              </div>
              <STButton>
                <button type="submit" className="login">
                  Login
                </button>
                <button
                  type="button"
                  onClick={() => navigate("/signup")}
                  className="signup"
                >
                  SignUp
                </button>
              </STButton>
              <STAdditional>
                <span>Find ID | Find Password</span>
                <span>Non-Member</span>
              </STAdditional>
            </form>
          </STInner>
        </STContainer>
      </LayOut>
      <Footer />
    </>
  );
}

const STContainer = styled.div`
  padding: 7.5rem 0;
  font-size: 13.5px;
  color: #000;
`;

const STInner = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  div {
    width: 440px;
    p {
      font-size: 13.5px;
      font-weight: bold;
      display: block !important;
      margin: 0.5rem 0;
    }
    input {
      width: 440px;
      height: 1.5rem;
      margin-bottom: 0.25rem;
      border: solid 1px #ddd;
      padding: 20px;
      font-size: 13.5px;
    }
  }
`;

const STButton = styled.div`
  .login {
    color: #fff;
    background-color: #000;
    cursor: pointer;
    margin-top: 15px;
    display: inline-block;
    box-sizing: border-box;
    border: 1px solid transparent;
    width: 440px;
    height: 40px;
    padding-left: 8px;
    padding-right: 8px;
    font-weight: normal !important;
    vertical-align: middle;
    text-align: center;
    white-space: nowrap;
  }
  .signup {
    cursor: pointer;
    margin-top: 15px;
    display: inline-block;
    box-sizing: border-box;
    border: 1px solid transparent;
    width: 440px;
    height: 40px;
    padding-left: 8px;
    padding-right: 8px;
    font-weight: normal !important;
    vertical-align: middle;
    text-align: center;
    white-space: nowrap;
    color: black;
    background-color: white;
    border: solid 1px #ddd;
  }
`;

const STAdditional = styled.div`
  display: flex;
  justify-content: space-between;
  span {
    margin-top: 15px;
    font-size: 13px;
  }
`;

export default LogIn;
