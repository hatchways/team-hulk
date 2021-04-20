import React, { createContext, useState} from 'react'

export const AuthContext = createContext()

const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false)

    return (
        <div>
            {
                <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>
                    { children }
                </AuthContext.Provider>
            }
        </div>
    )
}

export default AuthProvider