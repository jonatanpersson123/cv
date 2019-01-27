<template>
    <div class="location-container flex">
        <v-icon name="map-marker-alt" scale="1.5" />
        <span>{{location}}</span>
    </div>
</template>

<script>
    export default {
        name: 'TimelineElementEntryLocation',
        props: ['location']
    }
</script>

<style scoped>
span {
    font-size: 16px;
    color: #363636;
    margin-left: 6px;
}

.location-container {
    margin-top: 4px;
}
</style>
