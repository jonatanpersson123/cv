<template>
    <div class="row">
        <portrait id="portait"></portrait>
        <about id="about"></about>
    </div>
</template>

<script>
    import Portrait from './Portrait'
    import About from './About'
    export default {
        name: 'HeaderRow',
        components: {
            Portrait,
            About
        }
    }
</script>

<style scoped>
    .row {
        display: flex;
        height: 260px;
        border-radius: 8px;
        overflow: hidden;
    }

    #about {
        flex: 1;
    }
</style>
