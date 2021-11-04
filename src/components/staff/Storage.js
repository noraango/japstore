import React from "react";
import { Route } from "react-router-dom";
import List from "./storage/List";

export default function Storage(prop) {
  return (
    <div>
      <Route exact path={`${prop.match.path}`} component={List} />

    </div>
  );
}
