import { createStore } from 'vuex';
import todos from './modules/todos';
import counter from './modules/counter';

export default createStore({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    todos,
    counter
  }
})
