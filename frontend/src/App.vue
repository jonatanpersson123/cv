<template>
  <v-app>
  <div id="app">
    <cv></cv>
  </div>
  </v-app>
</template>

<script>
import Cv from './components/CV'
import "./styles/animations.css"
export default {
  name: 'App',
  components: {
    Cv
  }
}
</script>

<style>
body {
    height: 100vh;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  height: 100%;
  width: 100%;
  --dark: #363636;
  background: lightgray;

}

h1 {
  color: #363636;
  font-size: 72px;
  margin-bottom: 24px;
}

p {
  font-size: 16px;
}

section {
  height: 100%;
  overflow: auto;
  padding-top: 48px;
  padding-left: 64px;
  padding-right: 100px;
}

.flex {
  display: flex;
}

::-webkit-scrollbar {
    display: none;
}

</style>
