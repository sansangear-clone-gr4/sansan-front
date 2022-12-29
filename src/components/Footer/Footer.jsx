import { useNavigate } from "react-router-dom";
import "../../pages/reset.css"
import "./style.css"

function Footer() {
  const navigate = useNavigate();

  return <div>
    <div className="footerwrap">
      <h4>
        <a href="/">© SAN SAN GEAR</a>
      </h4>
      <div className="menu_buttom">
        <ul className="clearfix">
          <li onClick={() => navigate("/FAQ")}>FAQs</li>
          <li><a href="">Privacy</a></li>
          <li><a href="">Terms of Use</a></li>
          <li><a href="https://github.com/sansangear-clone-gr4">Github</a></li>
        </ul>
      </div>
    </div>
  </div>;
}

export default Footer;
