const actions = {
    actionsTest(context) {
        context.commit('authorMutations', '123')
        console.log(context)
    },

    //其实actions 还可以简写一下， 因为函数的参数是一个对象，函数中用的是对象中一个方法，我们可以通过对象的解构赋值直接获取到该方法。
    actionsTest2({commit}) { 
        commit('authorMutations', '666')
    }

    //调用
    // this.$store.dispatch("actionsTest2");
    // ...mapActions(["increment","decrement"]),
}

export default actions