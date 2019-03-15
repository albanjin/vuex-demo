const state = {
    count: 1
}
const getters = {
    count(state) {
        return state.count
    }
}

const mutations = {
    count(state, val) {
        console.log('tag', val)
        state.count = val
    }
}
const actions = {
    count({ commit, state }) {
        commit('count')
    }

}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}