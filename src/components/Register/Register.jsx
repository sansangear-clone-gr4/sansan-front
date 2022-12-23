import { useState } from "react";
import { __userCheck } from "../../redux/modules/userSlice";

function Register() {
  const [userId, setUserId] = useState("");
  const [userPW, setUserPW] = useState("");
  const adminCheckHandler = () => {};
  //id, pw 정규식
  function isId(asValue) {
    var regExp = /^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z]{4,16}$/g;
    return regExp.test(asValue);
  }
  function isPassword(asValue) {
    var regExp = /^(?=.[a-zA-Z])((?=.\d)|(?=.*\W)).{10,16}$/;
    return regExp.test(asValue);
  }
  const onIdChangeHandler = (id) => {
    if (!isId(id)) {
      setPtag("영문소문자/숫자, 4~16자의 아이디를 입력해주세요");
      return;
    }
    //여기에 중복체크할거임
    dispatchEvent(__userCheck(id));
  };
  const [ptag, setPtag] = useState(
    "아이디를 입력해 주세요. (영문소문자/숫자, 4~16자)"
  );
  return (
    <div className="container">
      <form>
        <div className="signupForm">
          <div className="IDform">
            <p>ID *</p>
            <input
              type="text"
              value={userId}
              onChange={(e) => onIdChangeHandler(e.target.value)}
            />
            <p>{ptag}</p>
            {/*<p>{id}는 이미 사용중인 아이디입니다.</p>
            onChange에 달아놔야할듯 */}
          </div>
          <div className="PWForm">
            <p>Password *</p>
            <input
              type="text"
              value={userPW}
              onChange={(e) => {
                setUserPW(e.target.value);
              }}
            />
            <p>(영문 대소문자/숫자/특수문자 중 2가지 이상 조합, 10자~16자)</p>
            <p>Confirm Password *</p>
            <input type="text" />
          </div>
          <div className="userName">
            <p>Name *</p>
            <input type="text" />
          </div>
        </div>
        <div className="adminCheck">
          <span>관리자 입니다 </span>
          <input type="checkbox" onChange={adminCheckHandler} />
          {/* 위 체크박스가 체크되었을시 나오게 구현해야함 */}
          <p>관리자 번호를 입력해주세요</p>
          <input type="text" />
        </div>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}

export default Register;
