import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../context/CartContext'

import styles from './header.module.scss'

const Header = () => {
    const { total } = useContext(CartContext)

    return (
        <header>
            <div className="container">
                <div className="row pt-3">
                    <div className="col-4"></div>
                    <div className="col-4 d-flex justify-content-center align-items-center">
                        <nav className="d-flex align-items-center">
                            <ul className={`d-flex text-primary ${styles.menu}`}>
                                <li><Link className="linkItem" to='/'>Products</Link></li>
                                <li><Link className="linkItem" to='/cart'>Cart</Link></li>
                            </ul>
                        </nav>
                    </div>
                    <div className="col-4 text-right">
                        <Link className={styles.shoppingCartt} to='/cart'>
                            <i className="fas fa-shopping-cart"></i>
                            <span>({total})</span>
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header