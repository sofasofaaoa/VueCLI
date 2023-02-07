<template>
  <form class="signup" @submit.prevent="signup">
    <h1>Sign up</h1>
    <label>FIO</label>
    <input type="text" required v-model="fio" />
    <label>E-mail</label>
    <input type="text" required v-model="email" />
    <label>Password</label>
    <input type="password" required v-model="password" />
    <hr />
    <input type="submit" value="Sign Up"/>
  </form>
  <a href="login">Sign in</a>
</template>

<script>
import AUTH_REQUEST from '../store'
export default {

  data() {
    return {
      fio: "",
      email: "",
      password: "",
    };
  },
  methods:{
    signup() {
      const userData = {
        fio: this.fio,
        email: this.email,
        password: this.password,
      };

      this.$store
          .dispatch(AUTH_REQUEST, userData)
    },
  },
};
</script>

<style scoped>
.signup {
  display: flex;
  flex-direction: column;
  width: 300px;
  padding: 10px;
  margin: 0 auto;
}
.signup input {
  border: 1px solid black;
  border-radius: 5px;
  h2 {
    margin: 10px 0;
  }
}
</style>