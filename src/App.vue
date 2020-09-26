<template>
  <v-app >
    <v-main class="mx-12 mt-8">
     <Navbar v-if="isNotLogin" />
     <!-- <div>{{this.$route.path}}</div> -->
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
import Navbar from "@/components/Navbar";
export default {
  computed: {
    isNotLogin() {
      return this.$route.path != '/';
    }
  },
  components: {
     Navbar,
  },
  data() {
	return{
		posts: []
	}
  },
  methods: {
    createProduct: function () {
      alert('createProduct');
    }
  }
}
</script>
