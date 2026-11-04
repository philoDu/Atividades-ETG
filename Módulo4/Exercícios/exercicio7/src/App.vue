<template>
  <header>
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/blog">Blog</router-link>
    </nav>
  </header>
  <main>
    <router-view />
  </main>
</template>
<style scoped>
header {
  background: #f2f2f2;
  padding: 15px;
  text-align: center;
}
nav a {
  font-weight: bold;
  color: #2c3e50;
  margin: 0 15px;
  text-decoration: none;
}
nav a.router-link-exact-active {
  color: #42b983;
}
main {
  padding: 20px;
}
</style>
