<template>
    <div class="wrapper" v-bind:style="{ backgroundColor: this.$store.state.bgColor }">
        <div class="description" v-bind:style="{ color: this.$store.state.textColor }">
            Enjoy the fastest loading live betting website in Kenya.
             Unaweza bet game ikiendelea. Click <a class="link-to-betika" href="https://betika.com/live">here</a> to PLAY live.
        </div>

        <div class="liveimage" :style="{ backgroundImage: 'url(' + image + ')' }"></div>
    </div>
</template>

<script>
export default {
    name: 'LiveBetting',
    data(){
        return{
            image: require('../assets/livebets.png')
        }
    },
    mounted(){
        // store.commit('setDarkMode');
        // console.log('vuex store=========>', store.state.darkMode);
    },
    
}
</script>

<style scoped>
.link-to-betika {
    color: #75b82a;
}

.wrapper {
    display: flex;
    position: relative;
    /* z-index: 200; */
    width: 100%;
    height: 100vh;
    padding-top: 10vh;
    justify-content: center;
    align-items: center;
}

.description {
    display: block;
    font-size: 3em;
    font-weight: 900;
    float: left;
    width: 30%;
}

.liveimage {
    display: block;
    float: right;
    width: 50%;
    height: 70vh;
    background-size: cover;
    margin: 30px;
    border-radius: 5px;
}
</style>