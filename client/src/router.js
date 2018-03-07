import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import About from "./views/About.vue";
import Signup from "./views/Signup.vue";
import Login from "./views/Login.vue";
import Profile from "./views/Profile.vue";
import Thread from "./views/Thread.vue";
import SeeAll from "./views/SeeAll.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/about",
      name: "about",
      component: About
    },
    {
      path: "/signup",
      component: Signup
    },
    {
      path: "/login",
      component: Login
    },
    {
      path: "/profile/:id",
      component: Profile
    },
    {
      path: "/thread/:id",
      component: Thread
    },
    {
      path: "/all-threads",
      component: SeeAll
    }
  ]
});
