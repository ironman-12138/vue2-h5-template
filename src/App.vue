<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  height: 100%;
  width: 100%;
  margin: 0;
  padding: 0;
}
html,body{
  margin: 0;
  padding: 0;
  min-height: 100%;
  width: 100%;
}
</style>
