import { Typography } from "@material-ui/core";
import { BrowserRouter , Switch, Route } from "react-router-dom";
import Navbar from "../components/layout/NavbarTest"; 
import Dashboard from './Dashboard';
import FAQ from './FAQ';
import Blog from './Blog';
import Profile from './Profile';



const Home = () => {
    return (
        <BrowserRouter>
          <Navbar/>
          <Switch>
            <Route path="/dashboard" component={Dashboard}/>
            <Route path="/faq" component={FAQ}/>
            <Route path="/blog" component={Blog}/>
            <Route path="/profile" component={Profile}/>
          </Switch>
        </BrowserRouter>
    );
}

export default Home;