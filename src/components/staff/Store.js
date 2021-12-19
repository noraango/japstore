import React from "react";
import { Route } from "react-router-dom";
import Detail from "./store/Detail";
import List from "./store/List";

export default function Store(prop) {
  return (
    <div>
      <Route exact path={`${prop.match.path}`} component={List} />
      <Route path={`${prop.match.path}/:storeId`} component={Detail} />
    </div>
  );
}
