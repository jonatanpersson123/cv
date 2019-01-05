<template>
  <div id="app">
    <HeaderLine></HeaderLine>
    <router-view/>
  </div>
</template>

<script>
import HeaderLine from './components/HeaderLine'
export default {
  name: 'App',
  components: {
    HeaderLine
  }
}
</script>

<style>
html {
  /* TODO - Extract to variables */
  background: lightgray;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  --dark: #363636;

}

.flex {
  display: flex;
}

</style>
