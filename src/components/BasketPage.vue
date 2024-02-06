<template>
    <v-container >
        <h1> Корзина </h1>
        <v-col>
            <Book
                v-for="bookInMass in $store.getters.getBooksInBasket"
                :key="bookInMass.id"
                v-bind:book="bookInMass"
            />
        </v-col>
        <RedactorDialog />
    </v-container>
</template>
  
<script>
import Book from '@/components/Book.vue'
import RedactorDialog from './RedactorDialog.vue';
export default {
    components:{
        Book,
        RedactorDialog
    },
    methods:{
        showRedactorWindow(book){
            this.bookForRedaction = book
            this.DialogRedactorVisible = true
        },
    },
};
</script>