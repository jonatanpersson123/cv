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

/* TODO - Move to global */
a {
  display: inline-block;
  background-image: linear-gradient(var(--dark, black), var(--dark, black));
  background-size: 0 3px, auto;
  background-repeat: no-repeat;
  background-position: center bottom;
  transition: all .2s ease-out;
}

a:hover {
  background-size: 100% 3px, auto;
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
