<template>
  <div>
    <span class="back-butoom">
      <router-link to="/home"
        ><i style="color: black;" class="material-icons"
          >arrow_back</i
        ></router-link
      >
    </span>
    <v-row>
      <SerieBox
        v-for="movie in watchList"
        :key="movie.id"
        :serie="movie"
      ></SerieBox>
    </v-row>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import SerieBox from "../../components/SerieBox";
export default {
  methods: {
    ...mapActions("watchList", ["GET_WATCH_LIST"]),
  },
  components: {
    SerieBox,
  },
  computed: {
    ...mapState("watchList", ["watchList"]),
  },
  mounted() {
    this.GET_WATCH_LIST();
  },
};
</script>

<style scoped>
.back-butoom {
  justify-content: flex-end;
  display: flex;
  cursor: pointer;
}
</style>
