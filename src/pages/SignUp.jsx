import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import LayOut from "../components/LayOut/LayOut";
import Register from "../components/Register/Register";

function SignUp() {
  return (
    <>
      <Header />
      <LayOut>
        <Register />
      </LayOut>
      <Footer />
    </>
  );
}

export default SignUp;
