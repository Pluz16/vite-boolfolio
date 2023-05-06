<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary fixed-top">
      <a class="navbar-brand" href="#">My Website</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link to="/" class="nav-link">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/about" class="nav-link">About</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/portfolio" class="nav-link">Portfolio</router-link>
          </li>
        </ul>
      </div>
    </nav>
    <div class="container">
      <slot name="content"/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Layout',
};
</script>

<style lang="scss">
  .navbar-brand {
    font-weight: bold;
    font-size: 1.5rem;
  }
  
  .navbar-nav .nav-link {
    font-weight: bold;
    text-transform: uppercase;
  }
  
  .container {
    margin-top: 4rem;
  }
</style>
