<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link :to="{ name : 'about' }">About</router-link> |
    <router-link to="/test">Test</router-link> |
    <router-link to="/demo">Demo</router-link> |
    <router-link to="/alllist">ToDoList</router-link> |
    <router-link to="/middlewarehome">Middleware Home</router-link> |
    <router-link :to="{ name : 'middlewarelogin'}">Middleware Login</router-link> |
  </nav>
  <router-view/>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
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
