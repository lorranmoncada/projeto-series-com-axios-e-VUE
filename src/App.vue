<template>
  <v-app class="grey lighten-4">
    <NavBar v-if="token !== null"></NavBar>
    <v-main>
      <v-container>
        <v-dialog v-model="load.estado" hide-overlay persistent width="300">
          <v-card :color="load.color" dark>
            <v-card-text>
              {{ load.titulo }}
              <v-progress-linear
                indeterminate
                color="white"
                class="mb-0"
              ></v-progress-linear>
            </v-card-text>
          </v-card>
        </v-dialog>
        <router-view />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import { mapState } from "vuex";
import NavBar from "@/components/NavBar";
export default {
  name: "App",
  components: {
    NavBar,
  },
  computed: {
    ...mapState({
      load: "loading",
    }),
    ...mapState("auth", ["token"]),
  },
  mounted() {
    console.log(this.token);
  },
};
</script>
