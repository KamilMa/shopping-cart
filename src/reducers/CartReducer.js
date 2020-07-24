import { ADD_PRODUCT, REMOVE_PRODUCT, INCREASE, DECREASE } from './actionTypes'

export const totalProducts = cartItems => {
    let total = cartItems.reduce((prev, curr) => prev + curr.quantity, 0)
    return { total }
}

export const CartReducer = (state, action) => {

    const addProductToCart = (product, state) => {
        const newCartItems = [...state.cartItems]

        if (!newCartItems.find(item => item.id === product.id)) {
            newCartItems.push({
                ...product,
                quantity: 1
            })
        }

        return {
            ...state,
            ...totalProducts(newCartItems),
            cartItems: newCartItems
        }
    }

    const removeProductFromCart = (productId, state) => {
        const cartItems = state.cartItems.filter(item => item.id !== productId)
        return {
            ...state,
            ...totalProducts(cartItems),
            cartItems
        }
    }

    const increaseQuantity = (productId, state) => {
        const newCartItems = [...state.cartItems]
        const index = newCartItems.findIndex(item => item.id === productId)
        const newItem = { ...newCartItems[index] }
        newItem.quantity++
        newCartItems[index] = newItem

        return {
            ...state,
            ...totalProducts(newCartItems),
            cartItems: newCartItems
        }
    }

    const decreaseQuantity = (productId, state) => {
        const newCartItems = [...state.cartItems]
        const index = newCartItems.findIndex(item => item.id === productId)
        const newItem = { ...newCartItems[index] }
        if (newItem.quantity <= 0) {
            newItem.quantity = 0
        } else {
            newItem.quantity--
        }
        newCartItems[index] = newItem

        return {
            ...state,
            ...totalProducts(newCartItems),
            cartItems: newCartItems
        }
    }

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