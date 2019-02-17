<template>
    <div id="portrait-container" :class="{'portrait-md': $vuetify.breakpoint.mdAndDown, 'portrait-xs': $vuetify.breakpoint.xsOnly}">
        <img :src="getImage">
    </div>
</template>

<script>
    export default {
        name: 'IntroPortrait',
        data() {
            return {
                portraitMd: require('../assets/portrait-md.png'),
                portraitLg: require('../assets/portrait-lg.png')
            }
        },
        computed: {
            getImage () {
                // TODO - Update with image for sm/xs
                switch (this.$vuetify.breakpoint.name) {
                    case 'xs': return this.portraitMd
                    case 'sm': return this.portraitMd
                    case 'md': return this.portraitMd
                    case 'lg': return this.portraitLg
                    default: return this.portraitLg
                }
            }
        }
    }
</script>

<style scoped>
    #portrait-container {
        position: relative;
        height: 100%;
        width: 440px;
    }

    #portrait-container.portrait-md {
        width: 480px;
        height: unset;
        margin: 20px 0;
    }

    #portrait-container.portrait-xs {
        width: 290px;
    }

    img {
        height: 100%;
        width: 100%;
    }
</style>
