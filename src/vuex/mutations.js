import store from "./store";

const mutations = {
    authorMutations(state, data) {
        // console.log(state)
        // console.log(data)
        state.author = data
    }
}

export default mutations