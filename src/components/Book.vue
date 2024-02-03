<template>
    <v-row>
        <v-card>
            <v-card-title> Название книги - {{ book.bookName }} </v-card-title>
            <v-card-text>
                <v-img
                    height="100"
                    width="100"
                    v-bind:src="book.bookSkin"
                />
                <p> Жанр - {{ book.bookStyle }} </p>
                <p> Автор - {{ book.bookAutor }} </p>
                <p> Год издания - {{ book.bookYear }} </p>
                <p> Цена - {{ book.bookPrice }} </p>
            </v-card-text>
            <v-btn v-if="!checkBookStatus()" @click="addBookToBasket"> Добавить в корзину </v-btn>
            <v-btn v-else @click="deleteBookFromBasket()"> Удалить из корзины </v-btn>
        </v-card>
    </v-row>
</template>
  
<script>

  
export default {
    props:{
        book:{
            type: Object,
            required: true
        },
    },
    methods:{
        addBookToBasket(){
            this.$store.commit('addBookToBasket', this.book)
            this.$store.commit('setBookInBasket', this.book)
            console.log(this.$store.getters.getAllBooks)
            console.log(this.$store.getters.getBooksInBasket)
            //this.$store.commit('getBookStatus', this.book)
        },
        checkBookStatus(){
            console.log('checkBookStatus')
            //console.log(this.$store.commit('getBookStatus', this.book))
            return this.$store.commit('getBookStatus', this.book)
        },
        deleteBookFromBasket(){
            console.log('deleteBookFromBasket')
            console.log(this.$store.commit('getBookStatus', this.book))
            //return this.$store.commit('getBookStatus', this.book)
        }
    }
};
</script>
  