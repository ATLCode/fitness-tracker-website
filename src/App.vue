<template>
  <NavBar />
  <router-view id="view" />
</template>

<script setup>
import NavBar from "@/components/NavBar";
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#view {
  padding-top: 50px;
  min-height: calc(100vh);
}
</style>
