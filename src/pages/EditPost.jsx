import Footer from "../components/Footer/Footer";
import EditForm from "../components/Form/EditForm";
import Header from "../components/Header/Header";
import LayOut from "../components/LayOut/LayOut";

function EditPost() {
  return (
    <>
      <Header />
      <LayOut>
        <EditForm />
      </LayOut>
      <Footer />
    </>
  );
}
export default EditPost;
