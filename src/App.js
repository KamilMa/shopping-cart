import React from 'react'
import Routes from './routes'
import CartContextProvider from './context/CartContext'

import './App.css'

function App() {
  return (
    <CartContextProvider>
      <Routes />
    </CartContextProvider>
  )
}

export default App
