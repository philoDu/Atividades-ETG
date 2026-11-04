<script setup>
import { posts } from '../data/posts'
import { formatarData } from '../utils/formatarData'

const postRecente = posts.at(-1)
</script>

<template>
  <main class="home">
    <h1>Bem-vindo ao Mini Blog!</h1>
    <p>Artigos sobre Vue.js e desenvolvimento web.</p>

    <section class="destaque">
      <span class="etiqueta">Post mais recente</span>
      <h2>{{ postRecente.titulo }}</h2>
      <p>{{ postRecente.resumo }}</p>
      <p class="meta">{{ postRecente.autor }} · {{ formatarData(postRecente.data) }}</p>
      <RouterLink :to="{ name: 'postDetail', params: { id: postRecente.id } }">
        Ler post →
      </RouterLink>
    </section>

    <RouterLink :to="{ name: 'blog' }" class="botao">Ver todos os posts</RouterLink>
  </main>
</template>

<style scoped>
.home { max-width: 700px; margin: 0 auto; text-align: center; }
.destaque {
  margin: 30px 0;
  padding: 25px;
  border-left: 5px solid #42b983;
  background: #f9f9f9;
  border-radius: 8px;
  text-align: left;
}
.etiqueta { font-size: 0.8em; text-transform: uppercase; color: #42b983; font-weight: bold; }
.meta { font-size: 0.9em; color: #888; }
.botao {
  display: inline-block;
  padding: 10px 20px;
  background: #42b983;
  color: white;
  border-radius: 5px;
  text-decoration: none;
}
</style>