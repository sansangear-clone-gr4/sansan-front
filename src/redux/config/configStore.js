import { configureStore } from "@reduxjs/toolkit";
import user from "../modules/userSlice";

const store = configureStore({
  reducer: { user: user },
});

export default store;
