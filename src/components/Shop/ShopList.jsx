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
  margin: 0 auto;
  img {
    width: 300px;
    height: 400px;
  }
`;

const STContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 15px;
`;

export default ShopList;
