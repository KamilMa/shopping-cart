import { ADD_PRODUCT, REMOVE_PRODUCT, INCREASE, DECREASE } from './actionTypes'
import { addProductToCart, removeProductFromCart, increaseQuantity, decreaseQuantity } from '../utils/ReduxUtils'


export const CartReducer = (state, action) => {

    switch (action.type) {
        case ADD_PRODUCT:
            return addProductToCart(action.payload, state)

        case REMOVE_PRODUCT:
            return removeProductFromCart(action.payload, state)

        case INCREASE:
            return increaseQuantity(action.payload, state)

        case DECREASE:
            return decreaseQuantity(action.payload, state)

        default:
            return state
    }
}