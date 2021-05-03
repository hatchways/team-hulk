import React, { useState, useEffect, useRef, useContext } from 'react';
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
import Home from './pages/HomePage'
import { AuthContext } from './context/AuthContext';
import axios from 'axios';
import "./App.css";

function App() {
	const [navbarHeight, setHeightnavbarHieght] = useState(0);
	const ref = useRef();
  const { isAuthenticated, setIsAuthenticated } = useContext(AuthContext);

	useEffect(() => {
		ref.current && setHeightnavbarHieght(ref.current.clientHeight);
	}, [ref]);

  useEffect(() => {
    axios.get('/api/JWT')
      .then(() => {
        setIsAuthenticated(true)
      })
      .catch((err) => {
        console.log(err)
        setIsAuthenticated(false)
      })
  }, [setIsAuthenticated]
  )

  return (!isAuthenticated ?
    <MuiThemeProvider theme={theme}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/signup" component={Signup} />
          <Route path="/signin" component={Signin} />
        </Switch>
      </BrowserRouter>
    </MuiThemeProvider>
    :
		<MuiThemeProvider theme={theme}>
			<BrowserRouter>
				<Navbar ref={ref} />
				<Switch>
					<Route exact path="/" component={Home} />
					<Route path="/profile" component={Profile} />
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