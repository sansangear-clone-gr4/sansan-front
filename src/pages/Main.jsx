import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";

import './style.css'


function Main() {
  console.log(getCookie("userToken"));
  return (
    <>
      <Header />

      <div className="mainpage"></div>

      <Footer />
    </>
  );
}

export default Main;
