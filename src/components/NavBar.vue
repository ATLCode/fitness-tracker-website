<template>
  <div id="nav">
    <div id="hamburger">
      <div @click="toggleNav()">
        <HamburgerIcon :size="32" />
      </div>
    </div>
    <ul class="navList">
      <li><router-link to="/">Home</router-link></li>
      <li v-if="state.user">
        <router-link to="/calendar">Calendar</router-link>
      </li>
      <li v-if="state.user">
        <router-link to="/library">Library</router-link>
      </li>
      <li v-if="!state.user"><router-link to="/login">Login</router-link></li>
    </ul>
    <ul class="right navList">
      <li v-if="state.user">
        <router-link to="/settings">Settings</router-link>
      </li>
      <li v-if="state.user">
        <router-link to="/logout">Log Out</router-link>
      </li>
    </ul>
  </div>
</template>

<script setup>
import useUserState from "@/store/useUserState";
import HamburgerIcon from "vue-material-design-icons/Menu.vue";
const { state } = useUserState();
function toggleNav() {
  const x = document.querySelectorAll(".navList");
  x.forEach((el) => {
    if (el.style.display === "flex") {
      el.style.display = "none";
    } else {
      el.style.display = "flex";
    }
  });
}
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
#hamburger {
  display: none;
}
@media only screen and (max-width: 600px) {
  #nav {
    display: block;
    height: auto;
    width: 100vw;
    li {
      display: flex;
      justify-content: center;
      &::after {
        content: "";
      }
    }

    ul {
      display: none;
      flex-direction: column;
      z-index: 5;
      margin: 0px;
      padding: 0px;
      background-color: $bg-hamburger;
    }
    ul.right {
      position: initial;
      // float: left;
    }
  }
  #hamburger {
    display: flex;
    justify-content: flex-end;
    div {
      margin: 5px;
    }
  }
}
</style>
