<template>
    <div class="task">
        <v-icon class="check" name="regular/check-circle" scale="1.5" />
        <p class="task-text">{{task}}</p>
    </div>
</template>

<script>
export default {
    name: 'TimelineElementEntryTask',
    props: ['task']
}
</script>

<style scoped>
.task {
    display: flex;
    margin-bottom: 16px;
}

.check {
    margin-right: 20px;
}

.task-text {
    max-width: 320px;
}
</style>
