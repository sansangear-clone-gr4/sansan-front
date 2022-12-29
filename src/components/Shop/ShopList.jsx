import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import "../../pages/reset.css";
import { __getPosts } from "../../redux/modules/postSlice";
import "./style.css";

function ShopList(props) {
  const selectedCategory = props.category;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const posts = useSelector((state) => state.post.posts.list);
  console.log(posts);
  useEffect(() => {
    dispatch(__getPosts(selectedCategory));
  }, [selectedCategory, dispatch]);
  console.log(selectedCategory);
  return (
    <STContainer>
      {posts?.map((post) => (
        <STCard
          className="card"
          key={post.postId}
          onClick={() => navigate(`/detail/${post.postId}`)}
        >
          <img src={post.imageUrl} alt={"사진"} />
        </STCard>
      ))}
    </STContainer>
  );
}
const STCard = styled.div`
  width: 460px;
  height: 550px;
  img {
    width: 440px;
    height: 540px;
    margin: 0px 20px 0px 20px;
  }
`;

const STContainer = styled.div`
  display: flex;
  max-width: 80%;
`;

export default ShopList;
