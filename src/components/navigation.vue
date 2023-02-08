<template>
  <div id='header'>
    <div class="nav">
    </div>
    <div class="auth">
      <router-link v-if="this.$store.state.token" to="logout" @click="logout"><p>Sign Out</p></router-link>
      <router-link v-if="this.$store.state.token === ''" to="login"><p>Sign in</p></router-link>
        <router-link v-if="this.$store.state.token === ''" to="register"><p>Sign up</p></router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "navigation",
  logout(){
    this.$store.dispatch('SIGN_OUT')
  }
}
</script>

<style scoped>
  #header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 20px
  }
</style>