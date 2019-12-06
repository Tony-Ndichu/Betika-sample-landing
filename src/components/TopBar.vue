<template>
  <v-card class="outer-wrapper">

  <iframe :src="music" allow="autoplay" style="display:none" id="iframeAudio"></iframe> 
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
           <v-menu
          bottom
          transition="slide-y-transition"
          :close-on-content-click="closeOnContentClick"
        >
          <template v-slot:activator="{ on }">
            <v-btn
              icon
              color="#75b82a"
              v-on="on"
            >
              <v-icon>mdi-dots-vertical</v-icon>
            </v-btn>
          </template>
  
          <v-list class="topmenu">
            <v-list-item>
              <v-list-item-title class="div-content">
                <v-icon class="icon">fas fa-moon</v-icon>DarkMode</v-list-item-title>
                                <v-switch color="success" v-model="switchState" flat></v-switch>

            </v-list-item>

           <v-list-item>
            <v-list-item-title class="div-content">
                <v-icon class="icon">fas fa-volume-mute</v-icon>Mute</v-list-item-title>
                                <v-switch color="success" v-model="switchVolume" flat></v-switch>

            </v-list-item>
          </v-list>
        </v-menu>

    </v-app-bar>
    <v-sheet
      id="scrolling-techniques-8"
      class="overflow-y-auto"
      max-height="100vh"
    >
    <Banner />
    <Sports />
    <LiveBetting />
    <Casino />
    <Videos />
    <Services />
    </v-sheet>
  </v-card>

</template>

<script>
import Banner from './Banner.vue';
import Sports from './Sports.vue';
import LiveBetting from './LiveBetting';
import Casino from './Casino';
import Videos from './Videos';
import Services from './Services';

import { mapState } from 'vuex';

export default {
  name: 'app',
  components: {
    Banner,
    Sports,
    LiveBetting,
    Casino,
    Videos,
    Services,
  },
  data(){
    return{
      items: [
        { title: 'DarkMode' },
        { title: 'Sound' },
      ],
      switchState: false,
      switchVolume: '',
      closeOnContentClick: false,
      bgColor: '',
      music: 'https://files.freemusicarchive.org/storage-freemusicarchive-org/music/no_curator/Scott_Holmes/Inspiring__Upbeat_Music/Scott_Holmes_-_06_-_Clear_Progress.mp3',
  }
},
 computed: mapState(['darkMode']),
watch: {
  switchState(newValue){
        //called whenever switchState changes
        this.$vuetify.theme.dark = newValue;
        if (newValue){
         this.$store.dispatch('setDarkMode');
        } else {
          this.$store.dispatch('setLightMode');
        }
        localStorage.setItem('isDark', newValue);
      }, 
    switchVolume(newValue){
      if (newValue){
        this.music = '';
      } else {
        this.music = 'https://files.freemusicarchive.org/storage-freemusicarchive-org/music/no_curator/Scott_Holmes/Inspiring__Upbeat_Music/Scott_Holmes_-_06_-_Clear_Progress.mp3';
      }
    },
    darkMode(newValue, oldValue) {
      console.log(`Updating from ${oldValue} to ${newValue}`); 
      if (newValue){
      this.bgColor = 'black';
      } else {
        this.bgColor = 'white';
      }
    }
},
}
</script>

<style scoped>

.icon {
  margin-right: 10px;
}

.topmenu {
  width: 200px;
}

.div-content {
  text-align: none;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
}

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