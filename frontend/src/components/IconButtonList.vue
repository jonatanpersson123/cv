<template>
    <div>
        <div v-for="(item, index) in buttonList" :key="index">
            <p>{{item}}</p>
        </div>

    </div>
</template>

<script>
    export default {
        name: 'IconButtonList',
        props: ['buttonList'],
        components: {}
    }
</script>

<style scoped>
</style>
