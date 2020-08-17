import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext'

import { buttonStyle } from './Cart.module.scss'


const CartItem = ({ item }) => {
    const { removeFromCart, increase, decrease } = useContext(CartContext)


    return (
        <div className="row item-wrapper py-3 my-3 my-md-2">
            <div className="col-6 col-md-2 mb-4 mb-md-0 text-center">
                <img src={item.image} className="img-fluid" alt="product" />
            </div>
            <div className="col-6 col-md-4 d-md-flex flex-column justify-content-center">
                <h4 className="product-name text-left">{item.title}</h4>
                <p className="text-left">{item.description}</p>
            </div>
            <div className="col-4 col-md-2 text-center d-md-flex item-quantity align-items-center justify-content-around">
                <span className="d-block d-md-none">Quantity</span>
                <h6 className="d-block">{item.quantity} x ${item.price}</h6>
            </div>
            <div className="col-4 col-md-2 text-center item-increase d-md-flex align-items-center justify-content-center">
                <span className="d-block d-md-none">Inc/Dcs</span>
                <button
                    className={`btn btn-outline-success ${buttonStyle}`}
                    onClick={() => increase(item.id)}
                >
                    <i className="fa fa-arrow-up" aria-hidden="true"></i>
                </button>
                <button
                    className={`btn btn-outline-success ${buttonStyle}`}
                    onClick={() => decrease(item.id)}
                >
                    <i className="fa fa-arrow-down" aria-hidden="true"></i>
                </button>
            </div>
            <div className="col-4 col-md-2 text-center item-remove d-md-flex align-items-center justify-content-center">
                <span className="d-block d-md-none">Usuń</span>
                <button
                    className={`btn btn-outline-success ${buttonStyle}`}
                    onClick={() => removeFromCart(item.id)}
                >
                    <i className="far fa-trash-alt" aria-hidden="true"></i>
                </button>
            </div>
        </div>
    )
}

export default CartItem