import { Layout } from "antd";
import Category from "../components/categoryNav/Category";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";

function Shop() {
  return (
    <>
      <Header />
      <Layout>
        <Category />
      </Layout>
      <Footer />
    </>
  );
}

export default Shop;
