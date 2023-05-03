<template>
  <div class="row">
    <project-card v-for="project in projects" :key="project.id" :project="project" />
  </div>
</template>

<script>
import ProjectCard from './ProjectCard.vue';
import axios from 'axios';

export default {
  name: 'Portfolio',
  components: {
    ProjectCard,
  },
  data() {
    return {
      projects: [],
    };
  },
  async mounted() {
    await this.fetchProjects();
  },
  methods: {
    async fetchProjects() {
      try {
        const response = await axios.get('http://localhost:8000/api/projects');
        this.projects = response.data.data;
        console.log(this.projects);
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>

<style lang="scss">
</style>
