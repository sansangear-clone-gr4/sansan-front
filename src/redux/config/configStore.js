import { configureStore } from "@reduxjs/toolkit";

import user from "../modules/userSlice";
import post from "../modules/postSlice";

const store = configureStore({
  reducer: { user: user, post: post },
});

export default store;
