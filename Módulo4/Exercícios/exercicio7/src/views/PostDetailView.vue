<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { posts } from '../data/posts'
import { formatarData } from '../utils/formatarData'

const route = useRoute()

// O id chega da URL como texto ("2"); converte para número
const postId = computed(() => Number(route.params.id))

const indice = computed(() => posts.findIndex((p) => p.id === postId.value))
const post = computed(() => posts[indice.value])
const anterior = computed(() => posts[indice.value - 1])
const proximo = computed(() => posts[indice.value + 1])

</script>

<template>
  <main class="post-detail">
    <article v-if="post">
      <h1>{{ post.titulo }}</h1>
      <p class="meta">{{ post.autor }} · {{ formatarData(post.data) }}</p>
      <p class="conteudo">{{ post.conteudo }}</p>

      <nav class="navegacao">
        <RouterLink v-if="anterior" :to="{ name: 'postDetail', params: { id: anterior.id } }">
          ← {{ anterior.titulo }}
        </RouterLink>
        <span v-else></span>
        <RouterLink v-if="proximo" :to="{ name: 'postDetail', params: { id: proximo.id } }">
          {{ proximo.titulo }} →
        </RouterLink>
      </nav>
    </article>

    <div v-else class="nao-encontrado">
      <h1>Post não encontrado</h1>
      <p>Não existe um post com o id {{ route.params.id }}.</p>
    </div>

    <RouterLink :to="{ name: 'blog' }" class="voltar">Voltar para a lista</RouterLink>
  </main>
</template>

<style scoped>
.post-detail { max-width: 700px; margin: 0 auto; }
.meta { color: #888; font-size: 0.9em; }
.conteudo { line-height: 1.7; font-size: 1.1em; margin: 25px 0; }
.navegacao {
  display: flex;
  justify-content: space-between;
  gap: 20px;
  padding: 20px 0;
  border-top: 1px solid #eee;
}
.navegacao a { color: #42b983; text-decoration: none; font-weight: bold; }
.nao-encontrado { text-align: center; padding: 40px 0; color: #888; }
.voltar { display: inline-block; margin-top: 20px; color: #2c3e50; }
</style>