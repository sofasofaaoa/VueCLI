<template>
  <form class="login" @submit.prevent="login">
    <h2>Sign in</h2>
    <label>E-mail</label>
    <input type="text" required v-model="email" />
    <label>Password</label>
    <input type="password" required v-model="password">
    <hr />
    <input type="submit" value="Login"/>
  </form>
</template>

<script>
export default {
  data() {
    return {
      email: this.email,
      password: this.password,
    };
  },
  methods:{
    login() {
        const userData = {
          email: this.email,
          password: this.password,
        };

        this.$store
            .dispatch('SIGN_IN', userData)
    },
  },
};
</script>

<style scoped>
  .login {
    display: flex;
    flex-direction: column;
    width: 300px;
    padding: 10px;
    margin: 0 auto;
  }
  .login input,
  button {
    border: 1px solid black;
    border-radius: 5px;
  }
</style>