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
            <v-btn v-if="checkBookStatus" @click="addBookToBasket(), updateServerDataDeleteFromCatalog"> Добавить в корзину </v-btn>
            <div v-else>
                <v-btn @click="deleteBookFromBasket(), updateServerDataDeleteFromBasket"> Удалить из корзины </v-btn>
                <v-btn @click="openBookForRedaction()"> Редактировать книгу </v-btn>
            </div>
            
        </v-card>
    </v-row>
</template>
  
<script>
export default {
    data: ()=>({
        urlServer: 'http://localhost:3333/books',
    }),
    props:{
        book:{
            type: Object,
            required: true
        },
    },
    computed:{
        checkBookStatus(){
            return this.book.bookInCatalog
        },
        async updateServerDataDeleteFromCatalog(){
            const request = await fetch(`${this.urlServer}/${this.book.id}`, {
            method: 'PATCH',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({"bookInCatalog": false})
            })
            //const result2 = await request.json()
        },
        async updateServerDataDeleteFromBasket(){
            const request = await fetch(`${this.urlServer}/${this.book.id}`, {
            method: 'PATCH',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({"bookInCatalog": true})
            })
            //const result2 = await request.json()
        },
    },
    methods:{
        addBookToBasket(){
            this.$store.commit('addBookToBasket', this.book)
            this.$store.commit('setBookInBasket', this.book)
        },
        deleteBookFromBasket(){
            this.$store.commit('deleteBookFromBasket', this.book)
            this.$store.commit('setBookInCatalog', this.book)

        },
        openBookForRedaction(){
            this.$store.commit('setBookForRedaction', this.book)
            this.$store.commit('showRedactionDialog')
        }
    }
};
</script>
  