<template>
  <HeaderLoja />
  <main>
    <ListaProdutos />
  </main>
</template>
<script>
import HeaderLoja from "./components/HeaderLoja.vue";
import ListaProdutos from "./components/ListaProdutos.vue";
export default {
  components: { HeaderLoja, ListaProdutos },
};
</script>
<style scoped>
body {
  margin: 0;
  background: #f5f5f5; /* Fundo cinza claro para a página */
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sansserif;
}
main {
  padding: 0; /* Remover padding para o header ficar full-width */
}
</style>
