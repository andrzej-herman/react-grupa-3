import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import LoginPage from "./LoginPage";
import Shop from "./Shop";
import MainPage from "./MainPage";
import PrivateRoute from "./PrivateRoute";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route exact path="/login" component={LoginPage} />
        <PrivateRoute exact path="/shop" component={Shop} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
