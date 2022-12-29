import { configureStore } from "@reduxjs/toolkit";

import user from "../modules/userSlice";
import post from "../modules/postSlice";
import bucket from "../modules/bucketSlice";

const store = configureStore({
  reducer: { user: user, post: post, bucket: bucket },
});

export default store;
