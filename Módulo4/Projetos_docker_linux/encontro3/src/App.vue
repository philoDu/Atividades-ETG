<script setup>
const now = new Date().toLocaleString()
import PerfilUsuario from './components/PerfilUsuario.vue';
</script>

<template>
  <main style="font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol; padding: 2rem;">
    <h1 style="margin:0 0 0.5rem 0;">👋 Vue + Vite + Router + Vuex + Axios (Docker)</h1>
    <p style="margin:0 0 1rem 0;">Imagem: <code>papadopoli/vue-vite-dev:latest</code></p>
    <p>Agora são: <strong>{{ now }}</strong></p>
    <p class="saudacao">Boa tarde, professor Alexandre.</p>

    <nav style="margin:1rem 0; display:flex; gap:1rem;">
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/about">About</RouterLink>
    </nav>

    <RouterView />

    <PerfilUsuario />
  </main>
</template>

<style scoped>
a { text-decoration: none; }
a.router-link-active { font-weight: 700; }
code { background:#f6f6f6; padding: .2rem .4rem; border-radius: 4px; }
.saudacao {
  font-size: 24px;
  font-weight: 700;
  letter-spacing: -0.02em; /* Efeito tipográfico moderno */
  margin-bottom: 8px;
  background: linear-gradient(45deg, #4f46e5, #06b6d4);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent; 
  }
</style>
