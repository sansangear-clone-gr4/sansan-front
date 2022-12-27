import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import { getCookie } from "../shared/Cookie";

function Main() {
  console.log(getCookie("userToken"));
  return (
    <>
      <Header />

      <Footer />
    </>
  );
}

export default Main;
