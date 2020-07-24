import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import CartItem from './CartItem'

const CartList = () => {
    const { cartItems } = useContext(CartContext)

    return (
        <div className="row">
            <div className="col-12 col-md-9">
                <div className="card">
                    <div className="card-body">
                        <div className="d-flex flex-row align-items-center">
                            <div className="col-12 col-md-2 nagl">

                            </div>
                            <div className="col-12 col-md-4 text-center nagl">
                                Product
                    </div>
                            <div className="col-12 col-md-2 text-center nagl">
                                Quantity
                    </div>
                            <div className="col-12 col-md-2 text-center nagl">
                                Inc/Dcs
                    </div>
                            <div className="col-12 col-md-2 text-center nagl">
                                Remove
                    </div>
                        </div>
                    </div>
                </div>
                {cartItems.map(item => (
                    <CartItem key={item.id} item={item} />))
                }
                {console.log(cartItems)}
            </div>
            <div className="col-12 col-md-3">
                <div className="card">
                    <div className="card-body">
                        <h4>Total Products</h4>
                        <div className="">
                            {
                                cartItems.reduce((prev, curr) => prev + curr.quantity, 0)
                            }
                        </div>
                        <h5>Total price</h5>
                        <div className="">
                            ${
                                cartItems.map(prod => prod.quantity * prod.price).reduce((prev, curr) => prev + curr, 0)
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartList