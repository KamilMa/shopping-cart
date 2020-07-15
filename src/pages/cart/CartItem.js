import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext'

const CartItem = ({ item }) => {
    const { removeFromCart, increase, decrease } = useContext(CartContext)

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
                        <input type="number" step="1" max="99" min="1" value="1" title="Qty" className="qty" size="4" />
                        <button
                            onClick={() => removeFromCart(item.id)}
                            style={{ fontSize: "12px" }}
                            className="btn btn-danger ml-2">
                            <i class="fa fa-trash fa-xs" aria-hidden="true"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartItem