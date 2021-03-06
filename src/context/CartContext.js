import React, { createContext, useReducer } from 'react'
import { CartReducer } from '../reducers/CartReducer'
import { ADD_PRODUCT, REMOVE_PRODUCT, INCREASE, DECREASE } from '../reducers/actionTypes'

export const CartContext = createContext()

const cartItems = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : []
const total = cartItems.reduce((prev, curr) => prev + curr.quantity, 0)

const initialState = { cartItems, total }

const CartContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(CartReducer, initialState)

    const addToCart = payload => {
        dispatch({ type: ADD_PRODUCT, payload })
    }

    const removeFromCart = payload => {
        dispatch({ type: REMOVE_PRODUCT, payload })
    }

    const increase = payload => {
        dispatch({ type: INCREASE, payload })
    }

    const decrease = payload => {
        dispatch({ type: DECREASE, payload })
    }

    const contextValue = {
        addToCart,
        removeFromCart,
        increase,
        decrease,
        ...state
    }

    return (
        <CartContext.Provider value={contextValue}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider