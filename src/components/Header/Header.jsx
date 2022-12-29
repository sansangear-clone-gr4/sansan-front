import { useNavigate } from "react-router-dom";
import "../../pages/reset.css";
import "./style.css";

import { deleteCookie, getCookie } from "../../shared/Cookie";
import { useEffect } from "react";

function Header() {
  const navigate = useNavigate();
  const cookie = getCookie("admin");
  const cookie2 = getCookie("admin");

  const deleteCookieHandler = () => {
    deleteCookie("admin");
    deleteCookie("userToken");
    navigate("/");
  };
  useEffect(() => {
    getCookie("admin");
    getCookie("admin");
  }, []);
  return (
    <div>
      <div className="headerwrap">
        <nav className="gnb">
          <ul className="clearfix">
            <li onClick={() => navigate("/Shop")}>Shop</li>
            <li>
              <a href="">Archive</a>
            </li>
            <li>
              <a href="">Vue</a>
            </li>
            <li>
              <a href="">Stocklist</a>
            </li>
          </ul>
        </nav>
        <div className="logo">
          <h1>
            <a href="/">LOGO</a>
          </h1>
        </div>
        <div className="topmenu">
          {/* <ul className="clearfix">
            <li>
              <a href="">Contact</a>
            </li>
            {!localStorage.getItem("id") ? (
              <li onClick={() => navigate("/LogIn")} className="LogIn">
                Login
              </li>
            ) : (
              <li
                onClick={() => {
                  localStorage.removeItem("id");
                  navigate("/LogIn");
                }}
                className="LogIn"
              >
                Sign Out
              </li>
            )}
            <li onClick={() => navigate("/Bucket")}>Cart (0)</li>
          </ul> */}
          {cookie === "true" ? (
            <ul className="clearfix">
              <li>
                <a href="/posting">상품등록</a>
              </li>
            </ul>
          ) : null}
          {cookie2 ? (
            <ul className="clearfix">
              <li>
                <a href="/posting">상품등록</a>
              </li>
              <li>
                <a href="">Contact</a>
              </li>
              <li className="logout" onClick={deleteCookieHandler}>
                Log Out
              </li>
              <li onClick={() => navigate("/Bucket")}>Cart</li>
            </ul>
          ) : (
            <ul className="clearfix">
              <li>
                <a href="">Contact</a>
              </li>
              <li className="login" onClick={() => navigate("/LogIn")}>
                Login
              </li>
              <li onClick={() => navigate("/Bucket")}>Cart (0)</li>
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}

export default Header;
