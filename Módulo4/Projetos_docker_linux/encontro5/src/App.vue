<template>
  <div id="app">
    <h1>Sistema de Feedback</h1>
    <p class="subtitulo">Queremos saber sua opinião!</p>
    <!-- Componente filho que emite o evento 'avaliar' -->
    <SeletorSatisfacao @avaliar="processarAvaliacao" />
    <!-- Mensagem de feedback exibida após a avaliação -->
    <div v-if="avaliacaoRecebida" class="feedback">
      <p>{{ mensagemFeedback }}</p>
    </div>
  </div>
</template>

<script>
import SeletorSatisfacao from "./components/SeletorSatisfacao.vue";
export default {
  name: "App",
  components: { SeletorSatisfacao },
  data() {
    return {
      avaliacaoRecebida: "",
      mensagemFeedback: "",
    };
  },
  methods: {
    processarAvaliacao(nivel) {
      this.avaliacaoRecebida = nivel;
      if (nivel === "ruim") {
        this.mensagemFeedback =
          "😔 Que pena que sua experiência foi ruim. Vamos trabalhar para melhorar!";
      } else if (nivel === "normal") {
        this.mensagemFeedback =
          "😐 Obrigado pelo feedback! Vamos continuar melhorando nossos serviços.";
      } else if (nivel === "otimo") {
        this.mensagemFeedback =
          "🎉 Ficamos felizes que você gostou! Obrigado pela avaliação positiva!";
      }
      console.log("Avaliação recebida:", nivel);
    },
  },
};
</script>

<style>
#app {
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  max-width: 700px;
  margin: 0 auto;
  padding: 40px 20px;
  text-align: center;
}
h1 {
  color: #2c3e50;
  margin-bottom: 10px;
}
.subtitulo {
  color: #666;
  font-size: 18px;
  margin-bottom: 30px;
}
.feedback {
  margin-top: 30px;
  padding: 20px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border-radius: 10px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  animation: slideIn 0.5s ease-out;
}
.feedback p {
  margin: 0;
  font-size: 20px;
  font-weight: bold;
}
@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
