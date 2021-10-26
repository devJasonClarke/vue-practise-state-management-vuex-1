export default{
 state : {
  counter: 0,
  people:["jason", "leee", "lidajfo"],
  leroy: {name: 'akerman'}
},

 actions : {
  addOne({ commit }) {
    commit("increment");
  },
  minusOne({ commit }) {
    commit("decrement", 10);
  },
  addPerson({commit},x){
    commit('add',x)
  },
  addLeroy({commit},x){
    commit('addLeroy',x)
  }
},

 getters : {
  counterState: (state) => state.counter,
  personState: (state) => state.people,
  leroyState: (state)=> state.leroy
},

 mutations: {
  increment: (state) => state.counter++,
  decrement: (state) => state.counter--,
  add: (state,x)=> state.people.push(x),
  addLeroy: (state,x) => state.leroy.place = x
}

}