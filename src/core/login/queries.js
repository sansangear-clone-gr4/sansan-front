import { instance } from "../api/axios";

export const postLogin = async (post) => {
  try {
    const data = await instance.post("/api/user/login", post);
    return data;
  } catch (error) {
    console.log(error);
  }
};
