<template>
    <div class="wrapper">

        <div class="slide-title">...AND MUCH MORE</div>

        <div class="slide-wrapper">
            <vueper-slides class="no-shadow" 
                            :infinite="true"
                            :visible-slides="4" 
                            :slide-ratio="1/2" 
                            :dragging-distance="70" 
                            fixed-height="200px"
                            autoplay
                            speed="1000">
                <vueper-slide v-for="card in cards" 
                                :key="card.id" 
                                :title="card.title"
                                :style="'background-color: ' + card.color" >
                </vueper-slide>
            </vueper-slides>
        </div>
    </div>
</template>

<script>
import { VueperSlides, VueperSlide } from 'vueperslides';
import 'vueperslides/dist/vueperslides.css';

export default {
    name: 'Services',
    components: {
        VueperSlides, VueperSlide
    },
    data(){
        return{
            image: require('../assets/tv.png'),
            cards: [
                { id: 1, title: 'Shikisha Bet', color: '#f45905' },
                { id: 2, title: 'Jackpots', color: '#c70d3a' },
                { id: 3, title: 'Sababisha Daily', color: '#512c62' },
                { id: 4, title: 'Betika League', color: '#45969b' },
                { id: 5, title: 'Betika TV', color: '#bc4873' },
            ],
        }
    },
    mounted(){
    },
}
</script>

<style scoped>
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
    height: 60vh;
    padding-top: 5vh;
    background-color: #535353;
    justify-content: center;
    align-items: center;
}

.slide-title {
    font-weight: 900;
    font-size: 3em;
    margin-bottom: 5vh;
}

.slide-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
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