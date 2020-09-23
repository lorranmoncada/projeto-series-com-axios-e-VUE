<template>
  <div id="serie">
    <SerieBox :serie="serieObj"></SerieBox>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import SerieBox from "../../components/SerieBox";

export default {
  components: {
    SerieBox,
  },
  computed: {
    ...mapState("serie", ["serieObj"]),
  },
  methods: {
    ...mapActions("serie", ["GET_SERIE"]),
  },
  mounted() {
    this.GET_SERIE({ id: this.$route.params.id });
  },
};
</script>

<style>
#serie {
  display: flex;
  justify-content: center;
}
</style>
