import React from "react";
import { Route } from "react-router-dom";
import List from "./store/List";

export default function Store(prop) {
  return (
    <div>
      <Route exact path={`${prop.match.path}`} component={List} />
    </div>
  );
}
