import { useState, useEffect, useRef } from 'react';
import { BrowserRouter , Switch, Route } from "react-router-dom";
import Navbar from "../components/layout/Navbar"; 
import Dashboard from './Dashboard';
import FAQ from './FAQ';
import Blog from './Blog';
import Profile from './Profile';
import Interview from './Interview';

import { UserProvider } from '../context/UserContext'



const Home = () => {
  const [navbarHieght, setHeightnavbarHieght] = useState(0);
  const ref = useRef();

  useEffect(() => {
    ref.current && setHeightnavbarHieght(ref.current.clientHeight);
  },[ref])

  return (
    <UserProvider>
      <BrowserRouter>
        <Navbar ref={ref}/>
        <Switch>
          <Route path="/dashboard" component={Dashboard}/>
          <Route path="/faq" component={FAQ}/>
          <Route path="/blog" component={Blog}/>
          <Route path="/profile" component={Profile}/>
          <Route path="/interview/:id" render={(props) => <Interview {...props} navHeight={navbarHieght}/>}/>
        </Switch>
      </BrowserRouter>
    </UserProvider>  
  );
}

export default Home;