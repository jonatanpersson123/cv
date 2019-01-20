<template>
    <div class="button-texts" :class="{next: isNext, prev: !isNext}">
        <span class="direction-text">{{isNext ? 'Next' : 'Previous'}}</span>
        <span class="chapter-text">{{chapterText}}</span>
    </div>
</template>

<script>
    export default {
        name: 'NavigationButtonTexts',
        props: ['chapterText', 'isNext']
    }
</script>

<style scoped>
.button-texts {
    display: flex;
    flex-direction: column;
    margin-left: 2px;
}

.button-texts.prev {
    transform: rotate(90deg);
    margin-top: 16px;
}

.button-texts.next {
    transform: rotate(270deg);
    margin-bottom: 16px;
}

.button-texts span {
    line-height: 1.4;
}

.direction-text {
    font-weight: bold;
}

.chapter-text {
    font-weight: bold;
    color: lightslategray;
}
</style>
