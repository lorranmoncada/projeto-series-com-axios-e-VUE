<template>
  <div>
    <span class="back-butoom">
      <router-link to="/home"
        ><i style="color: black;" class="material-icons"
          >arrow_back</i
        ></router-link
      >
    </span>

    <v-container
      id="scroll-target"
      style="max-height: 550px"
      class="overflow-y-auto"
    >
      <v-row>
        <SerieBox
          v-for="movie in allSeries"
          :key="movie.id"
          :serie="movie"
        ></SerieBox>
      </v-row>

      <v-row v-scroll:#scroll-target="onScroll" align="center" justify="center">
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import SerieBox from "../../components/SerieBox";
export default {
  data: () => ({
    offsetTop: 0,
  }),
  methods: {
    ...mapActions("allSeries", ["GET_ALL_SERIES"]),
    onScroll(e) {
      this.offsetTop = e.target.scrollTop;
    }
  },
  components: {
    SerieBox,
  },
  computed: {
    ...mapState("allSeries", ["allSeries"]),
  },
  mounted() {
    this.GET_ALL_SERIES();
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
