import React, { createContext, useState, useEffect } from 'react'
import io from 'socket.io-client'

export const SocketContext = createContext()

let newSocket;
const CONNECTION_PORT = 'localhost:3001'

const SocketProvider = ({ children }) => {
    const [currentUsers, setCurrentUsers] = useState(0)
    const [socket, setSocket] = useState(null)


    const setupSocket = () => {
        if (!socket) {
            newSocket = io(CONNECTION_PORT)

            newSocket.on('connect', () => {
                console.log('socket connected!')
            })

            newSocket.on('disconnect', () => {
                setSocket(null)
                setTimeout(setupSocket, 3000)
                console.log('socket disconnected!')
            })
            setSocket(newSocket)
        }
    }

    useEffect(() => {
        if (socket) {
            socket.on('user count', data => {
                setCurrentUsers(data)
            })
        }
    })

    return (
        <div>
            {
                <SocketContext.Provider value={{ currentUsers, setupSocket }}>
                    { children }
                </SocketContext.Provider>
            }
        </div>
    )
}

export default SocketProvider