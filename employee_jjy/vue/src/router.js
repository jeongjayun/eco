import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const router = new VueRouter({
  mod: "history",
  route: [
    {
      path: "/",
      component: "",
    },
  ],
});

export default router;
