<template>
<Nav />
  <router-view/>
</template>

<script>
import Nav from './components/Nav';
export default {
components: {
  Nav,
},
}
</script>

<style lang="scss">
*{
  margin: 0;
  padding: 0;
}
body {
  line-height: 1.6;
  background: #e8f7f0;
}
#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
