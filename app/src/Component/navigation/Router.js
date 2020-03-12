import {BrowserRouter as AppRouter, Route, Switch, Redirect} from "react-router-dom";
import React from "react";
import RegisterContainer from "../Register/RegisterContainer";
import Header from "../Header";
import LoginContainer from "../Login/LoginContainer";
import '../../styles/styles.scss';


const Router = () => {

  return (<AppRouter>
    <div className="app">
      <Header/>
      {/* <Redirect from="/" to="login"/> */}
      <Switch>
        <Route path="/register">
          <RegisterContainer/>
        </Route>
        <Route path="/login">
          <LoginContainer/>
        </Route>
      </Switch>
    </div>
  </AppRouter>)
};

export default Router
