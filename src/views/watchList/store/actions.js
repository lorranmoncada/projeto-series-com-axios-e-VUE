import axios from "axios";

export default {
  async GET_WATCH_LIST({ commit }) {
    //axios.defaults.headers.common["Authorization"] = "Bearer " + localStorage.getItem("token");
    await axios
      .get("https://guarded-headland-11685.herokuapp.com/user/watchlist")
      .then((result) => {
        commit("SET_WATCHLIST", result.data.data);
      });
  },
  // eslint-disable-next-line no-unused-vars
  async ADD_SERIE_WATCH({commit}, serie) {
    await axios
      .post(
        "https://guarded-headland-11685.herokuapp.com/user/serie/watchlist",
        { serieID: serie.id }
      )
      .then(
        (data) => {
          console.log(data);
        },
        (error) => {
          console.log(error);
        }
      );
  },
};
