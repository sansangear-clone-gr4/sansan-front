import DetailPost from "../components/Detail/DetailPost";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import LayOut from "../components/LayOut/LayOut";

function Detail() {
  return (
    <>
      <Header />
      <LayOut>
        <DetailPost />
      </LayOut>
      <Footer />
    </>
  );
}

export default Detail;
