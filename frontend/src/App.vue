<template>
  <div id="app">
    <cv></cv>
  </div>
</template>

<script>
import Cv from './components/CV'
export default {
  name: 'App',
  components: {
    Cv
  }
}
</script>

<style>
html {
  /* TODO - Extract to variables */
  background: lightgray;
}

body {
    height: 100vh;
}

@font-face {
  font-family: "TodaySB-Medium";
  src: url("assets/fonts/TodaySB-Medium.otf");
}

@font-face {
  font-family: "OpenSans-Regular";
  src: url("assets/fonts/OpenSans-Regular.ttf");
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  height: 100%;
  width: 100%;
  --dark: #363636;
}

.flex {
  display: flex;
}

</style>
