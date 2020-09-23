export default {
  SET_USER(state, data) {
    localStorage.setItem("user", JSON.stringify(data));
    state.user = data;
  },
  SET_TOKEN(state, data) {
    localStorage.setItem("token", data);
    state.token = data;
  },
  SING_OUT(state) {
    localStorage.clear();
    state.user = null;
    state.token = null;
  },
};
