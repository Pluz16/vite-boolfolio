<template>
    <div class="row">
      <project-card v-for="project in projects" :key="project.id" :project="project" />
    </div>
  </template>
  
  <script>
  import ProjectCard from './ProjectCard.vue';
  
  export default {
    name: 'ProjectsList',
    components: {
      ProjectCard,
    },
    props: {
      projects: {
        type: Array,
        required: true,
      },
    },
  }
  </script>
  
  <style lang="scss">
  </style>
  