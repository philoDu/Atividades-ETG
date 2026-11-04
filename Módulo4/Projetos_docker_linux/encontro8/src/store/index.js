import { createStore } from "vuex";
const store = createStore({
  state() {
    return {
      produtosNoCarrinho: [],
    };
  },
  mutations: {
    ADICIONAR_PRODUTO(state, produto) {
      state.produtosNoCarrinho.push(produto);
    },
  },
  actions: {
    adicionarProdutoAoCarrinho(context, produto) {
      // Aqui poderíamos ter lógica assíncrona, validação, etc.
      context.commit("ADICIONAR_PRODUTO", produto);
    },
  },
  getters: {
    totalItensNoCarrinho(state) {
      return state.produtosNoCarrinho.length;
    },
  },
});
export default store;
