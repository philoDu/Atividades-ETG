<template>
  <div id="app">
    <h1>Ciclo de Vida e Vue DevTools</h1>
    <button @click="showExplorer = !showExplorer">
      {{ showExplorer ? "Desmontar" : "Montar" }} Explorador
    </button>
    <hr />
    <QuoteExplorer v-if="showExplorer" />
  </div>
</template>
<script>
import QuoteExplorer from "./components/QuoteExplorer.vue";
export default {
  name: "App",
  components: { QuoteExplorer },
  data() {
    return { showExplorer: true };
  },
};
</script>
<style>
#app {
  text-align: center;
  padding: 20px;
}
hr {
  margin: 20px 0;
}
</style>
