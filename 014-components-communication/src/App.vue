<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style>
body {
  background-color: rgba(238, 238, 238, 0.1);
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
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

.component-notice {
  font-size: 0.8em;
  color: rgba(102, 204, 153, 1);
  text-transform: uppercase;
}

.capitalize {
  text-transform: capitalize;
}
</style>
