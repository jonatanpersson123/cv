<template>

    <v-timeline dense align-top>
    <v-timeline-item
      v-for="(elementData, index) in elementsData"
      :key="index"
      fill-dot
      small
    >
        <timeline-element-entry :elementData="elementData"></timeline-element-entry>
    </v-timeline-item>
  </v-timeline>

</template>

<script>
import TimelineElementEntry from './TimelineElementEntry'
export default {
    name: 'TimelineElements',
    props: ['elementsData'],
    components: {
        TimelineElementEntry
    }
}
</script>

<style scoped>

.timeline {
    width: 180px;
}

.v-timeline {
    padding-top: 1px;
}

.v-timeline::before {
    top: 20px;
}

.v-timeline-item {
    padding-bottom: 36px;
}

</style>
