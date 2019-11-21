<template>
    <div id="wrapper">

        <div id="video" v-show="elementVisible">
            <iframe frameborder="0" height="100%" width="100%" 
                src="https://www.youtube.com/embed/j4pKI1fnq5Q?autoplay=1&mute=1&controls=0&loop=1&playlist=j4pKI1fnq5Q" >
            </iframe>
        </div>


        <div id="header-text">
            <transition name="fade">
                <div v-if="showFirst" class="banner" style="animation-duration: 2s">
                    It's more than just a game
                </div>
            </transition>
            

            <transition name="fade">
                <div v-if="showSecond" class="banner" style="animation-duration: 2s">
                    It's a feeling
                </div>
            </transition>

            <transition name="fade">
                <div v-if="showThird" class="banner" style="animation-duration: 2s">
                    To be a Champion
                </div>
            </transition>

            <transition name="fade">
                <div v-if="showFourth" class="banner" style="animation-duration: 2s">
                    GRAND JACKPOTS
                </div>
            </transition>

            <transition name="fade">
                <div v-if="showFifth" class="banner" style="animation-duration: 2s">
                    LIVE BETTING
                </div>
            </transition>

            <transition name="fade">
                <div v-if="showLast" class="banner" style="animation-duration: 2s">
                    <img src="https://www.betika.com/static/logo.1e28851.png" alt="logo" />
                </div>
            </transition>


            <transition name="fade">
                <div v-if="scrollButton" class="banner" style="animation-duration: 2s">
                        <v-btn
                            :loading="loading5"
                            :disabled="loading5"
                            color="#27357f"
                            class="ma-2 white--text"
                            fab
                            >
                            <v-icon v-scroll-to="'#sports-header'" dark>fas fa-chevron-down</v-icon>
                        </v-btn>
                </div>
            </transition>

            

        </div>


  <iframe src="https://files.freemusicarchive.org/storage-freemusicarchive-org/music/no_curator/Scott_Holmes/Inspiring__Upbeat_Music/Scott_Holmes_-_06_-_Clear_Progress.mp3" allow="autoplay" style="display:none" id="iframeAudio">
</iframe> 

        </div>
</template>

<script>
import 'vue2-animate/dist/vue2-animate.min.css';

export default {
  name: 'Banner',
  data() {
      return {
        show: false,
        elementVisible: false,
        showFirst: false,
        showSecond: false,
        showThird: false,
        showFourth: false,
        showFifth: false,
        showLast: false,
        scrollButton: false,
      }
    },
    beforeMount() {
        /* eslint-disable no-console */
    },
    mounted() {
        this.playFirst();
        this.playBackgroundVideo();
        this.playSecond();
        this.playThird();
        this.playFourth();
        this.playFifth();
        this.playLast();
        this.playScrollButton();
    },
    methods: {
        playBackgroundVideo(){
            setTimeout(() => {
            this.elementVisible = true; 
            }, 500);

            // setTimeout(() => {
            // this.elementVisible = false; 
            // }, 42000);
        },
        playFirst(){
            setTimeout(() => {
                this.showFirst = true;
                }, 500);
           setTimeout(() => {
                this.showFirst = false;
                }, 3000);
        },
        playSecond(){
            setTimeout(() => {
                this.showSecond = true;
                }, 5000);
            setTimeout(() => {
                this.showSecond = false;
            }, 8000);
        },
        playThird(){
            setTimeout(() => {
                this.showThird = true;
                }, 10000);
            setTimeout(() => {
                this.showThird = false;
            }, 13000);
        },
         playFourth(){
            setTimeout(() => {
                this.showFourth= true;
                }, 15000);
            setTimeout(() => {
                this.showFourth = false;
            }, 18000);
        },
         playFifth(){
            setTimeout(() => {
                this.showFifth= true;
                }, 20000);
            setTimeout(() => {
                this.showFifth = false;
            }, 23000);
        },
        playLast(){
            setTimeout(() => {
                this.showLast= true;
                }, 25000);
        },
        playScrollButton(){
          setTimeout(() => {
            this.scrollButton = true; 
            }, 28000);
        },


  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.header-text{
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 100vh;
    color: black;

}

#video {
    z-index: -3;
    top: 0;
    left: 0;
    right: 0;
    height: 100vh;
    opacity: 0.2;
}

#wrapper {
    display: block;
    width:100%;
    height:100vh;
    background-color: black;
}
.banner {
    z-index: 2;
}

#header-text {
    color: white;
    width: 50%;
	height: 100px;
	position: absolute;
	top:0;
	bottom: 0;
	left: 0;
	right: 0;
	margin: auto;
    font-size: 3.5em;
    font-weight: 900;
}
</style>