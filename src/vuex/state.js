import { TEST } from './mutations-type'
const state = {
    author: 'Wise Wrong',
    token: false,
    persons: [
        {
            id: 1,
            name: '小明'
        },
        {
            id: 2,
            name: '小红'
        }
    ]
}
state[TEST] = null

export default state
