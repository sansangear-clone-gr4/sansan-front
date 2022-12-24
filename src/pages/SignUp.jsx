import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import LayOut from "../components/LayOut/LayOut";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { __userCheck } from "../redux/modules/userSlice";

function SignUp() {
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [idPtag, setidPtag] = useState(
    "아이디를 입력해 주세요. (영문소문자/숫자, 4~16자)"
  );
  const [PWPtag, setPWPtag] = useState(
    "영문 대소문자/숫자/특수문자 중 2가지 이상 조합, 10자~16자"
  );
  const [PWConfirm, setPWConfirm] = useState("");
  const [PWConfirmP, setPWConfirmP] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [codeCheck, setCodeCheck] = useState(false);
  const adminCode = "!!!!@@@##$admin123";

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
      setidPtag("사용가능한 아이디입니다");
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
    if (code === adminCode) {
      setCodeCheck(true);
      return;
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
    }
    if (!codeCheck) {
      const data = { userId: userId, password, password };
    }
  };
  return (
    <>
      <Header />
      <LayOut>
        <div className="container">
          <form onSubmit={signUpHandler}>
            <div className="signupForm">
              <div className="IDform">
                <p>ID *</p>
                <input
                  type="text"
                  value={userId}
                  onChange={(e) => setUserId(e.target.value)}
                />
                <button type="button" onClick={IdDubChk}>
                  중복확인
                </button>
                {<p>{idPtag}</p>}
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
                {<p>{PWPtag}</p>}
                <p>Confirm Password *</p>
                <input
                  type="password"
                  value={PWConfirm}
                  onChange={(e) => {
                    setPWConfirm(e.target.value);
                  }}
                  onBlur={PWConfirmChk}
                />
                {<p>{PWConfirmP}</p>}
              </div>
              <div className="userName">
                <p>Name *</p>
                <input type="text" />
              </div>
            </div>
            <div className="adminCheck">
              <span>관리자 입니다 </span>
              <input
                type="checkbox"
                onClick={(e) => {
                  setIsAdmin(e.target.checked);
                }}
              />
              {isAdmin ? (
                <>
                  <p>관리자 코드를 입력해주세요</p>
                  <input type="password" onChange={adminCodeCHK} />
                </>
              ) : null}
              {!codeCheck ? (
                <p>코드를 다시한번 확인해주세요</p>
              ) : (
                <p>확인되었습니다</p>
              )}
            </div>
            <button type="submit">Sign Up</button>
          </form>
        </div>
      </LayOut>
      <Footer />
    </>
  );
}
// 나준영은 신이다
export default SignUp;
