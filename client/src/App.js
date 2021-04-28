import React, { useState, useEffect, useRef } from 'react';
import { MuiThemeProvider } from '@material-ui/core';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { theme } from './themes/theme';
import Signup from './pages/signup';
import Signin from './pages/signin';
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';
import Interview from './pages/Interview';
import Navbar from './components/layout/Navbar';
import FAQ from './pages/FAQ'
import Blog from './pages/Blog'
import HomePage from './pages/HomePage'


import "./App.css";

function App() {
	const [navbarHeight, setHeightnavbarHieght] = useState(0);
	const ref = useRef();

	useEffect(() => {
		ref.current && setHeightnavbarHieght(ref.current.clientHeight);
	}, [ref]);

	return (
		<MuiThemeProvider theme={theme}>
			<BrowserRouter>
				<Navbar ref={ref} />
				<Switch>
					<Route exact path="/" component={HomePage} />
					<Route path="/profile" component={Profile} />
					<Route path="/signin" component={Signin} />
					<Route path="/signup" component={Signup} />
					<Route path="/dashboard" component={Dashboard} />
					<Route
						path="/interview/:id"
						render={(props) => (
							<Interview {...props} navHeight={navbarHeight} />
						)}
					/>
					<Route path="/faq" component={FAQ} />
					<Route path="/blog" component={Blog} />
				</Switch>
			</BrowserRouter>
		</MuiThemeProvider>
	);
}

export default App;
