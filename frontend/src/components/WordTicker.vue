<template>
    <div class="word-slider">
        <ul class="words">
        <li v-for="(word, index) in wordList" :key="index">{{word}}</li>
            <!-- First word added again for smooth transition -->
        <li class="word">{{wordList[0]}}</li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: 'WordTicker',
        props: {
            wordList: Array
        }
    }
</script>

<style lang="scss" scoped>
.word-slider {
    display: inline-block;
    font-weight: bold;
    height: 1.5em;
    overflow: hidden;
    padding-top: 0.5px;
    vertical-align: middle;
    mask-image: linear-gradient(transparent, white, white, white, transparent);
    mask-type: luminance;
    mask-mode: alpha;
    line-height: 24px;
}

.words {
    display: inline-block;
    margin: 0;
    padding: 0;
    list-style: none;
    animation-name: wordSlider;
    animation-timing-function: ease-out;
    animation-iteration-count: infinite;
    animation-duration: 14s;
}

.word {
    display: block;
    line-height: 1.3em;
    text-align: left;
}

@keyframes wordSlider {
  $steps: -0%, -10%, -20%, -30%, -40%, -50%, -60%, -70%, -80%, -90%;

  @for $index from 0 to length($steps)-1 {
    $next: $index+1;
    $step: floor(100/(length($steps)-1));
    $animation_step: floor($step*.2);
    #{$step*$index}%,
    #{($step*$next) - $animation_step}% {
      transform: translateY(nth($steps, $index+1));
    }
  }
  100% {
    transform: translateY(nth($steps, length($steps)));
  }
}
</style>
