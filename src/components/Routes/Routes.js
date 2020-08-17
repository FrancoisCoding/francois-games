import React from "react";
import { Switch, Route } from "react-router-dom";
import ProductList from "../Product/ProductList";
import DetailsInfo from "../Details/DetailsInfo";
import Contact from "../Contact/Contact";
import Default from "../Default/Default";

const Routes = ({ buttonClick }) => {
  return (
    <>
      <Switch>
        <Route
          exact
          path="/"
          render={() => <ProductList screenHandler={() => buttonClick()} />}
        />
        <Route
          path="/details"
          render={() => <DetailsInfo screenHandler={() => buttonClick()} />}
        />
        <Route path="/contact" component={Contact} />
        <Route component={Default} />
      </Switch>
    </>
  );
};

export default Routes;
