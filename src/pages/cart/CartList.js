import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import CartItem from './CartItem'

const CartList = () => {
    const { cartItems } = useContext(CartContext)

    return (
        <div className="row">
            <div className="col-12 col-md-9">
                {cartItems.map(item => (
                    <CartItem key={item.id} item={item} />))
                }
            </div>
            <div className="col-12 col-md-3">
                <div className="card">
                    <div className="card-body">
                        <h4>Total Items</h4>
                        <h5>Total price</h5>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default CartList