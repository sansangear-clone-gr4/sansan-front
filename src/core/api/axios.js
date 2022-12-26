import axios from "axios";
import { getCookie } from "../../shared/Cookie";

export const instance = axios.create({
  baseURL: "http://localhost:3001",
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Content-type": "multipart/form-data",
  },
});

instance.interceptors.request.use((config) => {
  if (config.headers === undefined) return;
  const token = getCookie("userToken");
  config.headers["Authorization"] = `${token}`;
  return config;
});
