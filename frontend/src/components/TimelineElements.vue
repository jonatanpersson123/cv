<template>
    <v-timeline dense align-top class="timeline-elements">
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

.timeline-elements {
    margin-left: 64px;
}

.v-timeline {
    padding-top: 1px;
}

.v-timeline::before {
    top: 20px;
}

.v-timeline-item {
    padding-bottom: 36px;
    max-width: 860px;
}

</style>
