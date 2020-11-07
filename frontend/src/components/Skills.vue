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
import EntriesService from '../services/EntriesService'
const WebpackIcon = require('../assets/icons/webpack.svg')
const CSharpIcon = require('../assets/icons/c#.svg')
const PHPIcon = require('../assets/icons/php.svg')
const CordovaIcon = require('../assets/icons/cordova.svg')
const PhotoshopIcon = require('../assets/icons/photoshop.svg')

// TODO - Get all custom icons from database

export default {
    name: 'Skills',
    components: {
        IconButtonList
    },
    data() {
        return {
            developmentList: [],
            designList: [],
            photoshopIcon: PhotoshopIcon,
            csharpIcon: CSharpIcon,
            webpackIcon: WebpackIcon,
            phpIcon: PHPIcon,
            cordovaIcon: CordovaIcon
        }
    },
    methods: {
        setupDevelopmentButtons () {
            EntriesService.fetchButtons({ typeId: 2 }).then((response) => {
                this.developmentList = response.data.buttons.map(button => this.getIcon(button))
            })
        },
        setupDesignButtons () {
            EntriesService.fetchButtons({ typeId: 3 }).then((response) => {
                this.designList = response.data.buttons.map(button => this.getIcon(button))
            })
        },
        getIcon(button) {
            if (button.icon.includes('custom')) {
                const iconPropertyName = button.icon.split('/').pop()
                button.icon = this[iconPropertyName]
            }
            return button
        }
    },
    mounted() {
        this.setupDevelopmentButtons()
        this.setupDesignButtons()
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
