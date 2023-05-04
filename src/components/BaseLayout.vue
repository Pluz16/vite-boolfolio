<template>
    <div>
      <nav>
        <a href="#">Logo</a>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Portfolio</a></li>
        </ul>
      </nav>
      
      <div class="container">
        <slot name="content" />
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Layout',
    props: {
      pageTitle: {
        type: String,
        default: 'My Website'
      }
    },
  };
  </script>

  <style lang="scss">
$primary-color: #007bff;
$secondary-color: #6c757d;
$nav-height: 4rem;

nav {
  background-color: $primary-color;
  height: $nav-height;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1rem;
  
  a {
    color: white;
    text-decoration: none;
    font-size: 1.2rem;
    font-weight: bold;
    text-transform: uppercase;
  }
}

.main-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem;
}



    </style>