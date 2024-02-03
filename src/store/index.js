import Vue from "vue";
import Vuex from "vuex";
import BookModule from "./BookModule";

Vue.use(Vuex)

export default new Vuex.Store({
    modules:{
        BookModule
    }
})