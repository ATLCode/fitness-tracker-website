import AuthService from "./auth.service";
import axios from "axios";
import useUserState from "../store/useUserState";

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

instance.interceptors.response.use(
  (response) => {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
  (error) => {
    if (error.response.status === 401) {
      useUserState.logout();
    }
    return Promise.reject(error);
  }
);

export default instance;
