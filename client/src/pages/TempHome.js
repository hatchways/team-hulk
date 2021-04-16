import { BrowserRouter , Switch, Route } from "react-router-dom";
import Navbar from "../components/layout/Navbar"; 
import Dashboard from './Dashboard';
import FAQ from './FAQ';
import Blog from './Blog';
import Profile from './Profile';
import Interview from './Interview';

import { UserProvider } from '../context/UserContext'



const Home = () => {
  return (
    <UserProvider>
      <BrowserRouter>
        <Navbar/>
        <Switch>
          <Route path="/dashboard" component={Dashboard}/>
          <Route path="/faq" component={FAQ}/>
          <Route path="/blog" component={Blog}/>
          <Route path="/profile" component={Profile}/>
          <Route path="/interview/:id" component={Interview}/>
        </Switch>
      </BrowserRouter>
    </UserProvider>  
  );
}

export default Home;