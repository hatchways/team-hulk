<<<<<<< HEAD
import React from 'react';
import { MuiThemeProvider } from '@material-ui/core';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { theme } from './themes/theme';
import Signup from './pages/signup';
import Signin from './pages/signin';
import Dashboard from './pages/Dashboard';
import Home from './pages/TempHome';
import Interview from './pages/Interview';
import Profile from './pages/Profile';
=======
import React from "react";
import { MuiThemeProvider } from "@material-ui/core";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { theme } from "./themes/theme";
import Signup from "./pages/signup";
import Signin from "./pages/signin";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/TempHome";
import Profile from "./pages/Profile";
>>>>>>> 8a789dfaca1c0180318d0d7b3a70c97d7eaae446

import "./App.css";

function App() {
<<<<<<< HEAD
	return (
		<MuiThemeProvider theme={theme}>
			<BrowserRouter>
				<Switch>
					<Route exact path="/" component={Home} />
					<Route path="/profile" component={Profile} />
					<Route path="/signin" component={Signin} />
					<Route path="/signup" component={Signup} />
					<Route path="/dashboard" component={Dashboard} />
					<Route path="/interview" component={Interview} />
				</Switch>
			</BrowserRouter>
		</MuiThemeProvider>
	);
=======
  return (
    <MuiThemeProvider theme={theme}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/profile" component={Profile} />
          <Route path="/signin" component={Signin} />
          <Route path="/signup" component={Signup} />
          <Route path="/dashboard" component={Dashboard} />
        </Switch>
      </BrowserRouter>
    </MuiThemeProvider>
  );
>>>>>>> 8a789dfaca1c0180318d0d7b3a70c97d7eaae446
}

export default App;
