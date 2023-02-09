import { createStore } from 'vuex';
import axios from "axios";
import router from "@/router";
import cart from "@/views/Cart";

export default createStore({
  state: {
    token: localStorage.getItem('MyAppToken'),
      API: 'https://jurapro.bhuser.ru/api-shop/',
  },
   getters: {
    isAuthenticated: (state) => !!state.token,
  },
  mutations: {
    AUTH_SUCCESS: (state, token) => {
      state.token = token;
    },
    AUTH_ERROR: (state) => {
      state.token = '';
    },
  },
  actions: {
    async SIGN_IN({commit}, user) {
      console.log(commit)
      try {
        await axios.post(this.state.API + 'login', user).then((response) => {
          commit('AUTH_SUCCESS', response.data.data.user_token)
          axios.defaults.headers = {Authorisation: 'Bearer' + this.state.token}
          localStorage.setItem('MyAppToken', this.state.token)
          console.log('success')
          router.push('/')
        })
      } catch (e) {
        console.log('fail(')
        console.log(e)
        commit('AUTH_ERROR');
        localStorage.removeItem('MyAppToken');
      }
    },
    async SIGN_UP({commit}, user) {
      console.log(commit)
      try {
        await axios.post(this.state.API + 'signup', user).then((response) => {
          commit('AUTH_SUCCESS', response.data.data.user_token)
          localStorage.setItem('MyAppToken', this.state.token)
          router.push('/')
        })
      } catch (e) {
        console.log(e)
        commit('AUTH_ERROR');
        localStorage.removeItem('MyAppToken');
      }
    },
    async SIGN_OUT(){
      this.state.token = ''
      localStorage.removeItem('MyAppToken')
      await axios.get(this.state.API + 'logout')
    },
    async ADD_TO_CART(product){
      await axios.post(this.state.API + `cart/${product.product_id}`).then((response) => {
        commit('ADD_CART', response.data.data.user_token)
        axios.defaults.headers = {Authorisation: 'Bearer' + this.state.token}
        localStorage.setItem('MyAppToken', this.state.token)
        console.log(product.product_id)
        router.push('/')
      })
    }
  },
  modules: {
  }
})
