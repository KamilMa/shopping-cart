import React from "react"
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Products from '../pages/products'
import Cart from '../pages/cart'

const Routes = () => (
    <Router>
        <Switch>
            <Route exact path="/" component={Products} />
            <Route path="/cart" component={Cart} />
        </Switch>
    </Router>
)

export default Routes
