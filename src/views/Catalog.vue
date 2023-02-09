<template>
  <h2>Catalog</h2>
  <div>
    <Product v-for="prod in products.data" v-bind:key="prod.id" :prod-data="prod"></Product>
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
      products: [],
    }
  },
  mounted(){
    axios.get(this.$store.state.API + 'products').then((response)=>{
      this.products = response.data
    })
  }
}
</script>

<style scoped>
  div {
    display: inline-block;
  }
  product {
  }
</style>