<template>
    <section id="experience" :class="{'section-md': $vuetify.breakpoint.mdAndDown, 'section-sm': $vuetify.breakpoint.smAndDown}">
        <h1 :class="{'h1-sm': $vuetify.breakpoint.smAndDown}">Experience</h1>
        <timeline-elements class="timeline-elements" :elementsData="experienceList" typeIcon="user-tie"></timeline-elements>
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
                    link: 'http://www.exini.com',
                    time: 'Oct, 2017 - Current',
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
                    link: 'http://www.mikrodust.com',
                    time: 'Oct, 2017 - Dec, 2017',
                    type: 'Lead frontend developer',
                    location: 'Lund, Sweden',
                    description: 'Admin and operator system for running and handling test fixtures.',
                    taskList: [
                        'Responsible for implementing scaleable solutions to control a test fixture platform used by administrators and operators.',
                        'Responsible for communication between frontend, backend and design teams.',
                        'Created charts to nicely visualize gathered data.'
                    ]
                },
                {
                    title: 'Save the children',
                    link: 'http://www.savethechildren.org',
                    time: 'Jun, 2017 - Nov, 2017',
                    type: 'Frontend developer',
                    location: 'Malmö, Sweden',
                    description: 'Cross-platform application developed for traumatized children',
                    taskList: [
                        'Translated and implemented design team’s sketches into mobile friendly components, using HTML/CSS and JavaScript in Vue.js project.',
                        'Developed a cross-platform application that runs on both iOS and Android devices.',
                        'Deployed iOS and Android applications on App Store and Google Play.',
                        'Had close communication with customers and end users to receive valuable feedback.'
                    ]
                },
                {
                    title: 'Magento E-Commerce',
                    link: 'https://magento.com',
                    time: 'May, 2016 - May, 2017',
                    type: 'Frontend/Backend developer',
                    location: 'Halmstad, Sweden',
                    description: 'Development and deployment of various online shops.',
                    taskList: []
                },
                {
                    title: 'Celsa Steel Service',
                    link: 'https://www.celsagroup.com',
                    time: 'Aug, 2015 - May, 2016',
                    type: 'Frontend/Backend developer',
                    location: 'Halmstad, Sweden',
                    description: 'System used for listing, detailing and ordering reinforcement products.',
                    taskList: []
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
