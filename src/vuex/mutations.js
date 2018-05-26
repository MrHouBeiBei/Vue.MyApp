import store from "./store";
import { AUTHOR, SET_TOKEN, PERSONS } from "./mutations-type";

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
    },
    [PERSONS](state, data) {
        state.persons = data
    }
}

export default mutations