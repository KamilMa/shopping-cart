import React from 'react'
import { Link } from 'react-router-dom'

import styles from './header.module.scss'

const Header = () => (
    <header>
        <nav>
            <ul className={styles.menu}>
                <li><Link to='/'>Products</Link></li>
                <li><Link to='/cart'>Cart</Link></li>
            </ul>
        </nav>
    </header>
)

export default Header