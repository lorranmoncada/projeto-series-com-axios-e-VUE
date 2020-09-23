import axios from "axios";

export default {
  async GET_WATCHED_LIST({ commit }) {
    //axios.defaults.headers.common["Authorization"] = "Bearer " + localStorage.getItem("token");
    await axios
      .get("https://guarded-headland-11685.herokuapp.com/user/watchedlist")
      .then((result) => {
        commit("SET_WATCHEDLIST", result.data.data);
      });
  },

  async ADD_SERIE_WACHED(serie) {
    await axios
      .post(
        "https://guarded-headland-11685.herokuapp.com/user/serie/watched",
        serie
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
  async DELETE_SERIE_WACHED(serie) {
    await axios
      .post(
        `https://guarded-headland-11685.herokuapp.com/user/serie/watched/${serie.id}`
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
