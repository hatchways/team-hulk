import React, { createContext, useState, useEffect, useContext } from 'react'
import io from 'socket.io-client'
import { AuthContext } from './AuthContext'
import { UserContext } from './UserContext';

export const SocketContext = createContext()

let newSocket;
const CONNECTION_PORT = 'localhost:3001'

const SocketProvider = ({ children }) => {
    const [users, setUsers] = useState([])
    const [currentUsers, setCurrentUsers] = useState(0)
    const [socket, setSocket] = useState(null)
    const { isAuthenticated } = useContext(AuthContext)
    const {user} = useContext(UserContext)

    const setupSocket = () => {
            newSocket = io(CONNECTION_PORT)

            newSocket.on('connect', () => {
                console.log('socket connected!')
                newSocket.emit('username', user);
            })

            newSocket.on('connected', user => {
                setUsers(users => [...users, user]);
                newSocket.on('users', users => {
                    setUsers(users);
                });
              });

            newSocket.on("users", users => {
                setUsers(users);
            });

            newSocket.on('user count', data => {
                setCurrentUsers(data)
            })

            newSocket.on('disconnect', () => {
                setSocket(null)
                setTimeout(setupSocket, 3000)
                console.log('socket disconnected!')
            })

            newSocket.on('disconnected', userId => {
                console.log('dis:', userId)
                setUsers(users => {
                  return users.filter(user => user.id !== userId);
                });
            });

            setSocket(newSocket)
            console.log('socket context setup')
    }

    useEffect(() => {
        if (isAuthenticated && !socket) {
            setupSocket()
        }
    }, [isAuthenticated])

    // useEffect(() => {
    //         setupSocket()
    // }, [])

    return (
        <>
            {
                <SocketContext.Provider value={{ socket, currentUsers, setupSocket, users }}>
                    { children }
                </SocketContext.Provider>
            }
        </>
    )
}

export default SocketProvider