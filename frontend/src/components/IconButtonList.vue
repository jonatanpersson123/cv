<template>
    <div class="flex">
        <div class="icon-button" v-for="(item, index) in buttonList" :key="index">
            <v-btn fab color="primary">
                <v-icon :scale="item.scale || 1.75" :name="item.icon"/>
            </v-btn>
            <span v-if="showButtonText">{{item.text}}</span>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'IconButtonList',
        props: ['buttonList'],
        components: {},
        data() {
            return {
                showButtonText: false
            }
        }
    }
</script>

<style scoped>
span {
    text-align: center;
}
.icon-button:not(:first-child) {
    /*margin-left: 6px;*/
}
.icon-button {
    display: flex;
    flex-direction: column;
}
</style>
