<template>
  <h2>Cart</h2>
  <div>
    <Product v-for="prod in cart.data" v-bind:key="prod.id" :prod-data="prod"></Product>
  </div>
</template>

<script>
import axios from "axios";
import Product from "@/components/Product";
export default {
  name: "Catalog",
  components: {Product},
  data(){
    return{
      cart: [],
    }
  },
  mounted(){
    axios.get(this.$store.state.API + 'cart').then((response)=>{
      this.cart = response.data
    })
  }
}
</script>

<style scoped>

</style>