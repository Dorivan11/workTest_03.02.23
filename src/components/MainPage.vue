<template>
    <v-container>
        <v-col>
            <Book
                v-for="bookInMass in $store.getters.getAllBooks"
                :key="bookInMass.id"
                v-bind:book="bookInMass"
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
};
</script>
  