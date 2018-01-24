const actions = {
    actionsTest(data) {
        data.commit('authorMutations', '123')
        console.log(data)
    }
}

export default actions