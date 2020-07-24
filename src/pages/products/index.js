import React from 'react'
import Layout from '../../components/Layout'
import ProductsList from './ProductsList'
// import ProductsContextProvider from '../../context/CartContext'
import ProductsContextProvider from '../../context/ProductsContext'

const ProductsPage = () => (
    <ProductsContextProvider>
        <Layout>
            <div className="col-12 text-left">
                <h4>Products</h4>
            </div>
            {/* <ProductsContextProvider> */}
            <ProductsList />
            {/* </ProductsContextProvider> */}
        </Layout>
    </ProductsContextProvider>
)

export default ProductsPage