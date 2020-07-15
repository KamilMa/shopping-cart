import React from 'react'
import Layout from '../../components/Layout'
// import CartContextProvider from '../../context/CartContext'
import CartList from './CartList'

const Cart = () => (
    // <CartContextProvider>
    <Layout>
        <h4>Cart</h4>
        <CartList />
    </Layout>
    // </CartContextProvider>
)

export default Cart