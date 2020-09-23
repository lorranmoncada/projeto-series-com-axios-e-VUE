<template>
  <div>
    <nav color="grey lighten-4" flat tile>
      <v-toolbar dense>
        <v-app-bar-nav-icon @click="teste1()"></v-app-bar-nav-icon>
        <router-link style="text-decoration:none; color:black;" to="/home">
          <v-toolbar-title>
            <span class="font-weight-light">Projeto</span>
            <span>Vuetfy</span>
          </v-toolbar-title>
        </router-link>

        <v-spacer></v-spacer>

        <v-btn icon>
          <span @click="SING_OUT" style="cursor: pointer;">Sing Out</span>
          <v-icon>exit_to_app</v-icon>
        </v-btn>
      </v-toolbar>
    </nav>

    <div>
      <v-navigation-drawer
        style="top: 48px; !important"
        v-model="drawer"
        app
        absolute
        dark
        ><ul
          style="list-style: none;
    display: grid;
    justify-content: center;
    margin-left: -40px;"
        >
          <router-link
            exact
            style="margin-top: 16px;"
            v-for="(rota, i) in routes"
            :key="i"
            tag="li"
            exact-active-class="active"
            :to="{ name: rota.name }"
          >
            <span style="color:white;cursor: pointer;">{{
              rota.meta.title
            }}</span>
          </router-link>
        </ul>
      </v-navigation-drawer>
    </div>
  </div>

  <!-- <nav>
    <v-toolbar flat app>
      <v-toolbar-title class="text-uppercase">
        <span class="font-weight-light">Projeto</span>
        <span>Vuetfy</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <div><span style="cursor: pointer;">Sing Out</span> <v-icon right>exit_to_app</v-icon></div>
    </v-toolbar>
  </nav> -->
</template>

<script>
import { mapActions } from "vuex";
export default {
  data: () => ({
    drawer: false,
  }),
  computed: {
    routes() {
      return this.$router.options.routes.filter((rota) => rota.meta.showMenu);
    },
  },
  methods: {
    ...mapActions("auth", ["SING_OUT"]),
    teste1() {
      this.drawer = !this.drawer;
    },
  },
  mounted() {
    console.log(this.routes);
  },
};
</script>
