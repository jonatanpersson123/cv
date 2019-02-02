import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

var VueScrollTo = require('vue-scrollto')

var options = {
    container: '#content',
    easing: 'ease',
    force: true,
    cancelable: false,
    onStart: function(element) {
    },
    onDone: function(element) {
    },
    onCancel: function() {
    },
    x: false,
    y: true
}

const chapters = [
    { id: 1, chapterNumber: '01', chapterTitle: 'Intro' },
    { id: 2, chapterNumber: '02', chapterTitle: 'Experience' },
    { id: 3, chapterNumber: '03', chapterTitle: 'Education' },
    { id: 4, chapterNumber: '04', chapterTitle: 'Skills' }
]

let store

const initStore = () =>
  store ||
  (store = new Vuex.Store({
    state: {
        chapters: chapters,
        currentChapter: chapters[0]
    },
    mutations: {
      updateCurrentChapter(state, newChapter) {
        state.currentChapter = newChapter
        VueScrollTo.scrollTo(document.getElementById(newChapter.chapterTitle.toLowerCase()), 650, options)
      }
    },

    actions: {}
  }))

export default initStore
