import React from 'react'

const ProductItem = ({ product }) => (
    <div>
        <h3>{product.title}</h3>
        <p>{product.price}</p>
    </div>
)

export default ProductItem