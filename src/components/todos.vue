<template>
  <div>
    <h1>Todos</h1>
    <div class="todos">
      <div v-for="todo in allTodos" :key="todo.id" class="todo">
        {{ todo.title }}
        <img
          src="@/assets/trash-alt.svg"
          alt="delete"
          @click="deleteTodo(todo.id)"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "Todos",
  methods: {
    ...mapActions(["fetchTodos", "deleteTodo"]),
  },
  computed: {
    ...mapGetters(["allTodos"]),
  
  },
  created() {
    this.fetchTodos();
  },
};
</script>

<style lang="scss" scoped>
.todos {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 16px;
}
.todo {
  display: flex;
  flex-direction: column;
  border: 1px solid #ccc;
  background: #41b883;
  padding: 16px;
  border-radius: 5px;
  text-align: center;
  position: relative;
  cursor: pointer;
}
img {
  height: 20px;
  align-self: flex-end;
  transition: 0.3s;

  &:hover {
    transform: scale(1.2);
  }
}
</style>
