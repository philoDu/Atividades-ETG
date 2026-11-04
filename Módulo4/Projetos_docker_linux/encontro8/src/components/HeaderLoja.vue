<template>
  <header>
    <h1>Minha Loja</h1>
    <div class="carrinho-info">Carrinho: {{ totalItens }} itens</div>
  </header>
</template>
<script>
export default {
  computed: {
    totalItens() {
      // Acessa o getter do store
      return this.$store.getters.totalItensNoCarrinho;
    },
  },
};
</script>

<style scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #2c3e50; /* Fundo escuro */
  color: white; /* Texto branco */
  padding: 15px 20px;
}
.carrinho-info {
  color: white; /* Garante texto branco no carrinho */
}
</style>
