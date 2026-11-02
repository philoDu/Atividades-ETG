<template>
  <div id="app">
    <h1>Lista de Compras</h1>
    
    <div class="container">
      <div class="produtos-lista">
        <h2>Produtos Disponíveis</h2>
        <ProdutoItem 
          v-for="produto in produtosDisponiveis" 
          :key="produto.id" 
          :produto="produto" 
          @adicionar="adicionarProdutoAoCarrinho" 
        />
      </div>

      <div class="carrinho-container">
         <Carrinho :itens="carrinho" />
      </div>
    </div>
  </div>
</template>

<script>
import ProdutoItem from './components/ProdutoItem.vue';
import Carrinho from './components/Carrinho.vue';

export default {
  name: 'App',
  components: {
    ProdutoItem,
    Carrinho
  },
  data() {
    return {
      produtosDisponiveis: [
        { id: 1, nome: 'Arroz', preco: 25.90 },
        { id: 2, nome: 'Feijão', preco: 8.50 },
        { id: 3, nome: 'Macarrão', preco: 4.20 },
        { id: 4, nome: 'Óleo', preco: 7.80 },
        { id: 5, nome: 'Açúcar', preco: 3.50 }
      ],
      carrinho: []
    }
  },
  methods: {
    adicionarProdutoAoCarrinho(produtoId) {
      const produto = this.produtosDisponiveis.find(p => p.id === produtoId);
      if (produto) {
        this.carrinho.push(produto);
      }
    }
  }
}
</script>

<style>
#app {
  font-family: Arial, sans-serif;
  max-width: 1000px;
  margin: 0 auto;
  padding: 20px;
}

.container {
  display: flex;
  gap: 30px;
}

.produtos-lista, .carrinho-container {
  flex: 1;
}

h2 {
  color: #42b983;
}
</style>

