const cookieParser = require("cookie-parser");
var socket = require('socket.io');
var io = socket({
    cors: {
      origin: "http://localhost:3000"
    },
    cookie: {
        name: "test",
        httpOnly: false,
        path: "/"
    }
 });

var socketApi = {};

socketApi.io = io;

let currentUsers = 0


// io.use((socket, next) => {
    // var handshakeData = socket.request;
//     var handshake = socket.handshake;
//     if (handshake.headers.cookie) {
//         var str = handshake.headers.cookie;
//         next();
//     } else {
//         next(new Error('Missing Cookies'));
//     }
// })

io.on('connection', (socket) => {
    console.log('A user connected with socket id: ', socket.id);
    ++currentUsers

    // var cookief = socket.handshake.headers.cookie;
    // var cookies = cookieParser(socket.handshake.headers.cookie);
    // console.log('cookie:', socket.handshake.headers.cookie)
    // console.log('cookie:', socket.handshake.headers.cookie || socket.request.headers.cookie)

    io.emit('user count', currentUsers)

    socket.on('disconnect', () => {
        --currentUsers
        console.log('USER DISCONNECTED')
        io.emit('user count', currentUsers)
    })
});



module.exports = socketApi;