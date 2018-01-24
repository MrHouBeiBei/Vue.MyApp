import state from "./state";

const getters = {
    changeAuthor: data => {
        return `${state.author} getters测试`
    }
}
export default getters