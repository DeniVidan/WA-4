<template>
  <div class="home">
    <!-- <data-info v-for="podaci in podaci" :id="podaci.name" :details="podaci.authors" :key="podaci.name"/> -->

    <div class="card" v-for="podaci in podaci" :key="podaci.isbn" :id="podaci.isbn">
      <p> {{ podaci.name }}</p>
      <p> {{ podaci.isbn }}</p>
      <router-link :to="{ name: 'AboutView', params: { isbn : podaci.isbn } }"> VIŠE </router-link>
    </div>

  </div>
</template>

<script>
// @ is an alias to /src
/* import axios from "axios";
 */
export default {
  name: "HomeView",
  components: {},
  data() {
    return {
      podaci: [],
    };
  },

  async mounted() {
    let response = await fetch("http://localhost:3000/knjige");
    let lokalni_studenti = await response.json();
    this.podaci = lokalni_studenti;
    console.log(this.podaci);
  },
};
</script>

<style scoped>
.card{
  background-color: rgb(185, 185, 185);
  margin: auto;
}
</style>
