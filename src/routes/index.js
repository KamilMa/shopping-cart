import React from "react"
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import ProductsPage from '../pages/products'

import Cart from '../pages/cart'

const Routes = () => (
    <Router>
        <Switch>
            <Route exact path="/" component={ProductsPage} />
            <Route path="/cart" component={Cart} />
        </Switch>
    </Router>
)

export default Routes
