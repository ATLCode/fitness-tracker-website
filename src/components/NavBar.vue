<template>
  <div id="nav">
    <router-link to="/">Home</router-link>|
    <router-link to="/login">Login</router-link>
  </div>
</template>

<script setup></script>

<style lang="scss">
#nav {
  height: 50px;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
