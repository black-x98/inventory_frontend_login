<template>
<div>

  <h1>{{this.$appName}}</h1>
  <router-link class="text-link" to="/createUser">
    <v-btn color="primary" class="white--text">
      <!-- <v-icon>menu</v-icon> -->
      <span>Add User</span>
    </v-btn>
  </router-link>
  <h1>List of Users</h1>

  <v-card color=#fefefe :outline="true" :raised="true" v-for="user in users.slice(0,30)" :key="user.id">
    <v-layout row wrap :class="`pa-3 project ${user.username}`">
      <v-flex xs2 sm2 md2>
        <div class="caption grey--text" align="center">Name</div>
        <div align="center">{{user.firstname + " " + user.lastname}}</div>
      </v-flex>

      <v-flex xs2 sm2 md2>
        <div class="caption grey--text">Email Address</div>
        <div >{{user.email}}</div>
      </v-flex>
      <v-flex xs2 sm2 md2>
        <div class="caption grey--text">Phone Number</div>
        <div >{{user.phone}}</div>
      </v-flex>
	<v-flex xs2 sm2 md2>
		<div class="caption grey--text">username</div>
		<div >{{user.username}}</div>
      </v-flex>
      <v-flex xs2 sm2 md2>
        <div class="caption grey--text">Group</div>
        <div >{{user.user_group}}</div>
      </v-flex>
	<v-flex xs2 sm2 md2>
		<div class="caption grey--text">Actions</div>
		<div >
		<v-btn align="left" text color=#3b5998 class="white--text">
        <v-icon>edit</v-icon>
      </v-btn>
      <v-btn align="left" text color=#3b5998 class="white--text">
        <v-icon>delete</v-icon>
      </v-btn>
	</div>
      </v-flex>
    </v-layout>
  </v-card>
</div>
</template>

<script>
import axios from 'axios';
export default {
  name: "Users",
  data() {
	return{
		users: []
	}
  },
  created(){
	//axios.post('https://run.mocky.io/v3/74bfda65-8907-469b-a6ec-e864153e87a7')
	axios.get('http://localhost/stock/api/users/')
	.then(response => {
		this.users = response.data
	})
	.catch(error => {
		console.log(error);
	});
  }
}
</script>

<style scoped>

.card-border {
  border-style: solid;
  border-color: #ff0000 #00ff00 #0000ff;
}

</style>
