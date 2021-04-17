import React from "react";
import { MuiThemeProvider } from "@material-ui/core";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { theme } from "./themes/theme";
import Profile from './pages/Profile';

import "./App.css";

function App() {
  return (
    <MuiThemeProvider theme={theme}>
        <BrowserRouter>
          <Switch>
            <Route path="/profile" component={Profile}/>
          </Switch>
        </BrowserRouter>
    </MuiThemeProvider>
  );
}

export default App;
