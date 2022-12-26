import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import LayOut from "../components/LayOut/LayOut";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { __userCheck } from "../redux/modules/userSlice";
import { instance } from "../core/api/axios";
import { Navigate } from "react-router-dom";
import styled from "styled-components";

function SignUp() {
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [userName, setUserName] = useState("");
  const [idPtag, setidPtag] = useState("영문소문자/숫자, 4~16자");
  const [PWPtag, setPWPtag] = useState(
    "영문 대문자/소문자/숫자/특수문자를 모두 포함한, 10자~16자"
  );
  const [PWConfirm, setPWConfirm] = useState("");
  const [PWConfirmP, setPWConfirmP] = useState(false);
  const [admin, setAdmin] = useState(false);
  const [adminCheck, setAdminCheck] = useState(false);
  const [codeCheckP, setCodeCheckP] = useState("");
  const adminCode = process.env.REACT_APP_ADMINTOKEN;
  console.log(adminCode);
  const [adminToken, setAdminToken] = useState("");
  console.log(admin);
  const dispatch = useDispatch();
  // 아이디에따른 출력값 넣어줄 p태그

  //id, pw 정규식
  function isId(asValue) {
    const regExp = /^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z]{4,16}$/g;
    return regExp.test(asValue);
  }
  function isPassword(asValue) {
    const regExp =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{10,16}$/;
    return regExp.test(asValue);
  }
  //id중복체크 true, false 여부
  const userCheck = useSelector((state) => state.user.userCheck);
  // null, false, true 값 반환
  // 아이디 중복확인
  const IdDubChk = () => {
    if (!isId(userId)) {
      setidPtag("영문소문자와 숫자를 포함한, 4~16자의 아이디를 입력해주세요");
      return;
    }
    dispatch(__userCheck(userId));
    if (userCheck === false) {
      setidPtag("중복된 아이디입니다");
    } else if (userCheck === true) {
      setidPtag(`${userId}는사용가능한 아이디입니다`);
    } else {
      setidPtag("아이디를 다시한번 확인해주세요");
    }
  };
  const PWChk = () => {
    if (!isPassword(password)) {
      setPWPtag(
        "영문 대문자/숫자/특수문자를 모두포함한, 10자~16자의 비밀번호를 입력해주세요"
      );
    } else {
      setPWPtag("사용가능한 비밀번호 입니다");
    }
  };

  const PWConfirmChk = () => {
    if (password !== PWConfirm) {
      setPWConfirmP("비밀번호가 일치하지않습니다");
    } else {
      setPWConfirmP("확인되었습니다");
    }
  };

  const adminCodeCHK = (code) => {
    console.log(code);
    if (code === adminCode) {
      setAdminCheck(true);
      setCodeCheckP("확인되었습니다");
      setAdminToken(code);
    } else {
      setCodeCheckP("코드를 다시한번 확인해주세요");
    }
  };

  const signUpHandler = () => {
    if (isId && isPassword !== true) {
      alert("비밀번호와, 아이디를 다시한번 확인해 주세요");
      return;
    }
    if (password !== PWConfirm) {
      alert("비밀번호를 다시 한번 확인해주세요");
      return;
    }
    if (!userCheck) {
      alert("아이디중복확인을 해주세요");
      return;
    }
    if (userName === null) {
      alert("이름을 정확히 기입해주세요 ");
    }

    if (!adminCheck) {
      const data = { userId: userId, password: password, userName: userName };
      console.log(data);
    } else {
      const data = {
        userId: userId,
        password: password,
        userName: userName,
        admin: admin,
        adminToken: adminToken,
      };
      console.log(data);

      instance
        .post("/api/user/signup", data)
        .then((res) => {
          const signUpMsg = res.data.msg;
          const sighUpCode = res.data.statusCode;
          if (sighUpCode === 200) {
            setUserName("");
            setUserId("");
            setPassword("");
            setPWConfirm("");
            alert(signUpMsg);
            Navigate("/login");
            return;
          } else {
            alert("정보를 정확히 입력해주세요");
          }
        })
        .catch((error) => {
          alert("로그인실패", error);
        });
    }
  };
  return (
    <>
      <Header />
      <LayOut>
        <STContainer>
          <STSignUpFeild>
            <form onSubmit={signUpHandler}>
              <STSignUpForm>
                <div className="IDform">
                  <p>ID *</p>
                  <input
                    type="text"
                    value={userId}
                    onChange={(e) => setUserId(e.target.value)}
                  />
                  <button type="button" className="dubBtn" onClick={IdDubChk}>
                    중복확인
                  </button>
                  {<p className="ptag">{idPtag}</p>}
                </div>
                <div className="PWForm">
                  <p>Password *</p>
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                      console.log(e);
                    }}
                    onBlur={PWChk}
                  />
                  {<p className="ptag">{PWPtag}</p>}
                  <p>Confirm Password *</p>
                  <input
                    type="password"
                    value={PWConfirm}
                    onChange={(e) => {
                      setPWConfirm(e.target.value);
                    }}
                    onBlur={PWConfirmChk}
                  />
                  {<p className="ptag">{PWConfirmP}</p>}
                </div>
                <div className="userName">
                  <p>Name *</p>
                  <input
                    type="text"
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                  />
                </div>
              </STSignUpForm>
              <STAdmin>
                <span>IM STAFF</span>
                <input
                  type="checkbox"
                  onClick={(e) => {
                    setAdmin(e.target.checked);
                  }}
                />
                {admin ? (
                  <>
                    <p
                      style={{
                        fontWeight: "bold",
                        marginTop: "30px",
                        fontSize: "0.75rem",
                      }}
                    >
                      STAFF 코드를 입력해주세요
                    </p>
                    <input
                      style={{ border: "solid 1px #ddd", height: "2.25rem" }}
                      type="password"
                      onChange={(e) => {
                        adminCodeCHK(e.target.value);
                      }}
                    />
                  </>
                ) : null}
                {<p className="ptag">{codeCheckP}</p>}
              </STAdmin>
              <button type="submit">Sign Up</button>
            </form>
          </STSignUpFeild>
        </STContainer>
      </LayOut>
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
`;

const STSignUpFeild = styled.div`
  padding-left: 1.875rem !important;
  padding-right: 1.875rem !important;
  flex: 0 0 auto;
  width: 33.33333333%;
  button {
    margin-top: 30px;
    display: inline-block;
    box-sizing: border-box;
    border: 1px solid transparent;
    width: 100%;
    height: 40px;
    padding-left: 8px;
    padding-right: 8px;
    font-weight: normal !important;
    text-decoration: none;
    vertical-align: middle;
    text-align: center;
    white-space: nowrap;
    color: #fff;
    background-color: #000;
  }
  .dubBtn {
    width: 100px;
    height: 30px;
  }
`;

const STSignUpForm = styled.div`
  div {
    input {
      width: 100%;
      height: 1.5rem;
      margin-bottom: 0.25rem;
      border: solid 1px #ddd;
      padding: 0.65rem;
      font-size: 18px;
    }
    p {
      text-align: left;
      font-size: 18px;
      font-weight: bold;
    }
    .ptag {
      font-size: 13px;
    }
  }
`;

const STAdmin = styled.div`
  margin-top: 30px;
  span {
    font-weight: bold;
    font-size: 0.75rem;
  }
`;
export default SignUp;
