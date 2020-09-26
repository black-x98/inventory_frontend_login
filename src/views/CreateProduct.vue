
<template>
  <v-app id="inspire">
      <v-container class="v-picker--full-width" fluid>
        <v-row align="center" justify="center">
          <v-col cols="12" sm="8" md="4">
            <v-card class="elevation-12">
              <v-toolbar color="primary" dark text>
                <v-toolbar-title>Create Product</v-toolbar-title>
                <v-spacer></v-spacer>
              </v-toolbar>
              <v-card-text>
                <v-form>
                  <v-text-field label="Product name" v-model="postData.product_name" type="text"></v-text-field>
                  <v-text-field label="QR Code" v-model="postData.sku" type="text"></v-text-field>
                  <v-text-field label="Price" v-model="postData.price" type="number"></v-text-field>
                  <v-text-field  label="Quantity" v-model="postData.qty" type="number"></v-text-field>
<!--                  <v-text-field label="Request Type" v-model="postData.req_type" prepend-icon="mdi-lock"></v-text-field>-->
                  <v-select
                            :items="req_types"
                            :rules="[v => !!v || 'Request type is required']"
                            label="Request Type"
                            v-model="postData.req_type"
                            required
                  ></v-select>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="primary" v-on:click.native="createProduct">Create Product</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
  </v-app>
</template>

<script>
import axios from 'axios';

export default {
  name: "CreateProduct",
  data(){
    return {
      postData:{
        product_name: undefined,
        sku: undefined,
        price: undefined,
        qty: undefined,
        req_type: undefined,
        status: "pending"
      },
      req_types: [
        'check-in',
        'check-out'
      ],
    }
  },
  methods:{
    createProduct(){
      const myData = new FormData();
      myData.append('product_name', this.postData.product_name)
      myData.append('sku', this.postData.sku)
      myData.append('price', this.postData.price)
      myData.append('qty', this.postData.qty)
      myData.append('request_type', this.postData.req_type)
      myData.append('status', this.postData.status)

      return axios('http://localhost/stock/api/assets/', {
        method: 'POST',
        data: myData,
        mode: 'no-cors',
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json',
        },
      })
          .then(response => {
            this.products = response.data
            this.$router.push('/products');
          })
          .catch(error => {
            console.log(error);
          });
    }
  }
}
</script>

<style scoped>

</style>
