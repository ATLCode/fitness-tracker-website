<template>
  <div class="page">
    <div class="form">
      <Tabs class="tabs" v-model="selectedTab" :tabs="tabs" />
      <div v-if="selectedTab === 'Login'" class="login">
        <CustomInput type="text" placeholder="email" />
        <CustomInput type="password" placeholder="password" />
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
      </div>
    </div>
  </div>
</template>

<script setup>
import Tabs from "@/components/Tabs.vue";
import CustomInput from "@/components/CustomInput.vue";
import { reactive, ref } from "vue";
const tabs = ref(["Login", "Register"]);
const selectedTab = ref("Login");
const user = reactive({
  email: "",
  password: "",
  confirmPassword: "",
  firstName: "",
  lastName: "",
  dateOfBirth: "",
  height: "",
  weight: "",
});
</script>

<style>
.page {
  background-image: linear-gradient(rgba(4, 9, 30, 0.7), rgba(4, 9, 30, 0.7)),
    url("~@/assets/weight.jpg");
  background-size: cover;
  display: flex;
  justify-content: center;
}

.form {
  width: 1000px;
  max-width: 95vw;
  display: flex;
  flex-direction: column;
  margin-top: 40vh;
}

.login,
.register {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.tabs {
  margin-bottom: 20px;
  font-size: 2rem;
}
</style>
