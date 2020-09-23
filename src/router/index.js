import Vue from "vue";
import VueRouter from "vue-router";
import beforeEach from "./beforeEach";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Login",
    component: () =>
      import(/* webpackChunkName: "about" */ "../auth/Login.vue"),
    meta: {
      showMenu: false,
      title: "Login",
      icon: "",
    },
  },
  {
    path: "/home",
    name: "Home",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Home.vue"),
    meta: {
      showMenu: false,
      title: "Home",
      icon: "",
    },
  },
  {
    path: "/valor-dolar",
    name: "ValorDolar",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/DataPiker.vue"),
    meta: {
      showMenu: true,
      title: "Valor do Dolar",
      icon: "",
    },
  },
  {
    path: "/watchlist",
    name: "watch",
    component: () =>
      import(
        /* webpackChunkName: "about" */ "../views/watchList/WatchList.vue"
      ),
    meta: {
      showMenu: true,
      title: "WatchList",
      icon: "",
    },
  },
  {
    path: "/serie/:id",
    name: "serie",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/serie/Serie.vue"),
    meta: {
      showMenu: false,
      title: "Serie",
      icon: "",
    },
  },
  {
    path: "/watchedlist",
    name: "watched",
    component: () =>
      import(
        /* webpackChunkName: "about" */ "../views/watchedList/WatchedList.vue"
      ),
    meta: {
      showMenu: true,
      title: "WatchedList",
      icon: "",
    },
  },
  {
    path: "/allSeries",
    name: "series",
    component: () =>
      import(
        /* webpackChunkName: "about" */ "../views/allSeries/AllSeries.vue"
      ),
    meta: {
      showMenu: true,
      title: "allSeries",
      icon: "",
    },
  },
];

const router = new VueRouter({
  routes,
});

router.beforeEach(beforeEach);

export default router;
