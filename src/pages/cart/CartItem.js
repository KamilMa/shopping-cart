import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext'

const CartItem = ({ item }) => {
    const { removeFromCart, increase, decrease } = useContext(CartContext)
    const buttonStyle = { fontSize: "11px", color: "red" }

    return (
        <div className="card">
            <div className="card-body">
                <div className="d-flex flex-row align-items-center">
                    <div className="col-12 col-md-2 text-center">
                        <img src={item.image} className="img-fluid" />
                    </div>
                    <div className="col-12 col-md-4 text-center">
                        <h4 className="product-name">{item.title}</h4>
                    </div>
                    <div className="col-12 col-md-2 text-center">
                        <h6>$26</h6>
                    </div>
                    <div className="col-12 col-md-4 text-center d-flex align-items-center">
                        <h6>Quantity {item.quantity}</h6>
                        <button
                            style={buttonStyle}
                            className="btn btn-danger-outline ml-3"
                            onClick={() => increase(item.id)}
                        >
                            <i class="fa fa-arrow-up" aria-hidden="true"></i>
                        </button>
                        <button
                            style={buttonStyle}
                            className="btn btn-danger-outline"
                            onClick={() => decrease(item.id)}
                        >
                            <i class="fa fa-arrow-down" aria-hidden="true"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartItem