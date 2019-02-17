<template>
    <section id="skills" :class="{'section-md': $vuetify.breakpoint.mdAndDown, 'section-sm': $vuetify.breakpoint.smAndDown}">
        <h1 :class="{'h1-sm': $vuetify.breakpoint.smAndDown}">Skills</h1>
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
const WebpackIcon = require('../assets/icons/webpack.svg')
const CSharpIcon = require('../assets/icons/c#.svg')
const PHPIcon = require('../assets/icons/php.svg')
const CordovaIcon = require('../assets/icons/cordova.svg')
const PhotoshopIcon = require('../assets/icons/photoshop.svg')
export default {
    name: 'Skills',
    components: {
        IconButtonList
    },
    data() {
        return {
            developmentList: [
                { icon: 'brands/js-square', text: 'JavaScript', link: 'https://www.javascript.com' },
                { icon: 'brands/vuejs', text: 'Vue.js', link: 'https://vuejs.org' },
                { icon: 'brands/angular', text: 'Angular', link: 'https://angular.io' },
                { icon: 'brands/react', text: 'React', link: 'https://reactjs.org' },
                { icon: 'brands/html5', text: 'HTML', link: 'https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5' },
                { icon: 'brands/css3', text: 'CSS', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/CSS3' },
                { icon: CSharpIcon, text: 'C#', link: 'https://docs.microsoft.com/en-us/dotnet/csharp/index' },
                { icon: PHPIcon, text: 'PHP', link: 'http://www.php.net' },
                { icon: WebpackIcon, text: 'Webpack', link: 'https://webpack.js.org' },
                { icon: CordovaIcon, text: 'Cordova', link: 'https://cordova.apache.org' },
                { icon: 'brands/git', text: 'GIT', link: 'https://git-scm.com/' },
                { icon: 'database', text: 'SQL', link: 'https://www.microsoft.com/en-gb/sql-server/sql-server-2017', scale: 1.5 }
            ],
            designList: [
                { icon: 'brands/sketch', text: 'Sketch', link: 'https://www.sketchapp.com' },
                { icon: 'brands/invision', text: 'Invision', link: 'https://www.invisionapp.com' },
                { icon: PhotoshopIcon, text: 'Photoshop', link: 'https://www.photoshop.com' }
            ]
        }
    }
}
</script>

<style scoped>
h2 {
    font-size: 20px;
    color: var(--primary-dark, gray);
    margin-bottom: 16px;
    font-weight: normal;
}

#design-skills {
    margin-top: 36px;
}

.skill-container {
    max-width: 600px;
}

.section-md .skill-container {
    max-width: 420px;
}
</style>
