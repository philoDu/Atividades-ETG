<template>
  <div class="carrinho">
    <h2>Carrinho</h2>
    
    <!-- TODO: Use v-if para mostrar esta mensagem apenas se o carrinho estiver vazio -->
    <p class="vazio" v-if="itens.length === 0">Seu carrinho está vazio.</p>
    
    <!-- TODO: Use v-for para iterar sobre os itens e renderizar cada um -->
    <ul>
      <li v-for="item in itens" :key="item.id">
        {{ item.nome }} - R$ {{ item.preco.toFixed(2) }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Carrinho',
  props: {
    itens: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped>
.carrinho {
  border: 2px solid #42b983;
  border-radius: 8px;
  padding: 20px;
  background-color: #f0f9f5;
}

h2 {
  margin-top: 0;
  color: #2c3e50;
}

.vazio {
  color: #999;
  font-style: italic;
}

ul {
  list-style: none;
  padding: 0;
}

li {
  padding: 10px;
  margin-bottom: 8px;
  background-color: white;
  border-radius: 5px;
  border-left: 4px solid #42b983;
}
</style>

