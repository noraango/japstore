import React from 'react'
import { Route } from 'react-router'
import Cart from "../layout/Cart/"



export default function Cart(prop) {
    return (
        <div>
            <Route exact path={`${prop.match.path}`} component={List} />
          
        
            <Route exact path={`${prop.match.path}/order`} component={Order} />
          

        </div>
    )
}