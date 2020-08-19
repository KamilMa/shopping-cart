import React from "react"
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import ProductsPage from '../pages/products'
import Cart from '../pages/cart'
import NotFound from '../pages/NotFound'

const Routes = () => (
    <Router>
        <Switch>
            <Route exact path="/" component={ProductsPage} />
            <Route path="/cart" component={Cart} />
            <Route path="*" component={NotFound} />
        </Switch>
    </Router>
)

export default Routes
