import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../context/CartContext'

import styles from './header.module.scss'

const Header = () => {
    const { cartItems, total } = useContext(CartContext)

    return (
        <header>
            <div className="container">
                <div className="row pt-3">
                    <div className="col-4"></div>
                    <div className="col-4 d-flex justify-content-center align-items-center">
                        <nav className="d-flex align-items-center">
                            <ul className={styles.menu}>
                                <li><Link to='/'>Products</Link></li>
                                <li><Link to='/cart'>Cart</Link></li>
                            </ul>
                        </nav>
                    </div>
                    <div className="col-4 text-right">
                        <Link to='/cart'>
                            <i class="fas fa-shopping-cart"></i>
                            <span>({total})</span>
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header