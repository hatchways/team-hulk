import React, { useState, createContext, useEffect } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

    const [authorized, setAuthorized] = useState(false);

    useEffect(() => {

    }, [])

    return (
        <AuthContext.Provider value={[authorized, setAuthorized]}>
            {children}
        </AuthContext.Provider>
    )
}