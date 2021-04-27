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

import './App.css';

function App() {
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
}

export default App;
