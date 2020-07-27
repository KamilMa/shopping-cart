import React from 'react'
import Layout from '../../components/Layout'
import ProductsList from './ProductsList'
import ProductsContextProvider from '../../context/ProductsContext'

const ProductsPage = () => (
    <ProductsContextProvider>
        <Layout>
            <div className="col-12 text-left">
                <h4>Products</h4>
            </div>
            <ProductsList />
        </Layout>
    </ProductsContextProvider>
)

export default ProductsPage