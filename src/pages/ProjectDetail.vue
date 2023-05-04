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
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    name: 'ProjectDetail',
    data() {
      return {
        project: {},
      };
    },
    async mounted() {
      await this.fetchProject();
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
    },
  };
  </script>
  
  <style scoped>
  </style>
  
  