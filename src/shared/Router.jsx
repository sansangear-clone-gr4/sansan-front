import { BrowserRouter, Route, Routes } from "react-router-dom";
import Bucket from "../pages/Bucket";
import Detail from "../pages/Detail";
import EditPost from "../pages/EditPost";
import FAQ from "../pages/FAQ";
import Kakao from "../pages/KaKao";
import LogIn from "../pages/LogIn";
import Main from "../pages/Main";
import Posting from "../pages/Posting";
import Shop from "../pages/Shop";
import SignUp from "../pages/SignUp";
import Archive from "../pages/Archive";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/shop" element={<Shop />} />
        {/* </Routes><Route path="/shop/:category" element={</>}/> */}
        <Route path="/FAQ" element={<FAQ />} />
        <Route path="/posting" element={<Posting />} />
        <Route path="/editPost/:id" element={<EditPost />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/bucket" element={<Bucket />} />
        <Route path="/Archive" element={<Archive />} />
        <Route path="/api/user/kakao/callback" element={<Kakao />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
