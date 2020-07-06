import { ADD_PRODUCT, REMOVE_PRODUCT, INCREASE, DECREASE } from './actionTypes'

export const CartReducer = (state, action) => {
    switch (action.type) {
        case ADD_PRODUCT:
            const newCartItems = [...state.cartItems]
            if (!newCartItems.find(item => item.id === action.payload.id)) {
                newCartItems.push({
                    ...action.payload,
                    quantity: 1
                })
            }
            return {
                ...state,
                cartItems: [...newCartItems]
            }
        case REMOVE_PRODUCT:
            return {

            }
        case INCREASE:
            return {

            }
        case DECREASE:
            return {

            }
        default:
            return state
    }
}