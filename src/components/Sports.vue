<template>
    <div id="sports">
        <div id="sports-header">GAMES WE OFFER</div>
 <v-container fluid>
        <v-row dense>
          <v-col
            v-for="card in cards"
            :key="card.title"
            :cols="card.flex"
          >
            <v-card raised
                    ripple
                    class="cards">
              <v-img
                :src="card.src"
                class="white--text align-end"
                gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                height="400px"
              >
                <v-card-title class="game-title" v-text="card.title"></v-card-title>
              </v-img>
  
              <v-card-actions>
                <v-spacer></v-spacer>
  
                <v-btn icon>
                  <v-icon>{{ card.icon }}</v-icon>
                </v-btn>
  
  <a href="https://betika.com">
                <v-btn icon>
                  <v-icon>fas fa-external-link-alt</v-icon>
                </v-btn>
  </a>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </div>
</template>

<script>
export default {
    name: 'Sports',
    data: () => ({
    cards: [
    { title: 'Soccer', src: 'https://www.solarsoccerclub.com/wp-content/uploads/sites/297/bb-plugin/cache/191-1024x683-square.jpg', flex: 4, icon: 'far fa-futbol' },
    { title: 'Tennis', src: 'https://www.economist.com/sites/default/files/20180825_BLP501_0.jpg', flex: 4, icon: 'fas fa-table-tennis' },
    { title: 'Ice Hockey', src: 'http://kapitalismo.com/wp-content/uploads/2019/02/JD5_6906.jpg', flex: 4, icon: 'fas fa-skating' },
    { title: 'Basketball', src: 'https://specials-images.forbesimg.com/imageserve/5c86c74731358e35dd28aecf/1200x0.jpg?cropX1=0&cropX2=1999&cropY1=0&cropY2=1999', flex: 4, icon: 'fas fa-basketball-ball' },
    { title: 'Handball', src: 'https://usatftw.files.wordpress.com/2016/07/epa_germany_handball_friendly_83316014-e1469713140407.jpg?w=1000&h=600&crop=1', flex: 4, icon: 'fas fa-baseball-ball' },
    { title: 'Snooker', src: 'https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fspecials-images.forbesimg.com%2Fdam%2Fimageserve%2F1141633687%2F960x0.jpg%3Ffit%3Dscale', flex: 4, icon: 'fas fa-quidditch' },
    { title: 'Volleyball', src: 'https://cdn.britannica.com/81/198481-050-10CED2D9/Gilberto-Godoy-Filho-ball-Brazil-Argentina-volleyball-2007.jpg', flex: 4, icon: 'fas fa-volleyball-ball' },
    { title: 'MMA', src: 'https://cdn.evolve-mma.com/wp-content/uploads/2018/04/Garry-Tonon-1-1024x574.jpg', flex: 4, icon: 'fas fa-fist-raised' },
    { title: 'Cricket', src: 'https://cdn.britannica.com/63/211663-050-A674D74C/Jonny-Bairstow-batting-semifinal-match-England-Australia-2019.jpg', flex: 4, icon: 'fas fa-hard-hat' },
    { title: 'Boxing', src: 'https://i2-prod.mirror.co.uk/incoming/article20638133.ece/ALTERNATES/s1200b/0_GettyImages-1180866211.jpg', flex: 4, icon: 'fas fa-hand-rock' },
    { title: 'Rugby', src: 'https://gcs.thesouthafrican.com/2019/09/e87bc34d-000_1k7408-1200x858.jpg', flex: 4, icon: 'fas fa-football-ball' },
    { title: 'American Football', src: 'https://media.phillyvoice.com/media/images/USATSI_11159475.515f5ee3.fill-735x490.jpg', flex: 4, icon: 'fas fa-football-ball' },

    ],
  }),
   methods: {
        visitBetika(){
            window.location.herf="https://betika.com"
        }
   }
}
</script>

<style scoped>
#sports {
    position: relative;
    display: block;
    top: 80vh;
    width: 100%;
    padding: 5%;
    /* z-index: 10; */
    background-color: white;
}

.cards {
    margin: 3%;
}

.game-title {
    font-weight: 900;
    font-size: 1.5em;
}

#sports-header {
    font-weight: 900;
    font-size: 3em;
}
</style>