import { Navigate, useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { __getPost } from "../../redux/modules/postSlice";
import { useEffect } from "react";
import "../../pages/reset.css"
import "./style.css"

function ShopList(props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return <div className="cardwrap">
    살려주세요 제가 죄송해요 ,,,,,
  </div>;
}

export default ShopList;
