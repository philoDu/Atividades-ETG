<script setup>
const now = new Date().toLocaleString()
</script>

<template>
  <main style="font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol; padding: 2rem;">
    <h1 style="margin:0 0 0.5rem 0;">👋 Vue + Vite + Router + Vuex + Axios (Docker)</h1>
    <p style="margin:0 0 1rem 0;">Imagem: <code>papadopoli/vue-vite-dev:latest</code></p>
    <p>Agora são: <strong>{{ now }}</strong></p>

    <nav style="margin:1rem 0; display:flex; gap:1rem;">
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/about">About</RouterLink>
    </nav>

    <RouterView />
  </main>
</template>

<style scoped>
a { text-decoration: none; }
a.router-link-active { font-weight: 700; }
code { background:#f6f6f6; padding: .2rem .4rem; border-radius: 4px; }
</style>
