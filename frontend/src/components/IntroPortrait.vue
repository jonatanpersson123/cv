<template>
    <div id="portrait-container">
        <img src="../assets/portrait-masked.png">
    </div>
</template>

<script>
    export default {
        name: 'IntroPortrait'
    }
</script>

<style scoped>
    #portrait-container {
        position: relative;
        height: 100%;
        width: 440px;
    }
    img {
        height: 100%;
        width: 100%;
    }
</style>
