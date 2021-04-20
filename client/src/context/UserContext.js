import React, { useState, createContext, useEffect } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState({});

    useEffect(() => {
        // API CALL GOES HERE

        const tempUser = {
            id: 123,
            name: 'Jhon Doe',
            email: 'jhondoe@hotmail.com',
            skills: ['JavaScript', 'React'],
            yearsOfExp: 1,
            seniority: 1,
            interviewLevel: 1
        };

        setUser(tempUser);
    }, [])

    return(
        <UserContext.Provider value={[user, setUser]}>
            {children}
        </UserContext.Provider>
    )
}