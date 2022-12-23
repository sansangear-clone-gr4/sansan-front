import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import LayOut from "../components/LayOut/LayOut";
import SignIn from "../components/SignIn/SignIn";
function LogIn() {
  return (
    <>
      <Header />
      <LayOut>
        <SignIn />
      </LayOut>
      <Footer />
    </>
  );
}

export default LogIn;
