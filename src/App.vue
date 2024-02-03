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
  methods:{
    
  },
  components:{
    HeaderBar
  },
  async created(){
    console.log('1')
    const request = await fetch(this.urlServer, {
      method: 'GET',
      headers: {"Content-Type": "application/json"}
    })
    const result = await request.json()
    console.log(result)
    this.$store.dispatch("getBooksFromServer")
  },
  async mounted(){

  }
};

// {
//   console.log('1')
//     const r3 = await fetch(this.urlServer, {
//       method: 'GET',
//       headers: {"Content-Type": "application/json"}
//     })
//     const result3 = await r3.json()
//     console.log(result3)
//     console.log('1 end')

//     console.log('2')
//     const r2 = await fetch(this.urlServer, {
//       method: 'POST',
//       headers: {"Content-Type": "application/json"},
//       body: JSON.stringify({"aaa": "bbb"})
//     })
//     const result2 = await r2.json()
//     console.log(result2)
//     console.log('2 end')

//     console.log('3')
//     const r1 = await fetch(this.urlServer, {
//       method: 'GET',
//       headers: {"Content-Type": "application/json"}
//     })
//     const result1 = await r1.json()
//     console.log(result1)
//     console.log('3 end')

// }
</script>
