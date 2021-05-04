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
    socket.on('username', username => {
        const user = {
          name: username,
          id: socket.id
        };
        users[socket.id] = user;
        io.emit('connected', user);
        io.emit('users', Object.values(users));
      });

    io.emit('user count', currentUsers)

    socket.on('disconnect', (reason) => {
        --currentUsers
        delete users[socket.id];
        io.emit("disconnected", socket.id);
        io.emit('user count', currentUsers)
        console.log(`user with id of ${socket.id} disconnected.`)
    })
});



module.exports = socketApi;