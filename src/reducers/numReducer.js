
const numInitialState = [1, 2, 3, 4, 5]
const numReducer = (state = numInitialState, action) => {
    switch (action.type) {
        case "ADD_ITEM":
            return [...state, action.newItem]
        case "DELETE_ITEM":
            return [state.filter((value, key) => key !== action.index)]
        default:
            return state
    }
}

export default numReducer