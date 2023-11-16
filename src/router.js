import { createRouter, createWebHashHistory } from "vue-router";

import SignupForm from "./components/SignupForm/index.vue";
import PageSucces from "./components/PageSucces.vue";

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: "/", component: SignupForm },
    { path: "/succes", component: PageSucces },
  ],
});
