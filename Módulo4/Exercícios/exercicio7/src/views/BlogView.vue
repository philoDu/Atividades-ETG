<script setup>
import { posts } from '../data/posts'
import { formatarData } from '../utils/formatarData'

// Cópia ordenada: do mais recente para o mais antigo
const postsOrdenados = posts.toSorted((a, b) => b.data.localeCompare(a.data))

</script>

<template>
  <main class="blog">
    <h1>Posts Recentes</h1>

    <div class="lista">
      <article v-for="post in postsOrdenados" :key="post.id" class="card">
        <h2>{{ post.titulo }}</h2>
        <p class="meta">{{ post.autor }} · {{ formatarData(post.data) }}</p>
        <p>{{ post.resumo }}</p>
        <RouterLink :to="{ name: 'postDetail', params: { id: post.id } }">
          Ler post →
        </RouterLink>
      </article>
    </div>
  </main>
</template>

<style scoped>
.blog { max-width: 900px; margin: 0 auto; }
.lista {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: 20px;
}
.card {
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  background: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.08);
  transition: transform 0.2s;
}
.card:hover { transform: translateY(-3px); }
.card h2 { margin-top: 0; font-size: 1.2em; color: #2c3e50; }
.meta { font-size: 0.85em; color: #888; }
.card a { color: #42b983; font-weight: bold; text-decoration: none; }
</style>