import React from 'react'
import Routes from './routes'
// import ProductsContextProvider from './context/ProductsContext'
import CartContextProvider from './context/CartContext'

import './App.css'

function App() {
  return (
    // <ProductsContextProvider>
    <CartContextProvider>
      <Routes />
    </CartContextProvider>
    // </ProductsContextProvider>
  )
}

export default App
