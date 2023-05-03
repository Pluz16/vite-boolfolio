<template>
    <div class="col-md-4 mb-4">
      <div class="card h-100">
        <div class="card-body">
          <h5 class="card-title">{{ project.name }}</h5>
          <p class="card-text">{{ project.description }}</p>
          <ul class="list-unstyled">
            <li>URL: <a :href="project.url" target="_blank">{{ project.url }}</a></li>
            <li>Type: {{ project.type }}</li>
            <!-- <li>Technology: {{ project.technology }}</li> -->
          </ul>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ProjectCard',
    props: {
      project: {
        type: Object,
        required: true,
      },
    },
  }
  </script>
  
  <style lang="scss">
  .card {
    border: none;
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);
  }
  </style>
  