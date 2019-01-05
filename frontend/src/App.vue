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
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
