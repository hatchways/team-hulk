import React, { useContext, useEffect } from "react";
import { MuiThemeProvider } from "@material-ui/core";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { theme } from "./themes/theme";
import Navbar from './components/layout/Navbar'
import Signup from "./pages/signup";
import Signin from "./pages/signin";
import Dashboard from './pages/Dashboard';
import FAQ from './pages/FAQ';
import Blog from './pages/Blog';
import Profile from './pages/Profile';
import Home from "./pages/TempHome";
import axios from 'axios';
import { UserProvider } from './context/UserContext';
import { AuthContext } from './context/AuthContext';

import "./App.css";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useContext(AuthContext);

  useEffect(() => {
    axios.get('/api/JWT')
      .then(() => {
        setIsAuthenticated(true)
      })
      .catch((err) => {
        console.log(err)
        setIsAuthenticated(false)
      })
  })

  return (!isAuthenticated ?
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
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/faq" component={FAQ} />
            <Route path="/blog" component={Blog} />
            <Route path="/profile" component={Profile} />
          </Switch>
        </BrowserRouter>
      </UserProvider>
    </MuiThemeProvider>
  );
}

export default App;
