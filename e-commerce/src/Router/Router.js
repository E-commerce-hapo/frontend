import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from '../pages/Home/Home'
import Product from '../pages/Product/Product'

const Router = () => {
    return(
        <Switch>
            <Route path='/' exact component={() => <Home/> }/>
            <Route path='/product' component={() => <Product/> }/>
        </Switch>
    )
}
export default Router