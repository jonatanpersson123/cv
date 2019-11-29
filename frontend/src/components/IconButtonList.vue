<template>
    <div class="icons">
        <div class="icon-button" :class="{'icon-button-text': showButtonText}" v-for="(item, index) in buttonList" :key="index">
            <v-tooltip bottom :disabled="!showTooltip">
                <v-btn fab color="primary" :href="item.link" :target="item.openSelf ? '_self' : '_blank'" slot="activator">
                    <img v-if="item.icon.includes('data:image')" :src="item.icon">
                    <v-icon v-else :scale="item.scale || 1.5" :name="item.icon"/>
                </v-btn>
                <span>{{item.text}}</span>
            </v-tooltip>
            <span v-if="showButtonText">{{item.text}}</span>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'IconButtonList',
        props: {
         buttonList: Array,
         showButtonText: false,
         showTooltip: false
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
