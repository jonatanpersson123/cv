<template>
    <div id="panels">
        <left-panel id="left-panel"></left-panel>
        <right-panel id="right-panel"></right-panel>
    </div>
</template>

<script>
    import LeftPanel from './LeftPanel'
    import RightPanel from './RightPanel'
    export default {
        name: 'Panels',
        components: {
            LeftPanel,
            RightPanel
        }
    }
</script>

<style scoped>
    #panels {
        display: flex;
        min-height: 700px;
        background: white;
    }

    #left-panel {
        width: 306px;
    }

    #right-panel {
        flex: 1;
    }
</style>
