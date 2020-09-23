<template>
  <div id="home">
    <div class="user-info">
      <h2>Olá {{ user.name }}</h2>
      <p>Bem vindo ao series withecs</p>
    </div>

    <div class="home-links">
      <router-link class="home-link" to="/watchlist">
        <i class="material-icons">playlist_play</i>
        <span>Assistir</span>
      </router-link>

      <router-link to="/watchedlist" href="#" class="home-link">
        <i class="material-icons">playlist_add_check</i>
        <span>Já vistos</span>
      </router-link>

      <router-link to="/allSeries" href="#" class="home-link">
        <i class="material-icons">dvr</i>
        <span>Séries</span>
      </router-link>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "Home",
  computed: {
    ...mapState("auth", ["user"]),
  },
};
</script>

<style scoped>
#home {
  height: 100vh;
  width: 100%;
}
.home-links {
  margin-top: 100px;
  /* flex-direction: column; */
  display: flex;
  /* align-items: center; */
  /* justify-content: center;*/
  justify-content: space-around;
}
.user-info {
  text-align: center;
}
.home-link {
  color: white;
  flex: 0 0 25%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  padding: 50px 0;
  margin: 0 15px;
}

a {
  cursor: pointer;
  text-decoration: none;
}

a:hover {
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.5);
  transition: 0.4s;
  transform: scale(1.1);
}

.home-link:first-child {
  background-color: blue;
}

.home-link:nth-child(2) {
  background-color: red;
}

.home-link:last-child {
  background-color: green;
}
.material-icons {
  font-size: 48px;
}
</style>
