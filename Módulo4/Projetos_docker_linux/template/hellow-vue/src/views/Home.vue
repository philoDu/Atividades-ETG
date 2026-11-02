<script setup>
import { ref, onMounted } from 'vue'
import { useStore } from 'vuex'
import axios from 'axios'

const store = useStore()
const loading = ref(false)
const error = ref(null)

async function load() {
  loading.value = true
  error.value = null
  try {
    const { data } = await axios.get('https://jsonplaceholder.typicode.com/todos?_limit=3')
    store.commit('setTodos', data)
  } catch (e) {
    error.value = String(e)
  } finally {
    loading.value = false
  }
}

onMounted(() => { load() })
</script>

<template>
  <section>
    <h2>🏠 Home (Router)</h2>
    <p>Este componente usa <code>axios</code> para buscar dados e salva no <code>Vuex</code>.</p>

    <div style="margin:.75rem 0;">
      <button @click="load" :disabled="loading" style="padding:.4rem .8rem;">
        {{ loading ? 'Carregando...' : 'Recarregar' }}
      </button>
      <span v-if="error" style="color:#c00; margin-left:.5rem;">{{ error }}</span>
    </div>

    <ul>
      <li v-for="t in $store.state.todos" :key="t.id">
        <strong>#{{ t.id }}</strong> — {{ t.title }}
      </li>
    </ul>

    <p v-if="$store.state.lastFetch" style="font-size:.9rem;color:#666;">
      Última busca: {{ new Date($store.state.lastFetch).toLocaleString() }}
    </p>
  </section>
</template>
