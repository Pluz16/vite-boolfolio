<template>
  <div class="container py-5">
    <div class="row">
      <div class="col-12">
        <h1 class="mb-5">{{ project.title }}</h1>
      </div>
    </div>
    <div class="row">
      <div class="col-12 col-md-6">
        <img :src="project.image" class="img-fluid mb-3" alt="">
      </div>
      <div class="col-12 col-md-6">
        <p>{{ project.description }}</p>
      </div>
    </div>
    <div class="row">
      <div class="col-12">
        <h2 class="mb-3">Altri progetti correlati:</h2>
        <div class="row">
          <project-card v-for="project in relatedProjects" :key="project.id" :project="project">
            <router-link :to="{ name: 'projectDetail', params: { id: project.id }}">Vedi dettagli</router-link>
          </project-card>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios';
import ProjectCard from './ProjectCard.vue';

export default {
  name: 'ProjectDetail',
  components: {
    ProjectCard,
  },
  data() {
    return {
      project: {},
      relatedProjects: [],
    };
  },
  async mounted() {
    await this.fetchProject();
    await this.fetchRelatedProjects();
  },
  methods: {
    async fetchProject() {
      try {
        const response = await axios.get(`http://localhost:8000/api/projects/${this.$route.params.id}`);
        this.project = response.data.data;
        console.log(this.project);
      } catch (error) {
        console.error(error);
      }
    },
    async fetchRelatedProjects() {
      try {
        const response = await axios.get(`http://localhost:8000/api/projects?category=${this.project.category}&_limit=3&_sort=createdAt:desc`);
        this.relatedProjects = response.data.data;
        console.log(this.relatedProjects);
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>
<style scoped>
</style>