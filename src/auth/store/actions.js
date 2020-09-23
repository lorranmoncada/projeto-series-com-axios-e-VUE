/* import Vue from "vue";
import Vuex from "vuex"; */
import axios from "axios";
import router from "../../router";

/* Vue.use(Vuex); */

export default {
  async SEND_USER({ dispatch, commit }, value) {
    commit(
      "OPEN_LOADING",
      { titulo: "loading...", color: "dark" },
      { root: true }
    );
    await axios
      .post("https://guarded-headland-11685.herokuapp.com/login", value)
      .then((data) => {
        commit("SET_USER", data.data.user);
        commit("SET_TOKEN", data.data.token);
        dispatch("teste");
        router.push({ name: "Home" });
      })
      .catch((error) => {
        console.error(error);
        commit("CLOSE_LOADING", { root: true });
      })
      .finally(() => {
        commit("CLOSE_LOADING", false, { root: true });
      });
  },
  teste({ commit }) {
    axios
      .get(`https://guarded-headland-11685.herokuapp.com/load-session`)
      .then((data) => {
        commit("SET_USER", data.data.user);
        commit("SET_TOKEN", data.data.token);
      });
  },
  SING_OUT({ commit }) {
    commit("SING_OUT");
    router.push({ name: "Login" });
  },
};
