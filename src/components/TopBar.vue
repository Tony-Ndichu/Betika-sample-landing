<template>
  <v-card class="overflow-hidden">
    <v-app-bar
      class="navbar"
      absolute
      color="black"
      dark
      inverted-scroll
      scroll-target="#scrolling-techniques-8"
    >
      <v-toolbar-title class="logo"><img src="https://www.betika.com/static/logo.1e28851.png" alt="logo" /></v-toolbar-title>

      <v-spacer></v-spacer>

    </v-app-bar>
    <v-sheet
      id="scrolling-techniques-8"
      class="overflow-y-auto"
      max-height="100vh"
    >
    <Banner />
    <div class="sports-wrapper">
      <Sports />
    </div>
    <LiveBetting />
    </v-sheet>

  </v-card>
  
</template>

<script>
import Banner from './Banner.vue';
import Sports from './Sports.vue';
import LiveBetting from './LiveBetting';

export default {
  name: 'app',
  components: {
    Banner,
    Sports,
    LiveBetting,
  }
}

</script>

<style scoped>

.music-button {
    position: fixed;
    display: block;
    color: red;
    z-index: 999;
}

.logo {
    width: 120px;
    position: relative;
}

.logo img {
    width: 100%;
}

.navbar {
    z-index: 100;
}
</style>