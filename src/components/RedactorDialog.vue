<template>
    <v-dialog
        v-model="$store.getters.getIsDialogRedactorVisible"
        max-width="600"
        @click:outside="$store.commit('hideRedactionDialog'), reloadPage()"
    >
        <v-card>
            <v-card-title> Редактирование книги </v-card-title>
            <v-card-text>
                <v-row>
                    <v-col>
                        <p> {{ getRedactionBook.bookName }} </p>
                        <v-img
                            :src="getRedactionBook.bookSkin"
                            height="100"
                            width="100"
                        /> 
                        <p> {{ getRedactionBook.bookStyle }} </p>
                        <p> {{ getRedactionBook.bookAutor }} </p>
                        <p> {{ getRedactionBook.bookYear }} </p>
                        <p> {{ getRedactionBook.bookPrice }} </p>
                        <p> {{ bookNameOnDialog }} </p>
                    </v-col>
                    <v-col>
                        <v-text-field v-model="bookNameOnDialog" placeholder="Enter new book name" />
                        <v-text-field v-model="bookStyleOnDialog" placeholder="Enter new book style" />
                        <v-text-field v-model="bookAutorOnDialog" placeholder="Enter new book autor" />
                        <v-text-field v-model="bookYearOnDialog" placeholder="Enter new book year" />
                        <v-text-field v-model="bookPriceOnDialog" placeholder="Enter new book price"/>
                    </v-col>      
            </v-row>
            <v-btn @click="updateServerDataBookFields()"> Сохранить изменения </v-btn>
            </v-card-text>
        </v-card>
    </v-dialog>
</template>
  
<script>
import { mapGetters } from 'vuex';
export default {
    data: ()=>({
        urlServer: 'http://localhost:3333/books',
        bookNameOnDialog: 'Name',
        bookStyleOnDialog: 'Style',
        bookAutorOnDialog: 'Autor',
        bookYearOnDialog: 'Year',
        bookPriceOnDialog: 'Price',
    }),
    computed:{
        ...mapGetters(['getRedactionBook']),
    },
    methods:{
        async updateServerDataBookFields(){
            const r2 = await fetch(`${this.urlServer}/${this.getRedactionBook.id}`, {
            method: 'PATCH',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                "bookName": this.bookNameOnDialog,
                "bookStyle": this.bookStyleOnDialog,
                "bookAutor": this.bookAutorOnDialog,
                "bookYear": this.bookYearOnDialog,
                "bookPrice": this.bookPriceOnDialog
                })
            })  
        },
        reloadPage(){
            window.location.reload()
        }
    }
};
</script>