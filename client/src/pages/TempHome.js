import { useState, useEffect, useRef, useContext } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import Dashboard from './Dashboard';
import FAQ from './FAQ';
import Blog from './Blog';
import Profile from './Profile';
import HomePage from './HomePage'
import Interview from './Interview';
import HomePage from './HomePage'
import Signin from './signin';

const Home = () => {
	const [navbarHeight, setHeightnavbarHieght] = useState(0);
	const ref = useRef();

	useEffect(() => {
		ref.current && setHeightnavbarHieght(ref.current.clientHeight);
	}, [ref]);

	return (
			<BrowserRouter>
				<Navbar ref={ref} />
				<Switch>
					<Route exact path="/" component={HomePage} />
					<Route path="/dashboard" component={Dashboard} />
					<Route path="/faq" component={FAQ} />
					<Route path="/blog" component={Blog} />
					<Route path="/profile" component={Profile} />
					{/* <Route path="/signin" component={Signin} /> */}
					{/* <Route
						exact
						path="/interview/:id"
						render={(props) => (
							<Interview {...props} navHeight={navbarHeight} />
						)}
					/> */}
				</Switch>
			</BrowserRouter>
	);
};

export default Home;
