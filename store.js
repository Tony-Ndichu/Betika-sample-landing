import Vue from 'vue'
import Vuex from 'vuex'
// import user from './modules/user'
// import genre from './modules/genre'

Vue.use(Vuex)


export default new Vuex.Store({
    state: {
      darkMode: false,
      bgColor: 'white',
      textColor: 'black',
      themeSong: '',
    },
    getters: {
      darkMode: state => state.darkMode,
      bgColor: state => state.bgColor,
      textColor: state => state.textColor,
      themeSong: state => state.themeSong,
    },
    mutations: {
      updateDarkMode(state, darkMode) {
        Vue.set(state, 'darkMode', darkMode);
      },
      updateBgColor(state, bgColor){
          Vue.set(state, 'bgColor', bgColor);
      },
      updateTextColor(state, textColor){
          Vue.set(state, 'textColor', textColor);
      },
      updateThemeSong(state, themeSong){
          Vue.set(state, 'themeSong', themeSong);
      }
    },
    actions: {
      setDarkMode({ commit }) {  
          commit('updateDarkMode', true);
          commit('updateBgColor', 'black');
          commit('updateTextColor', 'white');
          localStorage.setItem('isDark', true);
      },
      setLightMode({ commit }) {
        commit('updateDarkMode', false);
        commit('updateBgColor', 'white');
        commit('updateTextColor', 'black');
        localStorage.setItem('isDark', false);
      },
      setThemeSong({ commit }) {
          commit('updateThemeSong', 'https://files.freemusicarchive.org/storage-freemusicarchive-org/music/no_curator/Scott_Holmes/Inspiring__Upbeat_Music/Scott_Holmes_-_06_-_Clear_Progress.mp3')
      },
      switchOffThemeSong({ commit }) {
          commit('updateThemeSong', '')
      }
    }
  });
  