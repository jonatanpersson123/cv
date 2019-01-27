<template>
    <div class="element flex">
        <div class="element-info">
            <h3>{{elementData.title}}</h3>
            <h4>{{elementData.type}}</h4>
            <timeline-element-entry-location :location="elementData.location"></timeline-element-entry-location>
            <p class="description">{{elementData.description}}</p>
        </div>

        <div class="tasks">
            <timeline-element-entry-task v-for="(task, index) in elementData.taskList" :key="index" :task="task"></timeline-element-entry-task>
        </div>
    </div>
</template>

<script>
import TimelineElementEntryLocation from './TimelineElementEntryLocation'
import TimelineElementEntryTask from './TimelineElementEntryTask'
export default {
    name: 'TimelineElementEntry',
    props: ['elementData'],
    components: {
        TimelineElementEntryLocation,
        TimelineElementEntryTask
    }
}
</script>

<style scoped>
h3 {
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
    max-width: 240px;
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
