import { useNavigate } from "react-router-dom";
import "../../pages/reset.css"
import "./style.css"

function Header() {
  const navigate = useNavigate();

  return <div>
    <div className="headerwrap">
      <nav className="gnb">
        <ul className="clearfix">
          <li onClick={() => navigate('/Shop')}>Shop</li>
          <li><a href="">Archive</a></li>
          <li><a href="">Vue</a></li>
          <li><a href="">Stocklist</a></li>
        </ul>
      </nav>
      <div className="logo">
        <h1>
          <a href="/">LOGO</a>
        </h1>
      </div>
      <div className="topmenu">
        <ul className="clearfix">
          <li><a href="">Contact</a></li>
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
        </ul>
      </div>
    </div>
  </div>;

}

export default Header;
