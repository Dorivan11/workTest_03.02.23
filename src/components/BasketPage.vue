<template>
    <v-container>
        <h1> Корзина </h1>
        <v-col>
            <Book
                v-for="book1 in $store.getters.getBooksInBasket"
                :key="book1.id"
                v-bind:book="book1"
            />
        </v-col>
    </v-container>
</template>
  
<script>
import Book from '@/components/Book.vue'
export default {
    data: ()=>({
        
    }),
    components:{
        Book
    },
    methods:{
        
    },
    mounted(){
        
    }
};
</script>