<script setup>
</script>

<template>
  <section>
    <h2>ℹ️ About</h2>
    <p>Demonstrando o <strong>Vue Router</strong>.</p>
    <p>Contador global (Vuex): <strong>{{ $store.state.count }}</strong> (dobrado: {{ $store.getters.doubled }})</p>
    <div style="display:flex; gap:.5rem; flex-wrap:wrap;">
      <button @click="$store.commit('increment', 1)" style="padding:.35rem .7rem;">+1</button>
      <button @click="$store.commit('reset')" style="padding:.35rem .7rem;">reset</button>
    </div>
  </section>
</template>
