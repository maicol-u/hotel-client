<template>
  <NavigationHome />
  <div class="container">
    <router-view />
  </div>
</template>

<script>

import NavigationHome from './components/NavigationHome';

export default {
  components: {
    NavigationHome
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
