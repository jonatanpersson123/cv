<template>
    <div>
        <div class="flex">
            <div class="navigation-button" >
                <!-- TODO - Reuse HTML block in navigation-button-texts -->
                <navigation-button-texts v-if="isNext" :isNext="isNext" :chapterText="chapterText"></navigation-button-texts>
                <v-btn fab small color="primary">
                    <v-icon :name="!isNext ? 'chevron-up' : 'chevron-down'" />
                </v-btn>
                <navigation-button-texts v-if="!isNext" :isNext="isNext" :chapterText="chapterText"></navigation-button-texts>
            </div>
        </div>
    </div>
</template>

<script>
import NavigationButtonTexts from './NavigationButtonTexts'
export default {
    name: 'NavigationButton',
    props: ['isNext', 'chapterText'],
    components: {
        NavigationButtonTexts
    }
}
</script>

<style scoped>

.navigation-button {
    display: flex;
    flex-direction: column;
    justify-content: unsafe;
    width: 40px;
    margin-left: auto;
}

.navigation-button button {
    height: 40px;
    width: 40px;
    margin: 0;
}

</style>
