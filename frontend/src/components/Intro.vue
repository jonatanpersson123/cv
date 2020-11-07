<template>
    <section id="intro" class="flex">
        <intro-portrait v-if="$vuetify.breakpoint.lgAndUp" class="animated fadeIn delay-2000"></intro-portrait>
        <div class="intro-content slideUp">
            <div>
                <div class="animated fadeInRight delay-250">
                    <h1 :class="{'h1-xs': $vuetify.breakpoint.xsOnly}" class="large">Jonatan Persson</h1>
                    <h2 :class="{'h2-xs': $vuetify.breakpoint.xsOnly}">Software developer</h2>
                </div>
                <icon-button-list class="animated fadeIn delay-2000" :buttonList="buttonList" :showTooltip="true"></icon-button-list>
            </div>
            <intro-portrait v-if="$vuetify.breakpoint.mdAndDown" class="animated fadeIn delay-2000"></intro-portrait>
            <div class="intro-description animated fadeIn delay-2000">
                <p class="description-header">{{profileHeader}}</p>
                <p class="description-top">{{profileTextFirst}}</p>
                <word-ticker :wordList="wordList"></word-ticker>
                <p class="description-bottom">{{profileTextSecond}}</p>
            </div>
        </div>
    </section>
</template>

<script>
import IntroPortrait from './IntroPortrait'
import IconButtonList from './IconButtonList'
import WordTicker from './WordTicker'
import EntriesService from '../services/EntriesService'
export default {
    name: 'Intro',
    components: {
        IntroPortrait,
        IconButtonList,
        WordTicker
    },
    data() {
        return {
            buttonList: [],
            profileHeader: 'Hi!',
            profileTextFirst: "Nice to meet you traveller. I would have shaken your hand if I could. If you don't already know me I would describe myself as a curious software developer with great interest in",
            profileTextSecond: 'Feel free to browse this resumé site to find out what I have been up to lately.',
            wordList: ['eHealth.', 'user experience.', 'graphic design.', 'simplicity.', 'food.', 'sports.', 'user interaction.', 'optimization.', 'adventures.']
        }
    },
    methods: {
        async setupIntroButtons () {
            const response = await EntriesService.fetchButtons({ typeId: 1 })
            this.buttonList = response.data.buttons
        },
        async setupProfileInfo () {
            const response = await EntriesService.fetchProfile()
            const profileInfo = response.data.profile[0]
            this.profileHeader = profileInfo.title
            const profileText = profileInfo.text.split('/')
            this.profileTextFirst = profileText[0]
            this.profileTextSecond = profileText.length > 1 ? profileText[1] : ''
            this.wordList = profileInfo.wordList.split('/')
        }
    },
    mounted() {
        this.setupIntroButtons()
        this.setupProfileInfo()
    }
}
</script>

<style scoped>
h1.large {
    font-size: 90px;
    margin: 0;
    line-height: 1;
}

h1.h1-xs {
    font-size: 65px;
}

h2.h2-xs {
    font-size: 26px;
}

h2 {
    font-size: 40px;
    font-weight: initial;
    color: var(--primary-dark, gray);
    margin: 0;
}

p {
    margin: 0;
}

section {
    padding: unset;
    overflow: hidden;
}

.intro-description {
    font-size: 18px;
    max-width: 415px;
}

.intro-content {
    margin: 200px 32px 40px 32px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex: 1;
}

.description-header {
    font-size: 26px;
    font-weight: 500;
    margin-bottom: 8px;
}

.description-top {
    display: inline;
}

.description-bottom {
    margin-top: 20px;
}

</style>
