<template>
  <div>
    <div class="add">
      <form @submit.prevent="placeTodo()">
        <input type="text" v-model="title" placeholder="Add Todo" />
        <button type="submit" :disabled='title == ""'>Add Todo</button>
      </form>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "AddTodos",
  data() {
    return {
      title: "",
    };
  },
  methods: {
    ...mapActions(["addTodo"]),
    placeTodo() {
      this.addTodo(this.title);
      this.title = "";
    },
  },
};
</script>

<style lang="scss" scoped>
form {
  display: flex;
}
input[type="text"] {
  flex: 10;
  border: 1px solid #41b883;
  padding: 10px;
  outline: 0;
}
button {
  flex: 2;
  background-color: #41b883;
  border: 1px solid #41b883;
  padding: 10px;
  cursor: pointer;
  color: white;
  &:disabled{
 opacity: .5;
  }
}
</style>
