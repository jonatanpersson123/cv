<template>
    <div id="full-container">
        <div class="navigator animated fadeIn delay-2000">
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
                        <div class="chapter-info">
                            <div class="chapter-title">{{chapter.chapterTitle}}</div>
                            <span>{{chapter.chapterNumber}}</span>
                        </div>
                    </li>
                </ul>
                <div ref="line" id="current-chapter-line"></div>
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
            scrolling: false
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
            this.scrollToChapter(this.nextChapter)
        },
        goToPrev() {
            this.scrollToChapter(this.prevChapter)
        },
        gotoPage(chapter) {
            this.scrollToChapter(chapter)
        },
        scrollToChapter(scrollToChapter) {
            if (!this.scrolling) {
                this.scrolling = true
                this.updateCurrentChapter(scrollToChapter)
                setTimeout(() => this.scrolling = false, 750)
            }
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

#full-container {
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

#current-chapter-line {
    height: 45px;
    width: 4px;
    background: var(--dark, black);
    position: absolute;
    top: 0;
    right: 50px;
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
    z-index: 100;
}

.chapter-info {
    display: flex;
    justify-content: flex-end;
}

li.active .chapter-info .chapter-title, li:hover .chapter-title {
    opacity: 1;
}

.chapter-title {
    margin-right: 32px;
    font-size: 20px;
    opacity: 0;
    transition: opacity .75s cubic-bezier(0.250, 0.000, 0.150, 1.000);
}

ul {
    margin: 0;
    padding: 0;
    list-style: none;
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
