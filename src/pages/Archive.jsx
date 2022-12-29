import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import "./reset.css"
import "./style.css"

function Archive() {
  return (
    <>
      <Header />
      <div className="imagewrap">
          <div className="image1"></div>
          <div className="image2"></div>
          <div className="image3"></div>
          <div className="image4"></div>
          <div className="image5"></div>
          <div className="image6"></div>
      </div>
      <Footer />
    </>
  );
}

export default Archive;