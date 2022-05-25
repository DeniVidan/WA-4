<template>

<div class="moreDetails">
  <div class="card" v-if="podaci">
    <p v-for="(a, i) in podaci.authors" :key="i">Author: {{ a }}</p>
    <p>Title: {{ podaci.name }}</p>
    <p>Released: {{ podaci.released }}</p>
    <p>isbn: {{ podaci.isbn }}</p>
    <p>Broj stranica: {{ podaci.numberOfPages }}</p>
    <p v-if="podaci.characters">Broj likova: {{ podaci.characters.length }} </p>
    <p>Broj izdavaca: {{ podaci.publisher }}</p>
    <p></p>
  </div>
</div>

</template>

<script>
import axios from "axios";

export default {
  name: "AboutView",

  data() {
    return {
      isbn: this.$route.params.isbn,
      podaci: [],

    };
  },
  props: {

  },
  async mounted() {
    console.log(this.isbn)
    const get = await axios.get(
      `http://localhost:3000/knjige/${this.isbn}`
      );
    this.podaci = get.data;
    
  },
};
</script>

<style></style>
