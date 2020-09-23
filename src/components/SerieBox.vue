<template>
  <v-col md="3" ls="3" xs="6">
    <v-card
      class="mx-auto"
      max-width="400"
      style="margin-right: 12px !important;margin-left: 12px !important"
    >
      <router-link :to="{ name: 'serie', params: { id: serie.id } }">
        <v-img
          class="white--text align-end"
          height="200px"
          :src="serie.image"
          loading="lazy"
        ></v-img>

        <v-card-subtitle class="pb-0">
          <strong>{{ serie.title }}</strong>
        </v-card-subtitle>
      </router-link>

      <v-card-actions style="display: flex;justify-content: space-around;">
        <button type="button" @click="eventWatchList(serie)">
          {{
            serie.watchlist ? "Remover da WatchList" : "Adicionar a WachtList"
          }}
        </button>

        <button type="button" @click="eventWatchedList(serie)">
          {{
            serie.watched ? "Remover de WatchedList" : "Adicionar a WatchedList"
          }}
        </button>
      </v-card-actions>
    </v-card>
  </v-col>
</template>

<script>
import { mapActions } from "vuex";
export default {
  props: {
    serie: { type: Object, required: true },
  },
  methods: {
    ...mapActions("watchedList", ["ADD_SERIE_WACHED"]),
    ...mapActions("watchList", ["ADD_SERIE_WATCH"]),

    eventWatchList(serie) {
      if (serie.watchlist) {
        //remover da wuatchList
      } else {
        this.ADD_SERIE_WATCH(serie, null, {root:true});
      }
    },
    eventWatchedList(serie) {
      if (serie.watched) {
        //remover da wuatchList
      } else {
        this.ADD_SERIE_WACHED(serie);
      }
    },
  },
};
</script>

<style scoped>
button {
  color: orange;
  font-size: 14px;
  outline-style: none;
}

button:hover {
  color: #ffbf49;
  font-size: 14px;
}
</style>
