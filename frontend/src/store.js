import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

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
        currentChapter: chapters[0],
        isScrolling: false
    },
    mutations: {
      updateCurrentChapter(state, newChapter) {
        state.currentChapter = newChapter
      },
      updateIsScrolling(state, scrolling) {
        state.isScrolling = scrolling
      }
    },
    actions: {}
  }))

export default initStore
