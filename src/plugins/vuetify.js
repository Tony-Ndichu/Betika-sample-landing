import '@fortawesome/fontawesome-free/css/all.css'
import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
    icons: {
        iconfont: 'fa',
      },
    theme: {
        dark: true,
        themes: {
          dark: {
            primary: 'black',
            secondary: 'black',
            accent: 'black',
            error: 'black',
          },
      },
    },
});
