<template>
    <section id="experience">
        <h1>Experience</h1>
        <timeline-elements class="timeline-elements" :elementsData="experienceList"></timeline-elements>
    </section>
</template>

<script>
import TimelineElements from './TimelineElements'
export default {
    name: 'Experience',
    components: {
        TimelineElements
    },
    data() {
        return {
            experienceList: [
                {
                    title: 'Exini Diagnostics',
                    link: 'www.exini.com',
                    type: 'Frontend developer',
                    location: 'Lund, Sweden',
                    description: 'Web-based diagnostic platform for treatment of prostate cancer patients.',
                    taskList: [
                        'Part of both design- and development team.',
                        'Translated and implemented design team’s sketches into flexible, interactive components, using HTML/CSS and JavaScript in Angular project.',
                        'Provided wireframes and design sketches of features during design process.'
                    ]
                },
                {
                    title: 'Mikrodust',
                    link: 'mikrodust.com',
                    type: 'Lead frontend developer',
                    location: 'Lund, Sweden',
                    description: 'Admin and operator system for running and handling test fixtures.',
                    taskList: [
                        'Responsible for implementing scaleable solutions to control a test fixture platform used by administrators and operators.',
                        'Responsible for communication between frontend, backend and design teams.',
                        'Created charts to nicely visualize gathered data.'
                    ]
                }
            ]
        }
    }
}
</script>

<style scoped>
#experience {
    margin-bottom: 130px;
}
</style>
