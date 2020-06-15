import React from 'react'
import Routes from './routes'
import ProductsContextProvider from './context/ProductsContext'

import './App.css'

function App() {
  return (
    <ProductsContextProvider><Routes /></ProductsContextProvider>
  )
}

export default App
