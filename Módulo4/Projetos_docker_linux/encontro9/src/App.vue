<template>
  <div id="app">
    <h1>Consumo de API com Vue.js</h1>
    <GithubProfileFinder />
  </div>
</template>

<script>
import GithubProfileFinder from "./components/GithubProfileFinder.vue";
export default {
  components: {
    GithubProfileFinder,
  },
};
</script>

<style>
#app {
font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
padding: 20px;
background: #f5f5f5;
min-height: 100vh;
}
h1 {
text-align: center;
color: #2c3e50;
}
</style>