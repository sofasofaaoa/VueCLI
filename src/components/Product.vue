<template>
  <div class="product">
    <h3>{{ prodData.name }}</h3>
    <p>{{ prodData.description }}</p>
    <p>Price: {{ prodData.price }}</p>
    <button v-if="this.$store.state.token">В корзину</button>
  </div>
</template>

<script>
export default {
  name: "Product",
  props: ['prodData']

}

</script>

<style scoped>
  .product{
    height: 200px;
    width: 400px;
    background-color: lavender;

    padding: 50px;
    margin: 10px;
  }
</style>