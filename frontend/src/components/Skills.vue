<template>
    <section id="skills">
        <h1>Skills</h1>
        <div id="development-skills" class="skill-container">
            <h2>Development</h2>
            <icon-button-list :buttonList="developmentList" :showButtonText="true"></icon-button-list>
        </div>
        <div id="design-skills" class="skill-container">
            <h2>Design</h2>
            <icon-button-list :buttonList="designList" :showButtonText="true"></icon-button-list>
        </div>
    </section>
</template>

<script>
import IconButtonList from './IconButtonList'
export default {
    name: 'Skills',
    components: {
        IconButtonList
    },
    data() {
        return {
            developmentList: [
                { icon: 'brands/js-square', text: 'JavaScript', link: '' },
                { icon: 'brands/vuejs', text: 'Vue.js', link: '' },
                { icon: 'brands/angular', text: 'Angular', link: ''},
                { icon: 'brands/react', text: 'React', link: '' },
                { icon: 'brands/html5', text: 'HTML', link: '' },
                { icon: 'brands/css3', text: 'CSS', link: '' },
                // TODO - Update missing code icons
                { icon: 'code', text: 'C#', link: '' },
                { icon: 'code', text: 'Webpack', link: '' },
                { icon: 'code', text: 'Cordova', link: '' },
                { icon: 'brands/php', text: 'PHP', link: '' },
                { icon: 'code', text: 'GIT', link: '' },
                { icon: 'code', text: 'SQL', link: '' },
            ],
            designList: [
                { icon: 'brands/sketch', text: 'Sketch', link: '' },
                { icon: 'brands/invision', text: 'Invision', link: '' },
                { icon: 'brands/adobe', text: 'Photoshop', link: '' },
            ]
        }
    }
}
</script>

<style scoped>
h2 {
    font-size: 20px;
    color: #363636;
    margin-bottom: 16px;
    font-family: Avenir-Roman;
    font-weight: normal;
}

#design-skills {
    margin-top: 36px;
}

.skill-container {
    max-width: 600px;
}
</style>
