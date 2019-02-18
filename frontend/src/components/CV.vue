<template>
    <div>
        <div id="main-area" :class="{'main-md': $vuetify.breakpoint.mdAndDown}" class="rise delay-250" @scroll="onScroll">
            <navigation v-if="$vuetify.breakpoint.mdAndUp"></navigation>
            <div id="content" :class="{'content-md': $vuetify.breakpoint.mdAndDown}">
                <intro></intro>
                <experience></experience>
                <education></education>
                <skills></skills>
            </div>
        </div>
    </div>
</template>

<script>
import Navigation from './Navigation'
import Intro from './Intro'
import Experience from './Experience'
import Education from './Education'
import Skills from './Skills'
import { mapState, mapMutations } from 'vuex'
import { scroll } from './mixins/scroll'

    export default {
        name: 'CV',
        mixins: [scroll],
        components: {
            Navigation,
            Intro,
            Experience,
            Education,
            Skills
        },
        data() {
            return {
                chapterElements: [],
                mainArea: null
            }
        },
        methods: {
            ...mapMutations(['updateCurrentChapter']),
            onScroll(event) {
                if (!this.isScrolling) {
                    for (let ce of this.chapterElements.reverse()) {
                        if (this.mainArea.scrollTop >= ce.element.offsetTop - 100 && this.mainArea.scrollTop < ce.element.offsetTop - 100 + ce.element.offsetHeight) {
                            if (ce.chapter.id !== this.currentChapter.id) {
                                this.updateCurrentChapter(ce.chapter)
                            }
                            break
                        }
                    }
                }
            }
        },
        computed: {
            ...mapState([
                'chapters',
                'currentChapter',
                'isScrolling'
            ])
        },
        mounted() {
            this.chapterElements = this.chapters.map(chapter => {
                return {
                    chapter: chapter,
                    element: document.getElementById(chapter.chapterTitle.toLowerCase())
                }
            })
            this.mainArea = document.getElementById('main-area')
        }
    }
</script>

<style scoped>

#main-area {
    background-color: white;
    max-width: 1200px;
    height: 700px;
    margin: auto;
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    overflow: hidden;
    box-shadow: 0 15px 30px hsla(0,0%,0%,.2);
}

#main-area.main-md {
    height: unset;
    max-width: unset;
    overflow: scroll;
}

#content {
    width: 100%;
    height: 100%;
    overflow: hidden;
}

#content.content-md {
    overflow: unset;
    height: unset;
}

</style>
