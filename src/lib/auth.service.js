import axios from "./axios";

class AuthService {
  async login(user) {
    console.log(user);
    const { data } = await axios.post("/auth/login", user);

    if (data.accessToken) {
      localStorage.setItem("user", JSON.stringify(data));
    }
    return data;
  }
  logout() {
    localStorage.removeItem("user");
  }
  async register(user) {
    return axios.post("/auth/register", user);
  }
  getToken() {
    const user = JSON.parse(localStorage.getItem("user"));
    if (!user) return null;
    return user.accessToken;
  }
}
export default new AuthService();
