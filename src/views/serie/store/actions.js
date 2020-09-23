import axios from "axios";

export default {
  GET_SERIE({ commit }, value) {
    commit(
      "OPEN_LOADING",
      { titulo: "loading...", color: "dark" },
      { root: true }
    );
    axios
      .get(`https://guarded-headland-11685.herokuapp.com/serie/${value.id}`)
      .then((res) => {
        commit("SET_SERIE", res.data.data);
      })
      .catch((error) => {
        console.error(error);
        commit("CLOSE_LOADING", { root: true });
      })
      .finally(() => {
        commit("CLOSE_LOADING", false, { root: true });
      });
  },
};
