<template>
  <div class="explorer">
    <h2>Explorador do Ciclo de Vida</h2>
    <div v-if="loading" class="loading">Carregando citação...</div>
    <blockquote v-else-if="quote">
      <p>"{{ quote.quote }}"</p>
      <footer>— {{ quote.author }}</footer>
    </blockquote>
    <button @click="fetchQuote">Obter Nova Citação</button>
  </div>
</template>
<script>
export default {
  name: "QuoteExplorer",
  data() {
    return { quote: null, loading: true, timer: null };
  },
  methods: {
    async fetchQuote() {
      this.loading = true;
      try {
        const response = await fetch("https://dummyjson.com/quotes/random");
        const data = await response.json();
        this.quote = data;
      } catch (error) {
        console.error("Erro ao buscar citação:", error);
      } finally {
        this.loading = false;
      }
    },
  },
  // --- Hooks do Ciclo de Vida ---
  beforeCreate() {
    console.log("beforeCreate: Componente está prestes a ser criado.");
  },
  created() {
    console.log("created: Componente criado. Dados reativos disponíveis.");
    this.fetchQuote(); // Busca a primeira citação
  },
  beforeMount() {
    console.log("beforeMount: Componente prestes a ser montado no DOM.");
  },
  mounted() {
    console.log("mounted: Componente montado no DOM! Iniciando timer."); // Exemplo de timer para ser limpo depois
    this.timer = setInterval(() => {
      console.log("Timer ativo...");
    }, 5000);
  },
  beforeUpdate() {
    console.log("beforeUpdate: Componente prestes a ser atualizado.");
  },
  updated() {
    console.log("updated: Componente atualizado (DOM renderizado de novo).");
  },
  beforeUnmount() {
    console.log("beforeUnmount: Componente prestes a ser desmontado.");
  },
  unmounted() {
    console.log("unmounted: Componente desmontado! Limpando timer.");
    clearInterval(this.timer); // Limpeza de recursos
  },
};
</script>
<style scoped>
.explorer {
  border: 2px solid #42b983;
  padding: 20px;
  border-radius: 8px;
  max-width: 600px;
  margin: 20px auto;
}
.loading {
  font-style: italic;
  color: #888;
}
blockquote {
  background: #f4f4f4;
  border-left: 5px solid #ccc;
  margin: 20px 0;
  padding: 10px 20px;
}
footer {
  text-align: right;
  font-style: italic;
}
button {
  background-color: #42b983;
  color: white;
  border: none;
  padding: 10px 15px;
  border-radius: 5px;
  cursor: pointer;
}
</style>
