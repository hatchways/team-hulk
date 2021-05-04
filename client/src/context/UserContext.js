import React, { useState, createContext, useEffect } from "react";

export const UserContext = createContext();

const upcomingInterviews_initial = [
  {
    date: new Date("May 25, 2020 22:00:00"),
    theme: "Simple Array Sum",
    id: "123",
    live: true,
  },
  {
    date: new Date("May 27, 2020 14:00:00"),
    theme: "Diagonal Difference",
    id: "456",
    live: true,
  },
  {
    date: new Date("May 30, 2020 10:00:00"),
    theme: "Plus Minus",
    id: "789",
    live: false,
  },
  {
    date: new Date("June 01, 2020 17:00:00"),
    theme: "Time Conversion",
    id: "012",
    live: false,
  },
];

const tempUser = {
  email: "jhondoe@hotmail.com",
};

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(tempUser);
  const [upcomingInterviews, setUpcomingInterviews] = useState(
    upcomingInterviews_initial
  );
  const [WaitingRoomOpen, setWaitingRoomOpen] = useState(false);
  const [newlyCreatedInterview, setNewlyCreatedInterview] = useState(null);
  const [difficulty, setDifficulty] = useState("");

  useEffect(() => {
    // API CALL GOES HERE
    setUser(user);
  }, [user]);

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        upcomingInterviews,
        setUpcomingInterviews,
        WaitingRoomOpen,
        setWaitingRoomOpen,
        newlyCreatedInterview,
        setNewlyCreatedInterview,
        difficulty,
        setDifficulty,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
