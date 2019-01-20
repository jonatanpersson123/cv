<template>
    <section class="flex">
        <intro-portrait></intro-portrait>
        <div class="intro-content">
            <div>
                <h1>Jonatan Persson</h1>
                <h2>Software developer</h2>
                <icon-button-list :buttonList="buttonList"></icon-button-list>
            </div>
            <div>
                <p class="intro-description">Nice to meet you traveller! I would have shook your hand if I could. If you don't already know me I would describe myself as a curious software developer with great interest in UX.</p>
                <p class="intro-description bottom">Currently located in soutern part of Sweden.</p>
            </div>
        </div>
    </section>
</template>

<script>
import IntroPortrait from './IntroPortrait'
import IconButtonList from './IconButtonList'
export default {
    name: 'Intro',
    components: {
        IntroPortrait,
        IconButtonList
    },
    data() {
        return {
            buttonList: [
                { icon: 'regular/envelope', text: 'Email', link: '' },
                { icon: 'phone', text: 'Phone', link: '', scale: 1.5 },
                { icon: 'brands/github', text: 'Github', link: '', scale: 2 }
            ]
        }
    }
}
</script>

<style scoped>
h1 {
    font-family: Avenir-Heavy;
    font-size: 90px;
    color: #363636;
    margin: 0;
    line-height: 1;
}

h2 {
    font-family: Avenir-Roman;
    font-size: 40px;
    font-weight: initial;
    color: #363636;
    margin: 0;
}

.intro-description {
    margin: 0;
    font-size: 18px;
    max-width: 550px;
}

.intro-content {
    margin: 80px 32px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex: 1;
}

.bottom {
    margin-top: 20px;
}
</style>
