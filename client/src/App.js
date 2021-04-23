import React, { useEffect, useState } from 'react';
import { MuiThemeProvider } from '@material-ui/core';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { theme } from './themes/theme';
import Signup from './pages/signup';
import Signin from './pages/signin';
import Dashboard from './pages/Dashboard';
// import Home from './pages/TempHome';
import Home from "./pages/Home";
import Profile from './pages/Profile';

import './App.css';

function App() {
	return (
		<MuiThemeProvider theme={theme}>
			<BrowserRouter>
				<Switch>
					<Route exact path="/" component={Home} />
					<Route exact path="/profile" component={Profile} />
					<Route exact path="/signin" component={Signin} />
					<Route exact path="/signup" component={Signup} />
					<Route exact path="/dashboard" component={Dashboard} />
				</Switch>
			</BrowserRouter>
		</MuiThemeProvider>
	);
}

export default App;
