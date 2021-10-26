<template>
    <nav>
<router-link :to="{name: 'Home'}">Home</router-link>
<router-link :to="{name: 'About'}">About</router-link>
<router-link :to="{name: 'again'}">Again</router-link>
    </nav>
</template>

<script>
    export default {
       name: "Nav"
    }
</script>

<style lang="scss" scoped>
nav{
    width: 500px;
    display: flex;
    justify-content: space-between;
    a{
        color: #41b883;
        text-decoration: none;
        font-size: 20px;
        &:hover{
            color: dodgerblue;
        }
    }
}
</style>