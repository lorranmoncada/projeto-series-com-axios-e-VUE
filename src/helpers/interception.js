import axios from "axios";
import store from "../store";

export const teste = () => {
  axios.interceptors.request.use(
    function(config) {
      const token = localStorage.getItem("token");
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    },
    function(err) {
      return Promise.reject(err);
    }
  );
};
/* export default  function setup() {
  axios.interceptors.request.use(
    function(config) {
      const token = localStorage.getItem("token");
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    },
    function(err) {
      return Promise.reject(err);
    }
  );
} */
export const req = () => {
  return ({ status }) => {
    if (status === 401) {
      store.dispatch("auth/SING_OUT");
      /* window._Vue.$router.push({ name: "login" }); */
    }
  };
}
/* export function req() {
  return ({ status }) => {
    if (status === 401) {
      store.dispatch("auth/ActionSignOut");
      window._Vue.$router.push({ name: "login" });
    }
  };
}
 */
