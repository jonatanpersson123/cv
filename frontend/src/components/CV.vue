<template>
    <div id="content">
        <header-row></header-row>
        <panels></panels>
    </div>
</template>

<script>
    import HeaderRow from './HeaderRow'
    import Panels from './Panels'
    export default {
        name: 'CV',
        components: {
            HeaderRow,
            Panels
        }
    }
</script>

<style scoped>
    #content {
        max-width: 1076px;
        margin: 64px auto;
    }
</style>
