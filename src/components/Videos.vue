<template>
    <div class="wrapper">  

            <div class="videos-title">Checkout Our Youtube Channel</div>

            <div class="video-wrapper"> 

                <div class="single-video">         
                    <youtube :video-id="videoId1" @ready="ready" player-width="400" player-height="300" @playing="playing"></youtube>
                </div>

                <div class="single-video"> 
                    <youtube :video-id="videoId2" @ready="ready" player-width="400" player-height="300" @playing="playing"></youtube>
                </div>

                <div class="single-video"> 
                    <youtube :video-id="videoId3" @ready="ready" player-width="400" player-height="300" @playing="playing"></youtube>
                </div>
            </div>
    </div>
</template>

<script>
export default {
    name: 'Videos',
    data(){
        return{
            videoId1: 'L0iqUDlYMyo',
            videoId2: 'nD0R7Z93keM',
            videoId3: '1yQh7q_Bxlg',
        }
    },
    methods: {
        ready (event) {
        this.player = event.target
        },
        playing (event) {
        // The player is playing a video.
        },
        change () {
        // when you change the value, the player will also change.
        // If you would like to change `playerVars`, please change it before you change `videoId`.
        // If `playerVars.autoplay` is 1, `loadVideoById` will be called.
        // If `playerVars.autoplay` is 0, `cueVideoById` will be called.
        this.videoId = 'another video id'
        },
        stop () {
        this.player.stopVideo()
        },
        pause () {
        this.player.pauseVideo()
        }
    }
    }
</script>

<style scoped>
.single-video {
    border-radius: 15px;
    overflow: hidden;
}

.vueperslides {
    width: 80%;
}
.vueperslide {
  /* background: linear-gradient(-45deg, #EE7752, #E73C7E, #23A6D5, #23D5AB); */
  /* margin: 10px; */
  padding: 10px;
}

.wrapper {
    display: block;
    position: relative;
    width: 100%;
    height: 80vh;
    padding-top: 10vh;
    background-color: #75b82a;
}

.videos-title {
    font-weight: 900;
    font-size: 3em;
    margin-bottom: 10vh;
}

.video-wrapper {
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-around;
    align-items: space-evenly;

}

.description {
    display: block;
    font-size: 3em;
    color: black;
    font-weight: 900;
    float: left;
    width: 40%;
}

.liveimage {
    display: block;
    float: right;
    width: 40%;
    height: 70vh;
    background-size: cover;
    margin: 30px;
    border-radius: 10px;
    background-position: center;
}
</style>