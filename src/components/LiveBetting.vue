<template>
    <div class="wrapper">
        <div class="description">Enjoy the fastest loading live betting website in Kenya.
             Unaweza bet game ikiendelea. Click here to PLAY live.
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
        // console.log("two fucks==============>");
    },
}
</script>

<style scoped>
.wrapper {
    display: flex;
    position: relative;
    top: 70vh;
    z-index: 200;
    width: 100%;
    height: 100vh;
    padding-top: 30vh;
    background-color: white;
    padding-right: 50px;
    justify-content: center;
}

.description {
    display: block;
    font-size: 4em;
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
}
</style>