import { useState, useEffect, useRef, useContext } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import Dashboard from './Dashboard';
import FAQ from './FAQ';
import Blog from './Blog';
import Profile from './Profile';
import Interview from './Interview';
import HomePage from './HomePage'
// import { SocketContext } from '../context/SocketContext'

// import { UserProvider } from '../context/UserContext';

const Home = () => {
	const [navbarHeight, setHeightnavbarHieght] = useState(0);
	const ref = useRef();
	// const { socket, setupSocket } = useContext(SocketContext)

	useEffect(() => {
		ref.current && setHeightnavbarHieght(ref.current.clientHeight);
	}, [ref]);

	return (
		// <UserProvider>
			<BrowserRouter>
				<Navbar ref={ref} />
				<Switch>
					<Route exact path="/" component={HomePage} />
					<Route exact path="/dashboard" component={Dashboard} />
					<Route exact path="/faq" component={FAQ} />
					<Route exact path="/blog" component={Blog} />
					<Route exact path="/profile" component={Profile} />
					<Route
						exact
						path="/interview/:id"
						render={(props) => (
							<Interview {...props} navHeight={navbarHeight} />
						)}
					/>
				</Switch>
			</BrowserRouter>
		// </UserProvider>
	);
};

export default Home;
