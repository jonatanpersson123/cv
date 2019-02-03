<template>
    <div class="element flex">
        <div class="element-info">
            <a class="link" :href="elementData.link" target="_blank">
                <h3>{{elementData.title}}</h3>
            </a>
            <timeline-element-entry-info icon="clock" :text="elementData.time"></timeline-element-entry-info>
            <timeline-element-entry-info :icon="typeIcon" :text="elementData.type"></timeline-element-entry-info>
            <timeline-element-entry-info icon="map-marker-alt" :text="elementData.location"></timeline-element-entry-info>
            <p class="description">{{elementData.description}}</p>
        </div>

        <div class="tasks">
            <timeline-element-entry-task v-for="(task, index) in elementData.taskList" :key="index" :task="task"></timeline-element-entry-task>
        </div>
    </div>
</template>

<script>
import TimelineElementEntryInfo from './TimelineElementEntryInfo'
import TimelineElementEntryTask from './TimelineElementEntryTask'
export default {
    name: 'TimelineElementEntry',
    props: {
        elementData: Object,
        typeIcon: String
    },
    components: {
        TimelineElementEntryInfo,
        TimelineElementEntryTask
    }
}
</script>

<style scoped>

.link {
    max-width: 300px;
    margin-bottom: 8px;
}

h3 {
    display: inline-block;
    font-size: 22px;
    color: #363636;
    text-transform: uppercase;
}

h4 {
    font-size: 16px;
    color: #363636;
    font-weight: initial;
}

p {
    font-size: 16px;
}

.element {
    margin-top: 9px;
}

.element-info {
    max-width: 390px;
}

.description {
    margin-top: 16px;
}

.tasks {
    display: flex;
    flex-direction: column;
    margin-left: 48px;
    padding-top: 4px;
}
</style>
