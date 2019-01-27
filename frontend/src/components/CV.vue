<template>
    <div>
        <div id="main-area">
            <navigation></navigation>
            <div id="content">
                <intro></intro>
                <experience></experience>
                <education></education>
                <!-- <skills></skills> -->
            </div>
        </div>
    </div>
</template>

<script>
import Navigation from './Navigation'
import Intro from './Intro'
import Experience from './Experience'
import Education from './Education'
    export default {
        name: 'CV',
        components: {
            Navigation,
            Intro,
            Experience,
            Education
        }
    }
</script>

<style scoped>

#main-area {
    background: white;
    max-width: 1200px;
    height: 700px;
    margin: auto;
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    overflow: hidden;
    box-shadow: 0 15px 30px hsla(0,0%,0%,.2);
}

#content {
    width: 100%;
    height: 100%;
    overflow: hidden;
}

</style>
