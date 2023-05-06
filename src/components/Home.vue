<template>
    <div>
      <h1>Benvenuti nella mia pagina personale</h1>
      <p>Qui potete trovare informazioni su di me e sui miei progetti</p>
    <button class="btn-home" @click="goToPortfolio">Vai al Portfolio</button>
    <button class="btn-home" @click="goToAbout">About</button>
    </div>
  </template>
  
  <script>
export default {
  name: 'Home',
  methods: {
  goToPortfolio() {
    this.$router.push('/portfolio');
  },
  goToAbout() {
    this.$router.push('/about');
  },
},
};
</script>
  


<style lang="scss">

.home {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f9f9f9;
  color: #333;
  font-size: 2rem;
  text-align: center;
}

.btn-home {
  display: block;
  width: 200px;
  margin: 0 auto;
  margin-top: 50px;
  padding: 15px;
  font-size: 18px;
  font-weight: bold;
  text-align: center;
  color: #fff;
  background-color: #0069d9;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: #0056b3;
  }
}
</style>
  