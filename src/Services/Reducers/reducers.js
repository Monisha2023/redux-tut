import { Add_To_Cart, Remove_To_Cart } from '../Constants';
const initialState = {
    cartData: []
}
export default function cartItems(state = [], action) {
    switch (action.type) {
        case Add_To_Cart:
            console.warn("reducer", action)
            return [
                ...state,
                {cartData: action.data}
            ]
            case Remove_To_Cart:
                console.warn("reducer", action)
                state.pop();
                return [
                    ...state
                ]
    

        default:
            return state


    }
}