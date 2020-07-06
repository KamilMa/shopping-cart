import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext'

const ProductItem = ({ product }) => {

    const { addToCart } = useContext(CartContext)

    return (
        <div className="card">
            <img src={product.image} className="img-fluid" alt="" />
            <div className="card-body">
                <h4 className="cart-title">{product.title}</h4>
                <h6 className="card-subtitle my-1 text-muted">Size: {product.size}L</h6>
                <p className="card-text">{product.description}</p>
                <div className="product-price d-flex justify-content-between align-items-center mt-4">
                    <h5 className="text-success">$ {product.price}</h5>
                    <button
                        onClick={() => addToCart(product)}
                        className="btn btn-primary">Add to card</button>
                </div>
            </div>
        </div>
    )
}

export default ProductItem