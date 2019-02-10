<template>
    <div class="info-container flex">
        <div class="info-icon">
            <img v-if="icon.includes('data:image')" :src="icon">
            <v-icon v-else :name="icon" scale="1.5" />
        </div>
        <span>{{text}}</span>
    </div>
</template>

<script>
    export default {
        name: 'TimelineElementEntryInfo',
        props: {
            text: String,
            icon: String
        }
    }
</script>

<style scoped>
span {
    font-size: 16px;
    color: #363636;
    margin-left: 8px;
}

svg {
    display: block;
    margin: auto;
}

.info-container {
    margin-top: 10px;
}

.info-icon {
    display: flex;
    min-width: 24px;
}

</style>
