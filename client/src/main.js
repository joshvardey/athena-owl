import Vue from "vue";
import Buefy from "buefy";
import "buefy/lib/buefy.css";
import "bulma-timeline/dist/bulma-timeline.min.css";
import App from "./App.vue";
import router from "./router";
// import VueFrame from "vue-frame";

Vue.use(Buefy);
Vue.config.productionTip = false;

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth && !vm.user) next("/login");
  else next();
});

const vm = new Vue({
  router,
  data: {
    user: null
  },
  render: h => h(App)
}).$mount("#app");
