<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/peleadores">Peleadores</router-link> |
      <router-link :to="{name: 'buscador'}">Buscador</router-link> 
      
    </nav>
    <router-view></router-view>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color:black;
}

nav a.router-link-exact-active {
  color: blue;
}
</style>
