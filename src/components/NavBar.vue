<template>
  <div id="nav">
    <ul>
      <li><router-link to="/">Home</router-link></li>
      <li v-if="state.user">
        <router-link to="/calendar">Calendar</router-link>
      </li>
      <li v-if="state.user">
        <router-link to="/library">Library</router-link>
      </li>
      <li v-if="!state.user"><router-link to="/login">Login</router-link></li>
    </ul>
    <ul class="right">
      <li v-if="state.user">
        <router-link to="/settings">Settings</router-link>
      </li>
      <li v-if="state.user"><router-link to="/logout">Log Out</router-link></li>
    </ul>
  </div>
</template>

<script setup>
import useUserState from "@/store/useUserState";
const { state } = useUserState();
</script>

<style scoped lang="scss">
#nav {
  height: 50px;
  width: 100vw;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;

  li {
    float: left;
    list-style: none;
    &::after {
      content: "|";
      color: grey;
    }
    &:last-child::after {
      content: "";
    }
  }

  ul.right {
    position: absolute;
    right: 5px;
  }
  a {
    font-weight: bold;
    font-size: 1.5rem;
    color: $text-secondary;
    padding: 10px;

    &.router-link-exact-active {
      //color: #42b983;
      color: $text-primary;
    }
  }
}
</style>
