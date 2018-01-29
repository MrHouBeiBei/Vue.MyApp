import store from "./store";
import {AUTHOR} from "./mutations-type";

const mutations = {
    // authorMutations(state, data) {
        // console.log(state)
        // console.log(data)
        // state.author = data
    // },

    [AUTHOR](state, data) {
        state.author = data
    }
}

export default mutations