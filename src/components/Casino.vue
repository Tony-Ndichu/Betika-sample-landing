<template>
    <div class="wrapper" v-bind:style="{ backgroundColor: this.$store.state.bgColor }">
        <div class="liveimage" :style="{ backgroundImage: 'url(' + image + ')' }"></div>

        <div class="description" v-bind:style="{ color: this.$store.state.textColor }">
            Play the most exciting online casino games at Betika -
             with a selection of <a class="link-to-betika" href="https://betika.com/casino">slots, Roulette, Blackjack</a> and more
        </div>
    </div>
</template>

<script>
export default {
    name: 'Casino',
    data(){
        return{
            image: require('../assets/casino.jpg')
        }
    },
    mounted(){
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
    width: 100%;
    height: 100vh;
    padding-top: 30vh;
    justify-content: center;
    align-items: center;
    padding-bottom: 200px;
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
    background-position: center;
}
</style>