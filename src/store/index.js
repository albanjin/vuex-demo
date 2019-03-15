import Vue from 'vue'
import Vuex from 'vuex'

import templateA from './modules/templatea'
import templateB from './modules/templateb'
// console.log(templateA)

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        templateA,
        templateB
    }
})