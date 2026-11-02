<template>
  <div class="seletor-satisfacao">
    <h3>Como foi sua experiência?</h3>
    <div class="botoes">
      <button class="btn-ruim" @click="enviarAvaliacao('ruim')">😞 Ruim</button>
      <button class="btn-normal" @click="enviarAvaliacao('normal')">
        😐 Normal
      </button>
      <button class="btn-otimo" @click="enviarAvaliacao('otimo')">
        😊 Ótimo
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "SeletorSatisfacao",
  methods: {
    enviarAvaliacao(nivel) {
      this.$emit("avaliar", nivel);
    },
  },
};
</script>

<style scoped>
.seletor-satisfacao {
  border: 2px solid #42b983;
  border-radius: 10px;
  padding: 25px;
  max-width: 500px;
  margin: 20px auto;
  background-color: #f9f9f9;
  text-align: center;
}

h3 {
  color: #2c3e50;
  margin-top: 0;
  margin-bottom: 20px;
}

.botoes {
  display: flex;
  gap: 15px;
  justify-content: center;
}

button {
  padding: 12px 24px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 18px;
  font-weight: bold;
  transition: all 0.3s;
}
button:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}
.btn-ruim {
  background-color: #f5222d;
  color: white;
}
.btn-normal {
  background-color: #faad14;
  color: white;
}
.btn-otimo {
  background-color: #52c41a;
  color: white;
}
</style>
