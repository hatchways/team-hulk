import React, { useContext } from 'react'
import { SocketContext } from '../context/SocketContext'
import { AuthContext } from '../context/AuthContext'
import { UserContext } from '../context/UserContext'

function Home() {
    const { currentUsers, users } = useContext(SocketContext)
    const { isAuthenticated, setIsAuthenticated } = useContext(AuthContext)
    const [ user, setUser ] = useContext(UserContext)

    const login = () => {
        setIsAuthenticated(true)
        const username = prompt("Please enater a username.");
        const newUser = { ...user, id: `id${(new Date()).getTime()}` , name: username}
        setUser(newUser)
    }

    return (
        <div>
            {!isAuthenticated ? <button onClick={login}>login</button> : null}
            {
                !isAuthenticated ? (
                    <h1>To connect to the socket, please log in</h1>
                ) : (
                    <>
                        <h1>number of users which are currently connected: { currentUsers }</h1>
                        <div>List of the users connected:</div>
                        <ul>
                            {
                                users.map(user => (<li key={user.id}>{ user.name }</li>))
                            }
                        </ul>
                    </>
                )
            }
        </div>
    )
}

export default Home