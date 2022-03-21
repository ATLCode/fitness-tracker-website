import { reactive } from "vue";
import AuthService from "../lib/auth.service";

const state = reactive({
  user: null,
});

export default function useUserState() {
  const login = async (user) => {
    state.user = await AuthService.login(user);
  };

  const logout = async () => {
    await AuthService.logout();
    state.user = null;
  };

  const register = async (user) => {
    await AuthService.register(user);
  };

  return { login, logout, register, state };
}
