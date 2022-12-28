import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import LayOut from "../components/LayOut/LayOut";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { __signUp, __userCheck } from "../redux/modules/userSlice";

import styled from "styled-components";
import { useNavigate } from "react-router-dom";

function SignUp() {
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [userName, setUserName] = useState("");
  const [PWConfirm, setPWConfirm] = useState("");
  const [PWConfirmP, setPWConfirmP] = useState(false);
  const [admin, setAdmin] = useState(false);
  const [adminCheck, setAdminCheck] = useState(false);

  const [codeCheckP, setCodeCheckP] = useState("");
  const adminCode = process.env.REACT_APP_ADMINTOKEN;
  const [adminToken, setAdminToken] = useState("");
  const dispatch = useDispatch();
  const [userDubCheck, setUserDubCheck] = useState(false);
  const [userPWCHK, setUserPWCHK] = useState(false);
  const [idPtag, setidPtag] = useState("영문소문자/숫자, 4~16자");
  const [PWPtag, setPWPtag] = useState(
    "영문 대문자/소문자/숫자/특수문자를 모두 포함한, 10자~16자"
  );
  const navigate = useNavigate();
  //id, pw 정규식
  function isId(asValue) {
    var regExp =
      /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
    return regExp.test(asValue);
  }
  function isPassword(asValue) {
    const regExp =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{10,16}$/;
    return regExp.test(asValue);
  }
  //id중복체크 true, false 여부
  const userCheck = useSelector((state) => state.user.userCheck);
  console.log(userCheck);

  // null, false, true 값 반환
  // 아이디 중복확인
  useEffect(() => {
    if (userCheck === false) {
      setidPtag("중복된 아이디입니다");
    } else if (userCheck === true) {
      setidPtag(`${userId}는 사용가능한 아이디입니다`);
      setUserDubCheck(true);
      setUserId(userId);
      console.log("중복확인여부:", userDubCheck);
    } else {
      setidPtag("이메일을 기입해주세요");
    }
  }, [userCheck]);
  const IdDubChk = () => {
    if (!isId(userId)) {
      setidPtag("이메일 형식을 다시 확인해주세요");
      return;
    }
    dispatch(__userCheck(userId));
    console.log(userCheck);
    // if (userCheck === false) {
    //   setidPtag("중복된 아이디입니다");
    // } else if (userCheck === true) {
    //   setidPtag(`${userId}는 사용가능한 아이디입니다`);
    //   setUserDubCheck(true);
    //   console.log("중복확인여부:", userDubCheck);
    // } else {
    //   setidPtag("이메일 형식을 다시한번 확인해 주세요");
    // }
  };

  const PWChk = () => {
    if (!isPassword(password)) {
      setPWPtag(
        "영문 대문자/숫자/특수문자를 모두포함한, 10자~16자의 비밀번호를 입력해주세요"
      );
    } else {
      setPWPtag("사용가능한 비밀번호 입니다");
      setUserPWCHK(true);
    }
  };

  const PWConfirmChk = () => {
    if (password !== PWConfirm) {
      setPWConfirmP("비밀번호가 일치하지않습니다");
    } else {
      setPWConfirmP("확인되었습니다");
      setPassword(password);

      console.log("비밀번호확인여부:", userPWCHK);
    }
  };

  const adminCodeCHK = (code) => {
    console.log(code);
    if (code !== adminCode) {
      setCodeCheckP("코드를 다시한번 확인해주세요");
      return;
    } else {
      setAdminCheck(true);
      setCodeCheckP("확인되었습니다");
      setAdminToken(code);
      console.log(code);
    }
  };

  const signUpHandler = () => {
    if (userDubCheck && userPWCHK !== true) {
      alert("비밀번호와, 아이디를 다시한번 확인해 주세요");
      return;
    }
    if (userPWCHK !== true) {
      alert("비밀번호를 다시 한번 확인해주세요");
      return;
    }
    if (!userDubCheck) {
      alert("아이디중복확인을 해주세요");
      return;
    }
    if (userName === null) {
      alert("이름을 정확히 기입해주세요 ");
      return;
    }
    if (admin && !adminCodeCHK) {
      alert("staff코드가 잘못되었습니다");
      return;
    }
    console.log(userId, password, userName, adminToken, admin);
    const data = {
      userId: userId,
      password: password,
      userName: userName,
      admin: admin,
      adminToken: adminToken,
    };
    dispatch(__signUp(data));
    navigate("/login");

    // instance.post("/api/user/signup", data);
    // alert(data)
    //   .then((res) => {
    //     const signUpMsg = res.data.msg;
    //     const signUpCode = res.data.statusCode;
    //     if (signUpCode === 200) {
    //       setUserName("");
    //       setUserId("");
    //       setPassword("");
    //       setPWConfirm("");
    //       alert(signUpMsg);
    //       Navigate("/login");
    //       console.log(signUpMsg, signUpCode);
    //     } else {
    //       alert("정보를 정확히 입력해주세요");
    //       return;
    //     }
    //   })
    //   .catch((error) => {
    //     alert("로그인실패", error);
    //   });
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
