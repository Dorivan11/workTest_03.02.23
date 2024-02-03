import axios from "axios";
// import massBooks from '@/pictures/firstBooks'

export default{
    state:{
        allBooks: [],
        booksInBasket: [],
        urlServer: 'http://localhost:3333/books',
        // bookName: '',
        // bookSkin: '',
        // bookStyle: '',
        // bookAutor: '',
        // bookYear: 0,
        // bookPrice: 0,
        selectedBook: {}
    },
    mutations:{
      addBookToBasket(state, payload){
        state.booksInBasket.push(payload)
        for (var i = state.allBooks.length - 1; i >= 0; i--) {
          if (state.allBooks[i].id == payload.id) {
            state.allBooks.splice(i,1)
          }
        }
      },
      setCatalogBooks(state, payload){
        state.allBooks = payload
      },
      setSelectedBook(state, payload){
        state.selectedBook = payload
      },
      setBookInBasket(state, payload){
        payload.bookInCatalog = false
      },
      getBookStatus(state, payload){
        console.log("getBookStatus")
        console.log(payload.bookInCatalog)
        return payload.bookInCatalog
      }
    },
    getters:{
        getAllBooks(state){
          return state.allBooks
        },

        getBooksInBasket(state){
          return state.booksInBasket
        },
        
    },
    actions:{
        getBooksFromServer(context){
            axios.get('http://localhost:3333/books')
                .then(response => context.commit('setCatalogBooks', response.data))
        },
        
    }
}