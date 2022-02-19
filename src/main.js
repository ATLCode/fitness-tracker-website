import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "vue-material/dist/vue-material.min.css";
import "vue-material/dist/theme/default.css";
//import { MdButton, MdContent, MdTabs } from "vue-material/dist/components";

createApp(App).use(router).mount("#app");
