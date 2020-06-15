import React, { useContext } from 'react'
import ProductItem from './ProductItem'
import { ProductsContext } from '../../context/ProductsContext'

const ProductsList = () => {

    const { products } = useContext(ProductsContext)

    return (
        <div>
            {
                products.map(product => (
                    <ProductItem key={product.id} product={product} />
                ))
            }
        </div>
    )
}

export default ProductsList