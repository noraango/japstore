import React from 'react'
import { Route } from 'react-router'
import Order from "../layout/Order"



export default function Order(prop) {
    return (
        <div>
            <Route exact path={`${prop.match.path}`} component={List} />      
         
          

        </div>
    )
}