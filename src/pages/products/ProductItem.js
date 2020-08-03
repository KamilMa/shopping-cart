import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext'

const ProductItem = ({ product }) => {

    const { addToCart, increase, cartItems } = useContext(CartContext)

    const isInCart = (product) => {
        return cartItems.find(item => item.id === product.id)
    }

    return (
        <div className="card mb-lg-1 mb-sm-4">
            <img src={product.image} className="img-fluid" alt="" />
            <div className="card-body">
                <h4 className="cart-title">{product.title}</h4>
                <p className="card-subtitle my-1 text-muted">Size: {product.size.join(" / ")}</p>
                <p className="card-text">{product.description}</p>
                <div className="product-price d-flex justify-content-between align-items-center mt-4">
                    <h5 className="text-success">$ {product.price}</h5>
                    {isInCart(product) ? (<button
                        onClick={() => increase(product.id)}
                        className="btn btn-primary">
                        Add more
                    </button>) : (<button
                        onClick={() => addToCart(product)}
                        className="btn btn-primary">
                        Add to Cart
                    </button>)
                    }
                </div>
            </div>
        </div>
    )
}

export default ProductItem