import numReducer from './reducers/numReducer'
import editStatusReducer from './reducers/editStatusReducer'

let redux = require('redux')
// let oldState = {
//     num: [1, 2, 3, 4, 5],
//     editStatus: true
// }
// let reducer1 = (state = oldState, action) => {
//     switch (action.type) {
//         case "CHANGE_EDIT_STATUS":
//             return {
//                 ...state, editStatus: !state.editStatus
//             }
//             case "ADD_ITEM":
//                 return {
//                     ...state, num: [...state.num, action.newItem]
//                 }
//                 case "DELETE_ITEM":
//                     return {
//                         ...state, num: [...state.num.filter((value, key) => key !== action.index)]
//                     }
//                     default:
//                         break;
//     }
//     return state
// }







const allReducers = redux.combineReducers({
    num: numReducer,
    editStatus: editStatusReducer
})

let store1 = redux.createStore(allReducers)

store1.subscribe(() => console.log(store1.getState()))


export default store1