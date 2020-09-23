import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./Home";
import NotFound from "./NotFound";

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="*" component={NotFound} />
    </Switch>
  );
};

export default Routes;
