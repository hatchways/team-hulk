<<<<<<< HEAD
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import SocketProvider from "./context/SocketContext";
import AuthProvider from "./context/AuthContext";

ReactDOM.render(
  <AuthProvider>
    <SocketProvider>
      <App />
    </SocketProvider>
  </AuthProvider>,
  document.getElementById("root")
);
=======
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import SocketProvider from './context/SocketContext'
import AuthProvider from './context/AuthContext'

ReactDOM.render(
    <AuthProvider>
        <SocketProvider>
            <App />
        </SocketProvider>
    </AuthProvider>,
    document.getElementById('root'));
>>>>>>> 94a3b3a7b53dc84c757cfad3a706fccb3cf83124

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
