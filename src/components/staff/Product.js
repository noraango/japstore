import React from "react";
import { Route } from "react-router-dom";
import List from "./product/List";
import Create from "./product/Create";
import Detail from "./product/Detail";
import Edit from "./product/Edit";
export default function Product(prop) {
  return (
    <div>
      <Route exact path={`${prop.match.path}`} component={List} />
      <Route path={`${prop.match.path}/create`} component={Create} />
      <Route path={`${prop.match.path}/detail/:id`} component={Detail} />
      <Route path={`${prop.match.path}/edit/:id`} component={Edit} />
    </div>
  );
}
