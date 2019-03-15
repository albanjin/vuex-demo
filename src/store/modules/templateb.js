const state = {
    count: 'qianguangjin'
}
const getters = {
    count(state) {
        return state.count
    }
}
const actions = {
    count({ commit, state }) {
        setTimeout(() => {
            commit('count', 3)
        }, 3000)

    }
}
const mutations = {
    count(state, val) {
        console.log('a', val)
        state.count = val
    }
}
export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}