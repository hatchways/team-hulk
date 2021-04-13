import { Typography } from "@material-ui/core";
import { BrowserRouter , Switch, Route } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Dashboard from './Dashboard';



const Home = () => {
    return (
        <BrowserRouter>
          <Navbar/>
          <Switch>
            <Route path="/dashboard" component={Dashboard}/>
          </Switch>
        </BrowserRouter>
    );
}

export default Home;