import axios from "axios";

export default {
  GET_ALL_SERIES({ commit, dispatch }) {
    commit(
      "OPEN_LOADING",
      { titulo: "loading...", color: "dark" },
      { root: true }
    );
    axios
      .get(`https://guarded-headland-11685.herokuapp.com/serie/`)
      .then((res) => {
        commit("SET_ALL_SERIES", res.data.data);
      })
      .catch((error) => {
        if (error.response.status == 401) {
          dispatch("auth/SING_OUT", null, { root: true });
        }
        commit("CLOSE_LOADING", false, { root: true });
      })
      .finally(() => {
        commit("CLOSE_LOADING", false, { root: true });
      });
  },
};
