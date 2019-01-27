<template>
    <div id="nav-container">
        <div class="navigator">
            <div id="prev-container" class="prev">
                <v-scroll-x-transition>
                    <navigation-button v-if="prevChapter" :isNext="false" :chapterText="prevChapter.chapterTitle" @click.native="goToPrev()"></navigation-button>
                </v-scroll-x-transition>
            </div>

            <nav>
                <ul>
                    <li v-for="chapter in this.chapters" :key="chapter.id"
                        :class="{active: chapter === currentChapter}"
                        @click="updateCurrentChapter(chapter)">
                        {{chapter.chapterNumber}}
                    </li>
                </ul>
                <div ref="line" id="chapter-line"></div>
            </nav>

            <div id="next-container" class="next">
                <v-scroll-x-transition>
                    <navigation-button v-if="nextChapter" :isNext="true" :chapterText="nextChapter.chapterTitle" @click.native="goToNext()"></navigation-button>
                </v-scroll-x-transition>
            </div>
        </div>
    </div>
</template>

<script>
import NavigationButton from './NavigationButton'
import { mapState, mapMutations } from 'vuex'

export default {
    name: 'Navigation',
    components: {
        NavigationButton
    },
    data() {
        return {
        }
    },
    computed: {
        ...mapState([
            'chapters',
            'currentChapter'
        ]),
        prevChapter() {
            return this.currentChapter !== this.chapters[0]
                ? this.chapters[this.getChapterPosition(this.currentChapter) - 1]
                : null
        },
        nextChapter() {
            return this.currentChapter !== this.chapters[this.chapters.length - 1]
                ? this.chapters[this.getChapterPosition(this.currentChapter) + 1]
                : null
        }
    },
    methods: {
        ...mapMutations(['updateCurrentChapter']),
        goToNext() {
            this.$vuetify.goTo(99999, null)
            this.updateCurrentChapter(this.nextChapter)
        },
        goToPrev() {
            this.updateCurrentChapter(this.prevChapter)
        },
        gotoPage(chapter) {
            this.updateCurrentChapter(chapter)
        },
        getChapterPosition(chapter) {
            return this.chapters.indexOf(chapter)
        }
    },
    watch: {
        currentChapter: function (newChapter, oldChapter) {
            this.$refs.line.style.top = this.getChapterPosition(newChapter) * 53 + 'px'
        }
    }
}
</script>

<style scoped>
nav {
    position: relative;
    flex: 1;
}

#nav-container {
    position: absolute;
    height: 100%;
    width: 100%;
}

#next-container {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
}

#prev-container {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
}

#chapter-line {
    height: 45px;
    width: 4px;
    background: var(--dark, black);
    position: absolute;
    top: 0;
    transition: top .5s cubic-bezier(0.250, 0.000, 0.150, 1.000);
}

.navigator {
    position: absolute;
    right: 36px;
    top: 36px;
    bottom: 36px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

ul {
    margin: 0;
    padding-left: 8px;
    list-style: none;
    width: 60px;
}

li {
    text-align: right;
    padding-right: 7px;
    font-family: Avenir-Heavy;
    font-size: 20px;
    color: lightslategray;
    cursor: pointer;
    line-height: 30px;
    transition: font-size .5s, padding-right .5s;
}

li.active {
    color: var(--dark, black);
    font-size: 30px;
    line-height: 45px;
    padding: 0;
}

li:not(:first-child) {
    margin-top: 24px;
}
</style>
