<template>
    <section class="flex">
        <intro-portrait></intro-portrait>
        <div class="intro-content">
            <div>
                <h1>Jonatan Persson</h1>
                <h2>Software developer</h2>
                <icon-button-list :buttonList="buttonList"></icon-button-list>
            </div>
            <p id="intro-description">Nice to meet you traveller! I would have shook your hand if I could. If you don't already know me I would describe myself as a curious software developer with great interest in UX. Currently located in soutern part of Sweden.</p>
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
                { icon: 'envelope', text: 'Email', link: '' },
                { icon: 'phone', text: 'Phone', link: '' },
                { icon: 'github', text: 'Github', link: '' }
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

#intro-description {
    margin: 0;
    max-width: 380px;
}

.intro-content {
    margin: 80px 32px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
</style>
