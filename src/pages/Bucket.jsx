import Cart from "../components/Cart/Cart";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import LayOut from "../components/LayOut/LayOut";

function Bucket() {
  return (
    <>
      <Header />
      <LayOut>
        <Cart />
      </LayOut>
      <Footer />
    </>
  );
}
export default Bucket;
