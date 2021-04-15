import React from "react";
import { MuiThemeProvider } from "@material-ui/core";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { theme } from "./themes/theme";
import Signup from "./pages/signup";
import Signin from "./pages/signin";

import "./App.css";

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Signup} />
          <Route path="/signin" component={Signin} />
        </Switch>
      </BrowserRouter>
    </MuiThemeProvider>
  );
}

export default App;
