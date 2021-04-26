import React from "react";
import { Route, Redirect } from "react-router-dom";
import Navbar from "./components/layout/Navbar"

const ProtectedRoute = ({ isAuthenticated: isAuthenticated, component: Component, ...rest }) => {

    return (
        <Route
            {...rest}
            render={props => {
                if (isAuthenticated) {
                    return  <div>
                                <Navbar />
                                <Component {...props} />
                            </div>
                } else {
                    return <Redirect to={
                        {
                            pathname: "/signin",
                            state: {
                                // Location to indicate where redirect came from
                                from: props.location
                            }
                        }
                    } />
                }
            }}
        />
    );
};

export default ProtectedRoute