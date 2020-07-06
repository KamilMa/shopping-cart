import React, { useContext } from 'react'
import ProductItem from './ProductItem'
import { ProductsContext } from '../../context/ProductsContext'

import styles from './ProductsList.module.scss'

const ProductsList = () => {

    const { products } = useContext(ProductsContext)

    return (
        <div className={styles.products}>
            {console.log(styles.products)}
            {
                products.map(product => (
                    <ProductItem key={product.id} product={product} />
                ))
            }
        </div>
    )
}

export default ProductsList