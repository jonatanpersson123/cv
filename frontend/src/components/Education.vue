<template>
    <section id="education">
        <h1>Education</h1>
        <timeline-elements :elementsData="educationList"></timeline-elements>
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
                    type: 'Course',
                    location: 'Interaction design foundation',
                    description: 'Fundamental UX course with UI design patterns.'
                },
                {
                    title: 'GRAPHIC DESIGN',
                    link: 'www.lth.com',
                    type: 'Course',
                    location: 'Lund, Sweden',
                    description: 'Base course in graphic design. Achieved at Lund University'
                },
                {
                    title: 'BACHELOR DEGREE IN SOFTWARE ENGINEERING',
                    link: 'www.hkr.se',
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
