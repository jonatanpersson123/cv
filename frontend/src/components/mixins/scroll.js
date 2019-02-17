import Vue from 'vue'
import { mapMutations } from 'vuex'
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

export const scroll = {
    methods: {
        ...mapMutations(['updateIsScrolling']),
        scrollToChapter(chapter) {
            options.container = Vue.prototype.$vuetify.breakpoint.mdAndDown ? '#main-area' : '#content'
            this.updateIsScrolling(true)
            VueScrollTo.scrollTo(document.getElementById(chapter.chapterTitle.toLowerCase()), 650, options)
            setTimeout(() => {
                this.updateIsScrolling(false)
            }, 650)
        }
    }
}
