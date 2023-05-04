<template>
  <div>
    <div class="row">
      <project-card v-for="project in paginatedProjects" :key="project.id" :project="project">
  <router-link :to="{ name: 'projectDetail', params: { id: project.id }}">
    Vedi dettagli
  </router-link>
</project-card>
    </div>
    <div class="pagination">
      <button v-if="currentPage > 1" @click="prevPage">Previous</button>
      <button v-if="currentPage < numPages" @click="nextPage">Next</button>
    </div>
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
      perPage: 21,
      currentPage: 1,
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
    nextPage() {
      this.currentPage++;
    },
    prevPage() {
      this.currentPage--;
    },
  },
  computed: {
    numPages() {
      return Math.ceil(this.projects.length / this.perPage);
    },
    paginatedProjects() {
      const startIndex = (this.currentPage - 1) * this.perPage;
      const endIndex = startIndex + this.perPage;
      return this.projects.slice(startIndex, endIndex);
    },
  },
};
</script>
<style lang="scss">
.pagination {
  display: flex;
  justify-content: center;
  margin-top: 1rem;
  button {
    background-color: #007bff;
    border: none;
    color: #fff;
    padding: 0.5rem 1rem;
    margin: 0 0.5rem;
    cursor: pointer;
    &:hover {
      background-color: #0069d9;
    }
  }
}
</style>