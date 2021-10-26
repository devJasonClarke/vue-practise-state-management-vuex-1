<template>
  <div>
    <div class="container">
      <AddTodos />
      <FilterTodos />
      <Todos />
    </div>
  </div>
</template>

<script>
import Todos from "@/components/todos.vue";
import AddTodos from "@/components/addTodos.vue";
import FilterTodos from "@/components/filterTodos.vue";
export default {
  components: {
    Todos,
    AddTodos,
    FilterTodos

  },
};
</script>

<style lang="scss" >
body {
  line-height: 1.6;
  background: #e8f7f0;
}
.container {
  max-width: 1100px;
  margin: auto;
  padding: 5vh 16px;
}
</style>
