import "./SignIn.css";

function SignIn() {
  return (
    <div className="login-Container">
      <form>
        <div className="IDPW">
          <p>ID</p>
          <input type="text" placeholder="아이디" />
          <p>Password</p>
          <input type="text" placeholder="비밀번호" />
        </div>
        <div className="buttons">
          <button type="submit">Login</button>
          <button type="button">SignUp</button>
        </div>
        <div className="additional">
          <span>Find ID | Find Password</span>
          <span>Non-Member</span>
        </div>
      </form>
    </div>
  );
}

export default SignIn;
