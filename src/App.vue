<template>
<v-app>
  <div id="app">
    <TopBar />
  </div>
</v-app>
</template>

<script>
import TopBar from './components/TopBar.vue';

export default {
  name: 'app',
  components: {
    TopBar,
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Anton&display=swap');

#app {
  font-family: 'Anton', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
