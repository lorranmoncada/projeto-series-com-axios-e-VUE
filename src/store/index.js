import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import modules from "./modules";

Vue.use(Vuex);

const state = {
  valorMoeda: null,
  loading: {
    titulo: "",
    color: "dark",
    estado: false,
  },
};

const actions = {
  async getAllPosts({ commit }, value) {
    commit("OPEN_LOADING", { titulo: "carregando...", color: "dark" });
    await axios
      .get(`https://mindicador.cl/api/dolar/${value}`)
      .then((data) => {
        if (data.data.serie[0]?.valor != undefined) {
          commit("SET_VALOR_MOEDA", data.data.serie[0].valor);
        } else {
          commit("SET_VALOR_MOEDA", "Sem valor registrado");
        }
      })
      .catch((error) => {
        console.log("Erro:" + error.response.data.error[0]);
        commit("CLOSE_LOADING");
      })
      .finally(() => {
        commit("CLOSE_LOADING");
      });
  },
};

const mutations = {
  SET_VALOR_MOEDA(state, value) {
    state.valorMoeda = value;
  },
  OPEN_LOADING(state, data) {
    state.loading.titulo = data.titulo;
    state.loading.color = data.color;
    state.loading.estado = true;
  },
  CLOSE_LOADING(state, data = false) {
    state.loading.estado = data;
  },
};
const getters = {
  GET_MOEDA(state) {
    if (state.valorMoeda !== "Sem valor registrado") {
      return "$ " + state.valorMoeda;
    } else {
      return state.valorMoeda;
    }
  },
};

const store = new Vuex.Store({ state, actions, mutations, getters, modules });

export default store;
