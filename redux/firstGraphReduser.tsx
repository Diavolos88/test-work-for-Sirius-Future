const UPDATE = 'UPDATE'

const firstGraphReduser = (state = {update: true, moneyEarly: 0}, action) => {
    switch (action.type) {
        case UPDATE: {
            return {...state, update: !state.update, moneyEarly: action.moneyEarly}
        }
        default:
            return state
    }
}

export const updateFirstAC = (moneyEarly: number): { type: typeof UPDATE, moneyEarly: number } => {
    return {type: UPDATE, moneyEarly: moneyEarly}
}

export default firstGraphReduser