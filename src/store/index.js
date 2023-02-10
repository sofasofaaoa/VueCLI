import {createStore} from 'vuex';
import axios from "axios";
import router from "@/router";
import cart from "@/views/Cart";
import product from "@/components/Product";

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
        }
    },
    actions: {
        async SIGN_IN({commit}, user) {
            console.log(commit)
            try {
                await axios.post(this.state.API + 'login', user).then((response) => {
                    commit('AUTH_SUCCESS', response.data.data.user_token)
                    if (this.state.token) {
                        axios.defaults.headers.common["Authorization"] = 'Bearer ' + this.state.token
                    } else {
                        axios.defaults.headers.common["Authorization"] = ''
                    }
                    localStorage.setItem('MyAppToken', this.state.token)

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
        async SIGN_OUT() {
            this.state.token = ''
            localStorage.removeItem('MyAppToken')
            await axios.post(this.state.API + `logout`, {
                headers: {
                    'Content-Type': 'application/json;charset=utf-8',
                    'Authorization': 'Bearer ' + this.state.token
                }
            })
        },
        async ADD_TO_CART({commit}, product) {
            await axios.post(this.state.API + `cart/${product}`, product, {
                headers: {
                    'Content-Type': 'application/json;charset=utf-8',
                    'Authorization': 'Bearer ' + this.state.token
                }
            }).then((response) => {
                router.push('/')
            })
        }
    },
    modules: {}
})
