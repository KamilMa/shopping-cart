import React from 'react'
import Header from './Header'
import Footer from './Footer'

import 'bootstrap/dist/css/bootstrap.css'

const Layout = ({ children }) => (
    <div>
        <Header />
        <main className="container">
            {children}
        </main>
        <Footer />
    </div>
)

export default Layout