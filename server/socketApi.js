const cookieParser = require("cookie-parser");
var socket = require('socket.io');
var io = socket({
    cors: {
      origin: "http://localhost:3000"
    }
 });

var socketApi = {};

socketApi.io = io;

const users = {};
let currentUsers = 0

io.on('connection', (socket) => {
    console.log('A user connected with socket id: ', socket.id);
    ++currentUsers
    socket.on('username', user => {
        users[user.id] = user;
        socket.userId = user.id
        io.emit('connected', user);
        io.emit('users', Object.values(users));
        console.log('users on connect:',users)
      });

    io.emit('user count', currentUsers)

    socket.on('disconnect', (reason) => {
        --currentUsers
        console.log('users on disconnect before delete:',users)
        delete users[socket.userId];
        io.emit("disconnected", socket.userId);
        io.emit('user count', currentUsers)
        console.log('users on disconnect afetr delete:',users)
        console.log(`user with id of ${socket.userId} disconnected.`)
    })
});



module.exports = socketApi;