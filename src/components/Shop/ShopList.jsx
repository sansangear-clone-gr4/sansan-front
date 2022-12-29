import { Navigate, useNavigate, useParams } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { __getPost } from "../../redux/modules/postSlice";

import { useEffect } from "react";
import "../../pages/reset.css";
import "./style.css";

function ShopList(props) {
  const selectedCategory = props.category
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {posts, isLoading, isSuccess} = useSelector((state) => state.post)

  useEffect(() => {
    dispatch(__getPost(selectedCategory));
  },[dispatch])

  const onClick = (post) => {navigate(`detail/${post.postId}`, {state:post})}

  if(isLoading === true){
    return <div>로딩 중</div>
  }
  
  if (isSuccess === true) {
    return <div className="cardwrap">
      <div>
        {posts?.map((post) => (
          <div key={post.postId} onclick={() => {onClick(post)}}>
            <img src="{post.imageUrl}" alt="card_image" />
            <div className="mask">{post.title}</div>
            <div className="mask">{post.content}</div>
          </div>
        ))}
      </div>
    </div>;
  }

}

export default ShopList;
