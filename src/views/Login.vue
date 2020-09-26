
<template>
  <v-app id="inspire">
  <v-container class="v-picker--full-width" fluid>
    <v-row align="center" justify="center">
      <v-col cols="13" sm="9" md="5">
        <h1>Inventory Management System</h1>
        <br/>
        <v-card class="elevation-12">
              <v-toolbar color="primary" text>
                <v-toolbar-title class="white--text" align="center">Log In</v-toolbar-title>
                <v-spacer></v-spacer>
              </v-toolbar>
              <v-card-text>
                <v-form>
                  <v-text-field label="Email Address" v-model="loginData.email" type="text"></v-text-field>
                  <v-text-field label="Password" v-model="loginData.password" type="password"></v-text-field>
                  </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="primary" v-on:click.native="loginUser">Log In</v-btn>
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
  name: "LoginUser",
  data: function () {
    return {
      loginData: {
        email: undefined,
        password: undefined,
      },
      valid: true,
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ],
    }
  },

  methods:{
    loginUser(){
      const myData = new FormData();
      myData.append('email', this.loginData.email)
      myData.append('password', this.loginData.password)
      axios({
        method: 'post',
        url: 'http://localhost/stock/api/login/',
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json',
        },
        data: myData
      }).then(response =>
        {
          console.log(response);
          this.$useremail = response.email
          this.$userpass = response.password
          this.$userfname = response.firstname
          this.$userlname = response.lastname
          this.$usergroup = response.user_group
          this.$userphone = response.phone
          this.$usergender = response.gender
          this.$router.push('/dashboard');
      }).catch(error => {
        console.log(error);
      });
    }
  }
}
</script>

<style scoped>

</style>
