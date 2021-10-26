<template>
  <div>
    <h2>{{ counterState }}</h2>
    <h3>Leroy {{leroyState.place}}</h3>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["counterState", "leroyState"]),
  },
};
</script>

<style lang="scss" scoped></style>
