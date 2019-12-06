import '@fortawesome/fontawesome-free/css/all.css'
import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import VueYouTubeEmbed from 'vue-youtube-embed';
// import Vuex from 'vuex';

Vue.use(Vuetify);
Vue.use(VueYouTubeEmbed);
// Vue.use(Vuex);

export default new Vuetify({
    icons: {
        iconfont: 'fa',
      },
    theme: {
        dark: false,
    },
});

