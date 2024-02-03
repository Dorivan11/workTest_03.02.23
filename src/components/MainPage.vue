<template>
    <v-container>
        <v-col>
            <Book
                v-for="book1 in $store.getters.getAllBooks"
                :key="book1.id"
                v-bind:book="book1"
            />
            
        </v-col>
    </v-container>
</template>
  
<script>
import Book from '@/components/Book.vue'
  
export default {
    components:{
        Book
    },
    created(){

    },
    mounted(){

    },
    methods:{
    }
};
</script>
  