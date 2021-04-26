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

  // The following code should set the authorized context to true before the return is rendered, so that the ProtectedRoutes function properly.
  // It is setting authorized in AuthProvider as true, but it is initialized as false, and the ProtectedRoutes read it as false first
  useEffect(() => {
    axios.get('/api/JWT',
      setAuthorized(true)
    )
  }, [AuthContext])

  return (
    <MuiThemeProvider theme={theme}>
      <UserProvider>
        <BrowserRouter>
          <Switch>
            <Route path="/signin" component={Signin} />
            <Route path="/signup" component={Signup} />
            <ProtectedRoute isAuthenticated={authorized} exact path="/" component={Dashboard} />
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
