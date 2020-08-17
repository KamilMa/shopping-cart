import React, { useContext } from 'react'
import ProductItem from './ProductItem'
import { ProductsContext } from '../../context/ProductsContext'

import { productsGrid } from './Products.module.scss'

const ProductsList = () => {

    const { products } = useContext(ProductsContext)

    return (
        <div className={productsGrid}>
            {
                products.map(product => (
                    <ProductItem key={product.id} product={product} />
                ))
            }
        </div>
    )
}

export default ProductsList