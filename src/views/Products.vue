<template>
<div>
  <router-link class="text-link" to="/createProduct">
  <v-btn color="primary" class="white--text">
    <!-- <v-icon>menu</v-icon> -->
    <span>Add Product</span>
  </v-btn>
  </router-link>
  <v-spacer/>

  <br/>

  <h1>List of Products</h1>

  <v-card color=#fefefe v-for="product in products.slice(0,30)" :key="product.id">
    <v-layout row wrap :class="`pa-3 project ${product.name}`">
      <v-flex xs2 sm2 md2>
        <div class="caption grey--text" align="center">Product Name</div>
        <div align="center">{{product.name}}</div>
      </v-flex>
      <v-flex xs2 sm2 md2>
        <div class="caption grey--text">Price per Unit</div>
        <div >{{product.price}}</div>
      </v-flex>
      <v-flex xs2 sm2 md2>
        <div class="caption grey--text">Quantity</div>
        <div >{{product.quantity}}</div>
      </v-flex>
      <v-flex xs2 sm2 md2>
        <div class="caption grey--text">QR Code</div>
        <div >{{product.sku}}</div>
      </v-flex>
    </v-layout>
  </v-card>
</div>
</template>

<script>
import axios from 'axios';
export default {
  name: "Products",
  data() {
	return{
		products: []
	}
  },
  created(){
	axios.get('http://localhost/stock/api/assets/')
	.then(response => {
		this.products = response.data
	})
	.catch(error => {
		console.log(error);
	});
  },
  methods: {
    sortBy(){
      // this.projects.sort((a,b) => a[prop] < b[prop] ? -1 : 1)
      console.log("TTTTTTTTTTTTT the prop function is logging output TTTTTTTTTTTTTTTT");

    },
  }
}
</script>

<style scoped>

</style>
