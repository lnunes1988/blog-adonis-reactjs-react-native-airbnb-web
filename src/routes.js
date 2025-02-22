import React, { Fragment } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { ModalContainer } from "react-router-modal";
import "react-router-modal/css/react-router-modal.css";

import { isAuthenticated } from "./services/auth";

import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import App from "./pages/App";
import Home from "./pages/Home";
import Relatorios from "./pages/Relatorios";
import Mybar from "./pages/App/components/menubar";

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isAuthenticated() ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: "/", state: { from: props.location } }} />
      )
    }
  />
);

const Routes = () => (
  <BrowserRouter>
    <Fragment><Mybar/>
      <Switch>
        <Route exact path="/" component={SignIn} />
        <Route path="/signup" component={SignUp} />
        <PrivateRoute path="/app" component={App} />
        <PrivateRoute path="/Home" component={Home} />
        <PrivateRoute path="/Relatorios" component={Relatorios} />
        <Route path="*" component={() => <h1>Page not found</h1>} />
      </Switch>
      <ModalContainer />
    </Fragment>
  </BrowserRouter>
);

export default Routes;
