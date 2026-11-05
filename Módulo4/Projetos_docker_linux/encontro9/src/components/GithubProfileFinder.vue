<template>
  <div class="profile-finder">
    <h2>Buscador de Perfil do GitHub</h2>
    <div class="search-bar">
      <input
        v-model="username"
        @keyup.enter="fetchUserProfile"
        type="text"
        placeholder="Digite um nome de usuário do GitHub"
      />
      <button @click="fetchUserProfile">Buscar</button>
    </div>
    <div v-if="loading" class="feedback">Carregando...</div>
    <div v-if="error" class="feedback error">{{ error }}</div>
    <div v-if="user" class="profile-card">
      <img :src="user.avatar_url" alt="Avatar do usuário" class="avatar" />
      <div class="user-info">
        <h3>{{ user.name }}</h3>
        <p class="login">@{{ user.login }}</p>
        <p>{{ user.bio }}</p>
        <a :href="user.html_url" target="_blank">Ver Perfil no GitHub</a>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "GithubProfileFinder",
  data() {
    return {
      username: "",
      user: null,
      loading: false,
      error: null,
    };
  },
  methods: {
    async fetchUserProfile() {
      if (!this.username) return;
      this.loading = true;
      this.error = null;
      this.user = null;
      try {
        const response = await axios.get(
          `https://api.github.com/users/${this.username}`,
        );
        this.user = response.data;
      } catch (err) {
        if (err.response && err.response.status === 404) {
          this.error = "Usuário não encontrado.";
        } else {
          this.error = "Ocorreu um erro ao buscar o perfil.";
        }
      } finally {
        this.loading = false;
      }
    },
  },
};
</script>

<style scoped>
.profile-finder {
  max-width: 500px;
  margin: 20px auto;
  padding: 20px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
}
.search-bar {
  display: flex;
  margin-bottom: 20px;
}
input {
  flex-grow: 1;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px 0 0 4px;
}
button {
  padding: 10px 15px;
  border: none;
  background: #42b983;
  color: white;
  border-radius: 0 4px 4px 0;
  cursor: pointer;
}
.feedback {
  text-align: center;
  padding: 20px;
}
.error {
  color: red;
}
.profile-card {
  display: flex;
  align-items: center;
  background: #f9f9f9;
  padding: 20px;
  border-radius: 8px;
}
.avatar {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin-right: 20px;
}
.user-info h3 {
  margin: 0;
}
.user-info .login {
  color: #666;
}
</style>
