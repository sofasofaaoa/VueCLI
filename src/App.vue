<template>
  <navigation></navigation>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

navigation {
  padding: 30px;
}

navigation a {
  font-weight: bold;
  color: #2c3e50;
}

navigation a.router-link-exact-active {
  color: #42b983;
}
</style>
<script>
import Navigation from "@/components/navigation";
export default {
  components: {Navigation}
}
</script>