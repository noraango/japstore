import React from 'react'
import { Route } from 'react-router'
import Create from './employee/Create'
import List from './employee/List'

export default function Employee(prop) {
    return (
        <div>
            <Route exact path={`${prop.match.path}`} component={List}/>
            <Route exact path={`${prop.match.path}/create`} component={Create}/>
        </div>
    )
}
