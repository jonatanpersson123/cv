<template>
    <div>
        <div id="content">
            <navbar></navbar>
            <Intro></Intro>
        <!-- <experience></experience>
        <education></education>
        <skills></skills> -->
        </div>
    </div>
</template>

<script>
import Navbar from './Navbar'
import Intro from './Intro'
    export default {
        name: 'CV',
        components: {
            Intro,
            Navbar
        }
    }
</script>

<style scoped>
#content {
    background: white;
    max-width: 1200px;
    height: 700px;
    margin: auto;
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    box-shadow: 0 15px 30px hsla(0,0%,0%,.2);
}
</style>
