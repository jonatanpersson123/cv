<template>
  <v-app>
    <div id="app" class="blendIn">
      <cv></cv>
    </div>
  </v-app>
</template>

<script>
import Cv from './components/CV'
import './styles/animations.css'
export default {
  name: 'App',
  components: {
    Cv
  }
}
</script>

<style>
@import "./styles/global.css";
@import "./styles/vars.css";

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  height: 100%;
  width: 100%;
}

</style>
