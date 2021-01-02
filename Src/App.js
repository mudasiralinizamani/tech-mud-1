import React, { Component } from "react";
import { render } from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";

// Importing Page Components - Mudasir Ali

// Imporing Main Pages - Mudasir ALi

import HomePage from "./Components/Pages/Home"
import ServicePage from "./Components/Pages/Services"
import ProductsPage from "./Components/Pages/Product"

import Navbar from "./Components/Navbar"

// END


export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Navbar />
        <Switch>
          {/* Main Pages Urls */}
          <Route path="/" exact component={HomePage} />
          <Route path="/services/" component={ServicePage} />
          <Route path="/products/" component={ProductsPage} />
        </Switch>
      </BrowserRouter>
    );
  }
}

const appDiv = document.getElementById("app");

render(<App />, appDiv);
