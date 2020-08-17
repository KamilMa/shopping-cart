export const totalProducts = cartItems => {
    localStorage.setItem('cart', JSON.stringify(cartItems.length > 0 ? cartItems : []))
    let total = cartItems.reduce((prev, curr) => prev + curr.quantity, 0)
    return { total }
}

export const addProductToCart = (product, currentState) => {
    const newCartItems = [...currentState.cartItems]

    if (!newCartItems.find(item => item.id === product.id)) {
        newCartItems.push({
            ...product,
            quantity: 1
        })
    }

    return {
        ...currentState,
        ...totalProducts(newCartItems),
        cartItems: newCartItems
    }
}

export const removeProductFromCart = (productId, currentState) => {
    const cartItems = currentState.cartItems.filter(item => item.id !== productId)
    return {
        ...currentState,
        ...totalProducts(cartItems),
        cartItems
    }
}

export const increaseQuantity = (productId, currentState) => {
    const newCartItems = [...currentState.cartItems]
    const index = newCartItems.findIndex(item => item.id === productId)
    const newItem = { ...newCartItems[index] }
    newItem.quantity++
    newCartItems[index] = newItem

    return {
        ...currentState,
        ...totalProducts(newCartItems),
        cartItems: newCartItems
    }
}

export const decreaseQuantity = (productId, currentState) => {
    const newCartItems = [...currentState.cartItems]
    const index = newCartItems.findIndex(item => item.id === productId)
    const newItem = { ...newCartItems[index] }
    if (newItem.quantity <= 0) {
        newItem.quantity = 0
    } else {
        newItem.quantity--
    }
    newCartItems[index] = newItem

    return {
        ...currentState,
        ...totalProducts(newCartItems),
        cartItems: newCartItems
    }
}