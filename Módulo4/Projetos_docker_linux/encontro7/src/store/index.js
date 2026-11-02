import { createStore } from 'vuex'

export default createStore({
  state() {
    return {
      count: 0,
      todos: [],
      lastFetch: null,
    }
  },
  getters: {
    doubled: (s) => s.count * 2,
    todosCount: (s) => s.todos.length
  },
  mutations: {
    increment(s, value = 1) { s.count += value },
    reset(s) { s.count = 0 },
    setTodos(s, todos) {
      s.todos = todos
      s.lastFetch = new Date().toISOString()
    },
  },
  actions: {
    // reservado: a demo usa axios direto no componente
  }
})
