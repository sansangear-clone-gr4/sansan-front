import { useState } from "react";
import styled from "styled-components";
import ShopList from "../Shop/ShopList";

function Category() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeCategory, setActiveCategory] = useState("Outer");
  const categoryList = [
    {
      tabTitle: (
        <li
          className={activeIndex === 0 ? "is-active" : ""}
          onClick={() => tableClickHandler(0, "Outer")}
        >
          Outer
        </li>
      ),
    },
    {
      tabTitle: (
        <li
          className={activeIndex === 1 ? "is-active" : ""}
          onClick={() => tableClickHandler(1, "Top")}
        >
          Top
        </li>
      ),
    },
    {
      tabTitle: (
        <li
          className={activeIndex === 2 ? "is-active" : ""}
          onClick={() => tableClickHandler(2, "Bottom")}
        >
          Bottom
        </li>
      ),
    },
    {
      tabTitle: (
        <li
          className={activeIndex === 3 ? "is-active" : ""}
          onClick={() => tableClickHandler(3, "Accessories")}
        >
          Accessories
        </li>
      ),
    },
  ];
  const tableClickHandler = (index, category) => {
    setActiveIndex(index);
    setActiveCategory(category);
    console.log(index, category);
  };

  return (
    <div>
      <div className="tabTitle">
        <STTab className="tabs is-boxed">
          {categoryList.map((section) => {
            return section.tabTitle;
          })}
        </STTab>
      </div>
      <div clssName="card">
        <ShopList category={activeCategory} />
      </div>
    </div>
  );
}
const STTab = styled.ul`
  display: flex;
  justify-content: space-between;
  list-style: none;
  width: 100%;
  padding: 0px 20px 0px 20px;
  background-color: #000000c9;

  li {
    text-align: center;
    width: 25%;
    padding: 13px 15px;
    display: block;
    font-size: 15px;
    color: #ffffff;
    text-decoration: none;
  }
`;

export default Category;
