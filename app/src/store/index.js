import Vue from 'vue'
import Vuex from 'vuex'
import articles from './modules/articles';

/*Load Vuex*/
Vue.use(Vuex);

/*Create store*/
export default new Vuex.Store({
    modules: {
        articles,
    }
})

