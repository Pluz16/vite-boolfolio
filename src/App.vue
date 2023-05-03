<template>
  <div class="container">
    <h1 class="text-center my-4">Boolfolio</h1>
    <div v-if="projects && showList">
      <portfolio :projects="projects" />
    </div>
  </div>
</template>

<script>
import Portfolio from './components/Portfolio.vue';
import axios from 'axios';

export default {
  name: 'App',
  components: {
    Portfolio,
  },
  data() {
    return {
      projects: [],
      showList: false,
    }
  },
  async mounted() {
    try {
      const response = await axios.get('http://localhost:8000/api/projects');
      this.projects = response.data.data;
      console.log(this.projects);
      this.showList = true; // Imposta showList su true dopo aver caricato i progetti
    } catch (error) {
      console.error(error);
    }
  },
}
</script>


<style lang="scss">
@import "./style.scss";
</style>
