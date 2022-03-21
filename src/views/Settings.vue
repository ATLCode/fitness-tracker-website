<template>
  <div class="settings-page">
    <Tabs class="tabs" v-model="selectedTab" :tabs="tabs" />
    <div v-if="selectedTab === 'Account Details'" class="account">
      <div class="acontent"></div>
    </div>
    <div v-else class="settings">
      <div class="scontent"></div>
    </div>
  </div>
</template>

<script setup>
import Tabs from "@/components/Tabs.vue";
import { ref } from "vue";
const tabs = ref(["Account Details", "Site Settings"]);
const selectedTab = ref("Account Details");
</script>

<style scoped lang="scss">
.settings-page {
  background-image: linear-gradient(rgba(4, 9, 30, 0.7), rgba(4, 9, 30, 0.7)),
    url("~@/assets/polar.jpg");
  display: flex;
  flex-direction: column;
  align-items: center;
  background-size: cover;
}
.tabs {
  max-width: 95vw;
  display: flex;
  flex-direction: row;
  margin-bottom: 2vh;
}
.account {
  display: flex;
  flex-direction: row;
}
.scontent,
.acontent {
  display: flex;
  flex-direction: column;
  gap: 10px;
  background-color: hsla(0, 0%, 30%, 0.8);
  border: 5px solid hsla(0, 0%, 15%, 0.8);
  width: 60vw;
  height: 80vh;
}
</style>
