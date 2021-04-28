import React, { useState, createContext, useEffect } from "react";

export const UserContext = createContext();

const upcomingInterviews_initial = [
	{
		date: new Date('May 25, 2020 22:00:00'),
		theme: 'Simple Array Sum',
		id: '123',
		live: true,
	},
	{
		date: new Date('May 27, 2020 14:00:00'),
		theme: 'Diagonal Difference',
		id: '456',
		live: true,
	},
	{
		date: new Date('May 30, 2020 10:00:00'),
		theme: 'Plus Minus',
		id: '789',
		live: false,
	},
	{
		date: new Date('June 01, 2020 17:00:00'),
		theme: 'Time Conversion',
		id: '012',
		live: false,
	},
];

const tempUser = {
    // id: 123,
    // name: 'Jhon Doe',
    email: 'jhondoe@hotmail.com',
    // skills: ['JavaScript', 'React'],
    // yearsOfExp: 1,
    // seniority: 1,
    // interviewLevel: 1
};

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(tempUser);
    const [upcomingInterviews, setUpcomingInterviews] = useState(upcomingInterviews_initial)
    const [WaitingRoomOpen, setWaitingRoomOpen] = useState(false)
    const [newlyCreatedInterview, setNewlyCreatedInterview] = useState(null)

    useEffect(() => {
        // API CALL GOES HERE

        // const tempUser = {
        //     id: 123,
        //     name: 'Jhon Doe',
        //     email: 'jhondoe@hotmail.com',
        //     skills: ['JavaScript', 'React'],
        //     yearsOfExp: 1,
        //     seniority: 1,
        //     interviewLevel: 1
        // };

        setUser(user);
    }, [])

    return(
        <UserContext.Provider value={{
                user,
                setUser,
                upcomingInterviews,
                setUpcomingInterviews,
                WaitingRoomOpen,
                setWaitingRoomOpen,
                newlyCreatedInterview,
                setNewlyCreatedInterview
                }}>
            {children}
        </UserContext.Provider>
    )
}