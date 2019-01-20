<template>
    <div class="navigator">
        <div id="prev-container" class="prev">
            <navigation-button v-if="prevChapter" :isNext="false" :chapterText="prevChapter.chapterTitle"></navigation-button>
        </div>
        <nav>
            <ul>
                <li v-for="chapter in this.chapters" :key="chapter.id" @click="updateCurrentChapter(chapter.id)"
                  :class="{active: chapter.id === currentChapter.id}">{{chapter.chapterNumber}}</li>
            </ul>
            <div id="chapter-line"></div>
        </nav>
        <div id="next-container" class="next">
            <navigation-button v-if="nextChapter" :isNext="true" :chapterText="nextChapter.chapterTitle"></navigation-button>
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
                ? this.chapters[this.chapters.indexOf(this.currentChapter) - 1]
                : null
        },
        nextChapter() {
            return this.currentChapter !== this.chapters[this.chapters.length - 1]
                ? this.chapters[this.chapters.indexOf(this.currentChapter) + 1]
                : null
        }
    },
    methods: {
        ...mapMutations(['updateCurrentChapter'])
    },
    watch: {
        currentChapter: function (newChapter, oldChapter) {
            document.getElementById('chapter-line').style.top = (newChapter.id - 1) * 53 + 'px'
        }
    }
}
</script>

<style scoped>
nav {
    position: relative;
    flex: 1;
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
    transition: font-size 1s cubic-bezier(0.250, 0.000, 0.150, 1.000), padding-right 1s cubic-bezier(0.250, 0.000, 0.150, 1.000);
}

li.active {
    color: var(--dark, black);
    font-size: 30px;
    padding: 0;
}

li:not(:first-child) {
    margin-top: 24px;
}

#chapter-line {
    height: 45px;
    width: 4px;
    background: var(--dark, black);
    position: absolute;
    top: 0;
    transition: top 1s cubic-bezier(0.250, 0.000, 0.150, 1.000);
}
</style>
