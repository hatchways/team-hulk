import { BrowserRouter , Switch, Route } from "react-router-dom";
import Profile from './Profile';



const Home = () => {
    return (
        <BrowserRouter>
          <Switch>
            <Route path="/profile" component={Profile}/>
          </Switch>
        </BrowserRouter>
    );
}

export default Home;