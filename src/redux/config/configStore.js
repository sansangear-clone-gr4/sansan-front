import { configureStore } from "@reduxjs/toolkit";
import post from "../modules/postSlice";

const store = configureStore({
  reducer: { post: post },
});

export default store;
