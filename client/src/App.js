import React, { useContext, useState, useEffect } from "react";
import { MuiThemeProvider } from "@material-ui/core";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { theme } from "./themes/theme";
import Signup from "./pages/signup";
import Signin from "./pages/signin";
import Dashboard from './pages/Dashboard';
import FAQ from './pages/FAQ';
import Blog from './pages/Blog';
import Profile from './pages/Profile';
import axios from 'axios';
import ProtectedRoute from './ProtectedRoute';
import { UserProvider } from './context/UserContext';
import { AuthContext } from './context/AuthContext';

import "./App.css";

function App() {
  const [authorized, setAuthorized] = useContext(AuthContext);


  useEffect(() => {
    axios.get('/api/JWT')
      .then(() => {
        setAuthorized(true)
      })
      .catch((err) => {
        console.log(err)
        setAuthorized(false)
      })
  })

  return (!authorized ?
    <MuiThemeProvider theme={theme}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/signup" component={Signup} />
          <Route component={Signin} />
        </Switch>
      </BrowserRouter>
    </MuiThemeProvider>
    :
    <MuiThemeProvider theme={theme}>
      <UserProvider>
        <BrowserRouter>
          <Switch>
            <ProtectedRoute isAuthenticated={authorized} exact path={["/home", "/", "/dashboard"]} component={Dashboard} />
            <ProtectedRoute isAuthenticated={authorized} path="/faq" component={FAQ} />
            <ProtectedRoute isAuthenticated={authorized} path="/blog" component={Blog} />
            <ProtectedRoute isAuthenticated={authorized} path="/profile" component={Profile} />
          </Switch>
        </BrowserRouter>
      </UserProvider>
    </MuiThemeProvider>
  );
}

export default App;
