<template>
    <div class="icons">
        <div class="icon-button" :class="{'icon-button-text': showButtonText}" v-for="(item, index) in buttonList" :key="index">
            <v-btn fab color="primary">
                <v-icon :scale="item.scale || 2" :name="item.icon"/>
            </v-btn>
            <span v-if="showButtonText">{{item.text}}</span>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'IconButtonList',
        props: {
         buttonList: Array,
         showButtonText: false
        },
        components: {}
    }
</script>

<style scoped>
span {
    text-align: center;
}

.icons {
    display: flex;
    flex-wrap: wrap;
}

.icon-button {
    display: flex;
    flex-direction: column;
}

.icon-button-text {
    margin: 5px;
}
</style>
