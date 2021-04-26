import { BrowserRouter , Switch, Route } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Dashboard from './Dashboard';
import FAQ from './FAQ';
import Blog from './Blog';
import Profile from './Profile';
import HomePage from './HomePage'

import { UserProvider } from '../context/UserContext'



const Home = () => {
  return (
    <UserProvider>
      <BrowserRouter>
        <Navbar/>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/dashboard" component={Dashboard}/>
          <Route path="/faq" component={FAQ}/>
          <Route path="/blog" component={Blog}/>
          <Route path="/profile" component={Profile}/>
        </Switch>
      </BrowserRouter>
    </UserProvider>
  );
}

export default Home;