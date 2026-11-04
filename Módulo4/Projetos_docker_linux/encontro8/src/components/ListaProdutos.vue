<template>
  <div class="lista-produtos">
    <h2>Produtos</h2>
    <ul>
      <li v-for="produto in produtos" :key="produto.id">
        {{ produto.nome }} - R$ {{ produto.preco.toFixed(2) }}
        <button @click="adicionarAoCarrinho(produto)">
          Adicionar ao Carrinho
        </button>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      produtos: [
        { id: 1, nome: "Produto A", preco: 49.9 },
        { id: 2, nome: "Produto B", preco: 29.9 },
        { id: 3, nome: "Produto C", preco: 89.9 },
      ],
    };
  },
  methods: {
    adicionarAoCarrinho(produto) {
      // Dispara a ação do store
      this.$store.dispatch("adicionarProdutoAoCarrinho", produto);
    },
  },
};
</script>

<style scoped>
.lista-produtos {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
}
ul {
  list-style: none;
  padding: 0;
}
li {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
  padding: 20px;
  background: white; /* Fundo branco */
  border: 1px solid #ddd; /* Borda cinza clara */
  border-radius: 8px; /* Bordas arredondadas */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Sombra suave */
}
button {
  margin-left: 15px;
  padding: 10px 20px;
  background: #42b983; /* Verde Vue.js */
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
button:hover {
  background: #35a372;
}
</style>
