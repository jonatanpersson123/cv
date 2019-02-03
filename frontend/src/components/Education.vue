<template>
    <section id="education">
        <h1>Education</h1>
        <timeline-elements :elementsData="educationList" typeIcon="graduation-cap"></timeline-elements>
    </section>
</template>

<script>
import TimelineElements from './TimelineElements'
export default {
    name: 'Education',
    components: {
        TimelineElements
    },
    data() {
        return {
            educationList: [
                {
                    title: 'UI DESIGN PATTERNS',
                    link: 'https://www.interaction-design.org/courses/ui-design-patterns-for-successful-software',
                    time: 'Dec, 2018 - Current',
                    type: 'Course',
                    location: 'Interaction design foundation',
                    description: 'Fundamental UX course with UI design patterns.'
                },
                {
                    title: 'GRAPHIC DESIGN',
                    link: 'https://www.lunduniversity.lu.se/lubas/i-uoh-lu-TFRA41/5701T',
                    time: 'Mar, 2018 - Jun, 2018',
                    type: 'Course',
                    location: 'Lund, Sweden',
                    description: 'Base course in graphic design. Achieved at Lund University'
                },
                {
                    title: 'BACHELOR DEGREE IN SOFTWARE ENGINEERING',
                    link: 'https://www.hkr.se/en/program/bachelor-software-development',
                    time: 'Sept, 2012 - Jun, 2015',
                    type: 'Bachelor programme',
                    location: 'Kristianstad, Sweden',
                    description: 'Fundamental programme in software engineering. Graduated with highest honors at Högskolan Kristainstad.'
                }
            ]
        }
    }
}
</script>

<style scoped>
</style>
