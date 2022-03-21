import AuthService from "./auth.service";
import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:8000/",
});

instance.interceptors.request.use(
  (config) => {
    const token = AuthService.getToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default instance;
