import store from "./store";
import { AUTHOR, SET_TOKEN } from "./mutations-type";

const mutations = {
    // authorMutations(state, data) {
        // console.log(state)
        // console.log(data)
        // state.author = data
    // },

    [AUTHOR](state, data) {
        state.author = data
    },
    [SET_TOKEN](state, data) {
        state.token = data
    }
}

export default mutations