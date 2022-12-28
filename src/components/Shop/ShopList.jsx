import { Navigate, useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { __getPost, __getPosts } from "../../redux/modules/postSlice";
import { useEffect } from "react";
import "../../pages/reset.css";
import "./style.css";

function ShopList(props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(__getPosts);
  }, [dispatch]);
  return <div className="cardwrap"></div>;
}

export default ShopList;
