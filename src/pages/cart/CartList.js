import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import CartItem from './CartItem'

const CartList = () => {
    const { cartItems } = useContext(CartContext)

    return (
        <div className="row">
            <div className="col-12 col-md-9">
                <div className="row items-header py-3 d-none d-md-flex">
                    <div className="col-md-6 text-left nagl">Your Items</div>
                    <div className="col-md-2 text-center">Quantity</div>
                    <div className="col-md-2 text-center nagl">Inc/Dcs</div>
                    <div className="col-md-2 text-center nagl">Remove</div>
                </div>

                {cartItems.map(item => (
                    <CartItem key={item.id} item={item} />))
                }
            </div>
            <div className="col-12 col-md-3">
                <div className="card">
                    <div className="card-body">
                        <h4>Total Products</h4>
                        <div>
                            {
                                cartItems.reduce((prev, curr) => prev + curr.quantity, 0)
                            }
                        </div>
                        <h5>Total price</h5>
                        <div>
                            ${
                                cartItems.map(prod => prod.quantity * prod.price).reduce((prev, curr) => prev + curr, 0).toFixed(2)
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartList