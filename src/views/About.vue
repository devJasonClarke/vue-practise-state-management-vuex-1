<template>
  <div>
    <h1>Counter</h1>
    <h2>{{ counterState }}</h2>

    <button @click="addOne">plus</button>
    <button @click="minusOne">minus</button>
  </div>
  <div>
    <ul>
      <li v-for="people in personState" :key="people.name">{{ people }}</li>
    </ul>
    <form @submit.prevent="addPerson(person)">
      <input type="text" v-model="person" placeholder="person" />
    </form>
    <form @submit.prevent="add">
      <input type="text" v-model="leroy" placeholder="leroy" />
    </form>
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
export default {
  data() {
    return {
      person: "",
      leroy: "",
    };
  },
  methods: {
    ...mapActions(["addOne", "minusOne", "addPerson", "addLeroy"]),
    add() {
      this.addLeroy(this.leroy);
   /*    this.$router.push("/again") */
    },
  },
  computed: {
    ...mapGetters(["counterState", "personState"]),
  },
};
</script>

<style lang="scss" scoped></style>
