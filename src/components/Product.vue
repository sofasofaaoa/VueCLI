<template>
  <div class="product">
    <h3>{{ prodData.name }}</h3>
    <p>{{ prodData.description }}</p>
    <div class="price">
      <p>Price: {{ prodData.price }}</p>
      <button v-if="this.$store.state.token" @click="addToCart">To cart</button>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import cart from "@/views/Cart";
export default {
  name: "Product",
  props: ['prodData'],
  methods: {
    // addToCart: {
    //   axios.post(this.$store.state.API + 'cart' + this.prodData.id).then((response)=>{
    //     cart.cart.push(response.data(this.prodData))
    //   })
    addToCart() {
      const prodData = {
        product_id: this.prodData.id,
        name: this.prodData.name,
        description: this.prodData.description,
        price: this.prodData.price
      };

      this.$store.dispatch('ADD_TO_CART', prodData.product_id)

  },
}

}

</script>

<style scoped>
  .product{
    height: 200px;
    width: 400px;
    background-color: lavender;
    vertical-align: middle;
    padding: 50px;
    margin: 10px;
  }
  button {
    border: none;
    height: 35px;
    width: 95px;
    background-color: #817ADCFF;
    font-size: 15px;
  }
  button:hover {
    cursor: pointer;
    background-color: #6660ad;
  }
  .price {
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  .price > p {
    font-size: 20px;
    margin: 0;
  }
</style>