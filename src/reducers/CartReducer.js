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
                cartItems: newCartItems
            }
        case REMOVE_PRODUCT:

            return {
                ...state,
                cartItems: state.cartItems.filter(item => item.id !== action.payload)
            }

        case INCREASE:
            const newCartItemsInc = [...state.cartItems]
            const index = newCartItemsInc.findIndex(item => item.id === action.payload)
            const newItem = { ...newCartItemsInc[index] }
            newItem.quantity++

            newCartItemsInc[index] = newItem
            // console.log("start state")
            // console.log(state.cartItems)
            // console.log("end state")
            // console.log("start newState")
            // console.log(newCartItemsInc)
            // console.log("end newState")

            return {
                ...state,
                cartItems: newCartItemsInc
            }

        case DECREASE:
            return {

            }
        default:
            return state
    }
}