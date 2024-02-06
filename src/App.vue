<template>
  <v-app>
    <HeaderBar/>
    <router-view/>
  </v-app>
</template>

<script>
import HeaderBar from './components/HeaderBar.vue';

export default {
  data: ()=>({
    urlServer: 'http://localhost:3333/books',
  }),
  components:{
    HeaderBar
  },
  async created(){
    const request = await fetch(this.urlServer, {
      method: 'GET',
      headers: {"Content-Type": "application/json"}
    })
    const result = await request.json()
    this.$store.dispatch("getBooksFromServer")
  },
};
</script>
