<template>
  <div class="page">
    <div class="form">
      <Tabs class="tabs" v-model="selectedTab" :tabs="tabs" />
      <div v-if="selectedTab === 'Login'" class="login">
        <CustomInput v-model="user.email" type="text" placeholder="email" />
        <CustomInput
          v-model="user.password"
          type="password"
          placeholder="password"
        />
        <CustomButton @click="login">Login</CustomButton>
      </div>
      <div v-else class="register">
        <CustomInput v-model="user.email" type="text" placeholder="email" />
        <CustomInput
          v-model="user.password"
          type="password"
          placeholder="password"
        />
        <CustomInput
          v-model="user.confirmPassword"
          type="password"
          placeholder="confirm password"
        />
        <CustomInput
          v-model="user.firstName"
          type="text"
          placeholder="first name"
        />
        <CustomInput
          v-model="user.lastName"
          type="text"
          placeholder="last name"
        />
        <CustomInput
          v-model="user.dob"
          type="text"
          placeholder="date of birth"
        />
        <CustomInput v-model="user.height" type="text" placeholder="height" />
        <CustomInput v-model="user.weight" type="text" placeholder="weight" />
        <CustomButton @click="register">Register</CustomButton>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref } from "vue";
import { useRouter } from "vue-router";
import Tabs from "@/components/Tabs.vue";
import CustomInput from "@/components/CustomInput.vue";
import CustomButton from "@/components/CustomButton.vue";
import useUserState from "@/store/useUserState";
const userState = useUserState();
const router = useRouter();
const tabs = ref(["Login", "Register"]);
const selectedTab = ref("Login");
const user = reactive({
  email: null,
  password: null,
  confirmPassword: null,
  firstName: null,
  lastName: null,
  dateOfBirth: null,
  height: null,
  weight: null,
});

async function login() {
  try {
    await userState.login({
      email: user.email,
      password: user.password,
    });
    router.push("/calendar");
  } catch (error) {
    console.error(error);
  }
}

async function register() {
  try {
    delete user.dateOfBirth;
    await userState.register(user);
    console.log("register success");
  } catch (error) {
    console.error(error);
  }
}
</script>

<style scoped lang="scss">
.page {
  background-image: $bg-darken, url("~@/assets/login.jpg");
  background-size: cover;
  display: flex;
  justify-content: center;
}

.form {
  width: 1000px;
  max-width: 95vw;
  display: flex;
  flex-direction: column;
  margin-top: 25vh;
}

.login,
.register {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;
}

.tabs {
  margin-bottom: 20px;
  font-size: 2rem;
}
</style>
