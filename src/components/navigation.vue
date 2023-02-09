<template>
  <div id='header'>
    <div class="style">
      <router-link to="/">Catalog</router-link>
      <router-link to="cart">Cart</router-link>
      <router-link to="orders">Orders</router-link>
    </div>
    <h1>The best shop</h1>
    <div class="style">
      <router-link v-if="isAuthenticated" to="logout" @click="logout"><p>Sign Out</p></router-link>
      <router-link v-if="!isAuthenticated" to="login"><p>Sign in</p></router-link>
        <router-link v-if="!isAuthenticated" to="signup"><p>Sign up</p></router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "navigation",
  methods: {
    logout(){
      this.$store.dispatch('SIGN_OUT')
    }
  },
  computed: {
    isAuthenticated: function() {return this.$store.getters.isAuthenticated}
  }
}
</script>

<style scoped>
#header {
    display: flex;
    align-items: center;
  justify-content: space-around;
  background-color: lightsteelblue;
  }
.style {
  position: relative;
  align-items: center;
  width: 300px;
  height: 60px;
  border-radius: 15px;
  border: none;
  font-size: 24px;
  display: flex;
}

  .style > a {
    text-decoration: none;
    margin: 10px;
    color: midnightblue;
  }
  .style > a:hover {
    color: white;
  }
</style>