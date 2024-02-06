import axios from "axios";

export default{
    state:{
        allBooks: [],
        booksInBasket: [],
        booksForRedaction: [],
        urlServer: 'http://localhost:3333/books',
        DialogRedactorVisible: false,
        selectedBook: {},
        bookForRedaction: {}
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
      deleteBookFromBasket(state, payload){
        state.allBooks.push(payload)
        for (var i = state.booksInBasket.length - 1; i >= 0; i--) {
          if (state.booksInBasket[i].id == payload.id) {
            state.booksInBasket.splice(i,1)
          }
        }
      },
      showRedactionDialog(state){
        state.DialogRedactorVisible = true
      },
      hideRedactionDialog(state){
        state.DialogRedactorVisible = false
      },
      setBookForRedaction(state, payload){
        state.bookForRedaction = payload
      },
      setCatalogBooks(state, payload){
        for(let bookIndex = 0; bookIndex < payload.length; bookIndex++){
          if(payload[bookIndex].bookInCatalog === true){
            state.allBooks.push(payload[bookIndex])
          }
          else{
            state.booksInBasket.push(payload[bookIndex])
          }
        }
      },
      setBookInBasket(state, payload){
        payload.bookInCatalog = false
      },
      setBookInCatalog(state, payload){
        payload.bookInCatalog = true
      },
    },
    getters:{
        getAllBooks(state){
          return state.allBooks
        },
        getBooksInBasket(state){
          return state.booksInBasket
        },
        getIsDialogRedactorVisible(state){
          return state.DialogRedactorVisible
        },
        getRedactionBook(state){
          return state.bookForRedaction
        }
    },
    actions:{
        getBooksFromServer(context){
            axios.get('http://localhost:3333/books')
                .then(response => context.commit('setCatalogBooks', response.data))
        },
    }
}