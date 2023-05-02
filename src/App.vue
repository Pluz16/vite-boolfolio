<template>
  <div class="container">
    <h1 class="text-center my-4">Boolfolio</h1>
    <button class="btn btn-primary my-4" @click="showList = true">Visualizza la lista dei progetti</button>
    <projects-list v-if="showList" :projects="projects" />
  </div>
</template>

<script>
import ProjectsList from './components/ProjectsList.vue';
import axios from 'axios';

export default {
  name: 'App',
  components: {
    ProjectsList,
  },
  data() {
    return {
      projects: [],
      showList: false, // aggiungi questa variabile di stato per gestire la visualizzazione della lista
    }
  },
  async mounted() {
    try {
      const response = await axios.get('http://localhost:8000/api/projects');
      this.projects = response.data.data;
      console.log(this.projects);
    } catch (error) {
      console.error(error);
    }
  },
}
</script>

<style lang="scss">
@import "./style.scss"; // Importa il file style.scss
</style>
