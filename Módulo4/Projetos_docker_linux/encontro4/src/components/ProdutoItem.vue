<template>
  <div class="produto-card">
    <h3> {{ produto.nome }} </h3>
    
    <!-- TODO: Exiba o preço formatado -->
    <p class="preco"> R$ {{ produto.preco.toFixed(2) }} </p>
    
    <!-- TODO: Adicione o evento @click que chama adicionarAoCarrinho -->
    <button @click="adicionarAoCarrinho">Adicionar</button>
  </div>
</template>

<script>
export default {
  name: 'ProdutoItem',
  props: {
    produto: {
      type: Object,
      required: true
    }
  },
  methods: {
    adicionarAoCarrinho() {
      this.$emit('adicionar', this.produto.id);
    }
  }
}
</script>

<style scoped>
.produto-card {
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 15px;
  margin-bottom: 15px;
  background-color: white;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

h3 {
  margin: 0 0 10px 0;
  color: #2c3e50;
}

.preco {
  font-size: 1.2em;
  font-weight: bold;
  color: #42b983;
  margin: 10px 0;
}

button {
  background-color: #42b983;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 5px;
  cursor: pointer;
  width: 100%;
}

button:hover {
  background-color: #369870;
}
</style>

