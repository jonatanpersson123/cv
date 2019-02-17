<template>
    <div id="header-line"></div>
</template>

<script>
    export default {
        name: 'TheHeaderLine'
    }
</script>

<style scoped>
    #header-line {
        height: 8px;
        background: var(--primary-dark, gray);
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
    }
</style>
